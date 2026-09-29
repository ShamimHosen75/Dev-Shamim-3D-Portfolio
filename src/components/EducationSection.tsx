import FadeIn from './FadeIn';
import { education } from '../data/portfolio';

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative z-20 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32 sm:pb-36 md:pb-44"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 sm:mb-20 md:mb-28 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-7xl gap-5 sm:gap-6 lg:grid-cols-3">
        {education.map((item, i) => (
          <FadeIn
            key={item.school}
            delay={i * 0.1}
            className="flex flex-col gap-4 rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA] p-6 sm:p-8 text-[#D7E2EA]"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-light uppercase tracking-widest opacity-60">{item.date}</span>
              <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                {item.grade}
              </span>
            </div>
            <h3 className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)' }}>
              {item.school}
            </h3>
            <span className="text-sm font-light opacity-80">{item.degree}</span>
            <span className="text-xs font-light uppercase tracking-widest opacity-50">{item.location}</span>
            <p className="text-sm font-light leading-relaxed opacity-70">{item.desc}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
