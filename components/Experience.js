import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section className="px-6 md:px-10 xl:px-24 py-20 max-w-5xl xl:max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-12 text-center md:text-left">
        <span className="inline-block text-xs uppercase tracking-wide bg-gray-200 text-gray-600 px-3 py-1 rounded-full mb-4">
          Experience
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Where the work happened</h2>
        <p className="text-sm text-gray-600 max-w-xl mx-auto md:mx-0">
          A short timeline, from visual design to product design and freelance work.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-10">
        {experience.map((exp) => (
          <div key={exp.period} className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="md:w-1/4 md:text-right">
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <div className="md:w-3/4">
              <h3 className="font-semibold text-black">
                {exp.role} <span className="font-normal text-gray-500">· {exp.company}</span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
