import Link from "next/link"
import { Topbar } from "@/components/docs/topbar"
import { Icon } from "@/components/ui/icon"
import { HeroWebGL } from "@/components/home/hero-webgl"
import { Marquee } from "@/components/home/marquee"
import { Reveal } from "@/components/home/reveal"

const stats = [
  { value: "54",    label: "Componentes" },
  { value: "7",     label: "Foundations" },
  { value: "OKLCH", label: "Color system" },
  { value: "100%",  label: "TypeScript" },
]

const features = [
  { icon: "deployed_code",  label: "shadcn/ui compatible" },
  { icon: "dark_mode",      label: "Dark mode first" },
  { icon: "palette",        label: "OKLCH tokens" },
  { icon: "bolt",           label: "Base UI primitives" },
  { icon: "code",           label: "TypeScript nativo" },
  { icon: "accessibility",  label: "Accesible por defecto" },
]

const categories = [
  {
    title: "Atoms",
    description: "Bloques base del sistema",
    count: 11,
    href: "/components/button",
    icon: "widgets",
    accent: "text-primary",
  },
  {
    title: "Forms",
    description: "Inputs y controles",
    count: 8,
    href: "/components/input",
    icon: "layers",
    accent: "text-info",
  },
  {
    title: "Navigation",
    description: "Patrones de navegación",
    count: 6,
    href: "/components/tabs",
    icon: "near_me",
    accent: "text-success",
  },
  {
    title: "Overlays",
    description: "Modales y popovers",
    count: 8,
    href: "/components/dialog",
    icon: "open_in_full",
    accent: "text-warning",
  },
  {
    title: "Feedback",
    description: "Alertas y estados",
    count: 4,
    href: "/components/alert",
    icon: "notifications",
    accent: "text-destructive",
  },
  {
    title: "Display",
    description: "Componentes de contenido",
    count: 12,
    href: "/components/card",
    icon: "grid_view",
    accent: "text-primary",
  },
  {
    title: "Foundations",
    description: "Tokens y sistema de diseño",
    count: 7,
    href: "/foundations/colors",
    icon: "auto_stories",
    accent: "text-info",
  },
  {
    title: "Guidelines",
    description: "Uso y accesibilidad",
    count: 2,
    href: "/guidelines/accessibility",
    icon: "accessibility",
    accent: "text-success",
  },
]

