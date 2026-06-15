import type { Metadata } from "next"
import { FormField } from "@/components/ui/form-field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Form Field" }

const basicCode = `<FormField label="Nombre" htmlFor="name">
  <Input id="name" placeholder="Tu nombre" />
</FormField>`

const descriptionCode = `<FormField
  label="Slug"
  htmlFor="slug"
  description="Solo letras minúsculas, números y guiones. Aparece en la URL pública."
>
  <Input id="slug" placeholder="mi-proyecto" />
</FormField>`

const errorCode = `<FormField
  label="Email"
  htmlFor="email"
  error="El email no es válido."
  required
>
  <Input
    id="email"
    type="email"
    defaultValue="no-es-email"
    aria-invalid
  />
</FormField>`

const requiredCode = `<FormField label="Contraseña" htmlFor="pass" required
  description="Mínimo 8 caracteres, una mayúscula y un número.">
  <Input id="pass" type="password" placeholder="••••••••" />
</FormField>`

const composedCode = `<form className="flex flex-col gap-5 w-72">
  <FormField label="Nombre completo" htmlFor="fc-name" required>
    <Input id="fc-name" placeholder="Ana García" />
  </FormField>

  <FormField label="País" htmlFor="fc-country">
    <Select>
      <SelectTrigger id="fc-country">
        <SelectValue placeholder="Selecciona..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="mx">México</SelectItem>
        <SelectItem value="ar">Argentina</SelectItem>
        <SelectItem value="es">España</SelectItem>
      </SelectContent>
    </Select>
  </FormField>

  <FormField
    label="Mensaje"
    htmlFor="fc-msg"
    description="Máximo 500 caracteres."
  >
    <Textarea id="fc-msg" placeholder="Escribe tu mensaje..." rows={3} />
  </FormField>
</form>`

const fieldProps = [
  { name: "label", type: "string", defaultValue: "—", description: "Texto del label. Si se omite, no se renderiza el label." },
  { name: "htmlFor", type: "string", defaultValue: "—", description: "ID del control asociado al label." },
  { name: "required", type: "boolean", defaultValue: "false", description: "Muestra un asterisco rojo junto al label." },
  { name: "description", type: "string", defaultValue: "—", description: "Texto de ayuda bajo el control. Se oculta si hay error." },
  { name: "error", type: "string", defaultValue: "—", description: "Mensaje de error. Reemplaza description cuando está presente.", },
  { name: "children", type: "React.ReactNode", defaultValue: "—", description: "El control del formulario (Input, Select, Textarea, etc.).", required: true },
  { name: "className", type: "string", defaultValue: "—", description: "Clases adicionales sobre el wrapper." },
]

export default async function FormFieldPage() {
  const [basicHtml, descHtml, errorHtml, requiredHtml, composedHtml] = await Promise.all([
    highlight(basicCode),
    highlight(descriptionCode),
    highlight(errorCode),
    highlight(requiredCode),
    highlight(composedCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Form Field</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Wrapper de layout que agrupa Label, control de formulario, descripción
            y mensaje de error con espaciado consistente. Compatible con cualquier
            control: Input, Select, Textarea, Checkbox, etc.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Default</h2>
        <ComponentPreview
          preview={
            <FormField label="Nombre" htmlFor="name-ex" className="w-72">
              <Input id="name-ex" placeholder="Tu nombre" />
            </FormField>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con descripción</h2>
        <p className="text-sm text-muted-foreground">
          La <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">description</code> aparece
          bajo el control cuando no hay error activo.
        </p>
        <ComponentPreview
          preview={
            <FormField
              label="Slug"
              htmlFor="slug-ex"
              description="Solo letras minúsculas, números y guiones. Aparece en la URL pública."
              className="w-72"
            >
              <Input id="slug-ex" placeholder="mi-proyecto" />
            </FormField>
          }
          codeHtml={descHtml}
          code={descriptionCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con error</h2>
        <p className="text-sm text-muted-foreground">
          Pasa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">error</code> para mostrar
          el mensaje de error con ícono. Agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-invalid</code> al
          control para aplicar los estilos de validación.
        </p>
        <ComponentPreview
          preview={
            <FormField
              label="Email"
              htmlFor="email-ex"
              error="El email no es válido."
              required
              className="w-72"
            >
              <Input
                id="email-ex"
                type="email"
                defaultValue="no-es-email"
                aria-invalid
              />
            </FormField>
          }
          codeHtml={errorHtml}
          code={errorCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Requerido</h2>
        <ComponentPreview
          preview={
            <FormField
              label="Contraseña"
              htmlFor="pass-ex"
              required
              description="Mínimo 8 caracteres, una mayúscula y un número."
              className="w-72"
            >
              <Input id="pass-ex" type="password" placeholder="••••••••" />
            </FormField>
          }
          codeHtml={requiredHtml}
          code={requiredCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Formulario compuesto</h2>
        <p className="text-sm text-muted-foreground">
          FormField funciona con cualquier control del sistema.
        </p>
        <ComponentPreview
          preview={
            <form className="flex flex-col gap-5 w-72" onSubmit={(e) => e.preventDefault()}>
              <FormField label="Nombre completo" htmlFor="fc-name" required>
                <Input id="fc-name" placeholder="Ana García" />
              </FormField>
              <FormField label="País" htmlFor="fc-country">
                <Select>
                  <SelectTrigger id="fc-country">
                    <SelectValue placeholder="Selecciona..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mx">México</SelectItem>
                    <SelectItem value="ar">Argentina</SelectItem>
                    <SelectItem value="es">España</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
              <FormField
                label="Mensaje"
                htmlFor="fc-msg"
                description="Máximo 500 caracteres."
              >
                <Textarea id="fc-msg" placeholder="Escribe tu mensaje..." rows={3} />
              </FormField>
            </form>
          }
          codeHtml={composedHtml}
          code={composedCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={fieldProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El mensaje de error usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="alert"</code> para anunciarse a lectores de pantalla en cuanto aparece.</li>
          <li>Conecta el error al control con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-describedby</code> cuando necesites semántica explícita.</li>
          <li>El asterisco de campo requerido tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-hidden="true"</code> — el estado requerido se comunica via <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-required</code> en el control.</li>
        </ul>
      </section>
    </article>
  )
}
