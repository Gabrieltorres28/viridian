"use client"

import { motion } from "motion/react"

const results = [
  {
    label: "Operación",
    value: "Menos fricción",
    detail: "Procesos más claros y menos dependencia de pasos manuales invisibles.",
  },
  {
    label: "Control",
    value: "Más trazabilidad",
    detail: "Estados, responsables y decisiones visibles en un sistema centralizado.",
  },
  {
    label: "Automatización",
    value: "Más capacidad",
    detail: "Recordatorios, validaciones y flujos automáticos donde más impacto generan.",
  },
  {
    label: "Escala",
    value: "Base más sólida",
    detail: "Una estructura digital que soporta crecimiento, nuevos procesos e IA aplicada.",
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
          Qué cambia cuando la operación deja de depender de parches
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          El resultado no es solo más orden administrativo. Es más capacidad de ejecución, mejor visibilidad y una
          base tecnológica más útil para operar, automatizar y escalar.
        </motion.p>
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
