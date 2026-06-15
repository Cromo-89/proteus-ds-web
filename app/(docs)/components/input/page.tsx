import type { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Input" }

const basicCode = `<div className="flex flex-col gap-4 w-72">
  <Input placeholder="Escribe algo..." />
  <Input type="email" placeholder="correo@ejemplo.com" />
  <Input type="password" placeholder="Contraseña" />
  <Input type="number" placeholder="0" />
</div>`

const withLabelCode = `<div className="flex flex-col gap-1.5 w-72">
  <Label htmlFor="email">Correo electrónico</Label>
  <Input id="email" type="email" placeholder="correo@ejemplo.com" />
</div>`

const statesCode = `<div className="flex flex-col gap-4 w-72">
  {/* Default */}
  <Input placeholder="Default" />

  {/* Con valor */}
  <Input defaultValue="Valor existente" />

  {/* Disabled */}
  <Input placeholder="Deshabilitado" disabled />

  {/* Error — aria-invalid activa el estilo de error */}
  <Input placeholder="Campo inválido" aria-invalid />
</div>`

const withIconCode = `{/* Ícono a la izquierda — usando un wrapper */}
<div className="relative w-72">
  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
    <Icon name="search" size={16} />
  </span>
  <Input className="pl-8" placeholder="Buscar..." />
</div>

{/* Ícono a la derecha */}
<div className="relative w-72">
  <Input className="pr-8" type="email" placeholder="correo@ejemplo.com" />
  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
    <Icon name="mail" size={16} />
  </span>
</div>`

const inputProps = [
  {
    name: "type",
    type: '"text" | "email" | "password" | "number" | "search" | "url" | ...',
    defaultValue: '"text"',
    description: "Tipo de input nativo HTML.",
  },
  {
    name: "placeholder",
    type: "string",
    defaultValue: "—",
    description: "Texto de placeholder cuando el campo está vacío.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Deshabilita el input e impide la interacción.",
  },
  {
    name: "aria-invalid",
    type: "boolean",
    defaultValue: "false",
    description: "Activa el estilo de error (borde destructive + ring).",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "—",
    description: "Clases adicionales para padding o width personalizado.",
  },
]

export default async function InputPage() {
  const [basicHtml, withLabelHtml, statesHtml, withIconHtml] = await Promise.all([
    highlight(basicCode),
    highlight(withLabelCode),
    highlight(statesCode),
    highlight(withIconCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Input</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Campo de texto de una línea para capturar datos del usuario.
            Soporta todos los tipos nativos de HTML con estilos consistentes de focus y error.
          </p>
        </div>
      </div>

      {/* Básico */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tipos</h2>
        <p className="text-sm text-muted-foreground">
          El input acepta cualquier tipo nativo HTML. El estilo es consistente en todos los tipos.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-72">
              <Input placeholder="Escribe algo..." />
              <Input type="email" placeholder="correo@ejemplo.com" />
              <Input type="password" placeholder="Contraseña" />
              <Input type="number" placeholder="0" />
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      {/* Con Label */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con Label</h2>
        <p className="text-sm text-muted-foreground">
          Siempre asocia un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Label />"}</code> al
          input usando <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">htmlFor</code> e{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">id</code> correspondientes.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-1.5 w-72">
              <Label htmlFor="email-demo">Correo electrónico</Label>
              <Input id="email-demo" type="email" placeholder="correo@ejemplo.com" />
            </div>
          }
          codeHtml={withLabelHtml}
          code={withLabelCode}
        />
      </section>

      {/* Estados */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Estados</h2>
        <p className="text-sm text-muted-foreground">
          El estado de error se activa con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-invalid</code> —
          esto aplica el borde destructive y el ring sin necesitar clases extra.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-72">
              <Input placeholder="Default" />
              <Input defaultValue="Valor existente" />
              <Input placeholder="Deshabilitado" disabled />
              <Input placeholder="Campo inválido" aria-invalid />
            </div>
          }
          codeHtml={statesHtml}
          code={statesCode}
        />
      </section>

      {/* Con ícono */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con ícono</h2>
        <p className="text-sm text-muted-foreground">
          Usa un wrapper <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">relative</code> con
          el ícono posicionado en absoluto. Ajusta el padding del input para que el texto no quede
          debajo del ícono.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4">
              <div className="relative w-72">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                  <Icon name="search" size={16} />
                </span>
                <Input className="pl-8" placeholder="Buscar..." />
              </div>
              <div className="relative w-72">
                <Input className="pr-8" type="email" placeholder="correo@ejemplo.com" />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                  <Icon name="mail" size={16} />
                </span>
              </div>
            </div>
          }
          codeHtml={withIconHtml}
          code={withIconCode}
        />
      </section>

      {/* Props */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground">
          Extiende todos los atributos nativos de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<input>"}</code>.
        </p>
        <PropsTable props={inputProps} />
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Todo input debe tener un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Label>"}</code> asociado o un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>.</li>
          <li>Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-invalid</code> para comunicar errores — nunca solo el color rojo.</li>
          <li>Acompaña el estado de error con un mensaje de texto debajo del campo (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-describedby</code>).</li>
          <li>El focus visible está garantizado por el ring de Proteus — no lo elimines con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">outline-none</code>.</li>
        </ul>
      </section>
    </article>
  )
}
