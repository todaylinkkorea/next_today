import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ExitRedirect } from '@/components/site/ExitRedirect';

export const metadata: Metadata = {
  title: '외부 사이트로 이동 | 오늘링크',
  robots: { index: false, follow: false },
  alternates: { canonical: null },
  openGraph: { url: '/exit' },
};

export default function ExitPage() {
  return (
    <div
      style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 0',
      }}
    >
      <Suspense fallback={<div className="toss-modal-sheet" role="status" aria-busy="true">페이지 로딩 중…</div>}>
        <ExitRedirect />
      </Suspense>
    </div>
  );
}
