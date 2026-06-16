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
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Bottom Sheet" }

const basicCode = `<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Ver opciones
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Opciones del archivo</SheetTitle>
      <SheetDescription>
        Selecciona una acción para "diseño-v3.fig"
      </SheetDescription>
    </SheetHeader>
    <div className="flex flex-col gap-1 px-4 pb-2">
      <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent text-left">
        <Icon name="share" size={20} />
        Compartir
      </button>
      <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent text-left">
        <Icon name="download" size={20} />
        Descargar
      </button>
      <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent text-left">
        <Icon name="drive_file_rename_outline" size={20} />
        Renombrar
      </button>
      <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-destructive hover:bg-destructive/10 text-left">
        <Icon name="delete" size={20} />
        Eliminar
      </button>
    </div>
  </SheetContent>
</Sheet>`

const confirmCode = `<Sheet>
  <SheetTrigger render={<Button variant="destructive" />}>
    Cancelar suscripción
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>¿Cancelar suscripción?</SheetTitle>
      <SheetDescription>
        Perderás acceso a todas las funciones Pro al finalizar el período actual.
        Esta acción no se puede deshacer.
      </SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <SheetClose render={<Button variant="outline" className="flex-1 h-11" />}>
        Mantener suscripción
      </SheetClose>
      <Button variant="destructive" className="flex-1 h-11">
        Cancelar de todas formas
      </Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`

const contentProps = [
  { name: "side", type: '"bottom"', defaultValue: '"right"', description: 'Para Bottom Sheet usa side="bottom". El panel aparece desde el borde inferior y ocupa todo el ancho.' },
  { name: "showCloseButton", type: "boolean", defaultValue: "true", description: "Muestra el botón × en la esquina superior del panel." },
]

export default async function BottomSheetPage() {
  const [basicHtml, confirmHtml] = await Promise.all([
    highlight(basicCode),
    highlight(confirmCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Bottom Sheet</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Panel que desliza desde el borde inferior de la pantalla. Patrón
            nativo de mobile para acciones contextuales, selección de opciones
            y confirmaciones. Se implementa con el componente{" "}
            <code className="text-foreground rounded bg-muted px-1 py-0.5 font-mono text-base">Sheet</code> usando{" "}
            <code className="text-foreground rounded bg-muted px-1 py-0.5 font-mono text-base">side="bottom"</code>.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Menú de acciones</h2>
        <p className="text-sm text-muted-foreground">
          Lista de acciones para un item seleccionado. El patrón más común en
          interfaces mobile: toca un archivo, aparece el sheet con las opciones.
        </p>
        <ComponentPreview
          preview={
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Ver opciones
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Opciones del archivo</SheetTitle>
                  <SheetDescription>
                    Selecciona una acción para "diseño-v3.fig"
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-1 px-4 pb-2">
                  <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent text-left transition-colors">
                    <Icon name="share" size={20} />
                    Compartir
                  </button>
                  <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent text-left transition-colors">
                    <Icon name="download" size={20} />
                    Descargar
                  </button>
                  <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent text-left transition-colors">
                    <Icon name="drive_file_rename_outline" size={20} />
                    Renombrar
                  </button>
                  <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-destructive hover:bg-destructive/10 text-left transition-colors">
                    <Icon name="delete" size={20} />
                    Eliminar
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Confirmación</h2>
        <p className="text-sm text-muted-foreground">
          Alternativa mobile al Alert Dialog para confirmar acciones destructivas.
          Los botones en el footer ocupan todo el ancho.
        </p>
        <ComponentPreview
          preview={
            <Sheet>
              <SheetTrigger render={<Button variant="destructive" />}>
                Cancelar suscripción
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>¿Cancelar suscripción?</SheetTitle>
                  <SheetDescription>
                    Perderás acceso a todas las funciones Pro al finalizar el período actual.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose render={<Button variant="outline" className="flex-1 h-11" />}>
                    Mantener suscripción
                  </SheetClose>
                  <Button variant="destructive" className="flex-1 h-11">
                    Cancelar de todas formas
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          }
          codeHtml={confirmHtml}
          code={confirmCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground mb-2">
          Bottom Sheet usa el mismo componente{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Sheet</code> que Drawer.
          Ver <a href="/components/drawer" className="text-primary hover:underline underline-offset-4">Drawer</a> para
          la referencia completa de props.
        </p>
        <PropsTable props={contentProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Cuándo usar Bottom Sheet vs Drawer</h2>
        <div className="grid gap-3 sm:grid-cols-2 text-sm">
          <div className="rounded-lg border border-border/50 p-4 space-y-2">
            <p className="font-medium flex items-center gap-1.5">
              <Icon name="phone_android" size={14} />
              Bottom Sheet
            </p>
            <ul className="space-y-1 text-muted-foreground list-disc list-inside">
              <li>Interfaces mobile-first</li>
              <li>Acciones contextuales de un elemento</li>
              <li>Confirmaciones en pantallas pequeñas</li>
              <li>Selección de opciones (picker)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border/50 p-4 space-y-2">
            <p className="font-medium flex items-center gap-1.5">
              <Icon name="computer" size={14} />
              Drawer
            </p>
            <ul className="space-y-1 text-muted-foreground list-disc list-inside">
              <li>Formularios extensos</li>
              <li>Paneles de configuración</li>
              <li>Navegación secundaria en desktop</li>
              <li>Previews de detalle</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}
