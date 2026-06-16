import type { Metadata } from "next"
import { Chip } from "@/components/ui/chip"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import {
  ChipSelectDemo,
  ChipDismissDemo,
  ChipSingleSelectDemo,
  ChipIconSelectDemo,
} from "@/components/docs/atom-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Chip" }

const defaultCode = `<div className="flex flex-wrap gap-2">
  <Chip>Diseño</Chip>
  <Chip>Desarrollo</Chip>
  <Chip>Producto</Chip>
</div>`

const selectCode = `"use client"
const [selected, setSelected] = useState<string[]>(["Diseño"])

<div className="flex flex-wrap gap-2">
  {["Diseño", "Desarrollo", "Producto", "Marketing", "QA"].map((label) => (
    <Chip
      key={label}
      selected={selected.includes(label)}
      onClick={() => toggle(label)}
    >
      {label}
    </Chip>
  ))}
</div>`

const singleCode = `"use client"
const [selected, setSelected] = useState("Mensual")

<div className="flex gap-2">
  {["Diario", "Mensual", "Anual"].map((opt) => (
    <Chip
      key={opt}
      variant="filled"
      selected={selected === opt}
      onClick={() => setSelected(opt)}
    >
      {opt}
    </Chip>
  ))}
</div>`

const dismissCode = `"use client"
const [chips, setChips] = useState(["React", "TypeScript", "Tailwind CSS", "Next.js"])

<div className="flex flex-wrap gap-2">
  {chips.map((label) => (
    <Chip
      key={label}
      onDismiss={() => setChips((prev) => prev.filter((c) => c !== label))}
    >
      {label}
    </Chip>
  ))}
</div>`

const iconCode = `"use client"
const [selected, setSelected] = useState<string[]>([])

<div className="flex flex-wrap gap-2">
  <Chip selected={selected.includes("Favorito")} onClick={() => toggle("Favorito")}>
    <Icon name="star" size={14} />
    Favorito
  </Chip>
  <Chip selected={selected.includes("Compartido")} onClick={() => toggle("Compartido")}>
    <Icon name="share" size={14} />
    Compartido
  </Chip>
  <Chip selected={selected.includes("Descargado")} onClick={() => toggle("Descargado")}>
    <Icon name="download" size={14} />
    Descargado
  </Chip>
</div>`

const sizesCode = `<div className="flex items-center gap-2">
  <Chip size="sm">Pequeño</Chip>
  <Chip size="default">Default</Chip>
</div>`

const chipProps = [
  {
    name: "selected",
    type: "boolean",
    defaultValue: "false",
    description: "Estado activo del chip. Agrega aria-pressed y aplica estilos de selección.",
  },
  {
    name: "onDismiss",
    type: "() => void",
    defaultValue: "—",
    description: "Si se provee, muestra botón × y cambia la raíz a <span> para evitar botones anidados.",
  },
  {
    name: "variant",
    type: '"default" | "filled"',
    defaultValue: '"default"',
    description: "default: borde visible, fondo transparente. filled: fondo sólido cuando está seleccionado.",
  },
  {
    name: "size",
    type: '"sm" | "default"',
    defaultValue: '"default"',
    description: "sm: 24px de alto, texto xs. default: 32px de alto, texto sm.",
  },
]

export default async function ChipPage() {
  const [defaultHtml, selectHtml, singleHtml, dismissHtml, iconHtml, sizesHtml] = await Promise.all([
    highlight(defaultCode),
    highlight(selectCode),
    highlight(singleCode),
    highlight(dismissCode),
    highlight(iconCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Chip</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Elemento seleccionable en forma de píldora para filtros, categorías y selección múltiple.
            A diferencia de Tag, Chip tiene estado activo/inactivo y está orientado a interacciones
            de selección que el usuario controla directamente.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Default</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-2">
              <Chip>Diseño</Chip>
              <Chip>Desarrollo</Chip>
              <Chip>Producto</Chip>
            </div>
          }
          codeHtml={defaultHtml}
          code={defaultCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Selección múltiple</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">selected</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onClick</code> para controlar
          el estado activo desde el componente padre. El demo es interactivo.
        </p>
        <ComponentPreview
          preview={<ChipSelectDemo />}
          codeHtml={selectHtml}
          code={selectCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Selección única — variante filled</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">variant="filled"</code>{" "}
          usa fondo sólido cuando está seleccionado — ideal para toggles de período o vista.
        </p>
        <ComponentPreview
          preview={<ChipSingleSelectDemo />}
          codeHtml={singleHtml}
          code={singleCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con ícono</h2>
        <p className="text-sm text-muted-foreground">
          Agrega un{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Icon>"}</code>{" "}
          como primer hijo. Usa tamaño <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">14</code>.
        </p>
        <ComponentPreview
          preview={<ChipIconSelectDemo />}
          codeHtml={iconHtml}
          code={iconCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Dismissible — input chip</h2>
        <p className="text-sm text-muted-foreground">
          Pasa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onDismiss</code> para
          convertir el chip en un input chip eliminable. Úsalo en campos de tags o búsquedas con filtros
          aplicados.
        </p>
        <ComponentPreview
          preview={<ChipDismissDemo />}
          codeHtml={dismissHtml}
          code={dismissCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tamaños</h2>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <Chip size="sm">Pequeño</Chip>
                <code className="font-mono text-[10px] text-muted-foreground">sm — 24px</code>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Chip size="default">Default</Chip>
                <code className="font-mono text-[10px] text-muted-foreground">default — 32px</code>
              </div>
            </div>
          }
          codeHtml={sizesHtml}
          code={sizesCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={chipProps} />
        <p className="text-sm text-muted-foreground">
          Sin <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onDismiss</code>: acepta
          todos los atributos de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<button>"}</code>.
          Con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onDismiss</code>: la raíz
          cambia a{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<span>"}</code>{" "}
          para evitar botones anidados.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Chip vs Tag vs Badge</h2>
        <div className="grid gap-3 text-sm sm:grid-cols-3">
          {[
            {
              name: "Chip",
              uses: [
                "Filtros seleccionables",
                "Input chips eliminables",
                "Toggles de categoría o período",
              ],
            },
            {
              name: "Tag",
              uses: [
                "Etiquetas de estado",
                "Metadatos de contenido",
                "Categorías en cards o tablas",
              ],
            },
            {
              name: "Badge",
              uses: [
                "Contadores de notificaciones",
                "Indicadores de estado fijo",
                "Labels de versión o rol",
              ],
            },
          ].map(({ name, uses }) => (
            <div key={name} className="space-y-2 rounded-lg border border-border/50 p-4">
              <p className="font-medium">{name} — úsalo para</p>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                {uses.map((u) => <li key={u}>{u}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            El chip seleccionable tiene{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-pressed</code>{" "}
            automáticamente — los lectores de pantalla anuncian el estado activo/inactivo.
          </li>
          <li>
            El botón × tiene{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="Eliminar"</code>{" "}
            por defecto. Si el contexto es más específico (ej. &quot;Eliminar filtro React&quot;), sobreescríbelo.
          </li>
          <li>
            En grupos de chips de selección múltiple, envuelve el conjunto en un{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<fieldset>"}</code>{" "}
            con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<legend>"}</code>{" "}
            para describir el propósito del grupo.
          </li>
        </ul>
      </section>
    </article>
  )
}
