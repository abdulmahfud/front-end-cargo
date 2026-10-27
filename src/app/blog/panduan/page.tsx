import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import BlogPostGrid from "@/components/BlogPostGrid";
import FaqSection from "@/components/FaqSection";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Panduan — Blog BhisaKirim",
  description:
    "Panduan dan tutorial penggunaan layanan BhisaKirim, dari cek ongkir sampai kirim paket.",
};

// force-dynamic: sama seperti /blog, lihat catatan di sana.
export const dynamic = "force-dynamic";

export default async function PanduanPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  // Khusus kategori "panduan" - dikelola admin lewat halaman Kategori Blog
  // di dashboard, filter di sini berdasarkan slug kategori itu.
  const { posts, currentPage, lastPage, total } = await getBlogPosts(page, {
    category: "panduan",
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding bg-white py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-500">
                <BookOpen className="h-4 w-4" />
                Panduan
              </span>
              <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Panduan Menggunakan BhisaKirim
              </h1>
              <p className="text-lg text-gray-600">
                Kumpulan panduan dan tutorial langkah demi langkah untuk
                memaksimalkan layanan BhisaKirim.
              </p>
            </div>
          </AnimatedSection>

          <BlogPostGrid
            posts={posts}
            currentPage={currentPage}
            lastPage={lastPage}
            total={total}
            basePath="/blog/panduan"
            emptyMessage="Belum ada panduan."
          />

          <div className="mx-auto mt-20 max-w-3xl border-t border-gray-100 pt-16">
            <FaqSection />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
