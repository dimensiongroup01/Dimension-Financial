import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollFusion3D from '@/components/ScrollFusion3D';
import ScrollReveal from '@/components/ScrollReveal';
import StoryChapter from '@/components/StoryChapter';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Merchant Banking',
  description:
    'SEBI-registered merchant banking services covering IPO/FPO support, rights issues, QIP, M&A advisory, valuation, and debt placement with compliance-led execution.',
  alternates: {
    canonical: '/merchant-banking'
  }
};

const equityCapitalMarket = [
  "Management of Capital Issues - IPO's, FPO's and Rights Issues",
  "Underwriting in Public issues including SME IPO's",
  'Qualified Institutional Placements',
  'Managing Buyback of shares of listed companies',
  'Manager to Delisting of shares of companies',
  'Manager to Open Offer / Takeover',
  'Advisory on Capital Restructuring',
  'Private placement of Equity',
  "ESOP's scheme framing and Certification"
];

const mergerAndValuation = [
  'Advisory on Merger, Demerger, and Amalgamation',
  'Expertise in M&A transactions including acquisitions and divestments',
  'Cross-border transactions and restructuring advisory',
  'Valuation of shares and businesses'
];

const debtPlacementAdvisory = [
  'Placement of Debt Securities with Institutions and Trusts',
  'Management of Public Issues and Private Placement of Bonds/Debentures',
  'Advisory for Debt Syndication',
  'Financial Structuring',
  'Marketing of Fixed Deposits of Corporates',
  'Adherence to SEBI Regulations and Companies Act 2013'
];

const keyDifferentiators = [
  {
    title: 'Value-Center Transaction Thinking',
    text: 'We function as a value center inside your transaction, not just an execution desk.'
  },
  {
    title: 'Outcome-Led Prioritization',
    text: 'Our approach stays focused on what truly drives valuation, deal quality, and investor confidence.'
  },
  {
    title: 'Independent and Ethical Advisory',
    text: 'We deliver professional and transparent advice with implementation discipline and governance integrity.'
  },
  {
    title: 'Regulatory + Commercial Balance',
    text: 'Our solutions blend regulatory precision, industry understanding, and practical commercial judgement.'
  },
  {
    title: 'Minimum Performance Framework',
    text: 'Each mandate follows structured delivery benchmarks to maintain quality, pace, and accountability.'
  },
  {
    title: 'Mandatory Partner Oversight',
    text: 'Critical decisions and transaction transitions are reviewed at partner level before execution.'
  },
  {
    title: 'Honesty and Transparency by Design',
    text: 'We maintain clear communication, realistic timelines, and complete visibility on process and status.'
  },
  {
    title: 'Explicit Value-Risk Communication',
    text: 'We articulate value levers and risk factors early so stakeholders can take informed decisions.'
  },
  {
    title: 'Experienced Technical Team',
    text: 'Our professionals combine technical rigor and cross-sector experience for high-stakes mandates.'
  }
];

const transitionFlow = [
  {
    step: '01',
    title: 'Mandate Discovery',
    detail: 'We align issuer intent, regulatory context, and market readiness before solution design.'
  },
  {
    step: '02',
    title: 'Structuring & Documentation',
    detail: 'We convert strategy into transaction architecture, timelines, and documentation framework.'
  },
  {
    step: '03',
    title: 'Market Execution',
    detail: 'Our team coordinates placements, investor touchpoints, and transaction milestones with control.'
  },
  {
    step: '04',
    title: 'Post-Transaction Support',
    detail: 'We support compliance follow-through, investor communication, and next-phase capital planning.'
  }
];

