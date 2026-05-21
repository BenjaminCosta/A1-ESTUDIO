import { method } from "@/components/data/method";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function MethodSection() {
  const ref = useRevealOnScroll();

  return (
    <section
      ref={ref}
      id="method"
      className="relative overflow-hidden bg-paper px-6 md:px-11 py-24 md:py-28"
    >
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -left-2 -top-8 font-display font-black uppercase text-ink/[0.028] leading-none tracking-[-0.07em]"
        style={{ fontSize: "220px" }}
      >
        Método
      </span>
      <p className="eye rv mb-5">Método de trabajo</p>
      <h2
        className="display rv d1 text-ink mb-16"
        style={{ fontSize: "clamp(64px, 11vw, 160px)" }}
      >
        Método
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {method.map((m, i) => (
          <div key={m.name} className={`rv d${i} border-t border-[#1e1e1c] pt-7 pr-8`}>
            <p className="font-nav text-[10px] font-bold tracking-[0.35em] uppercase text-coral mb-4">
              {m.n}
            </p>
            <h3
              className="display text-ink mb-3.5"
              style={{ fontSize: "32px", lineHeight: 0.86, letterSpacing: "0.03em" }}
            >
              {m.name}
            </h3>
            <p className="font-body text-[13px] leading-[1.65] text-[#4a4a48]">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
