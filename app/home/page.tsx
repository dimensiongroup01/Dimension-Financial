import type { Metadata } from 'next';
import HomeLanding from '@/components/HomeLanding';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Dimension Financial Solutions Private Limited offers merchant banking, debt advisory, and stock broking services for institutions, trusts, corporates, and investors.',
  alternates: {
    canonical: '/home'
  }
};

export default function HomeRoutePage() {
  return <HomeLanding />;
}
