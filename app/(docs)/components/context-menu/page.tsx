import type { Metadata } from "next"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Context Menu" }

const basicCode = `<ContextMenu>
  <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground select-none">
    Clic derecho aquí
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      <Icon name="edit" size={16} />
      Editar
    </ContextMenuItem>
    <ContextMenuItem>
      <Icon name="content_copy" size={16} />
      Copiar
    </ContextMenuItem>
    <ContextMenuItem>
      <Icon name="content_paste" size={16} />
      Pegar
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">
      <Icon name="delete" size={16} />
      Eliminar
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`

const fileCode = `<ContextMenu>
  <ContextMenuTrigger className="flex items-center gap-2 rounded-lg border border-border p-3 text-sm cursor-default select-none hover:bg-muted/50 transition-colors w-full">
    <Icon name="description" size={16} className="text-muted-foreground" />
    diseño-sistema-v3.fig
  </ContextMenuTrigger>
  <ContextMenuContent className="w-52">
    <ContextMenuLabel>diseño-sistema-v3.fig</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuGroup>
      <ContextMenuItem>
        <Icon name="open_in_new" size={16} />
        Abrir
        <ContextMenuShortcut>⏎</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Icon name="drive_file_rename_outline" size={16} />
        Renombrar
        <ContextMenuShortcut>F2</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Icon name="content_copy" size={16} />
        Duplicar
        <ContextMenuShortcut>⌘D</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuGroup>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <Icon name="share" size={16} />
        Compartir con
      </ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>
          <Icon name="link" size={16} />
          Copiar enlace
        </ContextMenuItem>
        <ContextMenuItem>
          <Icon name="mail" size={16} />
          Por email
        </ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">
      <Icon name="delete" size={16} />
      Mover a papelera
      <ContextMenuShortcut>⌫</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`

const menuItemProps = [
  { name: "variant", type: '"default" | "destructive"', defaultValue: '"default"', description: "Variante del ítem. destructive aplica color rojo para acciones peligrosas." },
  { name: "inset", type: "boolean", defaultValue: "false", description: "Añade padding-left para alinear texto con ítems que tienen ícono." },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Desactiva el ítem sin eliminarlo visualmente del menú." },
]

export default async function ContextMenuPage() {
  const [basicHtml, fileHtml] = await Promise.all([
    highlight(basicCode),
    highlight(fileCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Context Menu</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Menú que se activa con clic derecho (o pulsación larga en mobile) sobre
            un área designada. Muestra acciones contextuales relevantes para el
            elemento al que pertenece el área de trigger.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          El <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ContextMenuTrigger</code> define
          el área de clic derecho. Puede ser cualquier elemento con cualquier tamaño.
        </p>
        <ComponentPreview
          preview={
            <ContextMenu>
              <ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground select-none">
                Clic derecho aquí
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>
                  <Icon name="edit" size={16} />
                  Editar
                </ContextMenuItem>
                <ContextMenuItem>
                  <Icon name="content_copy" size={16} />
                  Copiar
                </ContextMenuItem>
                <ContextMenuItem>
                  <Icon name="content_paste" size={16} />
                  Pegar
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  <Icon name="delete" size={16} />
                  Eliminar
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Archivo — con submenú y shortcuts</h2>
        <p className="text-sm text-muted-foreground">
          Patrón completo para un explorador de archivos: label con el nombre del archivo,
          grupos de acciones, submenú para compartir y acción destructiva al final.
        </p>
        <ComponentPreview
          preview={
            <ContextMenu>
              <ContextMenuTrigger className="flex items-center gap-2 rounded-lg border border-border p-3 text-sm cursor-default select-none hover:bg-muted/50 transition-colors w-full max-w-sm">
                <Icon name="description" size={16} className="text-muted-foreground" />
                diseño-sistema-v3.fig
              </ContextMenuTrigger>
              <ContextMenuContent className="w-52">
                <ContextMenuLabel>diseño-sistema-v3.fig</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuItem>
                    <Icon name="open_in_new" size={16} />
                    Abrir
                    <ContextMenuShortcut>⏎</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Icon name="drive_file_rename_outline" size={16} />
                    Renombrar
                    <ContextMenuShortcut>F2</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Icon name="content_copy" size={16} />
                    Duplicar
                    <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                  </ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Icon name="share" size={16} />
                    Compartir con
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>
                      <Icon name="link" size={16} />
                      Copiar enlace
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Icon name="mail" size={16} />
                      Por email
                    </ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  <Icon name="delete" size={16} />
                  Mover a papelera
                  <ContextMenuShortcut>⌫</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          }
          codeHtml={fileHtml}
          code={fileCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — ContextMenuItem</h2>
        <PropsTable props={menuItemProps} />
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ContextMenuContent</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ContextMenuSub</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ContextMenuCheckboxItem</code> comparten
          la misma API que sus equivalentes de{" "}
          <a href="/components/dropdown" className="text-primary hover:underline underline-offset-4">Dropdown</a>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El Context Menu hereda toda la semántica y navegación por teclado del Dropdown Menu.</li>
          <li>En mobile, el trigger responde a <em>long press</em> (pulsación larga) en lugar de clic derecho.</li>
          <li>Diseña el área de trigger lo suficientemente grande para ser activada con facilidad (mínimo 44×44px en mobile).</li>
          <li>Asegúrate de que todas las acciones del Context Menu también estén disponibles por otra vía — no todos los usuarios descubren el clic derecho.</li>
        </ul>
      </section>
    </article>
  )
}
