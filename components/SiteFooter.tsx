import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#d8c39a]/35 bg-[linear-gradient(180deg,#fbf8f2,#f4eee2)] py-14">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-[#eadcc1] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(251,247,239,0.96))] p-6 shadow-[0_18px_46px_rgba(20,30,51,0.07)] md:p-8">
          <div className="grid gap-8 border-b border-[#ebdfc8] pb-8 md:grid-cols-[minmax(0,1.1fr)_auto] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b6a2e]">Dimension Financial Solutions</p>
              <h3 className="mt-3 max-w-xl font-display text-2xl font-semibold leading-tight text-[#10284a] md:text-3xl">
                Merchant banking and debt securities services with a client-first, compliance-led approach.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#556274] md:text-base">
                DFS works with institutions, trusts, corporates, and investors through disciplined market execution,
                advisory support, and long-term financial relationships.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[#10284a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#163765]"
              >
                Talk to DFS
              </Link>
              <Link
                href="/about-us"
                className="rounded-full border border-[#d8c39a]/70 bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#10284a] transition hover:border-[#b58e43]"
              >
                Explore the Firm
              </Link>
            </div>
          </div>

          <div className="grid gap-8 pt-8 md:grid-cols-[minmax(0,1fr)_repeat(3,minmax(0,0.62fr))]">
            <div className="rounded-[1.5rem] border border-[#f0e5cf] bg-white/72 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6a2e]">Core Focus</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#d8c39a]/70 bg-[#fff8eb] px-3 py-1.5 text-xs font-semibold text-[#10284a]">
                  Merchant Banking
                </span>
                <span className="rounded-full border border-[#d8c39a]/70 bg-[#fff8eb] px-3 py-1.5 text-xs font-semibold text-[#10284a]">
                  Debt Securities
                </span>
                <span className="rounded-full border border-[#d8c39a]/70 bg-[#fff8eb] px-3 py-1.5 text-xs font-semibold text-[#10284a]">
                  Stock Broking
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg text-[#10284a]">Services</h4>
              <div className="mt-4 space-y-3 text-sm font-medium text-[#556274]">
                <p><Link href="/merchant-banking" className="transition hover:text-[#8b6a2e]">Merchant Banking</Link></p>
                <p><Link href="/services" className="transition hover:text-[#8b6a2e]">Debt Securities</Link></p>
                <p><Link href="/stock-broking" className="transition hover:text-[#8b6a2e]">Stock Broking</Link></p>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg text-[#10284a]">Investor</h4>
              <div className="mt-4 space-y-3 text-sm font-medium text-[#556274]">
                <p><Link href="/annual" className="transition hover:text-[#8b6a2e]">Investor Corner</Link></p>
                <p><Link href="/investor" className="transition hover:text-[#8b6a2e]">Investor Information</Link></p>
                <p><Link href="/career" className="transition hover:text-[#8b6a2e]">Careers</Link></p>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg text-[#10284a]">Contact</h4>
              <div className="mt-4 space-y-3 text-sm font-medium text-[#556274]">
                <p><a href="mailto:contact@dimensionfinancial.co.in" className="transition hover:text-[#8b6a2e]">contact@dimensionfinancial.co.in</a></p>
                <p><a href="tel:01204151349" className="transition hover:text-[#8b6a2e]">0120-4151349</a></p>
                <p>
                  <a
                    href="/Documents/Policies/Investor Complaints Redressal Policy.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#8b6a2e]"
                  >
                    Investor Policy
                  </a>
                </p>
                <p>
                  <a
                    href="/Documents/Policies/Code of Conduct and Ethics Policy.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#8b6a2e]"
                  >
                    Code of Conduct
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[#ebdfc8] pt-5 text-sm text-[#6b7280] md:flex-row md:items-center md:justify-between">
            <p>{new Date().getFullYear()} Dimension Financial Solutions Pvt. Ltd.</p>
            <p>Client-centric financial advisory with a compliance-led operating model.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
