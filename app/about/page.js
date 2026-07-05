import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { profile, skills, experience, education } from '@/lib/data';

export const metadata = { title: 'About — Noelle' };

export default function AboutPage() {
  return (
    <main>
      <PageHeader kicker="About" title="A bit about me." subtitle={profile.bioShort} />

      {/* Bio + photo */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl md:mx-0">
              <Image src={profile.avatar} alt={profile.name} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mb-4 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs uppercase tracking-wide text-gray-600">{profile.role}</span>
            <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">Designing with intention.</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-gray-600">
              {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <Link href={profile.resumeUrl || '#'} className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
              <Download size={16} /> Download CV
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal><h2 className="text-2xl font-semibold md:text-3xl">Skills &amp; Tools</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.1}>
                <div className="h-full rounded-xl bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-lg font-semibold">{s.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((it) => <li key={it} className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700">{it}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience + Education */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal><h2 className="text-2xl font-semibold md:text-3xl">Experience</h2></Reveal>
          <div className="mt-10">
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="grid gap-2 border-t border-gray-200 py-7 md:grid-cols-[180px_1fr]">
                  <span className="text-sm font-medium text-gray-500">{e.period}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{e.role} <span className="font-normal text-gray-400">· {e.company}</span></h3>
                    <p className="mt-2 max-w-2xl text-gray-600">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14"><h2 className="text-2xl font-semibold md:text-3xl">Education</h2></Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-xl bg-gray-100 p-6">
                  <span className="text-xs font-medium text-gray-500">{e.period}</span>
                  <h3 className="mt-2 text-lg font-semibold">{e.degree}</h3>
                  <p className="text-sm text-gray-600">{e.school}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
