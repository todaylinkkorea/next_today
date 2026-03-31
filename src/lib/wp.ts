export const WP_API_URL = 'https://wp.xn--wh1bv9k05k4kk.com/wp-json/wp/v2';

// 캐시 TTL: 글 목록 10분, 개별 글 1시간
const POSTS_REVALIDATE = 600;
const POST_REVALIDATE = 3600;

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: any;
}

export async function getPosts(page: number = 1, perPage: number = 20): Promise<WPPost[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?page=${page}&per_page=${perPage}&_fields=id,date,slug,title,excerpt`, {
      next: { revalidate: POSTS_REVALIDATE }
    });
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) {
      console.error('WP API did not return an array:', data);
      return [];
    }
    return data;
  } catch (err) {
    console.error('Error fetching posts:', err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`, {
      next: { revalidate: POST_REVALIDATE }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data[0] : null;
  } catch (err) {
    console.error('Error fetching post by slug:', err);
    return null;
  }
}
