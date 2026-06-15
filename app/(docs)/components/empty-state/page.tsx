import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Empty State" }

const noResultsCode = `<div className="flex flex-col items-center gap-3 py-12 text-center">
  <div className="size-12 rounded-full bg-muted flex items-center justify-center">
    <Icon name="search_off" size={24} className="text-muted-foreground" />
  </div>
  <div>
    <p className="font-medium">Sin resultados</p>
    <p className="mt-0.5 text-sm text-muted-foreground">
      No encontramos nada para "componentes UI". Intenta con otros términos.
    </p>
  </div>
  <Button variant="outline" size="sm">Limpiar búsqueda</Button>
</div>`

const emptyListCode = `<div className="flex flex-col items-center gap-4 py-16 text-center">
  <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center">
    <Icon name="folder_open" size={24} className="text-primary" />
  </div>
  <div className="max-w-xs">
    <p className="font-semibold">No hay proyectos todavía</p>
    <p className="mt-1 text-sm text-muted-foreground">
      Crea tu primer proyecto y empieza a organizar tu trabajo en un solo lugar.
    </p>
  </div>
  <div className="flex gap-2">
    <Button>
      <Icon name="add" size={16} />
      Nuevo proyecto
    </Button>
    <Button variant="outline">Ver plantillas</Button>
  </div>
</div>`

const errorCode = `<div className="flex flex-col items-center gap-4 py-16 text-center">
  <div className="size-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
    <Icon name="cloud_off" size={24} className="text-destructive" />
  </div>
  <div className="max-w-xs">
    <p className="font-semibold">Error al cargar</p>
    <p className="mt-1 text-sm text-muted-foreground">
      No se pudo conectar con el servidor. Verifica tu conexión e intenta de nuevo.
    </p>
  </div>
  <Button variant="outline">
    <Icon name="refresh" size={16} />
    Reintentar
  </Button>
</div>`

const permissionsCode = `<div className="flex flex-col items-center gap-4 py-16 text-center">
  <div className="size-14 rounded-2xl bg-warning/10 flex items-center justify-center">
    <Icon name="lock" size={24} className="text-warning" />
  </div>
  <div className="max-w-xs">
    <p className="font-semibold">Acceso restringido</p>
    <p className="mt-1 text-sm text-muted-foreground">
      No tienes permisos para ver esta sección. Contacta al administrador de tu equipo.
    </p>
  </div>
  <Button variant="outline">Solicitar acceso</Button>
</div>`

const compactCode = `<div className="flex items-center gap-3 rounded-lg border border-dashed border-border p-6">
  <div className="size-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
    <Icon name="notifications_off" size={20} className="text-muted-foreground" />
  </div>
  <div>
    <p className="text-sm font-medium">Sin notificaciones</p>
    <p className="text-xs text-muted-foreground">Estás al día por ahora.</p>
  </div>
</div>`

