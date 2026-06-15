import type { Metadata } from "next"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Label" }

const basicCode = `<div className="flex flex-col gap-1.5">
  <Label htmlFor="name">Nombre</Label>
  <Input id="name" placeholder="Tu nombre" />
</div>`

const requiredCode = `<div className="flex flex-col gap-1.5 w-64">
  <Label htmlFor="email">
    Email
    <span className="text-destructive ml-0.5" aria-hidden="true">*</span>
  </Label>
  <Input id="email" type="email" required aria-required="true" placeholder="hola@ejemplo.com" />
  <p className="text-xs text-muted-foreground">Usamos tu email solo para notificaciones.</p>
</div>`

const checkboxCode = `<div className="flex items-start gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms" className="leading-snug cursor-pointer">
    Acepto los{" "}
    <a href="#" className="text-primary underline underline-offset-2">
      términos y condiciones
    </a>
  </Label>
</div>`

const disabledCode = `<div className="flex flex-col gap-1.5 w-64 group" data-disabled="true">
  <Label htmlFor="disabled-field">Campo deshabilitado</Label>
  <Input id="disabled-field" disabled placeholder="No disponible" />
</div>`

const labelProps = [
  {
    name: "htmlFor",
    type: "string",
    defaultValue: "—",
    description: "ID del campo asociado. Conecta el label al input para accesibilidad.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    defaultValue: "—",
    description: "Texto del label. Puede incluir íconos o indicadores de campo requerido.",
    required: true,
  },
  {
    name: "className",
    type: "string",
    defaultValue: "—",
    description: "Clases adicionales.",
  },
]

export default async function LabelPage() {
  const [basicHtml, requiredHtml, checkboxHtml, disabledHtml] = await Promise.all([
    highlight(basicCode),
    highlight(requiredCode),
    highlight(checkboxCode),
    highlight(disabledCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Label</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Etiqueta accesible para campos de formulario. Se deshabilita automáticamente
            cuando el campo asociado tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">disabled</code> a
            través de la API de grupo de Base UI.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con input</h2>
        <p className="text-sm text-muted-foreground">
          Conecta el label al input con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">htmlFor</code> e{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">id</code> coincidentes.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-1.5 w-64">
              <Label htmlFor="name-ex">Nombre</Label>
              <Input id="name-ex" placeholder="Tu nombre" />
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Campo requerido</h2>
        <p className="text-sm text-muted-foreground">
          Agrega un asterisco con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-hidden</code> y
          usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-required="true"</code> en el input
          para los lectores de pantalla.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-1.5 w-64">
              <Label htmlFor="email-ex">
                Email
                <span className="text-destructive ml-0.5" aria-hidden="true">*</span>
              </Label>
              <Input id="email-ex" type="email" required aria-required="true" placeholder="hola@ejemplo.com" />
              <p className="text-xs text-muted-foreground">Usamos tu email solo para notificaciones.</p>
            </div>
          }
          codeHtml={requiredHtml}
          code={requiredCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con checkbox</h2>
        <p className="text-sm text-muted-foreground">
          Coloca el label junto al checkbox. Agregar{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">cursor-pointer</code> hace
          el área completa clickeable.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-start gap-2">
              <Checkbox id="terms-ex" />
              <Label htmlFor="terms-ex" className="leading-snug cursor-pointer">
                Acepto los{" "}
                <a href="#" className="text-primary underline underline-offset-2">
                  términos y condiciones
                </a>
              </Label>
            </div>
          }
          codeHtml={checkboxHtml}
          code={checkboxCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Deshabilitado</h2>
        <p className="text-sm text-muted-foreground">
          El label aplica <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">opacity-50</code> automáticamente
          cuando el grupo tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">data-disabled="true"</code>.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-1.5 w-64 group" data-disabled="true">
              <Label htmlFor="disabled-ex">Campo deshabilitado</Label>
              <Input id="disabled-ex" disabled placeholder="No disponible" />
            </div>
          }
          codeHtml={disabledHtml}
          code={disabledCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground">
          Acepta todos los atributos nativos de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<label>"}</code>.
        </p>
        <PropsTable props={labelProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Siempre conecta el label al input con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">htmlFor</code> / <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">id</code> coincidentes.</li>
          <li>No uses <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">placeholder</code> como sustituto del label — desaparece al escribir.</li>
          <li>Para campos requeridos, combina el indicador visual (*) con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-required="true"</code> en el input.</li>
        </ul>
      </section>
    </article>
  )
}
