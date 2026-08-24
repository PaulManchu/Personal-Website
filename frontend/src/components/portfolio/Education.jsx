import { Reveal, SectionHeader } from "./Reveal";
import { DEVELOPING } from "../../data/portfolio";

export const Education = () => (
  <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
    <SectionHeader number="05" title="Education & Learning" id="education" />

    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <div data-testid="education-card" className="h-full border border-zinc-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:p-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-teal">FORMAL EDUCATION</span>
          <h3 className="mt-4 font-serif text-2xl leading-tight text-ink md:text-3xl">
            Diploma in Information Technology
          </h3>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Damelin College, Braamfontein
          </p>
          <p className="mt-2 font-mono text-xs tracking-[0.2em] text-zinc-400">2017 — 2020</p>
          <p className="mt-6 text-sm leading-relaxed text-zinc-600">
            A grounding in information technology fundamentals — systems, networks, software,
            and the discipline of structured problem-solving that still shapes how I approach
            every incident and deployment.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div data-testid="developing-card" className="h-full border border-zinc-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:p-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-teal">CURRENTLY DEVELOPING</span>
          <h3 className="mt-4 font-serif text-2xl leading-tight text-ink md:text-3xl">
            Continuous professional development
          </h3>
          <p className="mt-6 text-sm leading-relaxed text-zinc-600">
            Learning is part of the job description. These are the areas I'm actively building
            depth in right now, through structured study and hands-on lab work:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {DEVELOPING.map((d) => (
              <li
                key={d}
                className="flex items-center gap-3 border-b border-zinc-100 py-3 text-sm text-zinc-700"
              >
                <span className="h-1.5 w-1.5 rotate-45 bg-teal" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);
