import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/exit',
      },
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'PerplexityBot',
          'Applebot-Extended',
          'Google-Extended',
          'Anthropic-AI',
          'cohere-ai',
          'omgili',
          'omgilibot',
          'FacebookBot',
          'Diffbot',
          'ChatGPT-User',
          'Bytespider',
          'CCBot',
          'anthropic-ai',
          'Amazonbot'
        ],
        allow: '/',
        disallow: '/exit',
      }
    ],
    sitemap: 'https://xn--wh1bv9k05k4kk.com/sitemap.xml',
  };
}
