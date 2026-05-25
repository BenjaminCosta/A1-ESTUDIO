import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function ManifestoSection() {
  const ref = useRevealOnScroll();

  return (
    <section
      ref={ref}
      id="manifesto"
      className="relative grid items-center gap-12 overflow-hidden bg-paper px-5 py-28 sm:px-6 md:grid-cols-[1.1fr_1fr] md:gap-14 lg:px-8 lg:py-36 xl:gap-20 xl:px-11 xl:py-52"
    >
      {/* Warm window light — top-right corner, almost imperceptible */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 100% 0%, rgba(255,232,170,0.78) 0%, transparent 60%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-5 select-none font-display font-black uppercase leading-none tracking-[-0.07em] text-ink/5 md:-bottom-16"
        style={{ fontSize: "clamp(150px, 16vw, 260px)" }}
      >
        A1
      </span>
      <div className="relative">
        <p className="eye rv mb-7">Manifiesto A1</p>
        <h2
          className="display rv d1 text-mask text-ink"
          style={{ fontSize: "clamp(41px, 4.8vw, 80px)", lineHeight: 0.84 }}
        >
          <span className="text-mask-line">
            <span>No somos</span>
          </span>
          <span className="text-mask-line">
            <span>un restaurante.</span>
          </span>
          <span className="text-mask-line">
            <span>Somos el estudio</span>
          </span>
          <span className="text-mask-line">
            <span>
              <em className="not-italic text-coral">detrás.</em>
            </span>
          </span>
        </h2>
        <div className="rv d2 h-0.5 w-12 bg-coral mt-9" />
      </div>
      <div className="rv d1 relative max-w-[58ch] space-y-4 font-body text-[17px] leading-[1.68] text-gray-40 md:text-lg">
        <p className="mb-7 font-nav text-[10px] font-bold uppercase tracking-[0.34em] text-ink/28">
          Back of house strategy
        </p>
        <p>
          A1 es un estudio especializado en desarrollo y dirección gastronómica. Trabajamos con
          proyectos que necesitan ir más allá de la cocina: concepto, estructura, identidad y
          operación.
        </p>
        <p>
          Cada proyecto es un proceso de construcción, no una consultoría estándar. Entramos,
          diagnosticamos y ejecutamos con precisión.
        </p>
      </div>
    </section>
  );
}
