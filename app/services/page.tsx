import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollFusion3D from '@/components/ScrollFusion3D';
import ScrollReveal from '@/components/ScrollReveal';
import ServicesTabs from '@/components/ServicesTabs';
import StoryChapter from '@/components/StoryChapter';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Dimension Financial services including merchant banking, debt placement, debt advisory, and debt segment stock broking across institutional and corporate mandates.',
  alternates: {
    canonical: '/services'
  }
};

export default function ServicesPage() {
  return (
    <main className="grid-overlay">
      <SiteHeader />
      <PageHero
        kicker="Core Services"
        title="Capital Market and Debt Advisory Services"
        subtitle="Integrated service lines across merchant banking, debt placement, debt advisory, and debt segment stock broking."
      />
      <ScrollFusion3D variant="services" compact />
      <StoryChapter
        label="Section 02"
        title="From Complexity to Clarity"
        detail="Our services are designed to move each mandate from structuring to compliant execution for corporates, institutions, and trusts."
      />
      <ServicesTabs />
      <ScrollReveal />
      <SiteFooter />
    </main>
  );
}
