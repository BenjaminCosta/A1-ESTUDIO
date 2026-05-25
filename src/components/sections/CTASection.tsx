import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function CTASection() {
  const ref = useRevealOnScroll();

  return (
    <section ref={ref} id="cta" className="relative overflow-hidden bg-coral text-white">
      {/* Radial vignette — spotlight in the center, darker at edges */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(0,0,0,0.22) 100%)",
        }}
      />
      {/* Giant A1 background watermark */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 flex items-center justify-center opacity-10 select-none pointer-events-none"
      >
        <span
          className="font-display font-bold uppercase leading-none"
          style={{ fontSize: "40vw" }}
        >
          A1
        </span>
      </div>

      <div className="relative z-10 px-5 py-28 sm:px-6 md:py-32 lg:px-8 xl:px-11 xl:py-48">
        <div className="rv d1 mb-10 font-nav text-[10px] font-bold uppercase tracking-[0.34em] text-white/55 xl:mb-12">
          <span>Project intake / openings & rebuilds</span>
        </div>
        <div className="grid grid-cols-12 gap-6 items-end">
          {/* Left: heading + contact rows */}
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="display rv text-mask mb-12 text-white md:mb-16 xl:mb-20"
              style={{
                fontSize: "clamp(76px, 12.4vw, 240px)",
                lineHeight: 0.8,
                letterSpacing: "-0.03em",
              }}
            >
              <span className="text-mask-line">
                <span className="outline-fill outline-fill-paper">HABLE</span>
              </span>
              <span className="text-mask-line">
                <span className="outline-fill outline-fill-paper">MOS</span>
              </span>
            </h2>
            <div className="rv d1 grid grid-cols-1 gap-10 md:grid-cols-2 xl:gap-16">
              <div className="space-y-3">
                <span className="font-nav text-xs tracking-[0.5em] uppercase text-white/60 block">
                  Email
                </span>
                <a
                  href="mailto:hola@a1estudio.com"
                  className="block border-b-2 border-transparent font-nav text-xl uppercase tracking-widest transition-[border-color] duration-200 hover:border-white sm:text-2xl xl:text-3xl"
                >
                  hola@a1estudio.com
                </a>
              </div>
              <div className="space-y-3">
                <span className="font-nav text-xs tracking-[0.5em] uppercase text-white/60 block">
                  Teléfono
                </span>
                <a
                  href="tel:+34600000000"
                  className="block border-b-2 border-transparent font-nav text-xl uppercase tracking-widest transition-[border-color] duration-200 hover:border-white sm:text-2xl xl:text-3xl"
                >
                  +34 600 000 000
                </a>
              </div>
            </div>
          </div>

          {/* Right: location + WhatsApp */}
          <div className="rv d2 col-span-12 mt-16 lg:col-span-4 lg:mt-0 lg:text-right">
            <p className="font-display font-bold text-2xl leading-none uppercase mb-12">
              Madrid / Barcelona / Bs As
            </p>
            <a
              href="#"
              className="inline-block border-2 border-white px-7 py-4 font-display text-sm font-bold uppercase tracking-widest transition-[background-color,color,transform] duration-300 hover:bg-white hover:text-coral active:scale-[0.97] sm:px-10 sm:py-5"
            >
              WhatsApp Business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
