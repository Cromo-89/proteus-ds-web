import type { Metadata } from "next"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Icon" }

const basicCode = `import { Icon } from "@/components/ui/icon"

<Icon name="home" size={24} />
<Icon name="settings" size={20} className="text-muted-foreground" />
<Icon name="star" size={24} filled />
<Icon name="check_circle" size={16} className="text-success" />
<Icon name="error" size={16} className="text-destructive" />`

const sizesCode = `{/* Tamaños disponibles: 14 | 16 | 20 | 24 | 40 | 48 */}
<Icon name="home" size={14} />
<Icon name="home" size={16} />
<Icon name="home" size={20} />
<Icon name="home" size={24} />
<Icon name="home" size={40} />
<Icon name="home" size={48} />`

const filledCode = `{/* Outline (default) */}
<Icon name="star" size={24} />
<Icon name="bookmark" size={24} />
<Icon name="favorite" size={24} />

{/* Filled */}
<Icon name="star" size={24} filled />
<Icon name="bookmark" size={24} filled />
<Icon name="favorite" size={24} filled />`

const colorCode = `{/* Hereda el color del padre con currentColor */}
<p className="text-primary">
  <Icon name="check" size={16} /> Texto con ícono inline
</p>

{/* O aplica color directamente */}
<Icon name="error" size={20} className="text-destructive" />
<Icon name="check_circle" size={20} className="text-success" />
<Icon name="warning" size={20} className="text-warning" />
<Icon name="info" size={20} className="text-info" />`

const inButtonCode = `{/* Usa siempre size={16} dentro de botones default */}
<Button>
  <Icon name="add" size={16} />
  Nuevo proyecto
</Button>

{/* size={14} en botones sm */}
<Button size="sm">
  <Icon name="download" size={14} />
  Descargar
</Button>

{/* Botón solo ícono */}
<Button variant="ghost" size="icon">
  <Icon name="more_horiz" size={20} />
</Button>`

const iconProps = [
  { name: "name", type: "string", required: true, defaultValue: "—", description: "Nombre del ícono en Material Symbols Rounded (snake_case). Ej: 'home', 'check_circle', 'arrow_forward'." },
  { name: "size", type: "14 | 16 | 20 | 24 | 40 | 48", defaultValue: "24", description: "Tamaño en píxeles. Controla font-size y opsz (optical sizing) simultáneamente." },
  { name: "filled", type: "boolean", defaultValue: "false", description: "Activa la variante rellena del ícono (FILL=1). Usa filled para estados activos." },
  { name: "className", type: "string", defaultValue: "—", description: "Clases adicionales. Útil para color (text-primary, text-muted-foreground, etc.)." },
]

const commonIcons = [
  { category: "Acciones", icons: ["add", "edit", "delete", "save", "search", "filter_list", "sort", "download", "upload", "share", "copy_all", "content_copy"] },
  { category: "Navegación", icons: ["home", "arrow_back", "arrow_forward", "chevron_right", "chevron_left", "expand_more", "close", "menu", "more_horiz", "more_vert"] },
  { category: "Estado", icons: ["check", "check_circle", "error", "warning", "info", "help", "pending", "cancel", "block", "radio_button_unchecked"] },
  { category: "UI", icons: ["visibility", "visibility_off", "lock", "lock_open", "settings", "notifications", "person", "group", "calendar_today", "schedule"] },
  { category: "Archivos", icons: ["folder", "folder_open", "description", "attach_file", "image", "link", "upload_file", "cloud_upload", "cloud_download"] },
  { category: "Comunicación", icons: ["mail", "chat", "chat_bubble", "send", "reply", "inbox", "mark_email_read", "notifications_active"] },
]

