import { useScrolledHeader } from "@/hooks/useScrolledHeader";
import logoHeader from "@/assets/logo-header.webp";

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
        scrolled
          ? "px-5 py-3 bg-ink/97 sm:px-6 lg:px-8 xl:px-11 xl:py-3.5"
          : "px-5 py-4 sm:px-6 lg:px-8 xl:px-11 xl:py-5"
      }`}
    >
      <a
        href="#"
        className="block h-10 w-[60px] overflow-hidden xl:h-11 xl:w-[66px]"
        aria-label="A1 Estudio de Cocina"
      >
        <img
          src={logoHeader}
          alt="A1 Estudio de Cocina"
          className="h-full w-auto"
          width={756}
          height={1024}
        />
      </a>
      <nav className="hidden gap-6 md:flex xl:gap-9">
        {navLinks.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="nav-link font-nav text-xs font-bold uppercase tracking-[0.24em] text-paper/55 transition-colors duration-200 hover:text-paper xl:tracking-[0.28em]"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
