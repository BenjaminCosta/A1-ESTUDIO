import heroDish from "@/assets/hero-dish.jpg";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function HeroSection() {
  const ref = useRevealOnScroll();

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      <img
        src={heroDish}
        alt="Editorial Gastronomy Hero"
        className="absolute inset-0 h-full w-full object-cover grayscale brightness-50"
        width={1920}
        height={1280}
      />

      <div className="relative z-10 px-6 md:px-11 pb-20 md:pb-24 text-white">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <h1
              className="display rv text-white mb-8"
              style={{
                fontSize: "clamp(72px, 12vw, 200px)",
                lineHeight: 0.8,
                letterSpacing: "-0.03em",
              }}
            >
              DIRECCIÓN
              <br />
              <span className="text-coral">GASTRO</span>
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-end gap-10">
              <p className="rv d1 font-nav text-2xl lg:text-3xl max-w-sm leading-[1.05] uppercase text-white/80">
                Desarrollo y dirección gastronómica para negocios que necesitan concepto, cocina y
                estructura operativa.
              </p>
              <a href="#services" className="rv d2 flex items-center gap-4 group shrink-0">
                <span className="font-nav font-bold text-sm uppercase tracking-widest text-white group-hover:text-coral transition-colors">
                  Explorar Servicios
                </span>
                <div className="h-px bg-white group-hover:bg-coral w-12 group-hover:w-20 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none select-none absolute right-8 md:right-11 top-1/2 -translate-y-1/2 font-display font-black uppercase text-white/[0.07] leading-none"
        style={{ fontSize: "10vw", writingMode: "vertical-rl" }}
      >
        EDITORIAL 2026
      </span>
    </section>
  );
}
