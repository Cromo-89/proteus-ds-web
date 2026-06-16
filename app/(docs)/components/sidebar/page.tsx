import type { Metadata } from "next"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Sidebar" }

const basicCode = `<aside className="fixed left-0 top-0 z-40 flex h-screen w-60 flex-col border-r bg-background">
  {/* Logo */}
  <div className="flex h-14 items-center gap-2 border-b px-4 font-semibold">
    <div className="size-6 rounded-md bg-primary" />
    Mi App
  </div>

  {/* Navegación */}
  <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
    <div>
      <p className="mb-1.5 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
        Principal
      </p>
      <ul className="space-y-0.5">
        {mainNav.map((item) => (
          <li key={item.href}>
            <a href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                item.active
                  ? "bg-accent text-foreground font-medium"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
            >
              <Icon name={item.icon} size={16} />
              {item.label}
              {item.badge && (
                <Badge className="ml-auto rounded-full h-4 px-1.5 text-[10px]">
                  {item.badge}
                </Badge>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>

  {/* Footer de usuario */}
  <div className="border-t p-3">
    <div className="flex items-center gap-3 rounded-lg px-2 py-2">
      <Avatar size="sm">
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">Ana García</p>
        <p className="text-xs text-muted-foreground truncate">Admin</p>
      </div>
      <Button variant="ghost" size="icon" className="shrink-0 size-7" aria-label="Configuración">
        <Icon name="more_horiz" size={16} />
      </Button>
    </div>
  </div>
</aside>`

const groupedCode = `<aside className="flex h-screen w-60 flex-col border-r bg-background">
  <div className="flex h-14 items-center gap-2 border-b px-4">
    <div className="size-6 rounded-md bg-primary" />
    <span className="font-semibold text-sm">Dashboard</span>
  </div>

  <nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
    {/* Grupo 1 */}
    <div>
      <p className="mb-1.5 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
        Gestión
      </p>
      <ul className="space-y-0.5">
        <NavItem href="/projects" icon="folder" label="Proyectos" active />
        <NavItem href="/tasks" icon="task_alt" label="Tareas" badge="12" />
        <NavItem href="/team" icon="group" label="Equipo" />
      </ul>
    </div>

    {/* Separador */}
    <Separator />

    {/* Grupo 2 */}
    <div>
      <p className="mb-1.5 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
        Sistema
      </p>
      <ul className="space-y-0.5">
        <NavItem href="/settings" icon="settings" label="Configuración" />
        <NavItem href="/billing" icon="credit_card" label="Facturación" />
        <NavItem href="/help" icon="help" label="Ayuda" />
      </ul>
    </div>
  </nav>
</aside>`

const collapsibleCode = `{/* Sidebar colapsable — ancho reducido muestra solo íconos */}
<aside className={cn(
  "flex h-screen flex-col border-r bg-background transition-all duration-200",
  collapsed ? "w-16" : "w-60"
)}>
  <div className="flex h-14 items-center justify-between border-b px-3">
    {!collapsed && (
      <div className="flex items-center gap-2 font-semibold text-sm">
        <div className="size-6 rounded-md bg-primary" />
        Mi App
      </div>
    )}
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setCollapsed(!collapsed)}
      aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
      className="ml-auto"
    >
      <Icon name={collapsed ? "menu_open" : "menu"} size={20} />
    </Button>
  </div>

  <nav className="flex-1 px-2 py-3">
    {navItems.map((item) => (
      <Tooltip key={item.href} content={collapsed ? item.label : undefined}>
        <a href={item.href}
          className="flex items-center gap-3 rounded-lg p-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
        >
          <Icon name={item.icon} size={20} className="shrink-0" />
          {!collapsed && <span>{item.label}</span>}
        </a>
      </Tooltip>
    ))}
  </nav>
</aside>`

