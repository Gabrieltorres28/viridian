import { Project } from "@/src/data/projects"
import { ArrowUpRight, BadgeCheck, MessageCircle, NotebookText } from "lucide-react"
import Image from "next/image"

const STATUS_STYLES: Record<NonNullable<Project["status"]>, string> = {
  "EN PRODUCCIÓN": "bg-emerald-500/15 text-emerald-200 border-emerald-500/40",
  "DEMO FUNCIONAL": "bg-viridian/15 text-viridian border-viridian/40",
  "IA EN ACCIÓN": "bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-500/35",
  "LISTO PARA ESCALAR": "bg-cyan-500/15 text-cyan-200 border-cyan-500/35",
  "SOLUCIÓN ACTIVA": "bg-blue-500/15 text-blue-200 border-blue-500/35",
  "VERSIÓN BASE": "bg-sky-500/15 text-sky-200 border-sky-500/35",
  "GRABADO BREVE": "bg-amber-500/15 text-amber-200 border-amber-500/30",
}

const WHATSAPP_NUMBER = "543751471708"

export function ProjectCard({ project }: { project: Project }) {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(project.whatsappText)}`
  const shouldContainImage = project.imageDisplay === "contain"

  return (
    <div
      id={project.id}
      className="group relative flex h-full flex-col gap-5 rounded-xl border border-border bg-card/70 p-6 transition-all hover:-translate-y-1 hover:border-viridian/40 hover:shadow-[0_20px_60px_rgba(20,40,34,0.55)]"
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(78,218,158,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-viridian">{project.category}</p>
          <h3 className="mt-1 text-xl font-semibold text-foreground">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-semibold ${
            STATUS_STYLES[project.status]
          }`}
        >
          <BadgeCheck className="h-3.5 w-3.5" />
          {project.status}
        </span>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-border/80 bg-card/50">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`Captura de ${project.title}`}
              fill
              quality={100}
              unoptimized={shouldContainImage}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className={
                shouldContainImage
                  ? "object-contain object-center p-2 brightness-[0.99] saturate-105 transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  : "object-cover object-top brightness-[0.96] saturate-110 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              }
              priority={project.featured}
            />
            <div className="h-[220px] md:h-[260px] lg:h-[300px]" />
            <div
              className={
                shouldContainImage
                  ? "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15"
                  : "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25"
              }
            />
          </>
        ) : (
          <div className="flex h-[220px] w-full items-center justify-center bg-gradient-to-br from-[#0f1f1a] via-[#12271f] to-[#0b1511] text-muted-foreground md:h-[260px] lg:h-[300px]">
            <NotebookText className="h-9 w-9 text-viridian/70" />
          </div>
        )}
      </div>

      <div className="relative space-y-3 text-sm text-muted-foreground">
        <ul className="space-y-2">
          {project.bullets.slice(0, 3).map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-foreground">
              <span className="mt-0.5 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-viridian/70" />
              <span className="text-sm text-muted-foreground">{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm font-semibold text-viridian">{project.impactLine}</p>
      </div>

      <div className="relative mt-auto flex flex-wrap items-center gap-3">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-viridian/90 via-viridian to-emerald-500/90 px-4 py-2 text-sm font-semibold text-background shadow-[0_10px_30px_rgba(78,218,158,0.25)] transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`Ver ahora ${project.title}`}
          >
            Ver ahora
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-lg border border-viridian/40 px-4 py-2 text-sm font-semibold text-viridian transition-colors hover:border-viridian hover:bg-viridian/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`Quiero este sistema: ${project.title}`}
        >
          <MessageCircle className="h-4 w-4" />
          Quiero este sistema
        </a>

        {project.detailsUrl ? (
          <a
            href={project.detailsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            aria-label={`Ver detalles de ${project.title}`}
          >
            Ver detalles
          </a>
        ) : null}
      </div>
    </div>
  )
}
