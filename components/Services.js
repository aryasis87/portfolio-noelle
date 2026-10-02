import Link from 'next/link';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section className="px-6 md:px-10 xl:px-24 py-20 max-w-5xl xl:max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-12">
        <span className="inline-block text-xs uppercase tracking-wide bg-gray-200 text-gray-600 px-3 py-1 rounded-full mb-4">
          Services
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">What I can help with</h2>
        <p className="text-sm text-gray-600">From the first flow to the last edge case, for web apps that people use every day.</p>
        <Link
          href="/contact"
          className="mt-4 inline-block border border-black px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-colors duration-300"
        >
          Start a project
        </Link>
      </div>

      {/* Grid layanan */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const theme = service.highlight ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:shadow-lg';

  return (
    <div className={`rounded-xl p-6 h-full flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 shadow-md ${theme}`}>
      <div>
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-sm">{service.description}</p>
      </div>
      <span className="mt-6 text-sm font-medium opacity-80" aria-hidden="true">0{index + 1}</span>
    </div>
  );
}
