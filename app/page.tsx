import type { Metadata } from 'next';
import HomeLanding from '@/components/HomeLanding';

export const metadata: Metadata = {
  title: 'Dimension Financial Services | SEBI-Registered Merchant Banker & Stock Broker',
  description: 'Dimension Financial Solutions Private Limited offers merchant banking, debt advisory, and stock broking services for institutions, trusts, corporates, and investors.',
  alternates: {
    canonical: '/'
  }
};

export default function HomePage() {
  return <HomeLanding />;
}

