import Link from "next/link";
import Image from "next/image";
import { Calendar, Newspaper, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Grid kartu artikel + paginasi - dipakai bareng oleh /blog ("Update
 * Terkini") dan /blog/panduan ("Panduan") supaya tampilannya konsisten,
 * cuma beda sumber data (filter kategori) dan basePath link paginasinya.
 */
export default function BlogPostGrid({
  posts,
  currentPage,
  lastPage,
  total,
  basePath,
  emptyMessage = "Belum ada artikel.",
}: {
  posts: BlogPost[];
  currentPage: number;
  lastPage: number;
  total: number;
  basePath: string;
  emptyMessage?: string;
}) {
  return (
    <>
      {posts.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <Newspaper className="h-12 w-12 text-gray-300" />
          <p className="text-gray-500">{emptyMessage}</p>
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
              href={p === 1 ? basePath : `${basePath}?page=${p}`}
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
    </>
  );
}
