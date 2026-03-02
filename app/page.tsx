import { Navbar } from "@/components/landing/navbar"
import { HeroCinematic } from "@/components/landing/hero-cinematic"
import { ProblemSection } from "@/components/landing/problem-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { ProjectsSection } from "@/components/landing/projects-section"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroCinematic />
      <div id="soluciones">
        <ProblemSection />
      </div>
      <div id="proceso">
        <HowItWorksSection />
      </div>
      <ProjectsSection />
      <div id="contacto">
        <CtaSection />
      </div>
      <Footer />

      {/* Floating WhatsApp chat shortcut */}
      <a
        href="https://wa.me/543751471708"
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-6 right-6 flex items-center gap-3 px-4 py-3 rounded-full shadow-[0_10px_40px_rgba(64,130,109,0.35)] bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#075E54] text-white font-semibold hover:scale-105 transition-transform"
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
