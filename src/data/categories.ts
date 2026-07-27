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
    id: 'adult-panel', title: '성인', sub: '성인 콘텐츠 사이트', icon: '🔞',
    items: [
      { name: '야스닷컴', url: 'https://yasyadong02.tv/' },
      { name: 'AV19', url: 'https://av19t.com/' },
      { name: '다크걸', url: 'https://darkgirl14.com/' },
      { name: '야동코리아', url: 'https://www.yako14.com/' },
      { name: '야동파티', url: 'https://ydparty04.tv/' },
      { name: '야동위키', url: 'https://19wiki5.com/' },
      { name: '딸플릭스', url: 'https://kr16.ddal.xyz/' },
    ],
  },
  {
    id: 'movie-panel', title: '영화/드라마', sub: '영상 콘텐츠 사이트', icon: '🎬',
    items: [
      { name: '티비위키', url: 'https://tvwiki39.net/' },
      { name: '티비룸', url: 'https://tvroom23.org/' },
      { name: '티비핫', url: 'https://tvhot2.com/' },
      { name: '티비팡', url: 'https://tvpang.live/' },
      { name: '바다티비', url: 'https://bada33.kr/' },
      { name: '무비킹', url: 'https://mvking15.org/' },
      { name: '애니라이프', url: 'https://anilife.app/' },
    ],
  },
  {
    id: 'webtoon-panel', title: '웹툰', sub: '웹툰 플랫폼', icon: '📚',
    items: [
      { name: '늑대닷컴', url: 'https://wfwf426.com/' },
      { name: '뉴토끼', url: 'https://sbxh9.com/' },
      { name: '짭토끼', url: 'https://toki31.com/' },
      { name: '해피툰', url: 'https://happytoon03.com/' },
      { name: '툰코', url: 'https://tkor138.com/' },
      { name: '블랙툰', url: 'https://blacktoon417.com/' },
      { name: '야툰', url: 'https://yatoon240.com/' },
    ],
  },
  {
    id: 'sports-panel', title: '스포츠중계', sub: '실시간 스포츠 중계', icon: '⚽',
    items: [
      { name: '빠른티비', url: 'https://quick-tv.com/' },
      { name: '헐크티비', url: 'https://www.hulk24.com/' },
      { name: '매직티비', url: 'https://sportsspotlight.com/' },
      { name: '코난티비', url: 'https://conan-tv.com/' },
      { name: '블랙티비', url: 'https://allblack1.com/' },
      { name: '네네티비', url: 'https://nntv01.com/' },
      { name: '마징가티비', url: 'https://litfusegroup.com/' },
    ],
  },
  {
    id: 'opi-panel', title: '오피/유흥', sub: '유흥 정보 사이트', icon: '🏮',
    items: [
      { name: '오피가이드', url: 'https://opga040.com/' },
      { name: '오피매니아', url: 'https://opmm05.com/' },
      { name: '오피스타', url: 'https://opmart20.com/' },
      { name: '오피파크', url: 'https://oppark3.com//' },
      { name: '헬로밤', url: 'https://hlbam31.com/' },
      { name: '밤의민족', url: 'https://newbm36.com/' },
      { name: '키탐넷', url: 'https://kisstime5.net/' },
    ],
  },
  {
    id: 'verify-panel', title: '먹튀검증', sub: '먹튀 검증 사이트', icon: '🛡',
    items: [
      { name: '온카판', url: 'https://oncapan.com/' },
      { name: '꽁타', url: 'https://xn--hs0b684d.net/certified/banner' },
      { name: '토토핫', url: 'https://www.totohot.net/' },
      { name: '배팅의민족', url: 'https://119sh.com/front.php' },
      { name: '먹튀중개소', url: 'https://www.mukjungso.com/' },
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
    ],
  },
  {
    id: 'foreign-panel', title: '해외성인', sub: '해외 성인 사이트', icon: '🌐',
    items: [
      { name: 'Pornhub', url: 'https://fr.pornhub.org//' },
      { name: 'SpankBang', url: 'https://spankbang.com/' },
      { name: 'XHAMSTER', url: 'https://ko.xhname.com/' },
      { name: 'STRIPCHAT', url: 'https://ko.stripchat.com/' },
      { name: 'EPORNER', url: 'https://www.eporner.com/' },
      { name: 'Beeg', url: 'https://beeg.com/' },
    ],
  },
  {
    id: 'goods-panel', title: '성인용품', sub: '성인용품 쇼핑몰', icon: '💊',
    items: [
      { name: '좋은느낌', url: 'https://nicefeels.kr/' },
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
      { name: 'MAXIM', url: 'https://www.maximkorea.net/' },
      { name: 'AsiaOnTop', url: 'https://asiaon.top/category/by-country/korean/' },
      { name: '4KHD', url: 'https://hett.uuss.uk/' },
      { name: 'TAOTU', url: 'https://ko.taotu.org/' },
      { name: 'MISSKON', url: 'https://misskon.com/' },
    ],
  },
  {
    id: 'bj-panel', title: 'BJ', sub: 'BJ 방송 플랫폼', icon: '🎙',
    items: [
      { name: '팬더티비', url: 'https://www.pandalive.co.kr/' },
      { name: '팝콘티비', url: 'https://www.popkontv.com/' },
      { name: '플렉스티비', url: 'https://www.flextv.co.kr/' },
      { name: '톡19티비', url: 'https://www.talk19tv.com/' },
      { name: '씨나인', url: 'https://www.cnine.kr/' },
      { name: '아프리카티비', url: 'https://www.sooplive.com/' },
      { name: '달라', url: 'https://www.dallalive.com/' },
    ],
  },
  {
    id: 'community-panel', title: '커뮤니티', sub: '인기 커뮤니티', icon: '💬',
    items: [
      { name: '인벤', url: 'https://www.inven.co.kr/' },
      { name: '일간베스트', url: 'https://www.ilbe.com/' },
      { name: '웃대', url: 'https://m.humoruniv.com/' },
      { name: '디시인사이드 갤러리', url: 'https://gall.dcinside.com/' },
      { name: '더쿠', url: 'https://theqoo.net/' },
      { name: '보배드림', url: 'https://www.bobaedream.co.kr/' },
      { name: '에펨코리아', url: 'https://www.fmkorea.com/' },
    ],
  },
  {
    id: 'job-panel', title: '구인구직', sub: '취업/알바 사이트', icon: '💼',
    items: [
      { name: '잡코리아', url: 'https://www.jobkorea.co.kr/' },
      { name: '이공모야', url: 'https://egongmoya.letuin.com/' },
      { name: '사람인', url: 'https://www.saramin.co.kr/' },
      { name: '알바천국', url: 'https://www.alba.co.kr/' },
      { name: '알바몬', url: 'https://www.albamon.com/' },
      { name: '백조알바', url: 'https://100joalba.co.kr/' },
      { name: '여우알바', url: 'https://www.foxalba.com/' },
    ],
  },
  {
    id: 'koreans-panel', title: '한인교민', sub: '해외 한인 커뮤니티', icon: '🇰🇷',
    items: [
      { name: '[미국]뉴욕코리아', url: 'https://www.newyorkkorea.net/main/index.html' },
      { name: '[독일]구텐탁코리아', url: 'https://gutentagkorea.com/' },
      { name: '[영국]영국사랑', url: 'https://www.04uk.com/' },
      { name: '[뉴질랜드]코리아포스트', url: 'https://www.nzkoreapost.com/' },
      { name: '[중국]모이자', url: 'https://www.moyiza.com/' },
      { name: '[네덜란드]데일리NL', url: 'https://dailynl.net/' },
      { name: '[필리핀]필리핀올', url: 'http://www.philall.com/' },
    ],
  },
];
