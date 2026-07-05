'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { nav } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-10 xl:px-24 pt-20 pb-8 max-w-5xl xl:max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h3 className="font-bold text-lg mb-2">Sanzy</h3>
          <p className="text-sm text-gray-400">
            Noelle is a Product Designer who builds impactful visual experiences with a strategic perspective and a hint of artificial intelligence (AI).
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-400" aria-label="Social media links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white focus:outline-none focus:text-white">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white focus:outline-none focus:text-white">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white focus:outline-none focus:text-white">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white focus:outline-none focus:text-white">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-semibold text-sm mb-2">Address</h4>
          <address className="not-italic text-sm text-gray-400">
            Techspace Park 75-91 Company, Indonesia Service across worldwide remote
          </address>
        </div>

        {/* Email */}
        <div>
          <h4 className="font-semibold text-sm mb-2">Email Address</h4>
          <p className="text-sm text-gray-400">
            <a href="mailto:hello@sanzy.io" className="hover:text-white">hello@sanzy.io</a>
          </p>
          <p className="text-sm text-gray-400">
            <a href="mailto:marketing@sanzy.io" className="hover:text-white">marketing@sanzy.io</a>
          </p>
        </div>

        {/* Phone */}
        <div>
          <h4 className="font-semibold text-sm mb-2">Phone Number</h4>
          <p className="text-sm text-gray-400">
            <a href="tel:+6287787874545" className="hover:text-white">0877 8787 4545</a>
          </p>
          <p className="text-sm text-gray-400">
            <a href="tel:+622189896767" className="hover:text-white">021 8989 6767</a>
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500 order-2 md:order-1">
          © All rights reserved Sanzystore
        </div>
        <nav className="order-1 md:order-2" aria-label="Footer navigation">
          <ul className="flex gap-6 text-sm text-gray-400">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white focus:text-white focus:outline-none">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}