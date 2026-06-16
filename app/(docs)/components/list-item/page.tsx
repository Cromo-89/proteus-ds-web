import type { Metadata } from "next"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import {
  ListItem,
  ListItemIcon,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemTrailing,
} from "@/components/ui/list-item"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "List Item" }

const basicCode = `<ListItem>
  <ListItemContent>
    <ListItemTitle>Nombre de usuario</ListItemTitle>
  </ListItemContent>
</ListItem>`

const iconCode = `<div className="flex flex-col divide-y divide-border rounded-xl border border-border overflow-hidden">
  <ListItem>
    <ListItemIcon>
      <Icon name="person" size={16} />
    </ListItemIcon>
    <ListItemContent>
      <ListItemTitle>Mi perfil</ListItemTitle>
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemIcon>
      <Icon name="notifications" size={16} />
    </ListItemIcon>
    <ListItemContent>
      <ListItemTitle>Notificaciones</ListItemTitle>
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemIcon>
      <Icon name="shield" size={16} />
    </ListItemIcon>
    <ListItemContent>
      <ListItemTitle>Seguridad</ListItemTitle>
    </ListItemContent>
  </ListItem>
</div>`

const descriptionCode = `<div className="flex flex-col gap-1 max-w-sm">
  <ListItem>
    <ListItemIcon className="bg-primary/10 text-primary">
      <Icon name="folder" size={16} />
    </ListItemIcon>
    <ListItemContent>
      <ListItemTitle>Proyectos</ListItemTitle>
      <ListItemDescription>14 carpetas · Actualizado hace 2h</ListItemDescription>
    </ListItemContent>
    <ListItemTrailing>
      <Icon name="chevron_right" size={16} />
    </ListItemTrailing>
  </ListItem>
  <ListItem>
    <ListItemIcon className="bg-success/10 text-success">
      <Icon name="check_circle" size={16} />
    </ListItemIcon>
    <ListItemContent>
      <ListItemTitle>Tareas completadas</ListItemTitle>
      <ListItemDescription>28 de 35 tareas</ListItemDescription>
    </ListItemContent>
    <ListItemTrailing>
      <Icon name="chevron_right" size={16} />
    </ListItemTrailing>
  </ListItem>
</div>`

const clickableCode = `<div className="flex flex-col divide-y divide-border rounded-xl border border-border overflow-hidden max-w-sm">
  {items.map((item) => (
    <ListItem
      key={item.id}
      as="button"
      className="hover:bg-muted/50 cursor-pointer w-full text-left"
      onClick={() => handleSelect(item)}
    >
      <ListItemContent>
        <ListItemTitle>{item.title}</ListItemTitle>
        <ListItemDescription>{item.subtitle}</ListItemDescription>
      </ListItemContent>
      <ListItemTrailing>
        <Icon name="chevron_right" size={16} />
      </ListItemTrailing>
    </ListItem>
  ))}
</div>`

const listItemProps = [
  { name: "ListItem", type: "div", defaultValue: "—", description: "Contenedor principal del ítem. Pasa className para efectos hover." },
  { name: "ListItemIcon", type: "div", defaultValue: "—", description: "Círculo con ícono. Acepta className para colores de fondo/texto." },
  { name: "ListItemContent", type: "div", defaultValue: "—", description: "Área de texto principal (título y descripción)." },
  { name: "ListItemTitle", type: "p", defaultValue: "—", description: "Texto principal del ítem." },
  { name: "ListItemDescription", type: "p", defaultValue: "—", description: "Subtexto secundario, más pequeño y con muted-foreground." },
  { name: "ListItemTrailing", type: "div", defaultValue: "—", description: "Zona derecha para íconos, badges o acciones secundarias." },
]

