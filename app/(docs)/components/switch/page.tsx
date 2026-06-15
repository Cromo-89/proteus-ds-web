import type { Metadata } from "next"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Switch" }

const basicCode = `<div className="flex items-center gap-3">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Notificaciones</Label>
</div>`

const statesCode = `<div className="flex flex-col gap-4">
  {/* Off */}
  <div className="flex items-center gap-3">
    <Switch id="off" />
    <Label htmlFor="off">Desactivado</Label>
  </div>

  {/* On */}
  <div className="flex items-center gap-3">
    <Switch id="on" defaultChecked />
    <Label htmlFor="on">Activado</Label>
  </div>

  {/* Disabled off */}
  <div className="flex items-center gap-3">
    <Switch id="disabled-off" disabled />
    <Label htmlFor="disabled-off" className="opacity-50 cursor-not-allowed">
      Deshabilitado
    </Label>
  </div>

  {/* Disabled on */}
  <div className="flex items-center gap-3">
    <Switch id="disabled-on" disabled defaultChecked />
    <Label htmlFor="disabled-on" className="opacity-50 cursor-not-allowed">
      Deshabilitado activo
    </Label>
  </div>
</div>`

const sizesCode = `{/* Default */}
<div className="flex items-center gap-3">
  <Switch id="default-size" defaultChecked />
  <Label htmlFor="default-size">Default (32×18px)</Label>
</div>

{/* Small */}
<div className="flex items-center gap-3">
  <Switch id="small-size" size="sm" defaultChecked />
  <Label htmlFor="small-size">Small (24×14px)</Label>
</div>`

const settingsCode = `<div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
  {[
    { id: "s-email",  label: "Correo electrónico", desc: "Recibe notificaciones por email", on: true  },
    { id: "s-push",   label: "Push",               desc: "Alertas en el navegador",         on: false },
    { id: "s-weekly", label: "Resumen semanal",    desc: "Resumen de actividad cada lunes", on: true  },
  ].map(({ id, label, desc, on }) => (
    <div key={id} className="flex items-center justify-between px-4 py-3.5">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
      <Switch id={id} defaultChecked={on} />
    </div>
  ))}
</div>`

const switchProps = [
  {
    name: "checked",
    type: "boolean",
    defaultValue: "—",
    description: "Estado controlado.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    defaultValue: "false",
    description: "Estado inicial no controlado.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    defaultValue: "—",
    description: "Callback cuando el estado cambia.",
  },
  {
    name: "size",
    type: '"default" | "sm"',
    defaultValue: '"default"',
    description: "Tamaño del switch: default 32×18px, sm 24×14px.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Deshabilita la interacción.",
  },
]

export default async function SwitchPage() {
  const [basicHtml, statesHtml, sizesHtml, settingsHtml] = await Promise.all([
    highlight(basicCode),
    highlight(statesCode),
    highlight(sizesCode),
    highlight(settingsCode),
  ])

  return (
    <article className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
          <a href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Switch</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Control de activación/desactivación inmediata. A diferencia del Checkbox,
            el Switch aplica el cambio al instante — sin necesidad de confirmar con un botón.
          </p>
        </div>
      </div>

      {/* Básico */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-3">
              <Switch id="notif-demo" />
              <Label htmlFor="notif-demo">Notificaciones</Label>
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
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Switch id="st-off" />
                <Label htmlFor="st-off">Desactivado</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch id="st-on" defaultChecked />
                <Label htmlFor="st-on">Activado</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch id="st-dis-off" disabled />
                <Label htmlFor="st-dis-off" className="opacity-50 cursor-not-allowed">Deshabilitado</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch id="st-dis-on" disabled defaultChecked />
                <Label htmlFor="st-dis-on" className="opacity-50 cursor-not-allowed">Deshabilitado activo</Label>
              </div>
            </div>
          }
          codeHtml={statesHtml}
          code={statesCode}
        />
      </section>

      {/* Tamaños */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tamaños</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Switch id="sz-default" defaultChecked />
                <Label htmlFor="sz-default">Default (32×18px)</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch id="sz-sm" size="sm" defaultChecked />
                <Label htmlFor="sz-sm">Small (24×14px)</Label>
              </div>
            </div>
          }
          codeHtml={sizesHtml}
          code={sizesCode}
        />
      </section>

      {/* Patrón settings */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Patrón de configuración</h2>
        <p className="text-sm text-muted-foreground">
          El switch es ideal para listas de preferencias donde cada opción se activa de forma independiente.
        </p>
        <ComponentPreview
          preview={
            <div className="divide-y divide-border rounded-xl border border-border overflow-hidden w-full max-w-sm">
              {[
                { id: "cfg-email",  label: "Correo electrónico", desc: "Recibe notificaciones por email", on: true  },
                { id: "cfg-push",   label: "Push",               desc: "Alertas en el navegador",         on: false },
                { id: "cfg-weekly", label: "Resumen semanal",    desc: "Resumen de actividad cada lunes", on: true  },
              ].map(({ id, label, desc, on }) => (
                <div key={id} className="flex items-center justify-between px-4 py-3.5">
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                  <Switch id={id} defaultChecked={on} />
                </div>
              ))}
            </div>
          }
          codeHtml={settingsHtml}
          code={settingsCode}
        />
      </section>

      {/* Switch vs Checkbox */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Switch vs Checkbox</h2>
        <div className="overflow-hidden rounded-xl border border-border divide-y divide-border">
          {[
            { col: "Switch",    desc: "Activa/desactiva algo de forma inmediata. Sin submit. Ej: activar modo oscuro, habilitar notificaciones." },
            { col: "Checkbox",  desc: "Selecciona opciones en un formulario que se envía después. Ej: aceptar términos, elegir preferencias de un form." },
          ].map(({ col, desc }) => (
            <div key={col} className="flex gap-4 px-5 py-4">
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground shrink-0 h-fit mt-0.5">{col}</code>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Props */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={switchProps} />
      </section>
    </article>
  )
}
