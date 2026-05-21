import portrait from "@/assets/portrait-leandro.jpg";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function AboutSection() {
  const ref = useRevealOnScroll();

  return (
    <section ref={ref} id="about" className="grid md:grid-cols-2 min-h-[620px]">
      <div className="relative min-h-[500px] bg-gray-10">
        <img
          src={portrait}
          alt="Retrato de Leandro, director del estudio"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="bg-ink px-8 md:px-16 py-20 flex flex-col justify-center gap-5">
        <div className="rv flex items-center gap-4">
          <span className="block h-[1.5px] w-10 bg-coral shrink-0" />
          <span className="eye">Sobre el estudio</span>
        </div>
        <h2
          className="display rv d1 text-paper"
          style={{ fontSize: "clamp(56px, 7vw, 112px)", lineHeight: 0.84 }}
        >
          Leandro
        </h2>
        <p className="rv d2 font-nav text-xs font-bold tracking-[0.3em] uppercase text-gray-40">
          Chef · Director A1 Estudio
        </p>
        <p className="rv d3 font-body text-[15px] leading-[1.68] text-gray-60 max-w-[400px]">
          Con más de una década en la industria gastronómica, Leandro fundó A1 con un propósito
          claro: crear un estudio que trabaje en el fondo de los proyectos, no en la superficie.
        </p>
        <p className="rv d4 font-body text-[15px] leading-[1.68] text-gray-60 max-w-[400px]">
          A1 no abre restaurantes. Construye proyectos gastronómicos con sustancia, estructura y
          carácter propio.
        </p>
        <div className="rv d4 mt-2">
          <a href="#cta" className="btn btn-k">
            Hablemos →
          </a>
        </div>
      </div>
    </section>
  );
}
