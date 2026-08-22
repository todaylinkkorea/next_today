export interface CategoryLink {
  name: string;
  url: string;
}

export interface Category {
  id: string;
  title: string;
  sub: string;
  icon: string;
  items: CategoryLink[];
}

export const categories: Category[] = [
  {
    id: 'movie-panel', title: '영화/드라마', sub: '영상 콘텐츠 사이트', icon: '🎬',
    items: [
      { name: '티비위키', url: 'https://tvwiki.store/' },
      { name: '티비룸', url: 'https://tvroom29.org/' },
      { name: '티비몬', url: 'https://tvmon1.com/' },
      { name: '미미티비', url: 'https://mimitv2.com/' },
      { name: '바다티비', url: 'https://bada34.kr/' },
      { name: '무비킹', url: 'https://mvking17.org/' },
      { name: '애니24', url: 'https://ani.ohli24.com/' },
    ],
  },
  {
    id: 'adult-panel', title: '성인', sub: '성인 콘텐츠 사이트', icon: '🔞',
    items: [
      { name: '야스닷컴', url: 'https://yasyadong02.tv/' },
      { name: '야동코리아', url: 'https://yadongkorea02.tv/' },
      { name: 'AV19', url: 'https://av19t.com/' },
      { name: '다크걸', url: 'https://darkgirl17.com/' },
      { name: '밍키넷', url: 'https://mingky08.tv/' },
      { name: '야동파티', url: 'https://ydparty06.tv/' },
      { name: '딸플릭스', url: 'https://kr18.ddal.xyz/' },
    ],
  },
  {
    id: 'foreign-panel', title: '해외성인', sub: '해외 성인 사이트', icon: '🌐',
    items: [
      { name: 'Pornhub', url: 'https://fr.pornhub.org/' },
      { name: 'Spankbang', url: 'https://spankbang.party/' },
      { name: 'XHAMSTER', url: 'https://xhtotal.com/' },
      { name: 'XVIDEO', url: 'https://xvideos-k7.com/' },
      { name: 'AV탑걸', url: 'https://kr45.topgirl.co/' },
      { name: 'STRIPCHAT', url: 'https://ko.stripchat.com/' },
      { name: 'EPORNER', url: 'https://www.eporner.com/' },
    ],
  },
  {
    id: 'webtoon-panel', title: '웹툰', sub: '웹툰 플랫폼', icon: '📚',
    items: [
      { name: '늑대닷컴', url: 'https://wfwf483.com/' },
      { name: '뉴토끼', url: 'https://sbxh9.com/' },
      { name: '짭토끼', url: 'https://toki31.com/' },
      { name: '펀비', url: 'https://funbe668.com/' },
      { name: '툰코', url: 'https://tkor146.com/' },
      { name: '블랙툰', url: 'https://blacktoon420.com/' },
      { name: '야툰', url: 'https://yatoon246.asia/' },
    ],
  },
  {
    id: 'sports-panel', title: '스포츠중계', sub: '실시간 스포츠 중계', icon: '⚽',
    items: [
      { name: '빠른티비', url: 'https://quick-tv.com/' },
      { name: '헐크티비', url: 'https://www.hulk24.com/' },
      { name: '블랙티비', url: 'https://blacktv22.com/' },
      { name: '코난티비', url: 'https://conan-tv.com/' },
      { name: '킹콩티비', url: 'https://ifadetv.com/' },
      { name: '로얄티비', url: 'https://rytv01.com/' },
      { name: '마징가티비', url: 'https://litfusegroup.com/' },
    ],
  },
  {
    id: 'opi-panel', title: '오피/유흥', sub: '유흥 정보 사이트', icon: '🏮',
    items: [
      { name: '오피가이드', url: 'https://opga041.com/' },
      { name: '오피매니아', url: 'https://opmm06.com/' },
      { name: '오피스타', url: 'https://opmart22.com/' },
      { name: '섹밤', url: 'https://sexbam57.top/' },
      { name: '헬로밤', url: 'https://hlbam32.com/' },
      { name: '밤의민족', url: 'https://newbm37.com/' },
      { name: '키탐넷', url: 'https://kisstime6.net/' },
    ],
  },
  {
    id: 'verify-panel', title: '먹튀검증', sub: '먹튀 검증 사이트', icon: '🛡',
    items: [
      { name: '온카판', url: 'https://oncapan.com/' },
      { name: '토토핫', url: 'https://www.totohot.net/' },
      { name: '슈어맨', url: 'https://www.sureman.com/' },
      { name: '올인구조대', url: 'https://www.allin43.com/' },
      { name: '배팅의민족', url: 'https://119sh.com/front.php' },
      { name: '먹튀플러스', url: 'https://www.mt-police07.com/' },
      { name: '토토와우', url: 'https://totowow.com/' },
    ],
  },
  {
    id: 'toto-panel', title: '토토/카지노', sub: '베팅 사이트', icon: '🎰',
    items: [
      { name: 'FOMO', url: 'https://kr.fomo.io' },
      { name: '플러쉬', url: 'https://flush.com/' },
      { name: '피나클', url: 'https://pinnacle.com/ko/' },
      { name: '비씨게임', url: 'https://bc.game/ko' },
      { name: 'STAKE', url: 'https://stake.com/ko' },
      { name: '다파벳', url: 'https://m.playclubkr.com/kr' },
      { name: '1WIN', url: 'https://1win-korea.co.kr/' },
    ],
  },
  {
    id: 'goods-panel', title: '성인용품', sub: '성인용품 쇼핑몰', icon: '💊',
    items: [
      { name: '좋은느낌', url: 'https://nicefeels.kr/' },
      { name: '조이앤조이', url: 'https://www.joynjoy.com/' },
      { name: '비아그라', url: 'https://herbmming2.com/' },
      { name: '원큐샵', url: 'https://1qshop.com/' },
      { name: '야나도', url: 'https://yanado.kr/' },
      { name: '로맨스몰', url: 'https://romancemall.co.kr/' },
      { name: '바나나몰', url: 'https://www.bananamall.co.kr/' },
    ],
  },
  {
    id: 'photo-panel', title: '성인화보', sub: '화보 사이트', icon: '📸',
    items: [
      { name: '스트립챗', url: 'https://ko.stripchat.com/' },
      { name: '츠탕셔', url: 'https://www.nicesss.com/' },
      { name: 'MAXIM', url: 'https://www.maximkorea.net/' },
      { name: 'AsiaOnTop', url: 'https://asiaon.top/category/by-country/korean/' },
      { name: '4KHD', url: 'https://hett.uuss.uk/' },
      { name: 'TAOTU', url: 'https://ko.taotu.org/' },
      { name: 'MISSKON', url: 'https://misskon.com/' },
    ],
  },
];