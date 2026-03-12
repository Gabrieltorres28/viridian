"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Casos reales", href: "#demos" },
  { label: "Qué resolvemos", href: "#soluciones" },
  { label: "Diagnóstico", href: "#ops-ai" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState(links[0].href)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollState = () => {
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight

      setScrolled(scrollY > 16)
      setScrollProgress(maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0)
    }

    updateScrollState()
    window.addEventListener("scroll", updateScrollState, { passive: true })

    return () => window.removeEventListener("scroll", updateScrollState)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActiveHref(`#${visibleEntry.target.id}`)
        }
      },
      {
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <motion.div
        className="relative border-b"
        animate={{
          borderColor: scrolled ? "rgba(216,231,220,0.55)" : "rgba(216,231,220,1)",
          backgroundColor: scrolled ? "rgba(238,244,236,0.78)" : "rgba(0,0,0,0)",
          boxShadow: scrolled ? "0 12px 30px rgba(0,0,0,0.10)" : "0 12px 30px rgba(0,0,0,0.08)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          backgroundImage: scrolled
            ? "linear-gradient(90deg,rgba(238,244,236,0.76)_0%,rgba(228,238,229,0.74)_52%,rgba(218,231,222,0.72)_100%)"
            : "linear-gradient(90deg,#eef4ec_0%,#e4eee5_52%,#dae7de_100%)",
        }}
      >
      <div className="flex h-[66px] w-full items-center justify-between px-3 sm:h-[84px] sm:px-1 md:h-[96px] md:px-1 lg:px-2">
        <a id="nav-brand" href="#" className="flex min-w-0 items-center">
          <span
            className="group relative block h-[41px] w-[154px] shrink-0 overflow-hidden sm:h-[72px] sm:w-[320px] md:h-[84px] md:w-[380px] lg:h-[92px] lg:w-[430px]"
          >
            <Image
              id="nav-logo"
              src="/logo-oficial.png"
              alt="Viridian Core"
              fill
              sizes="(min-width: 1024px) 430px, (min-width: 768px) 380px, (min-width: 640px) 320px, 154px"
              className="scale-[1.08] object-cover object-[left_43%] sm:scale-[1.14] sm:object-[left_42%]"
              priority
            />
            <span className="pointer-events-none absolute inset-y-[14%] left-[-24%] w-[24%] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.12)_30%,rgba(78,218,158,0.55)_52%,rgba(255,255,255,0.22)_72%,transparent_100%)] blur-[2px] circuit-sweep" />
            <span className="pointer-events-none absolute inset-y-[22%] left-[-18%] w-[18%] bg-[linear-gradient(90deg,transparent_0%,rgba(78,218,158,0.0)_20%,rgba(78,218,158,0.9)_55%,rgba(255,255,255,0.0)_100%)] opacity-80 blur-[10px] circuit-sweep-soft" />
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                activeHref === link.href ? "text-black" : "text-black/62 hover:text-black"
              }`}
            >
              {activeHref === link.href ? (
                <motion.span
                  layoutId="navbar-active-link"
                  className="absolute inset-0 -z-10 rounded-full border border-black/8 bg-white/65 shadow-[0_8px_18px_rgba(0,0,0,0.06)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/543751471708?text=Hola%2C%20quiero%20evaluar%20un%20sistema%20para%20mi%20operaci%C3%B3n."
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-xl border border-black/8 bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#111]"
          >
            Evaluar operación
          </a>
        </div>

        <button
          className="mr-0.5 inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#2f8f66]/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.44)_0%,rgba(241,247,242,0.34)_100%)] text-black/78 shadow-[0_6px_20px_rgba(64,130,109,0.08)] backdrop-blur-md md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <motion.span
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-[linear-gradient(90deg,#0f766e_0%,#34d399_45%,#99f6e4_100%)]"
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.12, ease: "linear" }}
      />
      </motion.div>

      {mobileOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            className="fixed inset-0 top-[66px] z-40 bg-[rgba(14,20,16,0.18)] backdrop-blur-md sm:top-[84px] md:hidden"
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
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#0b5d56]">Navegación</p>
                <p className="mt-2 text-sm text-black/62">Accedé rápido a casos, diagnóstico y contacto.</p>
              </div>

              <div className="flex flex-col gap-1 p-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeHref === link.href
                        ? "bg-black/[0.06] text-black"
                        : "text-black/72 hover:bg-black/[0.04] hover:text-black"
                    }`}
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
                  Evaluar operación
                </a>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </motion.nav>
  )
}
