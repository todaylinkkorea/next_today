'use client';

import { useEffect } from 'react';

const DRAG_THRESHOLD_PX = 4;
const DRAG_SPEED = 2;
// Unlike the original design, leaving the container resets drag state so later clicks are not suppressed.

export function useDragScroll(ref: React.RefObject<HTMLElement | null>, itemSelector: string) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasDragged = false;

    const handleMouseDown = (event: MouseEvent) => {
      isDown = true;
      hasDragged = false;
      startX = event.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseLeave = () => {
      isDown = false;
      hasDragged = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDown) return;
      const walk = (event.pageX - container.offsetLeft - startX) * DRAG_SPEED;
      if (Math.abs(walk) > DRAG_THRESHOLD_PX) hasDragged = true;
      if (hasDragged) {
        event.preventDefault();
        container.scrollLeft = scrollLeft - walk;
      }
    };

    const suppressDraggedClick = (event: MouseEvent) => {
      const target = event.target;
      if (hasDragged && target instanceof Element && target.closest(itemSelector)) {
        event.preventDefault();
        event.stopPropagation();
      }
      hasDragged = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('click', suppressDraggedClick, true);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('click', suppressDraggedClick, true);
    };
  }, [itemSelector, ref]);
}
