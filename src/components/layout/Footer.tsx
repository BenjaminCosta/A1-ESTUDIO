const footerLinks = ["Instagram", "LinkedIn", "Contacto"] as const;

export function Footer() {
  return (
    <footer className="bg-ink border-t border-[#181816] px-6 md:px-11 py-7 flex flex-wrap items-center justify-between gap-4">
      <a href="#" className="font-display text-2xl font-extrabold tracking-[0.08em] text-paper">
        A1
      </a>
      <span className="font-nav text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2e2e2c]">
        © 2026 A1 Estudio de Cocina
      </span>
      <div className="flex gap-7">
        {footerLinks.map((l) => (
          <a
            key={l}
            href="#"
            className="font-nav text-[10px] font-semibold tracking-[0.2em] uppercase text-[#383836] hover:text-paper transition-colors"
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
