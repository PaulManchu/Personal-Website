import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { CONTACT } from "../../data/portfolio";

const LINKS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    testid: "contact-email-link",
  },
  {
    label: "LinkedIn",
    value: "mocoana-paul-manchu",
    href: CONTACT.linkedin,
    icon: Linkedin,
    testid: "contact-linkedin-link",
  },
  {
    label: "GitHub",
    value: "PaulManchu",
    href: CONTACT.github,
    icon: Github,
    testid: "contact-github-link",
  },
];

export const Contact = () => (
  <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
    <SectionHeader number="07" title="Let's Connect." id="contact" />

    <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
      <Reveal className="lg:col-span-5">
        <p className="text-base leading-relaxed text-zinc-600">
          Interested in working together or discussing an opportunity? Feel free to connect.
        </p>
        <div className="mt-8 space-y-4">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            <Phone size={14} className="text-teal" /> {CONTACT.phone}
          </p>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            <MapPin size={14} className="text-teal" /> {CONTACT.location}
          </p>
        </div>
      </Reveal>

      <div className="lg:col-span-7">
        {LINKS.map((l, i) => {
          const Icon = l.icon;
          return (
            <Reveal key={l.label} delay={i * 0.08}>
              <a
                data-testid={l.testid}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-zinc-200 py-6 transition-colors duration-300 hover:border-teal"
              >
                <span className="flex items-center gap-4">
                  <Icon size={18} className="text-zinc-400 transition-colors duration-300 group-hover:text-teal" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                    {l.label}
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="font-serif text-xl text-ink transition-colors duration-300 group-hover:text-teal md:text-2xl">
                    {l.value}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal"
                  />
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
