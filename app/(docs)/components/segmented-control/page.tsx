import type { Metadata } from "next"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import {
  SegmentedControlBasicDemo,
  SegmentedControlIconsDemo,
  SegmentedControlSmDemo,
  SegmentedControlVerticalDemo,
} from "@/components/docs/display-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Segmented Control" }

const basicCode = `"use client"
import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function DateRangePicker() {
  const [selected, setSelected] = useState("month")
  return (
    <ToggleGroup
      spacing={0}
      variant="outline"
      value={[selected]}
      onValueChange={(vals) => {
        const next = vals.find((v) => v !== selected)
        if (next) setSelected(next)
      }}
    >
      <ToggleGroupItem value="week">Semana</ToggleGroupItem>
      <ToggleGroupItem value="month">Mes</ToggleGroupItem>
      <ToggleGroupItem value="year">Año</ToggleGroupItem>
    </ToggleGroup>
  )
}`

const iconsCode = `<ToggleGroup spacing={0} variant="outline" value={[view]} onValueChange={...}>
  <ToggleGroupItem value="list">
    <Icon name="view_list" size={16} />
    Lista
  </ToggleGroupItem>
  <ToggleGroupItem value="grid">
    <Icon name="grid_view" size={16} />
    Cuadrícula
  </ToggleGroupItem>
  <ToggleGroupItem value="kanban">
    <Icon name="view_kanban" size={16} />
    Kanban
  </ToggleGroupItem>
</ToggleGroup>`

const smCode = `<ToggleGroup spacing={0} size="sm" variant="outline" value={[selected]} onValueChange={...}>
  <ToggleGroupItem value="day">Día</ToggleGroupItem>
  <ToggleGroupItem value="week">Semana</ToggleGroupItem>
  <ToggleGroupItem value="month">Mes</ToggleGroupItem>
  <ToggleGroupItem value="year">Año</ToggleGroupItem>
</ToggleGroup>`

const verticalCode = `<ToggleGroup spacing={0} variant="outline" orientation="vertical" value={[selected]} onValueChange={...}>
  <ToggleGroupItem value="profile">
    <Icon name="person" size={16} />
    Perfil
  </ToggleGroupItem>
  <ToggleGroupItem value="notifications">
    <Icon name="notifications" size={16} />
    Notificaciones
  </ToggleGroupItem>
  <ToggleGroupItem value="security">
    <Icon name="shield" size={16} />
    Seguridad
  </ToggleGroupItem>
</ToggleGroup>`

const groupProps = [
  { name: "spacing", type: "number", defaultValue: "2", description: 'Gap entre ítems. Con spacing={0} los ítems comparten bordes formando un bloque unificado (segmented control).' },
  { name: "variant", type: '"default" | "outline"', defaultValue: '"default"', description: '"outline" añade borde visible a cada ítem, refuerza el aspecto de segmented control.' },
  { name: "size", type: '"sm" | "default" | "lg"', defaultValue: '"default"', description: "Tamaño de los ítems individuales." },
  { name: "orientation", type: '"horizontal" | "vertical"', defaultValue: '"horizontal"', description: "Dirección del grupo." },
  { name: "value", type: "string[]", defaultValue: "—", description: "Ítems activos (modo controlado)." },
  { name: "defaultValue", type: "string[]", defaultValue: "—", description: "Ítems activos iniciales (modo no controlado)." },
  { name: "onValueChange", type: "(value: string[]) => void", defaultValue: "—", description: "Callback al cambiar la selección." },
]

export default async function SegmentedControlPage() {
  const [basicHtml, iconsHtml, smHtml, verticalHtml] = await Promise.all([
    highlight(basicCode),
    highlight(iconsCode),
    highlight(smCode),
    highlight(verticalCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Segmented Control</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Selector de opción única con visibilidad completa de las alternativas. Construido
            sobre <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">ToggleGroup</code> con{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">spacing={"{0}"}</code> y{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">variant="outline"</code>{" "}
            para el aspecto de bloque unificado.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Componente cliente:</strong> Requiere{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">"use client"</code>{" "}
          para gestionar el estado de selección. Para selección única (segmented control),
          implementa la lógica de exclusión en el handler de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onValueChange</code>.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Selector de rango de fechas. El handler en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onValueChange</code>{" "}
          asegura selección única: toma el nuevo valor y evita deseleccionar todos.
        </p>
        <ComponentPreview
          preview={<SegmentedControlBasicDemo />}
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con íconos y texto</h2>
        <p className="text-sm text-muted-foreground">
          Combina ícono y etiqueta para cambios de vista (lista, cuadrícula, kanban).
        </p>
        <ComponentPreview
          preview={<SegmentedControlIconsDemo />}
          codeHtml={iconsHtml}
          code={iconsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tamaño pequeño</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">size="sm"</code> para
          contextos compactos como toolbars o cabeceras de panel.
        </p>
        <ComponentPreview
          preview={<SegmentedControlSmDemo />}
          codeHtml={smHtml}
          code={smCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Vertical — navegación lateral</h2>
        <p className="text-sm text-muted-foreground">
          Con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">orientation="vertical"</code>{" "}
          funciona como navegación de secciones en páginas de configuración.
        </p>
        <ComponentPreview
          preview={<SegmentedControlVerticalDemo />}
          codeHtml={verticalHtml}
          code={verticalCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — ToggleGroup</h2>
        <PropsTable props={groupProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Cuándo usar</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 font-medium">Situación</th>
                <th className="text-left py-2 font-medium">Componente</th>
              </tr>
            </thead>
            <tbody className="divide-y text-muted-foreground">
              <tr>
                <td className="py-2 pr-4">2–5 opciones mutuamente exclusivas visibles</td>
                <td className="py-2 font-medium text-foreground">Segmented Control</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">5+ opciones o con lógica compleja</td>
                <td className="py-2">Select / DropdownMenu</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Navegación entre páginas o secciones</td>
                <td className="py-2">Tabs (con URL) o SegmentedControl (sin URL)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Múltiples opciones activables</td>
                <td className="py-2">ToggleGroup sin lógica de exclusión</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Cada ítem tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-pressed</code> que refleja su estado activo.</li>
          <li>Navegación por teclado: <kbd className="rounded bg-muted px-1 font-mono text-xs">Tab</kbd> entre ítems, <kbd className="rounded bg-muted px-1 font-mono text-xs">Enter</kbd> / <kbd className="rounded bg-muted px-1 font-mono text-xs">Space</kbd> para seleccionar.</li>
          <li>Asegura que siempre haya exactamente un ítem activo para evitar ambigüedad semántica.</li>
        </ul>
      </section>
    </article>
  )
}
