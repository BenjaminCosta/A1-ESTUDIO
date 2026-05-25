import portrait from "@/assets/cocinero_gorra_trabajando_verduras.webp";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function AboutSection() {
  const ref = useRevealOnScroll();

  return (
    <section ref={ref} id="about" className="grid md:min-h-[720px] md:grid-cols-2 xl:min-h-215">
      <div className="group relative min-h-[430px] overflow-hidden bg-gray-10 sm:min-h-[520px] md:min-h-full">
        <img
          src={portrait}
          alt="Retrato de Leandro, director del estudio"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Warm editorial tint */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(160, 72, 28, 0.28)" }}
        />
        <div className="absolute bottom-6 left-6 right-6 font-nav text-[10px] font-bold uppercase tracking-[0.3em] text-white/55 md:bottom-8 md:left-8 md:right-8">
          <span>Field notes / Leandro</span>
        </div>
      </div>
      <div className="relative flex flex-col justify-center gap-5 bg-ink px-6 py-20 sm:px-8 md:px-10 md:py-24 lg:px-12 xl:gap-6 xl:px-16 xl:py-36">
        {/* Faint warm light source — top-left, like a soft overhead lamp */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 8% 8%, rgba(255,255,255,0.045) 0%, transparent 65%)",
          }}
        />
        <div className="rv flex items-center gap-4">
          <span className="block h-[1.5px] w-10 bg-coral shrink-0" />
          <span className="eye">Sobre el estudio</span>
        </div>
        <h2
          className="display rv d1 text-mask text-paper"
          style={{ fontSize: "clamp(58px, 7.2vw, 128px)", lineHeight: 0.84 }}
        >
          <span className="text-mask-line">
            <span>Leandro</span>
          </span>
        </h2>
        <p className="rv d2 font-nav text-xs font-bold tracking-[0.3em] uppercase text-gray-40">
          Chef · Director A1 Estudio
        </p>
        <p className="rv d3 font-body text-[17px] leading-[1.68] text-gray-60 max-w-100">
          Con más de una década en la industria gastronómica, Leandro fundó A1 con un propósito
          claro: crear un estudio que trabaje en el fondo de los proyectos, no en la superficie.
        </p>
        <p className="rv d4 font-body text-[17px] leading-[1.68] text-gray-60 max-w-100">
          A1 no abre restaurantes. Construye proyectos gastronómicos con sustancia, estructura y
          carácter propio.
        </p>
        <div className="rv d4 mt-2">
          <a href="#cta" className="btn btn-w">
            Hablemos →
          </a>
        </div>
      </div>
    </section>
  );
}
