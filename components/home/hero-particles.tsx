"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Icon } from "@/components/ui/icon"

const COUNT = 130
const REPEL_RADIUS = 110

interface Particle {
  x: number; y: number
  vx: number; vy: number
  radius: number; opacity: number
  speed: number; twinkle: number; twinkleSpeed: number
  isLarge: boolean
  r: number; g: number; b: number
}

function makeParticle(w: number, h: number): Particle {
  const isLarge = Math.random() < 0.08
  const t = Math.random()
  let r: number, g: number, b: number
  if (t < 0.35) {
    r = (160 + Math.random() * 30) | 0
    g = (140 + Math.random() * 30) | 0
    b = 255
  } else if (t < 0.65) {
    r = (120 + Math.random() * 40) | 0
    g = (130 + Math.random() * 40) | 0
    b = 255
  } else {
    r = (210 + Math.random() * 45) | 0
    g = (205 + Math.random() * 45) | 0
    b = 255
  }
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.09,
    radius: isLarge ? Math.random() * 2 + 1.5 : Math.random() * 0.9 + 0.2,
    opacity: isLarge ? Math.random() * 0.45 + 0.4 : Math.random() * 0.5 + 0.1,
    speed: Math.random() * 0.3 + 0.05,
    twinkle: Math.random() * Math.PI * 2,
    twinkleSpeed: Math.random() * 0.015 + 0.003,
    isLarge, r, g, b,
  }
}

export function HeroParticles() {
  const wrapRef   = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef  = useRef({ x: -9999, y: -9999 })
  const ptRef     = useRef<Particle[]>([])
  const rafRef    = useRef<number>(0)
  const tRef      = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap   = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const w = wrap.offsetWidth
      const h = wrap.offsetHeight
      canvas.width  = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ptRef.current = Array.from({ length: COUNT }, () => makeParticle(w, h))
    }
    resize()
    window.addEventListener("resize", resize)

    const onMove  = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }
    wrap.addEventListener("mousemove", onMove)
    wrap.addEventListener("mouseleave", onLeave)

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      tRef.current += 0.008
      const time = tRef.current
      ctx.clearRect(0, 0, w, h)

      const { x: mx, y: my } = mouseRef.current

      for (const p of ptRef.current) {
        const dx = p.x - mx
        const dy = p.y - my
        const d  = Math.hypot(dx, dy)
        if (d < REPEL_RADIUS && d > 0) {
          const f = (1 - d / REPEL_RADIUS) * 0.07
          p.vx += (dx / d) * f
          p.vy += (dy / d) * f
        }

        p.vx *= 0.982
        p.vy *= 0.982
        p.x  += p.vx + Math.sin(time * p.speed + p.twinkle) * 0.06
        p.y  += p.vy

        if (p.x < -12) p.x = w + 12
        if (p.x > w + 12) p.x = -12
        if (p.y < -12) p.y = h + 12
        if (p.y > h + 12) p.y = -12

        p.twinkle += p.twinkleSpeed
        const tw = 0.65 + Math.sin(p.twinkle) * 0.35
        const a  = p.opacity * tw

        if (p.isLarge) {
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5)
          glow.addColorStop(0,    `rgba(${p.r},${p.g},${p.b},${a})`)
          glow.addColorStop(0.35, `rgba(${p.r},${p.g},${p.b},${(a * 0.3).toFixed(3)})`)
          glow.addColorStop(1,    `rgba(${p.r},${p.g},${p.b},0)`)
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${Math.min(255, p.r + 50)},${Math.min(255, p.g + 50)},255,${a})`
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${a})`
          ctx.fill()
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
      wrap.removeEventListener("mousemove", onMove)
      wrap.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <div ref={wrapRef} className="relative h-screen overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />

      {/* Nebula — top-left, indigo */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[820px] w-[820px] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.48 0.23 284 / 0.22) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />
      {/* Nebula — bottom-right, blue */}
      <div
        className="pointer-events-none absolute -bottom-48 -right-20 h-[660px] w-[660px] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.52 0.18 220 / 0.16) 0%, transparent 65%)",
          filter: "blur(120px)",
        }}
      />
      {/* Nebula — center diffuse */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[900px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, oklch(0.44 0.18 284 / 0.07) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full z-[2]"
        aria-hidden
      />

      {/* Top vignette glow */}
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, oklch(0.45 0.18 284 / 0.10), transparent)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-52 z-[4]"
        style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }}
      />

      {/* Hero content */}
      <style>{`@keyframes hero-in{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div
        className="relative z-[5] flex h-full flex-col items-center justify-center px-6 pt-14 text-center"
        style={{ animation: "hero-in 0.75s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
      >
        {/* Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Sistema de diseño · v0.1.0
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-8 select-none">
          <span
            className="block font-bold tracking-tight leading-[1.06] text-foreground"
            style={{ fontSize: "clamp(2.6rem, 9vw, 5.6rem)" }}
          >
            Construye
          </span>
          <span
            className="block font-bold tracking-tight leading-[1.06] text-foreground"
            style={{ fontSize: "clamp(2.6rem, 9vw, 5.6rem)" }}
          >
            más rápido
          </span>
          <span
            className="block font-bold tracking-tight leading-[1.06]"
            style={{
              fontSize: "clamp(2.6rem, 9vw, 5.6rem)",
              background:
                "linear-gradient(135deg, oklch(0.660 0.215 284), oklch(0.680 0.180 218))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            con Proteus DS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-[460px] leading-relaxed">
          54 componentes, foundations y guías de uso para product teams
          que se mueven rápido sin romper la consistencia.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
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
    </div>
  )
}
