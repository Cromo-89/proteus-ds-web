import type { Metadata } from "next"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { Rating } from "@/components/ui/rating"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { RatingInteractiveDemo } from "@/components/docs/display-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Rating" }

const basicCode = `<Rating defaultValue={3} />`

const interactiveCode = `"use client"
const [value, setValue] = useState(0)

<Rating value={value} onValueChange={setValue} />
<p className="text-sm text-muted-foreground">
  {value === 0 ? "Sin calificación" : \`\${value} de 5 estrellas\`}
</p>`

const readOnlyCode = `<Rating defaultValue={4} readOnly />`

const disabledCode = `<Rating defaultValue={2} disabled />`

const customMaxCode = `<Rating defaultValue={7} max={10} readOnly />`

const ratingProps = [
  { name: "value", type: "number", defaultValue: "—", description: "Valor en modo controlado." },
  { name: "defaultValue", type: "number", defaultValue: "0", description: "Valor inicial en modo no controlado." },
  { name: "onValueChange", type: "(value: number) => void", defaultValue: "—", description: "Callback con el número de estrellas seleccionadas." },
  { name: "max", type: "number", defaultValue: "5", description: "Número total de estrellas." },
  { name: "readOnly", type: "boolean", defaultValue: "false", description: "Solo muestra el valor, no permite interacción." },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Deshabilita toda interacción y opaca el componente." },
]

export default async function RatingPage() {
  const [basicHtml, interactiveHtml, readOnlyHtml, disabledHtml, customMaxHtml] = await Promise.all([
    highlight(basicCode),
    highlight(interactiveCode),
    highlight(readOnlyCode),
    highlight(disabledCode),
    highlight(customMaxCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Rating</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Componente de calificación con estrellas. Soporta modo interactivo,
            solo lectura y deshabilitado. El hover previsualiza la selección antes de confirmar.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <ComponentPreview
          preview={<Rating defaultValue={3} />}
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Interactivo</h2>
        <p className="text-sm text-muted-foreground">
          Con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">value</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onValueChange</code>{" "}
          en modo controlado. El hover previsualiza la calificación en tiempo real.
        </p>
        <ComponentPreview
          preview={<RatingInteractiveDemo />}
          codeHtml={interactiveHtml}
          code={interactiveCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Solo lectura</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">readOnly</code>{" "}
          para mostrar una calificación sin permitir cambios — ideal en tarjetas de producto.
        </p>
        <ComponentPreview
          preview={<Rating defaultValue={4} readOnly />}
          codeHtml={readOnlyHtml}
          code={readOnlyCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Deshabilitado</h2>
        <ComponentPreview
          preview={<Rating defaultValue={2} disabled />}
          codeHtml={disabledHtml}
          code={disabledCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Máximo personalizado</h2>
        <p className="text-sm text-muted-foreground">
          Cambia <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">max</code> para
          escalar a 10 estrellas u otro valor.
        </p>
        <ComponentPreview
          preview={<Rating defaultValue={7} max={10} readOnly />}
          codeHtml={customMaxHtml}
          code={customMaxCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={ratingProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            Cada estrella es un{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<button>"}</code>{" "}
            con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="N de 5"</code>{" "}
            y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-pressed</code>.
          </li>
          <li>
            El contenedor tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="group"</code>{" "}
            con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            que anuncia la calificación actual.
          </li>
          <li>
            En modo <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">readOnly</code>,
            considera usar un elemento semántico como{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<meter>"}</code>{" "}
            en lugar de botones para reflejar mejor la semántica.
          </li>
        </ul>
      </section>
    </article>
  )
}
