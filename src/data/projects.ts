export type ProjectStatus = "EN PRODUCCIÓN" | "DEMO FUNCIONAL" | "GRABADO BREVE"
export type ProjectCategory =
  | "Educación"
  | "Gastronomía"
  | "Restaurante"
  | "Fitness"
  | "Municipal"
  | "Servicios"

export type Project = {
  id: string
  status: ProjectStatus
  category: ProjectCategory
  title: string
  subtitle: string
  bullets: string[]
  impactLine: string
  demoUrl?: string
  detailsUrl?: string
  whatsappText: string
  image?: string
  imageDisplay?: "cover" | "contain"
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "isipp",
    status: "EN PRODUCCIÓN",
    category: "Educación",
    title: "Portal de Inscripciones ISIPP",
    subtitle: "Inscripciones y consultas centralizadas con derivación automática.",
    bullets: [
      "Formularios guiados por carrera con validaciones",
      "Derivación automática al área correcta",
      "Panel interno para seguimiento y respuestas rápidas",
    ],
    impactLine: "Admisiones sin idas y vueltas; consultas trazables desde el día 1.",
    demoUrl: "https://isipp.com.ar",
    whatsappText: "Hola, quiero este sistema de inscripciones centralizadas como ISIPP.",
    image: "/isipp.png",
    featured: true,
  },
  {
    id: "menu-digital",
    status: "DEMO FUNCIONAL",
    category: "Gastronomía",
    title: "Menú Digital + Pedidos por WhatsApp",
    subtitle: "Carta autogestionable con pedidos unificados al mismo número.",
    bullets: [
      "Pedidos entran en un solo WhatsApp con datos completos",
      "Modo hora pico: estados visibles en cocina",
      "Combos, extras y disponibilidad en tiempo real",
    ],
    impactLine: "Reduce errores en hora pico y centraliza los pedidos sin apps externas.",
    demoUrl: "https://saas-menu-digital.vercel.app",
    whatsappText: "Hola, quiero el sistema de Menú Digital con pedidos por WhatsApp.",
    image: "/menu-saas.png",
    imageDisplay: "contain",
  },
  {
    id: "gymflow",
    status: "DEMO FUNCIONAL",
    category: "Fitness",
    title: "Sistema de Gestión para Gimnasios",
    subtitle: "Seguimiento de socios, pagos y asistencias con alertas.",
    bullets: [
      "Control de pagos, morosidad y vencimientos",
      "Alertas de asistencia para retener socios",
      "Autoservicio para altas, bajas y pases de día",
    ],
    impactLine: "Menos fugas de pagos y socios ordenados en un solo panel.",
    demoUrl: "https://gymflow-beta.vercel.app",
    whatsappText: "Hola, quiero la solución de gestión para gimnasios (GymFlow).",
    image: "/gestorgym.png",
    imageDisplay: "contain",
  },
  {
    id: "acapulco-burrito",
    status: "GRABADO BREVE",
    category: "Restaurante",
    title: "KDS + Pedidos para Cocina",
    subtitle: "Flujo de pedidos en tiempo real para equipos de cocina pequeños.",
    bullets: [
      "Tickets con estados y responsables visibles",
      "Alertas para demora y re-trabajos",
      "Visual ligero que se lee a distancia",
    ],
    impactLine: "Menos confusión en cocina y entregas más previsibles.",
    demoUrl: "https://acapulco-burrito.vercel.app",
    whatsappText: "Hola, quiero el flujo KDS para cocina que vieron en Acapulco Burrito.",
    image: "/acapulco-burrito.png",
  },
  {
    id: "gruastorres",
    status: "DEMO FUNCIONAL",
    category: "Servicios",
    title: "Captación de Leads B2B",
    subtitle: "Landing con priorización automática para equipos comerciales.",
    bullets: [
      "Formularios con datos críticos obligatorios",
      "Alertas instantáneas al equipo de ventas",
      "Pipeline simple para asignar y dar seguimiento",
    ],
    impactLine: "Leads completos desde el primer contacto y menor tiempo de respuesta.",
    demoUrl: "https://gruastorres-oficial.vercel.app",
    whatsappText: "Hola, quiero el sistema de captación y priorización de leads B2B.",
    image: "/gruastorres.png",
  },
  {
    id: "gestor-tramites",
    status: "DEMO FUNCIONAL",
    category: "Municipal",
    title: "Portal Municipal + Pagos + Chatbot IA",
    subtitle: "Landing institucional moderna con accesos a pagos, información pública y asistente para consultas frecuentes.",
    bullets: [
      "Integración con portales de pago y accesos rápidos",
      "Secciones institucionales adaptadas a uso ciudadano",
      "Chatbot con respuestas contextualizadas para consultas comunes",
    ],
    impactLine: "Más servicios visibles, menos fricción para el vecino y mejor presencia digital del municipio.",
    demoUrl: "https://municipalidad-elalcazar.vercel.app",
    whatsappText: "Hola, quiero una solución municipal como el portal con pagos y chatbot IA de El Alcázar.",
    image: "/elalcazar.png",
    imageDisplay: "contain",
  },
]
