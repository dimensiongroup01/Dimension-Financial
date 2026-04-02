'use client';

import { useEffect, useRef } from 'react';

type FusionVariant = 'home' | 'about' | 'services' | 'merchant' | 'stock' | 'contact' | 'career' | 'annual' | 'deals';

type Orb = {
  x: number;
  y: number;
  z: number;
  scale: number;
  color: string;
};

type FusionPreset = {
  label: string;
  title: string;
  description: string;
  highlights: string[];
  orbs: Orb[];
};

const presets: Record<FusionVariant, FusionPreset> = {
  home: {
    label: 'Dimension Financial Solutions',
    title: 'SEBI-registered Merchant Banking and Debt Stock Broking platform.',
    description:
      'From capital market solutions to debt advisory services, we connect structuring, compliance, and execution into one coordinated framework.',
    highlights: ['Merchant Banking', 'Debt Advisory', 'Stock Broking'],
    orbs: [
      { x: -320, y: -180, z: -220, scale: 0.8, color: 'from-cyan-300/90 to-blue-500/50' },
      { x: 340, y: -140, z: -260, scale: 0.7, color: 'from-blue-200/90 to-cyan-500/40' },
      { x: -360, y: 160, z: -180, scale: 0.9, color: 'from-sky-200/80 to-blue-400/45' },
      { x: 300, y: 190, z: -210, scale: 0.75, color: 'from-cyan-100/90 to-sky-500/35' },
      { x: 0, y: -250, z: -280, scale: 0.65, color: 'from-blue-100/80 to-blue-600/40' }
    ]
  },
  about: {
    label: 'Leadership Convergence',
    title: 'Vision, governance, and execution come together with institutional discipline.',
    description:
      'Our team combines compliance rigor and transaction experience to deliver reliable outcomes for corporates and investors.',
    highlights: ['Governance', 'Compliance', 'Execution'],
    orbs: [
      { x: -300, y: -170, z: -190, scale: 0.85, color: 'from-blue-300/85 to-cyan-500/45' },
      { x: 280, y: -150, z: -230, scale: 0.75, color: 'from-cyan-200/80 to-sky-500/45' },
      { x: -260, y: 190, z: -200, scale: 0.8, color: 'from-sky-100/85 to-blue-500/45' },
      { x: 260, y: 190, z: -180, scale: 0.8, color: 'from-cyan-100/90 to-blue-400/45' },
      { x: 20, y: -250, z: -260, scale: 0.65, color: 'from-blue-100/90 to-cyan-600/40' }
    ]
  },
  services: {
    label: 'Service Engine',
    title: 'Equity, debt, and advisory services working in one compliant execution model.',
    description:
      'Issue management, debt advisory, and debt placement capabilities are integrated for end-to-end transaction support.',
    highlights: ['Issue Management', 'Debt Advisory', 'Debt Placement'],
    orbs: [
      { x: -360, y: -120, z: -210, scale: 0.9, color: 'from-cyan-300/90 to-blue-600/45' },
      { x: 360, y: -120, z: -210, scale: 0.9, color: 'from-blue-200/90 to-cyan-500/45' },
      { x: -220, y: 220, z: -210, scale: 0.75, color: 'from-sky-100/85 to-blue-500/45' },
      { x: 220, y: 220, z: -210, scale: 0.75, color: 'from-cyan-100/85 to-sky-500/45' },
      { x: 0, y: -260, z: -280, scale: 0.65, color: 'from-blue-100/90 to-blue-600/40' }
    ]
  },
  merchant: {
    label: 'Capital Formation',
    title: 'Emerging Merchant Banking Platform with Execution Discipline.',
    description:
      'As a focused new-age merchant banker, we support IPO, FPO, rights issues, QIP, buyback, delisting, and takeover mandates with compliance-first transaction control.',
    highlights: ['Emerging Merchant Banker', 'Compliance-Led Execution', 'M&A and Debt Capability'],
    orbs: [
      { x: -330, y: -160, z: -230, scale: 0.85, color: 'from-cyan-300/90 to-blue-600/45' },
      { x: 320, y: -170, z: -210, scale: 0.75, color: 'from-blue-200/90 to-cyan-500/45' },
      { x: -260, y: 170, z: -180, scale: 0.8, color: 'from-sky-200/85 to-blue-500/45' },
      { x: 300, y: 150, z: -200, scale: 0.8, color: 'from-cyan-100/85 to-sky-500/45' },
      { x: 0, y: -250, z: -290, scale: 0.65, color: 'from-blue-100/90 to-blue-700/40' }
    ]
  },
  stock: {
    label: 'Market Execution',
    title: 'Signals, liquidity, and timing combine for precise debt segment execution.',
    description:
      'Institutional broking and Bondsadda platform access with data-driven execution across bonds, debentures, and government securities.',
    highlights: ['Debt Segment Broking', 'Bondsadda Platform', 'Institutional Support'],
    orbs: [
      { x: -300, y: -190, z: -220, scale: 0.85, color: 'from-blue-300/90 to-cyan-500/45' },
      { x: 350, y: -120, z: -260, scale: 0.7, color: 'from-cyan-200/90 to-blue-600/40' },
      { x: -350, y: 140, z: -180, scale: 0.85, color: 'from-sky-100/85 to-blue-500/45' },
      { x: 260, y: 210, z: -200, scale: 0.8, color: 'from-cyan-100/85 to-sky-500/45' },
      { x: 40, y: -260, z: -300, scale: 0.65, color: 'from-blue-100/90 to-blue-700/40' }
    ]
  },
  contact: {
    label: 'Advisory Interface',
    title: 'Connect directly with our office and compliance teams.',
    description:
      'Engagement channels are structured for clarity, compliance, and quick initiation of merchant banking and debt mandates.',
    highlights: ['Office Support', 'Compliance Contact', 'Mandate Initiation'],
    orbs: [
      { x: -300, y: -150, z: -190, scale: 0.88, color: 'from-cyan-300/90 to-blue-500/45' },
      { x: 280, y: -140, z: -230, scale: 0.76, color: 'from-blue-200/90 to-cyan-500/45' },
      { x: -270, y: 185, z: -190, scale: 0.78, color: 'from-sky-100/90 to-blue-500/45' },
      { x: 275, y: 175, z: -185, scale: 0.79, color: 'from-cyan-100/90 to-sky-500/45' },
      { x: 0, y: -250, z: -275, scale: 0.64, color: 'from-blue-100/90 to-blue-700/40' }
    ]
  },
  career: {
    label: 'Talent Platform',
    title: 'Careers built on transaction exposure, market depth, and disciplined execution.',
    description:
      'Join teams that work on real capital outcomes while building a long-term advisory career with institutional standards.',
    highlights: ['Deal Exposure', 'Mentored Growth', 'Institutional Culture'],
    orbs: [
      { x: -330, y: -160, z: -220, scale: 0.84, color: 'from-cyan-300/90 to-blue-600/45' },
      { x: 330, y: -160, z: -230, scale: 0.74, color: 'from-blue-200/90 to-cyan-500/45' },
      { x: -285, y: 175, z: -190, scale: 0.8, color: 'from-sky-100/90 to-blue-500/45' },
      { x: 285, y: 175, z: -190, scale: 0.8, color: 'from-cyan-100/90 to-sky-500/45' },
      { x: 15, y: -250, z: -290, scale: 0.63, color: 'from-blue-100/90 to-blue-700/40' }
    ]
  },
  annual: {
    label: 'Disclosure Layer',
    title: 'Investor disclosures presented with transparent access and regulatory discipline.',
    description:
      'Annual returns and statutory records are organized for quick verification and institutional confidence.',
    highlights: ['Investor Corner', 'Statutory Reports', 'Transparent Access'],
    orbs: [
      { x: -305, y: -155, z: -210, scale: 0.84, color: 'from-cyan-300/90 to-blue-500/45' },
      { x: 300, y: -145, z: -220, scale: 0.75, color: 'from-blue-200/90 to-cyan-500/45' },
      { x: -270, y: 180, z: -180, scale: 0.79, color: 'from-sky-100/90 to-blue-500/45' },
      { x: 275, y: 180, z: -185, scale: 0.78, color: 'from-cyan-100/90 to-sky-500/45' },
      { x: 5, y: -255, z: -285, scale: 0.63, color: 'from-blue-100/90 to-blue-700/40' }
    ]
  },
  deals: {
    label: 'Execution Ledger',
    title: 'Mandates transformed into measurable outcomes across debt, equity, and advisory tracks.',
    description:
      'Each transaction reflects structured strategy, calibrated execution, and compliance-led discipline.',
    highlights: ['Debt Placement', 'IPO Mandates', 'Advisory Closures'],
    orbs: [
      { x: -325, y: -175, z: -220, scale: 0.86, color: 'from-cyan-300/90 to-blue-600/45' },
      { x: 340, y: -145, z: -245, scale: 0.73, color: 'from-blue-200/90 to-cyan-500/45' },
      { x: -320, y: 165, z: -190, scale: 0.81, color: 'from-sky-100/90 to-blue-500/45' },
      { x: 260, y: 200, z: -190, scale: 0.8, color: 'from-cyan-100/90 to-sky-500/45' },
      { x: 35, y: -250, z: -290, scale: 0.63, color: 'from-blue-100/90 to-blue-700/40' }
    ]
  }
};

