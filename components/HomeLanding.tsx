import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import AnimatedSections from '@/components/AnimatedSections';
import ScrollReveal from '@/components/ScrollReveal';
import ClientsShowcase from '@/components/ClientsShowcase';
import HomeHeroScene from '@/components/HomeHeroScene';

const missionPoints = [
  "Offer financial products and solutions tailored to our clients' needs.",
  'Uphold the highest standards of integrity so every action reflects our core business principles.',
  'Provide secure, efficient, and compliant services that minimize risk while supporting positive returns.',
  'Build a merchant banking institution of repute, driven by integrity and professional excellence.'
];

const stats = [
  { label: 'Deals Executed', value: '50+' },
  { label: 'AUM Managed', value: 'INR 1000 Crore+' },
  { label: 'Active Clients', value: '100+' }
];

export default function HomeLanding() {
  return (
    <main className="grid-overlay min-h-screen">
      <SiteHeader />
      <HomeHeroScene />

      <section className="section-shell py-14 md:py-16">
        <div className="rounded-[2rem] border border-white/90 bg-[linear-gradient(180deg,#ffffff,#f5faff)] p-6 shadow-[0_18px_52px_rgba(15,23,42,0.08)] md:p-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <div>
              <p data-reveal className="text-xs uppercase tracking-[0.2em] text-aqua">
                Our Mission & Vision
              </p>
              <h2 data-reveal className="mt-2 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">
                A clear purpose built on integrity, compliance, and long-term client trust.
              </h2>
              <p data-reveal className="mt-4 max-w-2xl text-sm leading-7 text-ink md:text-base">
                DFS is committed to client-centric financial services shaped by professional excellence, ethical
                conduct, and disciplined market execution.
              </p>

              <div data-reveal className="mt-8 grid gap-4">
                {missionPoints.map((point, index) => (
                  <div
                    key={point}
                    className="rounded-[1.5rem] border border-blue-100/90 bg-white/92 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#eaf5ff,#ffffff)] text-sm font-bold text-[#0a355d] shadow-[0_8px_18px_rgba(47,155,255,0.12)]">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-7 text-slate-700 md:text-base">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div
                data-reveal
                className="rounded-[1.75rem] border border-[#2f9bff]/18 bg-[linear-gradient(180deg,#eff7ff,#ffffff)] p-6 shadow-[0_16px_42px_rgba(47,155,255,0.1)] md:p-7"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-aqua">Vision Statement</p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
                  To be a trusted name in merchant banking.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                  We envision establishing ourselves as a trusted name in merchant banking by upholding the highest
                  standards of ethical conduct, transparency, and client-centric service. Through unwavering integrity
                  and a commitment to excellence, we aim to deliver innovative financial solutions that foster long-term
                  value and sustainable growth.
                </p>
              </div>

              <div data-reveal className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.35rem] border border-blue-100/90 bg-white/92 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                  >
                    <p className="text-3xl font-bold text-[#0a355d]">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSections />
      <ClientsShowcase />
      <ScrollReveal />
      <SiteFooter />
    </main>
  );
}
