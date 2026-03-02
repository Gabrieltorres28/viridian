"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proceso", href: "#proceso" },
  { label: "Demos", href: "#demos" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <motion.a
          id="nav-brand"
          href="#"
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(78,218,158,0.0)",
                "0 0 28px rgba(78,218,158,0.55)",
                "0 0 0px rgba(78,218,158,0.0)",
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="rounded-xl"
          >
            <Image
              id="nav-logo"
              src="/eagle-real.png"
              alt="Viridian Core"
              width={150}
              height={86}
              className="select-none"
              priority
            />
          </motion.div>
          <motion.div
            className="leading-tight"
            animate={{
              textShadow: [
                "0 0 0px rgba(78,218,158,0.0)",
                "0 0 14px rgba(78,218,158,0.35)",
                "0 0 0px rgba(78,218,158,0.0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.2 }}
          >
            <div id="nav-wordmark" className="text-lg font-semibold tracking-[0.12em] uppercase text-foreground">
              Viridian
            </div>
            <div className="text-sm font-semibold tracking-[0.3em] text-viridian uppercase">
              Core
            </div>
          </motion.div>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
          href="https://wa.me/543751471708"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground px-5 py-2 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(78,218,158,0.3)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(78,218,158,0.95) 0%, rgba(47,143,102,0.92) 50%, rgba(23,77,58,0.9) 100%)",
            }}
          >
            Contactar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
            href="https://wa.me/543751471708"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center font-medium text-foreground px-5 py-2.5 rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(78,218,158,0.95) 0%, rgba(47,143,102,0.92) 50%, rgba(23,77,58,0.9) 100%)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Contactar
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
