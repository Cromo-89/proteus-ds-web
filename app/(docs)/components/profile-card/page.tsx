import type { Metadata } from "next"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarBadge } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Profile Card" }

const basicCode = `<Card className="w-64">
  <CardContent className="pt-6">
    <div className="flex flex-col items-center gap-3 text-center">
      <Avatar size="lg">
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold">Ana García</p>
        <p className="text-sm text-muted-foreground">Diseñadora UX · Proteus</p>
      </div>
      <p className="text-sm text-muted-foreground max-w-[180px]">
        Diseño sistemas que hacen la tecnología más humana.
      </p>
      <div className="flex gap-2 w-full">
        <Button className="flex-1" size="sm">Seguir</Button>
        <Button variant="outline" size="sm">
          <Icon name="mail" size={16} />
        </Button>
      </div>
    </div>
  </CardContent>
</Card>`

const withStatsCode = `<Card className="w-72">
  <CardContent className="pt-6">
    <div className="flex items-start gap-4">
      <div className="relative">
        <Avatar size="lg">
          <AvatarFallback>CL</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold">Carlos López</p>
        <p className="text-xs text-muted-foreground">Desarrollador Frontend</p>
        <div className="mt-2 flex gap-4 text-center">
          <div>
            <p className="text-sm font-semibold">128</p>
            <p className="text-xs text-muted-foreground">Proyectos</p>
          </div>
          <div>
            <p className="text-sm font-semibold">4.2k</p>
            <p className="text-xs text-muted-foreground">Seguidores</p>
          </div>
          <div>
            <p className="text-sm font-semibold">391</p>
            <p className="text-xs text-muted-foreground">Siguiendo</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4 flex gap-2">
      <Button className="flex-1" size="sm">Seguir</Button>
      <Button variant="outline" size="sm" className="flex-1">Mensaje</Button>
    </div>
  </CardContent>
</Card>`

const compactCode = `<div className="flex items-center gap-3 rounded-xl border p-3 w-72">
  <Avatar>
    <AvatarFallback>MR</AvatarFallback>
    <AvatarBadge />
  </Avatar>
  <div className="flex-1 min-w-0">
    <p className="text-sm font-medium">María Rodríguez</p>
    <p className="text-xs text-muted-foreground truncate">UX Research · En línea</p>
  </div>
  <Button variant="outline" size="sm">Ver perfil</Button>
</div>`

export default async function ProfileCardPage() {
  const [basicHtml, withStatsHtml, compactHtml] = await Promise.all([
    highlight(basicCode),
    highlight(withStatsCode),
    highlight(compactCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Profile Card</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Tarjeta de presentación de usuario o miembro del equipo. Combina Avatar,
            nombre, rol, bio y acciones. Disponible en variantes centrada, horizontal
            y compacta para distintos contextos de interfaz.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Patrón, no componente:</strong> Se compone
          de Card, Avatar, Badge y Button. Adapta la estructura según el nivel de detalle
          requerido por tu producto.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Centrado — redes sociales / team</h2>
        <p className="text-sm text-muted-foreground">
          Avatar grande centrado, nombre, rol, bio corta y acciones. Ideal para tooltips
          de perfil, popovers y secciones de equipo en landing pages.
        </p>
        <ComponentPreview
          preview={
            <Card className="w-64">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-3 text-center">
                  <Avatar size="lg">
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Ana García</p>
                    <p className="text-sm text-muted-foreground">Diseñadora UX · Proteus</p>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-[180px]">
                    Diseño sistemas que hacen la tecnología más humana.
                  </p>
                  <div className="flex gap-2 w-full">
                    <Button className="flex-1" size="sm">Seguir</Button>
                    <Button variant="outline" size="sm">
                      <Icon name="mail" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con estadísticas</h2>
        <p className="text-sm text-muted-foreground">
          Variante horizontal con badge de estado en línea y métricas clave
          (proyectos, seguidores, siguiendo). Para plataformas de colaboración.
        </p>
        <ComponentPreview
          preview={
            <Card className="w-72">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar size="lg">
                      <AvatarFallback>CL</AvatarFallback>
                      <AvatarBadge />
                    </Avatar>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold">Carlos López</p>
                    <p className="text-xs text-muted-foreground">Desarrollador Frontend</p>
                    <div className="mt-2 flex gap-4 text-center">
                      <div>
                        <p className="text-sm font-semibold">128</p>
                        <p className="text-xs text-muted-foreground">Proyectos</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">4.2k</p>
                        <p className="text-xs text-muted-foreground">Seguidores</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">391</p>
                        <p className="text-xs text-muted-foreground">Siguiendo</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button className="flex-1" size="sm">Seguir</Button>
                  <Button variant="outline" size="sm" className="flex-1">Mensaje</Button>
                </div>
              </CardContent>
            </Card>
          }
          codeHtml={withStatsHtml}
          code={withStatsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Compacto — lista de usuarios</h2>
        <p className="text-sm text-muted-foreground">
          Para listas de miembros, resultados de búsqueda de usuarios o paneles de sidebar.
          Sin Card contenedor — solo avatar + texto + acción en una fila.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-2 w-full max-w-sm">
              {[
                { initials: "AG", name: "Ana García", role: "UX Designer · En línea" },
                { initials: "CL", name: "Carlos López", role: "Frontend Dev · En línea" },
                { initials: "MR", name: "María Rodríguez", role: "UX Research · Ausente" },
              ].map((user) => (
                <div key={user.name} className="flex items-center gap-3 rounded-xl border p-3">
                  <Avatar>
                    <AvatarFallback>{user.initials}</AvatarFallback>
                    <AvatarBadge />
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.role}</p>
                  </div>
                  <Button variant="outline" size="sm">Ver</Button>
                </div>
              ))}
            </div>
          }
          codeHtml={compactHtml}
          code={compactCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Anatomía</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li><strong className="text-foreground">Avatar</strong> — size lg para centrado, default para horizontal/compacto</li>
          <li><strong className="text-foreground">AvatarBadge</strong> — indicador de estado en línea (punto primario)</li>
          <li><strong className="text-foreground">Nombre y rol</strong> — font-semibold + text-muted-foreground</li>
          <li><strong className="text-foreground">Bio</strong> — max-w limitado, max 1-2 líneas</li>
          <li><strong className="text-foreground">Estadísticas</strong> — grid de 3 columnas, número en bold</li>
          <li><strong className="text-foreground">Acciones</strong> — primaria (Seguir/Conectar) + secundaria (Mensaje)</li>
        </ul>
      </section>
    </article>
  )
}
