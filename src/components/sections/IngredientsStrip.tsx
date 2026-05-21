import ingredients from "@/assets/ingredients.jpg";

export function IngredientsStrip() {
  return (
    <section className="relative bg-paper">
      <img
        src={ingredients}
        alt="Composición editorial de hierbas, cítricos y especias"
        loading="lazy"
        className="w-full h-[42vh] md:h-[58vh] object-cover"
      />
    </section>
  );
}
