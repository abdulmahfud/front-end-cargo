import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import sanitizeHtml from "sanitize-html";
import { ArrowLeft, Calendar, Newspaper, Tag, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { getBlogPost } from "@/lib/blog";

// Sebelumnya pakai isomorphic-dompurify (butuh jsdom) - itu akar penyebab
// /blog/[slug] SELALU 500 di production (bahkan untuk slug yang tidak ada
// sama sekali, karena modulnya di-import statis di atas sehingga gagal
// saat inisialisasi, sebelum kode apa pun di file ini sempat jalan - try/
// catch di sekitar pemanggilannya tidak membantu). sanitize-html murni JS
// tanpa emulasi DOM, aman di runtime serverless.
const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    "p", "br", "strong", "b", "em", "i", "u", "s", "strike",
    "a", "ul", "ol", "li", "blockquote",
    "h1", "h2", "h3", "h4", "h5", "h6",
    "img", "span", "div",
  ],
  allowedAttributes: {
    a: ["href", "target", "rel"],
    // style wajib diizinkan di sini - editor TipTap (DA) menyimpan ukuran
    // & perataan gambar sebagai style inline (width/float/margin/display),
    // lihat ResizableImage di RichTextEditor.tsx. allowedStyles di bawah
    // membatasi hanya properti itu yang lolos, bukan style apa pun.
    img: ["src", "alt", "width", "height", "style"],
  },
  allowedStyles: {
    img: {
      width: [/^\d+(\.\d+)?(%|px)$/],
      float: [/^(left|right)$/],
      display: [/^block$/],
      // 4 nilai margin (top right bottom left) - tiap nilai boleh "0" polos
      // atau angka+satuan (match persis string yang dihasilkan ResizableImage
      // di RichTextEditor.tsx, mis. "0 1rem 1rem 0").
      margin: [
        /^(0|[\d.]+(px|rem|em))(\s+(0|[\d.]+(px|rem|em))){3}$/,
      ],
      "margin-left": [/^(auto|[\d.]+(px|rem|em))$/],
      "margin-right": [/^(auto|[\d.]+(px|rem|em))$/],
    },
  },
};

/**
 * content ditulis admin lewat editor WYSIWYG (lihat DA), tapi endpoint
 * admin tidak men-sanitize HTML-nya - dibersihkan di sini sebelum
 * dirender sebagai HTML.
 */
function sanitizeContent(html: string): string {
  try {
    return sanitizeHtml(html, SANITIZE_OPTIONS);
  } catch (err) {
    console.error("sanitizeHtml failed:", err);
    return "";
  }
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const FALLBACK_METADATA: Metadata = { title: "Blog — BhisaKirim" };

// force-dynamic: sama seperti di app/blog/page.tsx - pastikan halaman ini
// selalu di-render ulang di server, termasuk lewat navigasi <Link>
// client-side, bukan hanya cache: "no-store" di getBlogPost() saja.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // generateMetadata() berjalan terpisah dari komponen halaman di bawah -
  // kegagalan di sini (sebelum ini tidak dibungkus apa pun) menjatuhkan
  // SELURUH route jadi error 500, bahkan untuk slug yang valid maupun yang
  // tidak ada sama sekali (lihat laporan: /blog/{slug} selalu 500 di
  // production meski notFound() di komponen halaman tidak pernah tersentuh
  // untuk kasus itu). /blog (list) tidak kena karena pakai `export const
  // metadata` statis, bukan generateMetadata() async seperti di sini.
  try {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) return { title: "Artikel tidak ditemukan — BhisaKirim" };

    const description = post.content.slice(0, 160);
    return {
      title: `${post.title} — Blog BhisaKirim`,
      description,
      openGraph: {
        title: post.title,
        description,
        images: post.image_url ? [{ url: post.image_url }] : undefined,
        type: "article",
      },
    };
  } catch (err) {
    console.error("generateMetadata(/blog/[slug]) failed:", err);
    return FALLBACK_METADATA;
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <article className="section-padding bg-white py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <AnimatedSection>
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Blog
            </Link>

            <h1 className="mb-3 text-3xl font-bold text-gray-800 md:text-4xl">
              {post.title}
            </h1>

            {post.category && (
              <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                <Tag className="h-3 w-3" />
                {post.category.name}
              </span>
            )}

            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-gray-400">
              {post.user && (
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.user.name}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.created_at)}
              </span>
            </div>

            {post.image_url ? (
              <div className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-96">
                <Image
                  src={post.image_url}
                  alt={post.title}
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="mb-8 flex h-48 items-center justify-center rounded-2xl bg-gray-100">
                <Newspaper className="h-12 w-12 text-gray-300" />
              </div>
            )}

            <div
              className="prose prose-sm sm:prose-base max-w-none text-gray-700"
              dangerouslySetInnerHTML={{
                __html: sanitizeContent(post.content),
              }}
            />
          </AnimatedSection>
        </div>
      </article>
      <Footer />
    </div>
  );
}
