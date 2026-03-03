"use client"

import { useRef, useEffect } from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

function CircuitField({ maskAt = "75% 35%", className = "" }: { maskAt?: string; className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        WebkitMaskImage: `radial-gradient(circle at ${maskAt}, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 78%)`,
        maskImage: `radial-gradient(circle at ${maskAt}, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 78%)`,
      }}
    >
      <svg
        className="w-full h-full opacity-[0.22]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="trk" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#40826D" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#4eda9e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#4eda9e" stopOpacity="0.1" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <pattern id="microgrid" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M0 60H120 M60 0V120 M0 0L120 120 M120 0L0 120"
              stroke="#40826D"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
            <circle cx="60" cy="60" r="2" fill="#4eda9e" fillOpacity="0.10" />
          </pattern>
        </defs>

        <rect width="1200" height="800" fill="url(#microgrid)" opacity="0.55" />

        <g stroke="url(#trk)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          <path d="M520 210H820Q900 210 960 250L1120 360" />
          <path d="M480 320H760Q840 320 900 360L1120 500" />
          <path d="M560 430H820Q900 430 980 470L1180 610" />
        </g>

        <g stroke="url(#trk)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
          <path d="M640 210V150Q640 120 670 120H760" />
          <path d="M720 210V260Q720 300 760 300H860" />
          <path d="M820 210V170Q820 140 850 140H940" />

          <path d="M600 320V280Q600 250 630 250H710" />
          <path d="M760 320V370Q760 410 800 410H900" />
          <path d="M880 360V310Q880 280 910 280H1000" />

          <path d="M640 430V480Q640 520 680 520H770" />
          <path d="M820 430V390Q820 360 850 360H930" />
          <path d="M980 470V430Q980 400 1010 400H1120" />
        </g>

        <g stroke="#40826D" strokeOpacity="0.22" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M930 140V100Q930 80 950 80H1040" />
          <path d="M860 300V260Q860 240 880 240H980" />
          <path d="M900 410V450Q900 470 920 470H1010" />
          <path d="M1120 360V320Q1120 300 1100 300H1040" />
          <path d="M1120 500V540Q1120 560 1100 560H1020" />
        </g>

        <g filter="url(#glow)">
          {[
            [520, 210, 6],
            [760, 320, 5],
            [900, 360, 5],
            [980, 470, 5],
            [1120, 360, 4],
            [1120, 500, 4],
            [680, 520, 4],
            [850, 140, 4],
            [1040, 300, 4],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#4eda9e" fillOpacity="0.55" className="vc-node" />
          ))}

          {[
            [760, 300],
            [880, 240],
            [930, 470],
            [1010, 400],
          ].map(([x, y], i) => (
            <rect
              key={`sq-${i}`}
              x={x - 4}
              y={y - 4}
              width="8"
              height="8"
              rx="2"
              fill="#4eda9e"
              fillOpacity="0.35"
              className="vc-node"
            />
          ))}
        </g>

        <g filter="url(#glow)" opacity="0.85">
          <path
            d="M520 210H820Q900 210 960 250L1120 360"
            stroke="#4eda9e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="16 30"
            className="vc-signal vc-delay0"
          />
          <path
            d="M480 320H760Q840 320 900 360L1120 500"
            stroke="#4eda9e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="16 30"
            className="vc-signal vc-delay1"
          />
          <path
            d="M560 430H820Q900 430 980 470L1180 610"
            stroke="#4eda9e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="16 30"
            className="vc-signal vc-delay2"
          />
        </g>
      </svg>
    </div>
  )
}

