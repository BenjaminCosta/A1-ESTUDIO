import { method } from "@/components/data/method";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function MethodSection() {
  const ref = useRevealOnScroll();

  return (
    <section
      ref={ref}
      id="method"
      className="relative overflow-hidden bg-paper px-5 py-24 sm:px-6 md:pb-36 md:pt-28 lg:px-8 xl:px-11 xl:pb-52 xl:pt-36"
    >
      <div className="mb-10 xl:mb-12">
        <span
          aria-hidden
          className="pointer-events-none select-none block font-display font-black uppercase text-ink/6 leading-[0.72] tracking-[-0.07em]"
          style={{ fontSize: "clamp(88px, 15.5vw, 220px)" }}
        >
          Método
        </span>
        <h2
          className="display rv d1 text-mask -mt-3 text-ink md:-mt-5"
          style={{ fontSize: "clamp(67px, 11vw, 176px)" }}
        >
          <span className="text-mask-line">
            <span>Método</span>
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-ink/10">
        {method.map((m, i) => (
          // Outer .rv wrapper — owns the reveal animation (no transition override)
          <div
            key={m.name}
            className={`rv d${i} border-b border-ink/10 md:border-b-0 md:border-r md:last:border-r-0`}
          >
            {/* Inner card — owns hover color, no rv conflict */}
            <div className="group relative flex min-h-[330px] cursor-default flex-col overflow-hidden bg-paper px-6 pb-8 pt-8 transition-colors duration-500 hover:bg-coral md:min-h-[390px] md:px-7 md:pb-9 md:pt-9 xl:min-h-[442px] xl:px-8 xl:pb-10 xl:pt-10">
              {/* Big watermark number */}
              <span
                aria-hidden
                className="font-display font-black leading-none select-none pointer-events-none text-ink/[0.07] group-hover:text-white/10 transition-colors duration-500"
                style={{ fontSize: "clamp(80px, 7vw, 108px)" }}
              >
                {m.n.split(" /")[0]}
              </span>

              {/* Content — pushed to bottom */}
              <div className="mt-auto pt-8">
                <p className="font-nav text-[10px] font-bold tracking-[0.35em] uppercase text-coral group-hover:text-white/60 transition-colors duration-300 mb-5">
                  {m.n}
                </p>
                <h3
                  className="display text-ink group-hover:text-white transition-colors duration-300 mb-4"
                  style={{
                    fontSize: "clamp(37px, 3vw, 58px)",
                    lineHeight: 0.86,
                    letterSpacing: "0.02em",
                  }}
                >
                  {m.name}
                </h3>
                <p className="font-body text-[15px] leading-[1.65] text-gray-60 transition-colors duration-300 group-hover:text-white/70">
                  {m.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
