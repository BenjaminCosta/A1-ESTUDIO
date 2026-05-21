import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function CTASection() {
  const ref = useRevealOnScroll();

  return (
    <section ref={ref} id="cta" className="relative overflow-hidden bg-coral text-white">
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

      <div className="relative z-10 px-6 md:px-11 py-28 md:py-32">
        <div className="grid grid-cols-12 gap-6 items-end">
          {/* Left: heading + contact rows */}
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="display rv text-white mb-16 md:mb-20"
              style={{
                fontSize: "clamp(80px, 12vw, 220px)",
                lineHeight: 0.8,
                letterSpacing: "-0.03em",
              }}
            >
              HABLE
              <br />
              MOS
            </h2>
            <div className="rv d1 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="space-y-3">
                <span className="font-nav text-xs tracking-[0.5em] uppercase text-white/60 block">
                  Email
                </span>
                <a
                  href="mailto:hola@a1estudio.com"
                  className="font-nav text-2xl lg:text-3xl uppercase tracking-widest block border-b-2 border-transparent hover:border-white transition-all"
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
                  className="font-nav text-2xl lg:text-3xl uppercase tracking-widest block border-b-2 border-transparent hover:border-white transition-all"
                >
                  +34 600 000 000
                </a>
              </div>
            </div>
          </div>

          {/* Right: location + WhatsApp */}
          <div className="rv d2 col-span-12 lg:col-span-4 lg:text-right mt-20 lg:mt-0">
            <p className="font-display font-bold text-2xl leading-none uppercase mb-12">
              Madrid / Barcelona / Bs As
            </p>
            <a
              href="#"
              className="inline-block border-2 border-white px-10 py-5 font-display font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-coral transition-all"
            >
              WhatsApp Business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
