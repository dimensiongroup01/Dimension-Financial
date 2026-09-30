'use client';

import React, { useEffect, useState } from 'react';
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
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <React.Fragment>
      
      
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:inline-flex focus:items-center focus:rounded-lg focus:bg-[#10284a] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-[#2f9bff]"
      >
        Skip to main content
      </Link>

      <header
        className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-300 ${
          scrolled
            ? 'shadow-[0_2px_24px_rgba(16,40,74,0.08)]'
            : 'border-b border-slate-100 shadow-none'
        }`}
      >
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

          {/* ── Logo ── */}
          <Link
            href="/home"
            prefetch={false}
            className="inline-flex max-w-[10.5rem] shrink-0 items-center rounded-lg focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#2f9bff] sm:max-w-[12rem] md:max-w-none"
          >
            <Image
              src="/images/logo.svg"
              alt="Dimension Financial"
              width={200}
              height={50}
              className="h-8 w-auto object-contain sm:h-9 md:h-10"
            />
          </Link>

          {/* ── Desktop nav (lg+) ── */}
          <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === '/home' && pathname === '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative px-3 py-2 text-[0.8125rem] tracking-wide transition-colors duration-150 2xl:px-4 2xl:text-sm ${
                    isActive
                      ? 'font-bold text-[#10284a]'
                      : 'font-medium text-slate-500 hover:text-[#10284a]'
                  } rounded-lg focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#2f9bff]`}
                >
                  <span className={`transition-all duration-150 ${!isActive ? 'group-hover:font-bold' : ''}`}>
                    {item.label}
                  </span>
                  {/* Small blue dot beneath active link */}
                  <span
                    className="hidden"
                  />
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              prefetch={false}
              className="ml-3 inline-flex items-center rounded-lg bg-[#10284a] px-3.5 py-2 text-[0.8125rem] font-semibold text-white transition-all duration-200 hover:bg-[#0d1f3c] hover:shadow-[0_6px_20px_rgba(16,40,74,0.22)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#2f9bff] 2xl:text-sm"
            >
              Get in Touch
            </Link>
          </nav>

          {/* ── Hamburger (below lg) ── */}
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((p) => !p)}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-lg border border-slate-200 bg-white transition-colors hover:border-[#10284a] hover:bg-slate-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#2f9bff] xl:hidden"
          >
            <span
              className={`h-[1.5px] w-5 rounded-full bg-[#10284a] transition-all duration-300 ${
                isMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-[1.5px] w-5 rounded-full bg-[#10284a] transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[1.5px] w-5 rounded-full bg-[#10284a] transition-all duration-300 ${
                isMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* ── Mobile / tablet drawer ── */}
        {isMenuOpen && (
          <div
            id="mobile-nav"
            className="overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-in-out xl:hidden"
          >
            <nav aria-label="Primary" className="flex flex-col px-5 py-3 sm:px-8">
              {navLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === '/home' && pathname === '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-3 border-b border-slate-50 py-3.5 text-[15px] transition-colors duration-150 last:border-0 ${
                      isActive
                        ? 'font-bold text-[#10284a]'
                        : 'font-medium text-slate-400 hover:font-bold hover:text-[#10284a]'
                    } rounded-lg focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#2f9bff]`}
                  >
                    {/* Blue accent bar for active link */}
                    <span
                      className={`h-4 w-[3px] shrink-0 rounded-full transition-all duration-200 ${
                        isActive ? 'bg-[#2f9bff]' : 'bg-transparent'
                      }`}
                    />
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                prefetch={false}
                className="mt-4 mb-1 flex items-center justify-center rounded-lg bg-[#10284a] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0d1f3c] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#2f9bff]"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        )}
      </header>
    </React.Fragment>
  );
}