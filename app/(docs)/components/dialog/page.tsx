import type { Metadata } from "next"
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Dialog" }

const basicCode = `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Abrir dialog
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirmar acción</DialogTitle>
      <DialogDescription>
        ¿Estás seguro de que quieres continuar? Esta acción no se puede deshacer.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter showCloseButton>
      <Button>Confirmar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`

const formCode = `<Dialog>
  <DialogTrigger render={<Button />}>
    Editar perfil
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Editar perfil</DialogTitle>
      <DialogDescription>
        Actualiza tu información. Los cambios se guardan al hacer clic en Guardar.
      </DialogDescription>
    </DialogHeader>
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" defaultValue="Claudio Romo" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="username">Usuario</Label>
        <Input id="username" defaultValue="@cromo" />
      </div>
    </div>
    <DialogFooter showCloseButton>
      <Button>Guardar cambios</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`

const destructiveCode = `<Dialog>
  <DialogTrigger render={<Button variant="destructive" />}>
    Eliminar cuenta
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>¿Eliminar cuenta?</DialogTitle>
      <DialogDescription>
        Esta acción es permanente. Se eliminarán todos tus datos,
        proyectos y configuraciones. No hay forma de recuperarlos.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter showCloseButton>
      <Button variant="destructive">Sí, eliminar mi cuenta</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`

const dialogProps = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "—",
    description: "Estado controlado de apertura.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "—",
    description: "Callback cuando el dialog abre o cierra.",
  },
  {
    name: "modal",
    type: "boolean",
    defaultValue: "true",
    description: "Si es true, bloquea la interacción con el fondo.",
  },
]

const contentProps = [
  {
    name: "showCloseButton",
    type: "boolean",
    defaultValue: "true",
    description: "Muestra el botón X en la esquina superior derecha.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "—",
    description: "Clases para personalizar el ancho máximo u otros estilos.",
  },
]

export default async function DialogPage() {
  const [basicHtml, formHtml, destructiveHtml] = await Promise.all([
    highlight(basicCode),
    highlight(formCode),
    highlight(destructiveCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Dialog</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Ventana modal para confirmar acciones, editar datos o mostrar información
            crítica. Bloquea el fondo hasta que el usuario responde.
          </p>
        </div>
      </div>

      {/* Básico */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DialogTrigger</code> con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">render</code> para convertir cualquier elemento en trigger.
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">showCloseButton</code> en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DialogFooter</code> agrega un botón Cancelar.
        </p>
        <ComponentPreview
          preview={
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                Abrir dialog
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirmar acción</DialogTitle>
                  <DialogDescription>
                    ¿Estás seguro de que quieres continuar? Esta acción no se puede deshacer.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter showCloseButton>
                  <Button>Confirmar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      {/* Con formulario */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con formulario</h2>
        <p className="text-sm text-muted-foreground">
          Coloca los campos entre el <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DialogHeader</code> y el{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DialogFooter</code>.
        </p>
        <ComponentPreview
          preview={
            <Dialog>
              <DialogTrigger render={<Button />}>
                Editar perfil
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Editar perfil</DialogTitle>
                  <DialogDescription>
                    Actualiza tu información. Los cambios se guardan al hacer clic en Guardar.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="dlg-name">Nombre</Label>
                    <Input id="dlg-name" defaultValue="Claudio Romo" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="dlg-user">Usuario</Label>
                    <Input id="dlg-user" defaultValue="@cromo" />
                  </div>
                </div>
                <DialogFooter showCloseButton>
                  <Button>Guardar cambios</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          }
          codeHtml={formHtml}
          code={formCode}
        />
      </section>

      {/* Destructivo */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Acción destructiva</h2>
        <p className="text-sm text-muted-foreground">
          Para confirmaciones de acciones irreversibles. El botón de acción principal
          usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">variant="destructive"</code>.
        </p>
        <ComponentPreview
          preview={
            <Dialog>
              <DialogTrigger render={<Button variant="destructive" />}>
                Eliminar cuenta
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>¿Eliminar cuenta?</DialogTitle>
                  <DialogDescription>
                    Esta acción es permanente. Se eliminarán todos tus datos,
                    proyectos y configuraciones. No hay forma de recuperarlos.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter showCloseButton>
                  <Button variant="destructive">Sí, eliminar mi cuenta</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          }
          codeHtml={destructiveHtml}
          code={destructiveCode}
        />
      </section>

      {/* Props */}
      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <div className="space-y-2">
          <p className="text-sm font-medium">Dialog (Root)</p>
          <PropsTable props={dialogProps} />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">DialogContent</p>
          <PropsTable props={contentProps} />
        </div>
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El dialog siempre debe tener <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DialogTitle</code> — es el nombre del modal para screen readers.</li>
          <li>El foco se mueve automáticamente al dialog al abrirse y regresa al trigger al cerrarse.</li>
          <li><kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">Esc</kbd> cierra el dialog — no lo sobrescribas salvo en flujos de confirmación crítica.</li>
          <li>El fondo bloqueado (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">modal=true</code>) es el default — no lo desactives sin una razón clara.</li>
        </ul>
      </section>
    </article>
  )
}
