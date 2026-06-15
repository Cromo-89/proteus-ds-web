import type { Metadata } from "next"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Pagination" }

const basicCode = `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" text="Anterior" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" text="Siguiente" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`

const ellipsisCode = `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" text="Anterior" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">8</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>9</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">24</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" text="Siguiente" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`

const compactCode = `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" text="Anterior" />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" text="Siguiente" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`

const noTextCode = `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`

const paginationLinkProps = [
  { name: "href", type: "string", defaultValue: "—", description: "URL de destino. PaginationLink renderiza un <a> por defecto.", required: true },
  { name: "isActive", type: "boolean", defaultValue: "false", description: "Marca la página actual. Aplica variante outline y aria-current=\"page\"." },
  { name: "size", type: '"default" | "icon" | "sm" | "lg"', defaultValue: '"icon"', description: "Tamaño del botón subyacente. icon (32×32) para números, default para Previous/Next." },
]

const paginationPrevNextProps = [
  { name: "href", type: "string", defaultValue: "—", description: "URL de la página anterior o siguiente.", required: true },
  { name: "text", type: "string", defaultValue: '"Previous" / "Next"', description: "Etiqueta de texto. Visible desde sm breakpoint en adelante. En móvil solo se muestra el ícono." },
]

export default async function PaginationPage() {
  const [basicHtml, ellipsisHtml, compactHtml, noTextHtml] = await Promise.all([
    highlight(basicCode),
    highlight(ellipsisCode),
    highlight(compactCode),
    highlight(noTextCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Pagination</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Navegación entre páginas de un conjunto de resultados. Compuesto de
            botones de página, controles anterior/siguiente y elipsis para rangos
            grandes. Semántica y accesibilidad incluidas.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Rango compacto de páginas con controles anterior y siguiente.{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">isActive</code> marca la página
          actual con variante outline.
        </p>
        <ComponentPreview
          preview={
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" text="Anterior" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" text="Siguiente" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con elipsis</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">PaginationEllipsis</code> para
          colapsar rangos en conjuntos con muchas páginas.
        </p>
        <ComponentPreview
          preview={
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" text="Anterior" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">8</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>9</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">24</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" text="Siguiente" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          }
          codeHtml={ellipsisHtml}
          code={ellipsisCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Solo anterior / siguiente</h2>
        <p className="text-sm text-muted-foreground">
          Para flujos lineales donde los números de página no aportan contexto
          (wizard, onboarding, artículo largo).
        </p>
        <ComponentPreview
          preview={
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" text="Anterior" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" text="Siguiente" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          }
          codeHtml={compactHtml}
          code={compactCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Solo íconos</h2>
        <p className="text-sm text-muted-foreground">
          Omite <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">text</code> en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">PaginationPrevious</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">PaginationNext</code> para
          mostrar solo el ícono de flecha en todos los breakpoints.
        </p>
        <ComponentPreview
          preview={
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" text="" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" text="" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          }
          codeHtml={noTextHtml}
          code={noTextCode}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>

        <div className="space-y-2">
          <h3 className="text-base font-medium">PaginationLink</h3>
          <PropsTable props={paginationLinkProps} />
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium">PaginationPrevious / PaginationNext</h3>
          <PropsTable props={paginationPrevNextProps} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Uso dinámico</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Genera las páginas dinámicamente desde el total y la página actual:
        </p>
        <pre className="rounded-lg border border-border bg-muted/40 p-4 text-xs font-mono leading-relaxed overflow-x-auto">
          <code>{`const totalPages = 12
const currentPage = 4

{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
  <PaginationItem key={page}>
    <PaginationLink
      href={\`/blog?page=\${page}\`}
      isActive={page === currentPage}
    >
      {page}
    </PaginationLink>
  </PaginationItem>
))}`}</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El wrapper tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="navigation"</code> y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="pagination"</code>.</li>
          <li><code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">PaginationLink isActive</code> aplica <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-current="page"</code>.</li>
          <li><code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">PaginationPrevious</code> y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">PaginationNext</code> tienen <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> descriptivos.</li>
          <li><code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">PaginationEllipsis</code> tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-hidden</code> con texto oculto <em>More pages</em> para lectores de pantalla.</li>
          <li>Todos los elementos son navegables por teclado mediante <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">Tab</kbd>.</li>
        </ul>
      </section>
    </article>
  )
}
