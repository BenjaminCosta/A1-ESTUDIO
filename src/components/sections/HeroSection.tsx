import heroDish from "@/assets/chica_comiendo_pizza_gorro_amarillo.webp";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function HeroSection() {
  const ref = useRevealOnScroll();

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <img
        src={heroDish}
        alt="Editorial Gastronomy Hero"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
      />

      {/* Dark base overlay — no CSS filter, just a composited div */}
      <div className="absolute inset-0 bg-black/52 pointer-events-none" />
      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 px-5 pb-20 text-white sm:px-6 md:pb-24 lg:px-8 xl:px-11 xl:pb-32">
        <div className="rv d1 mb-8 flex max-w-4xl flex-wrap gap-x-8 gap-y-3 font-nav text-[10px] font-bold uppercase tracking-[0.34em] text-white/42">
          <span>FOOD DIRECTION / BUENOS AIRES</span>
          <span>ESTUDIO A1</span>
        </div>
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <h1
              className="display rv text-mask text-white mb-8"
              style={{
                fontSize: "clamp(70px, 12.2vw, 216px)",
                lineHeight: 0.8,
                letterSpacing: "-0.03em",
              }}
            >
              <span className="text-mask-line">
                <span className="outline-fill outline-fill-paper">DIRECCIÓN</span>
              </span>
              <span className="text-mask-line">
                <span className="text-coral">GASTRO</span>
              </span>
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-end gap-10">
              <p className="rv d1 font-nav text-[23px] leading-[1.05] uppercase text-white/80 sm:text-[28px] lg:max-w-sm xl:text-[34px]">
                Desarrollo y dirección gastronómica para negocios que necesitan concepto, cocina y
                estructura operativa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 select-none font-display font-black uppercase leading-none text-white/[0.07] md:block lg:right-8 xl:right-11"
        style={{ fontSize: "10vw", writingMode: "vertical-rl" }}
      >
        CONCEPTO 2026
      </span>
    </section>
  );
}