export default async function SidebarPage() {
  const [basicHtml, groupedHtml, collapsibleHtml] = await Promise.all([
    highlight(basicCode),
    highlight(groupedCode),
    highlight(collapsibleCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Sidebar</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Navegación vertical lateral para aplicaciones con múltiples secciones.
            Compuesta de un header con logo, nav con grupos de links y un footer
            con información del usuario. No hay un componente dedicado.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Patrón, no componente:</strong> Esta docs
          misma usa el patrón de sidebar. El código fuente en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">components/docs/sidebar.tsx</code>{" "}
          es un ejemplo de implementación real.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básica — con usuario</h2>
        <p className="text-sm text-muted-foreground">
          Estructura de 3 partes: header (logo), nav scrollable, footer con perfil de usuario.
          El link activo usa{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">bg-accent text-foreground</code>.
        </p>
        <ComponentPreview
          preview={
            <div className="flex h-96 w-full max-w-xs rounded-xl border overflow-hidden">
              <aside className="flex w-60 flex-col border-r bg-background">
                <div className="flex h-14 items-center gap-2 border-b px-4 font-semibold text-sm">
                  <div className="size-6 rounded-md bg-primary" />
                  Mi App
                </div>
                <nav className="flex-1 px-3 py-4 space-y-0.5">
                  {[
                    { label: "Dashboard", icon: "grid_view", active: true },
                    { label: "Proyectos", icon: "folder" },
                    { label: "Tareas", icon: "task_alt", badge: "12" },
                    { label: "Equipo", icon: "group" },
                    { label: "Analytics", icon: "analytics" },
                    { label: "Configuración", icon: "settings" },
                  ].map((item) => (
                    <a key={item.label} href="#"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                        item.active
                          ? "bg-accent text-foreground font-medium"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                      }`}
                    >
                      <Icon name={item.icon as "grid_view"} size={16} />
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <Badge className="rounded-full h-4 px-1.5 text-[10px] min-w-0">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  ))}
                </nav>
                <div className="border-t p-3">
                  <div className="flex items-center gap-3 rounded-lg px-2 py-2">
                    <Avatar size="sm">
                      <AvatarFallback>AG</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">Ana García</p>
                      <p className="text-xs text-muted-foreground truncate">Admin</p>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0 size-7" aria-label="Más">
                      <Icon name="more_horiz" size={14} />
                    </Button>
                  </div>
                </div>
              </aside>
              <div className="flex-1 bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground">Contenido principal</p>
              </div>
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Agrupada por sección</h2>
        <p className="text-sm text-muted-foreground">
          Para apps con muchos links, agrupa con etiquetas uppercase y Separators.
          El badge numérico en la derecha del ítem muestra conteos (tareas, mensajes no leídos).
        </p>
        <ComponentPreview
          preview={
            <div className="flex h-96 w-full max-w-xs rounded-xl border overflow-hidden">
              <aside className="flex w-60 flex-col border-r bg-background">
                <div className="flex h-14 items-center gap-2 border-b px-4 text-sm">
                  <div className="size-6 rounded-md bg-primary" />
                  <span className="font-semibold">Dashboard</span>
                </div>
                <nav className="flex-1 px-3 py-4 space-y-5 overflow-y-auto">
                  <div>
                    <p className="mb-1.5 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Gestión</p>
                    <ul className="space-y-0.5">
                      {[
                        { label: "Proyectos", icon: "folder", active: true },
                        { label: "Tareas", icon: "task_alt", badge: "12" },
                        { label: "Equipo", icon: "group" },
                      ].map((item) => (
                        <li key={item.label}>
                          <a href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${item.active ? "bg-accent text-foreground font-medium" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"}`}>
                            <Icon name={item.icon as "folder"} size={16} />
                            <span className="flex-1">{item.label}</span>
                            {item.badge && <Badge className="rounded-full h-4 px-1.5 text-[10px]">{item.badge}</Badge>}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <p className="mb-1.5 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Sistema</p>
                    <ul className="space-y-0.5">
                      {[
                        { label: "Configuración", icon: "settings" },
                        { label: "Facturación", icon: "credit_card" },
                        { label: "Ayuda", icon: "help" },
                      ].map((item) => (
                        <li key={item.label}>
                          <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-colors">
                            <Icon name={item.icon as "settings"} size={16} />
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </aside>
              <div className="flex-1 bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground">Contenido principal</p>
              </div>
            </div>
          }
          codeHtml={groupedHtml}
          code={groupedCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Colapsable — solo íconos</h2>
        <p className="text-sm text-muted-foreground">
          Cuando el espacio es limitado, la sidebar puede colapsarse a{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">w-16</code> mostrando
          solo íconos. Los Tooltips proveen los labels en modo colapsado.
        </p>
        <ComponentPreview
          preview={
            <div className="flex h-64 w-full max-w-xs rounded-xl border overflow-hidden">
              <aside className="flex w-16 flex-col border-r bg-background">
                <div className="flex h-14 items-center justify-center border-b">
                  <div className="size-6 rounded-md bg-primary" />
                </div>
                <nav className="flex-1 px-2 py-3 space-y-0.5">
                  {[
                    { icon: "grid_view", active: true },
                    { icon: "folder" },
                    { icon: "task_alt" },
                    { icon: "group" },
                    { icon: "settings" },
                  ].map((item, i) => (
                    <a key={i} href="#"
                      className={`flex items-center justify-center rounded-lg p-2.5 transition-colors ${item.active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"}`}>
                      <Icon name={item.icon as "grid_view"} size={20} />
                    </a>
                  ))}
                </nav>
              </aside>
              <div className="flex-1 bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground">Contenido principal</p>
              </div>
            </div>
          }
          codeHtml={collapsibleHtml}
          code={collapsibleCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Anatomía</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li><strong className="text-foreground">Header</strong> — h-14, logo + nombre del producto, borde inferior</li>
          <li><strong className="text-foreground">Nav</strong> — flex-1 con overflow-y-auto, grupos con etiquetas, items con ícono + label</li>
          <li><strong className="text-foreground">Link activo</strong> — bg-accent text-foreground font-medium</li>
          <li><strong className="text-foreground">Badge</strong> — conteos en la derecha del link (ml-auto)</li>
          <li><strong className="text-foreground">Footer</strong> — borde superior, perfil de usuario compacto</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<aside>"}</code> como landmark y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<nav>"}</code> con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="Sidebar"</code>.</li>
          <li>El link activo debe tener <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-current="page"</code>.</li>
          <li>En modo colapsado, los items necesitan <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> ya que no hay texto visible.</li>
          <li>El botón de colapsar necesita <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> que describa el estado actual.</li>
        </ul>
      </section>
    </article>
  )
}
