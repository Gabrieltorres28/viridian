"use client"

import { motion } from "motion/react"
import { useIsMobile } from "@/hooks/use-mobile"

const proofPoints = [
  {
    label: "Señal de credibilidad",
    title: "Sistemas activos y demos funcionales",
    description: "La prueba está en productos que ya se pueden recorrer, no en promesas abstractas.",
  },
  {
    label: "Beneficio operativo",
    title: "Menos dependencia de memoria y chat disperso",
    description: "Estados, responsables y pasos quedan dentro del sistema en lugar de circular entre mensajes sueltos.",
  },
  {
    label: "Beneficio de gestión",
    title: "Más visibilidad para decidir con criterio",
    description: "Trazabilidad, contexto y puntos de control para ejecutar mejor y detectar fricción antes.",
  },
]

export function ProblemSection() {
  const isMobile = useIsMobile()
  const viewport = isMobile
    ? { once: true, margin: "-20px", amount: 0.08 }
    : { once: false, margin: "-90px", amount: 0.22 }

  return (
    <section className="relative px-6 py-24 md:py-28">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="grid gap-8 rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(15,17,16,0.98)_0%,rgba(10,11,11,0.98)_100%)] p-7 md:p-10 lg:grid-cols-[0.9fr_1.1fr]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: isMobile ? 0.22 : 0.28 }}
        >
          <div className="max-w-xl">
            <motion.p
              className="text-sm font-mono uppercase tracking-[0.22em] text-viridian"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.16 : 0.18 }}
            >
              Manifiesto breve
            </motion.p>
            <motion.h2
              className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.18 : 0.22, delay: isMobile ? 0 : 0.03 }}
            >
              No construimos software para decorar procesos. Diseñamos sistemas para operarlos mejor.
            </motion.h2>
            <motion.p
              className="mt-5 text-base leading-7 text-muted-foreground md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.18 : 0.22, delay: isMobile ? 0.02 : 0.05 }}
            >
              Viridian Core funciona mejor cuando hay una operación real que necesita orden, criterio técnico y una
              base digital capaz de sostener crecimiento sin sumar complejidad vacía.
            </motion.p>
          </div>

          <motion.div
            className="grid gap-4 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: isMobile ? 0.02 : 0.05,
                  delayChildren: isMobile ? 0.02 : 0.06,
                },
              },
            }}
          >
            {proofPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="rounded-[24px] border border-white/8 bg-white/[0.025] p-5"
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: isMobile ? 0.18 : 0.22, delay: isMobile ? 0 : index * 0.01 },
                  },
                }}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-viridian">{point.label}</p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-foreground">{point.title}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
