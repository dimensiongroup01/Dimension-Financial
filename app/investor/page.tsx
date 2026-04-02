import type { Metadata } from 'next';
import Link from 'next/link';
import InvestorTrackRecord from '@/components/InvestorTrackRecord';
import ScrollReveal from '@/components/ScrollReveal';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Investor Advisory',
  description:
    'Investor-focused advisory solutions including ECM support, private placements, debt structuring, M&A, and valuation guidance.',
  alternates: {
    canonical: '/investor'
  }
};

const capabilities = [
  'IPO & ECM Advisory',
  'Private Placements',
  'Debt Structuring',
  'M&A Transactions',
  'Valuation & Due Diligence'
];

const testimonials = [
  {
    quote: 'Dimension team aligned structuring and execution with exceptional discipline.',
    name: 'CFO, Mid-Cap Infrastructure Group'
  },
  {
    quote: 'Fast debt placement support with strong compliance depth and institutional communication.',
    name: 'Treasury Head, Financial Institution'
  },
  {
    quote: 'Clear advisory process from pre-mandate planning to transaction closure.',
    name: 'Promoter Group, Manufacturing Company'
  }
];

export default function InvestorPage() {
  return (
    <main className="grid-overlay">
      <SiteHeader />

      <section className="section-shell py-16 md:py-24">
        <p className="chapter-label">Investor Landing Page</p>
        <h1 className="chapter-title">Structured Capital Advisory for Institutional Growth</h1>
        <p className="chapter-copy mt-4">SEBI-Registered Merchant Banking Expertise</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="future-cta">
            Schedule Strategic Consultation
          </Link>
          <a href="/Documents/Dimension financial Presentation.pdf" target="_blank" rel="noreferrer" className="future-cta">
            Download Corporate Profile
          </a>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <p className="chapter-label">Institutional Capabilities</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item} data-reveal className="card p-5">
              <h2 className="font-display text-xl text-slate-900">{item}</h2>
            </article>
          ))}
        </div>
      </section>

      <InvestorTrackRecord />

      <section className="section-shell py-12 md:py-16">
        <p className="chapter-label">Compliance & Governance</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article data-reveal className="card p-6">
            <h2 className="font-display text-2xl">SEBI Registration</h2>
            <p className="mt-2 text-sm text-slate-800">SEBI-aligned merchant banking and debt segment execution framework.</p>
          </article>
          <article data-reveal className="card p-6">
            <h2 className="font-display text-2xl">Due Diligence Process</h2>
            <p className="mt-2 text-sm text-slate-800">Structured process controls from mandate onboarding to final closure reporting.</p>
          </article>
          <article data-reveal className="card p-6">
            <h2 className="font-display text-2xl">Risk Framework</h2>
            <p className="mt-2 text-sm text-slate-800">Transaction risk calibration and scenario planning integrated across assignments.</p>
          </article>
          <article data-reveal className="card p-6">
            <h2 className="font-display text-2xl">Ethical Standards</h2>
            <p className="mt-2 text-sm text-slate-800">Governance-first execution standards with transparent client communication.</p>
          </article>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <p className="chapter-label">Client Testimonials</p>
        <div className="mt-4 flex snap-x gap-4 overflow-x-auto pb-2">
          {testimonials.map((item) => (
            <article key={item.name} data-reveal className="card min-w-[18rem] snap-start p-6 md:min-w-[24rem]">
              <p className="text-sm text-slate-800">{item.quote}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">{item.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 md:py-24">
        <p className="chapter-label">Final CTA</p>
        <h2 className="chapter-title">Partner With Institutional Discipline.</h2>
        <div className="mt-6">
          <Link href="/contact" className="future-cta">
            Begin Strategic Engagement
          </Link>
        </div>
      </section>

      <ScrollReveal />
      <SiteFooter />
    </main>
  );
}
