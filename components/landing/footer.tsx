import Image from "next/image"
import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 rounded-[28px] border border-white/8 bg-white/[0.02] p-6 sm:p-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="relative h-[98px] w-[360px] max-w-full sm:h-[112px] sm:w-[430px] md:h-[124px] md:w-[520px]">
              <Image
                src="/logo-oficial.png"
                alt="Viridian Core"
                fill
                sizes="(min-width: 768px) 520px, (min-width: 640px) 430px, 360px"
                className="object-contain object-left"
              />
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-foreground">
                Software studio para operaciones, portales y automatización aplicada.
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                Diseñamos sistemas digitales útiles para ordenar procesos, reducir fricción y ejecutar con más
                criterio.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/60">
              Sistemas digitales para operar mejor
            </p>
            <a
              href="https://wa.me/543751471708"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/8 pt-6">
          <p className="text-xs text-muted-foreground/70">© 2026 Viridian Core. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
