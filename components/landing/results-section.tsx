"use client"

import { motion } from "motion/react"
import { useIsMobile } from "@/hooks/use-mobile"

const benefitCards = [
  {
    title: "Información y estados en un solo lugar",
    description: "Consultas, responsables, validaciones e historial dejan de quedar repartidos entre chat, planillas y memoria.",
  },
  {
    title: "Menos tareas manuales repetitivas",
    description: "El sistema absorbe pasos previsibles para que el equipo no pierda tiempo copiando, reenviando o persiguiendo datos.",
  },
  {
    title: "Más seguimiento y trazabilidad",
    description: "Cada proceso gana contexto, responsables y puntos de control para depender menos de personas puntuales.",
  },
]

const painPoints = [
  "Información dispersa entre WhatsApp, Excel y mensajes sueltos.",
  "Consultas repetidas que consumen tiempo operativo todos los días.",
  "Procesos que dependen de memoria, voluntad y seguimiento manual.",
  "Poca visibilidad sobre estados, errores y cuellos de botella.",
]

const solutionTypes = [
  "Sistemas internos para operaciones, seguimiento y control.",
  "Portales para atención, ingresos, trámites y autoservicio.",
  "Automatizaciones que eliminan tareas repetitivas y pasos manuales.",
]

export function ResultsSection() {
  const isMobile = useIsMobile()
  const viewport = isMobile
    ? { once: true, margin: "-20px", amount: 0.08 }
    : { once: false, margin: "-80px", amount: 0.22 }

  return (
    <section id="soluciones" className="relative px-4 py-10 sm:px-6 sm:py-16 md:py-22">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-start"
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
              className="mt-3 text-[1.68rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[2.2rem] md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.2 : 0.24, delay: isMobile ? 0 : 0.03 }}
            >
              Qué resolvemos cuando la operación ya se volvió demasiado manual.
            </motion.h2>
            <motion.p
              className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.2 : 0.22, delay: isMobile ? 0.02 : 0.05 }}
            >
              No vendemos software abstracto. Intervenimos cuando hay fricción real, seguimiento débil y demasiadas
              cosas importantes pasando fuera del sistema.
            </motion.p>

            <motion.ul
              className="mt-4 space-y-2"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
              }}
            >
              {painPoints.map((item) => (
                <motion.li
                  key={item}
                  className="rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5 text-sm leading-5 text-muted-foreground"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.16 : 0.22 } },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="grid gap-2.5">
            <motion.div
              className="grid gap-2.5 md:grid-cols-3"
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
                  className="rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,20,19,0.96)_0%,rgba(12,14,13,0.96)_100%)] p-3.5 md:rounded-[24px] md:p-5"
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
                  <p className="mt-1.5 text-sm leading-5 text-muted-foreground md:leading-6">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="rounded-[22px] border border-viridian/16 bg-[linear-gradient(180deg,rgba(13,17,15,0.98)_0%,rgba(9,11,10,0.98)_100%)] p-3.5 sm:p-5 md:p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.18 : 0.22, delay: isMobile ? 0.02 : 0.08 }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-viridian">Qué tipo de solución baja esa fricción</p>
              <div className="mt-3.5 grid gap-2.5 md:grid-cols-3">
                {solutionTypes.map((item) => (
                  <div key={item} className="rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-3">
                    <p className="text-sm leading-5 text-muted-foreground md:leading-6">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