export default async function EmptyStatePage() {
  const [noResultsHtml, emptyListHtml, errorHtml, permissionsHtml, compactHtml] = await Promise.all([
    highlight(noResultsCode),
    highlight(emptyListCode),
    highlight(errorCode),
    highlight(permissionsCode),
    highlight(compactCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-info/10 text-info border-info/20 rounded-full">Pattern</Badge>
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
          <h1 className="text-4xl font-bold tracking-tight">Empty State</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Patrón de composición para los momentos en que no hay contenido que mostrar.
            Un buen estado vacío guía al usuario con claridad: explica qué ocurrió y
            ofrece un camino para avanzar.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Patrón, no componente:</strong> Empty State se compone
          de primitivos existentes (Icon, Button, texto). No hay un componente dedicado —
          la flexibilidad de composición es intencional.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Sin resultados de búsqueda</h2>
        <p className="text-sm text-muted-foreground">
          Explica qué se buscó y ofrece una salida clara. Evita mensajes genéricos como "No hay datos".
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col items-center gap-3 py-12 text-center w-full">
              <div className="size-12 rounded-full bg-muted flex items-center justify-center">
                <Icon name="search_off" size={24} className="text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium">Sin resultados</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  No encontramos nada para "componentes UI". Intenta con otros términos.
                </p>
              </div>
              <Button variant="outline" size="sm">Limpiar búsqueda</Button>
            </div>
          }
          codeHtml={noResultsHtml}
          code={noResultsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Lista vacía — primera vez</h2>
        <p className="text-sm text-muted-foreground">
          Para colecciones sin items. El ícono con fondo de color primario orienta la
          atención y el CTA principal lleva a la acción de creación.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col items-center gap-4 py-16 text-center w-full">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon name="folder_open" size={24} className="text-primary" />
              </div>
              <div className="max-w-xs">
                <p className="font-semibold">No hay proyectos todavía</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Crea tu primer proyecto y empieza a organizar tu trabajo en un solo lugar.
                </p>
              </div>
              <div className="flex gap-2">
                <Button>
                  <Icon name="add" size={16} />
                  Nuevo proyecto
                </Button>
                <Button variant="outline">Ver plantillas</Button>
              </div>
            </div>
          }
          codeHtml={emptyListHtml}
          code={emptyListCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Error de carga</h2>
        <p className="text-sm text-muted-foreground">
          Cuando el contenido no se pudo obtener. El ícono destructivo comunica el problema
          y el CTA ofrece recuperación inmediata.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col items-center gap-4 py-16 text-center w-full">
              <div className="size-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                <Icon name="cloud_off" size={24} className="text-destructive" />
              </div>
              <div className="max-w-xs">
                <p className="font-semibold">Error al cargar</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  No se pudo conectar con el servidor. Verifica tu conexión e intenta de nuevo.
                </p>
              </div>
              <Button variant="outline">
                <Icon name="refresh" size={16} />
                Reintentar
              </Button>
            </div>
          }
          codeHtml={errorHtml}
          code={errorCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Sin permisos</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col items-center gap-4 py-16 text-center w-full">
              <div className="size-14 rounded-2xl bg-warning/10 flex items-center justify-center">
                <Icon name="lock" size={24} className="text-warning" />
              </div>
              <div className="max-w-xs">
                <p className="font-semibold">Acceso restringido</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  No tienes permisos para ver esta sección. Contacta al administrador de tu equipo.
                </p>
              </div>
              <Button variant="outline">Solicitar acceso</Button>
            </div>
          }
          codeHtml={permissionsHtml}
          code={permissionsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Compacto — inline</h2>
        <p className="text-sm text-muted-foreground">
          Para estados vacíos dentro de paneles o widgets pequeños donde no hay espacio para
          el layout centrado completo.
        </p>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-3 rounded-lg border border-dashed border-border p-6 w-full max-w-sm">
              <div className="size-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <Icon name="notifications_off" size={20} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Sin notificaciones</p>
                <p className="text-xs text-muted-foreground">Estás al día por ahora.</p>
              </div>
            </div>
          }
          codeHtml={compactHtml}
          code={compactCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Guía de escritura</h2>
        <div className="grid gap-3 sm:grid-cols-2 text-sm">
          <div className="rounded-lg border border-success/20 bg-success-bg/30 p-4 space-y-2">
            <p className="font-medium text-success flex items-center gap-1.5">
              <Icon name="check" size={14} />
              Haz esto
            </p>
            <ul className="space-y-1 text-muted-foreground list-disc list-inside">
              <li>Explica qué ocurrió en el título</li>
              <li>Describe qué puede hacer el usuario</li>
              <li>Ofrece un CTA claro y específico</li>
              <li>Usa lenguaje amigable y directo</li>
            </ul>
          </div>
          <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 space-y-2">
            <p className="font-medium text-destructive flex items-center gap-1.5">
              <Icon name="close" size={14} />
              Evita esto
            </p>
            <ul className="space-y-1 text-muted-foreground list-disc list-inside">
              <li>"No hay datos" o "Sin resultados"</li>
              <li>Culpar al usuario del estado vacío</li>
              <li>Texto técnico o errores de API</li>
              <li>Dejar el espacio sin ninguna orientación</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}
