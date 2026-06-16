import type { Metadata } from "next"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Navbar" }

const basicCode = `<header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
  <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
    {/* Logo */}
    <a href="/" className="flex items-center gap-2 font-semibold">
      <div className="size-6 rounded-md bg-primary" />
      Proteus
    </a>

    {/* Links de navegación */}
    <nav className="hidden md:flex items-center gap-1 ml-4">
      <a href="/docs" className="px-3 py-1.5 text-sm text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors">
        Docs
      </a>
      <a href="/components" className="px-3 py-1.5 text-sm text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors">
        Componentes
      </a>
      <a href="/changelog" className="px-3 py-1.5 text-sm text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors">
        Changelog
      </a>
    </nav>

    {/* Spacer */}
    <div className="flex-1" />

    {/* Acciones */}
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" aria-label="Buscar">
        <Icon name="search" size={20} />
      </Button>
      <Button variant="ghost" size="icon" aria-label="Notificaciones">
        <Icon name="notifications" size={20} />
      </Button>
      <Avatar size="sm">
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>
    </div>
  </div>
</header>`

const withBadgeCode = `<header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
  <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
    <a href="/" className="flex items-center gap-2 font-semibold">
      <div className="size-6 rounded-md bg-primary" />
      Mi App
      <Badge variant="secondary" className="rounded-full text-xs">Beta</Badge>
    </a>

    <nav className="hidden md:flex items-center gap-1 ml-4">
      <a href="/dashboard" className="px-3 py-1.5 text-sm font-medium rounded-md bg-accent text-foreground">
        Dashboard
      </a>
      <a href="/projects" className="px-3 py-1.5 text-sm text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors">
        Proyectos
      </a>
      <a href="/team" className="px-3 py-1.5 text-sm text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors">
        Equipo
      </a>
    </nav>

    <div className="flex-1" />

    <div className="flex items-center gap-2">
      <div className="relative">
        <Button variant="ghost" size="icon" aria-label="Notificaciones">
          <Icon name="notifications" size={20} />
        </Button>
        <span className="absolute top-1 right-1 size-2 rounded-full bg-destructive" />
      </div>
      <Separator orientation="vertical" className="h-6" />
      <Avatar size="sm">
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>
    </div>
  </div>
</header>`

const appBarCode = `{/* App bar compacta — para apps internas y dashboards */}
<header className="flex h-12 items-center gap-3 border-b bg-background px-4">
  <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menú">
    <Icon name="menu" size={20} />
  </Button>

  <div className="flex items-center gap-1.5 font-semibold text-sm">
    <div className="size-5 rounded bg-primary" />
    Dashboard
  </div>

  <div className="flex-1" />

  <Button variant="ghost" size="icon" aria-label="Buscar">
    <Icon name="search" size={20} />
  </Button>
  <Avatar size="sm">
    <AvatarFallback>AG</AvatarFallback>
  </Avatar>
</header>`

