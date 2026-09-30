import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import dynamic from 'next/dynamic';
import HomeHeroScene from '@/components/HomeHeroScene';
import { Suspense } from 'react';

const AnimatedSections = dynamic(() => import('@/components/AnimatedSections'), {
  loading: () => <div className="section-shell py-20"><p className="text-center text-slate-400">Loading insights...</p></div>,
  ssr: true
});

const ClientsShowcase = dynamic(() => import('@/components/ClientsShowcase'), {
  loading: () => <section className="section-shell pb-24"><p className="text-center text-slate-400">Loading clients...</p></section>,
  ssr: true
});

const ScrollReveal = dynamic(() => import('@/components/ScrollReveal'), {
  loading: () => null,
  ssr: true
});

const missionPoints = [
  "Offer financial products and solutions tailored to our clients' needs.",
  'Uphold the highest standards of integrity so every action reflects our core business principles.',
  'Provide secure, efficient, and compliant services that minimize risk while supporting positive returns.',
  'Build a merchant banking institution of repute, driven by integrity and professional excellence.'
];

const stats = [
  { label: 'Deals Executed', value: '50+' },
  { label: 'AUM Managed', value: '₹1000 Cr+' },
  { label: 'Active Clients', value: '100+' }
];

const services = [
  {
    title: 'Merchant Banking',
    desc: 'SEBI-registered execution for IPOs, rights issues, private placements, and corporate advisory.',
    gradient: 'from-[#eaf5ff] to-[#d1eaff]',
    icon: (
      <svg className="h-9 w-9 text-[#0a355d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Debt Segment Broking',
    desc: 'BSE debt segment trading member with OBPP capabilities for institutional bond placements.',
    gradient: 'from-[#f0f9ff] to-[#e0f2fe]',
    icon: (
      <svg className="h-9 w-9 text-[#0a355d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 13l3-1m-3 1l-3 9" />
      </svg>
    )
  },
  {
    title: 'Debt Advisory & Placement',
    desc: 'Strategic placements for bonds, debentures, and NCDs with provident funds, trusts, and corporates.',
    gradient: 'from-[#f0fdf4] to-[#dcfce7]',
    icon: (
      <svg className="h-9 w-9 text-[#0a355d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M6 20h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function HomeLanding() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="grid-overlay min-h-screen">

      {/* ── Hero ── */}
      <HomeHeroScene />

      {/* ── Mission & Vision ── */}
      <section className="section-shell py-10 sm:py-12 md:py-16">
        <div className="rounded-2xl border border-white/90 bg-gradient-to-b from-white to-[#f5faff] p-5 shadow-[0_18px_52px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-6 md:p-8 lg:p-10">

          <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">

            {/* ── Left column: mission points ── */}
            <div className="flex flex-col">
              <p data-reveal className="text-xs uppercase tracking-[0.2em] text-aqua">
                Our Mission & Vision
              </p>
              <h2
                data-reveal
                className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
              >
                A clear purpose built on integrity, compliance, and long-term client trust.
              </h2>
              <p data-reveal className="mt-3 text-sm leading-7 text-ink sm:mt-4 md:text-base">
                DFS is committed to client-centric financial services shaped by professional excellence, ethical
                conduct, and disciplined market execution.
              </p>

              <ol data-reveal className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
                {missionPoints.map((point, index) => (
                  <li
                    key={point}
                    className="rounded-xl border border-blue-100/90 bg-white/92 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:rounded-[1.5rem] sm:p-5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#eaf5ff] to-white text-sm font-bold text-[#0a355d] shadow-[0_6px_14px_rgba(47,155,255,0.12)] sm:h-10 sm:w-10">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-slate-700 sm:leading-7 md:text-base">{point}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* ── Right column: vision + stats ── */}
            <div className="flex flex-col gap-4 sm:gap-5">

              {/* Vision card */}
              <div
                data-reveal
                className="rounded-xl border border-[#2f9bff]/18 bg-gradient-to-b from-[#eff7ff] to-white p-5 shadow-[0_16px_42px_rgba(47,155,255,0.08)] sm:rounded-[1.75rem] sm:p-6 md:p-7"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-aqua">Vision Statement</p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-slate-950 sm:mt-3 sm:text-2xl md:text-3xl">
                  To be a trusted name in merchant banking.
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700 sm:mt-4 sm:leading-7 md:text-base">
                  We envision establishing ourselves as a trusted name in merchant banking by upholding the highest
                  standards of ethical conduct, transparency, and client-centric service. Through unwavering integrity
                  and a commitment to excellence, we aim to deliver innovative financial solutions that foster long-term
                  value and sustainable growth.
                </p>
              </div>

              {/* Stats row */}
              <div data-reveal className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-blue-100/90 bg-white/92 p-3 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:rounded-[1.35rem] sm:p-5"
                  >
                    {/* Value shrinks gracefully on small screens */}
                    <p className="text-xl font-bold text-[#0a355d] sm:text-2xl md:text-3xl">{item.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-500 sm:mt-2 sm:text-xs sm:tracking-[0.16em]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="section-shell py-20"><p className="text-center text-slate-400">Loading insights...</p></div>}>
        <AnimatedSections />
      </Suspense>

      {/* ── Services ── */}
      <section id="services" className="section-shell py-12 sm:py-14 md:py-16 lg:py-20">

        {/* Section header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-aqua">Core Capabilities</p>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Specialized Merchant Banking Services
          </h2>
        </div>

        {/* Service cards grid */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal-card group card p-6 transition-all duration-500 hover:-translate-y-2 sm:p-7 md:p-8 ${
                /* last card spans full width on md when 2-col, resets on lg */
                i === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Icon */}
              <div
                className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} sm:mb-6 sm:h-20 sm:w-20`}
              >
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#0a355d] sm:mb-4 sm:text-2xl">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-slate-600 sm:leading-relaxed md:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Suspense fallback={<section className="section-shell pb-24"><p className="text-center text-slate-400">Loading clients...</p></section>}>
        <ClientsShowcase />
      </Suspense>
      <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}
