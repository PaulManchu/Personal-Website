import { Reveal, SectionHeader } from "./Reveal";

export const About = () => (
  <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
    <SectionHeader number="01" title="About Me" id="about" />

    <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7 space-y-6">
        <Reveal>
          <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">
            A practical engineer who enjoys the space between support and infrastructure —
            where systems either work, or someone has to find out why they don't.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-zinc-600">
            I'm an IT Support Engineer with over three years of experience supporting Microsoft
            Windows environments, Microsoft 365, Active Directory, and enterprise IT
            infrastructure. My day-to-day work spans user support, identity administration,
            server maintenance, and the kind of troubleshooting that starts with
            "something is down" and ends with a documented root cause.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="text-base leading-relaxed text-zinc-600">
            Beyond support, I build. Through a self-built enterprise lab in Microsoft Azure,
            I've deployed and administered Windows Server 2022, Azure Virtual Machines,
            Active Directory Domain Services, Group Policy, WSUS, DNS, DHCP, and file
            services — treating the lab with the same operational discipline as a production
            environment.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <p className="text-base leading-relaxed text-zinc-600">
            I'm drawn to systems administration, cloud infrastructure, and automation, and I
            invest steadily in expanding that expertise. The goal is simple: reliable systems,
            calm incident handling, and infrastructure that is documented well enough for the
            next person to understand.
          </p>
        </Reveal>
      </div>

      <div className="lg:col-span-5">
        <Reveal delay={0.15} className="relative">
          <div className="absolute -right-4 -bottom-4 h-full w-full border border-zinc-300" aria-hidden="true" />
          <div className="relative border border-zinc-200 bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
            <div className="overflow-hidden">
              <img
                data-testid="about-portrait"
                src="/photo-a.jpg"
                alt="Paul Manchu"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
            <p className="px-1 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Off the clock — still curious
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
