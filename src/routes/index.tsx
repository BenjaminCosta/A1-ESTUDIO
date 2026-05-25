import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoralStatementSection } from "@/components/sections/CoralStatementSection";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IngredientsStrip } from "@/components/sections/IngredientsStrip";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ServicesSection } from "@/components/sections/services/ServicesSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A1 Estudio de Cocina — Desarrollo y Dirección Gastronómica" },
      {
        name: "description",
        content:
          "Estudio de desarrollo y dirección gastronómica. Concepto, cocina y operación para proyectos con identidad.",
      },
      { property: "og:title", content: "A1 Estudio de Cocina" },
      {
        property: "og:description",
        content: "Desarrollo y dirección gastronómica para proyectos con carácter.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-paper text-ink">
      <Header />
      <HeroSection />
      <CoralStatementSection />
      <ManifestoSection />
      <IngredientsStrip />
      <ServicesSection />
      <MethodSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}
