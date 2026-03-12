import Image from "next/image"
import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 rounded-[28px] border border-white/8 bg-white/[0.02] p-5 sm:p-7 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <p className="text-lg font-semibold text-foreground">Viridian Core</p>
            <p className="mt-3 text-sm font-medium text-foreground">
              Sistemas, portales y automatización aplicada para operaciones reales.
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Menos dependencia de WhatsApp, Excel suelto y seguimiento manual. Más control, claridad y trazabilidad.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:min-w-[360px]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/60">Accesos</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="#demos" className="transition-colors hover:text-viridian">
                  Casos reales
                </a>
                <a href="#soluciones" className="transition-colors hover:text-viridian">
                  Qué resolvemos
                </a>
                <a href="#proceso" className="transition-colors hover:text-viridian">
                  Proceso
                </a>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/60">Contacto</p>
              <div className="mt-3 flex flex-col gap-2 md:items-end">
                <a
                  href="https://wa.me/543751471708"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-viridian/35 hover:text-viridian"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a href="#ops-ai" className="text-sm text-muted-foreground transition-colors hover:text-viridian">
                  Viridian Ops AI
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/8 pt-6">
          <p className="text-center text-xs text-muted-foreground/70 md:text-left">
            © 2026 Viridian Core. Todos los derechos reservados.
          </p>
        </div>

        <div className="mt-2 flex justify-center md:justify-start">
          <div className="relative h-[132px] w-full max-w-[520px] sm:h-[176px] sm:max-w-[700px] md:h-[214px] md:max-w-[900px]">
            <Image
              src="/logo-oficial.png"
              alt="Viridian Core"
              fill
              sizes="(min-width: 768px) 900px, (min-width: 640px) 700px, 520px"
              className="object-contain object-center md:object-left"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
