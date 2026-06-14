import Link from "next/link"
import { Topbar } from "@/components/docs/topbar"
import { Icon } from "@/components/ui/icon"

const stats = [
  { value: "54", label: "Componentes" },
  { value: "7", label: "Foundations" },
  { value: "OKLCH", label: "Color tokens" },
  { value: "100%", label: "TypeScript" },
]

const categories = [
  {
    title: "Atoms",
    description: "Bloques base del sistema",
    count: 11,
    href: "/components/button",
    icon: "widgets",
    accent: "text-primary",
    bg: "from-primary/10 via-primary/5 to-transparent",
    border: "hover:border-primary/40",
  },
  {
    title: "Forms",
    description: "Inputs y controles",
    count: 8,
    href: "/components/input",
    icon: "layers",
    accent: "text-info",
    bg: "from-info/10 via-info/5 to-transparent",
    border: "hover:border-info/40",
  },
  {
    title: "Navigation",
    description: "Patrones de navegación",
    count: 6,
    href: "/components/tabs",
    icon: "near_me",
    accent: "text-success",
    bg: "from-success/10 via-success/5 to-transparent",
    border: "hover:border-success/40",
  },
  {
    title: "Overlays",
    description: "Modales y popovers",
    count: 8,
    href: "/components/dialog",
    icon: "open_in_full",
    accent: "text-warning",
    bg: "from-warning/10 via-warning/5 to-transparent",
    border: "hover:border-warning/40",
  },
  {
    title: "Feedback",
    description: "Alertas y estados",
    count: 4,
    href: "/components/alert",
    icon: "notifications",
    accent: "text-destructive",
    bg: "from-destructive/10 via-destructive/5 to-transparent",
    border: "hover:border-destructive/40",
  },
  {
    title: "Display",
    description: "Componentes de contenido",
    count: 12,
    href: "/components/card",
    icon: "grid_view",
    accent: "text-primary",
    bg: "from-primary/8 via-primary/3 to-transparent",
    border: "hover:border-primary/30",
  },
  {
    title: "Foundations",
    description: "Tokens y sistema de diseño",
    count: 7,
    href: "/foundations/colors",
    icon: "auto_stories",
    accent: "text-info",
    bg: "from-info/8 via-info/3 to-transparent",
    border: "hover:border-info/30",
  },
  {
    title: "Guidelines",
    description: "Uso y accesibilidad",
    count: 2,
    href: "/guidelines/accessibility",
    icon: "accessibility",
    accent: "text-success",
    bg: "from-success/8 via-success/3 to-transparent",
    border: "hover:border-success/30",
  },
]

const colorSwatches = [
  { label: "Primary", cls: "bg-primary" },
  { label: "Success", cls: "bg-success" },
  { label: "Warning", cls: "bg-warning" },
  { label: "Destructive", cls: "bg-destructive" },
  { label: "Info", cls: "bg-info" },
  { label: "Muted", cls: "bg-muted-foreground" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.450 0.180 284 / 0.15), transparent)",
          }}
        />
        <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-8">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Sistema de diseño · v0.1.0
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Construye más rápido
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.550 0.185 284), oklch(0.580 0.170 240))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              con Proteus DS
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            54 componentes, foundations completas y guías de uso para product
            teams que quieren moverse rápido sin romper la consistencia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/getting-started"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              Empezar
              <Icon name="arrow_forward" size={20} />
            </Link>
            <Link
              href="/components/button"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Ver componentes
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────── */}
      <section className="border-b border-border bg-background-secondary">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-2xl font-bold text-foreground">{s.value}</dt>
                <dd className="mt-0.5 text-xs text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Category grid ───────────────────────────────── */}
      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight">Componentes</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Organizados por categoría, cada uno con preview y tabla de props.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${cat.border}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.bg} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div className="relative">
                <Icon name={cat.icon} size={20} className={`${cat.accent} mb-3`} />
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {cat.description}
                </p>
                <span className="mt-3 inline-block text-xs font-mono text-muted-foreground">
                  {cat.count} componentes
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Foundations preview ─────────────────────────── */}
      <section className="border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Foundations</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Tokens de color, tipografía, espaciado, radius y más.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Colors */}
            <Link
              href="/foundations/colors"
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent/20"
            >
              <p className="mb-3 text-sm font-semibold">Colors</p>
              <div className="flex gap-2">
                {colorSwatches.map((s) => (
                  <div key={s.label} title={s.label} className={`h-8 flex-1 rounded-md ${s.cls}`} />
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Sistema OKLCH · dark-first · 6 roles semánticos
              </p>
            </Link>

            {/* Typography */}
            <Link
              href="/foundations/typography"
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent/20"
            >
              <p className="mb-3 text-sm font-semibold">Typography</p>
              <div className="space-y-1">
                <p className="text-2xl font-bold leading-none tracking-tight">Aa</p>
                <p className="text-sm text-muted-foreground">Inter — Display, Body, Label</p>
                <p className="font-mono text-xs text-muted-foreground">JetBrains Mono — Code</p>
              </div>
            </Link>

            {/* Radius */}
            <Link
              href="/foundations/radius"
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent/20"
            >
              <p className="mb-3 text-sm font-semibold">Radius</p>
              <div className="flex items-end gap-3">
                {[
                  { r: "rounded", label: "10px" },
                  { r: "rounded-xl", label: "16px" },
                  { r: "rounded-2xl", label: "20px" },
                  { r: "rounded-full", label: "∞" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-1.5">
                    <div className={`size-8 border-2 border-primary/60 bg-primary/10 ${item.r}`} />
                    <span className="text-[10px] text-muted-foreground font-mono">{item.label}</span>
                  </div>
                ))}
              </div>
            </Link>

            {/* Spacing */}
            <Link
              href="/foundations/spacing"
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent/20"
            >
              <p className="mb-3 text-sm font-semibold">Spacing</p>
              <div className="flex items-end gap-1.5">
                {[1, 2, 3, 4, 6, 8, 12].map((n) => (
                  <div key={n} className="flex flex-col items-center gap-1">
                    <div className="w-3 bg-primary/60 rounded-sm" style={{ height: `${n * 4}px` }} />
                    <span className="text-[9px] text-muted-foreground font-mono">{n}</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Escala 4px · tokens semánticos</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Getting started ─────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Empieza en minutos</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Proteus DS está construido sobre shadcn/ui y Tailwind v4.
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

            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5 bg-background-secondary">
                <span className="size-2.5 rounded-full bg-destructive/60" />
                <span className="size-2.5 rounded-full bg-warning/60" />
                <span className="size-2.5 rounded-full bg-success/60" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
              </div>
              <pre className="p-4 text-xs font-mono leading-relaxed text-foreground overflow-x-auto">
                <code>{`\
`}<span className="text-muted-foreground">{`# instalar dependencias`}</span>{`
`}<span className="text-success">{`npm`}</span>{` install @proteus-ds/ui

`}<span className="text-muted-foreground">{`# usar en tu proyecto`}</span>{`
`}<span className="text-info">{`import`}</span>{` { Button } `}<span className="text-info">{`from`}</span>{` "@/components/ui/button"

`}<span className="text-primary">{`<Button`}</span><span className="text-warning">{` variant`}</span>{`=`}<span className="text-success">{`"default"`}</span><span className="text-primary">{`>`}</span>{`
  Hola Proteus
`}<span className="text-primary">{`</Button>`}</span></code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="mt-auto border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
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
