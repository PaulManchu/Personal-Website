import { Reveal, SectionHeader } from "./Reveal";
import { EXPERIENCE } from "../../data/portfolio";

export const Experience = () => (
  <section className="border-y border-zinc-200 bg-white">
    <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeader number="04" title="Professional Experience" id="experience" />

      <div className="relative ml-2 border-l border-zinc-200 pl-8 md:ml-6 md:pl-14">
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1} className="relative pb-16 last:pb-0">
            <span
              className="absolute -left-[38px] top-2 h-3 w-3 rotate-45 border-2 border-teal bg-white md:-left-[62px]"
              aria-hidden="true"
            />
            <div data-testid={`experience-item-${i}`}>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal">
                {job.period}
              </span>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-ink md:text-3xl">
                {job.role}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                {job.company}
              </p>
              <ul className="mt-6 max-w-2xl space-y-3">
                {job.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-zinc-600">
                    <span className="mt-[8px] h-px w-5 shrink-0 bg-zinc-300" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
