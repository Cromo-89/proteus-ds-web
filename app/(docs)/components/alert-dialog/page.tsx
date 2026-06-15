import type { Metadata } from "next"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Alert Dialog" }

const deleteCode = `<Dialog>
  <DialogTrigger render={<Button variant="destructive" />}>
    Eliminar proyecto
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>¿Eliminar "Mi Proyecto"?</DialogTitle>
      <DialogDescription>
        Esta acción no se puede deshacer. El proyecto y todos sus datos
        serán eliminados permanentemente de nuestros servidores.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Cancelar</DialogClose>
      <Button variant="destructive">Eliminar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`

const logoutCode = `<Dialog>
  <DialogTrigger render={<Button variant="ghost" />}>
    Cerrar sesión
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>¿Cerrar sesión?</DialogTitle>
      <DialogDescription>
        Se cerrará la sesión en todos los dispositivos activos. Tendrás
        que iniciar sesión de nuevo para acceder a tu cuenta.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Cancelar</DialogClose>
      <Button>Cerrar sesión</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`

const discardCode = `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Descartar cambios
  </DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>¿Descartar cambios?</DialogTitle>
      <DialogDescription>
        Tienes cambios sin guardar. Si sales ahora, se perderán.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="ghost" />}>Seguir editando</DialogClose>
      <Button variant="destructive">Descartar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`

const alertDialogProps = [
  { name: "showCloseButton", type: "boolean", defaultValue: "true", description: "En Alert Dialogs de confirmación destructiva es recomendable ocultarlo (false) para forzar una elección explícita." },
]

export default async function AlertDialogDocPage() {
  const [deleteHtml, logoutHtml, discardHtml] = await Promise.all([
    highlight(deleteCode),
    highlight(logoutCode),
    highlight(discardCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Alert Dialog</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Variante del Dialog orientada a confirmaciones de acciones
            críticas o irreversibles. Interrumpe el flujo y requiere
            una decisión explícita del usuario: confirmar o cancelar.
          </p>
        </div>

        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Nota:</strong> Alert Dialog usa el mismo componente{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Dialog>"}</code> de Proteus DS.
            La diferencia está en el contenido, la intención y las variantes de los botones de acción.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Eliminación</h2>
        <p className="text-sm text-muted-foreground">
          Patrón para confirmar eliminación de datos. El botón de acción usa{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">variant="destructive"</code> y
          el trigger también señala la peligrosidad.
        </p>
        <ComponentPreview
          preview={
            <Dialog>
              <DialogTrigger render={<Button variant="destructive" />}>
                Eliminar proyecto
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>¿Eliminar "Mi Proyecto"?</DialogTitle>
                  <DialogDescription>
                    Esta acción no se puede deshacer. El proyecto y todos sus datos
                    serán eliminados permanentemente de nuestros servidores.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>Cancelar</DialogClose>
                  <Button variant="destructive">Eliminar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          }
          codeHtml={deleteHtml}
          code={deleteCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Cierre de sesión</h2>
        <p className="text-sm text-muted-foreground">
          Confirmación de acciones que no son destructivas pero sí disruptivas.
          El botón de acción usa la variante por defecto.
        </p>
        <ComponentPreview
          preview={
            <Dialog>
              <DialogTrigger render={<Button variant="ghost" />}>
                Cerrar sesión
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>¿Cerrar sesión?</DialogTitle>
                  <DialogDescription>
                    Se cerrará la sesión en todos los dispositivos activos. Tendrás
                    que iniciar sesión de nuevo para acceder a tu cuenta.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>Cancelar</DialogClose>
                  <Button>Cerrar sesión</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          }
          codeHtml={logoutHtml}
          code={logoutCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Descartar cambios</h2>
        <p className="text-sm text-muted-foreground">
          Para flujos de edición donde hay cambios sin guardar. Sin botón × para
          forzar una elección consciente: seguir editando o descartar.
        </p>
        <ComponentPreview
          preview={
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                Descartar cambios
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>¿Descartar cambios?</DialogTitle>
                  <DialogDescription>
                    Tienes cambios sin guardar. Si sales ahora, se perderán.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button variant="ghost" />}>Seguir editando</DialogClose>
                  <Button variant="destructive">Descartar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          }
          codeHtml={discardHtml}
          code={discardCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Cuándo usar Alert Dialog vs Dialog</h2>
        <div className="grid gap-3 sm:grid-cols-2 text-sm">
          <div className="rounded-lg border border-success/20 bg-success-bg/30 p-4 space-y-2">
            <p className="font-medium text-success flex items-center gap-1.5">
              <Icon name="check_circle" size={14} filled />
              Alert Dialog — úsalo para
            </p>
            <ul className="space-y-1 text-muted-foreground list-disc list-inside">
              <li>Eliminar datos o recursos</li>
              <li>Acciones permanentes e irreversibles</li>
              <li>Operaciones de alto impacto</li>
              <li>Salir sin guardar</li>
            </ul>
          </div>
          <div className="rounded-lg border border-info/20 bg-info/5 p-4 space-y-2">
            <p className="font-medium text-info flex items-center gap-1.5">
              <Icon name="info" size={14} filled />
              Dialog — úsalo para
            </p>
            <ul className="space-y-1 text-muted-foreground list-disc list-inside">
              <li>Editar información</li>
              <li>Ver detalles o previews</li>
              <li>Flujos de onboarding</li>
              <li>Formularios que bloquean el fondo</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>En confirmaciones de borrado, el botón principal debe decir claramente lo que hace: <em>Eliminar</em>, no <em>OK</em> ni <em>Sí</em>.</li>
          <li>El botón de cancelar es siempre el secundario (izquierda en desktop, abajo en mobile).</li>
          <li>Evita usar Alert Dialog para información que no requiere acción — usa Toast o Alert.</li>
        </ul>
      </section>
    </article>
  )
}
