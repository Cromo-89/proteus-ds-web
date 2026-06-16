import type { Metadata } from "next"
import { NumberInput } from "@/components/ui/number-input"
import { Label } from "@/components/ui/label"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Number Input" }

const basicCode = `<NumberInput defaultValue={0} />`

const limitsCode = `<div className="flex flex-col gap-4 w-48">
  <div className="flex flex-col gap-1.5">
    <Label>Cantidad (0–10)</Label>
    <NumberInput defaultValue={1} min={0} max={10} />
  </div>

  <div className="flex flex-col gap-1.5">
    <Label>Porcentaje</Label>
    <NumberInput defaultValue={50} min={0} max={100} step={5} />
  </div>
</div>`

const stepCode = `<div className="flex flex-col gap-4 w-48">
  <div className="flex flex-col gap-1.5">
    <Label>Precio (paso $0.50)</Label>
    <NumberInput defaultValue={9.99} step={0.5} min={0} />
  </div>

  <div className="flex flex-col gap-1.5">
    <Label>Volumen (paso 10)</Label>
    <NumberInput defaultValue={50} step={10} min={0} max={100} />
  </div>
</div>`

const disabledCode = `<NumberInput defaultValue={5} disabled />`

const numberProps = [
  {
    name: "defaultValue",
    type: "number",
    defaultValue: "0",
    description: "Valor inicial en modo no controlado.",
  },
  {
    name: "value",
    type: "number",
    defaultValue: "—",
    description: "Valor en modo controlado.",
  },
  {
    name: "onValueChange",
    type: "(value: number) => void",
    defaultValue: "—",
    description: "Callback con el nuevo valor numérico al cambiar.",
  },
  {
    name: "min",
    type: "number",
    defaultValue: "—",
    description: "Valor mínimo. Los botones se deshabilitan al alcanzar el límite.",
  },
  {
    name: "max",
    type: "number",
    defaultValue: "—",
    description: "Valor máximo. Los botones se deshabilitan al alcanzar el límite.",
  },
  {
    name: "step",
    type: "number",
    defaultValue: "1",
    description: "Incremento de cada pulsación de los botones + / −.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Deshabilita el campo y ambos botones.",
  },
]

export default async function NumberInputPage() {
  const [basicHtml, limitsHtml, stepHtml, disabledHtml] = await Promise.all([
    highlight(basicCode),
    highlight(limitsCode),
    highlight(stepCode),
    highlight(disabledCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Number Input</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Campo numérico con botones de incremento y decremento. Soporta min, max y paso
            personalizado. Los botones se deshabilitan automáticamente al alcanzar los límites.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <ComponentPreview
          preview={<NumberInput defaultValue={0} className="w-40" />}
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con límites</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">min</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">max</code> para restringir
          el rango. Los botones − y + se deshabilitan automáticamente al tocar los límites.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label>Cantidad (0–10)</Label>
                <NumberInput defaultValue={1} min={0} max={10} className="w-40" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Porcentaje</Label>
                <NumberInput defaultValue={50} min={0} max={100} step={5} className="w-40" />
              </div>
            </div>
          }
          codeHtml={limitsHtml}
          code={limitsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Paso personalizado</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">step</code> define
          cuánto suma o resta cada click. Admite decimales.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label>Precio (paso $0.50)</Label>
                <NumberInput defaultValue={9.99} step={0.5} min={0} className="w-40" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Volumen (paso 10)</Label>
                <NumberInput defaultValue={50} step={10} min={0} max={100} className="w-40" />
              </div>
            </div>
          }
          codeHtml={stepHtml}
          code={stepCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Deshabilitado</h2>
        <ComponentPreview
          preview={<NumberInput defaultValue={5} disabled className="w-40" />}
          codeHtml={disabledHtml}
          code={disabledCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={numberProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            Los botones tienen <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            de &quot;Aumentar&quot; y &quot;Disminuir&quot; por defecto.
          </li>
          <li>
            Asocia siempre un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Label>"}</code>{" "}
            al campo con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">htmlFor</code>.
          </li>
          <li>
            Si el valor tiene una unidad (€, %, kg), indícala visualmente junto al campo
            y también en el <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            del input para lectores de pantalla.
          </li>
        </ul>
      </section>
    </article>
  )
}
