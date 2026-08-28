import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { PROJECTS } from "../../data/portfolio";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm"
      onClick={onClose}
      data-testid="project-modal-overlay"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto border border-zinc-200 bg-white shadow-[0_30px_80px_rgb(0,0,0,0.18)]"
        data-testid="project-modal"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative h-56 overflow-hidden md:h-64">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/30" />
          <button
            data-testid="project-modal-close"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-4 top-4 border border-white/40 bg-ink/40 p-2 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-teal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-8 md:p-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-teal">
            PROJECT {project.index}
          </span>
          <h3 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
            {project.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="border border-zinc-200 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 text-base leading-relaxed text-zinc-600">{project.description}</p>
          {project.link && (
            <a
              data-testid="project-modal-live-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 border border-zinc-300 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-teal hover:text-teal"
            >
              Visit Live Site — alakhecgl.com
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          <h4 className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
            Key Work
          </h4>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-600">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-teal" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeader number="03" title="Featured Projects" id="projects" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.12}>
            <article
              data-testid={`project-card-${p.id}`}
              className="group border border-zinc-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-500 hover:shadow-[0_16px_50px_rgb(0,0,0,0.08)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 border border-white/30 bg-ink/50 px-3 py-1 font-mono text-[10px] tracking-[0.3em] text-white backdrop-blur-sm">
                  {p.index}
                </span>
                {p.link && (
                  <span className="absolute right-4 top-4 flex items-center gap-1.5 border border-white/30 bg-teal/80 px-3 py-1 font-mono text-[10px] tracking-[0.3em] text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    LIVE
                  </span>
                )}
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl leading-tight text-ink md:text-3xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{p.subtitle}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-zinc-200 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-6">
                  <button
                    data-testid={`project-view-btn-${p.id}`}
                    onClick={() => setActive(p)}
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-teal transition-colors duration-300 hover:text-teal-dark"
                  >
                    View Project
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  {p.link && (
                    <a
                      data-testid={`project-live-link-${p.id}`}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 transition-colors duration-300 hover:text-teal"
                    >
                      Visit Live Site
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};
