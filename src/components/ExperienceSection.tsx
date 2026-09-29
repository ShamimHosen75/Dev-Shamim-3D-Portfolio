import FadeIn from './FadeIn';
import { experiences } from '../data/portfolio';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-20 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn y={40}>
        <h2
          className="mb-16 sm:mb-20 md:mb-28 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <ol className="mx-auto max-w-5xl">
        {experiences.map((job, i) => (
          <FadeIn
            as="li"
            key={job.company}
            delay={i * 0.08}
            className="grid gap-4 py-8 sm:py-10 md:grid-cols-[220px_1fr] md:gap-10 text-[#0C0C0C]"
            style={{
              borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
            }}
          >
            <div className="flex flex-col gap-1">
              <span className="font-black uppercase leading-none" style={{ fontSize: 'clamp(1.25rem, 2.4vw, 2rem)' }}>
                {job.date}
              </span>
              <span className="text-sm font-light uppercase tracking-widest opacity-60">{job.location}</span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}>
                {job.company}
              </h3>
              <span className="text-sm font-light uppercase tracking-widest opacity-60">{job.role}</span>
              <p className="max-w-3xl font-light leading-relaxed opacity-70" style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)' }}>
                {job.desc}
              </p>
              <ul className="flex flex-wrap gap-2 pt-1">
                {job.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border px-3 py-1 text-xs font-light"
                    style={{ borderColor: 'rgba(12, 12, 12, 0.2)' }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}
