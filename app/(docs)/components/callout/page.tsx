import type { Metadata } from "next"
import { Callout, CalloutIcon, CalloutContent, CalloutTitle, CalloutDescription } from "@/components/ui/callout"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Callout" }

const defaultCode = `<Callout>
  <CalloutContent>
    <CalloutDescription>
      Proteus DS se basa en shadcn/ui y Tailwind v4. Asegúrate de tener ambos configurados antes de instalar.
    </CalloutDescription>
  </CalloutContent>
</Callout>`

const variantsCode = `<div className="flex flex-col gap-3 w-full">
  <Callout variant="info">
    <CalloutContent>
      <CalloutTitle>Nota</CalloutTitle>
      <CalloutDescription>
        Este componente requiere JavaScript habilitado en el navegador.
      </CalloutDescription>
    </CalloutContent>
  </Callout>

  <Callout variant="success">
    <CalloutContent>
      <CalloutTitle>Buenas prácticas</CalloutTitle>
      <CalloutDescription>
        Usa siempre tokens semánticos en lugar de valores literales de color.
      </CalloutDescription>
    </CalloutContent>
  </Callout>

  <Callout variant="warning">
    <CalloutContent>
      <CalloutTitle>Atención</CalloutTitle>
      <CalloutDescription>
        Esta API puede cambiar antes de la versión estable. No la uses en producción aún.
      </CalloutDescription>
    </CalloutContent>
  </Callout>

  <Callout variant="destructive">
    <CalloutContent>
      <CalloutTitle>Deprecado</CalloutTitle>
      <CalloutDescription>
        Este patrón fue removido en v0.2.0. Migra a la nueva API antes del 1 de julio.
      </CalloutDescription>
    </CalloutContent>
  </Callout>
</div>`

const withIconCode = `<div className="flex flex-col gap-3 w-full">
  <Callout variant="info">
    <CalloutIcon>
      <Icon name="info" size={16} className="text-info" filled />
    </CalloutIcon>
    <CalloutContent>
      <CalloutTitle>Nota</CalloutTitle>
      <CalloutDescription>
        Usa siempre variables CSS del sistema en lugar de colores literales.
      </CalloutDescription>
    </CalloutContent>
  </Callout>

  <Callout variant="warning">
    <CalloutIcon>
      <Icon name="warning" size={16} className="text-warning" filled />
    </CalloutIcon>
    <CalloutContent>
      <CalloutTitle>Atención</CalloutTitle>
      <CalloutDescription>
        Esta API puede cambiar antes de la versión estable.
      </CalloutDescription>
    </CalloutContent>
  </Callout>

  <Callout variant="success">
    <CalloutIcon>
      <Icon name="check_circle" size={16} className="text-success" filled />
    </CalloutIcon>
    <CalloutContent>
      <CalloutTitle>Completado</CalloutTitle>
      <CalloutDescription>
        La migración se completó sin errores. Todos los datos fueron transferidos correctamente.
      </CalloutDescription>
    </CalloutContent>
  </Callout>

  <Callout variant="destructive">
    <CalloutIcon>
      <Icon name="cancel" size={16} className="text-destructive" filled />
    </CalloutIcon>
    <CalloutContent>
      <CalloutTitle>Deprecado</CalloutTitle>
      <CalloutDescription>
        Este hook será removido en la próxima versión mayor. Migra a la nueva API.
      </CalloutDescription>
    </CalloutContent>
  </Callout>
</div>`

const simpleCode = `<Callout variant="info">
  <CalloutContent>
    <CalloutDescription>
      Los tokens de color usan el espacio OKLCH para mayor consistencia perceptual en dark mode.
    </CalloutDescription>
  </CalloutContent>
</Callout>`

const calloutProps = [
  {
    name: "variant",
    type: '"default" | "info" | "success" | "warning" | "destructive"',
    defaultValue: '"default"',
    description: "Determina el color de fondo y borde del callout.",
  },
]

