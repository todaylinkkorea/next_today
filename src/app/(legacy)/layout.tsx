import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

export default function LegacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="container">
        <main id="main-content">{children}</main>
      </div>
      <Footer />
    </>
  );
}
