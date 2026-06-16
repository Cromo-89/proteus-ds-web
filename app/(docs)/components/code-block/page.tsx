import type { Metadata } from "next"
import { CodeBlock } from "@/components/docs/code-block"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Code Block" }

const usageCode = `import { CodeBlock } from "@/components/docs/code-block"

<CodeBlock code={snippetCode} lang="tsx" />`

const tsxSample = `import { Button } from "@/components/ui/button"

export function Demo() {
  return (
    <Button variant="outline" size="sm">
      Haz clic aquí
    </Button>
  )
}`

const bashSample = `# Instala Proteus DS en tu proyecto
npx proteus-ui@latest init

# Agrega un componente individual
npx proteus-ui add button`

const jsonSample = `{
  "name": "proteus-ds",
  "version": "0.11.1",
  "dependencies": {
    "@base-ui/react": "^1.0.0",
    "tailwindcss": "^4.0.0"
  }
}`

const noCopyCode = `<CodeBlock code={snippetCode} lang="ts" showCopy={false} />`

const codeBlockProps = [
  { name: "code", type: "string", required: true, defaultValue: "—", description: "Código fuente a mostrar y resaltar." },
  { name: "lang", type: "string", defaultValue: '"tsx"', description: 'Lenguaje de sintaxis. Soporta todos los lenguajes de Shiki: "tsx", "ts", "js", "bash", "json", "css", "html", etc.' },
  { name: "showCopy", type: "boolean", defaultValue: "true", description: "Muestra el botón de copiar al hacer hover sobre el bloque." },
]

export default async function CodeBlockPage() {
  const [usageHtml, noCopyHtml] = await Promise.all([
    highlight(usageCode),
    highlight(noCopyCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Code Block</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Bloque de código con resaltado de sintaxis y botón de copiar integrado.
            Componente de servidor asíncrono que usa{" "}
            <a href="https://shiki.style" target="_blank" rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4">Shiki</a>{" "}
            para el highlighting. El botón de copiar aparece al hacer hover.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Uso</h2>
        <ComponentPreview
          preview={
            <div className="w-full">
              <CodeBlock code={usageCode} lang="tsx" />
            </div>
          }
          codeHtml={usageHtml}
          code={usageCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">TSX / TypeScript</h2>
        <ComponentPreview
          preview={
            <div className="w-full">
              <CodeBlock code={tsxSample} lang="tsx" />
            </div>
          }
          codeHtml={await highlight(`<CodeBlock code={tsxCode} lang="tsx" />`)}
          code={`<CodeBlock code={tsxCode} lang="tsx" />`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Bash</h2>
        <ComponentPreview
          preview={
            <div className="w-full">
              <CodeBlock code={bashSample} lang="bash" />
            </div>
          }
          codeHtml={await highlight(`<CodeBlock code={bashCode} lang="bash" />`)}
          code={`<CodeBlock code={bashCode} lang="bash" />`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">JSON</h2>
        <ComponentPreview
          preview={
            <div className="w-full">
              <CodeBlock code={jsonSample} lang="json" />
            </div>
          }
          codeHtml={await highlight(`<CodeBlock code={jsonCode} lang="json" />`)}
          code={`<CodeBlock code={jsonCode} lang="json" />`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Sin botón de copiar</h2>
        <p className="text-sm text-muted-foreground">
          Pasa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">showCopy={"{false}"}</code> para
          snippets de solo lectura donde copiar no aplica.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full">
              <CodeBlock code={tsxSample} lang="tsx" showCopy={false} />
            </div>
          }
          codeHtml={noCopyHtml}
          code={noCopyCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={codeBlockProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Nota de implementación</h2>
        <div className="rounded-lg border bg-muted/30 px-4 py-3 text-sm text-muted-foreground space-y-2">
          <p>
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CodeBlock</code> es un
            componente de servidor <strong className="text-foreground">asíncrono</strong>. Solo puede
            usarse en Server Components o en páginas async. No se puede importar en componentes
            cliente (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">"use client"</code>).
          </p>
          <p>
            Para las páginas de documentación, el highlighting se realiza en paralelo con{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Promise.all()</code>{" "}
            usando la función <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">highlight()</code>{" "}
            de <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">@/lib/highlight</code>.
          </p>
        </div>
      </section>
    </article>
  )
}
