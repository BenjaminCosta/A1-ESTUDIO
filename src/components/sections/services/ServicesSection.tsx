import ingredients from "@/assets/ingredients.jpg";
import { services } from "@/components/data/services";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ServiceRow } from "./ServiceRow";

export function ServicesSection() {
  const ref = useRevealOnScroll();

  return (
    <section ref={ref} id="services" className="bg-ink text-paper">
      {/* Section header */}
      <div className="px-6 md:px-11 pt-28 pb-16 border-b border-paper/10">
        <div className="flex items-end justify-between">
          <div>
            <p className="rv font-nav text-[10px] tracking-[0.5em] uppercase text-paper/30 mb-5">
              — 06 Servicios
            </p>
            <h2
              className="display rv d1 text-paper"
              style={{ fontSize: "clamp(48px, 8vw, 128px)", letterSpacing: "-0.03em" }}
            >
              SERVICIOS
            </h2>
          </div>
          <span className="rv hidden md:block font-nav text-[10px] uppercase tracking-[0.4em] text-paper/20 text-right pb-3">
            Soluciones estratégicas
            <br />
            gastronomía 2024—26
          </span>
        </div>
      </div>

      {/* Service rows */}
      <div>
        {services.map((s, i) => (
          <ServiceRow key={s.n} service={s} index={i} />
        ))}
      </div>

      {/* Footer image slab */}
      <div className="relative overflow-hidden" style={{ height: "60vh" }}>
        <img
          src={ingredients}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-paper/70 to-paper" />
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-11 pb-12">
          <div
            className="font-display font-black text-ink/[0.05] uppercase leading-none select-none pointer-events-none"
            style={{ fontSize: "18vw", letterSpacing: "-0.04em" }}
          >
            A1
          </div>
        </div>
      </div>
    </section>
  );
}
