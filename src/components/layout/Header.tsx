'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [timeStr, setTimeStr] = useState({ date: '', time: '' });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Seoul' };
      const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
      const dayIdx = new Date(now.toLocaleString('en-US', opts)).getDay();
      const day = days[dayIdx];
      
      const y = now.toLocaleString('en', { ...opts, year: 'numeric' });
      const m = now.toLocaleString('en', { ...opts, month: 'numeric' });
      const d = now.toLocaleString('en', { ...opts, day: 'numeric' });
      
      const timePart = now.toLocaleString('en-GB', {
        timeZone: 'Asia/Seoul',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
      });
      
      setTimeStr({
        date: `${y}년 ${m}월 ${d}일 ${day}`,
        time: timePart
      });
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="topbar" role="banner">
      <div className="topbar-inner">
        <div className="topbar-left">
          <a href="https://t.me/todaylink" className="topbar-telegram" target="_blank" rel="noopener noreferrer" aria-label="텔레그램 문의">
            <img src="/images/telegram.svg" alt="" width={14} height={14} />
            텔레그램 문의
          </a>
        </div>
        <Link href="/" className="brand" aria-label="오늘링크 홈으로 이동">
          <img src="/images/logo.png" alt="오늘링크" className="brand-logo" />
        </Link>
        <div className="topbar-right">
          <div className="topbar-clock" aria-label="현재 시각">
            <span>{timeStr.date}</span><br />
            <span>{timeStr.time}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
