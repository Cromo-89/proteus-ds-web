import type { Metadata } from "next"
import { Kbd } from "@/components/ui/kbd"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Kbd" }

const basicCode = `<div className="flex items-center gap-2">
  <Kbd>Ctrl</Kbd>
  <Kbd>Shift</Kbd>
  <Kbd>Alt</Kbd>
  <Kbd>⌘</Kbd>
  <Kbd>⌥</Kbd>
  <Kbd>↵</Kbd>
</div>`

const combosCode = `<div className="flex flex-col gap-3">
  <div className="flex items-center gap-1.5">
    <Kbd>⌘</Kbd>
    <span className="text-xs text-muted-foreground">+</span>
    <Kbd>K</Kbd>
    <span className="ml-2 text-sm text-muted-foreground">Búsqueda rápida</span>
  </div>
  <div className="flex items-center gap-1.5">
    <Kbd>⌘</Kbd>
    <span className="text-xs text-muted-foreground">+</span>
    <Kbd>Shift</Kbd>
    <span className="text-xs text-muted-foreground">+</span>
    <Kbd>P</Kbd>
    <span className="ml-2 text-sm text-muted-foreground">Paleta de comandos</span>
  </div>
  <div className="flex items-center gap-1.5">
    <Kbd>Ctrl</Kbd>
    <span className="text-xs text-muted-foreground">+</span>
    <Kbd>S</Kbd>
    <span className="ml-2 text-sm text-muted-foreground">Guardar</span>
  </div>
</div>`

const menuCode = `<div className="w-52 rounded-lg border border-border bg-card p-1 text-sm">
  <button className="w-full flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-accent">
    <span>Copiar</span>
    <div className="flex items-center gap-0.5">
      <Kbd>⌘</Kbd><Kbd>C</Kbd>
    </div>
  </button>
  <button className="w-full flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-accent">
    <span>Pegar</span>
    <div className="flex items-center gap-0.5">
      <Kbd>⌘</Kbd><Kbd>V</Kbd>
    </div>
  </button>
  <button className="w-full flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-accent">
    <span>Deshacer</span>
    <div className="flex items-center gap-0.5">
      <Kbd>⌘</Kbd><Kbd>Z</Kbd>
    </div>
  </button>
</div>`

const kbdProps = [
  {
    name: "children",
    type: "React.ReactNode",
    defaultValue: "—",
    description: "Texto o símbolo de la tecla.",
    required: true,
  },
  {
    name: "className",
    type: "string",
    defaultValue: "—",
    description: "Clases adicionales.",
  },
]

export default async function KbdPage() {
  const [basicHtml, combosHtml, menuHtml] = await Promise.all([
    highlight(basicCode),
    highlight(combosCode),
    highlight(menuCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
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
          <h1 className="text-4xl font-bold tracking-tight">Kbd</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Representa atajos de teclado y combinaciones de teclas en la interfaz.
            Usa el elemento semántico <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">{"<kbd>"}</code> con
            estilos de sistema operativo.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Teclas simples</h2>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-2 flex-wrap">
              <Kbd>Ctrl</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>Alt</Kbd>
              <Kbd>⌘</Kbd>
              <Kbd>⌥</Kbd>
              <Kbd>↵</Kbd>
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Combinaciones</h2>
        <p className="text-sm text-muted-foreground">
          Usa un signo <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">+</code> entre
          elementos <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Kbd</code> para
          comunicar la combinación completa.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1.5">
                <Kbd>⌘</Kbd>
                <span className="text-xs text-muted-foreground">+</span>
                <Kbd>K</Kbd>
                <span className="ml-2 text-sm text-muted-foreground">Búsqueda rápida</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Kbd>⌘</Kbd>
                <span className="text-xs text-muted-foreground">+</span>
                <Kbd>Shift</Kbd>
                <span className="text-xs text-muted-foreground">+</span>
                <Kbd>P</Kbd>
                <span className="ml-2 text-sm text-muted-foreground">Paleta de comandos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Kbd>Ctrl</Kbd>
                <span className="text-xs text-muted-foreground">+</span>
                <Kbd>S</Kbd>
                <span className="ml-2 text-sm text-muted-foreground">Guardar</span>
              </div>
            </div>
          }
          codeHtml={combosHtml}
          code={combosCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">En menús</h2>
        <p className="text-sm text-muted-foreground">
          Alinea el atajo al extremo derecho de cada ítem con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">justify-between</code>.
        </p>
        <ComponentPreview
          preview={
            <div className="w-52 rounded-lg border border-border bg-card p-1 text-sm">
              <button className="w-full flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-accent transition-colors">
                <span>Copiar</span>
                <div className="flex items-center gap-0.5">
                  <Kbd>⌘</Kbd><Kbd>C</Kbd>
                </div>
              </button>
              <button className="w-full flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-accent transition-colors">
                <span>Pegar</span>
                <div className="flex items-center gap-0.5">
                  <Kbd>⌘</Kbd><Kbd>V</Kbd>
                </div>
              </button>
              <button className="w-full flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-accent transition-colors">
                <span>Deshacer</span>
                <div className="flex items-center gap-0.5">
                  <Kbd>⌘</Kbd><Kbd>Z</Kbd>
                </div>
              </button>
            </div>
          }
          codeHtml={menuHtml}
          code={menuCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground">
          Acepta todos los atributos nativos de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<kbd>"}</code>.
        </p>
        <PropsTable props={kbdProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El elemento <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<kbd>"}</code> es reconocido por lectores de pantalla como "keyboard input".</li>
          <li>Usa símbolos estándar Unicode (⌘ ⌥ ⇧ ↵) para representar teclas de Mac; Ctrl/Alt para Windows/Linux.</li>
          <li>Cuando el atajo es el único indicador de una acción, complementa con texto descriptivo visible.</li>
        </ul>
      </section>
    </article>
  )
}
