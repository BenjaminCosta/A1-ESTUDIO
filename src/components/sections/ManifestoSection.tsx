import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function ManifestoSection() {
  const ref = useRevealOnScroll();

  return (
    <section
      ref={ref}
      id="manifesto"
      className="relative overflow-hidden bg-paper px-6 md:px-11 py-24 md:py-28 grid gap-12 md:gap-20 md:grid-cols-[1.1fr_1fr] items-center"
    >
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -right-5 -bottom-16 font-display font-black uppercase text-white/[0.025] leading-none tracking-[-0.07em]"
        style={{ fontSize: "260px" }}
      >
        A1
      </span>
      <div className="relative">
        <p className="eye rv mb-7">Manifiesto A1</p>
        <h2
          className="display rv d1 text-ink"
          style={{ fontSize: "clamp(38px, 4.5vw, 70px)", lineHeight: 0.84 }}
        >
          No somos
          <br />
          un restaurante.
          <br />
          Somos el estudio
          <br />
          <em className="not-italic text-coral">detrás.</em>
        </h2>
        <div className="rv d2 h-0.5 w-12 bg-coral mt-9" />
      </div>
      <div className="rv d1 font-body text-base leading-[1.68] text-gray-40 space-y-4 relative">
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
