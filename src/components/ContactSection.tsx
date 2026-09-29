import { Clock, Facebook, Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import LiveProjectButton from './LiveProjectButton';
import { bio } from '../data/portfolio';

const DETAILS = [
  { icon: Mail, label: 'Email', value: bio.email, href: `mailto:${bio.email}` },
  { icon: MapPin, label: 'Location', value: bio.location },
  { icon: Clock, label: 'Available', value: bio.availability },
];

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: bio.github },
  { icon: Linkedin, label: 'LinkedIn', href: bio.linkedin },
  { icon: Facebook, label: 'Facebook', href: bio.facebook },
  { icon: Twitter, label: 'Twitter', href: bio.twitter },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-20 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
      style={{ background: '#FFFFFF' }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 sm:gap-14 text-center text-[#0C0C0C]">
        <FadeIn y={40}>
          <h2
            className="font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s talk
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} y={20}>
          <p className="max-w-xl font-light leading-relaxed opacity-70" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)' }}>
            Have a project in mind or want to work together? Send me a message and I&apos;ll get back to you.
          </p>
        </FadeIn>

        <div className="grid w-full gap-4 sm:grid-cols-3">
          {DETAILS.map(({ icon: Icon, label, value, href }, i) => (
            <FadeIn
              key={label}
              delay={i * 0.1}
              y={20}
              className="flex flex-col items-center gap-2 rounded-[28px] border px-4 py-6"
              style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
            >
              <Icon size={22} />
              <span className="text-xs font-light uppercase tracking-widest opacity-60">{label}</span>
              {href ? (
                <a href={href} className="break-all font-medium hover:underline">
                  {value}
                </a>
              ) : (
                <span className="font-medium">{value}</span>
              )}
            </FadeIn>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <ContactButton label="Email Me" />
          <div className="rounded-full bg-[#0C0C0C]">
            <LiveProjectButton href={bio.resume} label="View Resume" />
          </div>
        </div>

        <ul className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <Magnet padding={40} strength={4}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0C0C0C] text-[#D7E2EA] transition-transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              </Magnet>
            </li>
          ))}
        </ul>

        <footer
          className="w-full border-t pt-8 text-xs font-light uppercase tracking-widest opacity-60"
          style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
        >
          © {new Date().getFullYear()} {bio.name}. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
