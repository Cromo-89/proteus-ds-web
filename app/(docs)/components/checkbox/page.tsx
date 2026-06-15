import type { Metadata } from "next"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Checkbox" }

const basicCode = `<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Acepto los términos y condiciones</Label>
</div>`

const statesCode = `<div className="flex flex-col gap-3">
  {/* Unchecked */}
  <div className="flex items-center gap-2">
    <Checkbox id="unchecked" />
    <Label htmlFor="unchecked">Sin marcar</Label>
  </div>

  {/* Checked */}
  <div className="flex items-center gap-2">
    <Checkbox id="checked" defaultChecked />
    <Label htmlFor="checked">Marcado</Label>
  </div>

  {/* Disabled unchecked */}
  <div className="flex items-center gap-2">
    <Checkbox id="disabled" disabled />
    <Label htmlFor="disabled" className="opacity-50 cursor-not-allowed">
      Deshabilitado
    </Label>
  </div>

  {/* Disabled checked */}
  <div className="flex items-center gap-2">
    <Checkbox id="disabled-checked" disabled defaultChecked />
    <Label htmlFor="disabled-checked" className="opacity-50 cursor-not-allowed">
      Deshabilitado marcado
    </Label>
  </div>
</div>`

const groupCode = `<fieldset className="space-y-3">
  <legend className="text-sm font-medium">Notificaciones</legend>
  {[
    { id: "email",  label: "Correo electrónico" },
    { id: "push",   label: "Notificaciones push" },
    { id: "sms",    label: "Mensajes de texto" },
    { id: "weekly", label: "Resumen semanal" },
  ].map(({ id, label }) => (
    <div key={id} className="flex items-center gap-2">
      <Checkbox id={id} defaultChecked={id === "email"} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  ))}
</fieldset>`

const checkboxProps = [
  {
    name: "checked",
    type: "boolean | 'mixed'",
    defaultValue: "—",
    description: "Estado controlado. 'mixed' para el estado indeterminado.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    defaultValue: "false",
    description: "Estado inicial no controlado.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean | 'mixed') => void",
    defaultValue: "—",
    description: "Callback cuando el estado cambia.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Deshabilita la interacción.",
  },
  {
    name: "aria-invalid",
    type: "boolean",
    defaultValue: "false",
    description: "Activa el estilo de error.",
  },
]

export default async function CheckboxPage() {
  const [basicHtml, statesHtml, groupHtml] = await Promise.all([
    highlight(basicCode),
    highlight(statesCode),
    highlight(groupCode),
  ])

  return (
    <article className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
          <a
            href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Checkbox</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Control de selección binaria o múltiple. Soporta estados checked, unchecked,
            indeterminate y disabled. Siempre debe ir acompañado de un Label.
          </p>
        </div>
      </div>

      {/* Básico */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Asocia siempre el checkbox a un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Label</code> con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">htmlFor</code> e{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">id</code>.
          El área de clic del label activa el checkbox automáticamente.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-2">
              <Checkbox id="terms-demo" />
              <Label htmlFor="terms-demo">Acepto los términos y condiciones</Label>
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      {/* Estados */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Estados</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Checkbox id="s-unchecked" />
                <Label htmlFor="s-unchecked">Sin marcar</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="s-checked" defaultChecked />
                <Label htmlFor="s-checked">Marcado</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="s-disabled" disabled />
                <Label htmlFor="s-disabled" className="opacity-50 cursor-not-allowed">Deshabilitado</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="s-disabled-checked" disabled defaultChecked />
                <Label htmlFor="s-disabled-checked" className="opacity-50 cursor-not-allowed">Deshabilitado marcado</Label>
              </div>
            </div>
          }
          codeHtml={statesHtml}
          code={statesCode}
        />
      </section>

      {/* Grupo */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Grupo de opciones</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<fieldset>"}</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<legend>"}</code> para agrupar
          checkboxes relacionados de forma semánticamente correcta.
        </p>
        <ComponentPreview
          preview={
            <fieldset className="space-y-3 border-none p-0">
              <legend className="text-sm font-medium mb-3">Notificaciones</legend>
              {[
                { id: "g-email",  label: "Correo electrónico", checked: true  },
                { id: "g-push",   label: "Notificaciones push", checked: false },
                { id: "g-sms",    label: "Mensajes de texto",   checked: false },
                { id: "g-weekly", label: "Resumen semanal",     checked: true  },
              ].map(({ id, label, checked }) => (
                <div key={id} className="flex items-center gap-2">
                  <Checkbox id={id} defaultChecked={checked} />
                  <Label htmlFor={id}>{label}</Label>
                </div>
              ))}
            </fieldset>
          }
          codeHtml={groupHtml}
          code={groupCode}
        />
      </section>

      {/* Props */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={checkboxProps} />
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Todo checkbox debe tener un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Label</code> visible — nunca uses solo <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> si hay espacio para texto.</li>
          <li>Agrupa múltiples checkboxes relacionados con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<fieldset>"}</code> y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<legend>"}</code>.</li>
          <li>El estado indeterminate (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">checked="mixed"</code>) debe usarse para checkboxes padre que tienen hijos parcialmente seleccionados.</li>
          <li>El foco es visible via el ring de Proteus — no lo elimines.</li>
        </ul>
      </section>
    </article>
  )
}