const colorSwatches = [
  { label: "Primary",     cls: "bg-primary" },
  { label: "Success",     cls: "bg-success" },
  { label: "Warning",     cls: "bg-warning" },
  { label: "Destructive", cls: "bg-destructive" },
  { label: "Info",        cls: "bg-info" },
  { label: "Muted",       cls: "bg-muted-foreground" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />

      {/* ── Hero ────────────────────────────────────────── */}
      <HeroWebGL />

      {/* ── Marquee strip ───────────────────────────────── */}
      <Marquee />

      {/* ── Stats ───────────────────────────────────────── */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-border/30 rounded-2xl overflow-hidden border border-border/30 bg-card/60">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center justify-center px-8 py-8 text-center">
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-mono">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Feature pills ───────────────────────────────── */}
      <section className="border-b border-border/30 bg-background-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  <Icon name={f.icon} size={14} className="text-muted-foreground/50 shrink-0" />
                  {f.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Categories ──────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <Reveal className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight">Biblioteca de componentes</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Cada componente con preview interactivo, tabla de props y guías de accesibilidad.
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 45} className="h-full">
              <Link
                href={cat.href}
                className="cat-card group relative overflow-hidden rounded-xl border border-border/40 bg-card/80 p-5 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:bg-card"
              >
                {/* corner glow */}
                <div className="pointer-events-none absolute -top-8 -right-8 size-28 rounded-full bg-primary/6 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center justify-between mb-4">
                  <Icon
                    name={cat.icon}
                    size={20}
                    className={`${cat.accent} transition-transform duration-300 group-hover:-translate-y-0.5`}
                  />
                  <Icon
                    name="arrow_forward"
                    size={14}
                    className="text-muted-foreground/30 translate-x-0 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>

                <h3 className="text-sm font-semibold text-foreground">{cat.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{cat.description}</p>
                <span className="mt-auto pt-4 text-[11px] font-mono text-muted-foreground/45">
                  {cat.count} componentes
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Foundations preview ─────────────────────────── */}
      <section className="border-t border-border bg-background-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Design tokens</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Colors OKLCH, tipografía, espaciado, radius y motion — todo en variables CSS.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Colors */}
            <Reveal>
              <Link
                href="/foundations/colors"
                className="group block rounded-xl border border-border/40 bg-card/80 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-md hover:shadow-black/10"
              >
                <p className="mb-3 text-sm font-semibold">Colors</p>
                <div className="flex gap-2">
                  {colorSwatches.map((s) => (
                    <div
                      key={s.label}
                      title={s.label}
                      className={`h-8 flex-1 rounded-lg ${s.cls} transition-transform duration-300 group-hover:scale-y-110`}
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Sistema OKLCH · dark-first · 6 roles semánticos</p>
              </Link>
            </Reveal>

            {/* Typography */}
            <Reveal delay={60}>
              <Link
                href="/foundations/typography"
                className="group block rounded-xl border border-border/40 bg-card/80 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-md hover:shadow-black/10"
              >
                <p className="mb-3 text-sm font-semibold">Typography</p>
                <div className="space-y-1">
                  <p className="text-2xl font-bold leading-none tracking-tight">Aa</p>
                  <p className="text-sm text-muted-foreground">Inter — Display, Body, Label</p>
                  <p className="font-mono text-xs text-muted-foreground">JetBrains Mono — Code</p>
                </div>
              </Link>
            </Reveal>

            {/* Radius */}
            <Reveal delay={30}>
              <Link
                href="/foundations/radius"
                className="group block rounded-xl border border-border/40 bg-card/80 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-md hover:shadow-black/10"
              >
                <p className="mb-3 text-sm font-semibold">Radius</p>
                <div className="flex items-end gap-3">
                  {[
                    { r: "rounded-md",  label: "8px" },
                    { r: "rounded-xl",  label: "16px" },
                    { r: "rounded-2xl", label: "20px" },
                    { r: "rounded-full", label: "∞" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1.5">
                      <div className={`size-8 border-2 border-primary/50 bg-primary/10 ${item.r} transition-transform duration-300 group-hover:scale-105`} />
                      <span className="text-[10px] text-muted-foreground font-mono">{item.label}</span>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>

            {/* Spacing */}
            <Reveal delay={90}>
              <Link
                href="/foundations/spacing"
                className="group block rounded-xl border border-border/40 bg-card/80 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-md hover:shadow-black/10"
              >
                <p className="mb-3 text-sm font-semibold">Spacing</p>
                <div className="flex items-end gap-1.5">
                  {[1, 2, 3, 4, 6, 8, 12].map((n) => (
                    <div key={n} className="flex flex-col items-center gap-1">
                      <div
                        className="w-3 bg-primary/50 rounded-sm transition-colors duration-300 group-hover:bg-primary/70"
                        style={{ height: `${n * 4}px` }}
                      />
                      <span className="text-[9px] text-muted-foreground font-mono">{n}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Escala 4px · tokens semánticos</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Getting started ─────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Empieza en minutos</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Construido sobre shadcn/ui y Tailwind v4.
                  Instala, importa y usa cualquier componente en tu proyecto Next.js.
                </p>
                <Link
                  href="/getting-started/installation"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  Ver guía de instalación
                  <Icon name="arrow_forward" size={20} />
                </Link>
              </div>

              <div className="rounded-xl border border-border/60 bg-card overflow-hidden">
                <div className="flex items-center gap-1.5 border-b border-border/60 px-4 py-2.5 bg-background-secondary/80">
                  <span className="size-2.5 rounded-full bg-destructive/50" />
                  <span className="size-2.5 rounded-full bg-warning/50" />
                  <span className="size-2.5 rounded-full bg-success/50" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">terminal</span>
                </div>
                <pre className="p-5 text-xs font-mono leading-relaxed text-foreground overflow-x-auto">
                  <code>
                    <span className="text-muted-foreground">{"# instalar dependencias\n"}</span>
                    <span className="text-success">npm</span>{" install @proteus-ds/ui\n\n"}
                    <span className="text-muted-foreground">{"# usar en tu proyecto\n"}</span>
                    <span className="text-info">import</span>
                    {" { Button } "}
                    <span className="text-info">from</span>
                    {" \"@/components/ui/button\"\n\n"}
                    <span className="text-primary">{"<Button"}</span>
                    <span className="text-warning">{" variant"}</span>
                    {"="}
                    <span className="text-success">{"\"default\""}</span>
                    <span className="text-primary">{">"}</span>
                    {"\n  Hola Proteus\n"}
                    <span className="text-primary">{"</Button>"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="mt-auto border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>Proteus DS · v0.1.0</span>
          <div className="flex items-center gap-4">
            <Link href="/getting-started" className="hover:text-foreground transition-colors">Docs</Link>
            <Link href="/components/button" className="hover:text-foreground transition-colors">Componentes</Link>
            <Link
              href="https://github.com/Cromo-89/proteus-ds-web"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