export default async function NavbarPage() {
  const [basicHtml, badgeHtml, appBarHtml] = await Promise.all([
    highlight(basicCode),
    highlight(withBadgeCode),
    highlight(appBarCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Navbar</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Barra de navegación superior que contiene el logo, los links principales
            y las acciones globales. Se implementa como un{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">{"<header>"}</code>{" "}
            sticky con{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">backdrop-blur</code>.
            No hay un componente dedicado — es un patrón de composición.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Patrón, no componente:</strong> La navbar varía
          significativamente entre productos. Este patrón usa Button, Icon, Avatar, Badge
          y Separator como bloques de construcción.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básica — sitio de documentación</h2>
        <p className="text-sm text-muted-foreground">
          Logo a la izquierda, links de navegación centrados, acciones de usuario a la derecha.
          Fondo translúcido con blur para scroll.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full rounded-lg border overflow-hidden">
              <div className="flex h-14 items-center gap-4 px-4 bg-background/80">
                <a href="#" className="flex items-center gap-2 font-semibold text-sm">
                  <div className="size-6 rounded-md bg-primary" />
                  Proteus
                </a>
                <nav className="flex items-center gap-1 ml-2">
                  {["Docs", "Componentes", "Changelog"].map((label) => (
                    <a key={label} href="#"
                      className="px-3 py-1.5 text-xs text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors">
                      {label}
                    </a>
                  ))}
                </nav>
                <div className="flex-1" />
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" aria-label="Buscar">
                    <Icon name="search" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Notificaciones">
                    <Icon name="notifications" size={20} />
                  </Button>
                  <Avatar size="sm">
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con link activo y badge</h2>
        <p className="text-sm text-muted-foreground">
          El link activo usa{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">bg-accent text-foreground</code>{" "}
          en lugar de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">text-muted-foreground</code>.
          La notificación con punto rojo usa un badge absoluto sobre el botón.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full rounded-lg border overflow-hidden">
              <div className="flex h-14 items-center gap-4 px-4 bg-background">
                <a href="#" className="flex items-center gap-2 font-semibold text-sm">
                  <div className="size-6 rounded-md bg-primary" />
                  Mi App
                  <Badge variant="secondary" className="rounded-full text-xs">Beta</Badge>
                </a>
                <nav className="flex items-center gap-1 ml-2">
                  <a href="#" className="px-3 py-1.5 text-xs font-medium rounded-md bg-accent text-foreground">Dashboard</a>
                  <a href="#" className="px-3 py-1.5 text-xs text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors">Proyectos</a>
                  <a href="#" className="px-3 py-1.5 text-xs text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors">Equipo</a>
                </nav>
                <div className="flex-1" />
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Button variant="ghost" size="icon" aria-label="Notificaciones">
                      <Icon name="notifications" size={20} />
                    </Button>
                    <span className="absolute top-1 right-1 size-2 rounded-full bg-destructive" />
                  </div>
                  <Separator orientation="vertical" className="h-6" />
                  <Avatar size="sm">
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          }
          codeHtml={badgeHtml}
          code={withBadgeCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">App bar compacta</h2>
        <p className="text-sm text-muted-foreground">
          Para apps internas y dashboards donde la nav principal está en la sidebar.
          Altura 48px, incluye hamburger para mobile.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full rounded-lg border overflow-hidden">
              <div className="flex h-12 items-center gap-3 bg-background px-4">
                <Button variant="ghost" size="icon" aria-label="Menú">
                  <Icon name="menu" size={20} />
                </Button>
                <div className="flex items-center gap-1.5 font-semibold text-sm">
                  <div className="size-5 rounded bg-primary" />
                  Dashboard
                </div>
                <div className="flex-1" />
                <Button variant="ghost" size="icon" aria-label="Buscar">
                  <Icon name="search" size={20} />
                </Button>
                <Avatar size="sm">
                  <AvatarFallback>AG</AvatarFallback>
                </Avatar>
              </div>
            </div>
          }
          codeHtml={appBarHtml}
          code={appBarCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Anatomía</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li><strong className="text-foreground">Logo / Marca</strong> — siempre a la izquierda, incluye nombre del producto</li>
          <li><strong className="text-foreground">Navegación principal</strong> — links de secciones clave, centrados o tras el logo</li>
          <li><strong className="text-foreground">Spacer</strong> — <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">flex-1</code> empuja las acciones a la derecha</li>
          <li><strong className="text-foreground">Acciones globales</strong> — búsqueda, notificaciones, tema, usuario</li>
          <li><strong className="text-foreground">Avatar / perfil</strong> — último elemento, abre menu de cuenta</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<header>"}</code> como landmark y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<nav>"}</code> con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="Navegación principal"</code>.</li>
          <li>El logo debe ser un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<a href=\"/\">"}</code> con texto visible o <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>.</li>
          <li>Los botones de ícono (búsqueda, notificaciones) siempre necesitan <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>.</li>
          <li>El link activo debe tener <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-current="page"</code>.</li>
        </ul>
      </section>
    </article>
  )
}
