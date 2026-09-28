import { LIFETIME_DOMAIN, LIFETIME_URL, TELEGRAM_URL } from '../../data/site-config';
import { KstClock } from './KstClock';

export function TopUtilityBar() {
  return (
    <div className="top-utility-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="topbar-toss-pill deep-telegram">
            <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: 'currentColor' }} aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.61 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.89.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.98 8.24-3.56 3.92-1.63 4.74-1.92 5.27-1.92.12 0 .38.03.55.17.14.12.18.28.2.46-.01.07.01.23 0 .37z" />
            </svg>
            <span>공식 텔레그램 &gt;</span>
          </a>
          <a href={LIFETIME_URL} target="_blank" rel="noopener noreferrer" className="topbar-toss-pill lifetime-domain-pill">
            <span>🔗 평생주소:</span>
            <span style={{ color: '#0D9488', fontWeight: 900, textDecoration: 'underline', marginLeft: 3 }}>{LIFETIME_DOMAIN}</span>
          </a>
        </div>

        <div className="top-bar-right">
          <KstClock />
        </div>
      </div>
    </div>
  );
}
