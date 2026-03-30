'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { id: 'adult-panel', title: '성인', sub: '성인 콘텐츠 사이트', items: [['야스닷컴', 'https://yasyadong.tv/'], ['야동코리아', 'https://www.yako03.com/'], ['다크걸', 'https://darkgirl7.com/'], ['야동티비', 'https://yadongtv86.com/'], ['조개모아', 'https://www.jogemoa02.com/'], ['AV19', 'https://av19.to/'], ['AV쏘걸', 'https://kr85.sogirl.so/'], ['밍키넷', 'https://mingky03.net/'], ['혼딸파티', 'https://ddparty13.org/'], ['밤포탈', 'https://bampt2.com/']] },
  { id: 'opi-panel', title: '오피/유흥', sub: '유흥 정보 사이트', items: [['오피가이드', 'https://opga037.com/'], ['오피스타', 'https://opmm01.com/'], ['오피뷰', 'https://opview79.com/'], ['헬로밤', 'https://hlbam27.com/'], ['밤의민족', 'https://newbm32.com/'], ['밤놀자', 'https://bnjlink12.com/'], ['밤의제국', 'https://www.bamje48.com/'], ['오피아트', 'https://dkxm9.com/'], ['키탐넷', 'https://kisstime3.net/'], ['오피러브', 'https://oplove29.com/']] },
  { id: 'movie-panel', title: '영화/드라마', sub: '영상 콘텐츠 사이트', items: [['티비위키', 'https://tvwiki.app/'], ['티비몬', 'https://tvmon.site/'], ['후후티비', 'https://hoohootv382.xyz/'], ['티비룸', 'https://tvroom.cc/'], ['제크티비', 'https://zectv1.com/'], ['무비킹', 'https://mvking.net/'], ['티비팡', 'https://tvpang.live/'], ['티비핫', 'https://tvhot.store/'], ['별별티비', 'https://bbtv86.com/'], ['고구마티비', 'https://gogumatv72.com/']] },
  { id: 'verify-panel', title: '먹튀검증', sub: '먹튀 검증 사이트', items: [['꽁타', 'https://xn--hs0b684d.net/certified/banner'], ['토토핫', 'https://www.totohot.net/'], ['먹튀스팟', 'https://mt-spot.com/'], ['배팅의민족', 'https://119sh.com/front.php'], ['올인구조대', 'https://www.allin42.com/'], ['먹튀중개소', 'https://www.mukjungso.com/'], ['토토와우', 'https://totowow.com/'], ['먹튀검증소', 'https://totosave.com/'], ['먹튀폴리스', 'https://www.mt-police07.com/'], ['온카판', 'https://oncapan.com/']] },
  { id: 'toto-panel', title: '토토/카지노', sub: '베팅 사이트', items: [['FOMO', 'https://kr.fomo.io'], ['플러쉬', 'https://flush.com/'], ['피나클', 'https://pinnacle.com/ko/'], ['비씨게임', 'https://bc.game/ko'], ['1XBET', 'https://korea.1xbet.com/ko/'], ['STAKE', 'https://stake.com/ko'], ['다파벳', 'https://m.playclubkr.com/kr']] },
  { id: 'webtoon-panel', title: '웹툰', sub: '웹툰 플랫폼', items: [['뉴토끼', 'https://newtoki469.com/'], ['툰코', 'https://tkor104.com/'], ['블랙툰', 'https://blacktoon410.com/'], ['늑대닷컴', 'https://wfwf448.com/'], ['마나토끼', 'https://manatoki469.net/'], ['야툰', 'https://yatoon228.com/'], ['북토끼', 'https://booktoki469.com/'], ['펀비', 'https://funbe622.com/'], ['해피툰', 'https://happytoon01.com/'], ['히토미', 'https://hitomi.la/']] },
  { id: 'sports-panel', title: '스포츠중계', sub: '실시간 스포츠 중계', items: [['매직티비', 'https://kalae.com/'], ['헐크티비', 'https://www.hulk24.com/'], ['전국티비', 'https://tonesofmelanin.com/'], ['빠른티비', 'https://quick-tv.com/'], ['킹콩티비', 'https://wcauditor.org/'], ['블랙티비', 'https://blacktv8.com/'], ['블루티비', 'https://bluelive77.com/'], ['네네티비', 'https://nntv01.com/'], ['마징가티비', 'https://litfusegroup.com/'], ['챔스티비', 'https://sportsentrysolutions.com/']] },
  { id: 'torrent-panel', title: '토렌트', sub: '파일 공유 사이트', items: [['토렌트파이', 'https://t66.torrentpi150.com/'], ['토렌트탑', 'https://torrenttop198.com/'], ['토렌트씨', 'https://torrentsee328.com/'], ['토렌트티티', 'https://torrenttt225.top/'], ['토렌트좋다', 'https://torrentzota161.com'], ['토렌트썸', 'https://torrentsome222.com'], ['토렌트G', 'https://ttg-37.com/'], ['토렌트봇', 'https://torrentbot234.site/'], ['토렌트큐큐', 'https://torrentqq412.com/'], ['토렌트알지', 'https://torrentrj246.com/']] },
  { id: 'goods-panel', title: '성인용품', sub: '성인용품 쇼핑몰', items: [['좋은느낌', 'https://nicefeels.kr/'], ['비아그라', 'https://herbmming2.com/'], ['원큐샵', 'https://1qshop.com/'], ['야나도', 'https://yanado.kr/'], ['로맨스몰', 'https://romancemall.co.kr/'], ['바나나몰', 'https://www.bananamall.co.kr/'], ['조이앤조이', 'https://www.joynjoy.com/'], ['뜨밤', 'https://ddbammall.com/19m.php'], ['가지몰', 'https://gajimall.net/'], ['팔팔그라', 'https://88gra.shop/']] },
  { id: 'photo-panel', title: '성인화보', sub: '화보 사이트', items: [['MAXIM', 'https://www.maximkorea.net/'], ['놀쟈', 'https://www.nz34.com/'], ['FoamGirl', 'https://foamgirl.net/korea'], ['Hot Girl', 'https://hotgirl.asia/'], ['4KHD', 'https://hett.uuss.uk/'], ['LOVE THE GRIL', 'https://xx.knit.bid/ko/'], ['BestGirlSexy', 'https://bestgirlsexy.com/']] },
  { id: 'bj-panel', title: 'BJ', sub: 'BJ 방송 플랫폼', items: [['팬더티비', 'https://www.pandalive.co.kr/'], ['팝콘티비', 'https://www.popkontv.com/'], ['플렉스티비', 'https://www.flextv.co.kr/'], ['톡19티비', 'https://www.talk19tv.com/'], ['씨나인', 'https://www.cnine.kr/'], ['부비', 'https://www.bubeelive.com/'], ['스트립챗', 'https://ko.stripchat.com/'], ['아프리카티비', 'https://www.sooplive.com/'], ['셀럽티비', 'https://www.celuvtv.co.kr/'], ['달라', 'https://www.dallalive.com/']] },
  { id: 'foreign-panel', title: '해외성인', sub: '해외 성인 사이트', items: [['Pornhub', 'https://www.pornhub.com/'], ['EPORNER', 'https://www.eporner.com/'], ['XHAMSTER', 'https://xhamster.com/'], ['HQPORNER', 'https://hqporner.com/'], ['피그AV', 'https://pigav.ws/'], ['Beeg', 'https://beeg.com/'], ['XVIDEOS', 'https://www.xvideos.com/'], ['SpankBang', 'https://spankbang.com/'], ['XNXX', 'https://www.xnxx.com/'], ['REDTUBE', 'https://www.redtube.com/']] },
  { id: 'community-panel', title: '커뮤니티', sub: '인기 커뮤니티', items: [['인벤', 'https://www.inven.co.kr/'], ['일간베스트', 'https://www.ilbe.com/'], ['웃대', 'https://m.humoruniv.com/'], ['디시인사이드 갤러리', 'https://gall.dcinside.com/'], ['시보드', 'https://cboard.net/'], ['더쿠', 'https://theqoo.net/'], ['블라인드', 'https://www.teamblind.com/kr/'], ['보배드림', 'https://www.bobaedream.co.kr/'], ['에펨코리아', 'https://www.fmkorea.com/'], ['개드립', 'https://www.dogdrip.net/']] },
  { id: 'job-panel', title: '구인구직', sub: '취업/알바 사이트', items: [['잡코리아', 'https://www.jobkorea.co.kr/'], ['이공모야', 'https://egongmoya.letuin.com/'], ['사람인', 'https://www.saramin.co.kr/'], ['알바천국', 'https://www.alba.co.kr/'], ['알바몬', 'https://www.albamon.com/'], ['링커리어', 'https://linkareer.com/'], ['백조알바', 'https://100joalba.co.kr/'], ['여우알바', 'https://www.foxalba.com/'], ['엄지알바', 'https://umzialba.com/'], ['밤알바', 'https://fox2.kr/']] },
  { id: 'koreans-panel', title: '한인교민', sub: '해외 한인 커뮤니티', items: [['[미국]뉴욕코리아', 'https://www.newyorkkorea.net/main/index.html'], ['[호주]코리아타운', 'https://www.ikoreatown.com.au/wp2/'], ['[일본]제팬인포', 'http://japaninfo.jp/'], ['[독일]구텐탁코리아', 'https://gutentagkorea.com/'], ['[영국]영국사랑', 'https://www.04uk.com/'], ['[뉴질랜드]코리아포스트', 'https://www.nzkoreapost.com/'], ['[중국]모이자', 'https://www.moyiza.com/'], ['[베트남]베한타임즈', 'http://www.viethantimes.com/'], ['[네덜란드]데일리NL', 'https://dailynl.net/'], ['[필리핀]필리핀올', 'http://www.philall.com/']] }
];

