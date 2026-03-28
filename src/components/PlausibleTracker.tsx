'use client';

import { useEffect } from 'react';
import { init } from '@plausible-analytics/tracker';

/*
  사용자가 요청한 @plausible-analytics/tracker 패키지를 직접 호출하는 래퍼 컴포넌트입니다.
  next/script 태그 방식이 브라우저 캐싱이나 AdBlock에 의해 무시될 수 있으므로,
  더 확실하게 페이지 로드 시 이벤트를 전송하도록 보강합니다.
*/

export default function PlausibleTracker() {
  useEffect(() => {
    // 클라이언트 사이드에서만 안전하게 실행
    if (typeof window !== 'undefined') {
      try {
        init({
          domain: 'xn--wh1bv9k05k4kk.com',
          // 로컬호스트나 테스트환경에서도 강제로 추적하려면 아래 옵션을 켤 수 있습니다.
          // captureOnLocalhost: true
        });
      } catch (err) {
        console.error('Plausible init error:', err);
      }
    }
  }, []);

  return null;
}
