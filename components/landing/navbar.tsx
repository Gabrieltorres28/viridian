"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Oferta", href: "#soluciones" },
  { label: "Demos", href: "#demos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50 border-b border-[#d8e7dc] bg-[linear-gradient(90deg,#eef4ec_0%,#e4eee5_52%,#dae7de_100%)] shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="flex h-[88px] w-full items-center justify-between px-3 sm:h-[96px] sm:px-0.5 md:h-[112px] md:px-1 lg:px-2">
        <a id="nav-brand" href="#" className="flex min-w-0 items-center">
          <span
            className="group relative block h-[52px] w-[182px] shrink-0 overflow-hidden sm:h-[84px] sm:w-[372px] md:h-[96px] md:w-[434px] lg:h-[104px] lg:w-[486px]"
          >
            <Image
              id="nav-logo"
              src="/logo-oficial.png"
              alt="Viridian Core"
              fill
              sizes="(min-width: 1024px) 486px, (min-width: 768px) 434px, (min-width: 640px) 372px, 182px"
              className="scale-[1.08] object-cover object-[left_43%] sm:scale-[1.14] sm:object-[left_42%]"
              priority
            />
            <span className="pointer-events-none absolute inset-y-[14%] left-[-24%] w-[24%] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.12)_30%,rgba(78,218,158,0.55)_52%,rgba(255,255,255,0.22)_72%,transparent_100%)] blur-[2px] circuit-sweep" />
            <span className="pointer-events-none absolute inset-y-[22%] left-[-18%] w-[18%] bg-[linear-gradient(90deg,transparent_0%,rgba(78,218,158,0.0)_20%,rgba(78,218,158,0.9)_55%,rgba(255,255,255,0.0)_100%)] opacity-80 blur-[10px] circuit-sweep-soft" />
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-black/62 transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/543751471708?text=Hola%2C%20quiero%20evaluar%20un%20sistema%20para%20mi%20operaci%C3%B3n."
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-xl border border-black/8 bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#111]"
          >
            Solicitar propuesta
          </a>
        </div>

        <button
          className="mr-3 rounded-full border border-black/10 bg-white/55 p-2 text-black backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            className="fixed inset-0 top-[88px] z-40 bg-[rgba(14,20,16,0.18)] backdrop-blur-md sm:top-[96px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
          />

          <motion.div
            className="absolute inset-x-0 top-full z-50 px-3 pb-3 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24 }}
          >
            <div className="overflow-hidden rounded-[28px] border border-white/30 bg-[linear-gradient(180deg,rgba(245,249,243,0.72)_0%,rgba(232,240,233,0.64)_100%)] shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
              <div className="border-b border-black/6 px-5 py-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-viridian">Navegación</p>
                <p className="mt-2 text-sm text-black/62">Accedé rápido a la oferta, demos y contacto.</p>
              </div>

              <div className="flex flex-col gap-1 p-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-black/72 transition-colors hover:bg-black/[0.04] hover:text-black"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/543751471708?text=Hola%2C%20quiero%20evaluar%20un%20sistema%20para%20mi%20operaci%C3%B3n."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 rounded-2xl border border-black/8 bg-black px-4 py-3 text-center text-sm font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Solicitar propuesta
                </a>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </motion.nav>
  )
}
