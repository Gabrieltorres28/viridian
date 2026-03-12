"use client"

import { motion } from "motion/react"
import { useIsMobile } from "@/hooks/use-mobile"

const offerCards = [
  {
    title: "Sistemas internos",
    description: "Paneles, flujos y herramientas para ordenar tareas, estados, responsables y decisiones críticas.",
  },
  {
    title: "Automatización aplicada",
    description: "Recordatorios, validaciones y pasos automáticos donde hoy el equipo pierde tiempo operativo.",
  },
  {
    title: "Portales y experiencias",
    description: "Capas digitales para atención, captación o servicios con una lógica útil detrás, no solo una buena cara.",
  },
  {
    title: "Herramientas inteligentes",
    description: "IA integrada con criterio para relevar, asistir o acelerar procesos concretos sin agregar humo.",
  },
]

const benefits = [
  "Menos seguimiento manual",
  "Menos puntos ciegos",
  "Más trazabilidad real",
  "Más capacidad de ejecución",
]

export function ResultsSection() {
  const isMobile = useIsMobile()
  const viewport = isMobile
    ? { once: true, margin: "-20px", amount: 0.08 }
    : { once: false, margin: "-80px", amount: 0.22 }

  return (
    <section id="soluciones" className="relative px-6 py-24 md:py-28">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: isMobile ? 0.24 : 0.32 }}
        >
          <div className="max-w-xl">
            <motion.p
              className="text-sm font-mono uppercase tracking-[0.22em] text-viridian"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.18 : 0.2 }}
            >
              Oferta principal
            </motion.p>
            <motion.h2
              className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.2 : 0.24, delay: isMobile ? 0 : 0.03 }}
            >
              Una oferta clara: construir sistemas que vuelvan la operación más ejecutable.
            </motion.h2>
            <motion.p
              className="mt-5 text-base leading-7 text-muted-foreground md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.2 : 0.22, delay: isMobile ? 0.02 : 0.05 }}
            >
              No vendemos horas sueltas ni un catálogo de piezas. Diseñamos la capa digital que ordena procesos,
              reduce fricción y habilita una mejora operativa sostenida.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: isMobile ? 0.02 : 0.04,
                    delayChildren: isMobile ? 0.02 : 0.08,
                  },
                },
              }}
            >
              {benefits.map((item) => (
                <motion.span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-foreground"
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.16 : 0.18 } },
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="grid gap-4 md:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: isMobile ? 0.03 : 0.05,
                  delayChildren: isMobile ? 0.02 : 0.06,
                },
              },
            }}
          >
            {offerCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,20,19,0.96)_0%,rgba(12,14,13,0.96)_100%)] p-6"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: isMobile ? 0.18 : 0.22, delay: isMobile ? 0 : index * 0.01 },
                  },
                }}
              >
                <p className="text-lg font-semibold tracking-tight text-foreground">{card.title}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
