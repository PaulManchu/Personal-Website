import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowRight, Download } from "lucide-react";
import { RESUME_URL } from "../../data/portfolio";

const Line = ({ children, delay }) => (
  <span className="block overflow-hidden">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, 70]);
  const bgY = useTransform(scrollY, [0, 700], [0, -50]);

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -right-40 top-24 hidden lg:block font-serif text-[26rem] leading-none text-zinc-200/60 select-none"
        aria-hidden="true"
      >
        PM
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-16 md:px-10 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-24">
        <div className="lg:col-span-7 relative z-10">
          <Line delay={0.15}>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-teal">
              Portfolio — Johannesburg, South Africa
            </span>
          </Line>

          <h1 className="mt-8 font-serif tracking-tight leading-[0.95] text-ink text-6xl sm:text-7xl lg:text-8xl">
            <Line delay={0.3}>Paul</Line>
            <Line delay={0.42}>
              <em className="not-italic lg:italic lg:font-medium">Manchu</em>
            </Line>
          </h1>

          <div className="mt-8">
            <Line delay={0.58}>
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-600">
                IT Support Engineer&nbsp;&nbsp;|&nbsp;&nbsp;Systems &amp; Cloud Infrastructure
              </span>
            </Line>
          </div>

          <div className="mt-6 font-serif text-xl md:text-2xl text-zinc-700">
            <Line delay={0.72}>Supporting technology. Building infrastructure.</Line>
            <Line delay={0.84}>
              <span className="italic text-teal">Continuously learning.</span>
            </Line>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-base leading-relaxed text-zinc-600"
          >
            IT Support Engineer with hands-on experience supporting Microsoft environments,
            Windows Server infrastructure, Active Directory, Microsoft 365, networking, and
            cloud technologies. Passionate about troubleshooting complex systems, building
            practical infrastructure environments, and continuously expanding technical expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-view-work-btn"
              onClick={() => lenis?.scrollTo("#projects", { offset: -72, duration: 1.4 })}
              className="group inline-flex items-center gap-2 bg-teal px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-teal-dark"
            >
              View My Work
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              data-testid="hero-resume-btn"
              href={RESUME_URL}
              download="Paul Manchu Resume.pdf"
              className="group inline-flex items-center gap-2 border border-zinc-300 bg-white px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-teal hover:text-teal"
            >
              Download Resume
              <Download size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-sm lg:max-w-none"
          >
            <div className="absolute -left-4 -top-4 h-full w-full border border-teal/30" aria-hidden="true" />
            <div className="relative border border-zinc-200 bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <motion.div style={{ y: imgY }} className="overflow-hidden">
                <img
                  data-testid="hero-portrait"
                  src="/photo-b.jpg"
                  alt="Paul Manchu — IT Support Engineer"
                  className="aspect-[4/5] w-full object-cover"
                />
              </motion.div>
              <div className="flex items-center justify-between px-1 pb-1 pt-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Paul Manchu
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
                  Est. 2022
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
