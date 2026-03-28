import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '오늘링크 — 오늘 필요한 링크를 한눈에 정리',
    template: '%s | 오늘링크',
  },
  description:
    '오늘링크는 자주 찾는 사이트를 카테고리별로 정리하여 빠르게 접근할 수 있는 포털형 링크 모음 서비스입니다. 구글, 네이버, 다음, 유튜브 검색도 바로 가능합니다.',
  keywords: ['오늘링크', '링크 모음', '포털', '즐겨찾기', '바로가기', '인기 사이트'],
  metadataBase: new URL('https://todaylink.kr'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: '오늘링크 — 오늘 필요한 링크를 한눈에',
    description: '자주 찾는 사이트를 한 곳에서. 구글·네이버·다음·유튜브 검색도 바로.',
    url: 'https://todaylink.kr',
    siteName: '오늘링크',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '오늘링크 — 오늘 필요한 링크를 한눈에',
    description: '자주 찾는 사이트를 한 곳에서.',
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
        <Script
          defer
          data-domain="todaylink.kr"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Header />
        <div className="container">
          <main id="main-content">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
