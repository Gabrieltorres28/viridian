"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { ArrowUpRight, MessageCircle } from "lucide-react"
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
  const opsAiProject = projects.find((project) => project.id === "viridian-ops-ai")
  const secondaryProjects = projects.filter(
    (project) =>
      project.id !== productionProject?.id &&
      !highlightedProjects.some((item) => item.id === project.id) &&
      project.id !== opsAiProject?.id,
  )

  return (
    <section id="demos" className="relative px-6 py-16 md:py-32">
      <div
        className="absolute inset-x-0 top-0 h-72 opacity-40"
        style={{
          background:
            "radial-gradient(circle at top, rgba(78,218,158,0.12) 0%, rgba(78,218,158,0.02) 34%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: isMobile ? 0.22 : 0.28 }}
        >
          <p className="text-sm font-mono uppercase tracking-[0.22em] text-viridian">Sistemas reales</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:mt-4 md:text-5xl">
            Casos reales para evaluar la calidad del sistema, no solo el diseño.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground md:mt-4 md:text-lg md:leading-7">
            Primero mostramos producto funcionando. Después hablamos de adaptación y alcance.
          </p>
        </motion.div>

        {productionProject ? (
          <motion.div
            className="mt-8 md:mt-14"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={isMobile ? { once: true, margin: "-20px", amount: 0.06 } : { once: false, margin: "-100px", amount: 0.18 }}
            transition={{ duration: isMobile ? 0.2 : 0.28 }}
          >
            <FeaturedProject project={productionProject} />
          </motion.div>
        ) : null}

        <motion.div
          className="mt-6 grid grid-cols-1 gap-5 lg:mt-8 lg:grid-cols-2 lg:gap-6"
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
            className="mt-10 rounded-[28px] border border-white/8 bg-white/[0.02] p-5 sm:mt-14 sm:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={isMobile ? { once: true, margin: "-20px", amount: 0.06 } : { once: false, margin: "-80px", amount: 0.18 }}
            transition={{ duration: isMobile ? 0.18 : 0.24 }}
          >
            <div className="max-w-2xl">
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-viridian">Más casos</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                Casos de gastronomía y operación en mostrador.
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Sistemas más compactos para pedidos, cocina y coordinación en contextos de alta rotación.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {secondaryProjects.map((project) => (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,20,19,0.96)_0%,rgba(12,14,13,0.96)_100%)]"
                >
                  <div className="relative h-[160px] border-b border-white/8 bg-black/20">
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
                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {GROUP_COPY[project.group].eyebrow}
                      </span>
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-viridian">
                        {project.status}
                      </span>
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-foreground">{project.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                    <p className="mt-3 text-sm font-medium text-viridian">{project.impactLine}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                        >
                          Ver caso
                        </a>
                      ) : null}
                      {!project.hideWhatsappCta ? (
                        <a
                          href={`https://wa.me/543751471708?text=${encodeURIComponent(project.whatsappText)}`}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
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

        {opsAiProject ? (
          <motion.div
            className="mt-10 overflow-hidden rounded-[28px] border border-viridian/18 bg-[linear-gradient(180deg,rgba(16,20,18,0.98)_0%,rgba(10,12,11,1)_100%)] sm:mt-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={isMobile ? { once: true, margin: "-20px", amount: 0.06 } : { once: false, margin: "-80px", amount: 0.18 }}
            transition={{ duration: isMobile ? 0.2 : 0.26 }}
          >
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-6 md:p-8">
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-viridian">Explorar tu caso</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  ¿Querés contar más sobre tu negocio antes de hablar con nosotros?
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                  Viridian Ops AI releva tu operación en tiempo real, detecta fricciones y te devuelve
                  recomendaciones iniciales para pensar un sistema con más criterio.
                </p>

                <ul className="mt-6 space-y-3">
                  {opsAiProject.outcomes.map((item) => (
                    <li key={item} className="text-sm leading-6 text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={opsAiProject.demoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                  >
                    Probar Viridian Ops AI
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/543751471708?text=Hola%2C%20quiero%20contar%20m%C3%A1s%20sobre%20mi%20negocio%20y%20evaluar%20un%20sistema."
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Quiero conversar mi caso
                  </a>
                </div>
              </div>

              <div className="relative min-h-[260px] border-t border-white/8 bg-black/20 lg:min-h-full lg:border-l lg:border-t-0">
                {opsAiProject.image ? (
                  <Image
                    src={opsAiProject.image}
                    alt={`Captura de ${opsAiProject.title}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={opsAiProject.imageDisplay === "contain" ? "object-contain p-6" : "object-cover"}
                  />
                ) : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
