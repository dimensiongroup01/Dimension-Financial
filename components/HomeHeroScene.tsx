'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import GlobeHero from '@/components/GlobeHero';

const highlights = [
  { label: 'Since', value: '2009' },
  { label: 'Core Service', value: 'Merchant Banking | Debt Securities' },
  { label: 'Status', value: 'SEBI-Registered Merchant Banker' }
];

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
      const statCards = root.querySelectorAll('.hero-stat-card');
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

        gsap.to(statCards, {
          yPercent: -6,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
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
      <div className="hero-glow absolute left-[-10%] top-[-12%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(181,142,67,0.18),rgba(181,142,67,0))] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_16%,rgba(255,255,255,0.95),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(16,40,74,0.08),transparent_24%),linear-gradient(rgba(17,40,74,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(181,142,67,0.05)_1px,transparent_1px)] bg-[size:auto,auto,44px_44px,44px_44px]" />

      <div className="section-shell relative z-10 grid gap-10 pt-12 pb-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start md:pt-16 md:pb-14 xl:gap-14">
        <div className="hero-copy max-w-[42rem]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8b6a2e]">Dimension Financial Solutions</p>

          <div className="mt-4 space-y-3">
            <div className="inline-flex rounded-full border border-[#d6b678]/60 bg-[linear-gradient(135deg,#fff8ea,#ffffff)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#7a5a1e] shadow-[0_10px_24px_rgba(181,142,67,0.14)]">
              SEBI-Registered Merchant Banker
            </div>
            <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[0.94] text-[#10284a] md:text-6xl xl:text-[5.25rem]">
              Merchant banking and debt securities services with a stronger financial identity.
            </h1>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#324156] md:text-lg">
            Dimension Financial Solutions Private Limited delivers merchant banking, debt securities, and financial
            advisory services with integrity, compliance discipline, and a client-centric operating model.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#10284a] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#163765]"
            >
              Start a Conversation
            </Link>
            <Link
              href="/about-us"
              className="rounded-full border border-[#d8c39a]/70 bg-[#fffaf0] px-6 py-3 text-sm font-semibold text-[#10284a] transition hover:-translate-y-0.5 hover:bg-[#f5ebd3]"
            >
              Explore the Firm
            </Link>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className={`hero-stat-card rounded-[1.35rem] border p-4 ${
                  item.label === 'Status'
                    ? 'border-[#d6b678]/65 bg-[linear-gradient(135deg,#fffaf0,#ffffff)] shadow-[0_18px_34px_rgba(181,142,67,0.12)]'
                    : 'border-[#eadcc1] bg-[rgba(255,255,255,0.85)] shadow-[0_14px_30px_rgba(20,30,51,0.06)]'
                }`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8b6a2e]">{item.label}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#10284a]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative pt-2 md:pt-0">
          <div className="hero-panel overflow-hidden rounded-[2rem] border border-[#eadcc1] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(249,244,235,0.94))] p-3 shadow-[0_28px_80px_rgba(20,30,51,0.12)] md:p-5">
            <GlobeHero />

            <div className="mt-4 grid gap-3 border-t border-[#ebdfc8] pt-4 md:grid-cols-3">
              {pathways.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  data-tilt-card
                  className={`rounded-2xl border p-4 shadow-[0_12px_30px_rgba(20,30,51,0.07)] transition duration-300 hover:-translate-y-1 ${
                    index === 0
                      ? 'border-[#d6b678]/60 bg-[linear-gradient(180deg,#fff8ea,#ffffff)]'
                      : 'border-white/80 bg-white/90'
                  }`}
                >
                  <h2 className="text-sm font-semibold text-[#10284a] md:text-base">{item.title}</h2>
                  <p className="mt-2 text-xs leading-6 text-[#435067]">{item.copy}</p>
                  <span className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b6a2e]">
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
