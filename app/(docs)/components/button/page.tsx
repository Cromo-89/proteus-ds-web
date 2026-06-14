import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Button" }

const variantsCode = `<div className="flex flex-wrap gap-3">
  <Button variant="default">Default</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="link">Link</Button>
</div>`

const sizesCode = `<div className="flex flex-wrap items-center gap-3">
  <Button size="xs">Extra small</Button>
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
</div>`

const iconsCode = `<div className="flex flex-wrap items-center gap-3">
  <Button>
    <Icon name="add" size={20} />
    Agregar
  </Button>
  <Button variant="outline">
    Descargar
    <Icon name="download" size={20} />
  </Button>
  <Button size="icon" variant="ghost" aria-label="Más opciones">
    <Icon name="more_vert" size={20} />
  </Button>
</div>`

const disabledCode = `<div className="flex flex-wrap gap-3">
  <Button disabled>Default</Button>
  <Button disabled variant="outline">Outline</Button>
  <Button disabled variant="ghost">Ghost</Button>
</div>`

const buttonProps = [
  {
    name: "variant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    defaultValue: '"default"',
    description: "Estilo visual del botón.",
  },
  {
    name: "size",
    type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs"',
    defaultValue: '"default"',
    description: "Tamaño del botón.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Deshabilita la interacción con el botón.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    defaultValue: "—",
    description: "Contenido del botón: texto, ícono o ambos.",
    required: true,
  },
]

export default async function ButtonPage() {
  const [variantsHtml, sizesHtml, iconsHtml, disabledHtml] = await Promise.all([
    highlight(variantsCode),
    highlight(sizesCode),
    highlight(iconsCode),
    highlight(disabledCode),
  ])

  return (
    <article className="space-y-10">
      {/* ── Header ──────────────────────────────────────── */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-xs font-medium text-success">
            Stable
          </span>
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
          <h1 className="text-4xl font-bold tracking-tight">Button</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Activa una acción o evento cuando el usuario hace clic. Disponible en
            6 variantes y 6 tamaños para cubrir cualquier contexto de la interfaz.
          </p>
        </div>
      </div>

      {/* ── Variantes ───────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Variantes</h2>
        <p className="text-sm text-muted-foreground">
          Cada variante comunica una jerarquía visual distinta. Usa{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">default</code>{" "}
          para la acción primaria y reserva{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">destructive</code>{" "}
          para acciones irreversibles.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          }
          codeHtml={variantsHtml}
          code={variantsCode}
        />
      </section>

      {/* ── Tamaños ─────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tamaños</h2>
        <p className="text-sm text-muted-foreground">
          Los tamaños van de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">xs</code> (24px) a{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">lg</code> (36px).
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">icon</code>{" "}
          para botones cuadrados con solo un ícono.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap items-center gap-3">
              <Button size="xs">Extra small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          }
          codeHtml={sizesHtml}
          code={sizesCode}
        />
      </section>

      {/* ── Con íconos ──────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con íconos</h2>
        <p className="text-sm text-muted-foreground">
          Combina el botón con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Icon />"}</code>{" "}
          de Material Symbols Rounded. El gap se maneja automáticamente.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap items-center gap-3">
              <Button>
                <Icon name="add" size={20} />
                Agregar
              </Button>
              <Button variant="outline">
                Descargar
                <Icon name="download" size={20} />
              </Button>
              <Button size="icon" variant="ghost" aria-label="Más opciones">
                <Icon name="more_vert" size={20} />
              </Button>
            </div>
          }
          codeHtml={iconsHtml}
          code={iconsCode}
        />
      </section>

      {/* ── Deshabilitado ───────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Deshabilitado</h2>
        <p className="text-sm text-muted-foreground">
          El estado <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">disabled</code>{" "}
          reduce la opacidad y bloquea la interacción.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-3">
              <Button disabled>Default</Button>
              <Button disabled variant="outline">Outline</Button>
              <Button disabled variant="ghost">Ghost</Button>
            </div>
          }
          codeHtml={disabledHtml}
          code={disabledCode}
        />
      </section>

      {/* ── Props ───────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground">
          Además de las siguientes props, acepta todos los atributos nativos de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<button>"}</code>.
        </p>
        <PropsTable props={buttonProps} />
      </section>

      {/* ── Accesibilidad ───────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>
            Los botones tipo <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">icon</code>{" "}
            deben incluir siempre <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>.
          </li>
          <li>Soporta navegación por teclado y focus visible.</li>
          <li>
            El estado <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">disabled</code>{" "}
            usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-disabled</code> internamente.
          </li>
        </ul>
      </section>
    </article>
  )
}
