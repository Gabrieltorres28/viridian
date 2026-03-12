"use client"

import { motion } from "motion/react"
import { Bot, SearchCheck, Workflow } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const steps = [
  {
    number: "01",
    icon: SearchCheck,
    duration: "24-48 hs",
    title: "Relevamos la operación",
    description: "Vemos dónde se pierde tiempo, qué depende de personas y qué hoy no tiene trazabilidad.",
  },
  {
    number: "02",
    icon: Workflow,
    duration: "3-5 días",
    title: "Definimos el sistema base",
    description: "Aterrizamos flujo, roles, estados y automatizaciones sin inflar alcance ni vender consultoría vacía.",
  },
  {
    number: "03",
    icon: Bot,
    duration: "1-2 semanas",
    title: "Implementamos y ajustamos",
    description: "Salimos con una herramienta usable, medimos cómo responde la operación y corregimos sobre uso real.",
  },
]

export function HowItWorksSection() {
  const isMobile = useIsMobile()
  const viewport = isMobile
    ? { once: true, margin: "-20px", amount: 0.08 }
    : { once: false, margin: "-80px", amount: 0.22 }

  return (
    <section id="proceso" className="relative px-4 py-10 sm:px-6 sm:py-18 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: isMobile ? 0.18 : 0.24 }}
        >
          <p className="text-sm font-mono uppercase tracking-[0.22em] text-viridian">Proceso</p>
          <h2 className="mt-3 text-[1.68rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[2.3rem] md:text-5xl">
            Proceso corto, ejecución concreta y foco en utilidad real.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:text-lg">
            No hacemos discovery eterno. Ordenamos el problema, definimos la base y salimos con una herramienta que se
            pueda usar.
          </p>
        </motion.div>

        <motion.div
          className="relative mt-8 sm:mt-12"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: isMobile ? 0.03 : 0.08,
                delayChildren: isMobile ? 0.03 : 0.08,
              },
            },
          }}
        >
          <div className="absolute left-[23px] top-6 bottom-6 w-px bg-white/10 md:left-0 md:right-0 md:top-[35px] md:bottom-auto md:h-px md:w-auto">
            <div className="h-full w-full bg-[linear-gradient(180deg,rgba(13,148,136,0)_0%,rgba(13,148,136,0.75)_18%,rgba(13,148,136,0.75)_82%,rgba(13,148,136,0)_100%)] md:bg-[linear-gradient(90deg,rgba(13,148,136,0)_0%,rgba(13,148,136,0.75)_18%,rgba(13,148,136,0.75)_82%,rgba(13,148,136,0)_100%)]" />
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative pl-14 md:pl-0"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: isMobile ? 0.18 : 0.24, delay: isMobile ? 0 : index * 0.02 },
                  },
                }}
              >
                <div className="absolute left-0 top-0 md:relative md:left-auto md:top-auto">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-viridian/30 bg-background text-viridian shadow-[0_0_0_5px_rgba(7,10,9,0.9)] md:h-12 md:w-12 md:shadow-[0_0_0_6px_rgba(7,10,9,0.9)]">
                    <step.icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2.1} />
                  </div>
                </div>

                <div className="md:pt-20">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-[0.24em] text-viridian">{step.number}</span>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground md:text-xl">{step.title}</h3>
                  <p className="mt-2.5 max-w-sm text-sm leading-5 text-muted-foreground md:leading-6">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
