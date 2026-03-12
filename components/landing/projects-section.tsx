"use client"

import { motion } from "motion/react"
import { BadgeInfo, ExternalLink } from "lucide-react"

const projects = [
  {
    client: "ISIPP",
    industry: "Educación",
    problem: "Inscripciones y consultas dispersas entre mails y llamadas.",
    solution: "Portal web con formularios dirigidos y derivación automática.",
    impact: "Consultas centralizadas y derivación automática. Menos idas y vueltas por WhatsApp/llamadas.",
    metric: "Métrica a medir: tiempo de alta y mensajes repetidos",
    url: "https://isipp.com.ar",
    demoAvailable: true,
  },
  {
    client: "SaaS Menú Digital",
    industry: "Gastronomía",
    problem: "Pedidos entraban por múltiples números y se perdían.",
    solution: "Menú digital con pedidos centralizados directo a WhatsApp.",
    impact: "Pedidos centralizados en un flujo único. Menos confusión en hora pico.",
    metric: "Métrica a medir: pedidos reenviados o mal tomados",
    url: "https://saas-menu-digital.vercel.app",
    demoAvailable: true,
  },
  {
    client: "Acapulco Burrito",
    industry: "Restaurante",
    problem: "Tickets de cocina se traspapelaban y demoraban entregas.",
    solution: "KDS simple con flujo de pedidos y estados en tiempo real.",
    impact: "Flujo de pedidos visible en cocina. Menos re-trabajo y menos confusión.",
    metric: "Métrica a medir: pedidos re-hechos o demorados",
    url: "https://acapulco-burrito.vercel.app",
    demoAvailable: false,
  },
  {
    client: "Grúas Torres",
    industry: "Servicios",
    problem: "Leads entraban sin priorización ni datos claves.",
    solution: "Landing con captación guiada y alerta instantánea al equipo.",
    impact: "Captación guiada + registro ordenado de leads. Mejor seguimiento del equipo.",
    metric: "Métrica a medir: leads con datos completos y seguimiento",
    url: "https://gruastorres-oficial.vercel.app",
    demoAvailable: false,
  },
  {
    client: "Gestor de Trámites",
    industry: "Servicios",
    problem: "Recordatorios y seguimiento de expedientes manual en planillas.",
    solution: "Tablero de trámites con vencimientos y avisos automáticos.",
    impact: "Vencimientos con alertas. Menos seguimiento manual repetitivo.",
    metric: "Métrica a medir: recordatorios enviados y vencimientos al día",
    url: "https://gestor-tramites.vercel.app",
    demoAvailable: true,
  },
]

export function ProjectsSection() {
  return (
    <section id="casos" className="relative py-32 px-6">
      {/* Subtle bg accent */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, var(--viridian-glow) 0%, transparent 70%)",
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
            Casos reales
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            Soluciones en producción, listas para demo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.client}
              className="group relative bg-card border border-border rounded-xl p-7 flex flex-col transition-all hover:border-viridian/40 hover:scale-[1.02] mobile-float"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                background: "radial-gradient(ellipse at center, rgba(64,130,109,0.05) 0%, transparent 70%)"
              }} />

              <div className="relative flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-viridian font-mono">
                      {project.industry}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.client}
                    </h3>
                  </div>
                  {project.demoAvailable ? (
                    <span className="inline-flex items-center gap-1 text-xs text-viridian font-semibold bg-viridian/10 border border-viridian/30 px-2.5 py-1 rounded-full">
                      <BadgeInfo className="w-3.5 h-3.5" />
                      Demo disponible
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded-full border border-border/80">
                      Grabado breve
                    </span>
                  )}
                </div>

                <dl className="space-y-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  <div>
                    <dt className="font-semibold text-foreground">Problema</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Solución</dt>
                    <dd>{project.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Impacto</dt>
                    <dd className="text-viridian font-medium">{project.impact}</dd>
                    {project.metric ? (
                      <p className="text-xs text-muted-foreground/80 mt-1">{project.metric}</p>
                    ) : null}
                  </div>
                </dl>

                <div className="flex gap-3 mt-6">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground bg-viridian/15 hover:bg-viridian/25 px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Ver ahora
                  </a>
                  <a
                    href="https://wa.me/543751471708?text=Hola%20quiero%20ver%20la%20demo%20de%20un%20caso%20similar"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border hover:border-viridian/30 px-4 py-2 rounded-lg transition-all"
                  >
                    Pedir walkthrough
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
