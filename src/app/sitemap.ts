import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/wp';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://xn--wh1bv9k05k4kk.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  try {
    const posts = await getPosts(1, 100);
    const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    }));

    return [...staticRoutes, ...postRoutes];
  } catch (err) {
    console.error('Error generating dynamic sitemap:', err);
    return staticRoutes;
  }
}
