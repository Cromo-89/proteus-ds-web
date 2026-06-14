"use client"

import { useEffect, useRef } from "react"

// oklch(0.45 0.18 284) → aproximado en RGB para canvas
const DOT_RGB = "99, 85, 220"
const SPACING = 36
const SPOTLIGHT_RADIUS = 200
const BASE_DOT = 1.2
const WAVE_SPEED = 0.016

export function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
    }
    resize()

    const parent = canvas.parentElement
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    parent?.addEventListener("mousemove", onMove)
    parent?.addEventListener("mouseleave", onLeave)
    window.addEventListener("resize", resize)

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const t = (timeRef.current += WAVE_SPEED)
      const { x: mx, y: my } = mouseRef.current

      // Spotlight fallback: centro del hero cuando no hay mouse
      const hasPointer = mx > 0 && mx < w && my > 0 && my < h
      const sx = hasPointer ? mx : w / 2
      const sy = hasPointer ? my : h * 0.42
      const pulse = hasPointer ? 1 : 0.35 + Math.sin(t * 3) * 0.15

      const cols = Math.ceil(w / SPACING) + 2
      const rows = Math.ceil(h / SPACING) + 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING - SPACING / 2
          const y = j * SPACING - SPACING / 2

          const dx = x - sx
          const dy = y - sy
          const dist = Math.sqrt(dx * dx + dy * dy)
          const spotlight = Math.max(0, 1 - dist / SPOTLIGHT_RADIUS) * pulse

          const wave = Math.sin(t + i * 0.4 + j * 0.4) * 0.5 + 0.5
          const waveX = Math.sin(t * 0.7 + i * 0.3) * 0.5 + 0.5

          const alpha = Math.min(0.92, 0.08 + wave * 0.07 + waveX * 0.04 + spotlight * 0.82)
          const r = Math.min(5, BASE_DOT + wave * 0.5 + spotlight * 3.2)

          ctx.beginPath()
          ctx.arc(x, y, r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${DOT_RGB}, ${alpha})`
          ctx.fill()
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      parent?.removeEventListener("mousemove", onMove)
      parent?.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  )
}
