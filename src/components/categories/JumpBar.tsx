'use client';

import { useEffect, useState } from 'react';

interface CategoryItem {
  id: string;
  title: string;
}

interface JumpBarProps {
  categories: CategoryItem[];
}

export default function JumpBar({ categories }: JumpBarProps) {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id || '');

  useEffect(() => {
    if (categories.length === 0) return;
    
    const elements = categories.map(cat => document.getElementById(cat.id)).filter(Boolean) as HTMLElement[];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find elements currently intersecting the viewport
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by boundingClientRect.top to find the one closest to the top of the viewport
        const sorted = visibleEntries.sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        setActiveId(sorted[0].target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-80px 0px -60% 0px', // Accounting for top navigation bar height
      threshold: 0
    });

    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [categories]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 90; // Header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveId(id);
      
      // Update browser hash silently without scrolling
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="jump-bar" id="jumpBar" aria-label="카테고리 빠른 이동">
      {categories.map((cat) => (
        <a
          key={cat.id}
          className={`jump-chip ${activeId === cat.id ? 'active' : ''}`}
          href={`#${cat.id}`}
          onClick={(e) => handleClick(e, cat.id)}
        >
          {cat.title}
        </a>
      ))}
    </nav>
  );
}
