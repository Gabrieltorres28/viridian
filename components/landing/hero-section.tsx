"use client"

import { motion } from "motion/react"
import { ArrowRight, MessageCircle } from "lucide-react"

const validationLine = ["Casos reales", "demos funcionales", "sistemas en producción"]

const quickProof = [
  {
    label: "Para quién",
    value: "Negocios e instituciones con operación real, tareas repetitivas y seguimiento débil.",
  },
  {
    label: "Qué construimos",
    value: "Sistemas internos, portales y automatizaciones para ordenar procesos concretos.",
  },
  {
    label: "Qué cambia",
    value: "Menos tiempo perdido, menos errores y más trazabilidad para decidir y ejecutar.",
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-20 sm:px-6 sm:pb-14 sm:pt-28 md:pb-20 md:pt-34 lg:pt-36">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(78,218,158,0.12) 0%, rgba(78,218,158,0.03) 25%, transparent 52%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.06) 0%, transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0) 30%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(180deg, black 0%, rgba(0,0,0,0.3) 72%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(300px,0.98fr)] lg:items-center lg:gap-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="max-w-3xl">
            <motion.div
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-viridian sm:px-4 sm:text-xs"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.04 }}
            >
              Viridian Core
            </motion.div>

            <motion.h1
              className="mt-4 max-w-[11ch] text-[2.1rem] font-semibold leading-[0.96] tracking-tight text-foreground sm:max-w-none sm:text-[2.75rem] md:text-5xl lg:text-[4.15rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.08 }}
            >
              Software para ordenar operaciones reales.
            </motion.h1>

            <motion.p
              className="mt-4 max-w-[34rem] text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.12 }}
            >
              Diseñamos sistemas, portales y automatización para equipos que necesitan menos fricción, más control y
              mejor seguimiento.
            </motion.p>

            <motion.div
              className="mt-5 flex flex-col gap-2.5 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.16 }}
            >
              <a
                href="#demos"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Ver casos reales
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/543751471708?text=Hola%2C%20quiero%20evaluar%20un%20sistema%20para%20mi%20operaci%C3%B3n."
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
              >
                <MessageCircle className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
            </motion.div>

            <motion.p
              className="mt-4 text-sm leading-6 text-muted-foreground"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.2 }}
            >
              {validationLine.join(" · ")}
            </motion.p>
          </div>

          <motion.aside
            className="overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,17,0.98)_0%,rgba(11,12,12,0.98)_100%)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-5 md:p-6"
            initial={{ opacity: 0, x: 18, y: 18 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.32, delay: 0.14 }}
          >
            <div className="flex items-center justify-between border-b border-white/8 pb-3.5">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-viridian">Prueba rápida</p>
                <p className="mt-1.5 text-base font-semibold text-foreground sm:text-lg">Operación real</p>
              </div>
              <span className="rounded-full border border-viridian/18 bg-viridian/10 px-2.5 py-1 text-[11px] text-viridian">
                Enfoque B2B
              </span>
            </div>

            <div className="mt-4 space-y-4">
              {quickProof.map((item) => (
                <div key={item.label}>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
                  <p className="mt-1.5 text-sm leading-6 text-foreground/88">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  )
}
