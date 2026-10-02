import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { profile } from '@/lib/data';

export default function About() {
  return (
    <section className="px-6 md:px-10 xl:px-24 py-20 max-w-5xl xl:max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Kiri: judul & paragraf pertama */}
        <div>
          <span className="inline-block text-xs uppercase tracking-wide bg-gray-100 text-gray-600 px-6 py-2 rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-6 text-black">
            Calm tools for busy days.
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">{profile.bio[0]}</p>
        </div>

        {/* Kanan: sisa bio */}
        <div className="text-sm text-gray-600 leading-relaxed space-y-4">
          {profile.bio.slice(1).map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          <Link href="/about" className="inline-flex items-center gap-2 font-medium text-black underline-offset-4 hover:underline">
            More about me <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
