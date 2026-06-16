"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import * as THREE from "three"
import { Icon } from "@/components/ui/icon"

// ── TorusKnot shaders ────────────────────────────────────────────────────────

const vert = /* glsl */ `
varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vNormal    = normalize(normalMatrix * normal);
  vViewDir   = normalize(cameraPosition - worldPos.xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const frag = /* glsl */ `
uniform float uTime;
varying vec3 vNormal;
varying vec3 vViewDir;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  float nDotV   = max(0.0, dot(vNormal, vViewDir));
  float fresnel = pow(1.0 - nDotV, 1.6);

  vec3 l1 = normalize(vec3( 2.5,  3.0,  4.0));
  vec3 l2 = normalize(vec3(-3.0, -1.0,  2.5));
  vec3 l3 = normalize(vec3( 0.5, -3.0, -1.5));

  float s1 = pow(max(0.0, dot(reflect(-l1, vNormal), vViewDir)), 90.0);
  float s2 = pow(max(0.0, dot(reflect(-l2, vNormal), vViewDir)), 60.0);
  float s3 = pow(max(0.0, dot(reflect(-l3, vNormal), vViewDir)), 40.0);

  float normalInfluence = dot(vNormal, normalize(vec3(0.6, 1.0, 0.4)));
  float iridPhase = fract(normalInfluence * 0.38 + fresnel * 0.28 + uTime * 0.035);
  float hue = 0.60 + iridPhase * 0.34;
  vec3 iridColor = hsv2rgb(vec3(hue, 0.90, fresnel * 0.85 + 0.08));

  vec3 color = vec3(0.008, 0.008, 0.04);
  color += iridColor * (fresnel * 1.5);
  color += vec3(0.55, 0.70, 1.00) * s1 * 2.0;
  color += vec3(0.65, 0.35, 1.00) * s2 * 1.4;
  color += vec3(1.00, 0.50, 0.75) * s3 * 1.0;
  color += vec3(0.10, 0.20, 0.90) * pow(fresnel, 3.5) * 0.7;

  gl_FragColor = vec4(color, 1.0);
}
`

// ── Particle helpers (Canvas 2D) ──────────────────────────────────────────────

interface Star {
  x: number; y: number
  vx: number; vy: number
  radius: number
  opacity: number
  twinkle: number; twinkleSpeed: number
  isGlow: boolean
  r: number; g: number; b: number
}

const PALETTE: Array<[number, number, number]> = [
  [160, 180, 255],  // ice blue
  [140, 120, 255],  // indigo
  [200, 140, 255],  // violet
  [240, 130, 220],  // magenta-pink
  [210, 220, 255],  // lavender white
  [220, 230, 255],  // bright white-blue
]

function makeStar(w: number, h: number): Star {
  const isGlow = Math.random() < 0.12
  const [r, g, b] = PALETTE[Math.floor(Math.random() * PALETTE.length)]
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.10,
    radius:  isGlow ? Math.random() * 2.0 + 1.2 : Math.random() * 0.9 + 0.3,
    opacity: isGlow ? Math.random() * 0.50 + 0.35 : Math.random() * 0.55 + 0.15,
    twinkle: Math.random() * Math.PI * 2,
    twinkleSpeed: Math.random() * 0.014 + 0.004,
    isGlow, r, g, b,
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

const STAR_COUNT = 160

export function HeroWebGL() {
  const mountRef   = useRef<HTMLDivElement>(null)
  const starsRef   = useRef<HTMLCanvasElement>(null)

  // ── Three.js WebGL (TorusKnot) ──────────────────────────────────────────
  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = mount.offsetWidth
    const h = mount.offsetHeight

    const scene    = new THREE.Scene()
    const camera   = new THREE.PerspectiveCamera(52, w / h, 0.1, 100)
    camera.position.set(0, 0.2, 4.0)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.setClearColor(0x000000, 1)
    renderer.toneMapping         = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1
    mount.appendChild(renderer.domElement)

    const geo = new THREE.TorusKnotGeometry(1.6, 0.52, 512, 36, 2, 3)
    const mat = new THREE.ShaderMaterial({
      vertexShader:   vert,
      fragmentShader: frag,
      uniforms: { uTime: { value: 0 } },
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.rotation.x = 0.25
    scene.add(mesh)

    let rafId: number
    const clock = new THREE.Clock()

    const tick = () => {
      rafId = requestAnimationFrame(tick)
      const t = clock.getElapsedTime()
      mat.uniforms.uTime.value = t
      mesh.rotation.x = 0.25 + t * 0.09
      mesh.rotation.y = t * 0.14
      mesh.rotation.z = t * 0.04
      renderer.render(scene, camera)
    }
    tick()

    const onResize = () => {
      const nw = mount.offsetWidth
      const nh = mount.offsetHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", onResize)
      geo.dispose(); mat.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  // ── Canvas 2D particle field (stars) ────────────────────────────────────
  useEffect(() => {
    const canvas = starsRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let stars: Star[] = []

    const resize = () => {
      const w = window.innerWidth
      const h = canvas.parentElement?.offsetHeight ?? window.innerHeight
      canvas.width  = w * dpr
      canvas.height = h * dpr
      canvas.style.width  = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      stars = Array.from({ length: STAR_COUNT }, () => makeStar(w, h))
    }
    resize()
    window.addEventListener("resize", resize)

    let rafId: number
    let t = 0

    const draw = () => {
      rafId = requestAnimationFrame(draw)
      t += 0.008
      const w = canvas.width  / dpr
      const h = canvas.height / dpr
      ctx.clearRect(0, 0, w, h)

      for (const p of stars) {
        p.x += p.vx + Math.sin(t * p.twinkleSpeed * 8 + p.twinkle) * 0.04
        p.y += p.vy
        if (p.x < -15) p.x = w + 15
        if (p.x > w + 15) p.x = -15
        if (p.y < -15) p.y = h + 15
        if (p.y > h + 15) p.y = -15

        p.twinkle += p.twinkleSpeed
        const tw = 0.65 + Math.sin(p.twinkle) * 0.35
        const a  = p.opacity * tw

        if (p.isGlow) {
          // Large star: radial glow halo + bright core
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 6)
          glow.addColorStop(0,    `rgba(${p.r},${p.g},${p.b},${a.toFixed(3)})`)
          glow.addColorStop(0.30, `rgba(${p.r},${p.g},${p.b},${(a * 0.28).toFixed(3)})`)
          glow.addColorStop(1,    `rgba(${p.r},${p.g},${p.b},0)`)
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
          // Bright pinpoint core
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 0.45, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${Math.min(255, p.r + 60)},${Math.min(255, p.g + 60)},255,${a.toFixed(3)})`
          ctx.fill()
        } else {
          // Small star: plain dot
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${a.toFixed(3)})`
          ctx.fill()
        }
      }
    }
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Three.js WebGL canvas */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* 2D particle field overlay */}
      <canvas
        ref={starsRef}
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-56 z-[4]"
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
            className="block font-bold tracking-tight leading-[1.06] text-white"
            style={{ fontSize: "clamp(2.6rem, 9vw, 5.6rem)" }}
          >
            Construye más rápido
          </span>
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
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/60 max-w-[460px] leading-relaxed">
          68 componentes, foundations y guías de uso para product teams
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
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/25"
          >
            Ver componentes
          </Link>
        </div>
      </div>
    </div>
  )
}