const ENGINES = {
  google: { name: '구글', icon: '/images/google_s.svg', url: 'https://www.google.com/search?q=' },
  naver: { name: '네이버', icon: '/images/naver_s.svg', url: 'https://search.naver.com/search.naver?query=' },
  daum: { name: '다음', icon: '/images/daum.svg', url: 'https://search.daum.net/search?q=' },
  youtube: { name: '유튜브', icon: '/images/youtube_s.svg', url: 'https://www.youtube.com/results?search_query=' }
};

export default function Home() {
  const [engine, setEngine] = useState<keyof typeof ENGINES>('google');
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    window.open(ENGINES[engine].url + encodeURIComponent(keyword), '_blank');
  };

  return (
    <>
      <section className="hero" id="hero" aria-label="메인 검색 및 통계">
        <div className="hero-grid">
          <div className="hero-search-block">
            <div className="hero-text-block">
              <div className="eyebrow">🔗 주소모아 &amp; 주소월드를 잇는 오늘의 링크</div>
              <h1 className="hero-title">대한민국 No.1 링크 디렉토리,<br/><span className="hero-brand">오늘링크</span><br/>주소모음의 새로운 기준</h1>
              <p className="hero-desc">
                <strong>주소모아</strong>와 <strong>주소월드</strong>의 모든 최신 접속 정보를 실시간으로 통합 안내하는 <strong>오늘링크</strong>입니다. <strong>주소박스</strong>, <strong>주소허브</strong>, <strong>주소북</strong> 등 유저들이 가장 많이 찾는 <strong>링크모음</strong> 서비스 — <strong>빠른주소</strong>가 필요할 때, 대한민국 No.1 <strong>주소가이드</strong> <span className="hero-brand">오늘링크</span>에서 안전한 연결을 경험하세요.
              </p>
            </div>

            <form className="search-box" onSubmit={handleSearch} role="search" aria-label="포털 검색">
              <label htmlFor="searchEngine" className="sr-only">검색 포털 선택</label>
              <div className="search-custom-select">
                <select 
                  id="searchEngine" 
                  className="search-select-hidden" 
                  value={engine} 
                  onChange={(e) => setEngine(e.target.value as keyof typeof ENGINES)}
                >
                  <option value="google">구글</option>
                  <option value="naver">네이버</option>
                  <option value="daum">다음</option>
                  <option value="youtube">유튜브</option>
                </select>
                <div className="search-select-display">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ENGINES[engine].icon} alt="선택된 포털 로고" id="searchEngineLogo" />
                  <svg viewBox="0 0 24 24" fill="none" className="search-select-arrow"><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <label htmlFor="searchKeyword" className="sr-only">검색어</label>
              <input 
                id="searchKeyword" 
                className="search-input" 
                type="text" 
                placeholder="검색어를 입력하세요." 
                autoComplete="off"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button type="submit" className="search-btn">검색</button>
            </form>
          </div>

          <div className="hero-side">
            <div className="hero-banner-wrap">
              <Image src="/images/hero_banner.png" alt="오늘링크 배너" width={800} height={400} className="hero-banner-img" priority />
            </div>
            <div className="hero-side-meta">
              <div className="tags" aria-label="인기 태그">
                <span className="tag"># 주소모아</span>
                <span className="tag"># 주소월드</span>
                <span className="tag"># 오늘링크</span>
                <span className="tag"># 링크모음</span>
              </div>
              <div className="stats">
                <div className="stat"><div className="stat-label">전체 링크</div><div className="stat-num">368+</div></div>
                <div className="stat"><div className="stat-label">오늘 업데이트</div><div className="stat-num">12</div></div>
                <div className="stat"><div className="stat-label">인기 카테고리</div><div className="stat-num">15</div></div>
                <div className="stat"><div className="stat-label">주간 방문</div><div className="stat-num">24.8K</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="banners" aria-label="추천 배너">
        <div className="section-head">
          <div><h2>추천 배너</h2></div>
        </div>
        <div className="banner-grid">
          <a href="#" className="banner-item banner-item--lg banner-pink-1"><div className="banner-label banner-label-pink-1">FEATURED 01</div><div className="banner-title">추천 배너 01</div><div className="banner-desc banner-desc-pink">화이트와 핑크 조합의 대표 배너 스타일</div></a>
          <a href="#" className="banner-item banner-item--lg banner-pink-2"><div className="banner-label banner-label-pink-2">FEATURED 02</div><div className="banner-title">추천 배너 02</div><div className="banner-desc banner-desc-pink">부드럽고 밝은 톤으로 시선이 가는 배너</div></a>
          <a href="#" className="banner-item banner-item--lg banner-pink-3"><div className="banner-label banner-label-pink-3">FEATURED 03</div><div className="banner-title">추천 배너 03</div><div className="banner-desc banner-desc-pink">텍스트형으로도 예쁘게 보이는 상단 배너</div></a>
          <a href="#" className="banner-item banner-item--lg banner-pink-1"><div className="banner-label banner-label-pink-1">FEATURED 04</div><div className="banner-title">추천 배너 04</div><div className="banner-desc banner-desc-pink">화이트와 핑크 조합의 대표 배너 스타일</div></a>
          <a href="#" className="banner-item banner-item--lg banner-pink-2"><div className="banner-label banner-label-pink-2">FEATURED 05</div><div className="banner-title">추천 배너 05</div><div className="banner-desc banner-desc-pink">부드럽고 밝은 톤으로 시선이 가는 배너</div></a>
          <a href="#" className="banner-item banner-item--lg banner-pink-3"><div className="banner-label banner-label-pink-3">FEATURED 06</div><div className="banner-title">추천 배너 06</div><div className="banner-desc banner-desc-pink">텍스트형으로도 예쁘게 보이는 상단 배너</div></a>
        </div>
      </section>

      <section className="section" id="categories" aria-label="주요 카테고리">
        <div className="section-head"><div><h2>주요 카테고리</h2></div></div>
        <div className="category-grid" id="main-categories">
          {[
            { n: '구글', i: 'google_s' }, { n: '네이버', i: 'naver_s' }, { n: '유튜브', i: 'youtube_s' },
            { n: '인스타그램', i: 'instagram_s' }, { n: '페이스북', i: 'facebook_s' }, { n: '트위터', i: 'x_s' }
          ].map(c => (
            <a key={c.n} href="#" className="category" aria-label={c.n}>
              <div className="category-icon" style={{background:'#fff'}}><Image src={`/images/${c.i}.svg`} alt={c.n} width={40} height={40}/></div>
              <b className="category-text">{c.n}</b>
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="rank-section" aria-label="카테고리별 바로가기 랭킹">
        <div className="section-head"><div><h2>카테고리 바로가기 모음</h2></div></div>
        <nav className="jump-bar" id="jumpBar" aria-label="카테고리 빠른 이동">
          {categories.map((cat, i) => (
            <a key={cat.id} className={`jump-chip ${i === 0 ? 'active' : ''}`} href={`#${cat.id}`}>{cat.title}</a>
          ))}
        </nav>
        <div className="rank-grid" id="rankGrid">
          {categories.map(cat => (
            <div key={cat.id} className="rank-panel" id={cat.id}>
              <div className="rank-head">
                <div><div className="rank-title">{cat.title}</div><div className="rank-sub">{cat.sub}</div></div>
              </div>
              <div className="rank-list">
                {cat.items.map((item, idx) => (
                  <a key={idx} className="rank-item" href={item[1]} target="_blank" rel="noopener noreferrer">
                    <div className="rank-left">
                      <div className="rank-num">{idx + 1}</div>
                      <div className="rank-name">{item[0]}</div>
                    </div>
                    <span className="rank-go">바로가기</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="bottom-banners" aria-label="하단 배너" style={{marginTop: '20px'}}>
        <div className="banner-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
          {[1,2,3,1,2,3,1,2,3,1].map((b, idx) => (
            <a key={idx} href="#" className={`banner-item banner-item--md banner-pink-md-${b}`}><div className="banner-title">배너 {idx+1}</div></a>
          ))}
        </div>
      </section>
    </>
  );
}
