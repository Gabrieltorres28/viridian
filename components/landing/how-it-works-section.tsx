"use client"

import { motion } from "motion/react"
import { Stethoscope, Rocket, RefreshCw } from "lucide-react"

const steps = [
  {
    icon: Stethoscope,
    number: "01",
    title: "Diagnóstico",
    time: "10 minutos",
    description:
      "Analizamos tu negocio, tus procesos actuales y detectamos dónde estás perdiendo tiempo y dinero.",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Implementación",
    time: "48 horas",
    description:
      "Diseñamos y desplegamos tu sistema personalizado, listo para usar con datos reales.",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Optimización continua",
    time: "Siempre",
    description:
      "Iteramos y mejoramos el sistema en base a tus necesidades reales y los datos que genera.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-viridian font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Proceso
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            {"Implementaci\u00f3n simple. "}
            <br className="hidden md:block" />
            Resultados inmediatos.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative mobile-float"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] right-[-calc(50%-40px)] w-full h-px bg-border" />
              )}

              <div className="text-center">
                <div className="relative mx-auto w-20 h-20 rounded-full border border-viridian/30 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-viridian" />
                  <span className="absolute -top-2 -right-2 text-xs font-mono text-viridian-glow bg-background border border-viridian/30 rounded-full w-7 h-7 flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-viridian font-mono text-sm mb-4">
                  {step.time}
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
