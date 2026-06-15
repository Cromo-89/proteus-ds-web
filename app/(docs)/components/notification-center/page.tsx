import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Notification Center" }

const basicCode = `{/* Panel de notificaciones */}
<div className="w-80 rounded-xl border border-border bg-popover shadow-lg overflow-hidden">
  {/* Header */}
  <div className="flex items-center justify-between px-4 py-3 border-b border-border">
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold">Notificaciones</span>
      <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">3</span>
    </div>
    <Button variant="ghost" size="sm" className="h-7 text-xs text-muted-foreground">
      Marcar todo como leído
    </Button>
  </div>

  {/* Items */}
  <div className="divide-y divide-border/50">
    {/* Unread */}
    <div className="flex gap-3 px-4 py-3 bg-primary/3 hover:bg-muted/50 transition-colors cursor-pointer">
      <div className="size-8 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
        <Icon name="check_circle" size={16} className="text-success" filled />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium leading-snug">Proyecto publicado</p>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
          "Proteus DS v0.1" está ahora en producción y disponible para tu equipo.
        </p>
        <p className="text-[11px] text-muted-foreground/70 mt-1">Hace 5 min</p>
      </div>
      <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
    </div>

    {/* Unread */}
    <div className="flex gap-3 px-4 py-3 bg-primary/3 hover:bg-muted/50 transition-colors cursor-pointer">
      <div className="size-8 rounded-full bg-info/20 flex items-center justify-center shrink-0 mt-0.5">
        <Icon name="person_add" size={16} className="text-info" filled />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium leading-snug">Nuevo colaborador</p>
        <p className="text-xs text-muted-foreground mt-0.5">
          Ana García se unió a tu equipo.
        </p>
        <p className="text-[11px] text-muted-foreground/70 mt-1">Hace 1 h</p>
      </div>
      <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
    </div>

    {/* Unread */}
    <div className="flex gap-3 px-4 py-3 bg-primary/3 hover:bg-muted/50 transition-colors cursor-pointer">
      <div className="size-8 rounded-full bg-warning/20 flex items-center justify-center shrink-0 mt-0.5">
        <Icon name="warning" size={16} className="text-warning" filled />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium leading-snug">Límite de almacenamiento</p>
        <p className="text-xs text-muted-foreground mt-0.5">
          Usaste el 90% del espacio disponible.
        </p>
        <p className="text-[11px] text-muted-foreground/70 mt-1">Hace 3 h</p>
      </div>
      <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
    </div>

    {/* Read */}
    <div className="flex gap-3 px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer">
      <div className="size-8 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
        <Icon name="mail" size={16} className="text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground leading-snug">Resumen semanal</p>
        <p className="text-xs text-muted-foreground/70 mt-0.5">
          Tu actividad de la semana del 9 al 15 de junio.
        </p>
        <p className="text-[11px] text-muted-foreground/50 mt-1">Ayer</p>
      </div>
    </div>
  </div>

  {/* Footer */}
  <div className="px-4 py-2.5 border-t border-border">
    <Button variant="ghost" className="w-full h-8 text-xs text-muted-foreground">
      Ver todas las notificaciones
    </Button>
  </div>
</div>`

const triggerCode = `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

<Popover>
  <PopoverTrigger render={<Button variant="ghost" size="icon" />}>
    <div className="relative">
      <Icon name="notifications" size={20} />
      {/* Badge de conteo */}
      <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-primary text-[9px] font-bold text-primary-foreground flex items-center justify-center">
        3
      </span>
    </div>
  </PopoverTrigger>
  <PopoverContent side="bottom" align="end" className="w-80 p-0">
    {/* Panel de notificaciones */}
  </PopoverContent>
</Popover>`

