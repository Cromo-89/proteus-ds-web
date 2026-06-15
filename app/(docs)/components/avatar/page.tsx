import type { Metadata } from "next"
import {
  Avatar, AvatarFallback, AvatarImage,
  AvatarBadge, AvatarGroup, AvatarGroupCount,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Avatar" }

const basicCode = `{/* Con imagen */}
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>SC</AvatarFallback>
</Avatar>

{/* Sin imagen — muestra fallback */}
<Avatar>
  <AvatarFallback>CR</AvatarFallback>
</Avatar>`

const sizesCode = `<div className="flex items-center gap-4">
  <Avatar size="sm">
    <AvatarFallback>SM</AvatarFallback>
  </Avatar>

  <Avatar size="default">
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>

  <Avatar size="lg">
    <AvatarFallback>LG</AvatarFallback>
  </Avatar>
</div>`

const badgeCode = `{/* Badge de estado online */}
<Avatar>
  <AvatarFallback>CR</AvatarFallback>
  <AvatarBadge className="bg-success" />
</Avatar>

{/* Badge de estado ocupado */}
<Avatar>
  <AvatarFallback>AB</AvatarFallback>
  <AvatarBadge className="bg-warning" />
</Avatar>

{/* Badge offline */}
<Avatar>
  <AvatarFallback>XY</AvatarFallback>
  <AvatarBadge className="bg-muted-foreground" />
</Avatar>`

const groupCode = `{/* Grupo de avatares */}
<AvatarGroup>
  <Avatar>
    <AvatarFallback>CR</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>XY</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+5</AvatarGroupCount>
</AvatarGroup>`

const avatarProps = [
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    defaultValue: '"default"',
    description: "Tamaño del avatar: sm 24px, default 32px, lg 40px.",
  },
]

const fallbackProps = [
  {
    name: "children",
    type: "string",
    defaultValue: "—",
    description: "Iniciales o ícono a mostrar cuando no hay imagen.",
    required: true,
  },
]

export default async function AvatarPage() {
  const [basicHtml, sizesHtml, badgeHtml, groupHtml] = await Promise.all([
    highlight(basicCode),
    highlight(sizesCode),
    highlight(badgeCode),
    highlight(groupCode),
  ])

  const people = [
    { initials: "CR", color: "bg-primary/20 text-primary" },
    { initials: "AB", color: "bg-success-bg text-success" },
    { initials: "XY", color: "bg-warning-bg text-warning" },
  ]

  return (
    <article className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
          <a href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Avatar</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Representación visual de un usuario. Muestra una imagen de perfil con fallback
            a iniciales. Soporta badges de estado, 3 tamaños y grupos con contador.
          </p>
        </div>
      </div>

      {/* Básico */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AvatarFallback</code> se muestra
          automáticamente cuando la imagen no carga o no se provee.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>CR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>
                  <Icon name="person" size={16} />
                </AvatarFallback>
              </Avatar>
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      {/* Tamaños */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tamaños</h2>
        <p className="text-sm text-muted-foreground">
          Tres tamaños: <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">sm</code> (24px),{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">default</code> (32px) y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">lg</code> (40px).
          El badge y el texto del fallback escalan automáticamente.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-end gap-4">
              {(["sm", "default", "lg"] as const).map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <Avatar size={size}>
                    <AvatarFallback>CR</AvatarFallback>
                  </Avatar>
                  <code className="font-mono text-[10px] text-muted-foreground">{size}</code>
                </div>
              ))}
            </div>
          }
          codeHtml={sizesHtml}
          code={sizesCode}
        />
      </section>

      {/* Badge */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Badge de estado</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AvatarBadge</code> agrega
          un indicador de estado en la esquina inferior derecha. Personaliza el color con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">className</code>.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-6">
              {[
                { label: "Online",  cls: "bg-success",          initials: "CR" },
                { label: "Ocupado", cls: "bg-warning",          initials: "AB" },
                { label: "Offline", cls: "bg-muted-foreground", initials: "XY" },
              ].map(({ label, cls, initials }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <Avatar>
                    <AvatarFallback>{initials}</AvatarFallback>
                    <AvatarBadge className={cls} />
                  </Avatar>
                  <span className="text-[10px] text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          }
          codeHtml={badgeHtml}
          code={badgeCode}
        />
      </section>

      {/* Grupo */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Grupo</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AvatarGroup</code> aplica overlap
          negativo entre avatares y agrega ring para separarlos.{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AvatarGroupCount</code> muestra el
          número de avatares ocultos.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4">
              <AvatarGroup>
                {people.map(({ initials, color }) => (
                  <Avatar key={initials}>
                    <AvatarFallback className={color}>{initials}</AvatarFallback>
                  </Avatar>
                ))}
                <AvatarGroupCount>+5</AvatarGroupCount>
              </AvatarGroup>
              <AvatarGroup>
                {people.map(({ initials, color }) => (
                  <Avatar key={initials} size="lg">
                    <AvatarFallback className={color}>{initials}</AvatarFallback>
                  </Avatar>
                ))}
                <AvatarGroupCount>+12</AvatarGroupCount>
              </AvatarGroup>
            </div>
          }
          codeHtml={groupHtml}
          code={groupCode}
        />
      </section>

      {/* Props */}
      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <div className="space-y-2">
          <p className="text-sm font-medium">Avatar</p>
          <PropsTable props={avatarProps} />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">AvatarFallback</p>
          <PropsTable props={fallbackProps} />
        </div>
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Agrega siempre <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">alt</code> descriptivo en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AvatarImage</code>.</li>
          <li>El fallback con iniciales es decorativo — si el nombre del usuario es importante, inclúyelo también como texto visible.</li>
          <li>En grupos, agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> al contenedor del grupo para describir cuántos usuarios representa.</li>
        </ul>
      </section>
    </article>
  )
}
