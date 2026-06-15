import type { Metadata } from "next"
import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Icons" }

const iconGroups = [
  {
    name: "Acciones",
    icons: ["add", "remove", "edit", "delete", "save", "upload", "download", "send", "share", "copy_all", "content_paste", "refresh", "search", "filter_list", "sort", "tune"],
  },
  {
    name: "Navegación",
    icons: ["arrow_back", "arrow_forward", "arrow_upward", "arrow_downward", "chevron_right", "chevron_left", "expand_more", "expand_less", "open_in_new", "close", "menu", "more_vert", "more_horiz"],
  },
  {
    name: "Estado y feedback",
    icons: ["check_circle", "cancel", "error", "warning", "info", "check", "close", "done_all", "hourglass_empty", "pending", "block", "not_interested"],
  },
  {
    name: "UI",
    icons: ["home", "settings", "person", "group", "notifications", "star", "favorite", "bookmark", "visibility", "visibility_off", "lock", "lock_open", "key", "help", "dark_mode", "light_mode"],
  },
  {
    name: "Contenido",
    icons: ["description", "folder", "folder_open", "image", "link", "attach_file", "code", "data_object", "table_chart", "bar_chart", "pie_chart", "calendar_today", "schedule", "label"],
  },
  {
    name: "Comunicación",
    icons: ["mail", "chat", "forum", "comment", "announcement", "campaign", "cell_tower", "wifi", "bluetooth", "device_hub"],
  },
]

const importCode = `import { Icon } from "@/components/ui/icon"`

const basicCode = `{/* Tamaño default: 24px */}
<Icon name="star" />

{/* Filled */}
<Icon name="star" filled />

{/* Tamaños disponibles */}
<Icon name="add" size={14} />
<Icon name="add" size={16} />
<Icon name="add" size={20} />
<Icon name="add" size={24} />
<Icon name="add" size={40} />
<Icon name="add" size={48} />`

const colorCode = `{/* Color heredado del texto */}
<span className="text-primary">
  <Icon name="check_circle" size={20} />
</span>

{/* Color explícito */}
<Icon name="warning" size={20} className="text-warning" />
<Icon name="error" size={20} className="text-destructive" />
<Icon name="check_circle" size={20} className="text-success" />`

const a11yCode = `{/* Ícono decorativo — oculto para screen readers */}
<Icon name="arrow_forward" aria-hidden />

{/* Ícono con significado — necesita label */}
<button aria-label="Eliminar archivo">
  <Icon name="delete" size={20} />
</button>

{/* Ícono junto a texto — el texto describe la acción */}
<button>
  <Icon name="download" size={20} />
  Descargar
</button>`

