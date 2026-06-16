import type { Metadata } from "next"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Avatar Group" }

const basicCode = `<AvatarGroup>
  <Avatar>
    <AvatarFallback>CR</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>XY</AvatarFallback>
  </Avatar>
</AvatarGroup>`

const withCountCode = `<AvatarGroup>
  <Avatar>
    <AvatarFallback>CR</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>XY</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+8</AvatarGroupCount>
</AvatarGroup>`

const withImagesCode = `<AvatarGroup>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>SC</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>CR</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+4</AvatarGroupCount>
</AvatarGroup>`

const sizesCode = `{/* sm */}
<AvatarGroup>
  <Avatar size="sm"><AvatarFallback>CR</AvatarFallback></Avatar>
  <Avatar size="sm"><AvatarFallback>AB</AvatarFallback></Avatar>
  <Avatar size="sm"><AvatarFallback>XY</AvatarFallback></Avatar>
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>

{/* default */}
<AvatarGroup>
  <Avatar><AvatarFallback>CR</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>XY</AvatarFallback></Avatar>
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>

{/* lg */}
<AvatarGroup>
  <Avatar size="lg"><AvatarFallback>CR</AvatarFallback></Avatar>
  <Avatar size="lg"><AvatarFallback>AB</AvatarFallback></Avatar>
  <Avatar size="lg"><AvatarFallback>XY</AvatarFallback></Avatar>
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>`

const useCasesCode = `{/* Equipo asignado a una tarea */}
<div className="flex items-center gap-3">
  <AvatarGroup>
    <Avatar size="sm"><AvatarFallback>CR</AvatarFallback></Avatar>
    <Avatar size="sm"><AvatarFallback>AB</AvatarFallback></Avatar>
    <Avatar size="sm"><AvatarFallback>XY</AvatarFallback></Avatar>
  </AvatarGroup>
  <span className="text-sm text-muted-foreground">3 colaboradores</span>
</div>

{/* Reacciones a un comentario */}
<div className="flex items-center gap-2">
  <AvatarGroup>
    <Avatar size="sm"><AvatarFallback>A</AvatarFallback></Avatar>
    <Avatar size="sm"><AvatarFallback>B</AvatarFallback></Avatar>
    <AvatarGroupCount>+12</AvatarGroupCount>
  </AvatarGroup>
  <span className="text-sm text-muted-foreground">14 le dieron me gusta</span>
</div>`

const groupProps = [
  {
    name: "children",
    type: "React.ReactNode",
    defaultValue: "—",
    description: "Avatares e AvatarGroupCount a mostrar. El overlap y ring se aplican automáticamente.",
    required: true,
  },
]

const countProps = [
  {
    name: "children",
    type: "React.ReactNode",
    defaultValue: "—",
    description: "Texto o ícono que representa los avatares ocultos. Generalmente \"+N\".",
    required: true,
  },
]

const people = [
  { initials: "CR", color: "bg-primary/20 text-primary" },
  { initials: "AB", color: "bg-success-bg text-success" },
  { initials: "XY", color: "bg-warning-bg text-warning" },
]

