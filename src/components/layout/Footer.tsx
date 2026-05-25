const footerLinks = ["Instagram", "LinkedIn", "Contacto"] as const;

export function Footer() {
  return (
    <footer className="border-t border-paper/5 bg-ink px-5 py-12 sm:px-6 lg:px-8 xl:px-11 xl:py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <a href="#" className="font-display text-2xl font-extrabold tracking-[0.08em] text-paper">
          A1
        </a>
        <span className="font-nav text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-40/40">
          © A1_ESTUDIO / Food direction / Buenos Aires
        </span>
        <div className="flex flex-wrap gap-5 xl:gap-7">
          {footerLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="nav-link font-nav text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-40/60 hover:text-paper transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
