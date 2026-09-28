import '@/styles/todaylink.css';
import { CategoryNav } from '@/components/site/CategoryNav';
import { MobileBottomNav } from '@/components/site/MobileBottomNav';
import { SearchModal } from '@/components/site/SearchModal';
import { SidebarDrawer } from '@/components/site/SidebarDrawer';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteUiProvider } from '@/components/site/SiteUiProvider';
import { Toast } from '@/components/site/Toast';
import { TopUtilityBar } from '@/components/site/TopUtilityBar';
import { PRETENDARD_CSS_INTEGRITY, PRETENDARD_CSS_URL } from '@/data/site-config';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
      <link
        rel="stylesheet"
        href={PRETENDARD_CSS_URL}
        integrity={PRETENDARD_CSS_INTEGRITY}
        crossOrigin="anonymous"
        precedence="default"
      />
      <SiteUiProvider>
        <SidebarDrawer />
        <TopUtilityBar />
        <SiteHeader />
        <CategoryNav />
        <div id="content-scroll-target" style={{ scrollMarginTop: 64 }} />
        <main
          id="app-viewport"
          className="container"
          style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}
        >
          {children}
        </main>
        <SiteFooter />
        <MobileBottomNav />
        <SearchModal />
        <Toast />
      </SiteUiProvider>
    </>
  );
}
