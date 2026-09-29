import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import profileImage from '../assets/profile.png';
import { bio } from '../data/portfolio';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      <FadeIn as="nav" delay={0} y={-20} className="px-6 md:px-10 pt-6 md:pt-8">
        <ul className="flex justify-between gap-3">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[11px] sm:text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wide sm:tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 sm:mt-4 md:-mt-5 w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m shamim
          </h1>
        </FadeIn>
      </div>

      <div className="mt-auto flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a web developer building high-quality websites that grow your business
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="relative z-20">
          <ContactButton />
        </FadeIn>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={profileImage}
              alt={bio.name}
              className="block h-auto w-full select-none rounded-t-full"
              style={{
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              }}
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
