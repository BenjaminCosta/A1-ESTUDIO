import imgAperturas from "@/assets/pizza_artesanal_morron_hierbas_caja.webp";
import imgNegocios from "@/assets/costillas_cordero_crudas_bandeja.webp";
import imgDireccion from "@/assets/cocinero_gorra_trabajando_verduras.webp";
import imgAuditoria from "@/assets/filetes_salmon_fresco_closeup.webp";
import imgCapacitaciones from "@/assets/cocinero_gorra_observando_hierbas.webp";
import imgEventos from "@/assets/chica_comiendo_pizza_gorro_amarillo.webp";

export type ServiceTab = {
  label: string;
  items: string[];
};

export type ServiceBlock = {
  heading: string;
  items: string[];
};

export type ServiceModalContent =
  | { layout: "tabbed"; intro: string; tabs: ServiceTab[] }
  | { layout: "simple"; intro: string; blocks: ServiceBlock[]; forWhom: string };

export type Service = {
  n: string;
  cat: string;
  name: string;
  desc: string;
  img: string;
  modal: ServiceModalContent;
};

export const services: Service[] = [
  {
    n: "01",
    cat: "Estrategia",
    name: "Aperturas",
    desc: "Desarrollo integral de nuevos conceptos. Desde la ingeniería de menú hasta el diseño de estaciones y el primer servicio.",
    img: imgAperturas,
    modal: {
      layout: "tabbed",
      intro:
        "Construimos el concepto gastronómico desde cero hasta el primer servicio. No solo abrimos restaurantes — definimos proyectos con identidad, estructura y viabilidad real.",
      tabs: [
        {
          label: "Concepto",
          items: [
            "Ingeniería de menú desde cero con análisis de viabilidad",
            "Identidad gastronómica, naming culinario y propuesta de valor",
            "Diseño de carta y estructura de oferta por segmento",
            "Pricing estratégico con control de food cost desde el origen",
          ],
        },
        {
          label: "Implementación",
          items: [
            "Diseño de estaciones y flujo operativo de cocina",
            "Mise en place y fichas técnicas de cada preparación",
            "Formación inicial del equipo de cocina y sala",
            "Pruebas de servicio previas a la apertura real",
          ],
        },
        {
          label: "Dirección de apertura",
          items: [
            "Supervisión del primer servicio en tiempo real",
            "Ajuste operativo inmediato post-apertura",
            "Documentación de procesos para replicabilidad",
            "Acompañamiento durante las primeras semanas de operación",
          ],
        },
      ],
    },
  },
  {
    n: "02",
    cat: "Análisis",
    name: "Negocios",
    desc: "Reestructuración de modelos existentes. Optimizamos procesos y revisamos costes para máxima rentabilidad.",
    img: imgNegocios,
    modal: {
      layout: "tabbed",
      intro:
        "Intervenimos negocios gastronómicos que necesitan corrección de rumbo. El formato depende de la urgencia y profundidad del problema.",
      tabs: [
        {
          label: "Puntual",
          items: [
            "Diagnóstico integral del modelo de negocio actual",
            "Informe de optimización con KPIs específicos y medibles",
            "Plan de mejora con hoja de ruta ejecutable por etapas",
            "Sesión de cierre con dirección y entregables concretos",
          ],
        },
        {
          label: "A demanda",
          items: [
            "Intervención rápida ante crisis operativa o caída de márgenes",
            "Revisión de costos, estructura y puntos de fuga",
            "Detección del problema con análisis en contexto real",
            "Entregables de acción en 48–72 horas desde el diagnóstico",
          ],
        },
        {
          label: "Mensual",
          items: [
            "Acompañamiento continuo con revisiones mes a mes",
            "Control de P&L, food cost y estructura de gastos",
            "Actualización estratégica de carta y oferta por temporada",
            "Reuniones de seguimiento semanales o quincenales",
          ],
        },
      ],
    },
  },
  {
    n: "03",
    cat: "Acompañamiento",
    name: "Dirección Externa",
    desc: "Supervisión técnica continua. Auditoría de calidad y actualización estratégica de cartas por temporada.",
    img: imgDireccion,
    modal: {
      layout: "simple",
      intro:
        "La figura del director gastronómico sin la estructura de un empleado interno. Presencia técnica continua con visión estratégica.",
      blocks: [
        {
          heading: "Qué incluye",
          items: [
            "Supervisión técnica periódica de cocina y operación",
            "Auditoría de calidad en cocina y sala con informe mensual",
            "Actualización estratégica de carta por temporada",
            "Gestión y formación continua del equipo de cocina",
            "Análisis de rentabilidad y control de food cost",
          ],
        },
      ],
      forWhom:
        "Restaurantes con operación consolidada que necesitan dirección técnica continua sin una figura interna full-time. Proyectos que quieren crecer sin perder identidad.",
    },
  },
  {
    n: "04",
    cat: "Control",
    name: "Auditoría",
    desc: "Evaluación exhaustiva de operaciones y detección de fugas de capital en la cadena de suministros.",
    img: imgAuditoria,
    modal: {
      layout: "simple",
      intro:
        "Un diagnóstico sin filtros. Entramos, analizamos la operación completa y te decimos exactamente dónde está el problema.",
      blocks: [
        {
          heading: "Qué incluye",
          items: [
            "Evaluación exhaustiva de operaciones de cocina y sala",
            "Análisis de food cost real vs. food cost teórico",
            "Detección de fugas de capital en la cadena de suministro",
            "Revisión de procesos, turnos y estructura de equipo",
            "Informe ejecutivo con plan de corrección priorizado",
          ],
        },
      ],
      forWhom:
        "Negocios que sienten que algo no funciona pero no identifican exactamente dónde. Operaciones con márgenes que no cuadran o con problemas recurrentes sin solución aparente.",
    },
  },
  {
    n: "05",
    cat: "Formación",
    name: "Capacitaciones",
    desc: "Formación técnica avanzada para equipos de cocina y sala. Implementación de manuales operativos.",
    img: imgCapacitaciones,
    modal: {
      layout: "simple",
      intro:
        "Formación diseñada para el contexto real de cada cocina. No cursos genéricos — entrenamiento técnico aplicado a tu operación y a tu equipo.",
      blocks: [
        {
          heading: "Qué incluye",
          items: [
            "Formación técnica avanzada para equipos de cocina",
            "Entrenamiento de sala en comunicación y venta de carta",
            "Desarrollo e implementación de manuales operativos",
            "Simulaciones de servicio y evaluación de rendimiento",
            "Seguimiento post-formación con métricas concretas",
          ],
        },
      ],
      forWhom:
        "Equipos nuevos en proceso de apertura, equipos existentes que necesitan actualización técnica, o proyectos que buscan estandarizar su operación para escalar.",
    },
  },
  {
    n: "06",
    cat: "Diseño",
    name: "Eventos",
    desc: "Diseño y producción gastronómica de alto impacto para marcas y eventos corporativos de lujo.",
    img: imgEventos,
    modal: {
      layout: "simple",
      intro:
        "Experiencias gastronómicas con identidad editorial. Desde la conceptualización hasta la ejecución en tiempo real — con la precisión de un estudio, no de un catering.",
      blocks: [
        {
          heading: "Qué incluye",
          items: [
            "Conceptualización y diseño del menú del evento",
            "Coordinación técnica de producción y mise en place",
            "Supervisión in-situ durante todo el servicio",
            "Gestión de proveedores y logística culinaria",
            "Documentación y memoria del evento para la marca",
          ],
        },
      ],
      forWhom:
        "Empresas, marcas de lujo o particulares que buscan experiencias gastronómicas con identidad propia, precisión de ejecución y narrativa de marca coherente.",
    },
  },
];
