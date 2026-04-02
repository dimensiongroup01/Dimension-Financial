'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/about-us', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/merchant-banking', label: 'Merchant Banking' },
  { href: '/stock-broking', label: 'Stock Broking' },
  { href: '/annual', label: 'Investor' },
  { href: '/contact', label: 'Contact' }
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#d8c39a]/30 bg-[rgba(251,248,242,0.86)] backdrop-blur-xl">
      <div className="section-shell py-3">
        <div className="flex flex-col gap-4 rounded-[1.6rem] border border-[#e7d8b9] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(251,247,239,0.94))] px-4 py-4 shadow-[0_12px_30px_rgba(20,30,51,0.06)] md:flex-row md:items-center md:justify-between md:px-7 xl:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/home" prefetch={false} className="inline-flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Dimension Financial"
                width={200}
                height={50}
                className="h-[40px] w-[140px] object-contain sm:h-[44px] sm:w-[160px] md:h-[48px] md:w-[190px]"
              />
            </Link>

          </div>

          <nav className="flex flex-wrap items-center gap-x-2 gap-y-2 md:justify-end xl:gap-x-3">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href === '/home' && pathname === '/');

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition md:px-5 md:py-2.5 md:text-sm ${
                    isActive
                      ? 'bg-[#10284a] text-white shadow-[0_8px_24px_rgba(16,40,74,0.16)]'
                      : 'text-[#314059] hover:bg-[#f5ebd3] hover:text-[#10284a]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
