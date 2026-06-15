import type { Metadata } from "next"
import { Tag } from "@/components/ui/tag"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { TagDismissibleDemo } from "@/components/docs/tag-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Tag" }

const variantsCode = `<div className="flex flex-wrap gap-2">
  <Tag variant="default">Default</Tag>
  <Tag variant="secondary">Secondary</Tag>
  <Tag variant="outline">Outline</Tag>
  <Tag variant="destructive">Destructive</Tag>
  <Tag variant="success">Success</Tag>
  <Tag variant="warning">Warning</Tag>
  <Tag variant="info">Info</Tag>
</div>`

const iconsCode = `<div className="flex flex-wrap gap-2">
  <Tag variant="success">
    <Icon name="check_circle" size={14} filled />
    Verificado
  </Tag>
  <Tag variant="warning">
    <Icon name="warning" size={14} filled />
    Pendiente
  </Tag>
  <Tag variant="destructive">
    <Icon name="cancel" size={14} filled />
    Rechazado
  </Tag>
  <Tag variant="info">
    <Icon name="info" size={14} filled />
    En revisión
  </Tag>
</div>`

const dismissCode = `const [tags, setTags] = useState(["React", "TypeScript", "Tailwind CSS", "Next.js"])

<div className="flex flex-wrap gap-2">
  {tags.map((t) => (
    <Tag
      key={t}
      onDismiss={() => setTags((prev) => prev.filter((x) => x !== t))}
    >
      {t}
    </Tag>
  ))}
</div>`

const filterCode = `<div className="flex flex-wrap gap-2">
  <span className="text-xs text-muted-foreground self-center">Filtros activos:</span>
  <Tag variant="secondary" onDismiss={() => {}}>Categoría: UI</Tag>
  <Tag variant="secondary" onDismiss={() => {}}>Estado: Activo</Tag>
  <Tag variant="secondary" onDismiss={() => {}}>Autor: Ana García</Tag>
</div>`

const tagProps = [
  {
    name: "variant",
    type: '"default" | "secondary" | "outline" | "destructive" | "success" | "warning" | "info"',
    defaultValue: '"default"',
    description: "Color semántico del tag.",
  },
  {
    name: "onDismiss",
    type: "() => void",
    defaultValue: "—",
    description: "Si se provee, muestra un botón × para eliminar el tag.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    defaultValue: "—",
    description: "Contenido del tag.",
    required: true,
  },
]

export default async function TagPage() {
  const [variantsHtml, iconsHtml, dismissHtml, filterHtml] = await Promise.all([
    highlight(variantsCode),
    highlight(iconsCode),
    highlight(dismissCode),
    highlight(filterCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
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
          <h1 className="text-4xl font-bold tracking-tight">Tag</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Etiqueta interactiva para categorización, filtros y selección múltiple.
            A diferencia de Badge, Tag soporta acción de dismiss y está orientado
            a flujos donde el usuario controla las etiquetas activas.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Variantes</h2>
        <p className="text-sm text-muted-foreground">
          7 variantes semánticas para comunicar contexto sin depender solo del color.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-2">
              <Tag variant="default">Default</Tag>
              <Tag variant="secondary">Secondary</Tag>
              <Tag variant="outline">Outline</Tag>
              <Tag variant="destructive">Destructive</Tag>
              <Tag variant="success">Success</Tag>
              <Tag variant="warning">Warning</Tag>
              <Tag variant="info">Info</Tag>
            </div>
          }
          codeHtml={variantsHtml}
          code={variantsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con íconos</h2>
        <p className="text-sm text-muted-foreground">
          Usa íconos de tamaño <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">12</code> antes
          del texto para reforzar el estado visualmente.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-2">
              <Tag variant="success">
                <Icon name="check_circle" size={14} filled />
                Verificado
              </Tag>
              <Tag variant="warning">
                <Icon name="warning" size={14} filled />
                Pendiente
              </Tag>
              <Tag variant="destructive">
                <Icon name="cancel" size={14} filled />
                Rechazado
              </Tag>
              <Tag variant="info">
                <Icon name="info" size={14} filled />
                En revisión
              </Tag>
            </div>
          }
          codeHtml={iconsHtml}
          code={iconsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Dismissible</h2>
        <p className="text-sm text-muted-foreground">
          Pasa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onDismiss</code> para
          mostrar el botón ×. El demo a continuación es interactivo.
        </p>
        <ComponentPreview
          preview={<TagDismissibleDemo />}
          codeHtml={dismissHtml}
          code={dismissCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Filtros activos</h2>
        <p className="text-sm text-muted-foreground">
          Patrón común en vistas con filtros aplicados — muestra qué está activo
          y permite quitarlo individualmente.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground self-center">Filtros activos:</span>
              <Tag variant="secondary" onDismiss={() => {}}>Categoría: UI</Tag>
              <Tag variant="secondary" onDismiss={() => {}}>Estado: Activo</Tag>
              <Tag variant="secondary" onDismiss={() => {}}>Autor: Ana García</Tag>
            </div>
          }
          codeHtml={filterHtml}
          code={filterCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground">
          Acepta todos los atributos nativos de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<span>"}</code>.
        </p>
        <PropsTable props={tagProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El botón × tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="Eliminar"</code> por defecto — sobreescríbelo si el contexto es más específico.</li>
          <li>Cuando tags son parte de un campo de entrada múltiple, envuélvelos en un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<fieldset>"}</code> con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<legend>"}</code>.</li>
          <li>No uses <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">variant</code> como único indicador de estado — acompaña siempre con texto o ícono.</li>
        </ul>
      </section>
    </article>
  )
}
