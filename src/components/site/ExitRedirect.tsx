'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { parseExitTarget } from '@/lib/exit-link';

export function ExitRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlParam = searchParams.get('url');
  const target = parseExitTarget(urlParam);

  useEffect(() => {
    if (!target) {
      return;
    }

    const timer = window.setTimeout(() => {
      window.location.replace(target);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [target]);

  if (!target) {
    const description = urlParam === null
      ? '이동할 대상 주소가 지정되지 않았습니다.'
      : '안전하지 않거나 올바르지 않은 주소입니다.';

    return (
      <section className="error-state-card" role="alert">
        <span className="error-state-icon" aria-hidden="true">⚠️</span>
        <h1 className="error-state-title">이동할 수 없는 주소예요</h1>
        <p className="error-state-desc">{description}</p>
        <div className="error-state-actions">
          {/* The main route group intentionally uses a native anchor to avoid legacy CSS leakage. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="pill-action-btn">홈으로</a>
          <button type="button" className="pill-action-btn" onClick={() => router.back()}>
            돌아가기
          </button>
        </div>
      </section>
    );
  }

  const host = new URL(target).host;

  return (
    <section className="toss-modal-sheet">
      <span className="toss-badge-chip">🔗 외부 사이트로 이동</span>
      <h1 className="toss-modal-title">외부 사이트로 이동 중</h1>
      <p className="toss-modal-subtitle">
        잠시 후 <strong>{host}</strong>로 자동 이동합니다.
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button
          type="button"
          className="pill-action-btn primary"
          onClick={() => window.location.replace(target)}
        >
          바로 이동
        </button>
        <button type="button" className="pill-action-btn" onClick={() => router.back()}>
          돌아가기
        </button>
      </div>
    </section>
  );
}