export default async function AvatarGroupPage() {
  const [basicHtml, withCountHtml, withImagesHtml, sizesHtml, useCasesHtml] = await Promise.all([
    highlight(basicCode),
    highlight(withCountCode),
    highlight(withImagesCode),
    highlight(sizesCode),
    highlight(useCasesCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Avatar Group</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Conjunto superpuesto de avatares para representar equipos, colaboradores o participantes.
            Aplica overlap negativo y ring de separación automáticamente. Usa{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AvatarGroupCount</code>{" "}
            para indicar cuántos avatares quedan ocultos.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <ComponentPreview
          preview={
            <AvatarGroup>
              {people.map(({ initials, color }) => (
                <Avatar key={initials}>
                  <AvatarFallback className={color}>{initials}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con contador</h2>
        <p className="text-sm text-muted-foreground">
          Agrega{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AvatarGroupCount</code>{" "}
          al final para mostrar cuántos participantes no caben visualmente. El tamaño se hereda
          automáticamente del grupo.
        </p>
        <ComponentPreview
          preview={
            <AvatarGroup>
              {people.map(({ initials, color }) => (
                <Avatar key={initials}>
                  <AvatarFallback className={color}>{initials}</AvatarFallback>
                </Avatar>
              ))}
              <AvatarGroupCount>+8</AvatarGroupCount>
            </AvatarGroup>
          }
          codeHtml={withCountHtml}
          code={withCountCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con imágenes</h2>
        <p className="text-sm text-muted-foreground">
          Combina avatares con imagen y con fallback libremente. Si la imagen no carga,
          el fallback aparece automáticamente.
        </p>
        <ComponentPreview
          preview={
            <AvatarGroup>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              {people.map(({ initials, color }) => (
                <Avatar key={initials}>
                  <AvatarFallback className={color}>{initials}</AvatarFallback>
                </Avatar>
              ))}
              <AvatarGroupCount>+4</AvatarGroupCount>
            </AvatarGroup>
          }
          codeHtml={withImagesHtml}
          code={withImagesCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tamaños</h2>
        <p className="text-sm text-muted-foreground">
          Aplica el mismo{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">size</code> en todos
          los avatares del grupo. El contador y el ring escalan automáticamente.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4">
              {(["sm", "default", "lg"] as const).map((size) => (
                <div key={size} className="flex items-center gap-3">
                  <AvatarGroup>
                    {people.map(({ initials, color }) => (
                      <Avatar key={initials} size={size}>
                        <AvatarFallback className={color}>{initials}</AvatarFallback>
                      </Avatar>
                    ))}
                    <AvatarGroupCount>+3</AvatarGroupCount>
                  </AvatarGroup>
                  <code className="font-mono text-[10px] text-muted-foreground">{size}</code>
                </div>
              ))}
            </div>
          }
          codeHtml={sizesHtml}
          code={sizesCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Casos de uso</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-5 w-full max-w-sm">
              <div className="flex items-center justify-between rounded-lg border border-border/50 px-4 py-3">
                <div>
                  <p className="text-sm font-medium">Rediseño del dashboard</p>
                  <p className="text-xs text-muted-foreground">Vence el 30 jun</p>
                </div>
                <AvatarGroup>
                  {people.map(({ initials, color }) => (
                    <Avatar key={initials} size="sm">
                      <AvatarFallback className={color}>{initials}</AvatarFallback>
                    </Avatar>
                  ))}
                </AvatarGroup>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border/50 px-4 py-3">
                <AvatarGroup>
                  <Avatar size="sm">
                    <AvatarFallback className="bg-primary/20 text-primary">A</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarFallback className="bg-success-bg text-success">B</AvatarFallback>
                  </Avatar>
                  <AvatarGroupCount>+12</AvatarGroupCount>
                </AvatarGroup>
                <p className="text-sm text-muted-foreground">14 les gustó este comentario</p>
              </div>
            </div>
          }
          codeHtml={useCasesHtml}
          code={useCasesCode}
        />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <div className="space-y-2">
          <p className="text-sm font-medium">AvatarGroup</p>
          <PropsTable props={groupProps} />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">AvatarGroupCount</p>
          <PropsTable props={countProps} />
          <p className="text-xs text-muted-foreground">
            Para la API completa de Avatar (tamaños, badges, imagen, fallback) ver la página de{" "}
            <a href="/components/avatar" className="text-primary underline underline-offset-4">Avatar</a>.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            Agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            al contenedor <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AvatarGroup</code>{" "}
            para describir el grupo (ej. &quot;Equipo asignado: 3 personas&quot;).
          </li>
          <li>
            Cada avatar debe tener <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">alt</code>{" "}
            descriptivo en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AvatarImage</code>,
            o iniciales significativas en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AvatarFallback</code>.
          </li>
          <li>
            El <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AvatarGroupCount</code>{" "}
            es decorativo — si el número de participantes es relevante, inclúyelo también como texto
            visible junto al grupo.
          </li>
        </ul>
      </section>
    </article>
  )
}
