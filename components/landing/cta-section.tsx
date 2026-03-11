"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative py-32 px-6">
      {/* Viridian glow accent */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--viridian-glow) 0%, transparent 50%)",
        }}
      />

      <motion.div
        className="relative max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
          Diseñemos una base digital más seria para tu operación
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
          Revisamos tus procesos, detectamos dónde conviene sistematizar, automatizar o aplicar inteligencia, y te mostramos una propuesta concreta.
        </p>
        <ul className="text-left text-muted-foreground max-w-xl mx-auto space-y-2 mb-10">
          <li className="flex items-start gap-2">
            <span className="text-viridian">•</span>
            <span>Diagnóstico claro de tus procesos y puntos críticos.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-viridian">•</span>
            <span>Propuesta de sistema, automatización o producto operativo según tu caso.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-viridian">•</span>
            <span>Implementación con criterio, evolución y soporte si lo necesitás.</span>
          </li>
        </ul>

        <a
          href="https://wa.me/543751471708?text=Hola%20quiero%20una%20demo%20con%20mi%20caso&source=landing&utm_source=landing&utm_medium=cta_final"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-foreground font-medium text-lg px-10 py-4 rounded-lg transition-all hover:shadow-[0_0_40px_rgba(78,218,158,0.35)] mobile-float"
          style={{
            background:
              "linear-gradient(135deg, rgba(78,218,158,0.95) 0%, rgba(47,143,102,0.92) 50%, rgba(23,77,58,0.9) 100%)",
          }}
        >
          Solicitar demo
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Decorative line */}
        <div className="mt-20 mx-auto w-24 h-px bg-viridian/30" />
      </motion.div>
    </section>
  )
}
