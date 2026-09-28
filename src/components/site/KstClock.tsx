'use client';

import { useEffect, useState } from 'react';
import { formatKst, KST_PLACEHOLDER } from '../../lib/kst';

const CLOCK_TICK_MS = 1000;

export function KstClock() {
  const [time, setTime] = useState(KST_PLACEHOLDER);

  useEffect(() => {
    const updateTime = () => setTime(formatKst(new Date()));

    updateTime();
    const intervalId = window.setInterval(updateTime, CLOCK_TICK_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="kst-live-clock-pill">
      <span className="live-clock-dot"></span>
      <span id="kst-live-time">{time}</span>
    </div>
  );
}
