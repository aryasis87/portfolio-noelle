'use client';

import { ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="bg-black text-white px-6 md:px-8 lg:px-12 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-center md:text-left">
          Let&#39;s Connect There
        </h2>

        {/* Tombol Aksi */}
        <a
          href="/contact"
          aria-label="Hire me now and navigate to contact page"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Hire Me Now
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}