import type { Metadata } from "next"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Kanban Card" }

const basicCode = `<Card className="w-64 cursor-pointer transition-shadow hover:shadow-md">
  <CardContent>
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium leading-snug">
          Rediseñar pantalla de login
        </p>
        <Badge className="bg-destructive/10 text-destructive border-destructive/20 shrink-0">
          Alta
        </Badge>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <Badge variant="outline" className="text-xs">UX</Badge>
          <Badge variant="outline" className="text-xs">Design</Badge>
        </div>
        <AvatarGroup>
          <Avatar size="sm">
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>CL</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  </CardContent>
</Card>`

const withMetaCode = `<Card className="w-64 cursor-pointer transition-shadow hover:shadow-md">
  <CardContent className="space-y-3">
    <Badge className="bg-info/10 text-info border-info/20">En progreso</Badge>
    <p className="text-sm font-medium leading-snug">
      Documentar componente Button
    </p>
    <p className="text-xs text-muted-foreground line-clamp-2">
      Incluir variantes, tamaños, estados de loading y todas las props con ejemplos.
    </p>
    <div className="flex items-center justify-between text-xs text-muted-foreground">
      <div className="flex items-center gap-1">
        <Icon name="attach_file" size={14} />
        <span>3 archivos</span>
      </div>
      <div className="flex items-center gap-1">
        <Icon name="chat_bubble_outline" size={14} />
        <span>5 comentarios</span>
      </div>
      <Avatar size="sm">
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>
    </div>
  </CardContent>
</Card>`

const priorityCode = `{/* Sin prioridad */}
<Card size="sm" className="w-56">
  <CardContent>
    <p className="text-sm font-medium">Actualizar paleta de colores</p>
    <p className="mt-1 text-xs text-muted-foreground">Sin fecha · Sin asignar</p>
  </CardContent>
</Card>

{/* Prioridad media */}
<Card size="sm" className="w-56 border-l-2 border-l-warning">
  <CardContent>
    <p className="text-sm font-medium">Revisar accesibilidad del modal</p>
    <p className="mt-1 text-xs text-muted-foreground">Vence: 20 jun · Ana G.</p>
  </CardContent>
</Card>

{/* Prioridad alta */}
<Card size="sm" className="w-56 border-l-2 border-l-destructive">
  <CardContent>
    <p className="text-sm font-medium">Fix: contraste en modo oscuro</p>
    <p className="mt-1 text-xs text-muted-foreground">Vence: hoy · Carlos L.</p>
  </CardContent>
</Card>`

export default async function KanbanCardPage() {
  const [basicHtml, withMetaHtml, priorityHtml] = await Promise.all([
    highlight(basicCode),
    highlight(withMetaCode),
    highlight(priorityCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Kanban Card</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Tarjeta de tarea para tableros Kanban. Muestra título, prioridad, etiquetas
            y asignados en un Card compacto y arrastrable. No hay componente dedicado —
            se compone de Card, Badge y Avatar.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Patrón, no componente:</strong> Para el
          drag-and-drop integra una librería como <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">dnd-kit</code>.
          El Card solo define la presentación visual.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico con prioridad y asignados</h2>
        <ComponentPreview
          preview={
            <Card className="w-64 cursor-pointer transition-shadow hover:shadow-md">
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium leading-snug">
                      Rediseñar pantalla de login
                    </p>
                    <Badge className="bg-destructive/10 text-destructive border-destructive/20 shrink-0">
                      Alta
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      <Badge variant="outline" className="text-xs">UX</Badge>
                      <Badge variant="outline" className="text-xs">Design</Badge>
                    </div>
                    <AvatarGroup>
                      <Avatar size="sm">
                        <AvatarFallback>AG</AvatarFallback>
                      </Avatar>
                      <Avatar size="sm">
                        <AvatarFallback>CL</AvatarFallback>
                      </Avatar>
                    </AvatarGroup>
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
        <h2 className="text-xl font-semibold tracking-tight">Con metadatos extendidos</h2>
        <p className="text-sm text-muted-foreground">
          Para tableros con más contexto: descripción, attachments y comentarios.
        </p>
        <ComponentPreview
          preview={
            <Card className="w-64 cursor-pointer transition-shadow hover:shadow-md">
              <CardContent className="space-y-3">
                <Badge className="bg-info/10 text-info border-info/20">En progreso</Badge>
                <p className="text-sm font-medium leading-snug">
                  Documentar componente Button
                </p>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Incluir variantes, tamaños, estados de loading y todas las props con ejemplos.
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="attach_file" size={14} />
                    <span>3</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="chat_bubble_outline" size={14} />
                    <span>5</span>
                  </div>
                  <Avatar size="sm">
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          }
          codeHtml={withMetaHtml}
          code={withMetaCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Indicador de prioridad — borde lateral</h2>
        <p className="text-sm text-muted-foreground">
          Borde izquierdo de color semántico como indicador visual de urgencia.
          Compact y no invasivo.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <Card size="sm" className="border-l-2 border-l-border">
                <CardContent>
                  <p className="text-sm font-medium">Actualizar paleta de colores</p>
                  <p className="mt-1 text-xs text-muted-foreground">Sin fecha · Sin asignar</p>
                </CardContent>
              </Card>
              <Card size="sm" className="border-l-2 border-l-warning">
                <CardContent>
                  <p className="text-sm font-medium">Revisar accesibilidad del modal</p>
                  <p className="mt-1 text-xs text-muted-foreground">Vence: 20 jun · Ana G.</p>
                </CardContent>
              </Card>
              <Card size="sm" className="border-l-2 border-l-destructive">
                <CardContent>
                  <p className="text-sm font-medium">Fix: contraste en modo oscuro</p>
                  <p className="mt-1 text-xs text-muted-foreground">Vence: hoy · Carlos L.</p>
                </CardContent>
              </Card>
            </div>
          }
          codeHtml={priorityHtml}
          code={priorityCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Anatomía</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li><strong className="text-foreground">Título</strong> — descripción concisa de la tarea</li>
          <li><strong className="text-foreground">Badge de prioridad</strong> — Alta / Media / Baja con color semántico</li>
          <li><strong className="text-foreground">Etiquetas</strong> — categorización con Badge variant="outline"</li>
          <li><strong className="text-foreground">Asignados</strong> — AvatarGroup con hasta 3 avatares + contador</li>
          <li><strong className="text-foreground">Metadatos</strong> — archivos, comentarios, fecha de vencimiento</li>
        </ul>
      </section>
    </article>
  )
}
