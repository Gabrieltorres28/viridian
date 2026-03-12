"use client"

import { motion } from "motion/react"
import { useIsMobile } from "@/hooks/use-mobile"

const benefitCards = [
  {
    title: "La operación deja de correr por chat",
    description: "Estados, responsables y pasos quedan dentro del sistema.",
  },
  {
    title: "Las decisiones tienen contexto",
    description: "Datos, historial y validaciones aparecen donde hacen falta.",
  },
  {
    title: "El equipo gana capacidad real",
    description: "Menos tareas repetitivas. Más tiempo para ejecutar mejor.",
  },
]

export function ResultsSection() {
  const isMobile = useIsMobile()
  const viewport = isMobile
    ? { once: true, margin: "-20px", amount: 0.08 }
    : { once: false, margin: "-80px", amount: 0.22 }

  return (
    <section id="soluciones" className="relative px-6 py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
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
              Enfoque
            </motion.p>
            <motion.h2
              className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.2 : 0.24, delay: isMobile ? 0 : 0.03 }}
            >
              Base propia para operar mejor.
            </motion.h2>
            <motion.p
              className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.2 : 0.22, delay: isMobile ? 0.02 : 0.05 }}
            >
              Después de ver demos, esto es lo que cambia en la operación.
            </motion.p>
          </div>

          <motion.div
            className="grid gap-3 md:grid-cols-3"
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
            {benefitCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,20,19,0.96)_0%,rgba(12,14,13,0.96)_100%)] p-4 md:rounded-[24px] md:p-6"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: isMobile ? 0.18 : 0.22, delay: isMobile ? 0 : index * 0.01 },
                  },
                }}
              >
                <p className="text-base font-semibold tracking-tight text-foreground md:text-lg">{card.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
