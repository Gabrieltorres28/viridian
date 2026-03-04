import { Project } from "@/src/data/projects"
import { ArrowUpRight, BadgeCheck, MessageCircle, Star, NotebookText } from "lucide-react"
import Image from "next/image"

const STATUS_STYLES: Record<NonNullable<Project["status"]>, string> = {
  "EN PRODUCCIÓN": "bg-emerald-500/20 text-emerald-100 border-emerald-500/50",
  "DEMO FUNCIONAL": "bg-viridian/15 text-viridian border-viridian/40",
  "GRABADO BREVE": "bg-amber-500/15 text-amber-200 border-amber-500/30",
}

const WHATSAPP_NUMBER = "543751471708"

export function FeaturedProject({ project }: { project: Project }) {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(project.whatsappText)}`

  return (
    <div className="relative overflow-hidden rounded-2xl border border-viridian/30 bg-gradient-to-br from-[#0d1a16] via-[#0f221b] to-[#0a1511] p-6 md:p-10 shadow-[0_30px_120px_rgba(20,40,34,0.65)]">
      <div
        className="pointer-events-none absolute -left-10 -top-10 h-52 w-52 rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(78,218,158,0.35) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="flex items-center gap-2 text-sm font-semibold text-viridian">
        <Star className="h-4 w-4 fill-viridian/70" /> Proyecto destacado
      </div>

      <div className="mt-4 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-viridian">
              {project.category}
            </span>
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold ${
                STATUS_STYLES[project.status]
              }`}
            >
              <BadgeCheck className="h-4 w-4" />
              {project.status}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-foreground">{project.title}</h3>
            <p className="text-base text-muted-foreground">{project.subtitle}</p>
          </div>

          <ul className="space-y-2">
            {project.bullets.slice(0, 3).map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-viridian" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="text-base font-semibold text-viridian">{project.impactLine}</p>

          <div className="flex flex-wrap items-center gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-viridian via-emerald-500 to-viridian px-5 py-2.5 text-sm font-semibold text-background shadow-[0_14px_50px_rgba(78,218,158,0.3)] transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Ver demo destacada: ${project.title}`}
              >
                Ver demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-viridian/50 px-5 py-2.5 text-sm font-semibold text-viridian transition-colors hover:border-viridian hover:bg-viridian/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`Quiero este sistema destacado: ${project.title}`}
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

        <div className="relative overflow-hidden rounded-xl border border-viridian/20 bg-card/60">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={`Captura de ${project.title}`}
                width={1200}
                height={675}
                className="h-full w-full object-cover brightness-[0.96] saturate-110"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/30" />
            </>
          ) : (
            <div className="flex h-full min-h-[240px] items-center justify-center bg-gradient-to-br from-[#0b1511] via-[#11241c] to-[#0d1a16] text-muted-foreground">
              <NotebookText className="h-10 w-10 text-viridian/70" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