export default async function NotificationCenterPage() {
  const [basicHtml, triggerHtml] = await Promise.all([
    highlight(basicCode),
    highlight(triggerCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-info/10 text-info border-info/20 rounded-full">Pattern</Badge>
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
          <h1 className="text-4xl font-bold tracking-tight">Notification Center</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Panel que agrupa las notificaciones del usuario con diferenciación entre
            leídas y no leídas, badge de conteo en el trigger y acciones de marcado.
            Se implementa como composición de Popover + lista de ítems.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Patrón de composición:</strong> Notification Center
          combina <a href="/components/popover" className="text-primary hover:underline underline-offset-4">Popover</a>,{" "}
          <a href="/components/button" className="text-primary hover:underline underline-offset-4">Button</a> e{" "}
          <a href="/components/icon" className="text-primary hover:underline underline-offset-4">Icon</a>.
          No hay un componente dedicado.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Panel de notificaciones</h2>
        <p className="text-sm text-muted-foreground">
          Las notificaciones no leídas tienen fondo <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">bg-primary/3</code> y
          un indicador circular azul a la derecha. Las leídas tienen opacidad reducida.
        </p>
        <ComponentPreview
          preview={
            <div className="w-80 rounded-xl border border-border bg-popover shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Notificaciones</span>
                  <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">3</span>
                </div>
                <Button variant="ghost" size="sm" className="h-7 text-xs text-muted-foreground">
                  Marcar todo leído
                </Button>
              </div>
              <div className="divide-y divide-border/50">
                <div className="flex gap-3 px-4 py-3 bg-primary/[0.03] hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="size-8 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="check_circle" size={16} className="text-success" filled />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-snug">Proyecto publicado</p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      "Proteus DS v0.1" está ahora en producción.
                    </p>
                    <p className="text-[11px] text-muted-foreground/70 mt-1">Hace 5 min</p>
                  </div>
                  <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                </div>
                <div className="flex gap-3 px-4 py-3 bg-primary/[0.03] hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="size-8 rounded-full bg-info/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="person_add" size={16} className="text-info" filled />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-snug">Nuevo colaborador</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Ana García se unió al equipo.</p>
                    <p className="text-[11px] text-muted-foreground/70 mt-1">Hace 1 h</p>
                  </div>
                  <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                </div>
                <div className="flex gap-3 px-4 py-3 bg-primary/[0.03] hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="size-8 rounded-full bg-warning/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="warning" size={16} className="text-warning" filled />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-snug">Límite de almacenamiento</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Usaste el 90% del espacio.</p>
                    <p className="text-[11px] text-muted-foreground/70 mt-1">Hace 3 h</p>
                  </div>
                  <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                </div>
                <div className="flex gap-3 px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="size-8 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="mail" size={16} className="text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground leading-snug">Resumen semanal</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">Actividad del 9 al 15 de junio.</p>
                    <p className="text-[11px] text-muted-foreground/50 mt-1">Ayer</p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2.5 border-t border-border">
                <Button variant="ghost" className="w-full h-8 text-xs text-muted-foreground">
                  Ver todas las notificaciones
                </Button>
              </div>
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Trigger con badge</h2>
        <p className="text-sm text-muted-foreground">
          Integra el panel dentro de un{" "}
          <a href="/components/popover" className="text-primary hover:underline underline-offset-4">Popover</a>{" "}
          con un botón de ícono que muestra el conteo de notificaciones no leídas.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-3">
              <div className="relative">
                <Button variant="ghost" size="icon">
                  <Icon name="notifications" size={20} />
                </Button>
                <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-primary text-[9px] font-bold text-primary-foreground flex items-center justify-center">
                  3
                </span>
              </div>
              <p className="text-xs text-muted-foreground">Trigger del Notification Center</p>
            </div>
          }
          codeHtml={triggerHtml}
          code={triggerCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Anatomía del ítem</h2>
        <div className="rounded-lg border border-border p-4 space-y-2 text-sm">
          <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Icon name="notifications" size={16} className="text-primary" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <div className="h-3 w-32 rounded bg-muted animate-pulse" />
                <div className="size-2 rounded-full bg-primary shrink-0" />
              </div>
              <div className="h-3 w-full rounded bg-muted/50 animate-pulse" />
              <div className="h-2.5 w-16 rounded bg-muted/30 animate-pulse" />
            </div>
          </div>
          <ul className="text-xs text-muted-foreground space-y-1 pt-2 list-disc list-inside">
            <li><strong className="text-foreground">Ícono</strong> — categoria/tipo en fondo coloreado (8×8, redondeado)</li>
            <li><strong className="text-foreground">Título</strong> — acción o evento en 1 línea, font-medium</li>
            <li><strong className="text-foreground">Descripción</strong> — detalle en muted, máximo 2 líneas</li>
            <li><strong className="text-foreground">Timestamp</strong> — tiempo relativo (hace X min/h)</li>
            <li><strong className="text-foreground">Punto azul</strong> — indicador de no leído, solo cuando aplica</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El botón trigger debe tener <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="Notificaciones, 3 sin leer"</code>.</li>
          <li>La lista debe usar <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<ul>"}</code> con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="list"</code> y cada ítem como <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<li>"}</code>.</li>
          <li>El indicador de no leído (punto azul) debe tener un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<span className=\"sr-only\">No leído</span>"}</code>.</li>
          <li>Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-live="polite"</code> en el contenedor del badge para anunciar nuevas notificaciones.</li>
        </ul>
      </section>
    </article>
  )
}
