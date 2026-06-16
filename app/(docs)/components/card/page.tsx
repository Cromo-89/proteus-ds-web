import type { Metadata } from "next"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Card" }

const basicCode = `<Card className="w-80">
  <CardHeader>
    <CardTitle>Bienvenido a Proteus DS</CardTitle>
    <CardDescription>
      Explora los componentes disponibles y empieza a construir.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Más de 40 componentes listos para producción, construidos sobre
      Base UI y Tailwind v4.
    </p>
  </CardContent>
  <CardFooter>
    <Button size="sm">Explorar componentes</Button>
    <Button variant="ghost" size="sm">Ver changelog</Button>
  </CardFooter>
</Card>`

const actionCode = `<Card className="w-80">
  <CardHeader>
    <CardTitle>Miembros del equipo</CardTitle>
    <CardDescription>12 miembros activos</CardDescription>
    <CardAction>
      <Button variant="outline" size="sm">
        <Icon name="person_add" size={16} />
        Invitar
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Gestiona los accesos y roles de cada miembro desde esta sección.
    </p>
  </CardContent>
</Card>`

const smCode = `<Card size="sm" className="w-72">
  <CardHeader>
    <CardTitle>Notificaciones</CardTitle>
    <CardDescription>Configura cómo recibes alertas</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Activa o desactiva notificaciones por email, push o Slack.
    </p>
  </CardContent>
  <CardFooter>
    <Button size="sm" variant="outline">Configurar</Button>
  </CardFooter>
</Card>`

const metricCode = `<div className="grid grid-cols-2 gap-3">
  <Card size="sm">
    <CardHeader>
      <CardDescription>Componentes</CardDescription>
      <CardTitle className="text-2xl font-bold">42</CardTitle>
    </CardHeader>
  </Card>
  <Card size="sm">
    <CardHeader>
      <CardDescription>Tokens</CardDescription>
      <CardTitle className="text-2xl font-bold">186</CardTitle>
    </CardHeader>
  </Card>
  <Card size="sm">
    <CardHeader>
      <CardDescription>Contribuidores</CardDescription>
      <CardTitle className="text-2xl font-bold">8</CardTitle>
    </CardHeader>
  </Card>
  <Card size="sm">
    <CardHeader>
      <CardDescription>Versión</CardDescription>
      <CardTitle className="text-2xl font-bold">0.11</CardTitle>
    </CardHeader>
  </Card>
</div>`

const cardProps = [
  { name: "size", type: '"default" | "sm"', defaultValue: '"default"', description: 'Tamaño del espaciado interno. "sm" reduce el padding de 16 a 12px.' },
]

export default async function CardPage() {
  const [basicHtml, actionHtml, smHtml, metricHtml] = await Promise.all([
    highlight(basicCode),
    highlight(actionCode),
    highlight(smCode),
    highlight(metricCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Card</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Contenedor con superficie elevada para agrupar información relacionada.
            Compuesto por slots opcionales: Header, Title, Description, Action, Content y Footer,
            cada uno con un rol visual y semántico específico.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          La estructura más común: Header con título y descripción, Content para el cuerpo
          y Footer para las acciones principales.
        </p>
        <ComponentPreview
          preview={
            <Card className="w-80">
              <CardHeader>
                <CardTitle>Bienvenido a Proteus DS</CardTitle>
                <CardDescription>
                  Explora los componentes disponibles y empieza a construir.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Más de 40 componentes listos para producción, construidos sobre
                  Base UI y Tailwind v4.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Explorar componentes</Button>
                <Button variant="ghost" size="sm">Ver changelog</Button>
              </CardFooter>
            </Card>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con CardAction</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CardAction</code> se
          posiciona automáticamente en la esquina superior derecha del header mediante CSS grid,
          ocupando <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">col-start-2 row-span-2</code>.
        </p>
        <ComponentPreview
          preview={
            <Card className="w-80">
              <CardHeader>
                <CardTitle>Miembros del equipo</CardTitle>
                <CardDescription>12 miembros activos</CardDescription>
                <CardAction>
                  <Button variant="outline" size="sm">
                    <Icon name="person_add" size={16} />
                    Invitar
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Gestiona los accesos y roles de cada miembro desde esta sección.
                </p>
              </CardContent>
            </Card>
          }
          codeHtml={actionHtml}
          code={actionCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tamaño pequeño</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">size="sm"</code> reduce
          el padding interno de 16 a 12px. Útil para sidebars, widgets y dashboards compactos.
        </p>
        <ComponentPreview
          preview={
            <Card size="sm" className="w-72">
              <CardHeader>
                <CardTitle>Notificaciones</CardTitle>
                <CardDescription>Configura cómo recibes alertas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Activa o desactiva notificaciones por email, push o Slack.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">Configurar</Button>
              </CardFooter>
            </Card>
          }
          codeHtml={smHtml}
          code={smCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tarjetas de métricas</h2>
        <p className="text-sm text-muted-foreground">
          Patrón de dashboard: agrupación de Cards pequeñas con una cifra prominente
          y una etiqueta descriptiva.
        </p>
        <ComponentPreview
          preview={
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              <Card size="sm">
                <CardHeader>
                  <CardDescription>Componentes</CardDescription>
                  <CardTitle className="text-2xl font-bold">42</CardTitle>
                </CardHeader>
              </Card>
              <Card size="sm">
                <CardHeader>
                  <CardDescription>Tokens</CardDescription>
                  <CardTitle className="text-2xl font-bold">186</CardTitle>
                </CardHeader>
              </Card>
              <Card size="sm">
                <CardHeader>
                  <CardDescription>Contribuidores</CardDescription>
                  <CardTitle className="text-2xl font-bold">8</CardTitle>
                </CardHeader>
              </Card>
              <Card size="sm">
                <CardHeader>
                  <CardDescription>Versión</CardDescription>
                  <CardTitle className="text-2xl font-bold">0.11</CardTitle>
                </CardHeader>
              </Card>
            </div>
          }
          codeHtml={metricHtml}
          code={metricCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Anatomía</h2>
        <div className="rounded-lg border bg-muted/30 p-4 text-sm space-y-2">
          <div className="font-mono text-xs space-y-0.5 text-muted-foreground">
            <p><span className="text-foreground">{"<Card>"}</span> — surface container</p>
            <p className="pl-4"><span className="text-foreground">{"<CardHeader>"}</span> — grid layout, @container</p>
            <p className="pl-8"><span className="text-foreground">{"<CardTitle>"}</span> — font-medium, col 1</p>
            <p className="pl-8"><span className="text-foreground">{"<CardDescription>"}</span> — muted, col 1</p>
            <p className="pl-8"><span className="text-foreground">{"<CardAction>"}</span> — col 2, row-span-2</p>
            <p className="pl-4"><span className="text-foreground">{"<CardContent>"}</span> — px padding</p>
            <p className="pl-4"><span className="text-foreground">{"<CardFooter>"}</span> — border-t, bg-muted/50</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Card</h2>
        <PropsTable props={cardProps} />
      </section>
    </article>
  )
}
