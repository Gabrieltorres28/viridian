"use client"

import { useMemo, useState } from "react"
import { motion } from "motion/react"
import { projects, ProjectCategory } from "@/src/data/projects"
import { CategoryChips } from "./CategoryChips"
import { FeaturedProject } from "./FeaturedProject"
import { ProjectCard } from "./ProjectCard"

const CATEGORY_OPTIONS: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "Educación",
  "Gastronomía",
  "IA",
  "Operaciones",
  "Leads B2B",
  "Municipal",
]

type Category = (typeof CATEGORY_OPTIONS)[number]

export function ProjectsSection() {
  const [category, setCategory] = useState<Category>("Todos")

  const featuredProject = useMemo(
    () => projects.find((project) => project.featured),
    []
  )

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => category === "Todos" || project.category === category)
  }, [category])

  const shouldShowFeatured =
    featuredProject && (category === "Todos" || featuredProject.category === category)

  return (
    <section id="demos" className="relative px-6 py-28">
      <div
        className="absolute bottom-0 right-0 h-[520px] w-[520px] opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, var(--viridian-glow) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-viridian">
            Sistemas en funcionamiento
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Software útil, automatización e inteligencia aplicada a casos concretos
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Explorá productos operativos, paneles internos, portales y sistemas diseñados para resolver procesos reales.
          </p>
          <CategoryChips
            categories={CATEGORY_OPTIONS}
            selected={category}
            onSelect={(cat) => {
              setCategory(cat)
              if (typeof window === "undefined") return
              const targetId =
                cat === "Todos"
                  ? "demos"
                  : projects.find((p) => p.category === cat)?.id
              if (!targetId) return
              requestAnimationFrame(() => {
                document.getElementById(targetId)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              })
            }}
          />
        </motion.div>

        {shouldShowFeatured ? (
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <FeaturedProject project={featuredProject} />
          </motion.div>
        ) : null}

        <motion.div
          key={category}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          {filteredProjects
            .filter((project) => !(shouldShowFeatured && project.featured))
            .map((project, idx) => (
              <motion.div
                key={project.id}
                custom={idx}
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  show: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.38, ease: "easeOut", delay: i * 0.05 },
                  }),
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          {filteredProjects.length === 0 && !shouldShowFeatured ? (
            <div className="col-span-full rounded-xl border border-border bg-card/60 p-8 text-center text-muted-foreground">
              No hay proyectos en esta categoría todavía. Elegí otra o pedí uno a medida.
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
