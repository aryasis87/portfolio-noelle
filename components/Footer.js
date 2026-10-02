import Link from 'next/link';
import { nav, profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-10 xl:px-24 pt-20 pb-8 max-w-5xl xl:max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Nama & ringkasan */}
        <div>
          <p className="font-bold text-lg mb-2">{profile.name}</p>
          <p className="text-sm text-gray-300">{profile.bioShort}</p>
        </div>

        <div>
          <h2 className="font-semibold text-sm mb-2">Based in</h2>
          <p className="text-sm text-gray-300">{profile.location}<br />Working remotely</p>
        </div>

        <div>
          <h2 className="font-semibold text-sm mb-2">Email</h2>
          <p className="text-sm text-gray-300">
            <a href={`mailto:${profile.email}`} className="hover:text-white underline-offset-4 hover:underline">{profile.email}</a>
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-sm mb-2">About this site</h2>
          <p className="text-sm text-gray-300">A portfolio template with a fictional persona. Every project links to a live demo site; there are no real clients or testimonials here.</p>
        </div>
      </div>

      {/* Navigasi bawah */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 order-2 md:order-1">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <nav className="order-1 md:order-2" aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