function MobileCircuitField() {
  return (
    <div
      className="absolute inset-0 pointer-events-none md:hidden"
      style={{
        WebkitMaskImage: "radial-gradient(circle at 50% 18%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 42%, rgba(0,0,0,0) 72%)",
        maskImage: "radial-gradient(circle at 50% 18%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 42%, rgba(0,0,0,0) 72%)",
      }}
    >
      <svg
        className="w-full h-full opacity-30"
        viewBox="0 0 440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="trk-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4eda9e" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#4eda9e" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glow-mobile" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g stroke="url(#trk-mobile)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-mobile)">
          <path d="M220 120 C210 160 188 210 170 250" />
          <path d="M220 120 C232 168 246 214 268 256" />
          <path d="M220 120 C214 186 214 248 214 310" />
        </g>

        <g stroke="#4eda9e" strokeOpacity="0.45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M214 310 C214 360 204 420 192 460" />
          <path d="M214 310 C232 360 246 418 256 450" />
        </g>

        <g fill="#4eda9e" filter="url(#glow-mobile)" opacity="0.65">
          {[{ x: 220, y: 120 }, { x: 192, y: 210 }, { x: 246, y: 214 }, { x: 214, y: 310 }].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={4} />
          ))}
        </g>
      </svg>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Main cinematic hero with GSAP pinned scroll
   ───────────────────────────────────────────── */
export function HeroCinematic() {
  /* Refs for GSAP targets */
  const wrapperRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const flightRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLParagraphElement>(null)
  const glowBgRef = useRef<HTMLDivElement>(null)
  const infoRefs = useRef<HTMLDivElement[]>([])
  const chipRefs = useRef<HTMLDivElement[]>([])
  const circuitRefs = useRef<SVGPathElement[]>([])
  const eagleWrapRef = useRef<HTMLDivElement>(null)
  const eagleMainRef = useRef<HTMLDivElement>(null)
  const eagleGlowRef = useRef<HTMLDivElement>(null)

  const infoPoints = [
    { title: "Implementacion guiada", body: "Blueprint + acompanamiento hasta el go-live." },
    { title: "Panel en tiempo real", body: "Operaciones, ventas y cobranzas en una sola vista." },
    { title: "Soporte cercano", body: "Equipo en Argentina, sin tickets eternos." },
  ]

  // Mantener arrays del tamaño correcto en cada render
  infoRefs.current.length = infoPoints.length
  chipRefs.current.length = 3
  circuitRefs.current.length = 3
  const parallaxMounted = useRef(false)
  /* Eagle flight intro */
  useEffect(() => {
    if (!flightRef.current) return
    const target = document.getElementById("nav-brand")
    const navLogo = document.getElementById("nav-logo")
    const navWordmark = document.getElementById("nav-wordmark")
    const navElements = [navLogo, navWordmark].filter(Boolean)

    gsap.set(navElements, { opacity: 1, scale: 1, transformOrigin: "left center" })
    gsap.set(flightRef.current, { opacity: 0, scale: 1, x: -260, y: 140, rotateZ: -4, transformOrigin: "center center" })
    gsap.set(glowBgRef.current, { opacity: 0.02 })
    gsap.set(infoRefs.current, { opacity: 0, y: 30, scale: 0.96 })
    gsap.set(chipRefs.current, { opacity: 0.08, y: 18 })
    gsap.set(circuitRefs.current, { strokeDasharray: 220, strokeDashoffset: 220, opacity: 0.08 })
    const centerOffset = target
      ? {
          x: target.getBoundingClientRect().left + target.getBoundingClientRect().width / 2 - window.innerWidth / 2,
          y: target.getBoundingClientRect().top + target.getBoundingClientRect().height / 2 - window.innerHeight / 2,
        }
      : { x: -120, y: -140 }

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
    tl.fromTo(
      flightRef.current,
      { opacity: 0, x: -260, y: 140, scale: 0.82, rotateZ: -8 },
      { opacity: 1, x: -80, y: 30, scale: 0.9, rotateZ: -2, duration: 0.8 },
    )
    tl.to(flightRef.current, {
      duration: 1.25,
      ease: "power2.inOut",
      motionPath: {
        path: [
          { x: -80, y: 30 },
          { x: 40, y: -10 },
          { x: centerOffset.x, y: centerOffset.y },
        ],
        curviness: 1.1,
      },
      scale: 0.42,
      opacity: 0.95,
    })
    tl.to(flightRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.1")
    tl.to(flightRef.current, { opacity: 0, duration: 0.4, delay: 0.05 })

    // Fallback: asegura que el logo quede visible aunque el timeline se interrumpa
    gsap.delayedCall(2.4, () => {
      gsap.to(navElements, { opacity: 1, scale: 1, duration: 0.5, ease: "power1.out" })
    })

    return () => {
      tl.kill()
    }
  }, [])

  // Parallax mouse pseudo-3D
  useEffect(() => {
    if (parallaxMounted.current) return
    parallaxMounted.current = true
    if (window.matchMedia("(max-width: 767px)").matches) return

    const el = eagleWrapRef.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window
      const nx = (e.clientX / w) * 2 - 1
      const ny = (e.clientY / h) * 2 - 1

      gsap.to(el, {
        rotateY: nx * 8,
        rotateX: -ny * 6,
        duration: 0.35,
        ease: "power2.out",
      })
      if (eagleMainRef.current) {
        gsap.to(eagleMainRef.current, {
          x: nx * 10,
          y: ny * 8,
          duration: 0.35,
          ease: "power2.out",
        })
      }
      if (eagleGlowRef.current) {
        gsap.to(eagleGlowRef.current, {
          x: nx * 16,
          y: ny * 14,
          duration: 0.45,
          ease: "power2.out",
        })
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  /* GSAP ScrollTrigger timeline (pinned hero) */
  useEffect(() => {
    let mm: gsap.MatchMedia | null = null
    let chipFloatTween: gsap.core.Tween | null = null

    const ctx = gsap.context(() => {
      const createTimeline = ({ endPercent, isMobile }: { endPercent: number; isMobile: boolean }) => {
        /* Initial states */
        gsap.set([line1Ref.current, line2Ref.current, subtextRef.current, ctaRef.current, tagRef.current], {
          opacity: 0,
          y: 40,
        })
        gsap.set(flightRef.current, { opacity: 0, scale: 1, x: 0, y: 0, rotateZ: 0, transformOrigin: "center center" })
        gsap.set(glowBgRef.current, { opacity: 0.03 })
        if (!isMobile) {
          gsap.set(infoRefs.current, { opacity: 0, y: 30, scale: 0.96 })
          gsap.set(chipRefs.current, { opacity: 0.08, y: 18 })
        } else {
          gsap.set(chipRefs.current, { opacity: 0 })
        }

        /* Main pinned timeline */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: `+=${endPercent}%`,
            pin: heroRef.current,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        /* Phase 1: Águila aparece + titular línea 1 (0% -> 35%) */
        tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.08, ease: "power2.out" }, 0)

        tl.to(
          flightRef.current,
          {
            opacity: 1,
            y: isMobile ? 4 : 10,
            scale: isMobile ? 1 : 1.05,
            duration: 0.4,
            ease: "power2.out",
          },
          0.04,
        )

        // Headline line 1
        tl.to(line1Ref.current, {
          opacity: 1,
          y: 0,
          duration: 0.15,
          ease: "power2.out",
        }, 0.1)

        /* Phase 2: Eagle crosses + headline line 2 (35% -> 65%) */
        // Vuelo lateral (acompaña la lectura)
        if (isMobile) {
          tl.to(
            flightRef.current,
            {
              y: 14,
              rotateY: -3,
              rotateZ: -1.5,
              duration: 0.65,
              ease: "sine.inOut",
              scale: 1.02,
            },
            0.28,
          )
        } else {
          tl.to(
            flightRef.current,
            {
              motionPath: {
                path: [
                  { x: -60, y: -12 },
                  { x: -120, y: -26 },
                  { x: -180, y: 4 },
                ],
                curviness: 1.2,
              },
              duration: 0.7,
              ease: "power1.inOut",
              scale: 0.9,
              rotateZ: -2,
            },
            0.32,
          )
        }

        // Headline line 2 reveal
        tl.to(line2Ref.current, {
          opacity: 1,
          y: 0,
          duration: 0.15,
          ease: "power2.out",
        }, 0.4)

        // Info points cascade + enciende chips conforme avanza
        if (!isMobile) {
          tl.to(infoRefs.current[0], { opacity: 1, y: 0, scale: 1, duration: 0.22, ease: "power2.out" }, 0.3)
          tl.to(infoRefs.current[1], { opacity: 1, y: 0, scale: 1, duration: 0.22, ease: "power2.out" }, 0.44)
          tl.to(infoRefs.current[2], { opacity: 1, y: 0, scale: 1, duration: 0.22, ease: "power2.out" }, 0.58)
          tl.to(chipRefs.current, { opacity: 0.35, y: 0, duration: 0.32, stagger: 0.08, ease: "power1.out" }, 0.34)
          // Circuitos se dibujan cuando el águila pasa
          tl.to(
            circuitRefs.current,
            {
              strokeDashoffset: 0,
              opacity: 0.22,
              duration: 0.55,
              stagger: 0.1,
              ease: "power1.out",
            },
            0.58,
          )
          tl.to(
            circuitRefs.current,
            {
              opacity: 0.3,
              duration: 0.12,
              stagger: 0.06,
              ease: "power2.out",
            },
            0.95,
          )
          tl.to(
            circuitRefs.current,
            {
              opacity: 0.18,
              duration: 0.2,
              stagger: 0.06,
              ease: "power2.out",
            },
            1.08,
          )
        } else {
          tl.to(
            flightRef.current,
            {
              y: 26,
              rotateY: 3,
              rotateZ: 1,
              scale: 1.04,
              duration: 0.55,
              ease: "power1.inOut",
            },
            0.68,
          )
        }

        /* Phase 3: Plano descendente + CTA (65% -> 100%) */
        if (!isMobile) {
          tl.to(
            flightRef.current,
            {
              motionPath: {
                path: [
                  { x: -180, y: 4 },
                  { x: -120, y: 36 },
                  { x: -58, y: 58 },
                ],
                curviness: 1.1,
              },
              rotateZ: 2,
              scale: 0.94,
              duration: 0.5,
            },
            0.65,
          )
        }

        // Background glow intensifies
        tl.to(
          glowBgRef.current,
          {
            opacity: isMobile ? 0.08 : 0.06,
            duration: 0.35,
          },
          0.65,
        )

        // Subtext + CTA reveal
        tl.to(
          subtextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.15,
            ease: "power2.out",
          },
          0.7,
        )

        tl.to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.15,
            ease: "power2.out",
          },
          0.78,
        )

        return tl
      }

      mm = ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          const tl = createTimeline({ endPercent: 250, isMobile: false })
          chipFloatTween = gsap.to(chipRefs.current, {
            y: 8,
            rotateZ: 4,
            repeat: -1,
            yoyo: true,
            duration: 3,
            ease: "sine.inOut",
            stagger: 0.12,
          })
          return () => {
            tl?.kill()
            chipFloatTween?.kill()
          }
        },
        "(max-width: 767px)": () => createTimeline({ endPercent: 160, isMobile: true }),
      })
    }, wrapperRef)

    return () => {
      chipFloatTween?.kill()
      mm?.revert()
      ctx.revert()
    }
  }, [])

  return (
    <div ref={wrapperRef} className="relative overflow-hidden">
      <section
        ref={heroRef}
        className="relative h-[100svh] md:h-screen w-full overflow-hidden bg-background pt-[84px] md:pt-0 pb-12 md:pb-0"
        style={{ perspective: "1200px" }}
      >
        {/* === Background layers === */}

        {/* Circuit field directed to eagle */}
        <CircuitField maskAt="78% 30%" className="hidden md:block" />
        <MobileCircuitField />

        {/* Soft radial viridian glow */}
        <div
          ref={glowBgRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] md:w-[1100px] md:h-[1100px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, var(--viridian-glow) 0%, var(--viridian) 30%, transparent 70%)",
          }}
        />

        {/* Subtle vignette edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, var(--background) 100%)",
          }}
        />

        {/* Info markers that appear as el aguila comparte datos (solo desktop) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <div className="absolute left-[8%] top-[18%] w-[2px] h-[64%] bg-gradient-to-b from-viridian/50 via-viridian/20 to-transparent blur-[1px]" />
          {/* Circuitos que se dibujan al vuelo */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            {[
              "M1040 220 C1080 240 1120 260 1180 280",
              "M1040 240 C1090 300 1135 330 1180 360",
              "M1040 260 C1085 360 1135 420 1180 470",
            ].map((d, idx) => (
              <path
                key={d}
                ref={(el) => {
                  if (el) circuitRefs.current[idx] = el
                }}
                d={d}
                stroke="url(#circuit-stroke)"
                strokeWidth={2.2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.08}
              />
            ))}
            <defs>
              <linearGradient id="circuit-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4eda9e" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#4eda9e" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
          {infoPoints.map((point, idx) => (
            <div
              key={point.title}
              ref={(el) => {
                if (el) infoRefs.current[idx] = el
              }}
              className="absolute max-w-[75vw] md:max-w-xs rounded-2xl border border-viridian/30 bg-background/70 shadow-[0_25px_60px_rgba(0,0,0,0.25)] backdrop-blur-md p-4 text-left pointer-events-none"
              style={{
                top: `${20 + idx * 18}%`,
                left: idx % 2 === 0 ? "8%" : "16%",
              }}
            >
              <p className="hidden md:block text-xs font-mono uppercase tracking-[0.18em] text-viridian mb-1">
                {String(idx + 1).padStart(2, "0")} · Datos al vuelo
              </p>
              <p className="text-lg font-semibold text-foreground">{point.title}</p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{point.body}</p>
            </div>
          ))}
        </div>

        {/* Chips: reducir para evitar ruido (solo desktop) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {[...Array(3)].map((_, idx) => (
            <div
              key={`chip-${idx}`}
              ref={(el) => {
                if (el) chipRefs.current[idx] = el
              }}
              className="absolute w-14 h-14 rounded-2xl bg-gradient-to-br from-viridian/25 via-viridian/5 to-transparent blur-2xl"
              style={{
                top: `${18 + idx * 22}%`,
                right: `${10 + idx * 12}%`,
                filter: "drop-shadow(0 10px 26px rgba(64,130,109,0.22))",
              }}
            />
          ))}
        </div>

        {/* Sprite del águila real animada (pseudo-3D) */}
        <div
          ref={flightRef}
          className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[220px] md:top-[6%] md:right-[4%] md:left-auto md:translate-x-0 md:w-[420px] lg:w-[520px] pointer-events-none z-[60]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            ref={eagleWrapRef}
            className="relative w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              ref={eagleGlowRef}
              className="absolute -inset-6 rounded-[32px] blur-xl md:blur-2xl"
              style={{
                background: "radial-gradient(circle at 40% 40%, rgba(78,218,158,0.22), transparent 60%)",
                transform: "translateZ(-40px)",
                opacity: 0.9,
              }}
            />
            <div ref={eagleMainRef} style={{ transform: "translateZ(30px)" }}>
              <img
                src="/eagle-real.png"
                alt="Águila Viridian"
                className="w-full h-auto select-none"
                width={520}
                height={220}
              />
            </div>
          </div>
        </div>

        {/* === Content === */}
        <div className="relative z-10 flex h-full flex-col px-6 pb-6 md:pb-12">
          <div className="flex-1 flex flex-col items-center justify-center text-center pt-[220px] sm:pt-[240px] md:pt-0">
            {/* Tag */}
            <p
              ref={tagRef}
              className="text-viridian font-mono text-sm tracking-[0.2em] uppercase mb-8"
            >
              Viridian Core
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              <span ref={line1Ref} className="block text-balance">
                Tu negocio no necesita m&aacute;s esfuerzo.
              </span>
              <span ref={line2Ref} className="block text-viridian mt-2 text-balance">
                Necesita un sistema.
              </span>
            </h1>

            {/* Subtext */}
            <p
              ref={subtextRef}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Sistemas web de gesti&oacute;n para negocios en Argentina.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 mobile-float w-full"
            >
              <a
                href="#demos"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 text-foreground font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(78,218,158,0.35)]"
                style={{
                  background: "linear-gradient(135deg, rgba(78,218,158,0.95) 0%, rgba(47,143,102,0.92) 50%, rgba(23,77,58,0.9) 100%)",
                }}
              >
                Ver demos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/543751471708"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 text-foreground font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_0_24px_rgba(78,218,158,0.25)]"
                style={{
                  background: "linear-gradient(135deg, rgba(23,77,58,0.85) 0%, rgba(47,143,102,0.85) 50%, rgba(78,218,158,0.9) 100%)",
                  border: "1px solid rgba(78,218,158,0.25)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>
    </div>
  )
}
