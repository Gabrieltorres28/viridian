"use client"

import { motion } from "motion/react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const nextSteps = [
  "Revisión operativa inicial con foco en fricción, seguimiento y puntos ciegos.",
  "Dirección concreta: portal, sistema interno, automatización o combinación.",
  "Propuesta para avanzar con alcance razonable y sin capas innecesarias.",
]

export function CtaSection() {
  const isMobile = useIsMobile()
  const viewport = isMobile
    ? { once: true, margin: "-20px", amount: 0.08 }
    : { once: false, margin: "-90px", amount: 0.22 }

  return (
    <section id="contacto" className="relative px-4 py-10 sm:px-6 sm:py-18 md:py-24">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,19,18,0.98)_0%,rgba(10,12,11,1)_100%)] p-4 sm:p-8 md:p-10 lg:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: isMobile ? 0.22 : 0.28 }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-60"
            style={{
              background:
                "radial-gradient(circle at top, rgba(78,218,158,0.16) 0%, rgba(78,218,158,0.02) 42%, transparent 74%)",
            }}
          />

          <div className="relative grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-8">
            <div>
              <p className="text-sm font-mono uppercase tracking-[0.22em] text-viridian">Cierre</p>
              <h2 className="mt-3 max-w-3xl text-[1.7rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[2.3rem] md:text-5xl">
                Si la operación ya pide más control, este es el momento de ordenarla.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:text-lg">
                Revisamos el caso, mostramos un enfoque concreto y definimos si conviene avanzar. Sin propuesta inflada
                y sin vender software que no haga falta.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href="https://wa.me/543751471708?text=Hola%2C%20quiero%20contarte%20mi%20operaci%C3%B3n%20y%20evaluar%20un%20sistema."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Evaluar mi operación
                </a>
                <a
                  href="#ops-ai"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
                >
                  Probar diagnóstico
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <motion.div
              className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4 sm:p-5"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.18 : 0.22, delay: isMobile ? 0.02 : 0.06 }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-viridian">Qué te llevás en el primer contacto</p>
              <motion.ul
                className="mt-3.5 space-y-3"
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: isMobile ? 0.02 : 0.05,
                      delayChildren: isMobile ? 0.02 : 0.08,
                    },
                  },
                }}
              >
                {nextSteps.map((step) => (
                  <motion.li
                    key={step}
                    className="border-b border-white/8 pb-3 text-sm leading-5 text-muted-foreground last:border-b-0 last:pb-0 md:leading-6"
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.16 : 0.18 } },
                    }}
                  >
                    {step}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
