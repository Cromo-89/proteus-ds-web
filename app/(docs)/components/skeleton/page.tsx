import type { Metadata } from "next"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Skeleton" }

const basicCode = `<div className="flex flex-col gap-2 w-48">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-4/5" />
  <Skeleton className="h-4 w-3/5" />
</div>`

const cardCode = `<div className="flex items-start gap-3 p-4 rounded-xl border border-border w-72">
  <Skeleton className="size-10 rounded-full shrink-0" />
  <div className="flex flex-col gap-2 flex-1">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-3 w-full" />
    <Skeleton className="h-3 w-4/5" />
  </div>
</div>`

const listCode = `<div className="flex flex-col gap-3 w-64">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex items-center gap-3">
      <Skeleton className="size-8 rounded-md shrink-0" />
      <div className="flex flex-col gap-1.5 flex-1">
        <Skeleton className="h-3.5 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  ))}
</div>`

const articleCode = `<div className="flex flex-col gap-3 w-80">
  <Skeleton className="h-40 w-full rounded-xl" />
  <Skeleton className="h-6 w-4/5" />
  <div className="flex flex-col gap-2">
    <Skeleton className="h-3.5 w-full" />
    <Skeleton className="h-3.5 w-full" />
    <Skeleton className="h-3.5 w-3/5" />
  </div>
</div>`

const skeletonProps = [
  {
    name: "className",
    type: "string",
    defaultValue: "—",
    description: "Clases para definir tamaño y forma. Siempre especifica h-* y w-*.",
    required: true,
  },
]

export default async function SkeletonPage() {
  const [basicHtml, cardHtml, listHtml, articleHtml] = await Promise.all([
    highlight(basicCode),
    highlight(cardCode),
    highlight(listCode),
    highlight(articleCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Skeleton</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Placeholder animado para representar contenido en estado de carga.
            Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">animate-pulse</code> sobre
            el token <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">bg-muted</code>.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Cada <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Skeleton</code> es
          un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">div</code>. Define tamaño con
          clases de Tailwind y forma con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">rounded-*</code>.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-2 w-48">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/5" />
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Card loading</h2>
        <p className="text-sm text-muted-foreground">
          Replica la estructura visual del componente real para minimizar el layout shift al cargar.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-start gap-3 p-4 rounded-xl border border-border w-72">
              <Skeleton className="size-10 rounded-full shrink-0" />
              <div className="flex flex-col gap-2 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
              </div>
            </div>
          }
          codeHtml={cardHtml}
          code={cardCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Lista</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3 w-64">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="size-8 rounded-md shrink-0" />
                  <div className="flex flex-col gap-1.5 flex-1">
                    <Skeleton className="h-3.5 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          }
          codeHtml={listHtml}
          code={listCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Artículo</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3 w-80">
              <Skeleton className="h-40 w-full rounded-xl" />
              <Skeleton className="h-6 w-4/5" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-3/5" />
              </div>
            </div>
          }
          codeHtml={articleHtml}
          code={articleCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground">
          Además de <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">className</code>, acepta
          todos los atributos de <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<div>"}</code>.
        </p>
        <PropsTable props={skeletonProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Envuelve el grupo de skeletons en un contenedor con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-busy="true"</code> mientras carga.</li>
          <li>Cuando el contenido cargue, remueve el atributo o reemplaza los skeletons con el contenido real.</li>
          <li>No uses skeletons para contenido crítico que deba estar disponible inmediatamente — prefiere SSR.</li>
        </ul>
      </section>
    </article>
  )
}
