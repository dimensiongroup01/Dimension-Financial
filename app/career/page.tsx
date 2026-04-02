import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollFusion3D from '@/components/ScrollFusion3D';
import ScrollReveal from '@/components/ScrollReveal';
import StoryChapter from '@/components/StoryChapter';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import CareerApplyWhatsAppForm from '@/components/CareerApplyWhatsAppForm';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Explore career opportunities at Dimension Financial Services in merchant banking, debt advisory, and institutional transaction execution.',
  alternates: {
    canonical: '/career'
  }
};

export default function CareerPage() {
  return (
    <main className="grid-overlay">
      <SiteHeader />
      <PageHero
        kicker="Careers"
        title="Grow with Dimension"
        subtitle="Join a high-integrity team delivering institutional-grade financial advisory and transaction execution."
      />
      <ScrollFusion3D variant="career" compact />
      <StoryChapter
        label="Section 08"
        title="Build a Career in Capital Markets"
        detail="The careers journey reflects our execution culture: learning through live mandates, strong compliance grounding, and long-term growth."
      />

      <section className="section-shell grid gap-5 py-14 md:grid-cols-12 md:py-20">
        <article data-reveal className="card p-6 md:col-span-5 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6a2e]">Why Join Dimension</p>
          <h3 className="mt-2 font-display text-3xl leading-tight text-ink">Build your next chapter with us</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Work on live mandates in merchant banking and debt markets with a team focused on execution quality,
            compliance discipline, and measurable client outcomes.
          </p>
          <div className="mt-5 grid gap-3">
            <div className="rounded-2xl border border-[#eadcc1] bg-white p-4">
              <p className="text-sm font-semibold text-ink">Capital Market Exposure</p>
              <p className="mt-1 text-xs text-slate-700">Hands-on involvement in IPO, debt placement, and advisory transactions.</p>
            </div>
            <div className="rounded-2xl border border-[#eadcc1] bg-white p-4">
              <p className="text-sm font-semibold text-ink">Structured Career Growth</p>
              <p className="mt-1 text-xs text-slate-700">Performance-led learning path with strong mentorship and execution feedback.</p>
            </div>
            <div className="rounded-2xl border border-[#eadcc1] bg-white p-4">
              <p className="text-sm font-semibold text-ink">Compliance-First Culture</p>
              <p className="mt-1 text-xs text-slate-700">Develop deep understanding of regulations while delivering institutional-grade work.</p>
            </div>
          </div>
        </article>

        <article
          data-reveal
          className="card relative overflow-hidden p-6 before:absolute before:-right-16 before:-top-16 before:h-44 before:w-44 before:rounded-full before:bg-[#d6b678]/20 before:content-[''] md:col-span-7 md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6a2e]">Application Desk</p>
          <h3 className="mt-2 font-display text-3xl leading-tight text-ink">Apply Now</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700">
            Send your profile to our HR team on WhatsApp or email. Share your latest resume and a short summary of
            your experience for faster review.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-[#d8c39a]/70 bg-[#fff8eb] px-3 py-1 font-medium text-[#10284a]">
              WhatsApp: +91 96507 99560
            </span>
            <span className="rounded-full border border-[#d8c39a]/70 bg-[#fff8eb] px-3 py-1 font-medium text-[#10284a]">
              HR: hr@dimensiongrouo.co.in
            </span>
          </div>
          <CareerApplyWhatsAppForm />
        </article>
      </section>

      <ScrollReveal />
      <SiteFooter />
    </main>
  );
}




