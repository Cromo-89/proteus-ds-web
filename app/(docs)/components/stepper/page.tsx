import type { Metadata } from "next"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
} from "@/components/ui/stepper"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { StepperInteractiveDemo } from "@/components/docs/display-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Stepper" }

const basicCode = `<Stepper>
  <StepperItem>
    <StepperIndicator step={1} state="completed" />
    <StepperTitle>Cuenta</StepperTitle>
  </StepperItem>
  <StepperSeparator completed />
  <StepperItem>
    <StepperIndicator step={2} state="current" />
    <StepperTitle>Pago</StepperTitle>
  </StepperItem>
  <StepperSeparator />
  <StepperItem>
    <StepperIndicator step={3} state="upcoming" />
    <StepperTitle className="text-muted-foreground">Confirmación</StepperTitle>
  </StepperItem>
</Stepper>`

const descriptionCode = `<Stepper>
  <StepperItem>
    <StepperIndicator step={1} state="completed" />
    <StepperTitle>Cuenta</StepperTitle>
    <StepperDescription>Información básica</StepperDescription>
  </StepperItem>
  <StepperSeparator completed />
  <StepperItem>
    <StepperIndicator step={2} state="current" />
    <StepperTitle>Pago</StepperTitle>
    <StepperDescription>Datos de pago</StepperDescription>
  </StepperItem>
  <StepperSeparator />
  <StepperItem>
    <StepperIndicator step={3} state="upcoming" />
    <StepperTitle className="text-muted-foreground">Confirmación</StepperTitle>
    <StepperDescription>Revisar pedido</StepperDescription>
  </StepperItem>
</Stepper>`

const interactiveCode = `"use client"
const [currentStep, setCurrentStep] = useState(1)
const steps = ["Cuenta", "Pago", "Confirmación"]

<Stepper>
  {steps.map((title, index) => {
    const step = index + 1
    const state = step < currentStep ? "completed" : step === currentStep ? "current" : "upcoming"
    return (
      <Fragment key={step}>
        <StepperItem>
          <StepperIndicator step={step} state={state} />
          <StepperTitle className={state === "upcoming" ? "text-muted-foreground" : ""}>{title}</StepperTitle>
        </StepperItem>
        {index < steps.length - 1 && <StepperSeparator completed={step < currentStep} />}
      </Fragment>
    )
  })}
</Stepper>`

const stepperProps = [
  { name: "state", type: '"completed" | "current" | "upcoming"', defaultValue: '"upcoming"', description: "Estado del paso. Controla el color del indicador y el separador." },
  { name: "step", type: "number", defaultValue: "—", description: "Número visible dentro del indicador (cuando state ≠ completed)." },
  { name: "completed", type: "boolean", defaultValue: "false", description: "Prop de StepperSeparator: colorea la línea con el color primario." },
]

export default async function StepperPage() {
  const [basicHtml, descriptionHtml, interactiveHtml] = await Promise.all([
    highlight(basicCode),
    highlight(descriptionCode),
    highlight(interactiveCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Stepper</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Indicador de progreso multi-paso. Muestra en qué etapa de un flujo
            se encuentra el usuario, con estados completado, activo y pendiente.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          El estado de cada paso se define con la prop{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">state</code>.
          El separador toma <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">completed</code>{" "}
          para colorearse con el color primario.
        </p>
        <ComponentPreview
          preview={
            <Stepper className="max-w-sm">
              <StepperItem>
                <StepperIndicator step={1} state="completed" />
                <StepperTitle>Cuenta</StepperTitle>
              </StepperItem>
              <StepperSeparator completed />
              <StepperItem>
                <StepperIndicator step={2} state="current" />
                <StepperTitle>Pago</StepperTitle>
              </StepperItem>
              <StepperSeparator />
              <StepperItem>
                <StepperIndicator step={3} state="upcoming" />
                <StepperTitle className="text-muted-foreground">Confirmación</StepperTitle>
              </StepperItem>
            </Stepper>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con descripción</h2>
        <p className="text-sm text-muted-foreground">
          Agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">StepperDescription</code>{" "}
          debajo del título para dar más contexto sobre cada paso.
        </p>
        <ComponentPreview
          preview={
            <Stepper className="max-w-sm">
              <StepperItem>
                <StepperIndicator step={1} state="completed" />
                <StepperTitle>Cuenta</StepperTitle>
                <StepperDescription>Información básica</StepperDescription>
              </StepperItem>
              <StepperSeparator completed />
              <StepperItem>
                <StepperIndicator step={2} state="current" />
                <StepperTitle>Pago</StepperTitle>
                <StepperDescription>Datos de pago</StepperDescription>
              </StepperItem>
              <StepperSeparator />
              <StepperItem>
                <StepperIndicator step={3} state="upcoming" />
                <StepperTitle className="text-muted-foreground">Confirmación</StepperTitle>
                <StepperDescription>Revisar pedido</StepperDescription>
              </StepperItem>
            </Stepper>
          }
          codeHtml={descriptionHtml}
          code={descriptionCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Interactivo</h2>
        <p className="text-sm text-muted-foreground">
          Ejemplo dinámico que muestra cómo derivar el{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">state</code>{" "}
          a partir de un índice de paso actual.
        </p>
        <ComponentPreview
          preview={<StepperInteractiveDemo />}
          codeHtml={interactiveHtml}
          code={interactiveCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={stepperProps} />
        <p className="text-sm text-muted-foreground">
          Todos los subcomponentes pasan el resto de props al elemento DOM subyacente.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            Envuelve el stepper en un{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<nav aria-label=\"Progreso del formulario\">"}</code>{" "}
            cuando sea relevante para la navegación.
          </li>
          <li>
            Cada indicador debería tener texto accesible — si el número no es suficiente,
            agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>.
          </li>
          <li>
            El paso actual puede marcarse con{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-current="step"</code>.
          </li>
        </ul>
      </section>
    </article>
  )
}
