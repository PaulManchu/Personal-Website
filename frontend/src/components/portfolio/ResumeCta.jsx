import { Download } from "lucide-react";
import { Reveal } from "./Reveal";
import { RESUME_URL } from "../../data/portfolio";

export const ResumeCta = () => (
  <section className="border-y border-zinc-200 bg-ink text-paper">
    <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <span className="font-mono text-[10px] tracking-[0.3em] text-teal" style={{ color: "#5eead4" }}>
            [ 06 ] — RESUME
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Want the Full <em className="italic">Picture?</em>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400">
            Download my resume for a detailed overview of my technical experience, skills,
            projects, and professional background.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            data-testid="resume-section-download-btn"
            href={RESUME_URL}
            download="Paul Manchu Resume.pdf"
            className="group inline-flex items-center gap-3 border border-teal bg-teal px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-transparent hover:text-teal"
            style={{ borderColor: "#0F766E" }}
          >
            Download Resume (PDF)
            <Download size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);
