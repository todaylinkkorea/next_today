'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function ExitHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlParam = searchParams.get('url');
    if (urlParam) {
      try {
        const decoded = decodeURIComponent(urlParam);
        // Basic URL validation
        new URL(decoded);
        setTargetUrl(decoded);

        // Auto-redirect after 1.5 seconds
        const timer = setTimeout(() => {
          window.location.replace(decoded);
        }, 1500);

        return () => clearTimeout(timer);
      } catch {
        setError('유효하지 않은 이동 주소입니다.');
      }
    } else {
      setError('이동할 대상 주소가 지정되지 않았습니다.');
    }
  }, [searchParams]);

  const handleBack = () => {
    router.back();
  };

  const handleForceRedirect = () => {
    if (targetUrl) {
      window.location.replace(targetUrl);
    }
  };

  if (error) {
    return (
      <div className="exit-card exit-card--error">
        <div className="exit-icon exit-icon--error">⚠️</div>
        <h1 className="exit-title">이동 오류</h1>
        <p className="exit-desc">{error}</p>
        <button onClick={handleBack} className="exit-btn exit-btn--secondary">
          이전 페이지로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="exit-card">
      <div className="exit-loader-wrap">
        <div className="exit-loader"></div>
        <div className="exit-icon">🔗</div>
      </div>
      <h1 className="exit-title">외부 사이트로 이동 중</h1>
      <p className="exit-desc">
        오늘링크를 통해 외부 웹사이트로 안전하게 연결하고 있습니다.<br />
        잠시 후 자동으로 이동합니다.
      </p>
      {targetUrl && (
        <div className="exit-url-preview">
          <span className="exit-url-label">이동 경로</span>
          <span className="exit-url-text">{targetUrl}</span>
        </div>
      )}
      <div className="exit-actions">
        <button onClick={handleForceRedirect} className="exit-btn exit-btn--primary">
          지금 바로 이동하기
        </button>
        <button onClick={handleBack} className="exit-btn exit-btn--secondary">
          이동 취소
        </button>
      </div>
    </div>
  );
}

export default function ExitPage() {
  return (
    <div className="exit-container">
      <Suspense fallback={
        <div className="exit-card">
          <div className="exit-loader-wrap">
            <div className="exit-loader"></div>
          </div>
          <h1 className="exit-title">페이지 로딩 중</h1>
        </div>
      }>
        <ExitHandler />
      </Suspense>
    </div>
  );
}
