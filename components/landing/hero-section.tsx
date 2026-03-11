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
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-viridian font-mono text-sm tracking-[0.2em] uppercase mb-6">
            Viridian Core
          </p>
        </motion.div>

        <motion.h1
          className="mx-auto max-w-5xl text-center text-4xl font-bold leading-[1.02] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          Tu negocio no necesita mas Excel.
          <br className="hidden md:block" />
          <span className="text-viridian">Necesita un sistema.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          Viridian Core transforma planillas, mensajes y procesos dispersos en una
          operacion clara, centralizada y trazable.
        </motion.p>

        <motion.div
          className="mx-auto mt-7 flex w-fit items-center gap-3 rounded-full border border-viridian/20 bg-card/50 px-4 py-2 text-sm font-medium text-viridian shadow-[0_0_40px_rgba(78,218,158,0.08)] backdrop-blur-sm"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        >
          <span className="h-2 w-2 rounded-full bg-viridian shadow-[0_0_14px_rgba(78,218,158,0.7)]" />
          Excel + WhatsApp + caos operativo -&gt; un solo sistema.
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        >
          <a
            href="#demos"
            className="group flex items-center gap-2 rounded-lg px-8 py-3.5 font-medium text-foreground transition-all hover:shadow-[0_0_30px_rgba(78,218,158,0.3)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(78,218,158,0.95) 0%, rgba(47,143,102,0.92) 50%, rgba(23,77,58,0.9) 100%)",
            }}
          >
            Ver sistemas funcionando
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/543751471708"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-8 py-3.5 font-medium text-foreground transition-all hover:shadow-[0_0_24px_rgba(78,218,158,0.25)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(23,77,58,0.85) 0%, rgba(47,143,102,0.85) 50%, rgba(78,218,158,0.9) 100%)",
              border: "1px solid rgba(78,218,158,0.25)",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar demo
          </a>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.62, ease: "easeOut" }}
        >
          <div className="rounded-2xl border border-border/80 bg-card/45 p-5 text-left backdrop-blur-sm">
            <p className="text-sm font-mono uppercase tracking-[0.18em] text-viridian">
              Problema
            </p>
            <p className="mt-3 text-base font-semibold text-foreground">
              La operacion se rompe cuando todo vive en Excel, WhatsApp y memoria del equipo.
            </p>
          </div>

          <div className="rounded-2xl border border-viridian/25 bg-card/55 p-5 text-left shadow-[0_0_40px_rgba(78,218,158,0.08)] backdrop-blur-sm">
            <p className="text-sm font-mono uppercase tracking-[0.18em] text-viridian">
              Solucion
            </p>
            <p className="mt-3 text-base font-semibold text-foreground">
              Un sistema centralizado que ordena procesos, tareas, pagos y seguimiento.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card/45 p-5 text-left backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-mono uppercase tracking-[0.18em] text-viridian">
              Resultado
            </p>
            <p className="mt-3 text-base font-semibold text-foreground">
              Mas control, trazabilidad real y menos tiempo perdido apagando incendios.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
