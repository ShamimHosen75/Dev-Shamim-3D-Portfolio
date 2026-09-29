import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';
import { Github } from 'lucide-react';
import LiveProjectButton from './LiveProjectButton';
import { projects, type Project } from '../data/portfolio';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 flex h-[85vh] items-start justify-center">
      <motion.article
        className={`relative w-full origin-top border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 ${RADIUS}`}
        style={{ background: '#0C0C0C', scale, top: `${index * 28}px` }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <div className="md:w-[58%]">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className={`w-full object-cover object-top ${RADIUS}`}
              style={{ height: 'clamp(200px, 38vw, 480px)' }}
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 px-2 sm:px-4 md:w-[42%] md:px-0 md:py-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 8vw, 120px)' }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA] opacity-60">
                  {project.category} · {project.date}
                </span>
                <h3
                  className="font-medium uppercase leading-tight text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)' }}
                >
                  {project.title}
                </h3>
              </div>
            </div>

            <p className="line-clamp-4 text-sm sm:text-base font-light leading-relaxed text-[#D7E2EA] opacity-70">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[#D7E2EA]/20 px-3 py-1 text-xs font-light text-[#D7E2EA]/80"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center gap-3">
              {project.liveLink && <LiveProjectButton href={project.liveLink} />}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA] hover:text-[#0C0C0C]"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 sm:mb-20 md:mb-28 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-7xl">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
