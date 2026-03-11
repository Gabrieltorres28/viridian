"use client"

import { useRef, useEffect, type MutableRefObject } from "react"
import { ArrowRight, Dot, MessageCircle } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

function CircuitField({ maskAt = "75% 35%", className = "" }: { maskAt?: string; className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        WebkitMaskImage: `radial-gradient(circle at ${maskAt}, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 32%, rgba(0,0,0,0) 58%)`,
        maskImage: `radial-gradient(circle at ${maskAt}, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 32%, rgba(0,0,0,0) 58%)`,
      }}
    >
      <svg
        className="w-full h-full opacity-[0.16] blur-[0.6px]"
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

        <rect width="1200" height="800" fill="url(#microgrid)" opacity="0.38" />

        <g stroke="url(#trk)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.42">
          <path d="M520 210H820Q900 210 960 250L1120 360" />
          <path d="M560 430H820Q900 430 980 470L1180 610" />
        </g>

        <g stroke="url(#trk)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" className="blur-[0.4px]">
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

        <g stroke="#40826D" strokeOpacity="0.12" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="blur-[0.4px]">
          <path d="M930 140V100Q930 80 950 80H1040" />
          <path d="M860 300V260Q860 240 880 240H980" />
          <path d="M900 410V450Q900 470 920 470H1010" />
          <path d="M1120 360V320Q1120 300 1100 300H1040" />
          <path d="M1120 500V540Q1120 560 1100 560H1020" />
        </g>

        <g filter="url(#glow)">
          {[
            [520, 210, 6],
            [900, 360, 5],
            [980, 470, 5],
            [680, 520, 4],
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

        <g filter="url(#glow)" opacity="0.55" className="blur-[0.4px]">
          <path
            d="M520 210H820Q900 210 960 250L1120 360"
            stroke="#4eda9e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="16 30"
            className="vc-signal vc-delay0"
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
        WebkitMaskImage: "radial-gradient(circle at 50% 18%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 34%, rgba(0,0,0,0) 60%)",
        maskImage: "radial-gradient(circle at 50% 18%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 34%, rgba(0,0,0,0) 60%)",
      }}
    >
      <svg
        className="w-full h-full opacity-22 blur-[0.5px]"
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

