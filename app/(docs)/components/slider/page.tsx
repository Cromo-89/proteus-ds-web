import type { Metadata } from "next"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { SliderValueDemo, SliderRangeDemo } from "@/components/docs/slider-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Slider" }

const basicCode = `<Slider defaultValue={[40]} className="w-64" />`

const valueCode = `"use client"

export function SliderValueDemo() {
  const [value, setValue] = useState<number[]>([40])
  return (
    <div className="flex flex-col gap-3 w-64">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Opacidad</span>
        <span className="font-mono font-medium">{value[0]}%</span>
      </div>
      <Slider
        value={value}
        onValueChange={(v) => setValue(v as number[])}
        min={0} max={100} step={1}
      />
    </div>
  )
}`

const rangeCode = `"use client"

export function SliderRangeDemo() {
  const [range, setRange] = useState<number[]>([20, 80])
  return (
    <div className="flex flex-col gap-3 w-64">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Precio</span>
        <span className="font-mono font-medium">\${range[0]} – \${range[1]}</span>
      </div>
      <Slider
        value={range}
        onValueChange={(v) => setRange(v as number[])}
        min={0} max={200} step={5}
      />
    </div>
  )
}`

const stepCode = `<div className="flex flex-col gap-6 w-64">
  <div className="flex flex-col gap-2">
    <p className="text-sm text-muted-foreground">step={10}</p>
    <Slider defaultValue={[50]} step={10} />
  </div>
  <div className="flex flex-col gap-2">
    <p className="text-sm text-muted-foreground">step={25}</p>
    <Slider defaultValue={[25]} step={25} />
  </div>
</div>`

const disabledCode = `<Slider defaultValue={[60]} disabled className="w-64" />`

const sliderProps = [
  { name: "defaultValue", type: "number[]", defaultValue: "—", description: "Valor(es) inicial(es) en modo no controlado." },
  { name: "value", type: "number[]", defaultValue: "—", description: "Valor(es) en modo controlado." },
  { name: "onValueChange", type: "(value: number | number[]) => void", defaultValue: "—", description: "Callback al mover el thumb." },
  { name: "min", type: "number", defaultValue: "0", description: "Valor mínimo." },
  { name: "max", type: "number", defaultValue: "100", description: "Valor máximo." },
  { name: "step", type: "number", defaultValue: "1", description: "Incremento de cada paso." },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Deshabilita el slider." },
  { name: "className", type: "string", defaultValue: "—", description: "Clases adicionales sobre el root." },
]

export default async function SliderPage() {
  const [basicHtml, valueHtml, rangeHtml, stepHtml, disabledHtml] = await Promise.all([
    highlight(basicCode),
    highlight(valueCode),
    highlight(rangeCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Slider</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Control deslizante para selección de valores numéricos. Soporta un
            thumb (valor único) o dos thumbs (rango), pasos personalizados y
            navegación por teclado completa.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Default</h2>
        <ComponentPreview
          preview={<Slider defaultValue={[40]} className="w-64" />}
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con valor visible</h2>
        <p className="text-sm text-muted-foreground">
          Usa modo controlado con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">value</code> +{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onValueChange</code> para
          mostrar el valor en tiempo real.
        </p>
        <ComponentPreview
          preview={<SliderValueDemo />}
          codeHtml={valueHtml}
          code={valueCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Rango (dos thumbs)</h2>
        <p className="text-sm text-muted-foreground">
          Pasa un array de dos valores para activar el modo rango con dos thumbs.
        </p>
        <ComponentPreview
          preview={<SliderRangeDemo />}
          codeHtml={rangeHtml}
          code={rangeCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Pasos</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">step</code> define
          el incremento mínimo. El thumb se mueve en múltiplos de este valor.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-6 w-64">
              <div className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground font-mono">step={"{10}"}</p>
                <Slider defaultValue={[50]} step={10} />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground font-mono">step={"{25}"}</p>
                <Slider defaultValue={[25]} step={25} />
              </div>
            </div>
          }
          codeHtml={stepHtml}
          code={stepCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Disabled</h2>
        <ComponentPreview
          preview={<Slider defaultValue={[60]} disabled className="w-64" />}
          codeHtml={disabledHtml}
          code={disabledCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={sliderProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Mueve el thumb con ← → ↑ ↓; saltos con Home / End.</li>
          <li>Agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> a cada thumb cuando no haya label visible.</li>
          <li>En rangos, usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-valuemin</code> / <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-valuemax</code> para comunicar los límites actuales del rango.</li>
        </ul>
      </section>
    </article>
  )
}
