import type { Metadata } from "next"
import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Elevation" }

const shadows = [
  {
    name: "shadow-sm",
    value: "0 1px 2px oklch(0 0 0 / 0.20)",
    uso: "Botones, badges, chips — elementos que necesitan separarse del fondo sin llamar demasiado la atención.",
    ejemplos: ["Button", "Badge", "Input focus"],
  },
  {
    name: "shadow-md",
    value: "0 2px 8px oklch(0 0 0 / 0.24)",
    uso: "Cards, paneles, contenedores elevados sobre la superficie base.",
    ejemplos: ["Card", "Surface elevated", "Tag"],
  },
  {
    name: "shadow-lg",
    value: "0 4px 16px oklch(0 0 0 / 0.28)",
    uso: "Dropdowns, menús flotantes y elementos que aparecen sobre el contenido de la página.",
    ejemplos: ["Dropdown", "Select menu", "Combobox"],
  },
  {
    name: "shadow-xl",
    value: "0 8px 24px oklch(0 0 0 / 0.32)",
    uso: "Modales, drawers y overlays de primer nivel.",
    ejemplos: ["Modal", "Drawer", "Sheet"],
  },
  {
    name: "shadow-2xl",
    value: "0 16px 48px oklch(0 0 0 / 0.40)",
    uso: "Toasts, notificaciones y elementos que flotan por encima de todo el contenido.",
    ejemplos: ["Toast", "Popover", "Command palette"],
  },
]

const zIndex = [
  { token: "z-0",    value: "0",    uso: "Flujo normal del documento" },
  { token: "z-10",   value: "10",   uso: "Elementos posicionados sobre el contenido base" },
  { token: "z-20",   value: "20",   uso: "Dropdowns, menús flotantes" },
  { token: "z-30",   value: "30",   uso: "Sticky headers, sidebars fijas" },
  { token: "z-40",   value: "40",   uso: "Overlays de fondo (backdrop)" },
  { token: "z-50",   value: "50",   uso: "Modales, drawers, toasts" },
]

const usageCode = `{/* Card con sombra */}
<div className="rounded-xl border border-border bg-card shadow-md p-5">
  Contenido de la card
</div>

{/* Modal */}
<div className="fixed inset-0 z-40 bg-black/50" /> {/* backdrop */}
<div className="fixed z-50 shadow-xl rounded-2xl bg-card p-6">
  Contenido del modal
</div>

{/* Dropdown */}
<div className="absolute z-20 shadow-lg rounded-xl border border-border bg-popover">
  Opciones del menú
</div>`

export default function ElevationPage() {
  return (
    <article className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">Foundations</p>
        <h1 className="text-4xl font-bold tracking-tight">Elevation</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Sistema de elevación con 5 niveles de sombra en OKLCH y una escala de z-index para
          capas de UI. Las sombras están calibradas para dark mode — el modo predeterminado de Proteus.
        </p>
      </div>

      {/* Shadow scale visual */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Escala de sombras</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Cada nivel comunica una capa distinta. A mayor elevación, mayor opacidad y blur.
          </p>
        </div>
        <div className="space-y-3">
          {shadows.map(({ name, value, uso, ejemplos }) => (
            <div key={name} className="overflow-hidden rounded-xl border border-border">
              <div className="grid sm:grid-cols-[auto_1fr] divide-y sm:divide-y-0 sm:divide-x divide-border">
                {/* Preview — fondo claro fijo para que las sombras sean visibles */}
                <div
                  className="flex items-center justify-center p-8 sm:w-48"
                  style={{ background: "oklch(0.87 0.006 284)" }}
                >
                  <div
                    className="size-16 rounded-xl"
                    style={{ background: "oklch(0.97 0.002 284)", boxShadow: value }}
                  />
                </div>
                {/* Info */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs text-foreground">
                      {name}
                    </code>
                    <div className="flex gap-1.5 flex-wrap">
                      {ejemplos.map((ej) => (
                        <span
                          key={ej}
                          className="rounded-full bg-background-tertiary px-2 py-0.5 text-[10px] text-muted-foreground border border-border"
                        >
                          {ej}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uso}</p>
                  <code className="font-mono text-[10px] text-muted-foreground break-all">{value}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Z-index */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Z-index</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            La escala de z-index define el orden de apilamiento de las capas de UI.
            Úsala con las clases de Tailwind — nunca valores arbitrarios.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="overflow-x-auto">
          <table className="w-full min-w-max text-sm">
            <thead>
              <tr className="border-b border-border bg-background-secondary">
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Clase</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Valor</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Uso</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {zIndex.map(({ token, value, uso }) => (
                <tr key={token}>
                  <td className="px-4 py-3">
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                      {token}
                    </code>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{value}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{uso}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </section>

      {/* Uso */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Uso en código</h2>
        <CodeBlock code={usageCode} lang="tsx" />
      </section>

      {/* Principios */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Principios</h2>
        <div className="overflow-hidden rounded-xl border border-border divide-y divide-border">
          {[
            {
              rule: "Combina sombra + z-index del mismo nivel",
              desc: "Un modal usa shadow-xl y z-50. Un dropdown usa shadow-lg y z-20. La coherencia evita solapamientos inesperados.",
            },
            {
              rule: "Siempre agrega border en dark mode",
              desc: "Las sombras oscuras sobre fondos oscuros pierden visibilidad. Combina shadow-* con border border-border para definir el borde del elemento.",
            },
            {
              rule: "Menos es más",
              desc: "No uses shadow-2xl en una card inline. Reserva las sombras grandes para elementos que realmente flotan sobre la página.",
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
