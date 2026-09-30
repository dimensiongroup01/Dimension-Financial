import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function SitemapPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="grid-overlay min-h-screen py-24">
        <div className="section-shell">
          <div className="max-w-4xl rounded-3xl bg-white/80 p-12 shadow-2xl backdrop-blur-xl">
            <h1 className="font-display text-4xl font-bold text-[#10284a] md:text-5xl">Sitemap</h1>
            <p className="mt-6 text-lg text-slate-600">Quick navigation to all pages on Dimension Financial Solutions.</p>
            
            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              <section>
                <h2 className="font-display mb-6 text-2xl font-bold text-[#10284a]">Core Pages</h2>
                <ul className="space-y-2 text-lg">
                  <li><a href="/home" className="text-[#10284a] hover:text-[#8b6a2e] hover:underline">→ Home</a></li>
                  <li><a href="/about-us" className="text-[#10284a] hover:text-[#8b6a2e] hover:underline">→ About Us</a></li>
                  <li><a href="/services" className="text-[#10284a] hover:text-[#8b6a2e] hover:underline">→ Services</a></li>
                  <li><a href="/merchant-banking" className="text-[#10284a] hover:text-[#8b6a2e] hover:underline">→ Merchant Banking</a></li>
                  <li><a href="/stock-broking" className="text-[#10284a] hover:text-[#8b6a2e] hover:underline">→ Stock Broking</a></li>
                </ul>
              </section>

              <section>
                <h2 className="font-display mb-6 text-2xl font-bold text-[#10284a]">Investor & Careers</h2>
                <ul className="space-y-2 text-lg">
                  <li><a href="/annual" className="text-[#10284a] hover:text-[#8b6a2e] hover:underline">→ Annual Reports (Investor)</a></li>
                  <li><a href="/investor" className="text-[#10284a] hover:text-[#8b6a2e] hover:underline">→ Investor Information</a></li>
                  <li><a href="/career" className="text-[#10284a] hover:text-[#8b6a2e] hover:underline">→ Careers</a></li>
                  <li><a href="/contact" className="text-[#10284a] hover:text-[#8b6a2e] hover:underline">→ Contact</a></li>
                </ul>
              </section>

              <section className="md:col-span-2 xl:col-auto">
                <h2 className="font-display mb-6 text-2xl font-bold text-[#10284a]">Policies & Legal</h2>
                <ul className="space-y-2 text-lg">
                  <li><a href="/Documents/Policies/Investor Complaints Redressal Policy.pdf" target="_blank" rel="noreferrer" className="text-[#10284a] hover:text-[#8b6a2e] hover:underline">→ Investor Complaints Policy</a></li>
                  <li><a href="/Documents/Policies/Code of Conduct and Ethics Policy.pdf" target="_blank" rel="noreferrer" className="text-[#10284a] hover:text-[#8b6a2e] hover:underline">→ Code of Conduct</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
