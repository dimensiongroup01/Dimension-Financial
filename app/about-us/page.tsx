import type { Metadata } from 'next';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Dimension Financial Solutions Private Limited, our leadership team, regulatory credentials, and institutional debt advisory experience since 2009.',
  alternates: {
    canonical: '/about-us'
  }
};

const leadership = [
  {
    name: 'Ravi Kant Mathur',
    role: 'Whole Time Director - Merchant Banking / Stock Broking',
    image: '/images/Ravi sir Image.png',
    bio: 'Mr. Ravi Kant Mathur has 24+ years of experience in financial services, merchant banking & debt securities market. He worked with Bajaj Capital Ltd, SPA Merchant Bankers, and has rich expertise in merchant banking, public issues, private placements, and distribution of financial products.'
  },
  {
    name: 'Prachi Chopra',
    role: 'Whole Time Director - Stock Broking',
    image: '/images/pc.png',
    bio: 'Ms. Prachi Chopra has 23+ years of experience in insurance & HR management. She worked with Bajaj Capital, Aviva Life Insurance, and ICICI Prudential as Area Manager - Sales Training, bringing strong expertise in corporate insurance and people management.'
  },
  {
    name: 'Vivek Gautam',
    role: 'Whole Time Director - Merchant Banking / Stock Broking',
    image: '/images/vg.png',
    bio: 'Mr. Vivek Gautam has 33+ years of experience in Merchant Banking, handling public & rights issues, private placements, mergers, acquisitions, buybacks, delisting, and corporate restructuring. He held senior positions in PNB Capital, Bajaj Capital, SPA Capital & SMC Capitals.'
  },
  {
    name: 'Surpriya Sharma',
    role: 'Assistant Vice President',
    image: '/images/ss.png',
    bio: 'Ms. Surpriya Sharma leads our stock broking operations with exceptional market insight and client service excellence. Her leadership ensures our clients receive top-tier brokerage services and strategic investment guidance.'
  },
  {
    name: 'Ayaan Pramanik',
    role: 'Assistant Vice President',
    image: '/images/Ayan.jpeg',
    bio: 'Ayaan Pramanik is handling Eastern India, based in Kolkata, on behalf of the  team with a strong focus on supporting client execution and day-to-day operational excellence.'
  }
];

const teamMembers = [
  { name: 'Pragya Srivastav', image: '/images/Pragyanew.jpeg' },
  { name: 'Shlok Shah', image: '/images/NEWSHLOK.jpeg' },
  { name: 'Utkarsh Bhatnagar', image: '/images/ub new.jpeg' },
  { name: 'Pratik Vishwakarma', image: '/images/Pratik.jpg' },
  { name: 'Arjun Singh', image: '/images/Arjun.jpeg' },
  { name: 'Sanjeevani Rawat', image: '/images/hr.jpeg' },
  { name: 'Jaaymuni Kondru', image: '/images/jamuni.jpeg' }
];

const highlights = [
  { label: 'Established', value: 'Since 2009' },
  { label: 'Merchant Banker', value: 'SEBI Registered' },
  { label: 'Stock Broking', value: 'INZ000313233' },
  { label: 'Debt Platform', value: 'OBPPs at BSE' }
];

const strengths = [
  {
    title: 'Institutional Debt Placement',
    text: 'Targeted placement across bonds, debentures, and debt instruments for trusts, institutions, and corporates.'
  },
  {
    title: 'Capital Raising Expertise',
    text: 'Execution support for IPO and rights issue mandates with disciplined process and market alignment.'
  },
  {
    title: 'Compliance-First Execution',
    text: 'Every engagement is structured around regulatory alignment, documentation clarity, and operational rigor.'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    text: 'Understand funding objectives, risk profile, and market constraints.'
  },
  {
    step: '02',
    title: 'Structuring',
    text: 'Design instrument strategy and execution path aligned with regulations.'
  },
  {
    step: '03',
    title: 'Placement',
    text: 'Coordinate with institutions and investors for timely transaction closure.'
  },
  {
    step: '04',
    title: 'Ongoing Support',
    text: 'Continue advisory support for portfolio and recurring market requirements.'
  }
];

