"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Workflow, Bot, Radar, Boxes } from "lucide-react"

const cards = [
  {
    icon: Workflow,
    title: "Procesos repartidos en demasiados lugares",
    description:
      "Planillas, mensajes, notas sueltas y memoria del equipo terminan sosteniendo operaciones que deberían vivir en un sistema.",
    backDetail:
      "Cuando cada paso depende de herramientas separadas, nadie tiene una vista completa de lo que pasa. Se duplican tareas, se pierden decisiones y la operación se vuelve frágil.",
  },
  {
    icon: Bot,
    title: "Trabajo manual que no debería seguir siendo manual",
    description:
      "Seguimientos, validaciones, recordatorios y carga de datos consumen tiempo operativo que puede resolverse con automatización bien aplicada.",
    backDetail:
      "Cada tarea repetitiva que sigue en manos del equipo agrega demora, error y desgaste. Automatizar bien no es adornar el proceso: es volverlo ejecutable a escala.",
  },
  {
    icon: Radar,
    title: "Poca visibilidad para decidir con criterio",
    description:
      "Si no hay trazabilidad, estados claros ni datos confiables, las decisiones salen por intuición, urgencia o contexto incompleto.",
    backDetail:
      "Sin estructura digital usable no sabés qué está frenado, qué venció, qué falta y qué requiere atención. El problema no es solo de orden: es de control operativo.",
  },
  {
    icon: Boxes,
    title: "Sistemas aislados que no acompañan el crecimiento",
    description:
      "Una herramienta suelta puede resolver una parte, pero no alcanza para coordinar equipos, procesos y decisiones en una misma lógica operativa.",
    backDetail:
      "Viridian Core no apunta a digitalizar una tarea y nada más. Diseña sistemas que conectan operación, seguimiento y ejecución para que el crecimiento no rompa la estructura.",
  },
]

export function ProblemSection() {
  const [flippedId, setFlippedId] = useState<string | null>(null)

  return (
    <section className="relative py-32 px-6">
      {/* Subtle radial accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse, var(--viridian-glow) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-viridian font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Filosofía de trabajo
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            {"No hacemos software para decorar procesos. "}
            <br className="hidden md:block" />
            {"Construimos sistemas para ejecutarlos mejor."}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Viridian Core convierte procesos dispersos en infraestructura digital usable. Combinamos software,
            automatización e inteligencia aplicada para dar control, visibilidad y capacidad real de ejecución.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative bg-card border border-border rounded-xl p-0 transition-all hover:border-viridian/40 mobile-float"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setFlippedId(card.title)}
              onMouseLeave={() => setFlippedId(null)}
            >
              <div
                className="relative h-full min-h-[240px] rounded-xl overflow-hidden"
                style={{ perspective: "1400px" }}
              >
                <div
                  className="w-full h-full transition-transform duration-600 ease-[cubic-bezier(0.19,0.8,0.32,1)] shadow-[0_12px_40px_rgba(0,0,0,0.35)] rounded-xl"
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      flippedId === card.title
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                  }}
                >
                  {/* Cara frontal */}
                  <div
                    className="absolute inset-0 p-8 flex flex-col bg-card/90"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "translateZ(12px)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-viridian/10 flex items-center justify-center mb-5">
                      <card.icon className="w-6 h-6 text-viridian" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
                      {card.description}
                    </p>
                    <div className="mt-auto md:hidden">
                      <button
                        onClick={() =>
                          setFlippedId(
                            flippedId === card.title ? null : card.title,
                          )
                        }
                        className="mt-6 inline-flex items-center text-sm font-medium text-foreground px-4 py-2 rounded-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(78,218,158,0.95) 0%, rgba(47,143,102,0.92) 50%, rgba(23,77,58,0.9) 100%)",
                        }}
                      >
                        Ver más información
                      </button>
                    </div>
                  </div>

                  {/* Cara trasera */}
                  <div
                    className="absolute inset-0 p-8 flex flex-col justify-between"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg) translateZ(12px)",
                      background:
                        "linear-gradient(135deg, rgba(23,77,58,0.9) 0%, rgba(47,143,102,0.92) 50%, rgba(78,218,158,0.9) 100%)",
                      color: "#0a0a0a",
                      boxShadow: "inset 0 0 18px rgba(0,0,0,0.25)",
                    }}
                  >
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] font-mono opacity-80">
                        Detalle
                      </p>
                      <p className="mt-4 text-base leading-relaxed">
                        {card.backDetail}
                      </p>
                    </div>
                    <div className="text-sm font-semibold tracking-[0.14em] uppercase opacity-80">
                      Viridian Core
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
