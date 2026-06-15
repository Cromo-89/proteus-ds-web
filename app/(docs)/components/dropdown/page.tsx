import type { Metadata } from "next"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { DropdownCheckboxDemo, DropdownRadioDemo } from "@/components/docs/overlay-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Dropdown" }

const basicCode = `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>
    <Icon name="more_horiz" size={16} />
    Opciones
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Icon name="edit" size={16} />
      Editar
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Icon name="content_copy" size={16} />
      Duplicar
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      <Icon name="delete" size={16} />
      Eliminar
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`

const shortcutsCode = `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>
    Archivo
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48">
    <DropdownMenuItem>
      <Icon name="add" size={16} />
      Nuevo archivo
      <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Icon name="folder_open" size={16} />
      Abrir
      <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Icon name="save" size={16} />
      Guardar
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem variant="destructive">
      <Icon name="close" size={16} />
      Cerrar
      <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`

const groupsCode = `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>
    Cuenta
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-44">
    <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <Icon name="person" size={16} />
        Perfil
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon name="settings" size={16} />
        Configuración
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon name="credit_card" size={16} />
        Facturación
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <Icon name="group" size={16} />
        Equipo
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon name="add_circle" size={16} />
        Nuevo equipo
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      <Icon name="logout" size={16} />
      Cerrar sesión
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`

const submenuCode = `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>
    Compartir
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-44">
    <DropdownMenuItem>
      <Icon name="link" size={16} />
      Copiar enlace
    </DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Icon name="share" size={16} />
        Exportar como
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>PDF</DropdownMenuItem>
        <DropdownMenuItem>PNG</DropdownMenuItem>
        <DropdownMenuItem>SVG</DropdownMenuItem>
        <DropdownMenuItem>CSV</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Icon name="mail" size={16} />
      Enviar por email
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`

const checkboxCode = `const [cols, setCols] = useState({ status: true, email: true, amount: false })

<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>
    <Icon name="view_column" size={16} />
    Columnas
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Visibilidad</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem
      checked={cols.status}
      onCheckedChange={(v) => setCols((p) => ({ ...p, status: Boolean(v) }))}
    >
      Estado
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={cols.email}
      onCheckedChange={(v) => setCols((p) => ({ ...p, email: Boolean(v) }))}
    >
      Email
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={cols.amount}
      onCheckedChange={(v) => setCols((p) => ({ ...p, amount: Boolean(v) }))}
    >
      Monto
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`

const radioCode = `const [theme, setTheme] = useState("system")

<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>
    <Icon name="palette" size={16} />
    Tema
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
      <DropdownMenuRadioItem value="light">Claro</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="dark">Oscuro</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="system">Sistema</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`

const menuItemProps = [
  { name: "variant", type: '"default" | "destructive"', defaultValue: '"default"', description: "default aplica estilos neutros; destructive colorea el ítem en rojo para acciones peligrosas." },
  { name: "inset", type: "boolean", defaultValue: "false", description: "Añade padding-left para alinear el texto con ítems que tienen ícono." },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Desactiva el ítem: sin hover, sin foco, opacidad reducida." },
]

const contentProps = [
  { name: "side", type: '"top" | "right" | "bottom" | "left"', defaultValue: '"bottom"', description: "Lado de apertura relativo al trigger." },
  { name: "align", type: '"start" | "center" | "end"', defaultValue: '"start"', description: "Alineación del contenido respecto al trigger." },
  { name: "sideOffset", type: "number", defaultValue: "4", description: "Distancia en px entre el trigger y el contenido." },
]

export default async function DropdownPage() {
  const [basicHtml, shortcutsHtml, groupsHtml, submenuHtml, checkboxHtml, radioHtml] = await Promise.all([
    highlight(basicCode),
    highlight(shortcutsCode),
    highlight(groupsCode),
    highlight(submenuCode),
    highlight(checkboxCode),
    highlight(radioCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Dropdown</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Menú contextual que se abre al hacer clic en un trigger y muestra
            una lista de acciones o selecciones. Soporta grupos, separadores,
            shortcuts de teclado, submenús, checkboxes y radio items.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Ítem destructivo al final del menú para acciones de eliminación,
          separado con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DropdownMenuSeparator</code>.
        </p>
        <ComponentPreview
          preview={
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                <Icon name="more_horiz" size={16} />
                Opciones
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Icon name="edit" size={16} />
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="content_copy" size={16} />
                  Duplicar
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Icon name="delete" size={16} />
                  Eliminar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con shortcuts</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DropdownMenuShortcut</code> muestra
          el atajo al extremo derecho del ítem. No registra el listener — solo es visual.
        </p>
        <ComponentPreview
          preview={
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                Archivo
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Icon name="add" size={16} />
                  Nuevo archivo
                  <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="folder_open" size={16} />
                  Abrir
                  <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Icon name="save" size={16} />
                  Guardar
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <Icon name="close" size={16} />
                  Cerrar
                  <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
          codeHtml={shortcutsHtml}
          code={shortcutsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con grupos y label</h2>
        <p className="text-sm text-muted-foreground">
          Agrupa ítems relacionados con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DropdownMenuGroup</code> y
          encabézalos con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DropdownMenuLabel</code>.
        </p>
        <ComponentPreview
          preview={
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                Cuenta
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44">
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Icon name="person" size={16} />
                    Perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icon name="settings" size={16} />
                    Configuración
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icon name="credit_card" size={16} />
                    Facturación
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Icon name="group" size={16} />
                    Equipo
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icon name="add_circle" size={16} />
                    Nuevo equipo
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Icon name="logout" size={16} />
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
          codeHtml={groupsHtml}
          code={groupsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Submenú</h2>
        <p className="text-sm text-muted-foreground">
          Anida acciones secundarias con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DropdownMenuSub</code>.
          El submenú se abre al pasar el cursor o al presionar <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">→</kbd>.
        </p>
        <ComponentPreview
          preview={
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                Compartir
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44">
                <DropdownMenuItem>
                  <Icon name="link" size={16} />
                  Copiar enlace
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Icon name="share" size={16} />
                    Exportar como
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>PDF</DropdownMenuItem>
                    <DropdownMenuItem>PNG</DropdownMenuItem>
                    <DropdownMenuItem>SVG</DropdownMenuItem>
                    <DropdownMenuItem>CSV</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Icon name="mail" size={16} />
                  Enviar por email
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
          codeHtml={submenuHtml}
          code={submenuCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Checkbox items</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DropdownMenuCheckboxItem</code> para
          opciones de visibilidad o configuración múltiple. Estado controlado con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">useState</code>.
        </p>
        <ComponentPreview
          preview={<DropdownCheckboxDemo />}
          codeHtml={checkboxHtml}
          code={checkboxCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Radio items</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DropdownMenuRadioGroup</code> con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">value</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onValueChange</code> para
          selección única.
        </p>
        <ComponentPreview
          preview={<DropdownRadioDemo />}
          codeHtml={radioHtml}
          code={radioCode}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>

        <div className="space-y-2">
          <h3 className="text-base font-medium">DropdownMenuItem</h3>
          <PropsTable props={menuItemProps} />
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium">DropdownMenuContent</h3>
          <PropsTable props={contentProps} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Navegación por teclado: <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">↑</kbd> <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">↓</kbd> entre ítems, <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">→</kbd> abre submenú, <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">Esc</kbd> cierra.</li>
          <li>Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">disabled</code> en vez de ocultar ítems que no aplican en el contexto actual — mantiene la consistencia del menú.</li>
          <li>Los ítems destructivos deben estar siempre al final, separados visualmente.</li>
        </ul>
      </section>
    </article>
  )
}
