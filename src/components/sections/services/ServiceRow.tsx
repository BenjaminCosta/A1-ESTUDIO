import type { Service } from "@/components/data/services";

type Props = {
  service: Service;
  index: number;
};

export function ServiceRow({ service: s, index: i }: Props) {
  return (
    <div className={`rv d${Math.min(i, 4)} group relative border-b border-paper/10 cursor-default`}>
      {/* Hover background image */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
        <img src={s.img} alt="" className="w-full h-full object-cover brightness-[0.18]" />
      </div>

      <div className="relative z-10 px-6 md:px-11 py-12 md:py-16 grid grid-cols-12 gap-6 items-center group-hover:pl-8 md:group-hover:pl-14 transition-all duration-500">
        {/* Number */}
        <div className="col-span-2 md:col-span-1">
          <span className="font-nav font-bold text-sm text-paper/20 group-hover:text-coral transition-colors duration-300 tracking-widest">
            {s.n}
          </span>
        </div>
        {/* Category */}
        <div className="hidden md:block col-span-2">
          <span className="font-nav text-[10px] uppercase tracking-[0.4em] text-paper/30 group-hover:text-paper/60 transition-colors">
            {s.cat}
          </span>
        </div>
        {/* Title */}
        <div className="col-span-8 md:col-span-5">
          <h3
            className="display text-paper leading-none"
            style={{ fontSize: "clamp(32px, 4.5vw, 80px)", letterSpacing: "-0.02em" }}
          >
            {s.name}
          </h3>
        </div>
        {/* Description */}
        <div className="col-span-12 md:col-span-4 md:pl-8">
          <p className="font-body text-sm text-paper/40 group-hover:text-paper/70 leading-relaxed transition-colors duration-500 max-w-sm">
            {s.desc}
          </p>
        </div>
        {/* Arrow indicator */}
        <div className="hidden md:flex absolute right-11 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 items-center">
          <div className="w-8 h-px bg-coral" />
          <div className="w-2 h-2 border-t border-r border-coral rotate-45 -ml-1" />
        </div>
      </div>
    </div>
  );
}
