export type ProjectStatus =
  | "En producción"
  | "Demo funcional"
  | "MVP operativo"
  | "Sistema activo"
  | "Caso grabado"

export type ProjectGroup =
  | "Operaciones"
  | "Atención y captación"
  | "Institucional y portales"

export type Project = {
  id: string
  title: string
  group: ProjectGroup
  status: ProjectStatus
  systemType: string
  summary: string
  solves: string
  outcomes: string[]
  impactLine: string
  demoUrl?: string
  whatsappText: string
  image?: string
  imageDisplay?: "cover" | "contain"
  featured?: boolean
  hideWhatsappCta?: boolean
}

export const projects: Project[] = [
  {
    id: "isipp",
    title: "ISIPP Admissions",
    group: "Institucional y portales",
    status: "En producción",
    systemType: "Portal institucional con admisiones y derivación interna",
    summary: "Sitio institucional y flujo de consultas centralizado para un instituto superior.",
    solves: "Evita consultas dispersas, formularios incompletos y derivaciones manuales entre áreas.",
    outcomes: [
      "Formularios guiados por carrera con validaciones claras",
      "Derivación automática al área correcta desde el primer contacto",
      "Base institucional más ordenada para responder y seguir cada ingreso",
    ],
    impactLine: "Más trazabilidad desde admisiones. Menos idas y vueltas operativas.",
    demoUrl: "https://isipp.com.ar",
    whatsappText: "Hola, quiero un portal institucional con admisiones y derivación automática como ISIPP.",
    image: "/isipp.png",
    featured: true,
  },
  {
    id: "gestor-tramites",
    title: "Portal Ciudadano El Alcázar",
    group: "Institucional y portales",
    status: "Sistema activo",
    systemType: "Portal municipal con pagos, accesos y asistencia digital",
    summary: "Experiencia institucional moderna para servicios, información pública y consultas frecuentes.",
    solves: "Reduce fricción en acceso a servicios y ordena la capa digital de atención al vecino.",
    outcomes: [
      "Accesos directos a pagos, trámites e información crítica",
      "Arquitectura institucional más clara para navegación pública",
      "Asistente digital para consultas repetidas de baja complejidad",
    ],
    impactLine: "Más servicio visible. Menos fricción para atención recurrente.",
    demoUrl: "https://municipalidad-elalcazar.vercel.app",
    whatsappText: "Hola, quiero un portal institucional con pagos y asistencia digital similar al de El Alcázar.",
    image: "/elalcazar.png",
    imageDisplay: "contain",
  },
  {
    id: "menu-digital",
    title: "Pedidos Centralizados",
    group: "Operaciones",
    status: "Demo funcional",
    systemType: "Menu digital con pedidos centralizados por WhatsApp",
    summary: "Carta autogestionable con un flujo único de pedidos y control básico de operación.",
    solves: "Evita pedidos fragmentados entre números, errores de toma y pérdida de contexto en hora pico.",
    outcomes: [
      "Pedidos entran completos en un solo canal",
      "Disponibilidad, extras y combos administrados desde el sistema",
      "Base lista para sumar cocina, estados y automatización",
    ],
    impactLine: "Menos ruido operativo cuando la demanda sube.",
    demoUrl: "https://saas-menu-digital.vercel.app",
    whatsappText: "Hola, quiero un sistema de pedidos centralizados por WhatsApp como este caso.",
    image: "/menu-saas.png",
    imageDisplay: "contain",
  },
  {
    id: "acapulco-burrito",
    title: "Kitchen Dispatch",
    group: "Operaciones",
    status: "Caso grabado",
    systemType: "Panel de cocina con estados y seguimiento de tickets",
    summary: "Vista operativa para cocina con estados claros y lectura rápida a distancia.",
    solves: "Reduce tickets perdidos, retrabajo y confusión en equipos chicos con alta rotación de pedidos.",
    outcomes: [
      "Estados visibles por pedido y por responsable",
      "Flujo más claro para priorizar sin depender de memoria",
      "Menos retrabajo por relectura o coordinación informal",
    ],
    impactLine: "Más control en cocina sin agregar complejidad innecesaria.",
    demoUrl: "https://acapulco-burrito.vercel.app",
    whatsappText: "Hola, quiero un panel de cocina con estados como Kitchen Dispatch.",
    image: "/acapulco-burrito.png",
  },
  {
    id: "gruastorres",
    title: "Lead Intake B2B",
    group: "Atención y captación",
    status: "MVP operativo",
    systemType: "Captación guiada con priorización y respuesta comercial",
    summary: "Landing orientada a leads B2B con intake más útil para equipos comerciales.",
    solves: "Filtra consultas pobres, mejora la calidad del primer contacto y reduce seguimiento desordenado.",
    outcomes: [
      "Formularios con datos críticos desde el primer envío",
      "Alertas de ingreso para acelerar respuesta",
      "Base simple para asignación y seguimiento posterior",
    ],
    impactLine: "Mejor entrada comercial y menos tiempo perdido calificando mal.",
    demoUrl: "https://gruastorres-oficial.vercel.app",
    whatsappText: "Hola, quiero un sistema de captación guiada y priorización comercial como Lead Intake B2B.",
    image: "/gruastorres.png",
  },
  {
    id: "viridian-ops-ai",
    title: "Viridian Ops AI",
    group: "Atención y captación",
    status: "Demo funcional",
    systemType: "Diagnóstico asistido para detectar fricciones y oportunidades",
    summary: "Interfaz conversacional para relevar procesos y detectar puntos claros de automatización.",
    solves: "Convierte una explicación informal del negocio en un mapa inicial de mejoras concretas.",
    outcomes: [
      "Relevamiento guiado sin reuniones eternas",
      "Hallazgos sobre tareas repetitivas y cuellos de botella",
      "Punto de partida más sólido para definir un sistema útil",
    ],
    impactLine: "Menos intuición suelta. Más criterio para decidir qué construir.",
    demoUrl: "https://viridian-ai-three.vercel.app",
    whatsappText: "Hola, quiero una herramienta conversacional para relevar operaciones y detectar automatizaciones.",
    image: "/viridian-ia.png",
    imageDisplay: "contain",
    hideWhatsappCta: true,
  },
]