function MobileCircuitBurst({
  pathsRef,
  signalsRef,
}: {
  pathsRef: MutableRefObject<SVGPathElement[]>
  signalsRef: MutableRefObject<SVGPathElement[]>
}) {
  const basePaths = [
    "M290 110 C330 120 360 145 410 160",
    "M290 125 C335 150 360 180 410 220",
    "M290 140 C330 190 360 230 410 280",
    "M290 155 C325 230 350 280 400 340",
  ]

  const signalPaths = [
    "M290 118 C330 136 358 168 408 208",
    "M290 148 C330 206 352 248 398 300",
  ]

  return (
    <svg
      className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[360px] md:hidden pointer-events-none z-5"
      viewBox="0 0 430 420"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{
        opacity: 0.24,
        WebkitMaskImage: "radial-gradient(circle at 50% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 42%, rgba(0,0,0,0) 70%)",
        maskImage: "radial-gradient(circle at 50% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 42%, rgba(0,0,0,0) 70%)",
      }}
    >
      <defs>
        <linearGradient id="burst-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4eda9e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4eda9e" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#burst-stroke)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {basePaths.map((d, idx) => (
          <path
            key={d}
            d={d}
            ref={(el) => {
              if (el) pathsRef.current[idx] = el
            }}
            strokeDasharray={240}
            strokeDashoffset={240}
          />
        ))}
      </g>

      <g fill="none" stroke="#4eda9e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {signalPaths.map((d, idx) => (
          <path
            key={`sg-${idx}`}
            d={d}
            ref={(el) => {
              if (el) signalsRef.current[idx] = el
            }}
            strokeDasharray="160 60"
            strokeDashoffset={160}
            opacity={0.35}
            className="vc-signal"
          />
        ))}
      </g>

      <g fill="#4eda9e">
        {[
          [410, 160],
          [410, 220],
          [410, 280],
          [400, 340],
        ].map(([x, y], idx) => (
          <circle key={`nd-${idx}`} cx={x} cy={y} r={6} fillOpacity={0.65} />
        ))}
      </g>
    </svg>
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
  const line2Ref = useRef<HTMLDivElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLParagraphElement>(null)
  const glowBgRef = useRef<HTMLDivElement>(null)
  const chipRefs = useRef<HTMLDivElement[]>([])
  const circuitRefs = useRef<SVGPathElement[]>([])
  const circuitSignalRefs = useRef<SVGPathElement[]>([])
  const mobilePathsRef = useRef<SVGPathElement[]>([])
  const mobileSignalsRef = useRef<SVGPathElement[]>([])
  const eagleWrapRef = useRef<HTMLDivElement>(null)
  const eagleMainRef = useRef<HTMLDivElement>(null)
  const eagleGlowRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useRef(false)
  const typicalResults = [
    { title: "Más control", desc: "Procesos, estados y responsables visibles en un solo sistema." },
    { title: "Más velocidad", desc: "Menos tareas manuales y menos tiempo perdido entre herramientas sueltas." },
    { title: "Más criterio", desc: "Datos, automatización e inteligencia aplicada para ejecutar mejor." },
  ]

  // Mantener arrays del tamaño correcto en cada render
  chipRefs.current.length = 3
  circuitRefs.current.length = 3
  circuitSignalRefs.current.length = 0
  mobilePathsRef.current.length = 4
  mobileSignalsRef.current.length = 2
  const parallaxMounted = useRef(false)

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])
  /* Eagle flight intro */
  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return
    if (!flightRef.current) return
    const target = document.getElementById("nav-brand")
    const navLogo = document.getElementById("nav-logo")
    const navWordmark = document.getElementById("nav-wordmark")
    const navElements = [navLogo, navWordmark].filter(Boolean)

    gsap.set(navElements, { opacity: 1, scale: 1, transformOrigin: "left center" })
    gsap.set(flightRef.current, { opacity: 0, scale: 1, x: -260, y: 140, rotateZ: -4, transformOrigin: "center center" })
    gsap.set(glowBgRef.current, { opacity: 0.012 })
    gsap.set(chipRefs.current, { opacity: 0.08, y: 18 })
        gsap.set(circuitRefs.current, { strokeDasharray: 260, strokeDashoffset: 260, opacity: 0.08 })
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
      const setBaseState = () => {
        gsap.set([line1Ref.current, line2Ref.current, subtextRef.current, ctaRef.current, tagRef.current], {
          opacity: 0,
          y: 40,
        })
        gsap.set(flightRef.current, {
          opacity: 0,
          scale: 1,
          x: 0,
          y: 0,
          rotateZ: 0,
          rotateY: 0,
          transformOrigin: "center center",
        })
        gsap.set(glowBgRef.current, { opacity: 0.015 })
        gsap.set(circuitSignalRefs.current, { strokeDasharray: 260, strokeDashoffset: 260, opacity: 0 })
      }

      const buildDesktopTimeline = () => {
        setBaseState()
        gsap.set(chipRefs.current, { opacity: 0.08, y: 18 })
        gsap.set(circuitRefs.current, { strokeDasharray: 260, strokeDashoffset: 260, opacity: 0.06 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=240%",
            pin: heroRef.current,
            scrub: 1.08,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.08, ease: "power2.out" }, 0)
        tl.fromTo(
          flightRef.current,
          { opacity: 0, y: -10, x: -16, scale: 0.96, rotateZ: -4 },
          { opacity: 1, y: 6, x: -8, scale: 1.05, rotateZ: -1, duration: 0.38, ease: "power2.out" },
          0.04,
        )
        tl.to(
          line1Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.18,
            ease: "power2.out",
          },
          0.12,
        )

        tl.to(
          flightRef.current,
          {
            motionPath: {
              path: [
                { x: -18, y: -6 },
                { x: -24, y: 12 },
                { x: -18, y: 26 },
              ],
              curviness: 1.1,
            },
            rotateZ: 1,
            scale: 0.98,
            duration: 0.68,
            ease: "sine.inOut",
          },
          0.32,
        )

        tl.to(
          line2Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.18,
            ease: "power2.out",
          },
          0.7,
        )

        tl.to(
          circuitRefs.current,
          {
            strokeDashoffset: 0,
            opacity: 0.14,
            duration: 0.6,
            stagger: 0.1,
            ease: "power1.out",
          },
          0.46,
        )
        // signals removidos para limpiar laterales
        tl.to(
          circuitRefs.current,
          {
            opacity: 0.16,
            duration: 0.24,
            stagger: 0.1,
            ease: "sine.out",
          },
          1,
        )
        tl.to(
          [eagleGlowRef.current, flightRef.current],
          {
            opacity: 0.75,
            filter: "drop-shadow(0 0 18px rgba(255,232,120,0.35)) brightness(1.03)",
            duration: 0.4,
            ease: "power2.out",
          },
          0.62,
        )

        tl.to(
          glowBgRef.current,
          {
            opacity: 0.06,
            duration: 0.32,
            ease: "power1.out",
          },
          0.52,
        )

        tl.to(
          subtextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.16,
            ease: "power2.out",
          },
          0.64,
        )

        tl.to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.16,
            ease: "power2.out",
          },
          0.74,
        )

        return tl
      }

      const buildMobileTimeline = () => {
        setBaseState()
        gsap.set(chipRefs.current, { opacity: 0 })
        gsap.set(mobilePathsRef.current, { strokeDashoffset: 240, opacity: 0.18 })
        gsap.set(mobileSignalsRef.current, { strokeDashoffset: 160, opacity: 0.12 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=185%",
            pin: heroRef.current,
            scrub: 1.05,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, 0)

        tl.fromTo(
          flightRef.current,
          { opacity: 0, scale: 0.9, y: 22, x: 0, rotateZ: -6, rotateY: -6 },
          { opacity: 0.9, scale: 1.02, y: 4, x: 0, rotateZ: -3, rotateY: -4, duration: 0.25, ease: "power2.out" },
          0.04,
        )

        tl.to(
          line1Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.18,
            ease: "power2.out",
          },
          0.12,
        )

        tl.to(
          flightRef.current,
          {
            x: 52,
            y: 8,
            rotateZ: -5,
            rotateY: -7,
            scale: 1.02,
            duration: 0.24,
            ease: "power1.inOut",
          },
          0.26,
        )
        tl.to(
          flightRef.current,
          {
            x: -46,
            y: 34,
            rotateZ: 4,
            rotateY: 7,
            scale: 0.97,
            duration: 0.38,
            ease: "sine.inOut",
          },
          0.46,
        )

        tl.to(
          mobilePathsRef.current,
          {
            strokeDashoffset: 0,
            opacity: 0.32,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          0.3,
        )
        tl.fromTo(
          mobileSignalsRef.current,
          { strokeDashoffset: 160, opacity: 0 },
          {
            strokeDashoffset: -240,
            opacity: 0.55,
            duration: 0.58,
            stagger: 0.08,
            ease: "none",
          },
          0.38,
        )
        tl.to(
          mobileSignalsRef.current,
          {
            opacity: 0.18,
            duration: 0.28,
          },
          0.98,
        )

        tl.to(
          line2Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.18,
            ease: "power2.out",
          },
          0.64,
        )

        tl.to(
          flightRef.current,
          {
            x: -6,
            y: 48,
            rotateZ: 0,
            rotateY: 0,
            scale: 0.98,
            duration: 0.32,
            ease: "power2.out",
          },
          0.88,
        )

        tl.to(
          glowBgRef.current,
          {
            opacity: 0.06,
            duration: 0.32,
          },
          0.62,
        )

        tl.to(
          subtextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.16,
            ease: "power2.out",
          },
          0.58,
        )

        tl.to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.16,
            ease: "power2.out",
          },
          0.7,
        )

        return tl
      }

      mm = ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          const tl = buildDesktopTimeline()
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
        "(max-width: 767px)": () => buildMobileTimeline(),
      })
    }, wrapperRef)

    return () => {
      chipFloatTween?.kill()
      mm?.revert()
      ctx.revert()
    }
  }, [])

  return (
    <div ref={wrapperRef} className="relative overflow-hidden overflow-x-hidden">
      <section
        ref={heroRef}
        className="relative min-h-[100svh] md:h-screen w-full overflow-hidden bg-background pt-[64px] sm:pt-[72px] md:pt-0 pb-24 sm:pb-28 md:pb-0"
        style={{ perspective: "1200px" }}
      >
        {/* === Background layers === */}

        {/* Circuit field directed to eagle */}
        <CircuitField maskAt="78% 30%" className="hidden md:block z-0" />
        {/* Mobile burst-only circuits to avoid visual noise */}
        <svg
          className="absolute inset-0 hidden md:block pointer-events-none z-5"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {[
            "M980 180 C1030 220 1090 260 1160 300",
            "M980 230 C1040 290 1100 330 1160 380",
            "M980 280 C1040 360 1100 430 1160 500",
          ].map((d, idx) => (
            <path
              key={`dc-${idx}`}
              ref={(el) => {
                if (el) circuitRefs.current[idx] = el
              }}
              d={d}
              stroke="url(#desktop-circuit-stroke)"
              strokeWidth={2.2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.08}
            />
          ))}
          <defs>
            <linearGradient id="desktop-circuit-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4eda9e" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#4eda9e" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
        {/* Mobile burst-only circuits to avoid visual noise */}
        <MobileCircuitBurst pathsRef={mobilePathsRef} signalsRef={mobileSignalsRef} />

        {/* Dark vignette to keep headline area clean */}
        <div
          className="absolute inset-0 pointer-events-none z-5"
          style={{
            background:
              "radial-gradient(circle at 60% 38%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 32%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.65) 78%)",
          }}
        />

        {/* Soft radial viridian glow */}
        <div
          ref={glowBgRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] md:w-[1100px] md:h-[1100px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, var(--viridian-glow) 0%, var(--viridian) 30%, transparent 70%)",
          }}
        />

        {/* Subtle vignette edges */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, var(--background) 100%)",
          }}
        />

        {/* Chips: reducir para evitar ruido (solo desktop) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block z-5">
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
          className="absolute top-[48px] sm:top-[60px] left-1/2 -translate-x-1/2 w-[200px] sm:w-[220px] md:top-[6%] md:right-[4%] md:left-auto md:translate-x-0 md:w-[380px] lg:w-[480px] pointer-events-none z-10"
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
                background: "radial-gradient(circle at 40% 40%, rgba(78,218,158,0.18), transparent 60%)",
                transform: "translateZ(-40px)",
                opacity: 0.6,
              }}
            />
            <div ref={eagleMainRef} style={{ transform: "translateZ(30px)" }}>
              <img
                src="/eagle-real.png"
                alt="Águila Viridian"
                className="w-full h-auto select-none opacity-80 md:opacity-90"
                width={520}
                height={220}
              />
            </div>
          </div>
        </div>

        {/* === Content === */}
        <div className="relative z-20 isolate flex min-h-[100svh] md:h-full flex-col px-6 pb-8 md:pb-12">
          <div className="flex-1 flex flex-col items-center text-center pt-[280px] sm:pt-[320px] md:pt-0 md:justify-center gap-4">
            {/* Tag */}
            <p
              ref={tagRef}
              className="inline-flex items-center rounded-full border border-viridian/30 bg-viridian/10 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-viridian shadow-[0_0_24px_rgba(78,218,158,0.12)] backdrop-blur-sm sm:text-xs md:text-sm mb-6"
            >
              SOFTWARE, AUTOMATIZACIÓN E INTELIGENCIA APLICADA
            </p>

            {/* Headline */}
            <h1 className="text-[clamp(2.3rem,6vw,3.4rem)] md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight max-w-3xl">
              <span ref={line1Ref} className="block text-balance">
                Convertimos caos operativo en infraestructura digital usable.
              </span>
            </h1>

            {/* Subtext */}
            <p
              ref={subtextRef}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Viridian Core diseña sistemas digitales, automatizaciones y herramientas inteligentes para ordenar procesos reales, dar trazabilidad y ejecutar con más control.
            </p>

            {/* Pain point line */}
            <div ref={line2Ref} className="mt-4 text-viridian text-xl md:text-2xl font-semibold text-balance">
              Procesos dispersos, decisiones a ciegas y trabajo manual {"->"} un sistema claro, centralizado y escalable.
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 mobile-float w-full">
              <a
                href="https://wa.me/543751471708?text=Hola%20quisiera%20una%20demo%20de%20Viridian%20Core&source=landing&utm_source=landing&utm_medium=hero_cta"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 text-foreground font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(78,218,158,0.35)]"
                style={{
                  background: "linear-gradient(135deg, rgba(78,218,158,0.95) 0%, rgba(47,143,102,0.92) 50%, rgba(23,77,58,0.9) 100%)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar demo
              </a>
              <a
                href="#demos"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 text-foreground font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_0_24px_rgba(78,218,158,0.25)]"
                style={{
                  background: "linear-gradient(135deg, rgba(23,77,58,0.85) 0%, rgba(47,143,102,0.85) 50%, rgba(78,218,158,0.9) 100%)",
                  border: "1px solid rgba(78,218,158,0.25)",
                }}
              >
                Ver sistemas funcionando
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="text-sm text-white/70 mt-2">
              No hacemos software decorativo. Construimos sistemas utilizables para operaciones reales.
            </p>

            {/* Resultados típicos compactos */}
            <div className="mt-6 w-full max-w-3xl mx-auto">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-viridian font-mono mb-2">
                <Dot className="w-4 h-4" />
                Resultados típicos
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {typicalResults.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 flex items-start gap-3 text-left"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-viridian/80" />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-white/75 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>
    </div>
  )
}
