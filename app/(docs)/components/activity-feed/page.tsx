import type { Metadata } from "next"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Activity Feed" }

const basicCode = `<div className="divide-y rounded-lg border">
  {activities.map((item) => (
    <div key={item.id} className="flex gap-3 px-4 py-3">
      <Avatar size="sm">
        <AvatarFallback>{item.initials}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="text-sm">
          <span className="font-medium">{item.user}</span>{" "}
          <span className="text-muted-foreground">{item.action}</span>{" "}
          <span className="font-medium">{item.target}</span>
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">{item.time}</p>
      </div>
    </div>
  ))}
</div>`

const iconFeedCode = `<div className="space-y-4">
  {events.map((event) => (
    <div key={event.id} className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="size-8 rounded-full bg-muted flex items-center justify-center shrink-0">
          <Icon name={event.icon} size={16} className="text-muted-foreground" />
        </div>
        {!event.last && (
          <div className="mt-1 w-px flex-1 bg-border" />
        )}
      </div>
      <div className="pb-4">
        <p className="text-sm font-medium">{event.title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{event.description}</p>
        <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
      </div>
    </div>
  ))}
</div>`

const groupedCode = `<div className="space-y-6">
  {groupedActivities.map((group) => (
    <div key={group.date}>
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
        {group.date}
      </p>
      <div className="divide-y rounded-lg border">
        {group.items.map((item) => (
          <div key={item.id} className="flex gap-3 px-4 py-3">
            <Avatar size="sm">
              <AvatarFallback>{item.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">{item.user}</span>{" "}
                <span className="text-muted-foreground">{item.action}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>`

export default async function ActivityFeedPage() {
  const [basicHtml, iconFeedHtml, groupedHtml] = await Promise.all([
    highlight(basicCode),
    highlight(iconFeedCode),
    highlight(groupedCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Activity Feed</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Lista cronológica de eventos o acciones realizadas en el sistema.
            Se compone de Avatar, texto estructurado y timestamp. No hay un
            componente dedicado — se construye con primitivos existentes.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Patrón, no componente:</strong> Activity Feed
          se compone de Avatar, texto y separadores. La estructura varía según el contexto
          de tu producto.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Feed con avatar</h2>
        <p className="text-sm text-muted-foreground">
          Cada ítem tiene avatar de usuario, descripción de la acción y timestamp relativo.
        </p>
        <ComponentPreview
          preview={
            <div className="divide-y rounded-lg border w-full max-w-md">
              {[
                { id: 1, initials: "AG", user: "Ana García", action: "comentó en", target: "Diseño de íconos", time: "Hace 5 min" },
                { id: 2, initials: "CL", user: "Carlos López", action: "cerró la tarea", target: "Revisión de tokens", time: "Hace 23 min" },
                { id: 3, initials: "MR", user: "María Rodríguez", action: "subió un archivo a", target: "Sprint 4", time: "Hace 1 h" },
                { id: 4, initials: "JM", user: "José Martínez", action: "asignó", target: "Botón primario a Ana García", time: "Hace 2 h" },
              ].map((item) => (
                <div key={item.id} className="flex gap-3 px-4 py-3">
                  <Avatar size="sm">
                    <AvatarFallback>{item.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{item.user}</span>{" "}
                      <span className="text-muted-foreground">{item.action}</span>{" "}
                      <span className="font-medium">{item.target}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Timeline con ícono — historial de eventos</h2>
        <p className="text-sm text-muted-foreground">
          Variante con línea vertical conectora. Útil para auditoría, historial de pedidos
          o estados de un proceso.
        </p>
        <ComponentPreview
          preview={
            <div className="space-y-0 w-full max-w-md">
              {[
                { id: 1, icon: "check_circle", title: "Pedido confirmado", description: "Pago procesado correctamente", time: "15 jun, 10:32", last: false },
                { id: 2, icon: "inventory_2", title: "En preparación", description: "Tu pedido está siendo empacado", time: "15 jun, 11:15", last: false },
                { id: 3, icon: "local_shipping", title: "Enviado", description: "Entrega estimada: 17 de junio", time: "15 jun, 14:00", last: false },
                { id: 4, icon: "home", title: "Entregado", description: "Recibido en puerta principal", time: "17 jun, 09:45", last: true },
              ].map((event) => (
                <div key={event.id} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name={event.icon as "check_circle"} size={16} className="text-primary" />
                    </div>
                    {!event.last && (
                      <div className="mt-1 w-px flex-1 bg-border min-h-[20px]" />
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          }
          codeHtml={iconFeedHtml}
          code={iconFeedCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Agrupado por fecha</h2>
        <p className="text-sm text-muted-foreground">
          Para feeds de alta densidad, agrupa los eventos bajo etiquetas de fecha
          para facilitar la navegación temporal.
        </p>
        <ComponentPreview
          preview={
            <div className="space-y-6 w-full max-w-md">
              {[
                {
                  date: "Hoy",
                  items: [
                    { id: 1, initials: "AG", user: "Ana García", action: "comentó en Diseño de íconos", time: "10:32" },
                    { id: 2, initials: "CL", user: "Carlos López", action: "cerró la tarea Revisión de tokens", time: "09:15" },
                  ],
                },
                {
                  date: "Ayer",
                  items: [
                    { id: 3, initials: "MR", user: "María Rodríguez", action: "creó el proyecto Sprint 5", time: "17:40" },
                    { id: 4, initials: "JM", user: "José Martínez", action: "asignó Botón primario", time: "15:20" },
                  ],
                },
              ].map((group) => (
                <div key={group.date}>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    {group.date}
                  </p>
                  <div className="divide-y rounded-lg border">
                    {group.items.map((item) => (
                      <div key={item.id} className="flex gap-3 px-4 py-3">
                        <Avatar size="sm">
                          <AvatarFallback>{item.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm">
                            <span className="font-medium">{item.user}</span>{" "}
                            <span className="text-muted-foreground">{item.action}</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          }
          codeHtml={groupedHtml}
          code={groupedCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Anatomía</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li><strong className="text-foreground">Avatar</strong> — identifica quién realizó la acción</li>
          <li><strong className="text-foreground">Acción</strong> — texto que describe qué ocurrió</li>
          <li><strong className="text-foreground">Target</strong> — recurso afectado (tarea, archivo, etc.)</li>
          <li><strong className="text-foreground">Timestamp</strong> — cuándo ocurrió (relativo o absoluto)</li>
          <li><strong className="text-foreground">Separador / línea</strong> — división visual entre eventos</li>
        </ul>
      </section>
    </article>
  )
}