export default async function ListItemPage() {
  const [basicHtml, iconHtml, descriptionHtml, clickableHtml] = await Promise.all([
    highlight(basicCode),
    highlight(iconCode),
    highlight(descriptionCode),
    highlight(clickableCode),
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
          <h1 className="text-4xl font-bold tracking-tight">List Item</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Fila composable para listas de contenido. Combina ícono, título,
            descripción y trailing para armar desde menús de configuración hasta
            listas de resultados de búsqueda.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <ComponentPreview
          preview={
            <ListItem className="max-w-sm border border-border rounded-lg">
              <ListItemContent>
                <ListItemTitle>Nombre de usuario</ListItemTitle>
              </ListItemContent>
            </ListItem>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con ícono</h2>
        <p className="text-sm text-muted-foreground">
          Agrupa ítems en un contenedor con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">divide-y</code>{" "}
          para el separador entre filas.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col divide-y divide-border rounded-xl border border-border overflow-hidden max-w-xs">
              <ListItem>
                <ListItemIcon>
                  <Icon name="person" size={16} />
                </ListItemIcon>
                <ListItemContent>
                  <ListItemTitle>Mi perfil</ListItemTitle>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="notifications" size={16} />
                </ListItemIcon>
                <ListItemContent>
                  <ListItemTitle>Notificaciones</ListItemTitle>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="shield" size={16} />
                </ListItemIcon>
                <ListItemContent>
                  <ListItemTitle>Seguridad</ListItemTitle>
                </ListItemContent>
              </ListItem>
            </div>
          }
          codeHtml={iconHtml}
          code={iconCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con descripción y trailing</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ListItemTrailing</code>{" "}
          coloca su contenido al extremo derecho del ítem.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-1 max-w-sm">
              <ListItem className="hover:bg-muted/50 transition-colors cursor-pointer">
                <ListItemIcon className="bg-primary/10 text-primary">
                  <Icon name="folder" size={16} />
                </ListItemIcon>
                <ListItemContent>
                  <ListItemTitle>Proyectos</ListItemTitle>
                  <ListItemDescription>14 carpetas · Actualizado hace 2h</ListItemDescription>
                </ListItemContent>
                <ListItemTrailing>
                  <Icon name="chevron_right" size={16} />
                </ListItemTrailing>
              </ListItem>
              <ListItem className="hover:bg-muted/50 transition-colors cursor-pointer">
                <ListItemIcon className="bg-success/10 text-success">
                  <Icon name="check_circle" size={16} />
                </ListItemIcon>
                <ListItemContent>
                  <ListItemTitle>Tareas completadas</ListItemTitle>
                  <ListItemDescription>28 de 35 tareas</ListItemDescription>
                </ListItemContent>
                <ListItemTrailing>
                  <Icon name="chevron_right" size={16} />
                </ListItemTrailing>
              </ListItem>
            </div>
          }
          codeHtml={descriptionHtml}
          code={descriptionCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Clickable</h2>
        <p className="text-sm text-muted-foreground">
          Para ítems interactivos, agrega{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">hover:bg-muted/50 cursor-pointer</code>{" "}
          vía className y envuelve con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Link>"}</code>{" "}
          o usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onClick</code>.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col divide-y divide-border rounded-xl border border-border overflow-hidden max-w-sm">
              {[
                { id: 1, title: "Panel principal", sub: "Métricas de hoy" },
                { id: 2, title: "Reportes", sub: "Últimos 30 días" },
                { id: 3, title: "Configuración", sub: "Cuenta y preferencias" },
              ].map((item) => (
                <ListItem
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  className="hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <ListItemContent>
                    <ListItemTitle>{item.title}</ListItemTitle>
                    <ListItemDescription>{item.sub}</ListItemDescription>
                  </ListItemContent>
                  <ListItemTrailing>
                    <Icon name="chevron_right" size={16} />
                  </ListItemTrailing>
                </ListItem>
              ))}
            </div>
          }
          codeHtml={clickableHtml}
          code={clickableCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Componentes</h2>
        <PropsTable props={listItemProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            Si el ítem es clickable, usa{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Link href=\"..\">"}</code>{" "}
            o <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<button>"}</code>{" "}
            como elemento raíz en lugar de <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">div</code>.
          </li>
          <li>
            Envuelve un grupo de ítems relacionados en{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<ul>"}</code>{" "}
            con cada ítem como{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<li>"}</code>{" "}
            para navegación semántica por teclado.
          </li>
          <li>
            Los íconos decorativos deben tener{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-hidden="true"</code>.
          </li>
        </ul>
      </section>
    </article>
  )
}
