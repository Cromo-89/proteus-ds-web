import type { Metadata } from "next"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormField } from "@/components/ui/form-field"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Popover" }

const basicCode = `<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>
    <Icon name="info" size={16} />
    Más información
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>¿Qué es el OKLCH?</PopoverTitle>
      <PopoverDescription>
        OKLCH es un espacio de color perceptualmente uniforme que garantiza
        contraste y legibilidad consistentes entre hues.
      </PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>`

const formCode = `<Popover>
  <PopoverTrigger render={<Button variant="outline" size="icon" />}>
    <Icon name="filter_list" size={16} />
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Filtrar resultados</PopoverTitle>
    </PopoverHeader>
    <div className="flex flex-col gap-3">
      <FormField label="Buscar" htmlFor="pop-search">
        <Input id="pop-search" placeholder="Nombre del proyecto..." />
      </FormField>
      <FormField label="Estado" htmlFor="pop-status">
        <Input id="pop-status" placeholder="Activo, pausado..." />
      </FormField>
      <Button className="w-full">Aplicar filtros</Button>
    </div>
  </PopoverContent>
</Popover>`

const positionCode = `{/* Top */}
<Popover>
  <PopoverTrigger render={<Button variant="outline" size="sm" />}>Arriba</PopoverTrigger>
  <PopoverContent side="top">
    <p className="text-sm">Popover arriba del trigger.</p>
  </PopoverContent>
</Popover>

{/* Right */}
<Popover>
  <PopoverTrigger render={<Button variant="outline" size="sm" />}>Derecha</PopoverTrigger>
  <PopoverContent side="right">
    <p className="text-sm">Popover a la derecha.</p>
  </PopoverContent>
</Popover>

{/* Bottom */}
<Popover>
  <PopoverTrigger render={<Button variant="outline" size="sm" />}>Abajo</PopoverTrigger>
  <PopoverContent side="bottom">
    <p className="text-sm">Popover abajo del trigger.</p>
  </PopoverContent>
</Popover>

{/* Left */}
<Popover>
  <PopoverTrigger render={<Button variant="outline" size="sm" />}>Izquierda</PopoverTrigger>
  <PopoverContent side="left">
    <p className="text-sm">Popover a la izquierda.</p>
  </PopoverContent>
</Popover>`

const popoverContentProps = [
  { name: "side", type: '"top" | "right" | "bottom" | "left"', defaultValue: '"bottom"', description: "Lado de apertura relativo al trigger. Se ajusta automáticamente si no hay espacio." },
  { name: "align", type: '"start" | "center" | "end"', defaultValue: '"center"', description: "Alineación del popover respecto al eje del trigger." },
  { name: "sideOffset", type: "number", defaultValue: "4", description: "Distancia en px entre el trigger y el popover." },
  { name: "alignOffset", type: "number", defaultValue: "0", description: "Desplazamiento en px sobre el eje de alineación." },
]

export default async function PopoverPage() {
  const [basicHtml, formHtml, positionHtml] = await Promise.all([
    highlight(basicCode),
    highlight(formCode),
    highlight(positionCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Popover</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Panel flotante anclado a un trigger que muestra información adicional
            o controles sin interrumpir el flujo. A diferencia del Tooltip, el
            Popover puede contener contenido interactivo (formularios, botones).
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">PopoverHeader</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">PopoverTitle</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">PopoverDescription</code> para
          estructurar el contenido informativo.
        </p>
        <ComponentPreview
          preview={
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                <Icon name="info" size={16} />
                Más información
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>¿Qué es el OKLCH?</PopoverTitle>
                  <PopoverDescription>
                    OKLCH es un espacio de color perceptualmente uniforme que garantiza
                    contraste y legibilidad consistentes entre hues.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con formulario</h2>
        <p className="text-sm text-muted-foreground">
          El Popover puede contener controles interactivos. Ideal para filtros
          o ajustes que no justifican un Dialog completo.
        </p>
        <ComponentPreview
          preview={
            <Popover>
              <PopoverTrigger render={<Button variant="outline" size="icon" />}>
                <Icon name="filter_list" size={16} />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>Filtrar resultados</PopoverTitle>
                </PopoverHeader>
                <div className="flex flex-col gap-3">
                  <FormField label="Buscar" htmlFor="pop-search-ex">
                    <Input id="pop-search-ex" placeholder="Nombre del proyecto..." />
                  </FormField>
                  <FormField label="Estado" htmlFor="pop-status-ex">
                    <Input id="pop-status-ex" placeholder="Activo, pausado..." />
                  </FormField>
                  <Button className="w-full">Aplicar filtros</Button>
                </div>
              </PopoverContent>
            </Popover>
          }
          codeHtml={formHtml}
          code={formCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Posicionamiento</h2>
        <p className="text-sm text-muted-foreground">
          Controla el lado con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">side</code>.
          El posicionador aplica collision detection y ajusta automáticamente si no hay espacio.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-3 justify-center">
              <Popover>
                <PopoverTrigger render={<Button variant="outline" size="sm" />}>Arriba</PopoverTrigger>
                <PopoverContent side="top">
                  <p className="text-sm">Popover arriba del trigger.</p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger render={<Button variant="outline" size="sm" />}>Derecha</PopoverTrigger>
                <PopoverContent side="right">
                  <p className="text-sm">Popover a la derecha.</p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger render={<Button variant="outline" size="sm" />}>Abajo</PopoverTrigger>
                <PopoverContent side="bottom">
                  <p className="text-sm">Popover abajo del trigger.</p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger render={<Button variant="outline" size="sm" />}>Izquierda</PopoverTrigger>
                <PopoverContent side="left">
                  <p className="text-sm">Popover a la izquierda.</p>
                </PopoverContent>
              </Popover>
            </div>
          }
          codeHtml={positionHtml}
          code={positionCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — PopoverContent</h2>
        <PropsTable props={popoverContentProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Popover vs Tooltip vs Dialog</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 text-left font-medium">Componente</th>
                <th className="py-2 pr-4 text-left font-medium">Trigger</th>
                <th className="py-2 pr-4 text-left font-medium">Contenido</th>
                <th className="py-2 text-left font-medium">Uso</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-medium text-foreground">Tooltip</td>
                <td className="py-2 pr-4">Hover / focus</td>
                <td className="py-2 pr-4">Solo texto</td>
                <td className="py-2">Aclarar íconos o elementos sin label</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-medium text-foreground">Popover</td>
                <td className="py-2 pr-4">Clic</td>
                <td className="py-2 pr-4">Texto + controles</td>
                <td className="py-2">Filtros, detalles, ajustes rápidos</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Dialog</td>
                <td className="py-2 pr-4">Clic</td>
                <td className="py-2 pr-4">Flujo completo</td>
                <td className="py-2">Formularios, confirmaciones, contenido largo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El popover tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="dialog"</code> y se conecta al trigger con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-expanded</code>.</li>
          <li><kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">Esc</kbd> cierra el popover y devuelve el foco al trigger.</li>
          <li>Si contiene un formulario, agrégale <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> o usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">PopoverTitle</code> como <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-labelledby</code>.</li>
        </ul>
      </section>
    </article>
  )
}
