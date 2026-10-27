import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import BlogPostGrid from "@/components/BlogPostGrid";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Update Terkini — Blog BhisaKirim",
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

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  // "Update Terkini" = semua kategori KECUALI Panduan (lihat sub menu
  // Panduan di Navbar, isinya kategori "panduan" saja).
  const { posts, currentPage, lastPage, total } = await getBlogPosts(page, {
    excludeCategory: "panduan",
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding bg-white py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-500">
                <Newspaper className="h-4 w-4" />
                Update Terkini
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

          <BlogPostGrid
            posts={posts}
            currentPage={currentPage}
            lastPage={lastPage}
            total={total}
            basePath="/blog"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
