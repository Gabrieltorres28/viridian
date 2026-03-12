"use client"

import { motion } from "motion/react"
import { projects, ProjectGroup } from "@/src/data/projects"
import { FeaturedProject } from "./FeaturedProject"
import { ProjectCard } from "./ProjectCard"

const GROUP_COPY: Record<
  ProjectGroup,
  {
    eyebrow: string
    title: string
    description: string
  }
> = {
  Operaciones: {
    eyebrow: "Operaciones",
    title: "Flujos internos, seguimiento y ejecución sin depender de memoria.",
    description:
      "Sistemas para ordenar pedidos, estados, responsables y tareas repetitivas donde hoy la operación se sostiene con atajos.",
  },
  "Atención y captación": {
    eyebrow: "Atención y captación",
    title: "Entrada comercial más clara y menos seguimiento desordenado.",
    description:
      "Experiencias de intake, diagnóstico y respuesta que mejoran lo que pasa antes de que el equipo empiece a correr detrás del caos.",
  },
  "Institucional y portales": {
    eyebrow: "Institucional y portales",
    title: "Portales serios para atención, servicios y capas digitales públicas o internas.",
    description:
      "Interfaces con lógica operativa real: menos fricción para el usuario y más orden para la organización que las sostiene.",
  },
}

const GROUP_ORDER: ProjectGroup[] = [
  "Operaciones",
  "Atención y captación",
  "Institucional y portales",
]

export function ProjectsSection() {
  const featuredProject = projects.find((project) => project.featured)

  return (
    <section id="demos" className="relative px-6 py-24 md:py-32">
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
          viewport={{ once: false, margin: "-80px", amount: 0.24 }}
          transition={{ duration: 0.28 }}
        >
          <p className="text-sm font-mono uppercase tracking-[0.22em] text-viridian">Sistemas reales</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Demos curadas por tipo de operación, no una grilla de piezas sueltas.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            Cada caso muestra una lógica concreta de producto: qué sistema es, qué ordena y qué tipo de mejora
            operativa habilita.
          </p>
        </motion.div>

        {featuredProject ? (
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px", amount: 0.18 }}
            transition={{ duration: 0.3, delay: 0.04 }}
          >
            <FeaturedProject project={featuredProject} />
          </motion.div>
        ) : null}

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
          {GROUP_ORDER.map((group, groupIndex) => {
            const groupProjects = projects.filter((project) => project.group === group && !project.featured)
            if (groupProjects.length === 0) return null

            return (
              <motion.section
                key={group}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.18 }}
                transition={{ duration: 0.24, delay: groupIndex * 0.02 }}
              >
                <div className="mb-8 flex flex-col gap-3 md:max-w-3xl">
                  <p className="text-sm font-mono uppercase tracking-[0.2em] text-viridian">
                    {GROUP_COPY[group].eyebrow}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {GROUP_COPY[group].title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground md:text-base">
                    {GROUP_COPY[group].description}
                  </p>
                </div>

                <motion.div
                  className="grid grid-cols-1 gap-6 lg:grid-cols-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, margin: "-80px", amount: 0.18 }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
                  }}
                >
                  {groupProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={{
                        hidden: { opacity: 0, y: 28 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
                      }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
