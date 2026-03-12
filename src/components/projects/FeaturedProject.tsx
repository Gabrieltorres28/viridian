import { Project } from "@/src/data/projects"
import { ArrowUpRight, CheckCircle2, MessageCircle, NotebookText } from "lucide-react"
import Image from "next/image"

const STATUS_STYLES: Record<Project["status"], string> = {
  "En producción": "border-emerald-500/35 bg-emerald-500/12 text-emerald-100",
  "Demo funcional": "border-viridian/35 bg-viridian/12 text-viridian",
  "MVP operativo": "border-sky-500/35 bg-sky-500/12 text-sky-100",
  "Sistema activo": "border-blue-500/35 bg-blue-500/12 text-blue-100",
  "Caso grabado": "border-amber-500/35 bg-amber-500/12 text-amber-100",
}

const WHATSAPP_NUMBER = "543751471708"

export function FeaturedProject({ project }: { project: Project }) {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(project.whatsappText)}`
  const shouldContainImage = project.imageDisplay === "contain"

  return (
    <article
      id={project.id}
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,19,18,0.98)_0%,rgba(10,12,11,0.96)_100%)] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.38)] md:p-8 lg:p-10"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-60"
        style={{
          background:
            "radial-gradient(circle at top, rgba(78,218,158,0.18) 0%, rgba(78,218,158,0.03) 40%, transparent 72%)",
        }}
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-viridian/25 bg-viridian/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-viridian">
              Caso principal
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
              {project.group}
            </span>
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${STATUS_STYLES[project.status]}`}>
              {project.status}
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">{project.systemType}</p>
            <h3 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {project.title}
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.summary}
            </p>
          </div>

          <div className="grid gap-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-5 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-viridian">Qué resuelve</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.solves}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-viridian">Qué cambia</p>
              <ul className="mt-3 space-y-3">
                {project.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-viridian" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Ver sistema
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}

            {!project.hideWhatsappCta ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
              >
                <MessageCircle className="h-4 w-4" />
                Pedir algo similar
              </a>
            ) : null}
          </div>

          <p className="text-sm font-medium text-viridian">{project.impactLine}</p>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,17,1)_0%,rgba(11,13,12,1)_100%)]">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={`Captura de ${project.title}`}
                width={1200}
                height={860}
                className={
                  shouldContainImage
                    ? "h-full w-full object-contain p-4 brightness-[0.98]"
                    : "h-full w-full object-cover object-top"
                }
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            </>
          ) : (
            <div className="flex min-h-[320px] items-center justify-center">
              <NotebookText className="h-10 w-10 text-viridian/70" />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
