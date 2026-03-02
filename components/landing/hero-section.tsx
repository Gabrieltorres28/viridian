"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--viridian) 1px, transparent 1px), linear-gradient(90deg, var(--viridian) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Radial gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--viridian-glow) 0%, transparent 70%)",
        }}
      />

      {/* Eagle */}
      <motion.div
        className="absolute top-[8%] right-[5%] w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] opacity-30"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/eagle.jpg"
          alt=""
          fill
          className="object-contain mix-blend-lighten"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-viridian font-mono text-sm tracking-[0.2em] uppercase mb-6">
            Viridian Core
          </p>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          Tu negocio no necesita{" "}
          <br className="hidden md:block" />
          {"m\u00e1s esfuerzo. "}
          <span className="text-viridian">Necesita un sistema.</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          {"Sistemas web de gesti\u00f3n para negocios en Argentina."}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
        >
          <a
            href="#demos"
            className="group flex items-center gap-2 text-foreground font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(78,218,158,0.3)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(78,218,158,0.95) 0%, rgba(47,143,102,0.92) 50%, rgba(23,77,58,0.9) 100%)",
            }}
          >
            Ver demos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/543751471708"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_0_24px_rgba(78,218,158,0.25)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(23,77,58,0.85) 0%, rgba(47,143,102,0.85) 50%, rgba(78,218,158,0.9) 100%)",
              border: "1px solid rgba(78,218,158,0.25)",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Hablar por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
