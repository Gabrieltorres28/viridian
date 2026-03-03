"use client"

import { motion } from "motion/react"

const testimonials = [
  {
    quote:
      "Pasamos de chats dispersos a un tablero único. Cada consulta llega con los datos correctos y el equipo responde más rápido.",
    name: "María Gómez",
    role: "Coordinadora Académica · Instituto",
  },
  {
    quote:
      "Los pedidos dejaron de perderse en WhatsApp. Cocina y caja ven lo mismo y cobramos con menos idas y vueltas.",
    name: "Federico Torres",
    role: "Socio · Restaurante y Catering",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative py-24 px-6">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background:
            "radial-gradient(circle at 60% 30%, var(--viridian-glow) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center mb-12">
        <motion.p
          className="text-viridian font-mono text-sm tracking-[0.2em] uppercase mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
        >
          Prueba social
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          Clientes que ya ordenaron sus operaciones
        </motion.h2>
      </div>

      <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, idx) => (
          <motion.blockquote
            key={t.name}
            className="bg-card border border-border/80 rounded-xl p-6 text-left shadow-[0_8px_26px_rgba(0,0,0,0.12)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
          >
            <p className="text-lg text-foreground leading-relaxed mb-4">{t.quote}</p>
            <footer className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{t.name}</span> · {t.role}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
