"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { projects, ProjectGroup } from "@/src/data/projects"
import { FeaturedProject } from "./FeaturedProject"
import { ProjectCard } from "./ProjectCard"
import { useIsMobile } from "@/hooks/use-mobile"

const GROUP_COPY: Record<
  ProjectGroup,
  {
    eyebrow: string
  }
> = {
  Operaciones: {
    eyebrow: "Operaciones",
  },
  "Atención y captación": {
    eyebrow: "Atención y captación",
  },
  "Institucional y portales": {
    eyebrow: "Institucional y portales",
  },
}

export function ProjectsSection() {
  const isMobile = useIsMobile()
  const viewport = isMobile
    ? { once: true, margin: "-20px", amount: 0.08 }
    : { once: false, margin: "-80px", amount: 0.24 }
  const productionProject = projects.find((project) => project.id === "isipp")
  const highlightedProjects = ["gestor-tramites", "gruastorres"]
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is (typeof projects)[number] => Boolean(project))
  const secondaryProjects = projects.filter(
    (project) =>
      project.id !== productionProject?.id &&
      !highlightedProjects.some((item) => item.id === project.id) &&
      project.id !== "viridian-ops-ai",
  )
  const proofStrip = [
    "Casos reales con pantallas visibles",
    "Estados claros: producción, MVP o demo funcional",
    "Sistemas pensados para operación, no para vender humo",
  ]

  return (
    <section id="demos" className="relative px-4 py-14 sm:px-6 sm:py-16 md:py-22">
      <div
        className="absolute inset-x-0 top-0 h-72 opacity-40"
        style={{
          background:
            "radial-gradient(circle at top, rgba(78,218,158,0.12) 0%, rgba(78,218,158,0.02) 34%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: isMobile ? 0.22 : 0.28 }}
        >
          <p className="text-sm font-mono uppercase tracking-[0.22em] text-viridian">Sistemas reales</p>
          <h2 className="mt-3 text-[1.72rem] font-semibold leading-[1.04] tracking-tight text-foreground sm:text-[2.3rem] md:mt-4 md:text-5xl">
            Casos visibles para entender qué tipo de sistema construye Viridian Core.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground md:mt-4 md:text-lg md:leading-7">
            Producción real, demos funcionales y MVPs operativos para ver cómo resolvemos atención, operación y
            trazabilidad antes de hablar de propuesta.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 hidden gap-2.5 sm:grid md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: isMobile ? 0.03 : 0.05, delayChildren: 0.04 } },
          }}
        >
          {proofStrip.map((item) => (
            <motion.div
              key={item}
              className="rounded-[18px] border border-white/8 bg-white/[0.03] px-3.5 py-3 text-sm leading-5 text-muted-foreground"
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.16 : 0.22 } },
              }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {productionProject ? (
          <motion.div
            className="mt-6 md:mt-12"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={isMobile ? { once: true, margin: "-20px", amount: 0.06 } : { once: false, margin: "-100px", amount: 0.18 }}
            transition={{ duration: isMobile ? 0.2 : 0.28 }}
          >
            <FeaturedProject project={productionProject} />
          </motion.div>
        ) : null}

        <motion.div
          className="mt-4 grid grid-cols-1 gap-3.5 sm:gap-5 lg:mt-6 lg:grid-cols-2 lg:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={isMobile ? { once: true, margin: "-20px", amount: 0.06 } : { once: false, margin: "-80px", amount: 0.18 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: isMobile ? 0.02 : 0.05,
                delayChildren: isMobile ? 0.02 : 0.04,
              },
            },
          }}
        >
          {highlightedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.16 : 0.22 } },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {secondaryProjects.length > 0 ? (
          <motion.div
            className="mt-7 rounded-[24px] border border-white/8 bg-white/[0.02] p-3.5 sm:mt-12 sm:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={isMobile ? { once: true, margin: "-20px", amount: 0.06 } : { once: false, margin: "-80px", amount: 0.18 }}
            transition={{ duration: isMobile ? 0.18 : 0.24 }}
          >
            <div className="max-w-2xl">
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-viridian">Más casos</p>
              <h3 className="mt-2.5 text-[1.45rem] font-semibold tracking-tight text-foreground sm:text-2xl">
                Más ejemplos de operación diaria y atención con menos fricción.
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-muted-foreground">
                Casos orientados a pedidos, cocina y consulta recurrente donde el problema es el desorden operativo, no
                la falta de una web linda.
              </p>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {secondaryProjects.map((project) => (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,20,19,0.96)_0%,rgba(12,14,13,0.96)_100%)]"
                >
                  <div className="relative h-[148px] border-b border-white/8 bg-black/20 sm:h-[160px]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`Captura de ${project.title}`}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className={
                          project.imageDisplay === "contain" ? "object-contain p-4" : "object-cover object-top"
                        }
                      />
                    ) : null}
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {GROUP_COPY[project.group].eyebrow}
                      </span>
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-viridian">
                        {project.status}
                      </span>
                    </div>
                    <h4 className="mt-3 text-base font-semibold text-foreground sm:text-lg">{project.title}</h4>
                    <p className="mt-1.5 text-[12px] uppercase tracking-[0.14em] text-viridian sm:text-sm">{project.systemType}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.solves}</p>
                    <ul className="mt-3 space-y-2">
                      {project.outcomes.slice(0, 1).map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-viridian" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm font-medium text-viridian">{project.impactLine}</p>
                    <div className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                        >
                          Ver caso
                        </a>
                      ) : null}
                      {!project.hideWhatsappCta ? (
                        <a
                          href={`https://wa.me/543751471708?text=${encodeURIComponent(project.whatsappText)}`}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
                        >
                          Pedir referencia
                        </a>
                        ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
