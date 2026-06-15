import type { Metadata } from "next"
import {
  Select, SelectContent, SelectGroup, SelectItem,
  SelectLabel, SelectSeparator, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Select" }

const basicCode = `<Select>
  <SelectTrigger className="w-52">
    <SelectValue placeholder="Selecciona un framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="next">Next.js</SelectItem>
    <SelectItem value="remix">Remix</SelectItem>
    <SelectItem value="astro">Astro</SelectItem>
    <SelectItem value="nuxt">Nuxt</SelectItem>
  </SelectContent>
</Select>`

const withLabelCode = `<div className="flex flex-col gap-1.5 w-52">
  <Label htmlFor="framework">Framework</Label>
  <Select>
    <SelectTrigger id="framework">
      <SelectValue placeholder="Elige uno..." />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="next">Next.js</SelectItem>
      <SelectItem value="remix">Remix</SelectItem>
      <SelectItem value="astro">Astro</SelectItem>
    </SelectContent>
  </Select>
</div>`

const groupsCode = `<Select>
  <SelectTrigger className="w-52">
    <SelectValue placeholder="Selecciona una ciudad" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>América del Sur</SelectLabel>
      <SelectItem value="bue">Buenos Aires</SelectItem>
      <SelectItem value="bog">Bogotá</SelectItem>
      <SelectItem value="scl">Santiago</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>América del Norte</SelectLabel>
      <SelectItem value="mex">Ciudad de México</SelectItem>
      <SelectItem value="nyc">Nueva York</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`

const statesCode = `{/* Disabled */}
<Select disabled>
  <SelectTrigger className="w-52">
    <SelectValue placeholder="No disponible" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Opción A</SelectItem>
  </SelectContent>
</Select>

{/* Error */}
<Select>
  <SelectTrigger className="w-52" aria-invalid>
    <SelectValue placeholder="Campo requerido" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Opción A</SelectItem>
  </SelectContent>
</Select>

{/* Small */}
<Select>
  <SelectTrigger className="w-52" size="sm">
    <SelectValue placeholder="Tamaño small" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Opción A</SelectItem>
    <SelectItem value="b">Opción B</SelectItem>
  </SelectContent>
</Select>`

const selectProps = [
  {
    name: "defaultValue",
    type: "string",
    defaultValue: "—",
    description: "Valor inicial no controlado.",
  },
  {
    name: "value",
    type: "string",
    defaultValue: "—",
    description: "Valor controlado. Requiere onValueChange.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    defaultValue: "—",
    description: "Callback cuando el usuario selecciona una opción.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Deshabilita todo el select.",
  },
]

const triggerProps = [
  {
    name: "size",
    type: '"default" | "sm"',
    defaultValue: '"default"',
    description: "Altura del trigger: default 32px, sm 28px.",
  },
  {
    name: "aria-invalid",
    type: "boolean",
    defaultValue: "false",
    description: "Activa el estilo de error en el trigger.",
  },
]

export default async function SelectPage() {
  const [basicHtml, withLabelHtml, groupsHtml, statesHtml] = await Promise.all([
    highlight(basicCode),
    highlight(withLabelCode),
    highlight(groupsCode),
    highlight(statesCode),
  ])

  return (
    <article className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
          <a
            href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Select</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Menú desplegable para seleccionar una opción de una lista.
            Soporta grupos, separadores, estados de error y dos tamaños.
          </p>
        </div>
      </div>

      {/* Básico */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <ComponentPreview
          preview={
            <Select>
              <SelectTrigger className="w-52">
                <SelectValue placeholder="Selecciona un framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="remix">Remix</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt</SelectItem>
              </SelectContent>
            </Select>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      {/* Con Label */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con Label</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-1.5 w-52">
              <Label htmlFor="framework-demo">Framework</Label>
              <Select>
                <SelectTrigger id="framework-demo">
                  <SelectValue placeholder="Elige uno..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="remix">Remix</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          }
          codeHtml={withLabelHtml}
          code={withLabelCode}
        />
      </section>

      {/* Grupos */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con grupos</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">SelectGroup</code> +{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">SelectLabel</code> para agrupar opciones relacionadas
          y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">SelectSeparator</code> para dividir grupos.
        </p>
        <ComponentPreview
          preview={
            <Select>
              <SelectTrigger className="w-52">
                <SelectValue placeholder="Selecciona una ciudad" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>América del Sur</SelectLabel>
                  <SelectItem value="bue">Buenos Aires</SelectItem>
                  <SelectItem value="bog">Bogotá</SelectItem>
                  <SelectItem value="scl">Santiago</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>América del Norte</SelectLabel>
                  <SelectItem value="mex">Ciudad de México</SelectItem>
                  <SelectItem value="nyc">Nueva York</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          }
          codeHtml={groupsHtml}
          code={groupsCode}
        />
      </section>

      {/* Estados */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Estados</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap items-start gap-4">
              <Select disabled>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="No disponible" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Opción A</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-44" aria-invalid>
                  <SelectValue placeholder="Campo requerido" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Opción A</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-44" size="sm">
                  <SelectValue placeholder="Small" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Opción A</SelectItem>
                  <SelectItem value="b">Opción B</SelectItem>
                </SelectContent>
              </Select>
            </div>
          }
          codeHtml={statesHtml}
          code={statesCode}
        />
      </section>

      {/* Props */}
      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <div className="space-y-2">
          <p className="text-sm font-medium">Select (Root)</p>
          <PropsTable props={selectProps} />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">SelectTrigger</p>
          <PropsTable props={triggerProps} />
        </div>
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Asocia siempre un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Label</code> al trigger mediante <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">htmlFor</code> e <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">id</code>.</li>
          <li>El menú es navegable con teclado: <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">↑↓</kbd> para moverse, <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">Enter</kbd> para seleccionar, <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">Esc</kbd> para cerrar.</li>
          <li>El placeholder no debe usarse como label — siempre agrega un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Label</code> visible.</li>
        </ul>
      </section>
    </article>
  )
}
