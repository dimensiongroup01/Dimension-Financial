import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollFusion3D from '@/components/ScrollFusion3D';
import ScrollReveal from '@/components/ScrollReveal';
import StoryChapter from '@/components/StoryChapter';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Dimension Financial Solutions for merchant banking, debt advisory, stock broking support, office addresses, and compliance contacts.',
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactPage() {
  return (
    <main className="grid-overlay">
      <SiteHeader />
      <PageHero
        kicker="Strong & Confident Positioning"
        title="Let's Structure Your Next Growth Opportunity"
        subtitle="Whether you're raising capital, structuring debt, or executing transactions in the debt segment, our experienced advisory team ensures compliant, efficient, and value-driven execution. Reach out today to move forward with confidence."
      />
      <ScrollFusion3D variant="contact" compact />
      <StoryChapter
        label="Section 06"
        title="Start the Advisory Conversation"
        detail="Connect with our office and compliance contacts to initiate a structured and regulation-aligned engagement."
      />

      <section className="section-shell grid gap-4 py-14 md:grid-cols-2 md:py-20">
        <article data-reveal className="card p-6 text-sm text-ink md:p-7">
          <h3 className="font-display text-2xl text-ink">Office Details</h3>
          <p className="mt-3 font-semibold">Dimension Financial Solutions Pvt. Ltd.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-xl border border-[#eadcc1] bg-white p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[#8b6a2e]">Office</p>
              <p className="mt-1 leading-relaxed">Dimension Tower, Plot No-10, 3rd Floor, Commercial Area, Kaushambi, Ghaziabad, Uttar Pradesh 201010</p>
            </div>
            <div className="rounded-xl border border-[#eadcc1] bg-white p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[#8b6a2e]">Registered Office</p>
              <p className="mt-1 leading-relaxed">302, Dakha Chamber, 38/2068, Naiwala, Karol Bagh, New Delhi</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-[#eadcc1] bg-white p-4">
            <div className="space-y-2 text-base leading-relaxed">
              <p className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-2">
                <strong>Phone:</strong>
                <span><a href="tel:01204376552" className="hover:text-[#8b6a2e]">0120-4376552</a>, <a href="tel:01204336551" className="hover:text-[#8b6a2e]">0120-4336551</a></span>
              </p>
              <p className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-2">
                <strong>Fax:</strong>
                <span>0120-4151349</span>
              </p>
              <p className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-2">
                <strong>Regd. Office Phone:</strong>
                <span><a href="tel:01146108121" className="hover:text-[#8b6a2e]">011-46108121</a></span>
              </p>
              <p className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-2">
                <strong>Email:</strong>
                <a href="mailto:contact@dimensionfinancial.co.in" className="break-all hover:text-[#8b6a2e]">contact@dimensionfinancial.co.in</a>
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-[#eadcc1] bg-[#fff8eb]/80 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[#8b6a2e]">Merchant Banking Compliance Officer</p>
              <p className="mt-1 font-semibold">Miss. Pragya Srivastav</p>
              <p className="mt-1 grid gap-1 sm:grid-cols-[4rem_1fr] sm:gap-2">
                <strong>Mobile:</strong>
                <a href="tel:9650799551" className="hover:text-[#8b6a2e]">9650799551</a>
              </p>
              <p className="mt-1 grid gap-1 sm:grid-cols-[4rem_1fr] sm:gap-2">
                <strong>Email:</strong>
                <a href="mailto:compliance@dimensionfinancial.co.in" className="break-all hover:text-[#8b6a2e]">compliance@dimensionfinancial.co.in</a>
              </p>
            </div>
            <div className="rounded-xl border border-[#eadcc1] bg-[#fff8eb]/80 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[#8b6a2e]">Stock Broking Compliance Officer</p>
              <p className="mt-1 font-semibold">Mr. Utkarsh Bhatnagar</p>
              <p className="mt-1 grid gap-1 sm:grid-cols-[4rem_1fr] sm:gap-2">
                <strong>Email:</strong>
                <a href="mailto:utkarsh.bhatnagar@dimensiongroup.co.in" className="break-all hover:text-[#8b6a2e]">utkarsh.bhatnagar@dimensiongroup.co.in</a>
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-[#eadcc1] bg-[#fff8eb]/80 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#8b6a2e]">BondsAdda Compliance</p>
            <p className="mt-1"><a href="mailto:compliance@dimensiongroup.co.in" className="font-semibold hover:text-[#8b6a2e]">compliance@dimensiongroup.co.in</a></p>
          </div>

          <iframe
            title="Dimension Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114230.32630487425!2d77.21255734586686!3d28.624297652845076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb005c6b1e89%3A0x4afe9c9ab2831b65!2sDimension%20group!5e0!3m2!1sen!2sin!4v1732705803709!5m2!1sen!2sin"
            className="mt-4 h-72 w-full rounded-xl border-0"
            loading="lazy"
          />
        </article>

        <article data-reveal className="card p-6">
          <h3 className="font-display text-2xl text-ink">Send a Message</h3>
          <form className="mt-4 space-y-3" action="mailto:contact@dimensionfinancial.co.in" method="post" encType="text/plain">
            <input className="input-shell" type="text" name="name" required placeholder="Full Name" />
            <input className="input-shell" type="email" name="email" required placeholder="Email Address" />
            <input className="input-shell" type="tel" name="phone" required placeholder="Phone Number" />
            <select className="input-shell" name="service">
              <option>Merchant Banking</option>
              <option>Debt Placement & Advisory</option>
              <option>Stock Broking</option>
              <option>BondsAdda Platform</option>
            </select>
            <textarea className="input-shell" name="message" rows={5} placeholder="Message" />
            <button type="submit" className="rounded-full bg-[#b58e43] px-6 py-3 text-sm font-semibold text-white">Submit</button>
          </form>
        </article>
      </section>

      <ScrollReveal />
      <SiteFooter />
    </main>
  );
}
