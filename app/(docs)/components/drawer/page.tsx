import type { Metadata } from "next"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormField } from "@/components/ui/form-field"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Drawer" }

const rightCode = `<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Abrir drawer
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Configuración</SheetTitle>
      <SheetDescription>
        Ajusta las preferencias de tu proyecto. Los cambios se aplican de inmediato.
      </SheetDescription>
    </SheetHeader>
    <div className="flex-1 overflow-y-auto py-4 px-4">
      <p className="text-sm text-muted-foreground">Contenido del drawer...</p>
    </div>
    <SheetFooter>
      <SheetClose render={<Button variant="outline" />}>Cancelar</SheetClose>
      <Button>Guardar</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`

const leftCode = `<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Menú lateral
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navegación</SheetTitle>
    </SheetHeader>
    <nav className="flex flex-col gap-1 px-4 pt-2">
      <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent">
        <Icon name="home" size={16} />
        Inicio
      </a>
      <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent">
        <Icon name="folder" size={16} />
        Proyectos
      </a>
      <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent">
        <Icon name="analytics" size={16} />
        Analytics
      </a>
      <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent">
        <Icon name="settings" size={16} />
        Configuración
      </a>
    </nav>
  </SheetContent>
</Sheet>`

const formCode = `<Sheet>
  <SheetTrigger render={<Button />}>
    <Icon name="person_add" size={16} />
    Agregar miembro
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Agregar miembro</SheetTitle>
      <SheetDescription>
        Invita a alguien al equipo enviando una solicitud a su email.
      </SheetDescription>
    </SheetHeader>
    <div className="flex flex-col gap-4 px-4 py-4 flex-1">
      <FormField label="Email" htmlFor="drawer-email" required>
        <Input id="drawer-email" type="email" placeholder="nombre@ejemplo.com" />
      </FormField>
      <FormField label="Rol" htmlFor="drawer-role">
        <Input id="drawer-role" placeholder="Editor, Lector..." />
      </FormField>
    </div>
    <SheetFooter>
      <SheetClose render={<Button variant="outline" />}>Cancelar</SheetClose>
      <Button>Enviar invitación</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`

const contentProps = [
  { name: "side", type: '"top" | "right" | "bottom" | "left"', defaultValue: '"right"', description: "Lado desde donde aparece el panel. right y left para drawer; bottom y top para bottom/top sheet." },
  { name: "showCloseButton", type: "boolean", defaultValue: "true", description: "Muestra el botón × en la esquina superior del panel." },
]

export default async function DrawerPage() {
  const [rightHtml, leftHtml, formHtml] = await Promise.all([
    highlight(rightCode),
    highlight(leftCode),
    highlight(formCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Drawer</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Panel lateral que desliza desde el borde de la pantalla para
            mostrar contenido suplementario sin reemplazar la vista actual.
            Ideal para formularios, navegación móvil y paneles de configuración.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Derecha (default)</h2>
        <p className="text-sm text-muted-foreground">
          El Drawer se implementa con el componente{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Sheet</code> con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">side="right"</code> (default).
        </p>
        <ComponentPreview
          preview={
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Abrir drawer
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Configuración</SheetTitle>
                  <SheetDescription>
                    Ajusta las preferencias de tu proyecto.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto py-2 px-4">
                  <p className="text-sm text-muted-foreground">Contenido del drawer...</p>
                </div>
                <SheetFooter>
                  <SheetClose render={<Button variant="outline" />}>Cancelar</SheetClose>
                  <Button>Guardar</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          }
          codeHtml={rightHtml}
          code={rightCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Izquierda — Navegación</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">side="left"</code> para
          menús de navegación móvil o sidebar secundarios.
        </p>
        <ComponentPreview
          preview={
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Menú lateral
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Navegación</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-4 pt-2">
                  <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors">
                    <Icon name="home" size={16} />
                    Inicio
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors">
                    <Icon name="folder" size={16} />
                    Proyectos
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors">
                    <Icon name="analytics" size={16} />
                    Analytics
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors">
                    <Icon name="settings" size={16} />
                    Configuración
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          }
          codeHtml={leftHtml}
          code={leftCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con formulario</h2>
        <p className="text-sm text-muted-foreground">
          El Drawer es ideal para formularios largos que no justifican salir de la vista
          actual. El <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">SheetFooter</code> mantiene
          las acciones fijas en la parte inferior.
        </p>
        <ComponentPreview
          preview={
            <Sheet>
              <SheetTrigger render={<Button />}>
                <Icon name="person_add" size={16} />
                Agregar miembro
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Agregar miembro</SheetTitle>
                  <SheetDescription>
                    Invita a alguien al equipo enviando una solicitud a su email.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4 px-4 py-4 flex-1">
                  <FormField label="Email" htmlFor="drawer-email-ex" required>
                    <Input id="drawer-email-ex" type="email" placeholder="nombre@ejemplo.com" />
                  </FormField>
                  <FormField label="Rol" htmlFor="drawer-role-ex">
                    <Input id="drawer-role-ex" placeholder="Editor, Lector..." />
                  </FormField>
                </div>
                <SheetFooter>
                  <SheetClose render={<Button variant="outline" />}>Cancelar</SheetClose>
                  <Button>Enviar invitación</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          }
          codeHtml={formHtml}
          code={formCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — SheetContent</h2>
        <PropsTable props={contentProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El Sheet usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="dialog"</code> con foco atrapado y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-modal="true"</code>.</li>
          <li><code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">SheetTitle</code> es requerido como nombre accesible del dialog.</li>
          <li><kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">Esc</kbd> cierra el drawer y devuelve el foco al trigger.</li>
          <li>Clic fuera del panel también cierra el drawer por defecto.</li>
        </ul>
      </section>
    </article>
  )
}
