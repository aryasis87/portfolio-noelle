import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { posts } from '@/lib/data';

export const metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <main className="bg-white">
      <PageHeader kicker="Blog" title="Thoughts & writing." subtitle="Notes on the decisions behind the projects: what was tried, what stayed, and why." />

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-5">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link href={`/blog/${p.slug}`} className="group flex flex-col justify-between gap-4 rounded-xl bg-gray-100 p-6 transition hover:bg-gray-200 sm:flex-row sm:items-center md:p-8">
                <div className="max-w-2xl">
                  <div className="mb-2 flex items-center gap-3 text-xs text-gray-600">
                    <span className="rounded-full bg-white px-2.5 py-1 font-medium text-black">{p.category}</span>
                    <span>{p.date}</span><span>·</span><span>{p.read} read</span>
                  </div>
                  <h2 className="text-xl font-semibold text-black md:text-2xl">{p.title}</h2>
                  <p className="mt-2 text-gray-600">{p.excerpt}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="hidden shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-black sm:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
