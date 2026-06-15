import type { Metadata } from "next"
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Alert" }

const defaultCode = `<Alert>
  <AlertTitle>Actualización disponible</AlertTitle>
  <AlertDescription>
    Hay una nueva versión de Proteus DS. Actualiza para acceder a los últimos componentes.
  </AlertDescription>
</Alert>`

const destructiveCode = `<Alert variant="destructive">
  <AlertTitle>Error al guardar</AlertTitle>
  <AlertDescription>
    No se pudieron guardar los cambios. Verifica tu conexión e intenta de nuevo.
  </AlertDescription>
</Alert>`

const iconsCode = `{/* Info */}
<Alert>
  <Icon name="info" size={16} filled />
  <AlertTitle>Mantenimiento programado</AlertTitle>
  <AlertDescription>
    El servicio estará en mantenimiento el sábado de 02:00 a 04:00 UTC.
  </AlertDescription>
</Alert>

{/* Success */}
<Alert className="border-success/20 bg-success-bg text-success">
  <Icon name="check_circle" size={16} filled />
  <AlertTitle>Pago procesado</AlertTitle>
  <AlertDescription className="text-success/80">
    Tu suscripción Pro ha sido activada. Disfruta de todas las funciones.
  </AlertDescription>
</Alert>

{/* Warning */}
<Alert className="border-warning/20 bg-warning-bg text-warning">
  <Icon name="warning" size={16} filled />
  <AlertTitle>Espacio casi agotado</AlertTitle>
  <AlertDescription className="text-warning/80">
    Usaste el 92% del almacenamiento. Elimina archivos o actualiza tu plan.
  </AlertDescription>
</Alert>

{/* Error */}
<Alert variant="destructive">
  <Icon name="cancel" size={16} filled />
  <AlertTitle>Acceso denegado</AlertTitle>
  <AlertDescription>
    No tienes permisos para ver este recurso. Contacta al administrador.
  </AlertDescription>
</Alert>`

const actionCode = `<Alert>
  <Icon name="info" size={16} filled />
  <AlertTitle>Sesión por expirar</AlertTitle>
  <AlertDescription>
    Tu sesión expirará en 5 minutos. Guarda tu trabajo o extiende la sesión.
  </AlertDescription>
  <AlertAction>
    <Button size="sm" variant="outline">Extender</Button>
  </AlertAction>
</Alert>`

const inlineCode = `<Alert className="border-info/20 bg-info/5 text-info">
  <Icon name="tips_and_updates" size={16} filled />
  <AlertTitle>Consejo</AlertTitle>
  <AlertDescription className="text-info/80">
    Usa <kbd className="rounded border border-border bg-background/50 px-1 font-mono text-[11px]">⌘K</kbd> para abrir el buscador de comandos.
  </AlertDescription>
  <AlertAction>
    <Button size="sm" variant="ghost" className="size-7 p-0 text-info hover:bg-info/10">
      <Icon name="close" size={14} />
    </Button>
  </AlertAction>
</Alert>`

const alertProps = [
  { name: "variant", type: '"default" | "destructive"', defaultValue: '"default"', description: "default usa colores de card; destructive aplica color de error semántico." },
]

