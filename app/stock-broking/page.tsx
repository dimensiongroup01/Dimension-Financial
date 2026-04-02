import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollFusion3D from '@/components/ScrollFusion3D';
import ScrollReveal from '@/components/ScrollReveal';
import StoryChapter from '@/components/StoryChapter';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Stock Broking',
  description:
    'Debt segment stock broking, bond placement, and fixed-income platform access through Bondsadda for institutions, trusts, and investors.',
  alternates: {
    canonical: '/stock-broking'
  }
};

const items = [
  'Debt Securities Placement - Placement of Government securities, bonds, and debentures to PF trusts, superannuation trusts, corporates, institutions, and finance companies.',
  'Debt Segment Broking - SEBI-registered stock broker and active BSE Debt Segment trading support for compliant execution.',
  'Debt Advisory - Active in debt securities placement, debt advisory, and market-linked support across debt and equity requirements.',
  'Market Leadership - Recognized as a leading player in debt placement services in India.',
  'Execution Track Record - Placed Central and State Government securities, corporate bonds and debentures exceeding 700 crores in FY 2023-24.',
  'Private Placement & Product Support - Private placement of bonds/debentures and equity, including marketing of financial products and fixed deposits.'
];

export default function StockBrokingPage() {
  return (
    <main className="grid-overlay">
      <SiteHeader />
      <PageHero
        kicker=""
        title="Debt Segment Stock Broking"
        subtitle="Execution-focused debt market broking and advisory support for corporates, trusts, institutions, and investors."
      />
      <ScrollFusion3D variant="stock" compact />
      <StoryChapter
        label="Section 04"
        title="Execution Where Timing Matters"
        detail="Debt-segment broking is presented as a dynamic market flow where precision, liquidity access, and compliant execution define results."
      />

      <section className="section-shell py-14 md:py-20">
        <article data-reveal className="rounded-3xl border border-[#eadcc1] bg-[linear-gradient(90deg,#fffaf0,#f5efe2)] p-6 md:p-8">
          <div className="mb-4 inline-flex rounded-2xl border border-[#eadcc1] bg-white px-4 py-3">
            <img
              src="https://bondsadda.com/img/logo.png"
              alt="Bondsadda"
              className="h-10 w-auto object-contain"
            />
          </div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Bondsadda: Our Fixed-Income Investment Platform</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-ink md:text-base">
            Bondsadda is a digital marketplace powered by Dimension Financial Solutions, built to make bond and fixed-income investing simpler, transparent, and execution-ready for retail and institutional investors.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs md:text-sm">
            <span className="rounded-full border border-[#d8c39a]/70 bg-white px-3 py-1 text-ink">SEBI-compliant fixed income desk</span>
            <span className="rounded-full border border-[#d8c39a]/70 bg-white px-3 py-1 text-ink">Assisted KYC support</span>
            <span className="rounded-full border border-[#d8c39a]/70 bg-white px-3 py-1 text-ink">RM-guided onboarding</span>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-[#eadcc1] bg-white p-4 text-sm text-ink">Curated fixed deposits and premium bonds with transparent pricing.</div>
            <div className="rounded-2xl border border-[#eadcc1] bg-white p-4 text-sm text-ink">Entry-level investing from INR 10,000 with guided execution support.</div>
            <div className="rounded-2xl border border-[#eadcc1] bg-white p-4 text-sm text-ink">High-yield opportunities up to 14%+ shown across listed bond categories.</div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://bondsadda.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-105"
            >
              Visit Bondsadda
            </a>
            <a
              href="https://bondsadda.com/OurCollections.aspx"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#d8c39a]/70 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-[#b58e43]"
            >
              Explore Bond Opportunities
            </a>
          </div>
        </article>

        <h2 data-reveal className="mt-10 font-display text-3xl text-[#10284a] md:text-4xl">Our Services</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {items.map((item) => {
            const [title, detail] = item.split(' - ');
            return (
              <article key={title} data-reveal className="card p-6">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm text-ink">{detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <ScrollReveal />
      <SiteFooter />
    </main>
  );
}




