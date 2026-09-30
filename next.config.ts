import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // WordPress 글 목록 폐기(2026-09-30) — 색인된 /articles 는 메인으로 보낸다.
  async redirects() {
    return [{ source: '/articles', destination: '/', permanent: true }];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.taskagenticai.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/; connect-src 'self' ws: wss: https://plausible.taskagenticai.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
