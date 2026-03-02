"use client"

import { motion } from "motion/react"
import { ExternalLink, Info } from "lucide-react"

const projects = [
  {
    name: "Sitio institucional ISIPP",
    description:
      "Sitio institucional para el Instituto Superior de Informática (ISIPP).",
    url: "https://isipp.com.ar",
    tags: ["Landing", "Next.js", "SEO", "Typescript"],
  },
  {
    name: "Gestor de pedidos para restaurantes - Saas Menu Digital",
    description:
      "SaaS de menú digital para restaurantes con pedidos que llegan directo a WhatsApp.",
    url: "https://saas-menu-digital.vercel.app",
    tags: ["SaaS", "Next.js", "WhatsApp"],
  },
  {
    name: "Gestor de gimansio - GymFLow",
    description:
      "Sistema para gimnasio: altas de socios, pagos, control de asistencia y métricas de retención.",
    url: "https://gymflow-beta.vercel.app",
    tags: ["Producto", "Next.js", "Prisma"],
  },
  {
    name: "Sistema para un restaurante - Acapulco Burrito",
    description:
      "Sistema para restaurante: gestión de menú, pedidos y flujo de cocina en tiempo real.",
    url: "https://acapulco-burrito.vercel.app",
    tags: ["Sistema", "Next.js", "Typescript"],
  },
  {
    name: "Sitio para empresa de grúas - Gruas Torres",
    description:
      "Sitio de una empresa de grúas y logística con generación de leads y contacto rápido.",
    url: "https://gruastorres-oficial.vercel.app",
    tags: ["Landing", "Next.js", "Leads"],
  },
  {
    name: "Sistema para trámites de jubilaciones y medicamentos - Gestor de Trámites",
    description:
      "Sistema para gestores que manejan trámites de jubilaciones y medicamentos: altas, seguimiento y recordatorios.",
    url: "https://gestor-tramites.vercel.app",
    tags: ["Trámites", "Next.js", "Automations"],
  },
]

export function ProjectsSection() {
  return (
    <section id="demos" className="relative py-32 px-6">
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
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            {"Sistemas en acci\u00f3n"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
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
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-viridian bg-viridian/10 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground bg-viridian/15 hover:bg-viridian/25 px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Ver demo
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border hover:border-viridian/30 px-4 py-2 rounded-lg transition-all"
                  >
                    <Info className="w-3.5 h-3.5" />
                    {"M\u00e1s detalles"}
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