export default async function AlertPage() {
  const [defaultHtml, destructiveHtml, iconsHtml, actionHtml, inlineHtml] = await Promise.all([
    highlight(defaultCode),
    highlight(destructiveCode),
    highlight(iconsCode),
    highlight(actionCode),
    highlight(inlineCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Alert</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Banner estático para mensajes importantes que no desaparecen solos.
            A diferencia del Toast, el Alert es parte del layout de la página y
            permanece visible hasta que el usuario lo descarta o la condición se resuelve.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Default</h2>
        <ComponentPreview
          preview={
            <Alert className="w-full max-w-lg">
              <AlertTitle>Actualización disponible</AlertTitle>
              <AlertDescription>
                Hay una nueva versión de Proteus DS. Actualiza para acceder a los últimos componentes.
              </AlertDescription>
            </Alert>
          }
          codeHtml={defaultHtml}
          code={defaultCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Destructive</h2>
        <ComponentPreview
          preview={
            <Alert variant="destructive" className="w-full max-w-lg">
              <AlertTitle>Error al guardar</AlertTitle>
              <AlertDescription>
                No se pudieron guardar los cambios. Verifica tu conexión e intenta de nuevo.
              </AlertDescription>
            </Alert>
          }
          codeHtml={destructiveHtml}
          code={destructiveCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con íconos y colores semánticos</h2>
        <p className="text-sm text-muted-foreground">
          Coloca un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Icon>"}</code> como
          primer hijo del Alert para activar el layout de dos columnas. Aplica clases de color
          directamente para los 4 roles semánticos.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3 w-full max-w-lg">
              <Alert>
                <Icon name="info" size={16} filled />
                <AlertTitle>Mantenimiento programado</AlertTitle>
                <AlertDescription>
                  El servicio estará en mantenimiento el sábado de 02:00 a 04:00 UTC.
                </AlertDescription>
              </Alert>
              <Alert className="border-success/20 bg-success-bg text-success">
                <Icon name="check_circle" size={16} filled />
                <AlertTitle>Pago procesado</AlertTitle>
                <AlertDescription className="text-success/80">
                  Tu suscripción Pro ha sido activada. Disfruta de todas las funciones.
                </AlertDescription>
              </Alert>
              <Alert className="border-warning/20 bg-warning-bg text-warning">
                <Icon name="warning" size={16} filled />
                <AlertTitle>Espacio casi agotado</AlertTitle>
                <AlertDescription className="text-warning/80">
                  Usaste el 92% del almacenamiento. Elimina archivos o actualiza tu plan.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <Icon name="cancel" size={16} filled />
                <AlertTitle>Acceso denegado</AlertTitle>
                <AlertDescription>
                  No tienes permisos para ver este recurso. Contacta al administrador.
                </AlertDescription>
              </Alert>
            </div>
          }
          codeHtml={iconsHtml}
          code={iconsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con acción</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AlertAction</code> se
          posiciona absolutamente en la esquina superior derecha. Úsalo para botones de acción primaria
          o para un botón de cierre.
        </p>
        <ComponentPreview
          preview={
            <Alert className="w-full max-w-lg">
              <Icon name="info" size={16} filled />
              <AlertTitle>Sesión por expirar</AlertTitle>
              <AlertDescription>
                Tu sesión expirará en 5 minutos. Guarda tu trabajo o extiende la sesión.
              </AlertDescription>
              <AlertAction>
                <Button size="sm" variant="outline">Extender</Button>
              </AlertAction>
            </Alert>
          }
          codeHtml={actionHtml}
          code={actionCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tip descartable</h2>
        <p className="text-sm text-muted-foreground">
          Combina <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AlertAction</code> con
          un botón icono × para crear alertas descartables.
        </p>
        <ComponentPreview
          preview={
            <Alert className="border-info/20 bg-info/5 text-info w-full max-w-lg">
              <Icon name="tips_and_updates" size={16} filled />
              <AlertTitle>Consejo</AlertTitle>
              <AlertDescription className="text-info/80">
                Usa <kbd className="rounded border border-border bg-background/50 px-1 font-mono text-[11px]">⌘K</kbd> para abrir el buscador de comandos.
              </AlertDescription>
              <AlertAction>
                <Button size="sm" variant="ghost" className="size-7 p-0 text-info hover:bg-info/10">
                  <Icon name="close" size={14} />
                </Button>
              </AlertAction>
            </Alert>
          }
          codeHtml={inlineHtml}
          code={inlineCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={alertProps} />
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Alert</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AlertTitle</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AlertDescription</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AlertAction</code>{" "}
          aceptan todos los atributos nativos de <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<div>"}</code>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Alert vs Toast</h2>
        <div className="grid gap-3 sm:grid-cols-2 text-sm">
          <div className="rounded-lg border border-border/50 p-4 space-y-2">
            <p className="font-medium">Alert — úsalo para</p>
            <ul className="space-y-1 text-muted-foreground list-disc list-inside">
              <li>Estados de error de formulario</li>
              <li>Avisos de sistema persistentes</li>
              <li>Información crítica siempre visible</li>
              <li>Banners de mantenimiento</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border/50 p-4 space-y-2">
            <p className="font-medium">Toast — úsalo para</p>
            <ul className="space-y-1 text-muted-foreground list-disc list-inside">
              <li>Confirmaciones de acciones exitosas</li>
              <li>Errores transitorios de red</li>
              <li>Notificaciones no bloqueantes</li>
              <li>Feedback de acciones del usuario</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El Alert tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="alert"</code> automáticamente — los lectores de pantalla lo anuncian al aparecer.</li>
          <li>No uses <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="alert"</code> para contenido siempre visible — reserva el Alert para mensajes que aparecen dinámicamente.</li>
          <li>Si el Alert tiene un botón de cierre, asegúrate que tenga <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> descriptivo.</li>
        </ul>
      </section>
    </article>
  )
}
