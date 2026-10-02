import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { projects, getProject } from '@/lib/data';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: 'Project not found' };
  return { title: `Case study: ${p.title}`, description: p.summary, alternates: { canonical: `/work/${p.slug}` }, openGraph: { images: [{ url: p.image }] } };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = projects[(projects.findIndex((x) => x.slug === slug) + 1) % projects.length];

  return (
    <main>
      <PageHeader kicker={`${p.category} · ${p.year}`} title={p.title} subtitle={p.summary} />
      <section className="bg-white px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 shadow-md">
            <Image src={p.image} alt={`Screenshot of ${p.title}`} fill priority sizes="(max-width:1024px) 100vw, 60vw" className="object-cover object-top" />
          </div>
          <aside className="h-fit rounded-xl border border-gray-200 bg-gray-50 p-6">
            <dl className="space-y-4 text-sm">
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Project</dt><dd className="mt-0.5 font-semibold text-black">{p.client}</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Role</dt><dd className="mt-0.5 font-semibold text-black">{p.role}</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Year</dt><dd className="mt-0.5 font-semibold text-black">{p.year}</dd></div>
            </dl>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
              Open the live site <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p className="mt-3 text-xs text-gray-500">A live demo project. Opens in a new tab.</p>
          </aside>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold text-black">The challenge</h2>
            <p className="mt-3 leading-relaxed text-gray-600">{p.challenge}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black">What I did</h2>
            <ul className="mt-3 space-y-3">
              {p.work.map((w) => <li key={w} className="flex gap-2 text-gray-600"><Check size={18} className="mt-0.5 shrink-0 text-black" aria-hidden="true" />{w}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black">Outcome</h2>
            <p className="mt-3 leading-relaxed text-gray-600">{p.outcome}</p>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-black underline-offset-4 hover:underline"><ArrowLeft size={16} aria-hidden="true" /> All work</Link>
          <Link href={`/work/${next.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-black underline-offset-4 hover:underline">Next: {next.title} <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
