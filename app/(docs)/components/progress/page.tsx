import type { Metadata } from "next"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { ProgressAnimatedDemo } from "@/components/docs/feedback-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Progress" }

const basicCode = `<Progress value={60} />`

const labeledCode = `<div className="flex flex-col gap-4 w-full max-w-sm">
  <Progress value={33}>
    <ProgressLabel>Módulo 1 — Fundamentos</ProgressLabel>
    <ProgressValue>{"{value}%"}</ProgressValue>
  </Progress>

  <Progress value={67}>
    <ProgressLabel>Módulo 2 — Componentes</ProgressLabel>
    <ProgressValue>{"{value}%"}</ProgressValue>
  </Progress>

  <Progress value={10}>
    <ProgressLabel>Módulo 3 — Foundations</ProgressLabel>
    <ProgressValue>{"{value}%"}</ProgressValue>
  </Progress>
</div>`

const stepsCode = `<div className="flex flex-col gap-2 w-full max-w-sm">
  <div className="flex justify-between text-xs text-muted-foreground">
    <span>Paso 2 de 4</span>
    <span>50%</span>
  </div>
  <Progress value={50} />
</div>`

const colorsCode = `<div className="flex flex-col gap-4 w-full max-w-sm">
  {/* Primary (default) */}
  <Progress value={75} />

  {/* Success */}
  <Progress value={100}>
    <ProgressLabel className="text-success">Completado</ProgressLabel>
    <ProgressValue className="text-success">100%</ProgressValue>
  </Progress>

  {/* Warning */}
  <Progress value={88}>
    <ProgressLabel className="text-warning">Espacio en uso</ProgressLabel>
    <ProgressValue className="text-warning">88%</ProgressValue>
  </Progress>

  {/* Destructive */}
  <Progress value={95}>
    <ProgressLabel className="text-destructive">Límite casi alcanzado</ProgressLabel>
    <ProgressValue className="text-destructive">95%</ProgressValue>
  </Progress>
</div>`

const indeterminateCode = `<Progress value={null} />`

const animatedCode = `"use client"
const [value, setValue] = useState(0)

<Progress value={value}>
  <ProgressLabel>Subiendo archivo</ProgressLabel>
  <ProgressValue>{"{value}%"}</ProgressValue>
</Progress>`

const progressProps = [
  { name: "value", type: "number | null", defaultValue: "0", description: "Valor actual entre 0 y max. null muestra estado indeterminado (animación de pulso).", required: true },
  { name: "max", type: "number", defaultValue: "100", description: "Valor máximo de la barra." },
]

export default async function ProgressPage() {
  const [basicHtml, labeledHtml, stepsHtml, colorsHtml, indeterminateHtml, animatedHtml] = await Promise.all([
    highlight(basicCode),
    highlight(labeledCode),
    highlight(stepsCode),
    highlight(colorsCode),
    highlight(indeterminateCode),
    highlight(animatedCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Progress</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Barra de progreso para comunicar el avance de una operación con
            duración conocida. Soporta valor numérico, etiqueta, valor visible
            y modo indeterminado para procesos sin duración estimada.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <ComponentPreview
          preview={<Progress value={60} className="w-full max-w-sm" />}
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con label y valor</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ProgressLabel</code> aparece
          a la izquierda y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ProgressValue</code> a
          la derecha, ambos encima de la barra.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Progress value={33}>
                <ProgressLabel>Módulo 1 — Fundamentos</ProgressLabel>
                <ProgressValue />
              </Progress>
              <Progress value={67}>
                <ProgressLabel>Módulo 2 — Componentes</ProgressLabel>
                <ProgressValue />
              </Progress>
              <Progress value={10}>
                <ProgressLabel>Módulo 3 — Foundations</ProgressLabel>
                <ProgressValue />
              </Progress>
            </div>
          }
          codeHtml={labeledHtml}
          code={labeledCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Stepper</h2>
        <p className="text-sm text-muted-foreground">
          Patrón para onboarding o wizards multi-paso.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-2 w-full max-w-sm">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Paso 2 de 4</span>
                <span>50%</span>
              </div>
              <Progress value={50} />
            </div>
          }
          codeHtml={stepsHtml}
          code={stepsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Variantes de color</h2>
        <p className="text-sm text-muted-foreground">
          Aplica clases semánticas en el indicador y el label para comunicar
          el estado del progreso visualmente.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Progress value={75} />
              <Progress value={100}>
                <ProgressLabel className="text-success">Completado</ProgressLabel>
                <ProgressValue className="text-success" />
              </Progress>
              <Progress value={88}>
                <ProgressLabel className="text-warning">Espacio en uso</ProgressLabel>
                <ProgressValue className="text-warning" />
              </Progress>
              <Progress value={95}>
                <ProgressLabel className="text-destructive">Límite casi alcanzado</ProgressLabel>
                <ProgressValue className="text-destructive" />
              </Progress>
            </div>
          }
          codeHtml={colorsHtml}
          code={colorsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Indeterminado</h2>
        <p className="text-sm text-muted-foreground">
          Pasa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">value={"{null}"}</code> para
          mostrar una animación de pulso cuando la duración del proceso es desconocida.
        </p>
        <ComponentPreview
          preview={<Progress value={null} className="w-full max-w-sm" />}
          codeHtml={indeterminateHtml}
          code={indeterminateCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Animado — demo interactivo</h2>
        <p className="text-sm text-muted-foreground">
          En uso real, actualiza <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">value</code> con
          el progreso real de la operación (upload, generación, etc.).
        </p>
        <ComponentPreview
          preview={<ProgressAnimatedDemo />}
          codeHtml={animatedHtml}
          code={animatedCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={progressProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Base UI Progress genera <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="progressbar"</code>, <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-valuenow</code>, <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-valuemin</code> y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-valuemax</code> automáticamente.</li>
          <li><code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ProgressLabel</code> actúa como <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> para la barra.</li>
          <li>En modo indeterminado (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">value=null</code>), <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-valuenow</code> se omite.</li>
        </ul>
      </section>
    </article>
  )
}