type ScrollFusion3DProps = {
  variant?: FusionVariant;
  compact?: boolean;
};

export default function ScrollFusion3D({ variant = 'home', compact = false }: ScrollFusion3DProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const preset = presets[variant];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    let isActive = true;
    let ctx: { revert: () => void } | null = null;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger')
      ]);
      if (!isActive) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const orbs = gsap.utils.toArray<HTMLElement>(section.querySelectorAll('.fusion-orb'));
      const core = section.querySelector('.fusion-core');
      const copy = section.querySelector('.fusion-copy');

      ctx = gsap.context(() => {
        orbs.forEach((orb, index) => {
          const cfg = preset.orbs[index];
          gsap.set(orb, {
            x: cfg.x,
            y: cfg.y,
            z: cfg.z,
            scale: cfg.scale,
            rotateX: gsap.utils.random(-30, 30),
            rotateY: gsap.utils.random(-30, 30)
          });
        });

        gsap.set(core, { scale: 0.55, opacity: 0.5 });
        gsap.set(copy, { opacity: 0.35, y: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.1
          }
        });

        tl.to(
          orbs,
          {
            x: 0,
            y: 0,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            ease: 'power2.inOut',
            stagger: 0.08
          },
          0
        )
          .to(
            core,
            {
              scale: 1,
              opacity: 1,
              ease: 'power2.out'
            },
            0.1
          )
          .to(
            copy,
            {
              opacity: 1,
              y: 0,
              ease: 'power2.out'
            },
            0.2
          );
      }, section);
    })();

    return () => {
      isActive = false;
      ctx?.revert();
    };
  }, [variant]);

  return (
    <section ref={sectionRef} className={`relative border-y border-blue-200/70 ${compact ? 'h-[140vh]' : 'h-[180vh]'}`}>
      <div className={`sticky top-16 flex items-center justify-center overflow-hidden ${compact ? 'h-[calc(88vh-4rem)]' : 'h-[calc(100vh-4rem)]'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,155,255,0.24),transparent_64%)]" />

        <div className="[perspective:1300px]">
          <div className="relative h-[380px] w-[380px] [transform-style:preserve-3d] md:h-[460px] md:w-[460px]">
            {preset.orbs.map((orb, index) => (
              <div
                key={`${orb.color}-${index}`}
                className={`fusion-orb absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${orb.color} blur-[0.4px] shadow-[0_0_60px_rgba(47,155,255,0.45)] md:h-36 md:w-36`}
              />
            ))}

            <div className="fusion-core absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200 bg-white shadow-[0_0_80px_rgba(223,241,255,0.9)] md:h-24 md:w-24" />
          </div>
        </div>

        <div className="fusion-copy absolute bottom-12 left-1/2 w-full max-w-2xl -translate-x-1/2 px-6 text-center md:bottom-16">
          <p className="text-xs uppercase tracking-[0.22em] text-aqua">{preset.label}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-5xl">{preset.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink md:text-base">{preset.description}</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {preset.highlights.map((item) => (
              <span key={item} className="rounded-full border border-aqua/45 bg-aqua/15 px-3 py-1 text-xs text-ink md:text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


