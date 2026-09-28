import Image from 'next/image';
import { topBanners } from '@/data/banners';
import { TELEGRAM_URL } from '@/data/site-config';

const PARTNER_GRID_SLOTS = 12;

interface PartnerBannerProps {
  category?: { name: string };
}

function PartnerIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: '#0284C7', flexShrink: 0 }} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.61 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.89.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.98 8.24-3.56 3.92-1.63 4.74-1.92 5.27-1.92.12 0 .38.03.55.17.14.12.18.28.2.46-.01.07.01.23 0 .37z" />
    </svg>
  );
}

function InquiryCard() {
  return (
    <a className="partner-banner-card" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
      <h4 className="p-banner-title">
        <PartnerIcon />
        <span className="ellipsis-box">배너문의</span>
      </h4>
      <div className="p-banner-cta">문의하기 ↗</div>
    </a>
  );
}

function PartnerCards() {
  const banners = topBanners.slice(0, PARTNER_GRID_SLOTS);
  const inquiryCardCount = Math.max(0, PARTNER_GRID_SLOTS - topBanners.length);

  return (
    <>
      {banners.map((banner) => (
        <a
          key={banner.id}
          className="partner-banner-card partner-image-card"
          href={banner.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={`${banner.name} 바로가기`}
        >
          <Image
            src={banner.image}
            alt={banner.alt}
            fill
            sizes="(max-width: 540px) 50vw, (max-width: 992px) 50vw, 400px"
            style={{ objectFit: 'cover' }}
          />
        </a>
      ))}
      {Array.from({ length: inquiryCardCount }, (_, i) => <InquiryCard key={`inquiry-${i}`} />)}
    </>
  );
}

export function PartnerBanner({ category }: PartnerBannerProps) {
  const title = category ? `⭐ ${category.name} 공식 제휴업체` : '⭐ 추천 제휴업체';
  const info = category ? `${category.name} 검증 보증 파트너` : '오늘링크 공식 안심 검증 파트너';

  return (
    <section className="partner-section">
      <div className="partner-box">
        <div className="partner-header-row">
          <span className="partner-badge-title">{title}</span>
          <span className="partner-info-text">{info}</span>
        </div>
        <div className="partner-grid-3x4"><PartnerCards /></div>
        <div className="partner-grid-2x6"><PartnerCards /></div>
      </div>
    </section>
  );
}
