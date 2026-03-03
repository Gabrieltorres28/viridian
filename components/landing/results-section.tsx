"use client"

import { motion } from "motion/react"

const results = [
  {
    label: "Ahorro de tiempo",
    value: "Menos pasos manuales",
    detail: "Registro y seguimiento en un solo flujo claro.",
  },
  {
    label: "Errores operativos",
    value: "Errores más visibles",
    detail: "Validaciones y campos obligatorios para datos críticos.",
  },
  {
    label: "Cobros al día",
    value: "Cobros priorizados",
    detail: "Alertas y seguimiento de vencimientos en un panel.",
  },
  {
    label: "Visibilidad",
    value: "Visibilidad diaria",
    detail: "Tablero claro de stock y estado de pedidos.",
  },
]

export function ResultsSection() {
  return (
    <section id="resultados" className="relative py-28 px-6">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, var(--viridian-glow) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center mb-14">
        <motion.p
          className="text-viridian font-mono text-sm tracking-[0.2em] uppercase mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Resultados típicos
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          Qué suele pasar cuando ordenamos cobros, stock y clientes
        </motion.h2>
      </div>

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {results.map((item, idx) => (
          <motion.div
            key={item.label}
            className="bg-card border border-border/80 rounded-xl p-6 text-left shadow-[0_8px_28px_rgba(0,0,0,0.18)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
          >
            <p className="text-sm uppercase tracking-[0.14em] text-viridian font-mono mb-3">{item.label}</p>
            <p className="text-3xl font-bold text-foreground mb-2">{item.value}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
