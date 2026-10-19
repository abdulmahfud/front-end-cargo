import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import { ArrowLeft, Calendar, Newspaper, Tag, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";
import AnimatedSection from "@/components/AnimatedSection";
import { getBlogPost } from "@/lib/blog";

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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

            {post.category && (
              <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                <Tag className="h-3 w-3" />
                {post.category.name}
              </span>
            )}

            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              {post.title}
            </h1>

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
              // content ditulis admin lewat editor WYSIWYG (lihat DA), tapi
              // endpoint admin tidak men-sanitize HTML-nya - dibersihkan di
              // sini sebelum dirender sebagai HTML.
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.content),
              }}
            />
          </AnimatedSection>
        </div>
      </article>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
