import type { Metadata } from "next"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineDate,
} from "@/components/ui/timeline"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Timeline" }

const basicCode = `<Timeline>
  <TimelineItem>
    <TimelineIcon>
      <Icon name="check" size={14} />
    </TimelineIcon>
    <TimelineContent>
      <TimelineTitle>Pedido confirmado</TimelineTitle>
      <TimelineDescription>Tu pedido fue recibido y está siendo procesado.</TimelineDescription>
      <TimelineDate>Hoy, 10:32</TimelineDate>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineIcon>
      <Icon name="inventory_2" size={14} />
    </TimelineIcon>
    <TimelineContent>
      <TimelineTitle>En preparación</TimelineTitle>
      <TimelineDescription>El almacén está preparando tu paquete.</TimelineDescription>
      <TimelineDate>Hoy, 11:15</TimelineDate>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineIcon>
      <Icon name="local_shipping" size={14} />
    </TimelineIcon>
    <TimelineContent>
      <TimelineTitle>En camino</TimelineTitle>
      <TimelineDescription>Tu paquete fue despachado al correo.</TimelineDescription>
      <TimelineDate>Ayer, 15:00</TimelineDate>
    </TimelineContent>
  </TimelineItem>
</Timeline>`

const coloredCode = `<Timeline>
  <TimelineItem>
    <TimelineIcon className="bg-success/10 text-success">
      <Icon name="check_circle" size={14} />
    </TimelineIcon>
    <TimelineContent>
      <TimelineTitle>Deploy exitoso</TimelineTitle>
      <TimelineDescription>v2.4.1 publicado en producción.</TimelineDescription>
      <TimelineDate>hace 2 min</TimelineDate>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineIcon className="bg-warning/10 text-warning">
      <Icon name="warning" size={14} />
    </TimelineIcon>
    <TimelineContent>
      <TimelineTitle>Build lento</TimelineTitle>
      <TimelineDescription>El build tardó más de 3 minutos.</TimelineDescription>
      <TimelineDate>hace 5 min</TimelineDate>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineIcon className="bg-destructive/10 text-destructive">
      <Icon name="error" size={14} />
    </TimelineIcon>
    <TimelineContent>
      <TimelineTitle>Error en tests</TimelineTitle>
      <TimelineDescription>3 tests fallaron en CI.</TimelineDescription>
      <TimelineDate>hace 12 min</TimelineDate>
    </TimelineContent>
  </TimelineItem>
</Timeline>`

const timelineProps = [
  { name: "Timeline", type: "ol", defaultValue: "—", description: "Contenedor principal de la lista de eventos." },
  { name: "TimelineItem", type: "li", defaultValue: "—", description: "Evento individual. Incluye la línea conectora via pseudo-elemento." },
  { name: "TimelineIcon", type: "div", defaultValue: "—", description: "Círculo con ícono. Acepta className para cambiar colores." },
  { name: "TimelineContent", type: "div", defaultValue: "—", description: "Área de texto del evento (título, descripción, fecha)." },
  { name: "TimelineDate", type: "time", defaultValue: "—", description: "Timestamp del evento. Renderiza un elemento <time> semántico." },
]

export default async function TimelinePage() {
  const [basicHtml, coloredHtml] = await Promise.all([
    highlight(basicCode),
    highlight(coloredCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Timeline</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Lista vertical de eventos cronológicos con ícono, contenido y fecha.
            Ideal para historial de actividad, seguimiento de pedidos y logs de sistema.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <ComponentPreview
          preview={
            <Timeline className="max-w-sm">
              <TimelineItem>
                <TimelineIcon>
                  <Icon name="check" size={14} />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineTitle>Pedido confirmado</TimelineTitle>
                  <TimelineDescription>Tu pedido fue recibido y está siendo procesado.</TimelineDescription>
                  <TimelineDate>Hoy, 10:32</TimelineDate>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineIcon>
                  <Icon name="inventory_2" size={14} />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineTitle>En preparación</TimelineTitle>
                  <TimelineDescription>El almacén está preparando tu paquete.</TimelineDescription>
                  <TimelineDate>Hoy, 11:15</TimelineDate>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineIcon>
                  <Icon name="local_shipping" size={14} />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineTitle>En camino</TimelineTitle>
                  <TimelineDescription>Tu paquete fue despachado al correo.</TimelineDescription>
                  <TimelineDate>Ayer, 15:00</TimelineDate>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con íconos de color</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">className</code> en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">TimelineIcon</code>{" "}
          para aplicar colores semánticos al círculo.
        </p>
        <ComponentPreview
          preview={
            <Timeline className="max-w-sm">
              <TimelineItem>
                <TimelineIcon className="bg-success/10 text-success">
                  <Icon name="check_circle" size={14} />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineTitle>Deploy exitoso</TimelineTitle>
                  <TimelineDescription>v2.4.1 publicado en producción.</TimelineDescription>
                  <TimelineDate>hace 2 min</TimelineDate>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineIcon className="bg-warning/10 text-warning">
                  <Icon name="warning" size={14} />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineTitle>Build lento</TimelineTitle>
                  <TimelineDescription>El build tardó más de 3 minutos.</TimelineDescription>
                  <TimelineDate>hace 5 min</TimelineDate>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineIcon className="bg-destructive/10 text-destructive">
                  <Icon name="error" size={14} />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineTitle>Error en tests</TimelineTitle>
                  <TimelineDescription>3 tests fallaron en CI.</TimelineDescription>
                  <TimelineDate>hace 12 min</TimelineDate>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          }
          codeHtml={coloredHtml}
          code={coloredCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Componentes</h2>
        <PropsTable props={timelineProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Timeline</code>{" "}
            es un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<ol>"}</code> —
            correcto semánticamente para listas ordenadas cronológicamente.
          </li>
          <li>
            Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<time dateTime=\"2024-01-15T10:32\">"}</code>{" "}
            con el atributo <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">dateTime</code>{" "}
            en formato ISO para que lectores de pantalla y bots interpreten la fecha.
          </li>
          <li>
            Si el ícono es decorativo (el texto ya describe el evento), agrega{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-hidden="true"</code>{" "}
            al icono.
          </li>
        </ul>
      </section>
    </article>
  )
}
