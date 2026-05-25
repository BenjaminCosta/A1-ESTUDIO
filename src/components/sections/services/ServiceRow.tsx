import type { Service } from "@/components/data/services";

type Props = {
  service: Service;
  index: number;
  onOpen: () => void;
};

export function ServiceRow({ service: s, index: i, onOpen }: Props) {
  return (
    <div
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      className={`rv d${Math.min(i, 4)} group relative cursor-pointer border-b border-paper/10 transition-colors duration-300 hover:bg-white/3`}
    >
      {/* Hover background image */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
        <img
          src={s.img}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover brightness-[0.22] saturate-[1.4] contrast-[1.1]"
        />
      </div>

      <div className="relative z-10 grid grid-cols-12 items-center gap-4 px-5 py-12 sm:px-6 md:gap-6 md:py-14 lg:px-8 xl:px-11 xl:py-20">
        {/* Number */}
        <div className="col-span-2 md:col-span-1">
          <span className="font-nav font-bold text-sm text-paper/20 group-hover:text-coral transition-colors duration-300 tracking-widest">
            {s.n}
          </span>
        </div>
        {/* Title */}
        <div className="col-span-10 md:col-span-7">
          <h3
            className="display text-paper leading-none"
            style={{ fontSize: "clamp(34px, 4.05vw, 78px)", letterSpacing: "-0.02em" }}
          >
            {s.name}
          </h3>
        </div>
        {/* Description */}
        <div className="col-span-12 md:col-span-4 md:pl-4">
          <p className="max-w-sm font-body text-[15px] leading-relaxed text-paper/40 transition-colors duration-300 group-hover:text-paper/70 md:text-base">
            {s.desc}
          </p>
        </div>
        {/* Open indicator — slides in from right on hover */}
        <div className="hidden md:flex absolute right-11 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-[opacity,transform] duration-300 items-center gap-2.5">
          <span className="font-nav text-[10px] font-bold uppercase tracking-[0.28em] text-coral">
            Ver
          </span>
          <div className="w-6 h-px bg-coral" />
          <div className="w-2 h-2 border-t border-r border-coral rotate-45 -ml-1" />
        </div>
      </div>
    </div>
  );
}
