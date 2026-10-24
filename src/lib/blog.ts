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
 * GET /public/posts?page= — BE sendiri sudah cache 15 menit dan membersihkan
 * cache-nya setiap kali admin menyimpan/menghapus artikel (lihat
 * PostController::clearPublicPostsCache() di api-bhisakirim), jadi fetch di
 * sini cukup cache pendek (60 detik) - cuma meredam burst trafik, bukan
 * sumber utama staleness. Sebelumnya 15 menit di sini DIGABUNG dengan cache
 * BE yang (saat itu) tidak pernah dibersihkan, jadi artikel yang baru
 * dihapus masih muncul di FE sampai 15-30 menit kemudian.
 */
export async function getBlogPosts(page = 1): Promise<BlogPostPage> {
  const empty = { posts: [], currentPage: 1, lastPage: 1, total: 0 };
  try {
    const res = await fetch(`${API_URL}/public/posts?page=${page}`, {
      next: { revalidate: 60 },
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
 * GET /public/posts/{slug} — sama seperti getBlogPosts(), BE sudah
 * membersihkan cache-nya sendiri saat artikel diubah/dihapus, jadi cukup
 * cache pendek di sini. Null kalau tidak ditemukan.
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${API_URL}/public/posts/${encodeURIComponent(slug)}`,
      { next: { revalidate: 60 } }
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
