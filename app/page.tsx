import { Navbar } from "@/components/landing/navbar"
import { HeroCinematic } from "@/components/landing/hero-cinematic"
import { ProblemSection } from "@/components/landing/problem-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { ProjectsSection } from "@/src/components/projects/ProjectsSection"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { ResultsSection } from "@/components/landing/results-section"
import { MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-28 sm:pb-0">
      <Navbar />
      <HeroCinematic />
      <ProjectsSection />
      <ResultsSection />
      <div id="soluciones">
        <ProblemSection />
      </div>
      <div id="proceso">
        <HowItWorksSection />
      </div>
      <div id="contacto">
        <CtaSection />
      </div>
      <Footer />

      {/* Sticky mobile CTA for quick WhatsApp demos */}
      <div className="sm:hidden fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <a
          href="https://wa.me/543751471708"
          target="_blank"
          rel="noreferrer noopener"
          className="flex w-full items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#075E54] px-5 py-3 shadow-[0_10px_38px_rgba(64,130,109,0.32)] text-white"
          style={{ zIndex: 70 }}
          aria-label="Pedir demo por WhatsApp"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/15 border border-white/25">
              <MessageCircle className="w-5 h-5" />
            </span>
            <div className="flex flex-col leading-tight text-left">
              <span className="font-semibold">Pedir demo por WhatsApp</span>
              <span className="text-xs text-white/80">Respuesta en el día</span>
            </div>
          </div>
          <span className="font-semibold">→</span>
        </a>
      </div>

      {/* Floating WhatsApp chat shortcut */}
      <a
        href="https://wa.me/543751471708"
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-6 right-6 hidden sm:flex items-center gap-3 px-4 py-3 rounded-full shadow-[0_10px_40px_rgba(64,130,109,0.35)] bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#075E54] text-white font-semibold hover:scale-105 transition-transform"
        style={{ zIndex: 60 }}
        aria-label="Abrir chat de WhatsApp"
      >
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 border border-white/25">
          <MessageCircle className="w-5 h-5" />
        </span>
        <span className="hidden sm:inline">Chatear por WhatsApp</span>
      </a>
    </main>
  )
}
