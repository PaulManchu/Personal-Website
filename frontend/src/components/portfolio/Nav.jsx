import { useState } from "react";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const go = (href) => {
    setOpen(false);
    lenis?.scrollTo(href, { offset: -72, duration: 1.4 });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/80 bg-paper/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <button
          data-testid="nav-logo"
          onClick={() => go("#home")}
          className="font-mono text-sm tracking-[0.25em] text-ink hover:text-teal transition-colors duration-300"
        >
          PM<span className="text-teal">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                onClick={() => go(l.href)}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 hover:text-ink transition-colors duration-300"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-zinc-200 bg-paper"
          >
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-zinc-100 last:border-0">
                <button
                  data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  onClick={() => go(l.href)}
                  className="w-full px-6 py-4 text-left font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 hover:text-teal transition-colors duration-300"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};
