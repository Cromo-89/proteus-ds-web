import type { Metadata } from "next"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Spinner" }

const defaultCode = `<Spinner />`

const sizesCode = `<div className="flex items-center gap-4">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>`

const colorsCode = `<div className="flex items-center gap-4">
  <Spinner className="text-primary" />
  <Spinner className="text-muted-foreground" />
  <Spinner className="text-destructive" />
  <Spinner className="text-success" />
</div>`

const buttonCode = `<div className="flex items-center gap-3">
  <Button disabled>
    <Spinner size="sm" />
    Guardando...
  </Button>
  <Button variant="outline" disabled>
    <Spinner size="sm" />
    Cargando
  </Button>
</div>`

const spinnerProps = [
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "Tamaño del spinner. sm=16px, md=20px, lg=28px.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "—",
    description: 'Clases adicionales. Usa text-* para cambiar el color (hereda currentColor).',
  },
]

export default async function SpinnerPage() {
  const [defaultHtml, sizesHtml, colorsHtml, buttonHtml] = await Promise.all([
    highlight(defaultCode),
    highlight(sizesCode),
    highlight(colorsCode),
    highlight(buttonCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Spinner</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Indicador de carga animado para estados de espera indeterminados.
            Hereda el color del texto del elemento padre vía <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">currentColor</code>.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Default</h2>
        <ComponentPreview
          preview={<Spinner />}
          codeHtml={defaultHtml}
          code={defaultCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tamaños</h2>
        <p className="text-sm text-muted-foreground">
          Tres tamaños: <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">sm</code> para
          uso inline en botones, <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">md</code> como
          default, y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">lg</code> para loaders de sección.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-4">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
            </div>
          }
          codeHtml={sizesHtml}
          code={sizesCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Colores</h2>
        <p className="text-sm text-muted-foreground">
          Usa clases <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">text-*</code> para
          adaptar el color al contexto.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-4">
              <Spinner className="text-primary" />
              <Spinner className="text-muted-foreground" />
              <Spinner className="text-destructive" />
              <Spinner className="text-success" />
            </div>
          }
          codeHtml={colorsHtml}
          code={colorsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">En botones</h2>
        <p className="text-sm text-muted-foreground">
          Combina <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">size="sm"</code> con
          el botón en estado <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">disabled</code> para
          el patrón de loading.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-3">
              <Button disabled>
                <Spinner size="sm" />
                Guardando...
              </Button>
              <Button variant="outline" disabled>
                <Spinner size="sm" />
                Cargando
              </Button>
            </div>
          }
          codeHtml={buttonHtml}
          code={buttonCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={spinnerProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El elemento tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="status"</code> y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="Cargando"</code> por defecto.</li>
          <li>Para contextos donde la acción es específica, sobreescribe con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="Enviando formulario"</code>.</li>
          <li>Siempre acompaña el spinner con texto visible cuando sea posible (como en el patrón de botón).</li>
        </ul>
      </section>
    </article>
  )
}
