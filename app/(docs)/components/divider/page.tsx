import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Divider" }

const horizontalCode = `<div className="flex flex-col gap-4 w-64">
  <p className="text-sm text-muted-foreground">Sección A</p>
  <Separator />
  <p className="text-sm text-muted-foreground">Sección B</p>
</div>`

const verticalCode = `<div className="flex items-center gap-3 h-8">
  <span className="text-sm text-muted-foreground">Inicio</span>
  <Separator orientation="vertical" />
  <span className="text-sm text-muted-foreground">Docs</span>
  <Separator orientation="vertical" />
  <span className="text-sm text-muted-foreground">Componentes</span>
</div>`

const labelCode = `<div className="flex items-center gap-3 w-72">
  <Separator className="flex-1" />
  <span className="text-xs text-muted-foreground shrink-0">O continúa con</span>
  <Separator className="flex-1" />
</div>`

const menuCode = `<div className="w-48 rounded-lg border border-border bg-card p-1 text-sm">
  <div className="px-2 py-1.5 text-muted-foreground">Cuenta</div>
  <button className="w-full rounded-md px-2 py-1.5 text-left hover:bg-accent">Perfil</button>
  <button className="w-full rounded-md px-2 py-1.5 text-left hover:bg-accent">Ajustes</button>
  <Separator className="my-1" />
  <button className="w-full rounded-md px-2 py-1.5 text-left text-destructive hover:bg-destructive/10">
    Cerrar sesión
  </button>
</div>`

const dividerProps = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
    description: "Dirección del divisor.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "—",
    description: "Clases adicionales. Útil para ajustar margen o color.",
  },
]

export default async function DividerPage() {
  const [horizontalHtml, verticalHtml, labelHtml, menuHtml] = await Promise.all([
    highlight(horizontalCode),
    highlight(verticalCode),
    highlight(labelCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Divider</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Línea de separación semántica entre secciones de contenido. Construido sobre
            el primitivo <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">Separator</code> de
            Base UI con soporte para orientación horizontal y vertical.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Horizontal</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-64">
              <p className="text-sm text-muted-foreground">Sección A</p>
              <Separator />
              <p className="text-sm text-muted-foreground">Sección B</p>
            </div>
          }
          codeHtml={horizontalHtml}
          code={horizontalCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Vertical</h2>
        <p className="text-sm text-muted-foreground">
          Requiere un contenedor flex con altura definida. El divisor usa{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">self-stretch</code> para
          llenar la altura disponible.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-3 h-8">
              <span className="text-sm text-muted-foreground">Inicio</span>
              <Separator orientation="vertical" />
              <span className="text-sm text-muted-foreground">Docs</span>
              <Separator orientation="vertical" />
              <span className="text-sm text-muted-foreground">Componentes</span>
            </div>
          }
          codeHtml={verticalHtml}
          code={verticalCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con etiqueta</h2>
        <p className="text-sm text-muted-foreground">
          Patrón común en formularios de autenticación: dos separadores flanqueando un texto.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-3 w-72">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground shrink-0">O continúa con</span>
              <Separator className="flex-1" />
            </div>
          }
          codeHtml={labelHtml}
          code={labelCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">En menús</h2>
        <p className="text-sm text-muted-foreground">
          Agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">my-1</code> para
          un espaciado consistente en listas de opciones.
        </p>
        <ComponentPreview
          preview={
            <div className="w-48 rounded-lg border border-border bg-card p-1 text-sm">
              <div className="px-2 py-1.5 text-muted-foreground text-xs font-medium">Cuenta</div>
              <button className="w-full rounded-md px-2 py-1.5 text-left hover:bg-accent transition-colors">Perfil</button>
              <button className="w-full rounded-md px-2 py-1.5 text-left hover:bg-accent transition-colors">Ajustes</button>
              <Separator className="my-1" />
              <button className="w-full rounded-md px-2 py-1.5 text-left text-destructive hover:bg-destructive/10 transition-colors">
                Cerrar sesión
              </button>
            </div>
          }
          codeHtml={menuHtml}
          code={menuCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={dividerProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Renderiza un elemento <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<div>"}</code> con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="separator"</code> por defecto.</li>
          <li>Para separadores puramente decorativos, agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-hidden="true"</code>.</li>
        </ul>
      </section>
    </article>
  )
}
