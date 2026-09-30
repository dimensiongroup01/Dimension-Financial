import type { Metadata } from 'next';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Merchant Banking',
  description:
    'SEBI-registered merchant banking services covering IPO/FPO support, SME listings, rights issues, QIP, M&A advisory, valuation, buybacks, delisting, ESOP, and debt placement with compliance-led execution.',
  alternates: {
    canonical: '/merchant-banking'
  }
};

// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: '33+', label: 'Years Combined Experience' },
  { value: 'SEBI', label: 'Registered Merchant Banker' },
  { value: '2009', label: 'Established' },
  { value: '100%', label: 'Compliance-Led Execution' },
];

const services = [
  {
    id: '01',
    title: 'SME Platform Listings',
    icon: '📈',
    color: 'from-blue-50 to-cyan-50',
    border: 'border-blue-200',
    accent: '#0f3d68',
    summary: 'End-to-end support for listing your business on SME exchanges with disciplined preparation and investor-ready documentation.',
    points: [
      'Pre-listing strategy and readiness assessment',
      'Documentation drafting and DRHP preparation',
      'Regulatory compliance and SEBI filing support',
      'Market positioning and investor relations',
      'Post-listing compliance and reporting support',
    ],
  },
  {
    id: '02',
    title: 'Main Board Migration',
    icon: '🏛️',
    color: 'from-indigo-50 to-blue-50',
    border: 'border-indigo-200',
    accent: '#1a3a6e',
    summary: 'Structured migration advisory for SME-listed companies transitioning to the Main Board of BSE or NSE.',
    points: [
      'Strategic eligibility planning and gap analysis',
      'Regulatory and SEBI compliance alignment',
      'Restated financial documentation support',
      'Market positioning and stakeholder communication',
      'Post-migration governance and reporting framework',
    ],
  },
  {
    id: '03',
    title: 'IPO, FPO & Rights Issues',
    icon: '🚀',
    color: 'from-sky-50 to-blue-50',
    border: 'border-sky-200',
    accent: '#0a4080',
    summary: 'Complete management of public equity offerings including book-built IPOs, further public offers, and rights issue mandates.',
    points: [
      "Management of IPO's, FPO's and Rights Issues",
      "Underwriting in Public Issues including SME IPO's",
      'Qualified Institutional Placements (QIP)',
      'Private placement of equity securities',
      'DRHP / RHP drafting and SEBI coordination',
    ],
  },
  {
    id: '04',
    title: 'Takeover & Open Offer',
    icon: '🤝',
    color: 'from-teal-50 to-cyan-50',
    border: 'border-teal-200',
    accent: '#0e5a4e',
    summary: 'Advisory and execution support for acquirers and target companies navigating SEBI Takeover Code obligations.',
    points: [
      'Open offer structuring and regulatory coordination',
      'Manager to Open Offer under SEBI Takeover Code',
      'Strategic planning for acquirer and target',
      'Offer document preparation and SEBI filing',
      'Shareholder communication and post-offer support',
    ],
  },
  {
    id: '05',
    title: 'Share Buyback',
    icon: '🔄',
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-200',
    accent: '#7a3e00',
    summary: 'End-to-end management of share buyback programs for listed companies under SEBI Buyback Regulations.',
    points: [
      'Buyback structuring — tender offer or open market',
      'Manager to Buyback — SEBI and exchange filings',
      'Strategic planning and pricing determination',
      'Regulatory compliance and shareholder communication',
      'Execution management and post-buyback reporting',
    ],
  },
  {
    id: '06',
    title: 'Delisting of Securities',
    icon: '📋',
    color: 'from-rose-50 to-pink-50',
    border: 'border-rose-200',
    accent: '#7a1a2e',
    summary: 'Advisory support for voluntary delisting of shares in compliance with SEBI Delisting Regulations 2021.',
    points: [
      'Manager to Delisting — process design and coordination',
      'Reverse book building mechanism management',
      'SEBI and stock exchange regulatory filings',
      'Promoter and public shareholder communication',
      'Post-delisting compliance and settlement support',
    ],
  },
  {
    id: '07',
    title: 'Mergers, Acquisitions & Demergers',
    icon: '⚖️',
    color: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
    accent: '#3d1a7a',
    summary: 'Strategic M&A advisory across the full transaction lifecycle — from target identification through structured closure.',
    points: [
      'Advisory on Merger, Demerger, and Amalgamation',
      'Cross-border acquisition and divestment advisory',
      'Due diligence coordination and transaction structuring',
      'Capital restructuring and scheme documentation',
      'NCLT filing support and regulatory coordination',
    ],
  },
  {
    id: '08',
    title: 'Valuation Services',
    icon: '🔍',
    color: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200',
    accent: '#0e5a38',
    summary: 'Independent, regulation-aligned valuation services for businesses, assets, and financial instruments across transaction contexts.',
    points: [
      'Business and enterprise valuation',
      'Equity share valuation for M&A and compliance',
      'Asset and property valuation',
      'Financial instrument and ESOP valuation',
      'Valuation for SEBI, NCLT, and Income Tax purposes',
    ],
  },
  {
    id: '09',
    title: 'ESOP Advisory',
    icon: '👥',
    color: 'from-amber-50 to-yellow-50',
    border: 'border-amber-200',
    accent: '#6b4a00',
    summary: 'Comprehensive ESOP scheme design, regulatory compliance, and certification services for listed and unlisted companies.',
    points: [
      "ESOP scheme framing and design",
      'SEBI ESOP guidelines compliance and certification',
      'Grant, vesting, and exercise schedule structuring',
      'Tax and accounting impact advisory',
      'Board and shareholder resolution support',
    ],
  },
  {
    id: '10',
    title: 'Preferential Allotment',
    icon: '🎯',
    color: 'from-cyan-50 to-sky-50',
    border: 'border-cyan-200',
    accent: '#0a4d6e',
    summary: 'End-to-end support for preferential allotment of shares and convertible instruments to selected investors.',
    points: [
      'Eligibility assessment and pricing as per SEBI norms',
      'Offer document and resolution drafting',
      'SEBI and exchange filing coordination',
      'Investor communication and documentation',
      'Post-allotment compliance and reporting',
    ],
  },
  {
    id: '11',
    title: 'Debt Placement & Advisory',
    icon: '📊',
    color: 'from-slate-50 to-blue-50',
    border: 'border-slate-200',
    accent: '#1e3a5f',
    summary: 'Institutional debt placement and syndication advisory for bonds, debentures, and fixed deposit programs.',
    points: [
      'Private placement of bonds and debentures with institutions and trusts',
      'Management of public issues of debt securities',
      'Debt syndication advisory and financial structuring',
      'Marketing of corporate fixed deposits',
      'Adherence to SEBI Regulations and Companies Act 2013',
    ],
  },
  {
    id: '12',
    title: 'Capital Restructuring',
    icon: '🏗️',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    accent: '#1a2f6e',
    summary: 'Strategic advisory for capital structure optimization, including equity restructuring and corporate reorganization.',
    points: [
      'Capital restructuring strategy and design',
      'Reduction of capital and reserve restructuring',
      'Scheme documentation and NCLT filing support',
      'Debt-equity conversion advisory',
      'Regulatory and shareholder approval coordination',
    ],
  },
];

