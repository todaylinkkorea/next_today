export const WP_API_URL = 'http://82.153.138.240/wp-json/wp/v2';

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
    const res = await fetch(`${WP_API_URL}/posts?_embed&page=${page}&per_page=${perPage}`, {
      cache: 'no-store'
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
      cache: 'no-store'
    });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data[0] : null;
  } catch (err) {
    console.error('Error fetching post by slug:', err);
    return null;
  }
}
