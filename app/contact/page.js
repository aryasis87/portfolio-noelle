'use client';
import { useState } from 'react';
import { Mail, MapPin, Check } from 'lucide-react';
import { profile } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true); // Portfolio template: the message is not delivered anywhere.
  };

  const field = 'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-black';

  return (
    <main className="bg-white">
      <section className="px-6 pt-32 pb-10">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs uppercase tracking-wide text-gray-600">Contact</span>
          <h1 className="text-4xl font-light tracking-tight text-black md:text-6xl">Let&apos;s work together.</h1>
          <p className="mt-5 max-w-2xl text-gray-600">Open for freelance & collaboration. Tell me about your project and I&apos;ll get back to you.</p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-5">
            <Info icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Info icon={MapPin} label="Location" value={profile.location} />
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <span className="flex items-center gap-2 text-sm font-semibold text-black">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" /> Available for new projects
              </span>
              <p className="mt-2 text-sm text-gray-600">Currently booking projects for the next quarter.</p>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-white"><Check size={28} aria-hidden="true" /></div>
                <h2 className="mt-4 text-2xl font-semibold">Thanks for trying the form!</h2>
                <p className="mt-1 text-gray-600">This is a portfolio template, {form.name}, so your message wasn&apos;t actually sent. In a live version, it lands straight in the owner&apos;s inbox.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="mt-6 rounded-full border border-black px-6 py-2.5 text-sm font-medium transition hover:bg-black hover:text-white">Back to the form</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" value={form.name} onChange={handle} placeholder="Your name" required className={field} />
                  <input type="email" name="email" value={form.email} onChange={handle} placeholder="Your email" required className={field} />
                </div>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Tell me about your project…" rows={6} required className={`${field} resize-none`} />
                <button type="submit" className="w-full rounded-xl bg-black py-3.5 font-medium text-white transition hover:bg-gray-800">Send message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-black">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-black"><Icon size={20} aria-hidden="true" /></span>
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
        <p className="mt-0.5 font-semibold text-black">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