const differentiators = [
  {
    icon: '🎯',
    title: 'Value-Center Thinking',
    text: 'We function as a value center inside your transaction — not just an execution desk following instructions.',
  },
  {
    icon: '⚖️',
    title: 'Regulatory & Commercial Balance',
    text: 'Our solutions blend regulatory precision, industry understanding, and practical commercial judgment at every stage.',
  },
  {
    icon: '🔍',
    title: 'Independent & Ethical Advisory',
    text: 'We deliver professional and transparent advice with implementation discipline and governance integrity built in.',
  },
  {
    icon: '🤝',
    title: 'Partner-Level Oversight',
    text: 'Critical decisions and transaction transitions are reviewed at partner level before execution proceeds.',
  },
  {
    icon: '📋',
    title: 'Structured Delivery Benchmarks',
    text: 'Each mandate follows defined performance benchmarks to maintain quality, pace, and full accountability.',
  },
  {
    icon: '💡',
    title: 'Explicit Value-Risk Communication',
    text: 'We surface value levers and risk factors early so every stakeholder can take fully informed decisions.',
  },
];

const transitionFlow = [
  {
    step: '01',
    title: 'Mandate Discovery',
    detail: 'We align issuer intent, regulatory context, and market readiness before any solution is designed.',
  },
  {
    step: '02',
    title: 'Structuring & Documentation',
    detail: 'Strategy is converted into transaction architecture, timelines, and a complete documentation framework.',
  },
  {
    step: '03',
    title: 'Market Execution',
    detail: 'Our team coordinates placements, investor touchpoints, and transaction milestones with control and discipline.',
  },
  {
    step: '04',
    title: 'Post-Transaction Support',
    detail: 'We continue with compliance follow-through, investor communication, and next-phase capital planning.',
  },
];

