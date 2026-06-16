import type { Metadata } from "next"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Toggle Group" }

const defaultCode = `<ToggleGroup>
  <ToggleGroupItem value="bold">
    <Icon name="format_bold" size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Icon name="format_italic" size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline">
    <Icon name="format_underlined" size={16} />
  </ToggleGroupItem>
</ToggleGroup>`

const textCode = `<ToggleGroup>
  <ToggleGroupItem value="list">Lista</ToggleGroupItem>
  <ToggleGroupItem value="grid">Cuadrícula</ToggleGroupItem>
  <ToggleGroupItem value="board">Tablero</ToggleGroupItem>
</ToggleGroup>`

const outlineCode = `<ToggleGroup variant="outline" spacing={0}>
  <ToggleGroupItem value="left">
    <Icon name="format_align_left" size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <Icon name="format_align_center" size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <Icon name="format_align_right" size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="justify">
    <Icon name="format_align_justify" size={16} />
  </ToggleGroupItem>
</ToggleGroup>`

const controlledCode = `"use client"
const [view, setView] = useState("grid")

<ToggleGroup value={view} onValueChange={(v) => v && setView(v)}>
  <ToggleGroupItem value="list">
    <Icon name="view_list" size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="grid">
    <Icon name="grid_view" size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="board">
    <Icon name="view_kanban" size={16} />
  </ToggleGroupItem>
</ToggleGroup>`

const verticalCode = `<ToggleGroup orientation="vertical" variant="outline" spacing={0}>
  <ToggleGroupItem value="map">
    <Icon name="map" size={16} />
    Mapa
  </ToggleGroupItem>
  <ToggleGroupItem value="satellite">
    <Icon name="satellite_alt" size={16} />
    Satélite
  </ToggleGroupItem>
  <ToggleGroupItem value="terrain">
    <Icon name="terrain" size={16} />
    Relieve
  </ToggleGroupItem>
</ToggleGroup>`

const sizesCode = `<div className="flex flex-col gap-3">
  <ToggleGroup size="sm">
    <ToggleGroupItem value="a">Pequeño</ToggleGroupItem>
    <ToggleGroupItem value="b">Texto</ToggleGroupItem>
    <ToggleGroupItem value="c">Opciones</ToggleGroupItem>
  </ToggleGroup>

  <ToggleGroup size="default">
    <ToggleGroupItem value="a">Default</ToggleGroupItem>
    <ToggleGroupItem value="b">Texto</ToggleGroupItem>
    <ToggleGroupItem value="c">Opciones</ToggleGroupItem>
  </ToggleGroup>

  <ToggleGroup size="lg">
    <ToggleGroupItem value="a">Grande</ToggleGroupItem>
    <ToggleGroupItem value="b">Texto</ToggleGroupItem>
    <ToggleGroupItem value="c">Opciones</ToggleGroupItem>
  </ToggleGroup>
</div>`

const groupProps = [
  {
    name: "variant",
    type: '"default" | "outline"',
    defaultValue: '"default"',
    description: "default: items con fondo al activarse. outline: borde continuo entre items (usa spacing={0}).",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    defaultValue: '"default"',
    description: "Tamaño de todos los items del grupo. Se propaga via contexto.",
  },
  {
    name: "spacing",
    type: "number",
    defaultValue: "2",
    description: "Gap entre items en unidades de spacing. 0 fusiona los bordes (estilo segmented).",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
    description: "Orientación del grupo. vertical apila los items en columna.",
  },
  {
    name: "value",
    type: "string[]",
    defaultValue: "—",
    description: "Valores activos en modo controlado.",
  },
  {
    name: "onValueChange",
    type: "(value: string[]) => void",
    defaultValue: "—",
    description: "Callback al cambiar la selección.",
  },
]

