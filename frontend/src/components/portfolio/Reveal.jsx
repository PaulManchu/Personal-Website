import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 24 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeader = ({ number, title, id }) => (
  <Reveal className="mb-14 md:mb-20">
    <div id={id} className="flex items-baseline gap-4 md:gap-6">
      <span className="font-mono text-xs tracking-[0.25em] text-teal">[ {number} ]</span>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none text-ink">
        {title}
      </h2>
    </div>
    <div className="mt-6 h-px w-full bg-zinc-200" />
  </Reveal>
);
