import type { Metadata } from "next"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { StatCard } from "@/components/ui/stat-card"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Stat Card" }

const basicCode = `<StatCard label="Usuarios activos" value="12,483" />`

const iconCode = `<StatCard
  label="Ingresos del mes"
  value="$48,200"
  icon="payments"
/>`

const trendCode = `<div className="grid grid-cols-2 gap-3 max-w-sm">
  <StatCard
    label="Ventas"
    value="$24,500"
    trend={{ value: "+12% vs mes anterior", direction: "up" }}
  />
  <StatCard
    label="Devoluciones"
    value="142"
    trend={{ value: "-5% vs mes anterior", direction: "down" }}
  />
</div>`

const fullCode = `<div className="grid grid-cols-2 gap-3 max-w-md">
  <StatCard
    label="Usuarios activos"
    value="12,483"
    icon="person"
    trend={{ value: "+8%", direction: "up" }}
    description="Últimos 30 días"
  />
  <StatCard
    label="Ingresos"
    value="$48,200"
    icon="payments"
    trend={{ value: "+23%", direction: "up" }}
    description="Vs mes anterior"
  />
  <StatCard
    label="Tasa de rebote"
    value="34.2%"
    icon="exit_to_app"
    trend={{ value: "+2.1%", direction: "down" }}
    description="Páginas de entrada"
  />
  <StatCard
    label="Tickets abiertos"
    value="27"
    icon="support_agent"
    description="Promedio: 4h respuesta"
  />
</div>`

const statProps = [
  { name: "label", type: "string", defaultValue: "—", description: "Etiqueta de la métrica (en la parte superior)." },
  { name: "value", type: "string | number", defaultValue: "—", description: "Valor principal de la métrica (grande, en negrita)." },
  { name: "description", type: "string", defaultValue: "—", description: "Texto secundario debajo del valor." },
  { name: "icon", type: "string", defaultValue: "—", description: "Nombre de ícono Material (aparece en el corner derecho)." },
  { name: "trend", type: "{ value: string; direction: 'up' | 'down' }", defaultValue: "—", description: "Indicador de tendencia. 'up' = success, 'down' = destructive." },
]

export default async function StatCardPage() {
  const [basicHtml, iconHtml, trendHtml, fullHtml] = await Promise.all([
    highlight(basicCode),
    highlight(iconCode),
    highlight(trendCode),
    highlight(fullCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
          <a
            href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Stat Card</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Tarjeta de métrica con valor destacado, etiqueta, ícono opcional y
            tendencia (positiva/negativa). Ideal para dashboards y paneles de KPIs.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <ComponentPreview
          preview={<StatCard label="Usuarios activos" value="12,483" className="w-56" />}
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con ícono</h2>
        <p className="text-sm text-muted-foreground">
          El ícono aparece en el corner superior derecho con fondo{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">primary/10</code>.
        </p>
        <ComponentPreview
          preview={<StatCard label="Ingresos del mes" value="$48,200" icon="payments" className="w-56" />}
          codeHtml={iconHtml}
          code={iconCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con tendencia</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">direction: "up"</code>{" "}
          usa el color success;{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">direction: "down"</code>{" "}
          usa destructive.
        </p>
        <ComponentPreview
          preview={
            <div className="grid grid-cols-2 gap-3">
              <StatCard
                label="Ventas"
                value="$24,500"
                trend={{ value: "+12%", direction: "up" }}
              />
              <StatCard
                label="Devoluciones"
                value="142"
                trend={{ value: "-5%", direction: "down" }}
              />
            </div>
          }
          codeHtml={trendHtml}
          code={trendCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Grid de métricas</h2>
        <p className="text-sm text-muted-foreground">
          Combina múltiples cards en un grid para armar un panel de KPIs completo.
        </p>
        <ComponentPreview
          preview={
            <div className="grid grid-cols-2 gap-3">
              <StatCard
                label="Usuarios activos"
                value="12,483"
                icon="person"
                trend={{ value: "+8%", direction: "up" }}
                description="Últimos 30 días"
              />
              <StatCard
                label="Ingresos"
                value="$48,200"
                icon="payments"
                trend={{ value: "+23%", direction: "up" }}
                description="Vs mes anterior"
              />
              <StatCard
                label="Tasa de rebote"
                value="34.2%"
                icon="exit_to_app"
                trend={{ value: "+2.1%", direction: "down" }}
                description="Páginas de entrada"
              />
              <StatCard
                label="Tickets abiertos"
                value="27"
                icon="support_agent"
                description="Promedio: 4h respuesta"
              />
            </div>
          }
          codeHtml={fullHtml}
          code={fullCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={statProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            Las métricas de tendencia usan color como señal — complementa con texto descriptivo
            para usuarios con daltonismo (ej. &quot;+12% vs mes anterior&quot;).
          </li>
          <li>
            Si la tarjeta es clickable (redirige a un detalle), envuélvela en un{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Link>"}</code>{" "}
            o <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<button>"}</code>{" "}
            con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            descriptivo.
          </li>
        </ul>
      </section>
    </article>
  )
}
