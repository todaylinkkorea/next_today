'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { LINK_CATEGORIES } from '@/data/link-data';
import { CategoryIcon } from './CategoryIcon';
import { useDragScroll } from './useDragScroll';

export function CategoryNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  useDragScroll(navRef, '.cat-nav-btn');

  useEffect(() => {
    const activeItem = navRef.current?.querySelector<HTMLElement>('.cat-nav-btn.active');
    if (!activeItem) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    activeItem.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [pathname]);

  return (
    <nav className="category-nav-bar" aria-label="카테고리">
      <div className="container cat-nav-outer">
        <div className="cat-nav-container" ref={navRef}>
          {LINK_CATEGORIES.map(({ slug, icon, name }) => {
            const active = pathname === `/category/${slug}`;
            return (
              <Link
                key={slug}
                href={`/category/${slug}`}
                className={`cat-nav-btn${active ? ' active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                <CategoryIcon icon={icon} />
                <span>{name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
