export default function BannerGrid() {
  return (
    <section className="section" id="banners" aria-label="추천 배너">
      <div className="section-head">
        <div>
          <div className="muted">메인 배너 존</div>
          <h2>추천 배너</h2>
        </div>
        <div className="muted">주요 카테고리 위에 노출되는 대표 배너 9개 구성</div>
      </div>
      <div className="banner-grid-9">
        <a href="#" className="banner-item banner-item--lg banner-pink-1">
          <div className="banner-label banner-label-pink-1">FEATURED 01</div>
          <div className="banner-title">추천 배너 01</div>
          <div className="banner-desc banner-desc-pink">화이트와 핑크 조합의 대표 배너 스타일</div>
        </a>
        <a href="#" className="banner-item banner-item--lg banner-pink-2">
          <div className="banner-label banner-label-pink-2">FEATURED 02</div>
          <div className="banner-title">추천 배너 02</div>
          <div className="banner-desc banner-desc-pink">부드럽고 밝은 톤으로 시선이 가는 배너</div>
        </a>
        <a href="#" className="banner-item banner-item--lg banner-pink-3">
          <div className="banner-label banner-label-pink-3">FEATURED 03</div>
          <div className="banner-title">추천 배너 03</div>
          <div className="banner-desc banner-desc-pink">텍스트형으로도 예쁘게 보이는 상단 배너</div>
        </a>
        <a href="#" className="banner-item banner-item--md banner-pink-md-1">
          <div className="banner-label banner-label-pink-3">PROMO 04</div>
          <div className="banner-title">추천 배너 04</div>
          <div className="banner-desc banner-desc-pink">중간 크기 배너 예시</div>
        </a>
        <a href="#" className="banner-item banner-item--md banner-pink-md-2">
          <div className="banner-label banner-label-pink-2">PROMO 05</div>
          <div className="banner-title">추천 배너 05</div>
          <div className="banner-desc banner-desc-pink">깔끔한 화이트 포털형 배너</div>
        </a>
        <a href="#" className="banner-item banner-item--md banner-pink-md-3">
          <div className="banner-label banner-label-pink-3">PROMO 06</div>
          <div className="banner-title">추천 배너 06</div>
          <div className="banner-desc banner-desc-pink">카테고리 위 시선 집중용 구성</div>
        </a>
        <a href="#" className="banner-item banner-item--sm banner-pink-sm-1">
          <div className="banner-label banner-label-pink-3">SUB 07</div>
          <div className="banner-title">추천 배너 07</div>
        </a>
        <a href="#" className="banner-item banner-item--sm banner-pink-sm-2">
          <div className="banner-label banner-label-pink-2">SUB 08</div>
          <div className="banner-title">추천 배너 08</div>
        </a>
        <a href="#" className="banner-item banner-item--sm banner-pink-sm-3">
          <div className="banner-label banner-label-pink-3">SUB 09</div>
          <div className="banner-title">추천 배너 09</div>
        </a>
      </div>
    </section>
  );
}
