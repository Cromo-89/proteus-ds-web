import type { Metadata } from "next"
import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Colors" }

const semanticRoles = [
  {
    role: "Background",
    desc: "Superficie base de la aplicación",
    tokens: [
      { name: "--background", label: "Default", dark: "oklch(0.130 0 0)", light: "oklch(0.985 0 0)" },
      { name: "--background-secondary", label: "Secondary", dark: "oklch(0.160 0.005 284)", light: "oklch(0.960 0.002 284)" },
      { name: "--background-tertiary", label: "Tertiary", dark: "oklch(0.190 0.007 284)", light: "oklch(0.940 0.004 284)" },
    ],
  },
  {
    role: "Foreground",
    desc: "Texto e íconos sobre el fondo",
    tokens: [
      { name: "--foreground", label: "Default", dark: "oklch(0.985 0 0)", light: "oklch(0.130 0 0)" },
      { name: "--muted-foreground", label: "Muted", dark: "oklch(0.560 0.010 284)", light: "oklch(0.440 0.010 284)" },
      { name: "--foreground-inverse", label: "Inverse", dark: "oklch(0.130 0 0)", light: "oklch(0.985 0 0)" },
    ],
  },
  {
    role: "Primary",
    desc: "Color de marca — Indigo hue 284°",
    tokens: [
      { name: "--primary", label: "Default", dark: "oklch(0.450 0.180 284)", light: "oklch(0.500 0.185 284)" },
      { name: "--primary-foreground", label: "Foreground", dark: "oklch(0.985 0 0)", light: "oklch(0.985 0 0)" },
      { name: "--primary-hover", label: "Hover", dark: "oklch(0.500 0.185 284)", light: "oklch(0.550 0.185 284)" },
    ],
  },
  {
    role: "Card / Surface",
    desc: "Superficies elevadas y contenedores",
    tokens: [
      { name: "--card", label: "Card", dark: "oklch(0.165 0.007 284)", light: "oklch(1.000 0 0)" },
      { name: "--surface-elevated", label: "Elevated", dark: "oklch(0.185 0.008 284)", light: "oklch(0.985 0 0)" },
      { name: "--popover", label: "Popover", dark: "oklch(0.165 0.007 284)", light: "oklch(1.000 0 0)" },
    ],
  },
  {
    role: "Border",
    desc: "Líneas divisorias y bordes",
    tokens: [
      { name: "--border", label: "Default", dark: "oklch(0.260 0.012 284)", light: "oklch(0.880 0.005 284)" },
      { name: "--border-heavy", label: "Heavy", dark: "oklch(0.320 0.015 284)", light: "oklch(0.800 0.008 284)" },
      { name: "--ring", label: "Ring (focus)", dark: "oklch(0.500 0.185 284)", light: "oklch(0.550 0.185 284)" },
    ],
  },
  {
    role: "Secondary / Muted",
    desc: "Fondos de elementos secundarios",
    tokens: [
      { name: "--secondary", label: "Secondary", dark: "oklch(0.220 0.010 284)", light: "oklch(0.940 0.004 284)" },
      { name: "--muted", label: "Muted", dark: "oklch(0.190 0.007 284)", light: "oklch(0.960 0.002 284)" },
      { name: "--accent", label: "Accent", dark: "oklch(0.220 0.010 284)", light: "oklch(0.940 0.004 284)" },
    ],
  },
]

const statusColors = [
  {
    name: "Destructive",
    desc: "Errores y acciones irreversibles",
    tokens: [
      { label: "Default", var: "--destructive", dark: "oklch(0.540 0.200 25)", light: "oklch(0.520 0.200 25)" },
      { label: "Background", var: "--destructive-bg", dark: "oklch(0.200 0.060 25)", light: "oklch(0.940 0.040 25)" },
      { label: "Wash", var: "--destructive-wash", dark: "oklch(0.160 0.030 25)", light: "oklch(0.965 0.020 25)" },
    ],
    hue: 25,
  },
  {
    name: "Success",
    desc: "Confirmaciones y estados positivos",
    tokens: [
      { label: "Default", var: "--success", dark: "oklch(0.620 0.170 145)", light: "oklch(0.520 0.160 145)" },
      { label: "Background", var: "--success-bg", dark: "oklch(0.200 0.060 145)", light: "oklch(0.940 0.040 145)" },
      { label: "Wash", var: "--success-wash", dark: "oklch(0.160 0.030 145)", light: "oklch(0.965 0.020 145)" },
    ],
    hue: 145,
  },
  {
    name: "Warning",
    desc: "Alertas y estados de precaución",
    tokens: [
      { label: "Default", var: "--warning", dark: "oklch(0.720 0.170 75)", light: "oklch(0.620 0.160 75)" },
      { label: "Background", var: "--warning-bg", dark: "oklch(0.220 0.060 75)", light: "oklch(0.960 0.040 75)" },
      { label: "Wash", var: "--warning-wash", dark: "oklch(0.170 0.030 75)", light: "oklch(0.975 0.020 75)" },
    ],
    hue: 75,
  },
  {
    name: "Info",
    desc: "Información neutral y estados de carga",
    tokens: [
      { label: "Default", var: "--info", dark: "oklch(0.580 0.170 240)", light: "oklch(0.500 0.160 240)" },
      { label: "Background", var: "--info-bg", dark: "oklch(0.190 0.060 240)", light: "oklch(0.940 0.040 240)" },
      { label: "Wash", var: "--info-wash", dark: "oklch(0.155 0.030 240)", light: "oklch(0.965 0.020 240)" },
    ],
    hue: 240,
  },
]

