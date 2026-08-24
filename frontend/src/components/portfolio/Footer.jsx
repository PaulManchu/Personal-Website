export const Footer = () => (
  <footer className="border-t border-zinc-200 bg-white">
    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-8 md:flex-row md:items-center md:px-10">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
        © {new Date().getFullYear()} Paul Manchu
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
        IT Support Engineer — Systems &amp; Cloud Infrastructure
      </span>
    </div>
  </footer>
);
