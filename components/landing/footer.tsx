import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-foreground font-semibold text-lg">Viridian Core</p>
          <p className="text-muted-foreground text-sm mt-1">
            {"Sistemas de Gesti\u00f3n"}
          </p>
        </div>

        <a
          href="https://wa.me/543751471708"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-viridian transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Contacto WhatsApp
        </a>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border/50">
        <p className="text-center text-xs text-muted-foreground/60">
          {"\u00a9 2026 Viridian Core. Todos los derechos reservados."}
        </p>
      </div>
    </footer>
  )
}
