import type { Metadata } from "next"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Tooltip" }

const basicCode = `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline" />}>
      Hover aquí
    </TooltipTrigger>
    <TooltipContent>
      Texto de ayuda contextual
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`

const positionsCode = `<TooltipProvider>
  <div className="flex flex-wrap gap-3 justify-center">
    {(["top", "bottom", "left", "right"] as const).map((side) => (
      <Tooltip key={side}>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          {side}
        </TooltipTrigger>
        <TooltipContent side={side}>
          Tooltip {side}
        </TooltipContent>
      </Tooltip>
    ))}
  </div>
</TooltipProvider>`

const iconButtonCode = `<TooltipProvider>
  <div className="flex gap-2">
    <Tooltip>
      <TooltipTrigger render={<Button size="icon" variant="ghost" aria-label="Copiar" />}>
        <Icon name="content_copy" size={20} />
      </TooltipTrigger>
      <TooltipContent>Copiar</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger render={<Button size="icon" variant="ghost" aria-label="Compartir" />}>
        <Icon name="share" size={20} />
      </TooltipTrigger>
      <TooltipContent>Compartir</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger render={<Button size="icon" variant="ghost" aria-label="Eliminar" />}>
        <Icon name="delete" size={20} />
      </TooltipTrigger>
      <TooltipContent>Eliminar</TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`

const delayCode = `{/* Sin delay — aparece inmediatamente */}
<TooltipProvider delay={0}>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline" size="sm" />}>
      Sin delay
    </TooltipTrigger>
    <TooltipContent>Inmediato</TooltipContent>
  </Tooltip>
</TooltipProvider>

{/* Con delay — espera 500ms antes de aparecer */}
<TooltipProvider delay={500}>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline" size="sm" />}>
      500ms delay
    </TooltipTrigger>
    <TooltipContent>Aparece después de 500ms</TooltipContent>
  </Tooltip>
</TooltipProvider>`

const tooltipProps = [
  {
    name: "delay",
    type: "number",
    defaultValue: "0",
    description: "Milisegundos antes de mostrar el tooltip (en TooltipProvider).",
  },
  {
    name: "side",
    type: '"top" | "bottom" | "left" | "right"',
    defaultValue: '"top"',
    description: "Posición del tooltip respecto al trigger (en TooltipContent).",
  },
  {
    name: "sideOffset",
    type: "number",
    defaultValue: "4",
    description: "Distancia en px entre el trigger y el tooltip (en TooltipContent).",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    defaultValue: '"center"',
    description: "Alineación del tooltip respecto al trigger (en TooltipContent).",
  },
]

export default async function TooltipPage() {
  const [basicHtml, positionsHtml, iconButtonHtml, delayHtml] = await Promise.all([
    highlight(basicCode),
    highlight(positionsCode),
    highlight(iconButtonCode),
    highlight(delayCode),
  ])

  return (
    <article className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
          <a href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Etiqueta flotante que aparece al hacer hover sobre un elemento.
            Ideal para describir íconos o agregar contexto sin ocupar espacio en la UI.
          </p>
        </div>
      </div>

      {/* Básico */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Envuelve el árbol con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">TooltipProvider</code>.
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">render</code> en el trigger para
          mantener el elemento base accesible.
        </p>
        <ComponentPreview
          preview={
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" />}>
                  Hover aquí
                </TooltipTrigger>
                <TooltipContent>Texto de ayuda contextual</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      {/* Posiciones */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Posiciones</h2>
        <p className="text-sm text-muted-foreground">
          La prop <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">side</code> en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">TooltipContent</code> controla dónde aparece.
          El tooltip se reposiciona automáticamente si no hay espacio.
        </p>
        <ComponentPreview
          preview={
            <TooltipProvider>
              <div className="flex flex-wrap gap-3 justify-center">
                {(["top", "bottom", "left", "right"] as const).map((side) => (
                  <Tooltip key={side}>
                    <TooltipTrigger render={<Button variant="outline" size="sm" />}>
                      {side}
                    </TooltipTrigger>
                    <TooltipContent side={side}>Tooltip {side}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          }
          codeHtml={positionsHtml}
          code={positionsCode}
        />
      </section>

      {/* Íconos */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Botones icon-only</h2>
        <p className="text-sm text-muted-foreground">
          El caso de uso más común: describir botones que solo tienen un ícono.
          El tooltip complementa el <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> del botón.
        </p>
        <ComponentPreview
          preview={
            <TooltipProvider>
              <div className="flex gap-2">
                {[
                  { icon: "content_copy", label: "Copiar" },
                  { icon: "share",        label: "Compartir" },
                  { icon: "delete",       label: "Eliminar" },
                ].map(({ icon, label }) => (
                  <Tooltip key={icon}>
                    <TooltipTrigger render={<Button size="icon" variant="ghost" aria-label={label} />}>
                      <Icon name={icon} size={20} />
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          }
          codeHtml={iconButtonHtml}
          code={iconButtonCode}
        />
      </section>

      {/* Delay */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Delay</h2>
        <p className="text-sm text-muted-foreground">
          El <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">delay</code> en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">TooltipProvider</code> aplica a todos los
          tooltips bajo ese provider. Default <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">0</code> en Proteus.
        </p>
        <ComponentPreview
          preview={
            <div className="flex gap-4">
              <TooltipProvider delay={0}>
                <Tooltip>
                  <TooltipTrigger render={<Button variant="outline" size="sm" />}>
                    Sin delay
                  </TooltipTrigger>
                  <TooltipContent>Inmediato</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delay={500}>
                <Tooltip>
                  <TooltipTrigger render={<Button variant="outline" size="sm" />}>
                    500ms delay
                  </TooltipTrigger>
                  <TooltipContent>Después de 500ms</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          }
          codeHtml={delayHtml}
          code={delayCode}
        />
      </section>

      {/* Props */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={tooltipProps} />
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El tooltip no reemplaza el <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> — agrega ambos en botones icon-only.</li>
          <li>Nunca pongas información crítica solo en el tooltip — no es accesible en móvil (sin hover).</li>
          <li>El tooltip es accesible con teclado: aparece al recibir focus y desaparece al perderlo.</li>
        </ul>
      </section>
    </article>
  )
}
