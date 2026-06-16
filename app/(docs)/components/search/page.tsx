import type { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { Kbd } from "@/components/ui/kbd"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { SearchClearDemo, SearchGroupDemo } from "@/components/docs/form-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Search" }

const basicCode = `<div className="relative w-full max-w-sm">
  <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground">
    <Icon name="search" size={16} />
  </span>
  <Input placeholder="Buscar..." className="pl-8" />
</div>`

const clearCode = `"use client"
const [value, setValue] = useState("")

<div className="relative w-full max-w-sm">
  <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground">
    <Icon name="search" size={16} />
  </span>
  <Input
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Buscar componentes..."
    className="px-8"
  />
  {value && (
    <button
      type="button"
      onClick={() => setValue("")}
      aria-label="Limpiar búsqueda"
      className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:text-foreground transition-colors"
    >
      <Icon name="close" size={16} />
    </button>
  )}
</div>`

const groupCode = `<InputGroup className="w-full max-w-sm">
  <InputGroupAddon>
    <Icon name="search" size={16} />
  </InputGroupAddon>
  <InputGroupInput placeholder="Buscar..." />
</InputGroup>`

const kbdCode = `<InputGroup className="w-full max-w-sm">
  <InputGroupAddon>
    <Icon name="search" size={16} />
  </InputGroupAddon>
  <InputGroupInput placeholder="Buscar componentes..." />
  <InputGroupAddon align="inline-end">
    <InputGroupText>
      <Kbd>⌘K</Kbd>
    </InputGroupText>
  </InputGroupAddon>
</InputGroup>`

const searchProps = [
  {
    name: "placeholder",
    type: "string",
    defaultValue: "—",
    description: "Texto de ayuda cuando el campo está vacío.",
  },
  {
    name: "value / onChange",
    type: "string / handler",
    defaultValue: "—",
    description: "Para modo controlado. Necesario para mostrar el botón de limpiar.",
  },
  {
    name: "aria-label",
    type: "string",
    defaultValue: "—",
    description: "Label accesible si el campo no tiene un <Label> visible asociado.",
  },
]

export default async function SearchPage() {
  const [basicHtml, clearHtml, groupHtml, kbdHtml] = await Promise.all([
    highlight(basicCode),
    highlight(clearCode),
    highlight(groupCode),
    highlight(kbdCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Search</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Campo de búsqueda compuesto sobre{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Input</code> e{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">InputGroup</code>.
            Soporta ícono de búsqueda, botón de limpiar y atajo de teclado visible.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Posiciona el ícono con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">absolute</code> y
          ajusta el padding del input para que el texto no quede debajo del ícono.
        </p>
        <ComponentPreview
          preview={
            <div className="relative w-full max-w-sm">
              <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Icon name="search" size={16} />
              </span>
              <Input placeholder="Buscar..." className="pl-8" />
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con botón de limpiar</h2>
        <p className="text-sm text-muted-foreground">
          Muestra el botón × solo cuando hay texto ingresado. El demo es interactivo.
        </p>
        <ComponentPreview
          preview={<SearchClearDemo />}
          codeHtml={clearHtml}
          code={clearCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con InputGroup</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">InputGroup</code> para
          mayor control del layout — íconos y botones se alinean automáticamente con el campo.
        </p>
        <ComponentPreview
          preview={<SearchGroupDemo />}
          codeHtml={groupHtml}
          code={groupCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con atajo de teclado</h2>
        <p className="text-sm text-muted-foreground">
          Combina con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Kbd</code>{" "}
          en el addon derecho para indicar el atajo que abre el buscador.
        </p>
        <ComponentPreview
          preview={
            <InputGroup className="w-full max-w-sm">
              <InputGroupAddon>
                <Icon name="search" size={16} />
              </InputGroupAddon>
              <InputGroupInput placeholder="Buscar componentes..." />
              <InputGroupAddon align="inline-end">
                <InputGroupText>
                  <Kbd>⌘K</Kbd>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          }
          codeHtml={kbdHtml}
          code={kbdCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props clave</h2>
        <PropsTable props={searchProps} />
        <p className="text-sm text-muted-foreground">
          Search es un patrón de composición — no es un componente nuevo, sino una forma de usar{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Input</code> e{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">InputGroup</code>{" "}
          juntos. Acepta todas las props nativas de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<input>"}</code>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            Agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="search"</code>{" "}
            al contenedor si la búsqueda afecta el contenido de la página.
          </li>
          <li>
            Si no hay label visible, usa{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="Buscar"</code>{" "}
            en el input.
          </li>
          <li>
            El botón de limpiar debe tener{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="Limpiar búsqueda"</code>.
          </li>
          <li>
            Si muestras resultados en tiempo real, usa{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-live="polite"</code>{" "}
            en el contenedor de resultados.
          </li>
        </ul>
      </section>
    </article>
  )
}
