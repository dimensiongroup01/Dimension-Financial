'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedSections() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    let isActive = true;
    let ctx: { revert: () => void } | null = null;
    let floatTween: { kill: () => void } | null = null;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger')
      ]);
      if (!isActive) {
        return;
      }
      gsap.registerPlugin(ScrollTrigger);

      const cards = root.querySelectorAll('.reveal-card');

      ctx = gsap.context(() => {
        gsap.from(cards, {
          y: 42,
          opacity: 0,
          duration: 0.8,
          stagger: 0.16,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#services',
            start: 'top 92%'
          }
        });

        gsap.to(cards, {
          yPercent: -10,
          ease: 'none',
          stagger: 0.08,
          scrollTrigger: {
            trigger: '#services',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });

        gsap.from('#insights-panel', {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#insights',
            start: 'top 80%'
          }
        });
      }, root);

      floatTween = gsap.to(cards, {
        y: -8,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.12
      });
    })();

    return () => {
      isActive = false;
      floatTween?.kill();
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={rootRef}>
      <section id="insights" className="section-shell pt-2 pb-16 md:pt-4 md:pb-20">
        <div id="insights-panel" className="card shadow-glow grid gap-8 p-7 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-center md:p-10">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-aqua">Market Radar</p>
            <h3 className="font-display text-2xl md:text-4xl">See risk before it compounds.</h3>
            <p className="mt-4 max-w-xl text-sm text-slate-800 md:text-base">
              We work with corporates, PF trusts, institutions, and investors to deliver structured support across debt and equity market opportunities.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200/80 bg-slate/70 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-gold">Snapshot</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-800">
              <li>Debt securities placement with institutions and trust entities</li>
              <li>M&A and valuation support for restructuring and growth mandates</li>
              <li>SEBI and Companies Act aligned execution framework</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}