export default async function CalloutPage() {
  const [defaultHtml, variantsHtml, withIconHtml, simpleHtml] = await Promise.all([
    highlight(defaultCode),
    highlight(variantsCode),
    highlight(withIconCode),
    highlight(simpleCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Callout</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Bloque editorial para destacar información importante dentro del contenido de la página.
            A diferencia del Alert, el Callout es estático: no se dispara por una acción del usuario
            ni desaparece — forma parte del contenido y convive con él permanentemente.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Default</h2>
        <ComponentPreview
          preview={
            <Callout className="w-full max-w-lg">
              <CalloutContent>
                <CalloutDescription>
                  Proteus DS se basa en shadcn/ui y Tailwind v4. Asegúrate de tener ambos configurados antes de instalar.
                </CalloutDescription>
              </CalloutContent>
            </Callout>
          }
          codeHtml={defaultHtml}
          code={defaultCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Variantes</h2>
        <p className="text-sm text-muted-foreground">
          Cuatro roles semánticos para comunicar el nivel de importancia del mensaje.
        </p>
        <ComponentPreview
          preview={
            <div className="flex w-full flex-col gap-3">
              <Callout variant="info">
                <CalloutContent>
                  <CalloutTitle>Nota</CalloutTitle>
                  <CalloutDescription>
                    Este componente requiere JavaScript habilitado en el navegador.
                  </CalloutDescription>
                </CalloutContent>
              </Callout>
              <Callout variant="success">
                <CalloutContent>
                  <CalloutTitle>Buenas prácticas</CalloutTitle>
                  <CalloutDescription>
                    Usa siempre tokens semánticos en lugar de valores literales de color.
                  </CalloutDescription>
                </CalloutContent>
              </Callout>
              <Callout variant="warning">
                <CalloutContent>
                  <CalloutTitle>Atención</CalloutTitle>
                  <CalloutDescription>
                    Esta API puede cambiar antes de la versión estable. No la uses en producción aún.
                  </CalloutDescription>
                </CalloutContent>
              </Callout>
              <Callout variant="destructive">
                <CalloutContent>
                  <CalloutTitle>Deprecado</CalloutTitle>
                  <CalloutDescription>
                    Este patrón fue removido en v0.2.0. Migra a la nueva API antes del 1 de julio.
                  </CalloutDescription>
                </CalloutContent>
              </Callout>
            </div>
          }
          codeHtml={variantsHtml}
          code={variantsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con ícono</h2>
        <p className="text-sm text-muted-foreground">
          Agrega{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CalloutIcon</code>{" "}
          como primer hijo para mostrar un ícono Material alineado al título.
        </p>
        <ComponentPreview
          preview={
            <div className="flex w-full flex-col gap-3">
              <Callout variant="info">
                <CalloutIcon>
                  <Icon name="info" size={16} className="text-info" filled />
                </CalloutIcon>
                <CalloutContent>
                  <CalloutTitle>Nota</CalloutTitle>
                  <CalloutDescription>
                    Usa siempre variables CSS del sistema en lugar de colores literales.
                  </CalloutDescription>
                </CalloutContent>
              </Callout>
              <Callout variant="warning">
                <CalloutIcon>
                  <Icon name="warning" size={16} className="text-warning" filled />
                </CalloutIcon>
                <CalloutContent>
                  <CalloutTitle>Atención</CalloutTitle>
                  <CalloutDescription>
                    Esta API puede cambiar antes de la versión estable.
                  </CalloutDescription>
                </CalloutContent>
              </Callout>
              <Callout variant="success">
                <CalloutIcon>
                  <Icon name="check_circle" size={16} className="text-success" filled />
                </CalloutIcon>
                <CalloutContent>
                  <CalloutTitle>Completado</CalloutTitle>
                  <CalloutDescription>
                    La migración se completó sin errores. Todos los datos fueron transferidos correctamente.
                  </CalloutDescription>
                </CalloutContent>
              </Callout>
              <Callout variant="destructive">
                <CalloutIcon>
                  <Icon name="cancel" size={16} className="text-destructive" filled />
                </CalloutIcon>
                <CalloutContent>
                  <CalloutTitle>Deprecado</CalloutTitle>
                  <CalloutDescription>
                    Este hook será removido en la próxima versión mayor. Migra a la nueva API.
                  </CalloutDescription>
                </CalloutContent>
              </Callout>
            </div>
          }
          codeHtml={withIconHtml}
          code={withIconCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Sin título</h2>
        <p className="text-sm text-muted-foreground">
          Omite <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CalloutTitle</code>{" "}
          para callouts de una sola línea, más discretos.
        </p>
        <ComponentPreview
          preview={
            <Callout variant="info" className="w-full max-w-lg">
              <CalloutContent>
                <CalloutDescription>
                  Los tokens de color usan el espacio OKLCH para mayor consistencia perceptual en dark mode.
                </CalloutDescription>
              </CalloutContent>
            </Callout>
          }
          codeHtml={simpleHtml}
          code={simpleCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={calloutProps} />
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Callout</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CalloutIcon</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CalloutContent</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CalloutTitle</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CalloutDescription</code>{" "}
          aceptan todos los atributos nativos de sus elementos HTML base.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Callout vs Alert</h2>
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <div className="space-y-2 rounded-lg border border-border/50 p-4">
            <p className="font-medium">Callout — úsalo para</p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Notas editoriales en documentación</li>
              <li>Tips y advertencias en guías de uso</li>
              <li>Información contextual estática</li>
              <li>Contenido que siempre fue parte de la página</li>
            </ul>
          </div>
          <div className="space-y-2 rounded-lg border border-border/50 p-4">
            <p className="font-medium">Alert — úsalo para</p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Mensajes que aparecen dinámicamente</li>
              <li>Respuesta a acciones del usuario</li>
              <li>Estados de error o éxito de formularios</li>
              <li>Avisos que pueden descartarse</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>El Callout no tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="alert"</code> — es contenido estático, no un mensaje dinámico.</li>
          <li>Usa colores y texto simultáneamente para comunicar el tipo de callout — no dependas solo del color.</li>
          <li>
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CalloutTitle</code>{" "}
            actúa como encabezado visual del bloque; no uses etiquetas{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">h3/h4</code>{" "}
            dentro para evitar romper la jerarquía del documento.
          </li>
        </ul>
      </section>
    </article>
  )
}