const storyMoments = [
  {
    src: '/images/page4_img1.jpg',
    title: 'Institutional Advisory',
    text: 'Structured execution for debt and equity transactions with compliance embedded at every step.'
  },
  {
    src: '/images/page4_img4.jpg',
    title: 'Relationship Depth',
    text: 'Long-term client partnerships built on clarity, responsiveness, and market discipline.'
  },
  {
    src: '/images/page5_img2.jpg',
    title: 'Execution Focus',
    text: 'Hands-on coordination from structuring through placement, documentation, and support.'
  }
];

const cultureGallery = [
  '/images/page1_img4.jpg',
  '/images/page3_img2.jpg',
  '/images/page4_img6.jpg',
  '/images/page5_img1.jpg'
];

export default function AboutPage() {
  return (
    <main className="grid-overlay min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-blue-200/70 bg-gradient-to-br from-[#052B4F] via-[#0B4C7C] to-[#1379A7] py-16 md:py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[radial-gradient(circle_at_18%_18%,#ffffff_0%,transparent_35%),radial-gradient(circle_at_82%_28%,#93c5fd_0%,transparent_34%)]" />
        </div>
        <div className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="section-shell relative z-10">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
                Trusted Debt Advisory and Capital Market Execution.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
                We support businesses, institutions, trusts, and investors with debt and equity market solutions through a regulatory-first, execution-driven framework.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="rounded-full border border-white/40 bg-white px-5 py-2.5 text-sm font-semibold text-[#0b4168] transition hover:bg-blue-50"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Team
                </Link>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/30 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/75">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-white md:text-base">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-6 top-12 hidden h-28 w-28 rounded-full border border-white/25 bg-white/10 blur-sm md:block" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group relative overflow-hidden rounded-[2rem] border border-white/35 bg-white/10 shadow-2xl backdrop-blur-sm sm:col-span-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041c33]/75 via-[#041c33]/10 to-transparent" />
                  <Image
                    src="/images/page4_img3.jpg"
                    alt="Dimension Financial team collaboration"
                    width={900}
                    height={620}
                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[340px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/75">Inside Dimension</p>
                    <h2 className="mt-2 max-w-md text-2xl font-semibold leading-tight text-white md:text-3xl">
                      Built on governance, market insight, and a client-first execution culture.
                    </h2>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/35 bg-white/80 p-4 shadow-xl backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/85 to-cyan-50/70" />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Image
                        src="/images/logo.svg"
                        alt="Dimension Financial"
                        width={56}
                        height={56}
                        className="h-11 w-11 object-contain transition duration-500 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                      Dimension Financial Solutions Private Limited was formed to deliver a comprehensive range of financial services with strong governance and market discipline.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/35 bg-[#0d365a] p-4 shadow-xl">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/80">Capability</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/90 md:text-base">
                      We are a SEBI-registered stock broker and BSE trading member on the debt segment, with active capability as an Online Bond Platform Provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="card overflow-hidden p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-aqua">Firm Profile</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">What We Do</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <p className="text-sm leading-relaxed text-ink md:text-base">
                We are engaged in fund-raising assignments including Initial Public Offers and Rights Issues of equity. Alongside equity mandates, we actively place debt securities including bonds and debentures with provident funds, superannuation trusts, institutions, and corporates.
              </p>
              <p className="text-sm leading-relaxed text-ink md:text-base">
                We maintain long-term relationships with clients who rely on us for recurring debt market requirements and timely execution. Our operating approach combines domain expertise, risk awareness, and compliance-led transaction support.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {storyMoments.map((moment) => (
                <div
                  key={moment.title}
                  className="group overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={moment.src}
                      alt={moment.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062540]/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#0f3d68]">{moment.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink">{moment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-blue-200/80 bg-[#072847] p-6 shadow-xl md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(147,197,253,0.18),transparent_34%)]" />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/75">Visual Snapshot</p>
              <h2 className="mt-2 font-display text-3xl text-white md:text-4xl">A more human view of our practice.</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                The firm blends institutional discipline with a collaborative, detail-oriented team culture. We wanted the page to show both the seriousness of the work and the people behind it.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {cultureGallery.map((src, index) => (
                  <div
                    key={src}
                    className={`group relative overflow-hidden rounded-[1.5rem] border border-white/15 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                      index === 0 ? 'col-span-2 h-48' : 'h-40'
                    }`}
                  >
                    <Image
                      src={src}
                      alt="Dimension Financial culture and office moments"
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031322]/60 via-transparent to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-aqua">Strengths</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Why Institutions Work With Us</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {strengths.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-blue-200/80 bg-white/95 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0f3d68] via-cyan-400 to-[#0f3d68] opacity-70" />
              <h3 className="text-xl font-semibold text-[#0f3d68]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink md:text-base">{item.text}</p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-blue-100 via-blue-300 to-transparent transition duration-500 group-hover:via-cyan-400" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-2 pb-16 md:pb-20">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-aqua">People</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Management & Leadership</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {leadership.map((leader) => (
            <article
              key={leader.name}
              className="group card overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid md:grid-cols-[170px_1fr]">
                <div className="relative min-h-[220px] overflow-hidden md:min-h-full">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#072847]/65 via-transparent to-transparent" />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="text-xl font-bold text-[#003f6c]">{leader.name}</h3>
                  <p className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0f3d68] md:text-sm">
                    {leader.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink md:text-base">{leader.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-20">
        <article className="rounded-3xl border border-blue-200/80 bg-white/90 p-6 shadow-sm md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-aqua">Execution Model</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Our Engagement Process</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="group rounded-[1.5rem] border border-blue-100 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-aqua">Step {item.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#0f3d68]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink">{item.text}</p>
                <div className="mt-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-[#0f3d68] to-cyan-400 transition-all duration-500 group-hover:w-24" />
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-shell pb-16 md:pb-20">
        <article className="card p-6 md:p-8">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.18em] text-aqua">Our Team</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">A Multi-Disciplinary Team</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink md:text-base">
              The team at <span className="font-semibold text-[#0f3d68]">Dimension Financial Solutions</span> combines intellectual depth, market experience, and practical execution capability to design solutions around each client&apos;s financial goals.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#072847]/65 via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-base font-semibold text-[#1e3a8a] md:text-lg">{member.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">Dimension Team</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-shell pb-16 md:pb-20">
        <article className="rounded-3xl border border-blue-200/70 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-aqua">Policies & Contact</p>
              <h2 className="mt-2 font-display text-2xl md:text-3xl">Need Compliance Documents or Advisory Support?</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink md:text-base">
                Reach our team for investor policies, service details, and debt market guidance.
              </p>
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <a
                href="/Documents/Policies/Investor Complaints Redressal Policy.pdf"
                target="_blank"
                className="block rounded-xl border border-blue-200 bg-white px-4 py-3 font-medium text-[#0f3d68] transition hover:border-blue-300"
              >
                Investor Complaints Redressal Policy
              </a>
              <a
                href="/Documents/Policies/Code of Conduct and Ethics Policy.pdf"
                target="_blank"
                className="block rounded-xl border border-blue-200 bg-white px-4 py-3 font-medium text-[#0f3d68] transition hover:border-blue-300"
              >
                Code of Conduct and Ethics Policy
              </a>
              <a
                href="mailto:contact@dimensionfinancial.co.in"
                className="block rounded-xl border border-blue-200 bg-white px-4 py-3 font-medium text-[#0f3d68] transition hover:border-blue-300"
              >
                contact@dimensionfinancial.co.in
              </a>
            </div>
          </div>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
