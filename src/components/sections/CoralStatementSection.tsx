import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function CoralStatementSection() {
  const ref = useRevealOnScroll();

  return (
    <section
      ref={ref}
      className="relative min-h-[58dvh] overflow-hidden bg-coral px-5 py-14 text-paper sm:px-6 md:min-h-[68dvh] lg:px-8 xl:min-h-[82dvh] xl:px-11 xl:py-20"
    >
      <div className="rv flex items-start justify-between gap-6 font-nav text-[10px] font-bold uppercase tracking-[0.5em] text-paper/72">
        <span>SECTION_01</span>
        <span>A1_ESTUDIO</span>
      </div>

      <div className="rv d1 absolute left-1/2 top-[45%] w-[calc(100%-2.5rem)] -translate-x-1/2 -translate-y-1/2 sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-5.5rem)]">
        <div
          className="text-mask mx-auto max-w-7xl font-display font-black uppercase leading-[0.76] tracking-[-0.055em] text-paper"
          style={{ fontSize: "clamp(46px, 11vw, 194px)" }}
        >
          <div className="text-mask-line whitespace-nowrap">
            <span>Pensamos</span>
          </div>
          <div className="text-mask-line whitespace-nowrap pl-[13vw] md:pl-[10vw]">
            <span className="outline-fill outline-fill-paper">Tu cocina</span>
          </div>
          <div className="text-mask-line whitespace-nowrap">
            <span>Como negocio</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-6 h-px w-28 bg-paper/35 md:right-11 md:w-36" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_45%_45%,rgba(255,255,255,0.12),transparent_58%)]" />
    </section>
  );
}
