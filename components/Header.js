'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';
import { nav } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 20), []);
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const links = nav.slice(0, -1); // tanpa Contact (jadi tombol)

  return (
    <header className="fixed z-50 w-full transition-all duration-300">
      <div
        className={clsx(
          'mx-auto flex items-center justify-between px-6 py-4 backdrop-blur-md transition-colors duration-500 xl:max-w-7xl',
          scrolled ? 'bg-black/80 text-white shadow-sm' : 'bg-white text-black'
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logos1.webp" alt="Noelle" width={32} height={32} className={clsx('h-8 w-8 transition-all duration-700', scrolled ? 'invert' : 'invert-0')} priority />
          <span className="text-2xl font-bold tracking-tight">Noelle</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden space-x-8 text-sm font-medium md:flex" aria-label="Main navigation">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx('group relative transition-colors duration-300', isActive(item.href) ? 'opacity-100' : 'opacity-70 hover:opacity-100')}
            >
              {item.label}
              <span className={clsx('absolute -bottom-1 left-0 h-[2px] bg-current transition-all', isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full')} />
            </Link>
          ))}
        </nav>

        {/* Contact button */}
        <Link
          href="/contact"
          className={clsx(
            'hidden rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 md:block',
            scrolled ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'
          )}
        >
          Contact
        </Link>

        {/* Mobile toggle */}
        <button className="p-2 text-current md:hidden" onClick={() => setIsOpen((v) => !v)} aria-expanded={isOpen} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx('fixed inset-x-0 top-[64px] overflow-hidden bg-white text-gray-800 transition-all duration-300 ease-in-out md:hidden', isOpen ? 'max-h-screen py-6' : 'max-h-0')}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col items-center space-y-6" aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className={clsx('text-base font-medium transition-colors', isActive(item.href) ? 'text-black' : 'text-gray-500 hover:text-black')}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
