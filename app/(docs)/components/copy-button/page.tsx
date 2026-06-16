import type { Metadata } from "next"
import { CopyButton } from "@/components/docs/copy-button"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Copy Button" }

const usageCode = `import { CopyButton } from "@/components/docs/copy-button"

<CopyButton text="npm install @proteus-ds/react" />`

const inlineCode = `// Junto a un snippet de código inline
<div className="flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-2 text-sm font-mono">
  <span>npx proteus-ui@latest init</span>
  <CopyButton text="npx proteus-ui@latest init" />
</div>`

const copyButtonProps = [
  { name: "text", type: "string", required: true, defaultValue: "—", description: "Texto que se copia al portapapeles al hacer clic." },
]

export default async function CopyButtonPage() {
  const [usageHtml, inlineHtml] = await Promise.all([
    highlight(usageCode),
    highlight(inlineCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Copy Button</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Botón de ícono que copia texto al portapapeles. Muestra un check de confirmación
            por 2 segundos tras copiar. Usa la{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">Clipboard API</code>{" "}
            del navegador.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Haz clic en el botón para ver la animación de confirmación.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-3">
              <CopyButton text="npm install @proteus-ds/react" />
              <p className="text-sm text-muted-foreground">Haz clic para copiar</p>
            </div>
          }
          codeHtml={usageHtml}
          code={usageCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">En línea con código</h2>
        <p className="text-sm text-muted-foreground">
          Patrón común en páginas de instalación: snippet de código + botón de copiar alineados.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-2 text-sm font-mono">
              <span>npx proteus-ui@latest init</span>
              <CopyButton text="npx proteus-ui@latest init" />
            </div>
          }
          codeHtml={inlineHtml}
          code={inlineCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={copyButtonProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Comportamiento</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Al hacer clic, escribe <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">text</code> al portapapeles con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">navigator.clipboard.writeText()</code>.</li>
          <li>El ícono cambia de <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">content_copy</code> a <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">check</code> durante 2 segundos.</li>
          <li>El <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> cambia de "Copiar código" a "Copiado" para lectores de pantalla.</li>
          <li>En contextos donde la Clipboard API no está disponible (HTTP sin localhost), el botón fallará silenciosamente.</li>
        </ul>
      </section>
    </article>
  )
}