export default async function ToggleGroupPage() {
  const [defaultHtml, textHtml, outlineHtml, controlledHtml, verticalHtml, sizesHtml] = await Promise.all([
    highlight(defaultCode),
    highlight(textCode),
    highlight(outlineCode),
    highlight(controlledCode),
    highlight(verticalCode),
    highlight(sizesCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Toggle Group</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Grupo de botones toggle para selección exclusiva o múltiple. Maneja el estado
            internamente sin necesidad de useState — úsalo controlado solo cuando necesites
            leer o escribir la selección desde el exterior.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Solo íconos</h2>
        <p className="text-sm text-muted-foreground">
          Selección única por defecto. Haz click en los items para verlo en acción.
        </p>
        <ComponentPreview
          preview={
            <ToggleGroup>
              <ToggleGroupItem value="bold">
                <Icon name="format_bold" size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic">
                <Icon name="format_italic" size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline">
                <Icon name="format_underlined" size={16} />
              </ToggleGroupItem>
            </ToggleGroup>
          }
          codeHtml={defaultHtml}
          code={defaultCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con texto</h2>
        <p className="text-sm text-muted-foreground">
          Úsalo para cambiar vistas o modos donde el label es más claro que un ícono.
        </p>
        <ComponentPreview
          preview={
            <ToggleGroup>
              <ToggleGroupItem value="list">Lista</ToggleGroupItem>
              <ToggleGroupItem value="grid">Cuadrícula</ToggleGroupItem>
              <ToggleGroupItem value="board">Tablero</ToggleGroupItem>
            </ToggleGroup>
          }
          codeHtml={textHtml}
          code={textCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Outline — bordes fusionados</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">variant="outline"</code>{" "}
          con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">spacing={"{0}"}</code>{" "}
          fusiona los bordes entre items — ideal para controles de alineación o vistas tipo segmented control.
        </p>
        <ComponentPreview
          preview={
            <ToggleGroup variant="outline" spacing={0}>
              <ToggleGroupItem value="left">
                <Icon name="format_align_left" size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <Icon name="format_align_center" size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <Icon name="format_align_right" size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify">
                <Icon name="format_align_justify" size={16} />
              </ToggleGroupItem>
            </ToggleGroup>
          }
          codeHtml={outlineHtml}
          code={outlineCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Controlado</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">value</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onValueChange</code> para
          leer o escribir la selección desde el componente padre. El callback recibe{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">string | null</code> —
          guarda el valor solo cuando no es nulo para evitar deselección.
        </p>
        <ComponentPreview
          preview={
            <ToggleGroup defaultValue={["grid"]}>
              <ToggleGroupItem value="list">
                <Icon name="view_list" size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="grid">
                <Icon name="grid_view" size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="board">
                <Icon name="view_kanban" size={16} />
              </ToggleGroupItem>
            </ToggleGroup>
          }
          codeHtml={controlledHtml}
          code={controlledCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Vertical</h2>
        <ComponentPreview
          preview={
            <ToggleGroup orientation="vertical" variant="outline" spacing={0}>
              <ToggleGroupItem value="map">
                <Icon name="map" size={16} />
                Mapa
              </ToggleGroupItem>
              <ToggleGroupItem value="satellite">
                <Icon name="satellite_alt" size={16} />
                Satélite
              </ToggleGroupItem>
              <ToggleGroupItem value="terrain">
                <Icon name="terrain" size={16} />
                Relieve
              </ToggleGroupItem>
            </ToggleGroup>
          }
          codeHtml={verticalHtml}
          code={verticalCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tamaños</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3">
              {(["sm", "default", "lg"] as const).map((size) => (
                <div key={size} className="flex items-center gap-3">
                  <ToggleGroup size={size}>
                    <ToggleGroupItem value="a">Opción A</ToggleGroupItem>
                    <ToggleGroupItem value="b">Opción B</ToggleGroupItem>
                    <ToggleGroupItem value="c">Opción C</ToggleGroupItem>
                  </ToggleGroup>
                  <code className="font-mono text-[10px] text-muted-foreground">{size}</code>
                </div>
              ))}
            </div>
          }
          codeHtml={sizesHtml}
          code={sizesCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm font-medium">ToggleGroup</p>
        <PropsTable props={groupProps} />
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ToggleGroupItem</code>{" "}
          acepta las mismas props que{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Toggle</code>{" "}
          más <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">value: string</code>{" "}
          (requerido).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Toggle Group vs Segmented Control</h2>
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <div className="space-y-2 rounded-lg border border-border/50 p-4">
            <p className="font-medium">Toggle Group — úsalo para</p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Cambiar vistas (lista / grilla / tablero)</li>
              <li>Formateo de texto (Bold / Italic / ...)</li>
              <li>Filtros múltiples activos</li>
              <li>Opciones no mutuamente excluyentes</li>
            </ul>
          </div>
          <div className="space-y-2 rounded-lg border border-border/50 p-4">
            <p className="font-medium">Segmented Control — úsalo para</p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Cambiar el estado de una sola dimensión</li>
              <li>Exactamente 2–4 opciones mutuamente excluyentes</li>
              <li>Contexto de navegación dentro de una vista</li>
              <li>Reemplazar un pequeño Select con opciones visibles</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            Base UI genera <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="group"</code>{" "}
            en el contenedor y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-pressed</code>{" "}
            en cada item automáticamente.
          </li>
          <li>
            Agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            al <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ToggleGroup</code>{" "}
            cuando el propósito no es obvio por contexto visual (ej. <code>aria-label="Alineación de texto"</code>).
          </li>
          <li>
            Para items solo con ícono, agrega{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            en cada <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ToggleGroupItem</code>{" "}
            para que los lectores de pantalla anuncien la acción.
          </li>
        </ul>
      </section>
    </article>
  )
}