export default function IconsPage() {
  const iconStyle = (size: number) =>
    ({
      fontSize: size,
      fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
    } as React.CSSProperties)

  const iconStyleFilled = (size: number) =>
    ({
      fontSize: size,
      fontVariationSettings: `'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
    } as React.CSSProperties)

  return (
    <article className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">Foundations</p>
        <h1 className="text-4xl font-bold tracking-tight">Icons</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Proteus usa <strong className="text-foreground">Material Symbols Rounded</strong> — una fuente
          de íconos variable con más de 3000 símbolos. Se carga vía Google Fonts y se consume
          con el componente <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">{"<Icon />"}</code>.
        </p>
      </div>

      {/* Setup */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Setup</h2>
        <p className="text-sm text-muted-foreground">
          La fuente se carga en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">app/layout.tsx</code> y el
          componente wrapper está en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">components/ui/icon.tsx</code>.
          Solo necesitas importar <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Icon />"}</code>.
        </p>
        <CodeBlock code={importCode} lang="tsx" />
      </section>

      {/* Tamaños */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Tamaños</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            6 tamaños disponibles. El parámetro <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">opsz</code> de
            la fuente variable se ajusta automáticamente para máxima legibilidad a cada tamaño.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-border divide-y divide-border">
          {([14, 16, 20, 24, 40, 48] as const).map((size) => (
            <div key={size} className="flex items-center gap-5 px-5 py-3.5">
              <span
                className="material-symbols-rounded text-foreground shrink-0"
                style={iconStyle(size)}
                aria-hidden
              >
                home
              </span>
              <div className="flex flex-col gap-0.5">
                <code className="font-mono text-xs text-foreground">size=&#123;{size}&#125;</code>
                <span className="text-xs text-muted-foreground">{size}px · opsz {size}</span>
              </div>
              <div className="ml-auto flex items-center gap-3">
                {["star", "add", "settings", "person", "check_circle"].map((icon) => (
                  <span
                    key={icon}
                    className="material-symbols-rounded text-muted-foreground"
                    style={iconStyle(size)}
                    aria-hidden
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filled vs Outline */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Outline vs Filled</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            La prop <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">filled</code> cambia
            el parámetro FILL de la fuente variable de 0 a 1.
            Usa filled para indicar estado activo o seleccionado.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { icon: "star",          label: "star" },
              { icon: "favorite",      label: "favorite" },
              { icon: "bookmark",      label: "bookmark" },
              { icon: "notifications", label: "notifications" },
              { icon: "home",          label: "home" },
              { icon: "check_circle",  label: "check_circle" },
              { icon: "person",        label: "person" },
              { icon: "settings",      label: "settings" },
            ].map(({ icon, label }) => (
              <div key={icon} className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-4">
                  <span
                    className="material-symbols-rounded text-muted-foreground"
                    style={iconStyle(24)}
                    aria-hidden
                  >
                    {icon}
                  </span>
                  <span
                    className="material-symbols-rounded text-primary"
                    style={iconStyleFilled(24)}
                    aria-hidden
                  >
                    {icon}
                  </span>
                </div>
                <code className="font-mono text-[10px] text-muted-foreground">{label}</code>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground text-center">
            Izquierda: <code className="font-mono">filled=&#123;false&#125;</code> (default) · Derecha: <code className="font-mono">filled=&#123;true&#125;</code>
          </p>
        </div>
      </section>

      {/* Uso básico */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Uso básico</h2>
        <CodeBlock code={basicCode} lang="tsx" />
      </section>

      {/* Color */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Color</h2>
        <p className="text-sm text-muted-foreground">
          Los íconos heredan el <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">color</code> del
          elemento padre, o acepta clases de color directamente via{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">className</code>.
        </p>
        <CodeBlock code={colorCode} lang="tsx" />
      </section>

      {/* Catálogo */}
      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Catálogo</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Subset de íconos de uso frecuente en Proteus. El catálogo completo está en{" "}
            <a
              href="https://fonts.google.com/icons?icon.style=Rounded"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:no-underline"
            >
              fonts.google.com/icons
            </a>.
          </p>
        </div>
        <div className="space-y-6">
          {iconGroups.map((group) => (
            <div key={group.name} className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">{group.name}</h3>
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
                {group.icons.map((icon) => (
                  <div
                    key={icon}
                    className="group flex flex-col items-center gap-1.5 rounded-lg border border-border bg-card p-3 hover:border-primary/50 hover:bg-background-secondary transition-colors cursor-default"
                    title={icon}
                  >
                    <span
                      className="material-symbols-rounded text-foreground"
                      style={iconStyle(20)}
                      aria-hidden
                    >
                      {icon}
                    </span>
                    <code className="font-mono text-[9px] text-muted-foreground text-center leading-tight line-clamp-2 break-all">
                      {icon}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <p className="text-sm text-muted-foreground">
          El componente <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Icon />"}</code> incluye{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-hidden=&quot;true&quot;</code> por defecto,
          ya que los íconos son decorativos en la mayoría de los casos.
        </p>
        <CodeBlock code={a11yCode} lang="tsx" />
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Íconos solos en botones siempre necesitan <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> en el botón.</li>
          <li>Íconos junto a texto visible son decorativos — el texto ya describe la acción.</li>
          <li>Nunca uses texto alternativo en el <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Icon />"}</code> directamente.</li>
        </ul>
      </section>
    </article>
  )
}
