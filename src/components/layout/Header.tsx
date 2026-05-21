import { useScrolledHeader } from "@/hooks/useScrolledHeader";

const navLinks = [
  ["Servicios", "#services"],
  ["Método", "#method"],
  ["Estudio", "#about"],
  ["Contacto", "#cta"],
] as const;

export function Header() {
  const scrolled = useScrolledHeader();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "px-6 md:px-11 py-3.5 bg-ink/95 backdrop-blur-md" : "px-6 md:px-11 py-5"
      }`}
    >
      <a
        href="#"
        className="font-display text-3xl font-extrabold tracking-[0.08em] text-paper leading-none"
      >
        A1
      </a>
      <nav className="hidden md:flex gap-9">
        {navLinks.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="font-nav text-[11px] font-bold tracking-[0.28em] uppercase text-paper/55 hover:text-paper transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
