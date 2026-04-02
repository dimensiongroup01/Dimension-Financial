'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

export default function SmoothScrollProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    let rafId = 0;
    let destroy: (() => void) | null = null;
    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const bootLenis = async () => {
      const lenis = new Lenis({
        duration: 0.75,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
        touchMultiplier: 1
      });
      lenisRef.current = lenis;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const onLenisScroll = () => ScrollTrigger.update();
      lenis.on('scroll', onLenisScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
      destroy = () => {
        cancelAnimationFrame(rafId);
        lenis.off('scroll', onLenisScroll);
        lenis.destroy();
        lenisRef.current = null;
      };
    };

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(() => bootLenis(), { timeout: 600 });
    } else {
      timeoutId = setTimeout(() => bootLenis(), 180);
    }

    return () => {
      if (idleId !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (destroy) {
        destroy();
      } else {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    lenis.stop();
    lenis.scrollTo(0, { immediate: true });
    lenis.start();
  }, [pathname]);

  return <>{children}</>;
}
