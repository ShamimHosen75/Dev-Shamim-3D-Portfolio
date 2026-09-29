import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/portfolio';

const IMAGES = projects.map((p) => p.image);
const HALF = Math.ceil(IMAGES.length / 2);

const ROW_ONE = [...IMAGES.slice(0, HALF), ...IMAGES.slice(0, HALF), ...IMAGES.slice(0, HALF)];
const ROW_TWO = [...IMAGES.slice(HALF), ...IMAGES.slice(HALF), ...IMAGES.slice(HALF)];

function Row({ images, transform }: { images: string[]; transform: string }) {
  return (
    <div className="flex w-max gap-3" style={{ transform, willChange: 'transform' }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="h-[270px] w-[420px] flex-shrink-0 rounded-2xl object-cover object-top"
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center gap-3 overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ background: '#0C0C0C' }}
    >
      <Row images={ROW_ONE} transform={`translateX(${offset - 200}px)`} />
      <Row images={ROW_TWO} transform={`translateX(${-(offset - 200)}px)`} />
    </section>
  );
}
