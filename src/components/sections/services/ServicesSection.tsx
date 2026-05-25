import ingredients from "@/assets/bollo_masa_enharinada.webp";
import stamp from "@/assets/sello.webp";
import { type Service, services } from "@/components/data/services";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { useState } from "react";
import { ServiceModal } from "./ServiceModal";
import { ServiceRow } from "./ServiceRow";

export function ServicesSection() {
  const ref = useRevealOnScroll();
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section ref={ref} id="services" className="bg-ink text-paper">
      {/* Section header */}
      <div className="border-b border-paper/10 px-5 pb-14 pt-24 sm:px-6 md:pb-16 md:pt-28 lg:px-8 xl:px-11 xl:pb-20 xl:pt-36">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="rv font-nav text-[10px] tracking-[0.5em] uppercase text-paper/30 mb-5">
              — 06 Servicios
            </p>
            <h2
              className="display rv d1 text-mask text-paper"
              style={{ fontSize: "clamp(53px, 8.2vw, 140px)", letterSpacing: "-0.03em" }}
            >
              <span className="text-mask-line">
                <span>SERVICIOS</span>
              </span>
            </h2>
          </div>
          <span className="rv hidden md:block font-nav text-[10px] font-bold uppercase tracking-[0.34em] text-paper/25 text-right pb-3">
            Selected services
            <br />
            for kitchens with a plan
          </span>
        </div>
      </div>

      {/* Service rows */}
      <div>
        {services.map((s, i) => (
          <ServiceRow key={s.n} service={s} index={i} onOpen={() => setActiveService(s)} />
        ))}
      </div>

      {/* Modal */}
      {activeService && (
        <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      )}

      {/* Footer image slab */}
      <div className="relative h-[28vh] overflow-hidden md:h-[34vh] xl:h-[42vh]">
        <img
          src={ingredients}
          alt=""
          loading="lazy"
          className="parallax-img w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-b from-paper/40 via-paper/70 to-paper" />
        <img
          src={stamp}
          alt=""
          loading="lazy"
          className="pointer-events-none absolute right-[-16vw] top-1/2 w-80 -translate-y-1/2 select-none opacity-[0.06] md:right-[-8vw] md:w-[28rem] xl:right-[-2vw] xl:w-136"
        />
      </div>
    </section>
  );
}
