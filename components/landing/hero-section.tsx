"use client"

import { motion } from "motion/react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { TypewriterText } from "./typewriter-text"

const proofItems = [
  "Sistemas en producción y demos funcionales",
  "Software, automatización e IA aplicada a operación real",
  "Proyectos pensados para usar, no para presentar",
]

const trustItems = [
  { label: "Oferta principal", value: "Sistemas internos y portales operativos" },
  { label: "Enfoque", value: "Menos seguimiento manual. Más control y trazabilidad." },
  { label: "Camino comercial", value: "Ver casos reales y pedir una adaptación concreta." },
]

const typedWords = [
  "Sistemas internos.",
  "Automatización aplicada.",
  "Portales operativos.",
  "IA útil para ejecutar.",
]

const heroHeadline =
  "Sistemas digitales para operaciones que ya no deberían depender de Excel, chat y seguimiento manual."

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40">
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
          className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="max-w-4xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-viridian"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              Viridian Core
            </motion.div>

            <motion.h1
              className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-foreground md:text-6xl lg:text-[4.6rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.08 }}
            >
              {heroHeadline}
            </motion.h1>

            <motion.div
              className="mt-5 inline-flex min-h-[44px] items-center rounded-xl border border-viridian/16 bg-viridian/8 px-4 py-2.5 text-sm font-mono uppercase tracking-[0.16em] text-viridian md:min-h-[48px]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.14 }}
            >
              <TypewriterText words={typedWords} />
            </motion.div>

            <motion.p
              className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.16 }}
            >
              Viridian Core diseña y construye software interno, automatizaciones, portales y herramientas
              inteligentes para equipos que necesitan más control, más trazabilidad y una forma más seria de ejecutar.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <a
                href="#demos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Ver sistemas funcionando
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/543751471708?text=Hola%2C%20quiero%20evaluar%20un%20sistema%20para%20mi%20operaci%C3%B3n."
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
              >
                <MessageCircle className="h-4 w-4" />
                Pedir propuesta inicial
              </a>
            </motion.div>

            <motion.ul
              className="mt-8 grid gap-3 text-sm leading-6 text-muted-foreground md:grid-cols-3"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.24 },
                },
              }}
            >
              {proofItems.map((item) => (
                <motion.li
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-4"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.24 } },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,17,0.98)_0%,rgba(11,12,12,0.98)_100%)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-6"
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.34, delay: 0.16 }}
          >
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-viridian">Qué construimos</p>
                <p className="mt-2 text-lg font-semibold text-foreground">Infraestructura digital útil</p>
              </div>
              <motion.div
                className="rounded-full border border-viridian/20 bg-viridian/10 px-3 py-1 text-xs font-medium text-viridian"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42, ease: "easeOut" }}
              >
                Enfoque B2B
              </motion.div>
            </div>

            <div className="mt-5 space-y-4">
              {trustItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.025] p-4"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, delay: 0.24 + index * 0.05 }}
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-5 rounded-2xl border border-viridian/18 bg-[linear-gradient(180deg,rgba(78,218,158,0.08)_0%,rgba(78,218,158,0.02)_100%)] p-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, delay: 0.4 }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-viridian">Para quién</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Equipos con procesos reales, puntos ciegos operativos y necesidad de construir una base digital propia
                en lugar de seguir acumulando parches.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