export default async function IconPage() {
  const [basicHtml, sizesHtml, filledHtml, colorHtml, inButtonHtml] = await Promise.all([
    highlight(basicCode),
    highlight(sizesCode),
    highlight(filledCode),
    highlight(colorCode),
    highlight(inButtonCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
          <a
            href="https://fonts.google.com/icons"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon name="open_in_new" size={14} />
            Material Symbols
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Icon</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Componente wrapper sobre{" "}
            <strong className="text-foreground">Material Symbols Rounded</strong> con
            optical sizing automático según el tamaño, soporte para la variante filled
            y herencia de color por CSS. Siempre usa este componente — nunca renderices
            el span de Material Symbols directamente.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-4 flex-wrap">
              <Icon name="home" size={24} />
              <Icon name="settings" size={24} className="text-muted-foreground" />
              <Icon name="star" size={24} filled className="text-warning" />
              <Icon name="check_circle" size={24} className="text-success" />
              <Icon name="error" size={24} className="text-destructive" />
              <Icon name="info" size={24} className="text-info" />
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tamaños</h2>
        <p className="text-sm text-muted-foreground">
          Los tamaños son discretos — TypeScript rechaza valores no listados.
          El{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">opsz</code>{" "}
          (optical sizing) ajusta el trazo y el espaciado automáticamente para cada tamaño,
          optimizando la legibilidad a escala.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-end gap-4">
              <div className="flex flex-col items-center gap-2">
                <Icon name="home" size={14} />
                <span className="text-xs text-muted-foreground">14</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="home" size={16} />
                <span className="text-xs text-muted-foreground">16</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="home" size={20} />
                <span className="text-xs text-muted-foreground">20</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="home" size={24} />
                <span className="text-xs text-muted-foreground">24</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="home" size={40} />
                <span className="text-xs text-muted-foreground">40</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="home" size={48} />
                <span className="text-xs text-muted-foreground">48</span>
              </div>
            </div>
          }
          codeHtml={sizesHtml}
          code={sizesCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Outline vs Filled</h2>
        <p className="text-sm text-muted-foreground">
          Usa la variante{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">filled</code>{" "}
          para estados activos, favoritos, o para añadir énfasis visual. La distinción
          outline/filled también comunica jerarquía semántica (ej: estrella vacía = sin favorito,
          rellena = favorito activo).
        </p>
        <ComponentPreview
          preview={
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Outline</p>
                <div className="flex gap-4">
                  <Icon name="star" size={24} />
                  <Icon name="bookmark" size={24} />
                  <Icon name="favorite" size={24} />
                  <Icon name="notifications" size={24} />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Filled</p>
                <div className="flex gap-4">
                  <Icon name="star" size={24} filled className="text-warning" />
                  <Icon name="bookmark" size={24} filled className="text-primary" />
                  <Icon name="favorite" size={24} filled className="text-destructive" />
                  <Icon name="notifications" size={24} filled />
                </div>
              </div>
            </div>
          }
          codeHtml={filledHtml}
          code={filledCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Color</h2>
        <p className="text-sm text-muted-foreground">
          El ícono hereda el color del texto del padre via{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">currentColor</code>.
          Para cambiar el color individualmente, aplica una clase{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">text-*</code>{" "}
          directamente en el ícono.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary">
                <Icon name="check" size={16} />
                <span className="text-sm">Hereda color del padre</span>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="error" size={20} className="text-destructive" />
                <Icon name="check_circle" size={20} className="text-success" />
                <Icon name="warning" size={20} className="text-warning" />
                <Icon name="info" size={20} className="text-info" />
                <Icon name="circle" size={20} className="text-muted-foreground" />
              </div>
            </div>
          }
          codeHtml={colorHtml}
          code={colorCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Dentro de botones</h2>
        <p className="text-sm text-muted-foreground">
          Regla de tamaño: <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">size={"{16}"}</code> en
          botones default, <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">size={"{14}"}</code> en
          botones sm, <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">size={"{20}"}</code> en icon buttons.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
                <Icon name="add" size={16} />
                Nuevo proyecto
              </button>
              <button className="inline-flex items-center gap-1 rounded-md border border-border bg-transparent px-2.5 py-1 text-xs font-medium text-foreground hover:bg-muted">
                <Icon name="download" size={14} />
                Descargar
              </button>
              <button className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground">
                <Icon name="more_horiz" size={20} />
              </button>
            </div>
          }
          codeHtml={inButtonHtml}
          code={inButtonCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={iconProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Catálogo de íconos frecuentes</h2>
        <p className="text-sm text-muted-foreground">
          Todos los íconos disponibles en{" "}
          <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-4">
            fonts.google.com/icons
          </a>.
          Filtra por "Rounded" para ver solo la familia que usa Proteus.
        </p>
        <div className="space-y-4">
          {commonIcons.map(({ category, icons }) => (
            <div key={category}>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{category}</p>
              <div className="flex flex-wrap gap-3">
                {icons.map((name) => (
                  <div key={name} className="flex flex-col items-center gap-1.5 rounded-lg border p-2.5 min-w-[64px]">
                    <Icon name={name} size={20} className="text-foreground" />
                    <span className="text-[9px] font-mono text-muted-foreground text-center leading-tight">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>
            El componente aplica{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-hidden="true"</code>{" "}
            por defecto. Los íconos son siempre decorativos — el texto adyacente o el{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            del elemento padre provee el significado.
          </li>
          <li>
            Nunca uses un ícono como único indicador de estado sin texto o{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            en el elemento interactivo padre.
          </li>
        </ul>
      </section>
    </article>
  )
}
