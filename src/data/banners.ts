export interface TopBanner {
  id: string;
  name: string;
  url: string;
  image: string;
  badge?: string;
  alt: string;
}

// 비어 있으면 PartnerBanner가 12칸을 모두 배너문의 카드로 채웁니다.
export const topBanners: TopBanner[] = [];
