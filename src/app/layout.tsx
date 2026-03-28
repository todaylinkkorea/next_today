import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PlausibleTracker from '@/components/PlausibleTracker';
import './globals.css';

export const metadata: Metadata = {
  title: '오늘링크 — 주소모아, 주소월드의 새로운 기준 (링크 디렉토리)',
  description:
    '주소모아와 주소월드의 모든 최신 접속 정보를 실시간 통합 안내하는 오늘링크. 주소박스, 주소허브, 주소북 등 유저들이 가장 많이 찾는 대한민국 No.1 링크모음 포털 서비스입니다.',
  keywords: [
    '오늘링크',
    '주소모아',
    '주소월드',
    '링크모음',
    '주소모음',
    '주소가이드',
    '주소박스',
    '인기사이트',
    '바로가기',
  ],
  metadataBase: new URL('https://xn--wh1bv9k05k4kk.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: '오늘링크 — 주소모아, 주소월드의 새로운 기준',
    description: '대한민국 No.1 링크 디렉토리. 최신 주소모아부터 인기 추천 사이트까지 한곳에서.',
    url: 'https://xn--wh1bv9k05k4kk.com',
    siteName: '오늘링크',
    locale: 'ko_KR',
    images: ['/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '오늘링크 — 주소모아, 주소월드의 새로운 기준',
    description: '자주 찾는 사이트를 한 곳에서. 대한민국 No.1 링크 디렉토리',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
      </head>
      <body>
        <PlausibleTracker />
        <Header />
        <div className="container">
          <main id="main-content">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
