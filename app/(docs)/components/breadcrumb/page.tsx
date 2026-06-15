import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Breadcrumb" }

const basicCode = `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Componentes</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`

const ellipsisCode = `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components/navigation">Navegación</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`

const customSepCode = `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <span>/</span>
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Documentación</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <span>/</span>
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Guías</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`

const iconHomeCode = `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className="inline-flex items-center gap-1">
        <Icon name="home" size={14} />
        Inicio
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/foundations">Foundations</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Colors</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`

const breadcrumbProps = [
  { name: "—", type: "React.ComponentProps<\"nav\">", defaultValue: "—", description: "Extiende todos los atributos nativos de <nav>. Aplica aria-label=\"breadcrumb\" automáticamente." },
]

const breadcrumbLinkProps = [
  { name: "href", type: "string", defaultValue: "—", description: "URL del enlace. Puedes reemplazar el elemento con render={<Link href=\"...\" />} para Next.js." },
  { name: "render", type: "React.ReactElement", defaultValue: "<a>", description: "Elemento raíz alternativo. Usa render={<Link href=\"/ruta\" />} para integrar el router de Next.js." },
]

const breadcrumbSepProps = [
  { name: "children", type: "React.ReactNode", defaultValue: "<ChevronRightIcon>", description: "Separador personalizado. Si se omite, usa el ícono ChevronRight." },
]

export default async function BreadcrumbDocPage() {
  const [basicHtml, ellipsisHtml, customSepHtml, iconHomeHtml] = await Promise.all([
    highlight(basicCode),
    highlight(ellipsisCode),
    highlight(customSepCode),
    highlight(iconHomeCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Breadcrumb</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Ruta de navegación jerárquica que indica la posición del usuario dentro
            de la estructura del sitio. Soporta separadores personalizados, elipsis
            para rutas largas e integración con Next.js Link.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Estructura fundamental: lista de ítems separados por{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BreadcrumbSeparator</code>.
          El último ítem usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BreadcrumbPage</code>{" "}
          para marcar la página actual.
        </p>
        <ComponentPreview
          preview={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Componentes</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con elipsis</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BreadcrumbEllipsis</code> para
          colapsar ítems intermedios en rutas profundas.
        </p>
        <ComponentPreview
          preview={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Navegación</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
          codeHtml={ellipsisHtml}
          code={ellipsisCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Separador personalizado</h2>
        <p className="text-sm text-muted-foreground">
          Pasa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">children</code> a{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BreadcrumbSeparator</code> para
          reemplazar el ícono por defecto. Cualquier nodo es válido.
        </p>
        <ComponentPreview
          preview={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <span className="text-muted-foreground/50 text-xs">/</span>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Documentación</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <span className="text-muted-foreground/50 text-xs">/</span>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Guías</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
          codeHtml={customSepHtml}
          code={customSepCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con ícono home</h2>
        <p className="text-sm text-muted-foreground">
          Combina un ícono de inicio dentro de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BreadcrumbLink</code> para
          identificar visualmente el nivel raíz.
        </p>
        <ComponentPreview
          preview={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="inline-flex items-center gap-1">
                    <Icon name="home" size={14} />
                    Inicio
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Foundations</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Colors</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
          codeHtml={iconHomeHtml}
          code={iconHomeCode}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>

        <div className="space-y-2">
          <h3 className="text-base font-medium">Breadcrumb</h3>
          <p className="text-sm text-muted-foreground">
            Wrapper <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<nav>"}</code> con{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="breadcrumb"</code> automático.
            Acepta todos los atributos nativos de <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<nav>"}</code>.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium">BreadcrumbLink</h3>
          <PropsTable props={breadcrumbLinkProps} />
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium">BreadcrumbSeparator</h3>
          <PropsTable props={breadcrumbSepProps} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Integración con Next.js</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">render</code> en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BreadcrumbLink</code> para
          delegar el renderizado a <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Link>"}</code> de Next.js
          y mantener la navegación del lado del cliente:
        </p>
        <pre className="rounded-lg border border-border bg-muted/40 p-4 text-xs font-mono leading-relaxed overflow-x-auto">
          <code>{`import Link from "next/link"

<BreadcrumbLink render={<Link href="/components" />}>
  Componentes
</BreadcrumbLink>`}</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li><code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BreadcrumbPage</code> tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-current="page"</code> y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-disabled="true"</code> automáticamente.</li>
          <li>Los separadores tienen <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-hidden="true"</code> para no interferir con lectores de pantalla.</li>
          <li>La elipsis tiene texto oculto <em>More</em> para lectores de pantalla.</li>
        </ul>
      </section>
    </article>
  )
}
