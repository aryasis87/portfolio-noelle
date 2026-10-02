import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="bg-black text-white px-6 md:px-8 lg:px-12 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-center md:text-left">
          Have a tool that needs to feel calmer?
        </h2>

        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Start a project
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
