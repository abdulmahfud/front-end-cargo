// Blog publik — konsumsi endpoint publik BE, lihat
// docs/be-fe/feature-post-kategori-blog.md di repo api-bhisakirim.

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.bhisakirim.com/api";

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

export interface BlogAuthor {
  id: number;
  name: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: BlogCategory | null;
  user: BlogAuthor | null;
  image_url: string | null;
  content: string;
  created_at: string;
}

interface LaravelPaginator<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

interface PostListApiResponse {
  success: boolean;
  message?: string;
  data: LaravelPaginator<BlogPost>;
}

interface PostDetailApiResponse {
  success: boolean;
  message?: string;
  data: BlogPost | null;
}

export interface BlogPostPage {
  posts: BlogPost[];
  currentPage: number;
  lastPage: number;
  total: number;
}

/**
 * GET /public/posts?page= — BE sendiri sudah cache & membersihkan cache-nya
 * sendiri tiap kali admin menyimpan/mengubah/menghapus artikel (lihat
 * PostController::clearPublicPostsCache() di api-bhisakirim), jadi BE sudah
 * jadi satu-satunya sumber kebenaran soal cache. fetch() di sini sengaja
 * cache: "no-store" (tidak pakai next.revalidate sama sekali) - sebelumnya
 * pernah pakai revalidate 15-30 menit lalu diperpendek ke 60 detik, tapi
 * Vercel/Next.js Data Cache tidak otomatis memperpendek entri yang SUDAH
 * ke-cache dari sebelum perubahan kode (TTL lama tetap berlaku sampai
 * habis sendiri) - akibatnya artikel baru/terhapus bisa tidak kelihatan
 * konsisten tergantung kapan cache lama ditulis. Request langsung ke BE di
 * sini ringan karena BE sendiri sudah cepat (baca dari tabel `cache`).
 */
export async function getBlogPosts(page = 1): Promise<BlogPostPage> {
  const empty = { posts: [], currentPage: 1, lastPage: 1, total: 0 };
  try {
    const res = await fetch(`${API_URL}/public/posts?page=${page}`, {
      cache: "no-store",
    });
    if (!res.ok) return empty;
    const json: PostListApiResponse = await res.json();
    return {
      posts: json.data?.data ?? [],
      currentPage: json.data?.current_page ?? 1,
      lastPage: json.data?.last_page ?? 1,
      total: json.data?.total ?? 0,
    };
  } catch (err) {
    // Fetch gagal total (network) atau respons bukan JSON valid (mis. WAF/
    // proxy menyisipkan halaman HTML) - jangan biarkan ini menjatuhkan
    // seluruh server component jadi error 500, cukup tampilkan kosong.
    console.error("getBlogPosts failed:", err);
    return empty;
  }
}

/**
 * GET /public/posts/{slug} — sama seperti getBlogPosts(), no-store, BE
 * adalah satu-satunya sumber kebenaran soal cache. Null kalau tidak
 * ditemukan.
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${API_URL}/public/posts/${encodeURIComponent(slug)}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const json: PostDetailApiResponse = await res.json();
    return json.success ? json.data : null;
  } catch (err) {
    // Sama seperti getBlogPosts() - kegagalan di sini sebelumnya tidak
    // tertangkap dan menjatuhkan halaman detail blog jadi error 500 (lihat
    // laporan: /blog/{slug} selalu 500 di production meski BE sehat dan
    // build lokal normal). Dengan try/catch, kegagalan apa pun berujung ke
    // notFound() (404 biasa) di halaman, bukan crash.
    console.error(`getBlogPost(${slug}) failed:`, err);
    return null;
  }
}
