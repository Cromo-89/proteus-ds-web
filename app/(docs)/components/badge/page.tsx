import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Badge" }

const variantsCode = `<div className="flex flex-wrap gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="ghost">Ghost</Badge>
</div>`

const iconsCode = `<div className="flex flex-wrap gap-2">
  <Badge variant="default">
    <Icon name="check_circle" size={14} filled />
    Completado
  </Badge>
  <Badge variant="destructive">
    <Icon name="error" size={14} filled />
    Error
  </Badge>
  <Badge variant="outline">
    <Icon name="schedule" size={14} />
    Pendiente
  </Badge>
  <Badge variant="secondary">
    <Icon name="info" size={14} filled />
    Info
  </Badge>
</div>`

const semanticCode = `{/* Estado de publicación */}
<Badge variant="default">Publicado</Badge>
<Badge variant="outline">Borrador</Badge>
<Badge variant="secondary">Archivado</Badge>

{/* Estado de componente */}
<Badge variant="default" className="bg-success-bg text-success border-transparent">
  Stable
</Badge>
<Badge variant="outline" className="border-warning text-warning">
  Beta
</Badge>
<Badge variant="outline" className="border-muted-foreground text-muted-foreground">
  Deprecated
</Badge>`

const badgeProps = [
  {
    name: "variant",
    type: '"default" | "secondary" | "outline" | "destructive" | "ghost" | "link"',
    defaultValue: '"default"',
    description: "Estilo visual del badge.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    defaultValue: "—",
    description: "Texto, ícono o combinación.",
    required: true,
  },
  {
    name: "render",
    type: "React.ReactElement",
    defaultValue: "—",
    description: 'Cambia el elemento raíz. Ej: render={<a href="...">} para badge-link.',
  },
]

export default async function BadgePage() {
  const [variantsHtml, iconsHtml, semanticHtml] = await Promise.all([
    highlight(variantsCode),
    highlight(iconsCode),
    highlight(semanticCode),
  ])

  return (
    <article className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="default" className="bg-success-bg text-success border-transparent rounded-full">
            Stable
          </Badge>
          <a
            href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Badge</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Etiqueta compacta para comunicar estado, categoría o conteo.
            Disponible en 6 variantes y compatible con íconos de Material Symbols.
          </p>
        </div>
      </div>

      {/* Variantes */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Variantes</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">default</code> para
          estado activo o primario, <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">secondary</code> para
          estados neutros y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">outline</code> como
          alternativa sin relleno.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="ghost">Ghost</Badge>
            </div>
          }
          codeHtml={variantsHtml}
          code={variantsCode}
        />
      </section>

      {/* Con íconos */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con íconos</h2>
        <p className="text-sm text-muted-foreground">
          Agrega un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Icon />"}</code> de
          tamaño <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">14</code> antes del texto.
          El gap se maneja automáticamente.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">
                <Icon name="check_circle" size={14} filled />
                Completado
              </Badge>
              <Badge variant="destructive">
                <Icon name="error" size={14} filled />
                Error
              </Badge>
              <Badge variant="outline">
                <Icon name="schedule" size={14} />
                Pendiente
              </Badge>
              <Badge variant="secondary">
                <Icon name="info" size={14} filled />
                Info
              </Badge>
            </div>
          }
          codeHtml={iconsHtml}
          code={iconsCode}
        />
      </section>

      {/* Uso semántico */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Uso semántico</h2>
        <p className="text-sm text-muted-foreground">
          Combina variantes con clases de color semántico para estados de contenido y componentes.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-3">
              <div className="flex gap-2">
                <Badge variant="default">Publicado</Badge>
                <Badge variant="outline">Borrador</Badge>
                <Badge variant="secondary">Archivado</Badge>
              </div>
              <div className="flex gap-2">
                <Badge variant="default" className="bg-success-bg text-success border-transparent">
                  Stable
                </Badge>
                <Badge variant="outline" className="border-warning text-warning">
                  Beta
                </Badge>
                <Badge variant="outline" className="border-muted-foreground text-muted-foreground">
                  Deprecated
                </Badge>
              </div>
            </div>
          }
          codeHtml={semanticHtml}
          code={semanticCode}
        />
      </section>

      {/* Props */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground">
          Además de las siguientes props, acepta todos los atributos nativos de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<span>"}</code>.
        </p>
        <PropsTable props={badgeProps} />
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El badge es un elemento <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">span</code> semántico — no es interactivo por defecto.</li>
          <li>Para badges con información crítica (errores, alertas), asegúrate de que el texto sea suficiente sin depender solo del color.</li>
          <li>Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">render={"<a>"}</code> o <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">render={"<button>"}</code> si el badge debe ser interactivo.</li>
        </ul>
      </section>
    </article>
  )
}
