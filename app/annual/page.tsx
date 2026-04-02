import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollFusion3D from '@/components/ScrollFusion3D';
import ScrollReveal from '@/components/ScrollReveal';
import StoryChapter from '@/components/StoryChapter';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Investor Corner',
  description:
    'Access annual returns, investor disclosures, and statutory documents published by Dimension Financial Solutions.',
  alternates: {
    canonical: '/annual'
  }
};

const docs = [
  { year: '2024-25', name: 'Annual Return DFSPL', href: '/Documents/Annual report/MGT-7_21_10_2025_signed.pdf' },
  { year: '2023-24', name: 'Annual Return DFSPL', href: '/Documents/Annual report/Form MGT-17_annual Return2024.pdf' },
  { year: '2022-23', name: 'Annual Return DFSPL', href: '/Documents/Annual report/Form MGT-17_annual Return2023.pdf' },
  { year: '2021-22', name: 'Annual Return DFSPL', href: '/Documents/Annual report/MGT 7 DFS PDF 2021-22.pdf' },
  { year: '2020-21', name: 'Annual Return DFSPL', href: '/Documents/Annual report/MGT 7 2020-21.pdf' }
];

export default function AnnualPage() {
  return (
    <main className="grid-overlay">
      <SiteHeader />
      <PageHero kicker="Investor Resources" title="Investor Corner" />
      <ScrollFusion3D variant="annual" compact />
      <StoryChapter
        label="Section 07"
        title="Transparency as a Strategic Standard"
        detail="Investor documentation is presented as a clean disclosure timeline, reinforcing governance quality and institutional trust."
      />

      <section className="section-shell py-14 md:py-20">
        <p data-reveal className="mb-2 text-xs text-slate-600 md:hidden">Swipe horizontally to view the full table.</p>
        <div data-reveal className="card overflow-x-auto p-2">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="text-ink">
              <tr>
                <th className="px-4 py-3">Year</th>
                <th className="px-4 py-3">Document</th>
                <th className="px-4 py-3">View</th>
              </tr>
            </thead>
            <tbody>
              {docs.map((doc) => (
                <tr key={doc.href} className="border-t border-blue-200/80 text-ink">
                  <td className="px-4 py-3">{doc.year}</td>
                  <td className="px-4 py-3">{doc.name}</td>
                  <td className="px-4 py-3">
                    <a href={doc.href} target="_blank" rel="noreferrer" className="text-aqua hover:text-gold">
                      Open PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ScrollReveal />
      <SiteFooter />
    </main>
  );
}


