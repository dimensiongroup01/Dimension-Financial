import type { Metadata, Viewport } from 'next';
import { Manrope, Sora } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body'
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dimensionfinancial.co.in'),
  title: {
    default: 'Dimension Financial Services | SEBI-Registered Merchant Banker & Stock Broker',
    template: '%s | Dimension Financial Services'
  },
  description:
    'Dimension Financial Solutions Private Limited is a SEBI-registered Merchant Banker and Stock Broker offering merchant banking, debt placement, and debt segment stock broking services in India.',
  applicationName: 'Dimension Financial Services',
  keywords: [
    'Merchant Banker India',
    'SEBI registered merchant banker',
    'Debt placement services',
    'Stock broking debt segment',
    'BSE New Debt Segment',
    'Dimension Financial Services'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: 'https://dimensionfinancial.co.in/images/logo.svg',
    shortcut: 'https://dimensionfinancial.co.in/images/logo.svg',
    apple: 'https://dimensionfinancial.co.in/images/logo.svg'
  },
  openGraph: {
    title: 'Dimension Financial Services | Merchant Banking and Debt Advisory',
    description:
      'SEBI-registered merchant banking, debt placement, and debt segment stock broking services for corporates, institutions, and investors.',
    url: 'https://dimensionfinancial.co.in',
    siteName: 'Dimension Financial Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://dimensionfinancial.co.in/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Dimension Financial Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimension Financial Services | Merchant Banking and Debt Advisory',
    description:
      'SEBI-registered Merchant Banker and Stock Broker offering merchant banking, debt placement, and debt segment stock broking services.',
    images: ['https://dimensionfinancial.co.in/images/logo.svg']
  },
  alternates: {
    canonical: '/'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a355d'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning />
      <body suppressHydrationWarning className={`${manrope.variable} ${sora.variable} bg-white font-[var(--font-body)] text-ink antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

