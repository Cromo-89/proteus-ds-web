import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ComponentPreview } from "@/components/docs/component-preview"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Menu" }

const mobileCode = `{/* Menú mobile — Sheet con side="left" */}
<Sheet>
  <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Abrir menú" />}>
    <Icon name="menu" size={20} />
  </SheetTrigger>
  <SheetContent side="left" className="w-72">
    <SheetHeader>
      <SheetTitle className="flex items-center gap-2">
        <div className="size-6 rounded-md bg-primary" />
        Proteus
      </SheetTitle>
    </SheetHeader>
    <nav className="mt-6 flex flex-col gap-1">
      {navItems.map((item) => (
        <a key={item.href} href={item.href}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
          <Icon name={item.icon} size={16} />
          {item.label}
        </a>
      ))}
    </nav>
  </SheetContent>
</Sheet>`

const userMenuCode = `{/* Menú de usuario — DropdownMenu sobre Avatar */}
<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="ghost" className="h-8 w-8 rounded-full p-0" />}>
    <Avatar size="sm">
      <AvatarFallback>AG</AvatarFallback>
    </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="w-56">
    <div className="flex items-center gap-3 px-3 py-2.5">
      <Avatar size="sm">
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <p className="text-sm font-medium truncate">Ana García</p>
        <p className="text-xs text-muted-foreground truncate">ana@empresa.com</p>
      </div>
    </div>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Icon name="person" size={16} />
      Mi perfil
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Icon name="settings" size={16} />
      Configuración
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Icon name="credit_card" size={16} />
      Facturación
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive">
      <Icon name="logout" size={16} />
      Cerrar sesión
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`

const contextCode = `{/* Menú contextual de selección — DropdownMenu */}
<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
    <Icon name="more_vert" size={20} />
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
    <DropdownMenuItem>
      <Icon name="share" size={16} />
      Compartir
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive">
      <Icon name="delete" size={16} />
      Eliminar
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`

export default async function MenuPage() {
  const [mobileHtml, userHtml, contextHtml] = await Promise.all([
    highlight(mobileCode),
    highlight(userMenuCode),
    highlight(contextCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Menu</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Agrupación de patrones de menú de navegación. Según el contexto, usa
            diferentes componentes: <strong className="text-foreground">Sheet</strong> para
            el menú mobile/hamburger,{" "}
            <strong className="text-foreground">DropdownMenu</strong> para menús
            contextuales y de usuario.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Patrón, no componente único:</strong> "Menu"
          abarca varios patrones de UI. Elige el componente base según el contexto de uso.
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Cuándo usar qué</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 font-medium">Patrón</th>
                <th className="text-left py-2 pr-4 font-medium">Componente base</th>
                <th className="text-left py-2 font-medium">Cuándo</th>
              </tr>
            </thead>
            <tbody className="divide-y text-muted-foreground">
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Menú mobile / hamburger</td>
                <td className="py-2 pr-4"><code className="font-mono text-xs bg-muted rounded px-1">Sheet side="left"</code></td>
                <td className="py-2">Navegación principal en pantallas {'<'} md</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Menú de usuario</td>
                <td className="py-2 pr-4"><code className="font-mono text-xs bg-muted rounded px-1">DropdownMenu</code></td>
                <td className="py-2">Avatar del usuario en la navbar</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Menú contextual de ítem</td>
                <td className="py-2 pr-4"><code className="font-mono text-xs bg-muted rounded px-1">DropdownMenu</code></td>
                <td className="py-2">Acciones sobre una fila, tarjeta o archivo</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Menú click derecho</td>
                <td className="py-2 pr-4"><code className="font-mono text-xs bg-muted rounded px-1">ContextMenu</code></td>
                <td className="py-2">Área de interacción tipo explorador de archivos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Menú mobile — hamburger</h2>
        <p className="text-sm text-muted-foreground">
          Sheet con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">side="left"</code>{" "}
          que contiene la navegación completa. El trigger es el botón de hamburger en la navbar.
        </p>
        <ComponentPreview
          preview={
            <Sheet>
              <SheetTrigger render={<Button variant="outline">
                <Icon name="menu" size={20} />
                Abrir menú
              </Button>} />
              <SheetContent side="left" className="w-72">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <div className="size-6 rounded-md bg-primary" />
                    Proteus DS
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-1">
                  {[
                    { label: "Dashboard", icon: "grid_view", active: true },
                    { label: "Proyectos", icon: "folder" },
                    { label: "Equipo", icon: "group" },
                    { label: "Analytics", icon: "analytics" },
                    { label: "Configuración", icon: "settings" },
                  ].map((item) => (
                    <a key={item.label} href="#"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                        item.active
                          ? "bg-accent text-foreground font-medium"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                    >
                      <Icon name={item.icon as "grid_view"} size={16} />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          }
          codeHtml={mobileHtml}
          code={mobileCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Menú de usuario</h2>
        <p className="text-sm text-muted-foreground">
          DropdownMenu disparado desde el Avatar del usuario. Incluye header con
          información de perfil, ítems de configuración y destructivo de cierre de sesión.
        </p>
        <ComponentPreview
          preview={
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" className="rounded-full size-8 p-0" />}>
                <Avatar size="sm">
                  <AvatarFallback>AG</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center gap-3 px-3 py-2.5">
                  <Avatar size="sm">
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">Ana García</p>
                    <p className="text-xs text-muted-foreground truncate">ana@empresa.com</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Icon name="person" size={16} />
                  Mi perfil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="settings" size={16} />
                  Configuración
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="credit_card" size={16} />
                  Facturación
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  <Icon name="logout" size={16} />
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
          codeHtml={userHtml}
          code={userMenuCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Menú contextual de ítem</h2>
        <p className="text-sm text-muted-foreground">
          Botón de tres puntos verticales que abre acciones sobre un elemento específico.
          Siempre coloca el ítem destructivo al final separado con un Separator.
        </p>
        <ComponentPreview
          preview={
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
                <Icon name="more_vert" size={16} />
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
                <DropdownMenuItem>
                  <Icon name="share" size={16} />
                  Compartir
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  <Icon name="delete" size={16} />
                  Eliminar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
          codeHtml={contextHtml}
          code={contextCode}
        />
      </section>
    </article>
  )
}
