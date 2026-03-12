"use client"

import { motion } from "motion/react"
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react"
import { TypewriterText } from "./typewriter-text"

const proofItems = [
  "Menos seguimiento manual",
  "Más control operativo",
  "Demos reales para evaluar",
]

const trustItems = [
  { label: "Qué hacemos", value: "Sistemas internos, portales y automatización aplicada." },
  { label: "Cómo se evalúa", value: "Primero ves demos y casos con lógica operativa real." },
  { label: "Cuándo encaja", value: "Cuando la operación ya superó Excel, chat y parches." },
]

const typedWords = [
  "Sistemas internos.",
  "Automatización aplicada.",
  "Portales operativos.",
  "IA útil.",
]

const heroHeadline = "Sistemas digitales para operaciones que ya no deberían depender de Excel y seguimiento manual."

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-24 md:pb-32 md:pt-40">
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

      <div className="relative mx-auto max-w-6xl min-w-0">
        <motion.div
          className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="min-w-0 max-w-4xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-viridian"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              Viridian Core
            </motion.div>

            <motion.h1
              className="mt-5 max-w-4xl text-[2.15rem] font-semibold leading-[1.02] tracking-tight text-foreground md:text-6xl lg:text-[4.6rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.08 }}
            >
              {heroHeadline}
            </motion.h1>

            <motion.div
              className="mt-4 flex min-h-[40px] max-w-full items-center overflow-hidden rounded-xl border border-viridian/16 bg-viridian/8 px-3 py-2 text-xs font-mono uppercase tracking-[0.16em] text-viridian md:min-h-[48px] md:inline-flex md:px-4 md:py-2.5 md:text-sm"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.14 }}
            >
              <span className="truncate md:hidden">Sistemas internos y automatización.</span>
              <span className="hidden md:inline">
                <TypewriterText words={typedWords} />
              </span>
            </motion.div>

            <motion.p
              className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground md:text-xl md:leading-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.16 }}
            >
              Software interno, automatización y portales para operar con más criterio y menos fricción manual.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-col gap-2.5 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <a
                href="#demos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Ver sistemas funcionando
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/543751471708?text=Hola%2C%20quiero%20evaluar%20un%20sistema%20para%20mi%20operaci%C3%B3n."
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-viridian"
              >
                <MessageCircle className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
            </motion.div>

            <motion.ul
              className="mt-6 flex max-w-full gap-2 overflow-x-auto pb-1 text-xs leading-5 text-foreground [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:text-sm md:leading-6"
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
                  className="shrink-0 rounded-full border border-white/8 bg-white/[0.025] px-3 py-2 whitespace-nowrap md:rounded-2xl md:px-4 md:py-4"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.24 } },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="#demos"
              className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground md:hidden"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, delay: 0.24 }}
            >
              Ver prueba real
              <ChevronDown className="h-3.5 w-3.5" />
            </motion.a>
          </div>

          <motion.div
            className="hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,17,0.98)_0%,rgba(11,12,12,0.98)_100%)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:block md:p-6"
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

            <div className="mt-5 space-y-3">
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
                Equipos con operación real, puntos ciegos y necesidad de una base propia en lugar de seguir sumando
                parches.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(16,18,17,0.96)_0%,rgba(11,12,12,0.96)_100%)] p-4 lg:hidden"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.26, delay: 0.18 }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-viridian/20 bg-viridian/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-viridian">
              Qué hacemos
            </span>
            <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              B2B
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Sistemas internos, portales y automatización aplicada para equipos que ya superaron el parche manual.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
