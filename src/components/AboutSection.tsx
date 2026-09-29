import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import LiveProjectButton from './LiveProjectButton';
import { bio, experiences, projects } from '../data/portfolio';

const STATS = [
  { value: `${bio.yearsOfExperience}+`, label: 'Years experience' },
  { value: `${projects.length}+`, label: 'Projects shipped' },
  { value: `${experiences.length}`, label: 'Companies' },
];

const BASE = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';

const DECORATIONS = [
  {
    src: `${BASE}/moon_icon.11395d36.png`,
    className: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.1,
    x: -80,
  },
  {
    src: `${BASE}/p59_1.4659672e.png`,
    className: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',
    delay: 0.25,
    x: -80,
  },
  {
    src: `${BASE}/lego_icon-1.703bb594.png`,
    className: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.15,
    x: 80,
  },
  {
    src: `${BASE}/Group_134-1.2e04f3ce.png`,
    className: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',
    delay: 0.3,
    x: 80,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      {DECORATIONS.map((d) => (
        <FadeIn
          key={d.src}
          delay={d.delay}
          x={d.x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute ${d.className}`}
        >
          <img src={d.src} alt="" className="h-auto w-full" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p
              className="max-w-[720px] text-center font-light uppercase tracking-wide text-[#D7E2EA]/70"
              style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
            >
              {bio.headline}
            </p>
          </FadeIn>
          <AnimatedText
            text={bio.description}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>
        <div className="grid grid-cols-3 gap-6 sm:gap-12 md:gap-16">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} y={20} className="text-center">
              <div
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 96px)' }}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/70">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <ContactButton />
          <LiveProjectButton href={bio.resume} label="View Resume" />
        </div>
      </div>
    </section>
  );
}
