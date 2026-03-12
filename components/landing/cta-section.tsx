"use client"

import { motion } from "motion/react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const nextSteps = [
  "Revisamos tu operación y detectamos dónde conviene intervenir primero.",
  "Te mostramos una dirección concreta: sistema, portal, automatización o una combinación útil.",
  "Si hay encaje, avanzamos sobre una base seria y escalable.",
]

export function CtaSection() {
  const isMobile = useIsMobile()
  const viewport = isMobile
    ? { once: true, margin: "-20px", amount: 0.08 }
    : { once: false, margin: "-90px", amount: 0.22 }

  return (
    <section id="contacto" className="relative px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,19,18,0.98)_0%,rgba(10,12,11,1)_100%)] p-8 md:p-10 lg:p-12"
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

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-mono uppercase tracking-[0.22em] text-viridian">Cierre</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Si necesitás una base digital más clara, más útil y más seria, conversemos.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                El primer paso no es una presentación larga. Es entender la operación, detectar el punto con más
                retorno y plantear una propuesta concreta.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/543751471708?text=Hola%2C%20quiero%20contarte%20mi%20operaci%C3%B3n%20y%20evaluar%20un%20sistema."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Escribir por WhatsApp
                </a>
                <a
                  href="#demos"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
                >
                  Volver a las demos
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <motion.div
              className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: isMobile ? 0.18 : 0.22, delay: isMobile ? 0.02 : 0.06 }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-viridian">Cómo trabajamos el inicio</p>
              <motion.ul
                className="mt-4 space-y-4"
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
                    className="border-b border-white/8 pb-4 text-sm leading-6 text-muted-foreground last:border-b-0 last:pb-0"
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
