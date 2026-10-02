import Image from 'next/image';
import Link from 'next/link';
import { profile, projects } from '@/lib/data';

export default function Hero() {
  const [baris1, ...sisa] = profile.role.split(' ');

  return (
    <section className="bg-white px-6 pt-32 pb-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Kiri: judul, ringkasan, proyek terbaru */}
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-[64px] leading-tight text-black mb-6 font-light tracking-tight">
          {baris1} <br />
          {sisa.join(' ')}
        </h1>
        <p className="text-sm md:text-base text-gray-600 max-w-md mb-10">{profile.bioShort}</p>

        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-500">Recent projects</p>
        <ul className="flex flex-wrap gap-3">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                className="inline-block bg-gray-100 text-gray-700 text-xs sm:text-sm px-4 py-2 rounded-full font-medium tracking-wide transition hover:bg-black hover:text-white"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Kanan: foto meja kerja + keterangan */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right">
        <div className="w-[220px] sm:w-[260px] h-[320px] sm:h-[380px] relative rounded-xl overflow-hidden shadow-xl mb-4 bg-gray-200">
          <Image src={profile.avatar} alt="" fill priority sizes="(max-width: 640px) 220px, 260px" className="object-cover" />
        </div>
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-black">{profile.name}</span> · {profile.location}
          <br className="hidden md:block" /> {profile.intro.replace(/^Hi, I’m [^—]+— /, '')}
        </p>
      </div>
    </section>
  );
}
