import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main className="bg-white">
      <PageHeader kicker="Error 404" title="This page isn’t here." subtitle="It doesn’t exist, or it has moved. The work and the writing are still one click away." />
      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
            <ArrowLeft size={16} aria-hidden="true" /> Back home
          </Link>
          <Link href="/work" className="rounded-full border border-black px-6 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white">
            See the work
          </Link>
        </div>
      </section>
    </main>
  );
}