const investorLinks = [
  { label: 'Public Issues', href: '/Documents/MerchantBanking/public-issues' },
  { label: 'Rights Issues', href: '/Documents/MerchantBanking/rights-issues' },
  { label: 'Debt Offer Documents', href: '/Documents/MerchantBanking/debt-offer-documents' },
  { label: 'Takeovers', href: '/Documents/MerchantBanking/takeovers' },
  { label: 'Buybacks', href: '/Documents/MerchantBanking/buybacks' },
  { label: 'Delisting', href: '/Documents/MerchantBanking/delisting' },
  { label: 'Track Records', href: '/Documents/MerchantBanking/track-records' },
  { label: 'Investor Charter', href: '/Documents/MerchantBanking/investor-charter' },
  { label: 'Investor Complaints', href: '/Documents/MerchantBanking/investor-complaints' },
  { label: 'Complaint Redressal (SCORES)', href: 'https://scores.sebi.gov.in/' },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function MerchantBankingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="grid-overlay min-h-screen">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-[#eadcc1] bg-gradient-to-br from-[#0a1e36] via-[#10284a] to-[#163a5f] py-20 md:py-28">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#e4c98b_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#93c5fd_0%,transparent_40%)]" />
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#e4c98b]/10 blur-3xl" />
          <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />

          <div className="section-shell relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full border border-[#e4c98b]/40 bg-[#e4c98b]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#e4c98b]">
                SEBI Registered Merchant Banker
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
                Full-Spectrum Merchant Banking for Growth & Institutional Mandates
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Dimension Financial Solutions delivers execution-focused merchant banking across equity capital markets, M&A advisory, debt placement, and corporate restructuring — with compliance precision and governance integrity at every stage.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#e4c98b] px-6 py-3 text-sm font-bold text-[#10284a] transition hover:bg-[#f0d9a0]"
                >
                  Discuss a Mandate
                </Link>
                <Link
                  href="/about-us"
                  className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Our Team
                </Link>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                  <p className="text-2xl font-black text-[#e4c98b] md:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Intro strip ── */}
        <section className="section-shell py-12 md:py-16">
          <div className="rounded-3xl border border-[#eadcc1] bg-[linear-gradient(180deg,#ffffff,#fbf7ef)] p-6 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b6a2e]">Who We Are</p>
                <h2 className="mt-2 font-display text-2xl text-[#10284a] md:text-3xl">
                  A Compliance-First, Execution-Driven Merchant Banking Platform
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink md:text-base">
                  Dimension Financial Solutions Private Limited is a SEBI-registered Merchant Banker with over 15 years of institutional and capital market experience. We serve corporates, promoter groups, institutions, and trusts seeking reliable execution on complex financial mandates — from SME listings and IPOs to M&A transactions, buybacks, and institutional debt placement.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink md:text-base">
                  Our operating philosophy positions us as a value center inside each transaction — not merely an execution agent. We invest in understanding each mandate deeply, structure solutions with regulatory precision, and maintain full transparency with all stakeholders through to closure.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'SEBI Registration', value: 'Merchant Banker' },
                  { label: 'BSE Member', value: 'Debt Segment' },
                  { label: 'Stock Broker Reg.', value: 'INZ000313233' },
                  { label: 'Operating Since', value: '2009' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[#eadcc1] bg-white p-4 text-center shadow-sm">
                    <p className="text-xs text-[#8b6a2e] uppercase tracking-[0.15em]">{item.label}</p>
                    <p className="mt-1 font-bold text-[#10284a]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="section-shell pb-16 md:pb-20">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b6a2e]">Our Services</p>
            <h2 className="mt-2 font-display text-3xl text-[#10284a] md:text-4xl">
              Comprehensive Merchant Banking Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink md:text-base">
              From first public offerings to complex restructuring mandates, our service suite covers the full spectrum of capital market and corporate finance requirements.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((svc) => (
              <article
                key={svc.id}
                className={`group relative overflow-hidden rounded-3xl border ${svc.border} bg-gradient-to-br ${svc.color} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent)` }} />

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm text-2xl">
                    {svc.icon}
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: svc.accent }}>
                      {svc.id}
                    </p>
                    <h3 className="mt-0.5 text-lg font-bold leading-snug" style={{ color: svc.accent }}>
                      {svc.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink">
                  {svc.summary}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-ink">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: svc.accent }} />
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Hover footer */}
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ color: svc.accent }}>
                  <Link href="/contact" className="hover:underline">Discuss this service</Link>
                  <span>→</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Key Differentiators ── */}
        <section className="section-shell pb-16 md:pb-20">
          <div className="overflow-hidden rounded-3xl border border-[#eadcc1] bg-[linear-gradient(135deg,#10284a,#18385f)] p-6 shadow-xl md:p-10">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e4c98b]">Why Dimension</p>
              <h2 className="mt-2 font-display text-2xl text-white md:text-3xl">
                Why Clients Choose Us for Critical Transactions
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
                We are a focused emerging merchant banker with high governance standards. Our approach is built around six core operating principles that clients experience at every stage of a mandate.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item, i) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm transition duration-300 hover:bg-white/15"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e4c98b]/15 text-lg">
                      {item.icon}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#e4c98b]/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement Process ── */}
        <section className="section-shell pb-16 md:pb-20">
          <div className="rounded-3xl border border-[#eadcc1] bg-[linear-gradient(180deg,#ffffff,#fbf7ef)] p-6 shadow-sm md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b6a2e]">Execution Framework</p>
            <h2 className="mt-2 font-display text-2xl text-[#10284a] md:text-3xl">
              How We Move Mandates from Intent to Closure
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink md:text-base">
              Every mandate at Dimension follows a structured four-stage engagement framework that ensures regulatory alignment, clear communication, and disciplined execution from start to finish.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {transitionFlow.map((item, i) => (
                <div
                  key={item.step}
                  className="group relative rounded-2xl border border-[#eadcc1] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#a88a4d] hover:shadow-lg"
                >
                  {/* connector line between steps */}
                  {i < transitionFlow.length - 1 && (
                    <div className="absolute -right-2 top-8 z-10 hidden h-0.5 w-4 bg-[#eadcc1] md:block" />
                  )}
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6a2e]">Step {item.step}</p>
                  <h3 className="mt-2 font-display text-lg text-[#10284a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{item.detail}</p>
                  <div className="mt-5 h-1 w-10 rounded-full bg-[#eadcc1] transition-all duration-500 group-hover:w-20 group-hover:bg-[#a88a4d]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Regulatory Compliance ── */}
        <section className="section-shell pb-16 md:pb-20">
          <div className="rounded-3xl border border-[#eadcc1] bg-[linear-gradient(90deg,#fffaf0,#f5efe2)] p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b6a2e]">Regulatory Compliance</p>
                <h2 className="mt-2 font-display text-2xl text-[#10284a] md:text-3xl">
                  Fully Regulated. Governance-First.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink md:text-base">
                  Dimension Financial Solutions Private Limited, as a SEBI-registered Merchant Banker and debt stock broker, strictly adheres to all applicable regulations including SEBI (Merchant Bankers) Regulations 1992, SEBI (Issue of Capital and Disclosure Requirements) Regulations 2018, SEBI (Buyback of Securities) Regulations 2018, SEBI (Substantial Acquisition of Shares and Takeovers) Regulations 2011, and the Companies Act 2013.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink md:text-base">
                  Every transaction is structured and executed with full regulatory alignment, complete documentation, and transparent investor communication in line with SEBI's framework for investor protection and market integrity.
                </p>
              </div>

              {/* Investor corner */}
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8b6a2e]">Investor Resources</p>
                <div className="space-y-2">
                  {investorLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-between rounded-xl border border-[#eadcc1] bg-white px-4 py-2.5 text-sm font-medium text-[#10284a] transition hover:border-[#a88a4d] hover:bg-[#fffaf0]"
                    >
                      {link.label}
                      <span className="text-[#8b6a2e]">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-shell pb-20 md:pb-28">
          <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#10284a,#163a5f)] p-8 text-center shadow-2xl md:p-14">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_0%,#e4c98b,transparent_60%)]" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e4c98b]">Ready to Begin?</p>
              <h2 className="mt-3 font-display text-2xl text-white md:text-4xl">
                Discuss Your Mandate with Our Team
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
                Whether you are planning an IPO, evaluating a merger, or structuring debt — our team is ready to assess your situation and provide a clear, compliance-aligned advisory path forward.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#e4c98b] px-8 py-3.5 text-sm font-bold text-[#10284a] shadow-lg transition hover:bg-[#f0d9a0] hover:shadow-xl"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/about-us"
                  className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Meet the Team
                </Link>
              </div>
              <p className="mt-6 text-xs text-white/50">
                SEBI Registration No. (Merchant Banking) — contact us for our registration details
              </p>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}