import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import RouteFocusManager from '@/components/RouteFocusManager';

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
    // Use public/ root paths; avoids broken icons if /images folder isn't wired.
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/logo.svg',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/images/logo.svg'
      },
      {
        rel: 'icon',
        url: '/favicon.svg'
      }
    ]
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
        url: '/images/logo.svg',
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
images: ['/images/logo.svg']
  },
  alternates: {
    canonical: '/'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1.0,
  userScalable: true,
  themeColor: '#0a355d',
  viewportFit: 'cover'
};

export const fetchCache = 'force-no-store';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a355d" />
      </head>
      <body suppressHydrationWarning className="bg-white font-[var(--font-body)] text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <RouteFocusManager />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
