import Image from 'next/image';
import { topBanners } from '@/data/banners';

export default function BannerGrid() {
  return (
    <section className="section" id="banners" aria-label="추천 보증 배너">
      <div className="section-head">
        <div>
          <div className="muted">주요 제휴 보증업체</div>
          <h2>추천 보증 배너</h2>
        </div>
        <div className="muted">엄격한 검증을 통과한 메이저 놀이터 안내</div>
      </div>

      <div className="top-banner-grid">
        {topBanners.map((banner) => (
          <a
            key={banner.id}
            href={banner.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="top-banner-card"
            aria-label={`${banner.name} 바로가기`}
          >
            <div className="top-banner-media">
              <Image
                src={banner.image}
                alt={banner.alt}
                width={600}
                height={100}
                sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="top-banner-img"
                loading="lazy"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
