import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

// Bento: ukuran ubin per urutan (hanya di layar md ke atas).
const SPAN = ['md:col-span-2 md:row-span-2', 'md:col-span-2', '', 'md:row-span-2', 'md:col-span-2', ''];

export default function Portfolio() {
  return (
    <section className="bg-white px-6 md:px-10 xl:px-24 py-20 max-w-5xl xl:max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-12 text-center">
        <span className="inline-block text-xs uppercase tracking-wide bg-gray-200 text-gray-600 px-3 py-1 rounded-full mb-4">
          Portfolio
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black">Six live projects</h2>
        <p className="text-sm text-gray-600">Each one opens a short case study and a link to the live site.</p>
      </div>

      {/* Grid bento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px] max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className={`${SPAN[i] || ''} relative rounded-xl overflow-hidden shadow-lg group bg-gray-200`}>
            <Image src={p.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-10 text-left">
              <span className="block text-base font-semibold text-white">{p.title}</span>
              <span className="block text-xs text-white/85">{p.category} · {p.year}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
