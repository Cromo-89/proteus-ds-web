import type { Metadata } from "next"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea } from "@/components/ui/input-group"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { Label } from "@/components/ui/label"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Input Group" }

const urlCode = `{/* Prefijo de texto */}
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="mi-sitio.com" />
</InputGroup>`

const searchCode = `{/* Ícono a la izquierda */}
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>
      <Icon name="search" size={16} />
    </InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="Buscar..." />
</InputGroup>

{/* Ícono a la derecha + tecla */}
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>
      <Icon name="search" size={16} />
    </InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="Buscar..." />
  <InputGroupAddon align="inline-end">
    <InputGroupText>⌘K</InputGroupText>
  </InputGroupAddon>
</InputGroup>`

const buttonCode = `{/* Botón de acción dentro del input */}
<InputGroup>
  <InputGroupInput placeholder="correo@ejemplo.com" type="email" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="xs" variant="ghost">
      Enviar
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>

{/* Botón con ícono */}
<InputGroup>
  <InputGroupInput placeholder="Buscar usuario..." />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="icon-xs">
      <Icon name="search" size={14} />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>`

const blockCode = `{/* Etiqueta encima del input (block-start) */}
<InputGroup>
  <InputGroupAddon align="block-start">
    <InputGroupText>Nombre del proyecto</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="mi-proyecto" />
</InputGroup>

{/* Contador de caracteres debajo (block-end) */}
<InputGroup>
  <InputGroupTextarea placeholder="Describe tu proyecto..." rows={3} />
  <InputGroupAddon align="block-end">
    <InputGroupText>0 / 280 caracteres</InputGroupText>
  </InputGroupAddon>
</InputGroup>`

const disabledCode = `<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="mi-sitio.com" disabled />
</InputGroup>`

const groupProps = [
  {
    name: "className",
    type: "string",
    defaultValue: "—",
    description: "Clases adicionales para el contenedor del grupo.",
  },
]

const addonProps = [
  {
    name: "align",
    type: '"inline-start" | "inline-end" | "block-start" | "block-end"',
    defaultValue: '"inline-start"',
    description: "Posición del addon respecto al input.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "—",
    description: "Clases adicionales.",
  },
]

const buttonAddonProps = [
  {
    name: "variant",
    type: '"ghost" | "default" | "outline" | "secondary"',
    defaultValue: '"ghost"',
    description: "Variante visual del botón.",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "icon-xs" | "icon-sm"',
    defaultValue: '"xs"',
    description: "Tamaño del botón dentro del input.",
  },
]

export default async function InputGroupPage() {
  const [urlHtml, searchHtml, buttonHtml, blockHtml, disabledHtml] = await Promise.all([
    highlight(urlCode),
    highlight(searchCode),
    highlight(buttonCode),
    highlight(blockCode),
    highlight(disabledCode),
  ])

  return (
    <article className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="default" className="bg-success-bg text-success border-transparent rounded-full">
            Stable
          </Badge>
          <a
            href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Input Group</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Contenedor compuesto para inputs con prefijos, sufijos, íconos, etiquetas y botones de acción.
            Mantiene el borde y el foco unificados en todos los addons.
          </p>
        </div>
      </div>

      {/* Prefijo de texto */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Prefijo de texto</h2>
        <p className="text-sm text-muted-foreground">
          Usa{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">InputGroupAddon</code> con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">align="inline-start"</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">InputGroupText</code> para texto estático.
        </p>
        <ComponentPreview
          preview={
            <div className="w-72">
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="mi-sitio.com" />
              </InputGroup>
            </div>
          }
          codeHtml={urlHtml}
          code={urlCode}
        />
      </section>

      {/* Íconos */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con íconos</h2>
        <p className="text-sm text-muted-foreground">
          Los addons aceptan íconos, texto y atajos de teclado. Combínalos en ambos extremos del input.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-72">
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>
                    <Icon name="search" size={16} />
                  </InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="Buscar..." />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>
                    <Icon name="search" size={16} />
                  </InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="Buscar..." />
                <InputGroupAddon align="inline-end">
                  <InputGroupText>⌘K</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
          }
          codeHtml={searchHtml}
          code={searchCode}
        />
      </section>

      {/* Con botón */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con botón de acción</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">InputGroupButton</code> es
          un botón optimizado para vivir dentro del grupo — sin sombra y con sizing reducido para
          encajar en la altura del input.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-72">
              <InputGroup>
                <InputGroupInput placeholder="correo@ejemplo.com" type="email" />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton size="xs" variant="ghost">
                    Enviar
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              <InputGroup>
                <InputGroupInput placeholder="Buscar usuario..." />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton size="icon-xs">
                    <Icon name="search" size={14} />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          }
          codeHtml={buttonHtml}
          code={buttonCode}
        />
      </section>

      {/* Block addons */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Addons block (arriba / abajo)</h2>
        <p className="text-sm text-muted-foreground">
          Con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">align="block-start"</code> o{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">align="block-end"</code> el addon
          aparece sobre o debajo del input dentro del mismo contenedor bordeado.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-72">
              <InputGroup>
                <InputGroupAddon align="block-start">
                  <InputGroupText>Nombre del proyecto</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="mi-proyecto" />
              </InputGroup>
              <InputGroup>
                <InputGroupTextarea placeholder="Describe tu proyecto..." rows={3} />
                <InputGroupAddon align="block-end">
                  <InputGroupText>0 / 280 caracteres</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
          }
          codeHtml={blockHtml}
          code={blockCode}
        />
      </section>

      {/* Disabled */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Deshabilitado</h2>
        <p className="text-sm text-muted-foreground">
          Agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">disabled</code> al
          input interno — el contenedor detecta el estado y aplica opacidad al grupo completo.
        </p>
        <ComponentPreview
          preview={
            <div className="w-72">
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="mi-sitio.com" disabled />
              </InputGroup>
            </div>
          }
          codeHtml={disabledHtml}
          code={disabledCode}
        />
      </section>

      {/* Props */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Props — InputGroup</h2>
          <p className="text-sm text-muted-foreground">Extiende todos los atributos de <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<div>"}</code>.</p>
          <PropsTable props={groupProps} />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Props — InputGroupAddon</h2>
          <PropsTable props={addonProps} />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Props — InputGroupButton</h2>
          <PropsTable props={buttonAddonProps} />
        </div>
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El contenedor tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="group"</code> para agrupar semánticamente el input y sus addons.</li>
          <li>Al hacer clic en el addon de texto el foco se transfiere automáticamente al input interno.</li>
          <li>Usa siempre un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Label>"}</code> externo para etiquetar el campo — no dependas del addon como único label.</li>
          <li>Los botones dentro del grupo deben tener <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> si solo muestran íconos.</li>
        </ul>
      </section>
    </article>
  )
}
