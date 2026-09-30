'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';

export default function ScrollReveal() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!items.length) {
      return;
    }

    // Only apply initial styles after mount
    if (isMounted.current) {
      items.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 520ms ease, transform 520ms ease';
        item.style.willChange = 'opacity, transform';
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const element = entry.target as HTMLElement;
          if (isMounted.current) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.willChange = 'auto';
          }
          observer.unobserve(element);
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.14
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      items.forEach((item) => {
        item.style.removeProperty('opacity');
        item.style.removeProperty('transform');
        item.style.removeProperty('transition');
        item.style.removeProperty('will-change');
      });
    };
  }, []);

  return null;
}