const usageCode = `/* Siempre usar CSS variables — nunca valores OKLCH literales */

/* ✅ Correcto */
className="bg-background text-foreground"
className="bg-primary text-primary-foreground"
className="text-muted-foreground"
className="border-border"

/* ❌ Incorrecto */
style={{ background: "oklch(0.130 0 0)" }}
className="bg-[oklch(0.450_0.180_284)]"`

export default function ColorsPage() {
  return (
    <article className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">Foundations</p>
        <h1 className="text-4xl font-bold tracking-tight">Colors</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Sistema de color basado en <strong className="text-foreground">OKLCH</strong> — un espacio
          perceptualmente uniforme que garantiza contraste consistente entre modos claro y oscuro.
          Dark mode es el tema por defecto.
        </p>
      </div>

      {/* OKLCH explanation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">¿Por qué OKLCH?</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { icon: "palette", title: "Perceptual", desc: "El mismo chroma se ve igualmente saturado sin importar el lightness." },
            { icon: "contrast", title: "Contraste", desc: "Más fácil predecir si dos colores van a cumplir WCAG AA/AAA." },
            { icon: "wb_sunny", title: "Interpolación", desc: "Degradés suaves sin el \"barro gris\" del espacio RGB o HSL." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-4">
              <span className="material-symbols-rounded text-primary mb-2 block" style={{ fontSize: 20, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }} aria-hidden>
                {item.icon}
              </span>
              <p className="font-medium text-sm">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Semantic roles */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Roles semánticos</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Cada token tiene un rol semántico — no describe el color sino su función.
          </p>
        </div>

        {semanticRoles.map((group) => (
          <div key={group.role} className="space-y-2">
            <div>
              <h3 className="text-sm font-semibold">{group.role}</h3>
              <p className="text-xs text-muted-foreground">{group.desc}</p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              {group.tokens.map((token, i) => (
                <div
                  key={token.name}
                  className={`flex items-center gap-3 px-4 py-3 ${i < group.tokens.length - 1 ? "border-b border-border" : ""}`}
                >
                  {/* Swatch */}
                  <div
                    className="size-8 rounded-md border border-border/50 shadow-sm shrink-0"
                    style={{ background: `var(${token.name})` }}
                    title={`Dark: ${token.dark}`}
                  />
                  {/* Token name + label */}
                  <div className="min-w-0 flex-1">
                    <code className="font-mono text-xs text-muted-foreground block truncate">
                      {token.name}
                    </code>
                    <span className="text-xs text-muted-foreground">{token.label}</span>
                  </div>
                  {/* Values — desktop only */}
                  <div className="hidden sm:flex flex-col gap-0.5 text-right shrink-0">
                    <span className="text-[10px] text-muted-foreground font-mono">dark {token.dark}</span>
                    <span className="text-[10px] text-muted-foreground font-mono">light {token.light}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Status colors */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Colores de estado</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Cada estado tiene tres niveles: el color principal, un fondo (background) y un wash muy sutil.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {statusColors.map((status) => (
            <div key={status.name} className="overflow-hidden rounded-xl border border-border">
              <div className="border-b border-border bg-background-secondary px-4 py-3">
                <p className="font-semibold text-sm">{status.name}</p>
                <p className="text-xs text-muted-foreground">{status.desc}</p>
              </div>
              <div className="divide-y divide-border">
                {status.tokens.map((token) => (
                  <div key={token.label} className="flex items-center gap-3 px-4 py-2.5">
                    <div
                      className="size-6 rounded shrink-0 border border-border/40"
                      style={{ background: `var(${token.var})` }}
                    />
                    <span className="text-xs text-muted-foreground w-20 shrink-0">{token.label}</span>
                    <code className="font-mono text-[10px] text-muted-foreground ml-auto">{token.var}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Cómo usar los tokens</h2>
        <p className="text-sm text-muted-foreground">
          Siempre usa las clases de Tailwind mapeadas a las CSS variables. Nunca uses valores
          OKLCH literales en el código — si el token no existe, créalo primero en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">globals.css</code>.
        </p>
        <CodeBlock code={usageCode} lang="css" />
      </section>

      {/* Cheatsheet */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Cheatsheet</h2>
        <div className="overflow-x-auto overflow-hidden rounded-xl border border-border">
          <table className="w-full text-xs min-w-[520px]">
            <thead>
              <tr className="border-b border-border bg-background-secondary">
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Token</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Tailwind class</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Uso típico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["--background", "bg-background", "Fondo de página y modales"],
                ["--foreground", "text-foreground", "Texto principal"],
                ["--primary", "bg-primary / text-primary", "CTAs, links activos, focus rings"],
                ["--muted-foreground", "text-muted-foreground", "Texto secundario, placeholders"],
                ["--border", "border-border", "Bordes de cards e inputs"],
                ["--card", "bg-card", "Fondo de cards"],
                ["--destructive", "text-destructive / bg-destructive-bg", "Errores, alertas críticas"],
                ["--success", "text-success / bg-success-bg", "Confirmaciones, estados OK"],
                ["--warning", "text-warning / bg-warning-bg", "Advertencias, atención"],
                ["--info", "text-info / bg-info-bg", "Información, estados de carga"],
              ].map(([token, cls, uso]) => (
                <tr key={token}>
                  <td className="px-4 py-2.5 font-mono text-muted-foreground">{token}</td>
                  <td className="px-4 py-2.5 font-mono">{cls}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{uso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  )
}
