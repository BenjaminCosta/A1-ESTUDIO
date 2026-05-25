import dough from "@/assets/bollo_masa_enharinada.webp";
import chefProcess from "@/assets/chef_mayor_blanco_negro_delantal.webp";
import mushrooms from "@/assets/hongos_frescos_closeup.webp";
import hands from "@/assets/manos_partiendo_focaccia_hierbas.webp";
import salmon from "@/assets/filetes_salmon_fresco_closeup.webp";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const visuals = [
  {
    src: hands,
    alt: "Manos partiendo focaccia con hierbas",
    className: "aspect-[1.12] md:aspect-[0.96]",
    imageClassName: "object-[48%_52%]",
  },
  {
    src: chefProcess,
    alt: "Cocinero trabajando con verduras en cocina",
    className: "col-span-3 aspect-[0.82] md:aspect-[0.76]",
    imageClassName: "object-[50%_38%]",
  },
  {
    src: dough,
    alt: "Bollo de masa sobre superficie enharinada",
    className: "col-span-3 aspect-[0.82] md:aspect-[0.76]",
    imageClassName: "object-[50%_55%]",
  },
  {
    src: mushrooms,
    alt: "Hongos frescos en primer plano",
    className: "col-span-2 aspect-[0.94] md:aspect-[1.05]",
    imageClassName: "object-[50%_48%]",
  },
  {
    src: salmon,
    alt: "Filetes de salmón fresco en detalle",
    className: "col-span-4 aspect-[1.62] md:aspect-[1.54]",
    imageClassName: "object-[50%_46%]",
  },
] as const;

type Visual = (typeof visuals)[number];

function VisualFrame({ visual, index }: { visual: Visual; index: number }) {
  return (
    <figure
      className={`rv d${Math.min(index + 1, 4)} group relative overflow-hidden bg-ink ${visual.className}`}
    >
      <img
        src={visual.src}
        alt={visual.alt}
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${visual.imageClassName}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black/28" />
    </figure>
  );
}

export function IngredientsStrip() {
  const ref = useRevealOnScroll();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-paper px-5 py-4 text-ink sm:px-6 lg:px-8 xl:px-11 xl:py-6"
    >
      <div className="relative grid gap-3 md:grid-cols-[1.12fr_0.88fr] md:items-stretch md:gap-4 xl:gap-5">
        <VisualFrame visual={visuals[0]} index={0} />
        <div className="grid grid-cols-6 gap-3 md:gap-4 xl:gap-5">
          {visuals.slice(1).map((visual, index) => (
            <VisualFrame key={visual.alt} visual={visual} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
