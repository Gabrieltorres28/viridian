"use client"

import { motion } from "motion/react"
import { ArrowRight, MessageCircle } from "lucide-react"

const proofItems = ["Sistemas en producción", "Demos funcionales", "Diagnóstico operativo inicial"]
const mobileProofItems = ["Casos reales", "Demos funcionales", "En producción"]

const mobileHeadline = "Sistemas para ordenar operaciones reales"
const mobileSubtitle =
  "Sistemas internos, portales y automatización para salir del Excel suelto y el seguimiento manual."

const trustItems = [
  { label: "Para quién", value: "Negocios e instituciones con operación real, tareas repetitivas y seguimiento débil." },
  { label: "Qué construimos", value: "Sistemas internos, portales y automatizaciones para ordenar procesos concretos." },
  { label: "Qué cambia", value: "Menos tiempo perdido, menos errores y más trazabilidad para decidir y ejecutar." },
]

const signalMetrics = [
  { value: "3", label: "tipos de solución", detail: "portales, sistemas y automatización" },
  { value: "real", label: "evidencia visible", detail: "casos, demos y producción" },
  { value: "1ra", label: "lectura operativa", detail: "con Viridian Ops AI" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-9 pt-20 sm:px-6 sm:pb-14 sm:pt-28 md:pb-20 md:pt-34 lg:pt-36">
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
          className="grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)] lg:items-start lg:gap-8"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="min-w-0 max-w-4xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-viridian sm:px-4 sm:py-2 sm:text-xs"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              Viridian Core
            </motion.div>

            <motion.h1
              className="mt-3.5 hidden max-w-4xl text-[1.78rem] font-semibold leading-[1] tracking-tight text-foreground sm:text-[2.6rem] md:mt-5 md:block md:text-5xl lg:text-[4.3rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.08 }}
            >
              Software operativo para ordenar procesos reales, bajar fricción y recuperar control.
            </motion.h1>

            <motion.p
              className="mt-3 hidden max-w-2xl text-[0.95rem] leading-6 text-muted-foreground sm:text-base sm:leading-7 md:block md:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.16 }}
            >
              Diseñamos sistemas, portales y automatizaciones para equipos que ya no pueden seguir operando con
              WhatsApp, Excel suelto y seguimiento manual. Primero mostramos casos reales. Después definimos si tiene
              sentido construir algo a medida.
            </motion.p>

            <motion.ul
              className="mt-4 hidden gap-2 text-[13px] leading-5 text-muted-foreground sm:grid-cols-3 sm:text-sm md:grid"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.18 },
                },
              }}
            >
              {[
                "WhatsApp como centro operativo",
                "Excel suelto y datos dispersos",
                "Seguimiento manual que depende de memoria",
              ].map((item) => (
                <motion.li
                  key={item}
                  className="rounded-xl border border-white/8 bg-white/[0.025] px-3 py-2.5"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-3.5 md:hidden"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.08 }}
            >
              <h1 className="max-w-[13ch] text-[2rem] font-semibold leading-[0.96] tracking-tight text-foreground">
                {mobileHeadline}
              </h1>
              <p className="mt-3 max-w-[31ch] text-sm leading-5 text-muted-foreground">
                {mobileSubtitle}
              </p>
            </motion.div>

            <motion.div
              className="mt-4 flex flex-col gap-2.5 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
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

            <motion.ul
              className="mt-3.5 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] leading-4 text-foreground/82 md:hidden"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.24 },
                },
              }}
            >
              {mobileProofItems.map((item) => (
                <motion.li
                  key={item}
                  className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.025] px-2.5 py-1.5"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.24 } },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.ul
              className="mt-4 hidden text-xs leading-5 text-foreground sm:flex sm:max-w-full sm:gap-2 sm:overflow-x-auto sm:pb-1 sm:[scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:text-sm md:leading-6"
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
                  className="rounded-xl border border-white/8 bg-white/[0.025] px-3 py-2 md:rounded-2xl md:px-4 md:py-3.5 sm:shrink-0 sm:whitespace-nowrap"
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
            className="hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,17,0.98)_0%,rgba(11,12,12,0.98)_100%)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:block md:p-6"
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.34, delay: 0.16 }}
          >
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-viridian">Prueba rápida</p>
                <p className="mt-2 text-lg font-semibold text-foreground">Viridian Core en una lectura</p>
              </div>
              <motion.div
                className="rounded-full border border-viridian/20 bg-viridian/10 px-3 py-1 text-xs font-medium text-viridian"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42, ease: "easeOut" }}
              >
                Operación real
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

            <div className="mt-5 grid grid-cols-3 gap-3">
              {signalMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="rounded-2xl border border-viridian/18 bg-[linear-gradient(180deg,rgba(78,218,158,0.08)_0%,rgba(78,218,158,0.02)_100%)] p-4"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, delay: 0.36 + index * 0.04 }}
                >
                  <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-viridian">{metric.label}</p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{metric.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
