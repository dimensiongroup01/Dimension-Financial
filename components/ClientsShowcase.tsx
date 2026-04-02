'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const clients = [
  {
    short: 'Indian Oil',
    name: 'Indian Oil Corporation Limited',
    image: '/images/Indian Oil.png',
    accent: 'from-[#fff4dd] via-[#ffffff] to-[#e5f1ff]',
    description: 'Representative client relationship from DFS institutional and debt market execution experience.'
  },
  {
    short: 'NCDC',
    name: 'National Cooperative Development Corporation',
    image: '/images/NCDC.png',
    accent: 'from-[#ebfbf5] via-[#ffffff] to-[#dff6ff]',
    description: 'Illustrative of the institution-focused approach DFS follows across advisory and debt securities work.'
  },
  {
    short: 'NHPC',
    name: 'NHPC Limited (National Hydroelectric Power Corporation)',
    image: '/images/NHPC.png',
    accent: 'from-[#edf4ff] via-[#ffffff] to-[#e6fbff]',
    description: 'Part of the broader client network served through compliant, process-led market support.'
  },
  {
    short: 'KRIBHCO',
    name: 'Krishak Bharati Cooperative Limited',
    image: '/images/KRIBHCO.jpg',
    accent: 'from-[#f6f7ff] via-[#ffffff] to-[#ebfff8]',
    description: 'Reflects DFS experience supporting organizations with disciplined financial market execution.'
  },
  {
    short: 'CCI',
    name: 'Cement Corporation of India Limited',
    image: '/images/CCI.jpg',
    accent: 'from-[#fff1ec] via-[#ffffff] to-[#eaf4ff]',
    description: 'Shows the breadth of DFS relationships across corporates, institutions, and debt market participants.'
  },
  {
    short: 'EPIL',
    name: 'Engineering Projects (India) Ltd.',
    image: '/images/EPIL.jpg',
    accent: 'from-[#eefbff] via-[#ffffff] to-[#eef0ff]',
    description: 'Represents DFS focus on dependable service, professional conduct, and practical execution support.'
  },
  {
    short: 'Reckitt',
    name: 'Reckitt Benckiser Group plc',
    image: '/images/Reckitt.jpg',
    accent: 'from-[#eff8ff] via-[#ffffff] to-[#e9fff7]',
    description: 'An example of the varied organizations represented across the DFS client trust network.'
  },
  {
    short: 'Delhi Flour Mills',
    name: 'Delhi Flour Mills Co. Ltd.',
    image: '/images/Delhi Flour Mills.jpg',
    accent: 'from-[#fff8ea] via-[#ffffff] to-[#eef7ff]',
    description: 'Part of the long-term client ecosystem served through DFS financial advisory and market services.'
  },
  {
    short: 'Himalaya Food Company',
    name: 'Himalaya Food International Ltd.',
    image: '/images/Himalaya Food Company.png',
    accent: 'from-[#edfdf5] via-[#ffffff] to-[#eef5ff]',
    description: 'Highlights the diversity of clients supported through DFS debt securities and advisory capabilities.'
  }
];

