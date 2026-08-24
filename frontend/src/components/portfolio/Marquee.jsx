const WORDS = [
  "Cloud Infrastructure",
  "Systems Administration",
  "Active Directory",
  "Microsoft 365",
  "Networking",
  "IT Support",
  "PowerShell",
  "Azure",
];

export const Marquee = () => {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-zinc-200 bg-white py-5" aria-hidden="true">
      <div className="marquee-track flex w-max items-center">
        {row.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-serif text-lg italic text-zinc-500 md:text-xl">{w}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-teal/60" />
          </span>
        ))}
      </div>
    </div>
  );
};
