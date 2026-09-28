'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { LIFETIME_DOMAIN, LIFETIME_URL } from '@/data/site-config';
import { useDragScroll } from './useDragScroll';

function GoogleIcon() {
  return <svg viewBox="0 0 24 24" style={{ width: 20, height: 20 }} aria-hidden="true"><path fill="#4285F4" d="M23.745 12.27c-.07-.8-.67-1.6-1.4-1.9H12v4.8h6.6c-.3 1.5-1.5 3.1-3.2 4.1l5.2 4.05c3.05-2.82 4.945-6.97 4.345-11.05z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-5.2-4.05c-1.08.73-2.46 1.23-4.73 1.23-3.64 0-6.72-2.46-7.82-5.78H.68v4.2C2.71 21.04 7.02 24 12 24z"/><path fill="#FBBC05" d="M4.18 12.44c-.28-.84-.28-1.74 0-2.58V5.66H.68C-.23 7.47-.68 9.68-.68 12s.45 4.53 1.36 6.34l3.5-4.26z"/><path fill="#EA4335" d="M12 4.75c1.76 0 3.35.61 4.6 1.81l3.45-3.45C17.95 1.19 15.24 0 12 0 7.02 0 2.71 2.96.68 7.18l3.5 4.22c1.1-3.32 4.18-5.78 7.82-5.78z"/></svg>;
}

function NaverIcon() {
  return <svg viewBox="0 0 24 24" style={{ width: 20, height: 20 }} aria-hidden="true"><rect width="24" height="24" rx="4" fill="#03C75A"/><path d="M6.5 6.5H9.8L14.2 13V6.5H17.5V17.5H14.2L9.8 11V17.5H6.5V6.5Z" fill="#FFFFFF"/></svg>;
}

function XIcon() {
  return <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'currentColor' }} aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}

function TikTokIcon() {
  return <span className="tiktok-icon-wrapper" aria-hidden="true"><svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: '#FFFFFF' }}><path d="M14.5 3h3.1c.2 1.8 1.2 3 2.9 3.6v3.1a8.3 8.3 0 0 1-2.9-1V15a5.5 5.5 0 1 1-5.5-5.5c.4 0 .8 0 1.2.1v3.2a2.3 2.3 0 1 0 1.2 2.2V3Z"/></svg></span>;
}

function PortalLink({ href, title, label, children }: { href: string; title: string; label: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="portal-logo-icon-btn" title={title}>{children}<span>{label}</span></a>;
}

export function AddressBar() {
  const portalRef = useRef<HTMLDivElement>(null);
  useDragScroll(portalRef, '.portal-logo-icon-btn');

  return (
    <div className="address-portal-unified-bar">
      <div className="address-announcement-left">
        <span className="red-speaker" aria-hidden="true">🔊</span>
        <span>실시간주소:</span>
        <a className="address-domain-highlight" href={LIFETIME_URL} target="_blank" rel="noopener noreferrer">{LIFETIME_DOMAIN}</a>
      </div>
      <div className="portal-scroll-container" ref={portalRef}>
        <PortalLink href="https://www.google.com" title="Google" label="Google"><GoogleIcon /></PortalLink>
        <PortalLink href="https://www.naver.com" title="Naver" label="Naver"><NaverIcon /></PortalLink>
        <PortalLink href="https://www.youtube.com" title="YouTube" label="YouTube"><Image src="/images/youtube_s.svg" width={20} height={20} alt="" aria-hidden="true" /></PortalLink>
        <PortalLink href="https://www.instagram.com" title="Instagram" label="Instagram"><Image src="/images/instagram_s.svg" width={20} height={20} alt="" aria-hidden="true" /></PortalLink>
        <PortalLink href="https://www.facebook.com" title="Facebook" label="Facebook"><Image src="/images/facebook_s.svg" width={20} height={20} alt="" aria-hidden="true" /></PortalLink>
        <PortalLink href="https://twitter.com" title="X (Twitter)" label="Twitter"><XIcon /></PortalLink>
        <PortalLink href="https://www.tiktok.com" title="TikTok" label="TikTok"><TikTokIcon /></PortalLink>
      </div>
    </div>
  );
}