export default function ClientsShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % clients.length);
    }, 3600);

    return () => window.clearInterval(id);
  }, []);

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

      const revealItems = section.querySelectorAll('.client-reveal');
      const thumbs = section.querySelectorAll<HTMLElement>('.client-thumb');

      ctx = gsap.context(() => {
        gsap.from(revealItems, {
          opacity: 0,
          y: 30,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%'
          }
        });
      }, section);

      thumbs.forEach((thumb) => {
        const onMove = (event: MouseEvent) => {
          const bounds = thumb.getBoundingClientRect();
          const px = (event.clientX - bounds.left) / bounds.width - 0.5;
          const py = (event.clientY - bounds.top) / bounds.height - 0.5;

          gsap.to(thumb, {
            rotateY: px * 8,
            rotateX: -py * 8,
            y: -4,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 1200
          });
        };

        const onLeave = () => {
          gsap.to(thumb, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            duration: 0.35,
            ease: 'power2.out'
          });
        };

        thumb.addEventListener('mousemove', onMove);
        thumb.addEventListener('mouseleave', onLeave);

        (thumb as HTMLElement & { __cleanup?: () => void }).__cleanup = () => {
          thumb.removeEventListener('mousemove', onMove);
          thumb.removeEventListener('mouseleave', onLeave);
        };
      });
    })();

    return () => {
      isActive = false;
      const thumbs = section.querySelectorAll<HTMLElement>('.client-thumb');
      thumbs.forEach((thumb) => {
        (thumb as HTMLElement & { __cleanup?: () => void }).__cleanup?.();
      });
      ctx?.revert();
    };
  }, []);

  const activeClient = clients[activeIndex];

  return (
    <section ref={sectionRef} className="section-shell pb-16 md:pb-24">
      <div className="relative overflow-hidden rounded-[2.2rem] border border-[#eadcc1] bg-[linear-gradient(180deg,#fffdf8_0%,#f7f1e6_100%)] p-4 shadow-[0_22px_70px_rgba(20,30,51,0.08)] md:p-6">
        <div className="pointer-events-none absolute left-[-8%] top-[-15%] h-64 w-64 rounded-full bg-[#d6b678]/18 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-6%] h-72 w-72 rounded-full bg-[#10284a]/10 blur-3xl" />

        <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)]">
          <div className="client-reveal overflow-hidden rounded-[1.8rem] border border-[#eadcc1] bg-white/92 shadow-[0_18px_48px_rgba(20,30,51,0.08)]">
            <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${activeClient.accent}`}>
              <Image
                key={activeClient.image}
                src={activeClient.image}
                alt={activeClient.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-6 md:p-10"
              />
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:p-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8b6a2e]">Featured Client</p>
                <h3 className="mt-2 font-display text-3xl font-semibold leading-tight text-[#10284a] md:text-4xl">
                  {activeClient.short}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#5a6678] md:text-base">{activeClient.name}</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#334155] md:text-base">{activeClient.description}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex - 1 + clients.length) % clients.length)}
                  className="rounded-full border border-[#d8c39a]/70 bg-[#fff8eb] px-4 py-2 text-sm font-semibold text-[#10284a] transition hover:-translate-y-0.5"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex + 1) % clients.length)}
                  className="rounded-full bg-[#10284a] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="client-reveal rounded-[1.8rem] border border-[#eadcc1] bg-[linear-gradient(180deg,#fffdfa,#f7f1e7)] p-4 shadow-[0_18px_48px_rgba(20,30,51,0.07)] md:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8b6a2e]">Client Network</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[#10284a]">Trusted relationships</h3>
              </div>
              <div className="rounded-full border border-[#eadcc1] bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
                {activeIndex + 1} / {clients.length}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {clients.map((client, index) => (
                <button
                  key={client.short}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`client-thumb overflow-hidden rounded-[1.35rem] border bg-white text-left shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition ${
                    index === activeIndex
                      ? 'border-[#d6b678]/70 ring-2 ring-[#d6b678]/25'
                      : 'border-[#f1e7d2] hover:border-[#d8c39a]/70'
                  }`}
                >
                  <div className={`grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-4 bg-gradient-to-br ${client.accent} p-3`}>
                    <div className="relative h-20 overflow-hidden rounded-[1rem] border border-white/80 bg-white/80">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        sizes="160px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8b6a2e]">Client Trust</p>
                      <h4 className="mt-1 truncate text-lg font-semibold text-[#10284a]">{client.short}</h4>
                      <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#556274]">{client.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="client-reveal relative z-10 mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-[#eadcc1] bg-white/88 px-4 py-4 shadow-[0_12px_30px_rgba(20,30,51,0.05)] md:px-5">
          <p className="text-sm leading-7 text-[#556274]">
            DFS works with institutions, corporates, trusts, and market participants across merchant banking, debt
            securities, and related financial advisory requirements.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#10284a] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#163765]"
            >
              Talk to DFS
            </Link>
            <Link
              href="/about-us"
              className="rounded-full border border-[#d8c39a]/70 bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#10284a] transition hover:-translate-y-0.5 hover:border-[#b58e43]"
            >
              See Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
