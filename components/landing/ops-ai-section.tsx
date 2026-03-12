"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { projects } from "@/src/data/projects"
import { useIsMobile } from "@/hooks/use-mobile"

const diagnosticSteps = [
  "Describís cómo entra el trabajo, dónde se traba y qué hoy depende de personas.",
  "La herramienta ordena fricciones, tareas repetitivas y puntos con baja trazabilidad.",
  "Salís con una lectura inicial para decidir si conviene portal, sistema interno o automatización.",
]

export function OpsAiSection() {
  const isMobile = useIsMobile()
  const viewport = isMobile
    ? { once: true, margin: "-20px", amount: 0.08 }
    : { once: false, margin: "-80px", amount: 0.2 }
  const opsAiProject = projects.find((project) => project.id === "viridian-ops-ai")

  if (!opsAiProject) {
    return null
  }

  return (
    <section id="ops-ai" className="relative px-4 py-10 sm:px-6 sm:py-18 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="overflow-hidden rounded-[28px] border border-viridian/16 bg-[linear-gradient(180deg,rgba(16,20,18,0.98)_0%,rgba(9,12,11,1)_100%)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: isMobile ? 0.22 : 0.28 }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-36 opacity-60"
            style={{
              background:
                "radial-gradient(circle at top, rgba(78,218,158,0.18) 0%, rgba(78,218,158,0.03) 42%, transparent 74%)",
            }}
          />

          <div className="relative grid gap-0 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-viridian/20 bg-viridian/10 px-3 py-1 text-[11px] tracking-[0.08em] text-viridian">
                  Diagnóstico inicial
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-[0.08em] text-muted-foreground">
                  Antes del desarrollo
                </span>
              </div>

              <p className="mt-3 text-sm font-mono uppercase tracking-[0.22em] text-viridian">Viridian Ops AI</p>
              <h2 className="mt-2.5 max-w-2xl text-[1.6rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-[2.15rem] md:text-4xl">
                Una primera lectura operativa para saber qué conviene construir.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                No es un gimmick visual. Sirve para bajar a tierra cómo opera el negocio, detectar fricción y ordenar
                una propuesta inicial antes de hablar de alcance.
              </p>

              <div className="mt-4 rounded-[20px] border border-white/8 bg-white/[0.03] p-3.5 sm:p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-viridian">Cómo aporta</p>
                <ul className="mt-3 space-y-2.5">
                  {diagnosticSteps.map((step) => (
                    <li key={step} className="text-sm leading-5 text-muted-foreground sm:leading-6">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={opsAiProject.demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                >
                  Probar diagnóstico
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/543751471708?text=Hola%2C%20quiero%20usar%20Viridian%20Ops%20AI%20para%20evaluar%20mi%20operaci%C3%B3n."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
                >
                  <MessageCircle className="h-4 w-4" />
                  Quiero evaluar mi caso
                </a>
              </div>
            </div>

            <div className="relative min-h-[180px] border-t border-white/8 bg-black/25 sm:min-h-[320px] lg:min-h-full lg:border-l lg:border-t-0">
              {opsAiProject.image ? (
                <Image
                  src={opsAiProject.image}
                  alt={`Captura de ${opsAiProject.title}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-4 sm:p-7"
                />
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
