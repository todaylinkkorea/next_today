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
      { name: '티비위키', url: 'https://tvwiki50.net/' },
      { name: '누누티비', url: 'https://nooo34.tv/' },
      { name: '미미티비', url: 'https://mimitv6.com/' },
      { name: '온도티비', url: 'https://21.ondotv.com/' },
      { name: '티비룸', url: 'https://tvroom34.org/' },
      { name: '티비몬', url: 'https://tvmon1.com/' },
      { name: '바다티비', url: 'https://bada54.com/' },
    ],
  },
  {
    id: 'adult-panel', title: '성인', sub: '성인 콘텐츠 사이트', icon: '🔞',
    items: [
      { name: '야스닷컴', url: 'https://yasyadong02.tv/' },
      { name: '야동코리아', url: 'https://yako47.com/' },
      { name: '다크걸', url: 'https://darkg19.com/' },
      { name: '야동투어', url: 'https://ydtour72.sbs/' },
      { name: '섹플릭스', url: 'https://sexflix25.com/' },
      { name: '왕부랄', url: 'https://wangtv14.com/' },
      { name: '조개모아', url: 'https://jogemoa5.com/' },
    ],
  },
  {
    id: 'foreign-panel', title: '해외성인', sub: '해외 성인 사이트', icon: '🌐',
    items: [
      { name: '폰허브', url: 'https://fr.pornhub.org/' },
      { name: '스팽뱅', url: 'https://spankbang.party/' },
      { name: '엑스햄스터', url: 'https://xhtotal.com/' },
      { name: '엑스비디오', url: 'https://xvideos-k8.com/' },
      { name: 'AV탑걸', url: 'https://kr47.topgirl.co/' },
      { name: '스트립쳇', url: 'https://ko.stripchat.com/' },
      { name: '피그AV', url: 'https://pigav.com/' },
    ],
  },
  {
    id: 'webtoon-panel', title: '웹툰', sub: '웹툰 플랫폼', icon: '📚',
    items: [
      { name: '뉴토끼', url: 'https://toki31.com/' },
      { name: '늑대닷컴', url: 'https://wfwf503.com/' },
      { name: '툰코', url: 'https://tkor155.com/' },
      { name: '야툰', url: 'https://yatoon252.asia/' },
      { name: '펀비', url: 'https://funbe677.com/' },
      { name: '애니위크', url: 'https://aniweek.com/' },
      { name: '애니24', url: 'https://ani.ohli24.com/' },
    ],
  },
  {
    id: 'sports-panel', title: '스포츠중계', sub: '실시간 스포츠 중계', icon: '⚽',
    items: [
      { name: '헐크티비', url: 'https://www.hulk24.com/' },
      { name: '네오티비', url: 'https://neotv24.com/' },
      { name: '건담티비', url: 'https://gdtv24.com/' },
      { name: '로얄티비', url: 'https://rytv02.com/' },
      { name: '블랙티비', url: 'https://blacktv22.com/' },
      { name: '콜라티비', url: 'https://colatv01.com/' },
      { name: '저쩔티비', url: 'https://xn--tv-vc9j20f.com/' },
    ],
  },
  {
    id: 'opi-panel', title: '오피/유흥', sub: '유흥 정보 사이트', icon: '🏮',
    items: [
      { name: '오피가이드', url: 'https://opga042.com/' },
      { name: '오피매니아', url: 'https://opmm07.com/' },
      { name: '오피스타', url: 'https://opmart24.com/' },
      { name: '오피나라', url: 'https://opnara11.com/' },
      { name: '오피뷰', url: 'https://opview85.com/' },
      { name: '외로운밤', url: 'https://lybam8.com/' },
      { name: '섹밤', url: 'https://sexbam59.top/' },
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
      { name: '먹튀갤', url: 'https://mtgal.com/' },
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
      { name: '바나나몰', url: 'https://www.bananamall.co.kr/' },
      { name: '조이앤조이', url: 'https://www.joynjoy.com/' },
      { name: '좋은느낌', url: 'https://nicefeels.kr/' },
      { name: '비아그라', url: 'https://herb-ming.com/' },
      { name: '로맨스몰', url: 'https://romancemall.co.kr/' },
      { name: '원큐샵', url: 'https://1qshop.com/' },
      { name: '핑크박스', url: 'https://www.pinkboxshop.com/' },
    ],
  },
  {
    id: 'photo-panel', title: '성인화보', sub: '화보 사이트', icon: '📸',
    items: [
      { name: 'MAXIM', url: 'https://www.maximkorea.net/' },
      { name: 'AsiaOnTop', url: 'https://asiaon.top/category/by-country/korean/' },
      { name: 'HotGirl', url: 'https://hotgirl.asia/' },
      { name: 'MissKon', url: 'https://misskon.com/' },
      { name: 'V2 PH', url: 'https://www.v2ph.com/country/south-korea?hl=ko' },
      { name: '4KHD', url: 'https://hecoq.uuss.uk/' },
      { name: 'TAOTU', url: 'https://ko.taotu.org/' },
    ],
  },
];