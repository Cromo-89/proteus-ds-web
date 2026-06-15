import type { Metadata } from "next"
import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Radius" }

const radiusScale = [
  { name: "rounded-sm",   token: "--radius-sm",   value: "6px",     rem: "0.375rem", uso: "Badges, chips, tags pequeños" },
  { name: "rounded-md",   token: "--radius-md",   value: "8px",     rem: "0.5rem",   uso: "Inputs, selects, botones pequeños" },
  { name: "rounded",      token: "--radius",      value: "10px",    rem: "0.625rem", uso: "Botón default — radio base del sistema" },
  { name: "rounded-lg",   token: "--radius-lg",   value: "12px",    rem: "0.75rem",  uso: "Cards compactas, tooltips, dropdowns" },
  { name: "rounded-xl",   token: "--radius-xl",   value: "16px",    rem: "1rem",     uso: "Cards normales, modales, sheets" },
  { name: "rounded-2xl",  token: "--radius-2xl",  value: "20px",    rem: "1.25rem",  uso: "Cards grandes, hero sections" },
  { name: "rounded-full", token: "--radius-full", value: "9999px",  rem: "9999px",   uso: "Avatares, pills, badges de estado" },
]

const componentRadiusCode = `{/* Botón — rounded (10px) */}
<button className="rounded px-4 py-2">Botón</button>

{/* Input — rounded-md (8px) */}
<input className="rounded-md border border-border px-3 py-2" />

{/* Card — rounded-xl (16px) */}
<div className="rounded-xl border border-border bg-card p-5">Card</div>

{/* Modal — rounded-2xl (20px) */}
<div className="rounded-2xl border border-border bg-card p-6">Modal</div>

{/* Badge — rounded-full */}
<span className="rounded-full bg-primary px-2.5 py-0.5 text-xs">Badge</span>

{/* Avatar — rounded-full */}
<div className="size-8 rounded-full bg-muted" />`

const cssVarsCode = `/* Los tokens están disponibles como CSS variables */
.mi-componente {
  border-radius: var(--radius-xl);  /* 16px */
}

/* Y como clases de Tailwind */
className="rounded-xl"   /* → var(--radius-xl) → 16px */
className="rounded-lg"   /* → var(--radius-lg) → 12px */
className="rounded"      /* → var(--radius)    → 10px (base) */`

export default function RadiusPage() {
  return (
    <article className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">Foundations</p>
        <h1 className="text-4xl font-bold tracking-tight">Radius</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Escala de 7 valores de border-radius, desde <strong className="text-foreground">6px</strong> para
          elementos pequeños hasta <strong className="text-foreground">9999px</strong> para pills y avatares.
          Cada componente de Proteus usa el radio semánticamente correcto para su contexto.
        </p>
      </div>

      {/* Visual scale */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Escala visual</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Hover para ver el token CSS variable asociado.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {radiusScale.map(({ name, token, value, rem, uso }) => (
            <div key={name} className="group overflow-hidden rounded-xl border border-border bg-card">
              {/* Preview */}
              <div className="flex items-center justify-center bg-background-secondary p-8 h-32">
                <div
                  className="size-16 bg-primary/20 border-2 border-primary/50"
                  style={{ borderRadius: value }}
                />
              </div>
              {/* Info */}
              <div className="border-t border-border p-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                    {name}
                  </code>
                  <span className="font-mono text-xs text-primary font-medium">{value}</span>
                </div>
                <code className="font-mono text-[10px] text-muted-foreground block">
                  {token} · {rem}
                </code>
                <p className="text-xs text-muted-foreground">{uso}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Radius por componente */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Radius por componente</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Cada componente tiene un radio fijo. La tabla es la referencia oficial.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-background-secondary">
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Componente</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Clase</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">px</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Badge, Tag, Chip",         "rounded-sm",   "6px"    ],
                ["Input, Select, Textarea",  "rounded-md",   "8px"    ],
                ["Button (default)",         "rounded",      "10px"   ],
                ["Dropdown, Tooltip",        "rounded-lg",   "12px"   ],
                ["Card (compacta)",          "rounded-lg",   "12px"   ],
                ["Card (normal), Modal",     "rounded-xl",   "16px"   ],
                ["Sheet, Drawer",            "rounded-2xl",  "20px"   ],
                ["Avatar, Pill, Badge dot",  "rounded-full", "9999px" ],
              ].map(([comp, cls, px]) => (
                <tr key={comp as string}>
                  <td className="px-4 py-2.5 text-muted-foreground text-xs">{comp}</td>
                  <td className="px-4 py-2.5">
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                      {cls}
                    </code>
                  </td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{px}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Código */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Uso en componentes</h2>
        <CodeBlock code={componentRadiusCode} lang="tsx" />
      </section>

      {/* CSS vars */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Variables CSS</h2>
        <p className="text-sm text-muted-foreground">
          Los tokens están definidos en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">globals.css</code> y
          mapeados a Tailwind en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">@theme inline</code>.
        </p>
        <CodeBlock code={cssVarsCode} lang="css" />
      </section>

      {/* Principios */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Principios</h2>
        <div className="overflow-hidden rounded-xl border border-border divide-y divide-border">
          {[
            {
              rule: "Usa la tabla como referencia, no improvises",
              desc: "El radio de cada componente está decidido. Cambiar un Input a rounded-xl o un Card a rounded-sm rompe la coherencia visual del sistema.",
            },
            {
              rule: "Anida con radios coherentes",
              desc: "Si una card tiene rounded-xl (16px) y tiene padding de p-4 (16px), los elementos internos usan rounded-md (8px) para mantener la perspectiva de anidamiento.",
            },
            {
              rule: "Reserva rounded-full para formas circulares",
              desc: "Pills, avatares, badges. Nunca uses rounded-full en un botón de ancho variable — se ve diferente en cada tamaño de texto.",
            },
          ].map(({ rule, desc }) => (
            <div key={rule} className="px-5 py-4">
              <p className="font-medium text-sm">{rule}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
