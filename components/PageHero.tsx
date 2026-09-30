interface PageHeroProps {
  kicker: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ kicker, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#dbc7a0]/45 bg-[linear-gradient(180deg,#fbf8f2_0%,#f6efe0_58%,#fcfaf5_100%)] py-14 md:py-20">
      <div className="pointer-events-none absolute left-[-8%] top-[-18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(181,142,67,0.16),rgba(181,142,67,0))] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(16,40,74,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(181,142,67,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="section-shell relative z-10">
        <div className="rounded-[1.5rem] border border-[#eadcc1] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(251,247,239,0.92))] p-5 shadow-[0_18px_48px_rgba(20,30,51,0.08)] sm:rounded-[2rem] sm:p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] md:items-end">
            <div className="space-y-4">
              <p data-reveal className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-[#8b6a2e] sm:text-[11px] sm:tracking-[0.24em]">
                {kicker}
              </p>
              <h1 data-reveal className="max-w-4xl font-display text-[2rem] font-semibold leading-[1] text-[#10284a] sm:text-4xl sm:leading-[0.95] md:text-6xl">
                {title}
              </h1>
            </div>

            {subtitle ? (
              <p data-reveal className="max-w-3xl text-sm leading-7 text-[#435067] md:justify-self-end md:text-lg">
                {subtitle}
              </p>
            ) : (
              <div className="justify-self-start rounded-full border border-[#d8c39a]/70 bg-[#fff8eb] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5a1e] md:justify-self-end">
                Financial Services
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
