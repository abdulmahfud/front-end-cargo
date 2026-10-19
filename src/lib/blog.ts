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

/** GET /public/posts?page= — cache 15 menit di BE, ikut di-revalidate di sini. */
export async function getBlogPosts(page = 1): Promise<BlogPostPage> {
  const res = await fetch(`${API_URL}/public/posts?page=${page}`, {
    next: { revalidate: 900 },
  });
  if (!res.ok) {
    return { posts: [], currentPage: 1, lastPage: 1, total: 0 };
  }
  const json: PostListApiResponse = await res.json();
  return {
    posts: json.data?.data ?? [],
    currentPage: json.data?.current_page ?? 1,
    lastPage: json.data?.last_page ?? 1,
    total: json.data?.total ?? 0,
  };
}

/** GET /public/posts/{slug} — cache 30 menit di BE. Null kalau tidak ditemukan. */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const res = await fetch(
    `${API_URL}/public/posts/${encodeURIComponent(slug)}`,
    { next: { revalidate: 1800 } }
  );
  if (!res.ok) return null;
  const json: PostDetailApiResponse = await res.json();
  return json.success ? json.data : null;
}
