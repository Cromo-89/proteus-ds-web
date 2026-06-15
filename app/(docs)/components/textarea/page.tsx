import type { Metadata } from "next"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { TextareaCounterDemo } from "@/components/docs/textarea-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Textarea" }

const basicCode = `<Textarea placeholder="Escribe aquí..." />`

const labelCode = `<div className="flex flex-col gap-1.5 w-72">
  <Label htmlFor="bio">Biografía</Label>
  <Textarea id="bio" placeholder="Cuéntanos sobre ti..." rows={4} />
  <p className="text-xs text-muted-foreground">Máximo 500 caracteres.</p>
</div>`

const statesCode = `{/* Deshabilitado */}
<Textarea placeholder="No disponible" disabled />

{/* Error */}
<Textarea
  defaultValue="texto inválido@@"
  aria-invalid
  aria-describedby="msg-error"
/>
<p id="msg-error" className="text-xs text-destructive">
  El campo contiene caracteres no permitidos.
</p>`

const counterCode = `"use client"

const MAX = 280

export function TextareaCounterDemo() {
  const [value, setValue] = useState("")
  const remaining = MAX - value.length
  return (
    <div className="flex flex-col gap-1.5 w-72">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="¿Qué está pasando?"
        aria-invalid={remaining < 0 || undefined}
        rows={3}
      />
      <p className={\`text-xs text-right \${remaining < 0 ? "text-destructive" : "text-muted-foreground"}\`}>
        {remaining} caracteres restantes
      </p>
    </div>
  )
}`

const textareaProps = [
  { name: "placeholder", type: "string", defaultValue: "—", description: "Texto placeholder." },
  { name: "rows", type: "number", defaultValue: "—", description: "Altura inicial en líneas. El textarea crece automáticamente con el contenido (field-sizing-content)." },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Deshabilita el campo." },
  { name: "aria-invalid", type: "boolean", defaultValue: "—", description: "Aplica estilos de error cuando es true." },
  { name: "className", type: "string", defaultValue: "—", description: "Clases adicionales." },
]

export default async function TextareaPage() {
  const [basicHtml, labelHtml, statesHtml, counterHtml] = await Promise.all([
    highlight(basicCode),
    highlight(labelCode),
    highlight(statesCode),
    highlight(counterCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Textarea</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Campo de texto multilínea con auto-resize via{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">field-sizing-content</code>.
            Soporta estados de validación via <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">aria-invalid</code>.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Default</h2>
        <ComponentPreview
          preview={<Textarea placeholder="Escribe aquí..." className="w-72" />}
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con label y descripción</h2>
        <p className="text-sm text-muted-foreground">
          Combina con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Label</code> y
          un párrafo de descripción para formularios completos.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-1.5 w-72">
              <Label htmlFor="bio-ex">Biografía</Label>
              <Textarea id="bio-ex" placeholder="Cuéntanos sobre ti..." rows={4} />
              <p className="text-xs text-muted-foreground">Máximo 500 caracteres.</p>
            </div>
          }
          codeHtml={labelHtml}
          code={labelCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Estados</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">disabled</code> para
          bloquear el campo y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-invalid</code> para
          el estado de error.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-72">
              <Textarea placeholder="No disponible" disabled />
              <div className="flex flex-col gap-1.5">
                <Textarea
                  defaultValue="texto inválido@@"
                  aria-invalid
                  aria-describedby="err-ex"
                />
                <p id="err-ex" className="flex items-center gap-1 text-xs text-destructive">
                  <Icon name="error" size={14} filled />
                  El campo contiene caracteres no permitidos.
                </p>
              </div>
            </div>
          }
          codeHtml={statesHtml}
          code={statesCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con contador de caracteres</h2>
        <p className="text-sm text-muted-foreground">
          Patrón cliente: el contador se vuelve rojo y el campo muestra error al superar el límite.
        </p>
        <ComponentPreview
          preview={<TextareaCounterDemo />}
          codeHtml={counterHtml}
          code={counterCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground">
          Acepta todos los atributos de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<textarea>"}</code>.
        </p>
        <PropsTable props={textareaProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Siempre asocia el textarea con un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Label</code> vía <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">htmlFor</code> / <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">id</code>.</li>
          <li>Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-describedby</code> para conectar el mensaje de error al campo.</li>
          <li>El auto-resize via <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">field-sizing-content</code> no afecta la accesibilidad — el contenido siempre es visible.</li>
        </ul>
      </section>
    </article>
  )
}
