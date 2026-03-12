import { Project } from "@/src/data/projects"
import { ArrowUpRight, CheckCircle2, MessageCircle, NotebookText } from "lucide-react"
import Image from "next/image"

const STATUS_STYLES: Record<Project["status"], string> = {
  "En producción": "border-emerald-500/30 bg-emerald-500/10 text-emerald-100",
  "Demo funcional": "border-viridian/30 bg-viridian/10 text-viridian",
  "MVP operativo": "border-sky-500/30 bg-sky-500/10 text-sky-100",
  "Sistema activo": "border-blue-500/30 bg-blue-500/10 text-blue-100",
  "Caso grabado": "border-amber-500/30 bg-amber-500/10 text-amber-100",
}

const WHATSAPP_NUMBER = "543751471708"

export function ProjectCard({ project }: { project: Project }) {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(project.whatsappText)}`
  const shouldContainImage = project.imageDisplay === "contain"
  const primaryCtaLabel = project.id === "gestor-tramites" ? "Ver portal" : "Ver demo"

  return (
    <article
      id={project.id}
      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,20,19,0.98)_0%,rgba(12,14,13,0.96)_100%)]"
    >
      <div className="relative overflow-hidden border-b border-white/8 bg-black/20">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`Captura de ${project.title}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className={
                shouldContainImage
                  ? "object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                  : "object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              }
              priority={project.featured}
            />
            <div className="h-[180px] sm:h-[200px]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />
          </>
        ) : (
          <div className="flex h-[180px] items-center justify-center sm:h-[200px]">
            <NotebookText className="h-9 w-9 text-viridian/65" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {project.group}
          </span>
          <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${STATUS_STYLES[project.status]}`}>
            {project.status}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">{project.title}</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.14em] text-viridian">{project.systemType}</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.summary}</p>
        </div>

        <ul className="space-y-2">
          {project.outcomes.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-viridian" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              {primaryCtaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}

          {!project.hideWhatsappCta ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
            >
              <MessageCircle className="h-4 w-4" />
              Pedir walkthrough
            </a>
          ) : null}
        </div>

        <p className="text-sm font-medium text-viridian">{project.impactLine}</p>
      </div>
    </article>
  )
}