export default function MerchantBankingPage() {
  return (
    <main className="grid-overlay">
      <SiteHeader />
      <PageHero
        kicker="Merchant Banking"
        title="A New-Age Merchant Banker for Growth-Stage and Institutional Mandates"
        subtitle="We are an execution-focused merchant banking platform built for disciplined structuring, transparent advisory, and regulation-aligned outcomes."
      />
      <ScrollFusion3D variant="merchant" compact />
      <StoryChapter
        label="Section 03"
        title="Structuring Capital, Not Just Transactions"
        detail="Since 2009, we have supported clients across debt and equity mandates with readiness planning, structuring, compliance alignment, and disciplined execution."
      />

      <section className="section-shell py-14 md:py-20">
        <article data-reveal className="rounded-3xl border border-[#eadcc1] bg-[linear-gradient(180deg,#ffffff,#fbf7ef)] p-6 shadow-[0_14px_36px_rgba(20,30,51,0.06)] md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8b6a2e]">Core Offering</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Our Merchant Banking Services</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-ink md:text-base">
            Dimension Financial Solutions Private Limited delivers merchant banking and debt market services through a disciplined, compliance-first framework for corporates, institutions, trusts, and investors. We position ourselves as a focused emerging player with strong execution intent and high governance standards.
          </p>
        </article>

        <article data-reveal className="mt-5 overflow-hidden rounded-3xl border border-[#eadcc1] bg-[linear-gradient(135deg,#10284a,#18385f)] p-6 shadow-[0_16px_40px_rgba(20,30,51,0.14)] md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[#e4c98b]">Key Differentiators</p>
          <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">Why Clients Choose Dimension in Critical Transactions</h3>
          <p className="mt-2 text-xs text-[#e9dcb7] md:hidden">Swipe horizontally to explore all differentiators.</p>
          <div className="relative mt-6">
            <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-[2px] bg-white/25 md:block" />
            <div className="overflow-x-auto pb-3 [scrollbar-width:thin]">
              <div className="flex min-w-max snap-x snap-mandatory gap-4 md:gap-5">
                {keyDifferentiators.map((item, index) => (
                  <div key={item.title} className="w-[17.25rem] snap-start flex-none rounded-2xl border border-[#506b92] bg-white/10 p-4 backdrop-blur-sm sm:w-[18.5rem] md:w-[19.5rem]">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#e9dcb7] bg-[#18385f] text-[11px] font-semibold text-[#f3deb0]">
                        {index + 1}
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e9dcb7]">Differentiator</p>
                    </div>
                    <p className="text-base font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#dce7f6]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article data-reveal className="card p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8b6a2e]">01</p>
            <h3 className="mt-2 font-display text-xl">Equity Capital Market</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink">
              {equityCapitalMarket.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article data-reveal className="card p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8b6a2e]">02</p>
            <h3 className="mt-2 font-display text-xl">Merger, Acquisitions & Valuation</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink">
              {mergerAndValuation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article data-reveal className="card p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8b6a2e]">03</p>
            <h3 className="mt-2 font-display text-xl">Debt Placement & Debt Advisory</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink">
              {debtPlacementAdvisory.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article data-reveal className="mt-5 rounded-3xl border border-[#eadcc1] bg-[linear-gradient(180deg,#ffffff,#fbf7ef)] p-6 shadow-[0_14px_36px_rgba(20,30,51,0.06)] md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8b6a2e]">Transaction Transition Framework</p>
          <h3 className="mt-2 font-display text-2xl md:text-3xl">How We Move Mandates from Intent to Closure</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {transitionFlow.map((item) => (
              <div key={item.step} className="rounded-2xl border border-[#f0e5cf] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8b6a2e]">Step {item.step}</p>
                <p className="mt-2 font-display text-lg text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>

        <article data-reveal className="mt-5 rounded-3xl border border-[#eadcc1] bg-[linear-gradient(90deg,#fffaf0,#f5efe2)] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8b6a2e]">Regulatory Compliance</p>
          <h3 className="mt-2 font-display text-2xl md:text-3xl">Regulatory Compliance</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink md:text-base">
            Dimension Financial Solutions Private Limited, as a SEBI-registered Merchant Banker & Debt Stock broker strictly adheres to all applicable regulations including SEBI Regulations, and Company Act 2013.
          </p>
        </article>
      </section>

      <ScrollReveal />
      <SiteFooter />
    </main>
  );
}





