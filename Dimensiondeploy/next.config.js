/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bondsadda.com'
      }
    ]
  },
  webpack: (config, { dev }) => {
    // Avoid dev-time PackFile cache memory spikes on constrained environments.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  async redirects() {
    return [
      { source: '/about-us.html', destination: '/about-us', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/deals.html', destination: '/services', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/annual.html', destination: '/annual', permanent: true },
      { source: '/Career.html', destination: '/career', permanent: true },
      { source: '/merchantbanking.html', destination: '/merchant-banking', permanent: true },
      { source: '/stockbroking.html', destination: '/stock-broking', permanent: true }
    ];
  }
};

module.exports = nextConfig;
