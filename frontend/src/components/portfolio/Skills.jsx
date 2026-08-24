import { Reveal, SectionHeader } from "./Reveal";
import { SKILLS } from "../../data/portfolio";

export const Skills = () => (
  <section className="border-y border-zinc-200 bg-white">
    <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeader number="02" title="Technical Skills" id="skills" />

      <div className="grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((cat, i) => (
          <Reveal key={cat.category} delay={i * 0.08} className="bg-white">
            <div data-testid={`skill-category-${i}`} className="group h-full p-8 transition-colors duration-500 hover:bg-paper">
              <span className="font-mono text-[10px] tracking-[0.3em] text-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-xl leading-tight text-ink">{cat.category}</h3>
              <ul className="mt-6 space-y-2.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-zinc-100 pb-2.5 text-sm text-zinc-600 last:border-0 transition-colors duration-300 group-hover:text-zinc-700"
                  >
                    {item}
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
