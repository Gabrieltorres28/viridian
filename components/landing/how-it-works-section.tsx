"use client"

import { motion } from "motion/react"
import { useIsMobile } from "@/hooks/use-mobile"

const steps = [
  {
    number: "01",
    title: "Leemos la operación",
    description: "Detectamos fricción, dependencia manual, decisiones críticas y qué parte conviene sistematizar primero.",
  },
  {
    number: "02",
    title: "Diseñamos el sistema correcto",
    description: "Definimos flujos, interfaz, estructura de datos, automatizaciones y puntos de control con criterio de producto.",
  },
  {
    number: "03",
    title: "Implementamos y ajustamos",
    description: "Construimos una base usable, probamos rápido y refinamos donde la utilidad real lo justifica.",
  },
]

export function HowItWorksSection() {
  const isMobile = useIsMobile()
  const viewport = isMobile
    ? { once: true, margin: "-20px", amount: 0.08 }
    : { once: false, margin: "-80px", amount: 0.22 }

  return (
    <section id="proceso" className="relative px-6 py-24 md:py-28">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: isMobile ? 0.18 : 0.24 }}
        >
          <p className="text-sm font-mono uppercase tracking-[0.22em] text-viridian">Proceso</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Un proceso corto, ejecutivo y orientado a utilidad real.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            El objetivo no es producir más pantallas. Es dejar una herramienta que ayude a operar mejor.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: isMobile ? 0.02 : 0.05,
                delayChildren: isMobile ? 0.02 : 0.05,
              },
            },
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono uppercase tracking-[0.2em] text-viridian">{step.number}</span>
                <span className="h-px w-10 bg-white/10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
