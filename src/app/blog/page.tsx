import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Newspaper, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — BhisaKirim",
  description:
    "Tips pengiriman, kabar seputar ekspedisi, dan info terbaru dari BhisaKirim.",
};

// force-dynamic: pastikan halaman ini SELALU di-render ulang di server tiap
// dibuka (termasuk lewat navigasi <Link> client-side, bukan cuma full page
// reload) - getBlogPosts() sendiri sudah cache: "no-store", tapi tanpa ini
// Next.js App Router masih bisa menganggap route-nya layak masuk Full Route
// Cache/Router Cache di sisi client. force-dynamic menghilangkan kemungkinan
// itu sepenuhnya, jadi artikel baru selalu langsung kelihatan begitu dibuka.
export const dynamic = "force-dynamic";

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const { posts, currentPage, lastPage, total } = await getBlogPosts(page);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding bg-white py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-500">
                <Newspaper className="h-4 w-4" />
                Blog
              </span>
              <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Tips &amp; Kabar Pengiriman
              </h1>
              <p className="text-lg text-gray-600">
                Artikel seputar pengiriman paket, ekspedisi, dan info terbaru
                dari BhisaKirim.
              </p>
            </div>
          </AnimatedSection>

          {posts.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <Newspaper className="h-12 w-12 text-gray-300" />
              <p className="text-gray-500">Belum ada artikel.</p>
            </div>
          ) : (
            <AnimatedSection delay={100}>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="relative h-48 w-full bg-gray-100">
                      {post.image_url ? (
                        <Image
                          src={post.image_url}
                          alt={post.title}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Newspaper className="h-10 w-10 text-gray-300" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      {post.category && (
                        <span className="inline-flex w-fit items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                          <Tag className="h-3 w-3" />
                          {post.category.name}
                        </span>
                      )}
                      <h2 className="line-clamp-2 text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                        {post.title}
                      </h2>
                      <div className="mt-auto flex items-center gap-1.5 pt-2 text-xs text-gray-400">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(post.created_at)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          )}

          {lastPage > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              {Array.from({ length: lastPage }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={p === 1 ? "/blog" : `/blog?page=${p}`}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    p === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {p}
                </Link>
              ))}
            </div>
          )}

          {total > 0 && (
            <p className="mt-4 text-center text-sm text-gray-400">
              Halaman {currentPage} dari {lastPage} &middot; {total} artikel
            </p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
