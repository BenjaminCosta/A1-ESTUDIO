import heroDish from "@/assets/hero-dish.jpg";
import portrait from "@/assets/portrait-leandro.jpg";
import ingredients from "@/assets/ingredients.jpg";

export type Service = {
  n: string;
  cat: string;
  name: string;
  desc: string;
  img: string;
};

export const services: Service[] = [
  {
    n: "01",
    cat: "Estrategia",
    name: "Aperturas",
    desc: "Desarrollo integral de nuevos conceptos. Desde la ingeniería de menú hasta el diseño de estaciones y el primer servicio.",
    img: heroDish,
  },
  {
    n: "02",
    cat: "Análisis",
    name: "Negocios",
    desc: "Reestructuración de modelos existentes. Optimizamos procesos y revisamos costes para máxima rentabilidad.",
    img: ingredients,
  },
  {
    n: "03",
    cat: "Acompañamiento",
    name: "Dirección Externa",
    desc: "Supervisión técnica continua. Auditoría de calidad y actualización estratégica de cartas por temporada.",
    img: portrait,
  },
  {
    n: "04",
    cat: "Control",
    name: "Auditoría",
    desc: "Evaluación exhaustiva de operaciones y detección de fugas de capital en la cadena de suministros.",
    img: heroDish,
  },
  {
    n: "05",
    cat: "Formación",
    name: "Capacitaciones",
    desc: "Formación técnica avanzada para equipos de cocina y sala. Implementación de manuales operativos.",
    img: ingredients,
  },
  {
    n: "06",
    cat: "Diseño",
    name: "Eventos",
    desc: "Diseño y producción gastronómica de alto impacto para marcas y eventos corporativos de lujo.",
    img: portrait,
  },
];
