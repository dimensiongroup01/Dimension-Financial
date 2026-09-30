'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import GlobeHero from '@/components/GlobeHero';

const pathways = [
  {
    title: 'Merchant Banking',
    copy: 'Comprehensive merchant banking support with regulatory understanding and transaction-focused execution.',
    href: '/merchant-banking'
  },
  {
    title: 'Debt Advisory',
    copy: 'Support across bonds, debentures, government securities, and institution-facing debt requirements.',
    href: '/services'
  },
  {
    title: 'Stock Broking',
    copy: 'Debt market execution as a SEBI-registered stock broker and trading member on the BSE New Debt Segment.',
    href: '/stock-broking'
  }
];

export default function HomeHeroScene() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let active = true;
    let cleanupCards: (() => void) | null = null;
    let ctx: { revert: () => void } | null = null;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger')
      ]);

      if (!active) return;

      gsap.registerPlugin(ScrollTrigger);

      const heroGlow = root.querySelector('.hero-glow');
      const panels = root.querySelectorAll('.hero-panel');
      const tiltCards = root.querySelectorAll<HTMLElement>('[data-tilt-card]');

      ctx = gsap.context(() => {
        gsap.from('.hero-copy > *', {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power2.out'
        });

        gsap.from(panels, {
          opacity: 0,
          y: 28,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power2.out'
        });

        gsap.to(heroGlow, {
          yPercent: -10,
          xPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.1
          }
        });
      }, root);

      tiltCards.forEach((card) => {
        const onMove = (event: MouseEvent) => {
          const bounds = card.getBoundingClientRect();
          const px = (event.clientX - bounds.left) / bounds.width - 0.5;
          const py = (event.clientY - bounds.top) / bounds.height - 0.5;

          gsap.to(card, {
            rotateY: px * 8,
            rotateX: -py * 8,
            y: -4,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 1200
          });
        };

        const onLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            duration: 0.35,
            ease: 'power2.out'
          });
        };

        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);
        (card as HTMLElement & { __cleanup?: () => void }).__cleanup = () => {
          card.removeEventListener('mousemove', onMove);
          card.removeEventListener('mouseleave', onLeave);
        };
      });

      cleanupCards = () => {
        tiltCards.forEach((card) => {
          (card as HTMLElement & { __cleanup?: () => void }).__cleanup?.();
        });
      };
    })();

    return () => {
      active = false;
      cleanupCards?.();
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden border-b border-[#dbc7a0]/50 bg-[linear-gradient(180deg,#fbf8f2_0%,#f5efdf_42%,#fcfaf5_100%)]"
    >
      <div className="hero-glow absolute left-[-10%] top-[-12%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(181,142,67,0.18),rgba(181,142,67,0))] blur-3xl sm:h-[24rem] sm:w-[24rem] md:h-[28rem] md:w-[28rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_16%,rgba(255,255,255,0.95),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(16,40,74,0.08),transparent_24%),linear-gradient(rgba(17,40,74,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(181,142,67,0.05)_1px,transparent_1px)] bg-[size:auto,auto,44px_44px,44px_44px]" />

      <div className="section-shell relative z-10 grid gap-8 pt-8 pb-8 sm:pt-10 sm:pb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start md:pt-14 md:pb-12">
        <div className="hero-copy max-w-[40rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b6a2e]">
            Dimension Financial Solutions
          </p>

          <div className="mt-3 space-y-2">
            <div className="inline-flex rounded-full border border-[#d6b678]/60 bg-[linear-gradient(135deg,#fff8ea,#ffffff)] px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#7a5a1e] shadow-[0_10px_24px_rgba(181,142,67,0.14)] sm:px-4 sm:text-[10px] sm:tracking-[0.22em]">
              SEBI-Registered Merchant Banker
            </div>

            <h1 className="max-w-3xl font-display text-[1.35rem] font-semibold leading-[1.05] text-[#10284a] sm:text-[1.65rem] sm:leading-[1.02] md:text-[2rem] md:leading-[1.0]">
              Merchant banking and debt securities services with a stronger financial identity.
            </h1>
          </div>

          <p className="mt-4 max-w-2xl text-xs leading-6 text-[#324156] md:text-sm md:leading-7">
            Dimension Financial Solutions Private Limited delivers merchant banking, debt securities, and financial
            advisory services with integrity, compliance discipline, and a client-centric operating model.
          </p>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="rounded-full bg-[#10284a] px-5 py-2.5 text-center text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#163765]"
            >
              Start a Conversation
            </Link>
            <Link
              href="/about-us"
              className="rounded-full border border-[#d8c39a]/70 bg-[#fffaf0] px-5 py-2.5 text-center text-xs font-semibold text-[#10284a] transition hover:-translate-y-0.5 hover:bg-[#f5ebd3]"
            >
              Explore the Firm
            </Link>
          </div>
        </div>

        <div className="relative min-w-0 pt-2 md:pt-0">
          <div className="hero-panel overflow-hidden rounded-[1.5rem] border border-[#eadcc1] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(249,244,235,0.94))] p-3 shadow-[0_28px_80px_rgba(20,30,51,0.12)] sm:rounded-[2rem] md:p-4">
            <GlobeHero />

            <div className="mt-3 grid gap-2.5 border-t border-[#ebdfc8] pt-3 md:grid-cols-3">
              {pathways.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  data-tilt-card
                  className={`rounded-xl border p-3 shadow-[0_12px_30px_rgba(20,30,51,0.07)] transition duration-300 hover:-translate-y-1 ${
                    index === 0
                      ? 'border-[#d6b678]/60 bg-[linear-gradient(180deg,#fff8ea,#ffffff)]'
                      : 'border-white/80 bg-white/90'
                  }`}
                >
                  <h2 className="text-xs font-semibold text-[#10284a] md:text-sm">{item.title}</h2>
                  <p className="mt-1.5 text-[11px] leading-5 text-[#435067]">{item.copy}</p>
                  <span className="mt-3 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a2e]">
                    Learn More
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
