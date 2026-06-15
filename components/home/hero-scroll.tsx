"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Icon } from "@/components/ui/icon"

// ── Canvas dot grid ─────────────────────────────────────────
const DOT_RGB = "99, 85, 220"
const SPACING = 36
const SPOTLIGHT_RADIUS = 200
const BASE_DOT = 1.2
const WAVE_SPEED = 0.016

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}
function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v))
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}
function reveal(
  el: HTMLElement | null,
  p: number,
  lo: number,
  hi: number,
  dy = 44,
  blur = 16
) {
  if (!el) return
  const t = easeInOutCubic(clamp((p - lo) / (hi - lo), 0, 1))
  el.style.opacity = `${t}`
  el.style.transform = `translateY(${lerp(dy, 0, t)}px)`
  if (blur > 0) el.style.filter = `blur(${lerp(blur, 0, t)}px)`
}

export function HeroScroll() {
  const outerRef    = useRef<HTMLDivElement>(null)
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const mouseRef    = useRef({ x: -9999, y: -9999 })
  const rafRef      = useRef<number>(0)
  const timeRef     = useRef(0)

  // animated element refs
  const badgeRef    = useRef<HTMLDivElement>(null)
  const w0Ref       = useRef<HTMLDivElement>(null)
  const w1Ref       = useRef<HTMLDivElement>(null)
  const w2Ref       = useRef<HTMLDivElement>(null)
  const subRef      = useRef<HTMLDivElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const hintRef     = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const orb1Ref     = useRef<HTMLDivElement>(null)
  const orb2Ref     = useRef<HTMLDivElement>(null)

  // ── Canvas animation ────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }
    resize()

    const sticky = canvas.closest(".hero-sticky") as HTMLElement | null
    const onMove  = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }

    sticky?.addEventListener("mousemove", onMove)
    sticky?.addEventListener("mouseleave", onLeave)
    window.addEventListener("resize", resize)

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)
      const t = (timeRef.current += WAVE_SPEED)
      const { x: mx, y: my } = mouseRef.current
      const has = mx > 0 && mx < w && my > 0 && my < h
      const sx    = has ? mx : w / 2
      const sy    = has ? my : h * 0.42
      const pulse = has ? 1 : 0.35 + Math.sin(t * 3) * 0.15
      const cols  = Math.ceil(w / SPACING) + 2
      const rows  = Math.ceil(h / SPACING) + 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x    = i * SPACING - SPACING / 2
          const y    = j * SPACING - SPACING / 2
          const dist = Math.hypot(x - sx, y - sy)
          const spot = Math.max(0, 1 - dist / SPOTLIGHT_RADIUS) * pulse
          const wave = Math.sin(t + i * 0.4 + j * 0.4) * 0.5 + 0.5
          const wx   = Math.sin(t * 0.7 + i * 0.3) * 0.5 + 0.5
          const a    = Math.min(0.92, 0.08 + wave * 0.07 + wx * 0.04 + spot * 0.82)
          const r    = Math.min(5, BASE_DOT + wave * 0.5 + spot * 3.2)
          ctx.beginPath()
          ctx.arc(x, y, r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${DOT_RGB}, ${a})`
          ctx.fill()
        }
      }
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      sticky?.removeEventListener("mousemove", onMove)
      sticky?.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("resize", resize)
    }
  }, [])

  // ── Scroll-driven animation ─────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const outer = outerRef.current
      if (!outer) return
      const p = clamp(
        -outer.getBoundingClientRect().top / (outer.offsetHeight - window.innerHeight),
        0, 1
      )

      // progress bar
      if (progressRef.current) {
        progressRef.current.style.width   = `${p * 100}%`
        progressRef.current.style.opacity = p > 0.01 ? "1" : "0"
      }

      // content reveals
      reveal(badgeRef.current, p, 0.00, 0.07)
      reveal(w0Ref.current,    p, 0.07, 0.30)
      reveal(w1Ref.current,    p, 0.30, 0.54)
      reveal(w2Ref.current,    p, 0.54, 0.72, 44, 20)
      reveal(subRef.current,   p, 0.68, 0.84, 20, 0)
      reveal(ctaRef.current,   p, 0.78, 0.93, 18, 0)

      if (hintRef.current)
        hintRef.current.style.opacity = `${clamp(1 - p / 0.05, 0, 1)}`

      // orb parallax
      if (orb1Ref.current)
        orb1Ref.current.style.transform = `translateY(${lerp(0, -120, p)}px) scale(${lerp(1, 1.3, p)})`
      if (orb2Ref.current)
        orb2Ref.current.style.transform = `translateY(${lerp(0, 90, p)}px) scale(${lerp(1, 1.2, p)})`
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const hidden: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(44px)",
    filter: "blur(16px)",
  }

  return (
    <div ref={outerRef} className="relative" style={{ height: "250vh" }}>
      <div className="hero-sticky sticky top-0 h-screen overflow-hidden">

        {/* ── Background layers ────────────────────────────── */}
        <div className="absolute inset-0 bg-background" />

        {/* Grain noise */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.038]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "300px 300px",
          }}
        />

        {/* Orb 1 — top-left */}
        <div
          ref={orb1Ref}
          className="pointer-events-none absolute -left-40 -top-40 h-[800px] w-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.48 0.23 284 / 0.28) 0%, transparent 65%)",
            filter: "blur(90px)",
          }}
        />

        {/* Orb 2 — bottom-right */}
        <div
          ref={orb2Ref}
          className="pointer-events-none absolute -bottom-48 -right-20 h-[650px] w-[650px] rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.58 0.18 220 / 0.20) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />

        {/* Orb 3 — center diffuse */}
        <div
          className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 h-[320px] w-[900px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, oklch(0.44 0.18 284 / 0.09) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Canvas dot grid */}
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full z-[2]"
          aria-hidden
        />

        {/* Top radial glow */}
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background: "radial-gradient(ellipse 65% 42% at 50% 0%, oklch(0.45 0.18 284 / 0.13), transparent)",
          }}
        />

        {/* Bottom fade to bg */}
        <div
          className="pointer-events-none absolute bottom-0 inset-x-0 h-52 z-[4]"
          style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }}
        />

        {/* ── Content ──────────────────────────────────────── */}
        <div className="relative z-[5] flex h-full flex-col items-center justify-center px-6 pt-14 text-center">

          {/* Badge */}
          <div ref={badgeRef} style={hidden} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Sistema de diseño · v0.1.0
            </span>
          </div>

          {/* Headline — one word per reveal step */}
          <div className="mb-8 select-none">
            <div ref={w0Ref} style={hidden}>
              <span className="block font-bold tracking-tight leading-[1.06] text-foreground"
                style={{ fontSize: "clamp(2.6rem, 9vw, 5.6rem)" }}>
                Construye
              </span>
            </div>
            <div ref={w1Ref} style={hidden}>
              <span className="block font-bold tracking-tight leading-[1.06] text-foreground"
                style={{ fontSize: "clamp(2.6rem, 9vw, 5.6rem)" }}>
                más rápido
              </span>
            </div>
            <div ref={w2Ref} style={{ ...hidden, filter: "blur(20px)" }}>
              <span
                className="block font-bold tracking-tight leading-[1.06]"
                style={{
                  fontSize: "clamp(2.6rem, 9vw, 5.6rem)",
                  background: "linear-gradient(135deg, oklch(0.660 0.215 284), oklch(0.680 0.180 218))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                con Proteus DS
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <div ref={subRef} style={{ opacity: 0, transform: "translateY(20px)" }}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-[460px] leading-relaxed">
              54 componentes, foundations y guías de uso para product teams
              que se mueven rápido sin romper la consistencia.
            </p>
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3"
            style={{ opacity: 0, transform: "translateY(18px)" }}
          >
            <Link
              href="/getting-started"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-[0_0_32px_oklch(0.45_0.18_284/0.45)]"
            >
              Empezar
              <Icon name="arrow_forward" size={20} />
            </Link>
            <Link
              href="/components/button"
              className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:border-border"
            >
              Ver componentes
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="pointer-events-none absolute bottom-10 left-1/2 z-[5] -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/35">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/25 to-transparent" />
        </div>

        {/* Progress bar */}
        <div className="absolute top-0 inset-x-0 h-px z-[10] bg-border/20">
          <div
            ref={progressRef}
            className="h-full transition-none"
            style={{
              width: "0%",
              opacity: 0,
              background:
                "linear-gradient(90deg, oklch(0.55 0.22 284), oklch(0.66 0.18 220))",
            }}
          />
        </div>
      </div>
    </div>
  )
}
