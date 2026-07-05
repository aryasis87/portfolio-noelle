'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';

const CATS = ['All', 'Product', 'Branding', 'Web', 'Mobile'];

export default function WorkPage() {
  const [cat, setCat] = useState('All');
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat]);

  return (
    <main className="bg-white">
      <section className="px-6 pt-32 pb-10">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs uppercase tracking-wide text-gray-600">Work</span>
          <h1 className="text-4xl font-light tracking-tight text-black md:text-6xl">Selected projects.</h1>
          <p className="mt-5 max-w-2xl text-gray-600">A selection of product design, branding, and web work.</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${cat === c ? 'bg-black text-white' : 'border border-gray-300 text-gray-700 hover:border-black'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <motion.div layout className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.a
                key={p.title}
                href="#"
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group block"
              >
                <div className="relative mb-4 h-64 w-full overflow-hidden rounded-xl shadow-md transition group-hover:shadow-xl">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black backdrop-blur">{p.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-black">{p.title}</h3>
                  <span className="text-xs text-gray-400">{p.year}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
