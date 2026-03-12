"use client"

import { motion } from "motion/react"
import { Bot, SearchCheck, Workflow } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const steps = [
  {
    number: "01",
    icon: SearchCheck,
    duration: "24-48 hs",
    title: "Leemos la operación",
    description: "Ubicamos fricción, cuellos de botella y el punto más rentable para intervenir.",
  },
  {
    number: "02",
    icon: Workflow,
    duration: "3-5 dias",
    title: "Definimos la base",
    description: "Ordenamos flujo, datos y automatizaciones sin inflar alcance.",
  },
  {
    number: "03",
    icon: Bot,
    duration: "1-2 semanas",
    title: "Implementamos y ajustamos",
    description: "Salimos con una herramienta usable y refinamos sobre uso real.",
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
            Proceso corto. Decisiones claras. Utilidad real.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Sin consultoría inflada ni rondas eternas de discovery.
          </p>
        </motion.div>

        <motion.div
          className="relative mt-14"
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

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative pl-16 md:pl-0"
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-viridian/30 bg-background text-viridian shadow-[0_0_0_6px_rgba(7,10,9,0.9)]">
                    <step.icon className="h-5 w-5" strokeWidth={2.1} />
                  </div>
                </div>

                <div className="md:pt-20">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-[0.24em] text-viridian">{step.number}</span>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
