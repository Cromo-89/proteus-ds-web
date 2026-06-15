import type { Metadata } from "next"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Radio" }

const basicCode = `<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Opción 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="r2" />
    <Label htmlFor="r2">Opción 2</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-3" id="r3" />
    <Label htmlFor="r3">Opción 3</Label>
  </div>
</RadioGroup>`

const horizontalCode = `<RadioGroup defaultValue="sm" orientation="horizontal" className="flex gap-4">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="sm" id="h-sm" />
    <Label htmlFor="h-sm">S</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="md" id="h-md" />
    <Label htmlFor="h-md">M</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="lg" id="h-lg" />
    <Label htmlFor="h-lg">L</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="xl" id="h-xl" />
    <Label htmlFor="h-xl">XL</Label>
  </div>
</RadioGroup>`

const cardCode = `<RadioGroup defaultValue="monthly" className="grid grid-cols-2 gap-2 w-72">
  {[
    { value: "monthly", label: "Mensual", price: "$9/mes" },
    { value: "annual", label: "Anual", price: "$90/año" },
  ].map(({ value, label, price }) => (
    <Label
      key={value}
      htmlFor={value}
      className="flex cursor-pointer flex-col gap-1 rounded-lg border border-border p-3 transition-colors has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5"
    >
      <RadioGroupItem value={value} id={value} className="sr-only" />
      <span className="font-medium">{label}</span>
      <span className="text-xs text-muted-foreground">{price}</span>
    </Label>
  ))}
</RadioGroup>`

const disabledCode = `<RadioGroup defaultValue="a">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="a" id="d-a" />
    <Label htmlFor="d-a">Disponible</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="b" id="d-b" disabled />
    <Label htmlFor="d-b" className="opacity-50 cursor-not-allowed">No disponible</Label>
  </div>
</RadioGroup>`

const groupProps = [
  { name: "defaultValue", type: "string", defaultValue: "—", description: "Valor seleccionado inicial (modo no controlado)." },
  { name: "value", type: "string", defaultValue: "—", description: "Valor seleccionado (modo controlado)." },
  { name: "onValueChange", type: "(value: string) => void", defaultValue: "—", description: "Callback al cambiar la selección." },
  { name: "orientation", type: '"horizontal" | "vertical"', defaultValue: '"vertical"', description: "Orientación del grupo. No afecta layout — requiere clases Tailwind para horizontal." },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Deshabilita todos los items del grupo." },
]

const itemProps = [
  { name: "value", type: "string", defaultValue: "—", description: "Valor único de este radio.", required: true },
  { name: "id", type: "string", defaultValue: "—", description: "Conecta el item al Label.", required: true },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Deshabilita solo este item." },
]

export default async function RadioPage() {
  const [basicHtml, horizontalHtml, cardHtml, disabledHtml] = await Promise.all([
    highlight(basicCode),
    highlight(horizontalCode),
    highlight(cardCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Radio</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Grupo de opciones mutuamente excluyentes. Construido sobre los primitivos{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">RadioGroup</code> y{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">Radio</code> de Base UI
            con navegación por teclado completa.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Default</h2>
        <ComponentPreview
          preview={
            <RadioGroup defaultValue="option-1">
              {["Opción 1", "Opción 2", "Opción 3"].map((label, i) => (
                <div key={i} className="flex items-center gap-2">
                  <RadioGroupItem value={`option-${i + 1}`} id={`r-${i + 1}`} />
                  <Label htmlFor={`r-${i + 1}`}>{label}</Label>
                </div>
              ))}
            </RadioGroup>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Horizontal</h2>
        <p className="text-sm text-muted-foreground">
          Agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">flex gap-4</code> al{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">RadioGroup</code> para
          distribuir los items en fila.
        </p>
        <ComponentPreview
          preview={
            <RadioGroup defaultValue="sm" className="flex gap-4">
              {["S", "M", "L", "XL"].map((size) => (
                <div key={size} className="flex items-center gap-2">
                  <RadioGroupItem value={size.toLowerCase()} id={`h-${size}`} />
                  <Label htmlFor={`h-${size}`}>{size}</Label>
                </div>
              ))}
            </RadioGroup>
          }
          codeHtml={horizontalHtml}
          code={horizontalCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Cards seleccionables</h2>
        <p className="text-sm text-muted-foreground">
          Oculta el input con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">sr-only</code> y
          aplica estilos al <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Label</code> vía{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">has-data-[state=checked]:</code>.
        </p>
        <ComponentPreview
          preview={
            <RadioGroup defaultValue="monthly" className="grid grid-cols-2 gap-2 w-72">
              {[
                { value: "monthly", label: "Mensual", price: "$9/mes" },
                { value: "annual", label: "Anual", price: "$90/año" },
              ].map(({ value, label, price }) => (
                <Label
                  key={value}
                  htmlFor={`plan-${value}`}
                  className="flex cursor-pointer flex-col gap-1 rounded-lg border border-border p-3 transition-colors has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5"
                >
                  <RadioGroupItem value={value} id={`plan-${value}`} className="sr-only" />
                  <span className="font-medium text-sm">{label}</span>
                  <span className="text-xs text-muted-foreground">{price}</span>
                </Label>
              ))}
            </RadioGroup>
          }
          codeHtml={cardHtml}
          code={cardCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Disabled</h2>
        <ComponentPreview
          preview={
            <RadioGroup defaultValue="a">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="a" id="d-a" />
                <Label htmlFor="d-a">Disponible</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="b" id="d-b" disabled />
                <Label htmlFor="d-b" className="opacity-50 cursor-not-allowed">No disponible</Label>
              </div>
            </RadioGroup>
          }
          codeHtml={disabledHtml}
          code={disabledCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — RadioGroup</h2>
        <PropsTable props={groupProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — RadioGroupItem</h2>
        <PropsTable props={itemProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Navega entre opciones con las teclas de dirección ↑ ↓ ← →.</li>
          <li>Envuelve el grupo en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<fieldset>"}</code> con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<legend>"}</code> para comunicar el contexto del grupo a lectores de pantalla.</li>
          <li>Cada <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">RadioGroupItem</code> debe tener un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Label</code> asociado vía <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">id</code>.</li>
        </ul>
      </section>
    </article>
  )
}
