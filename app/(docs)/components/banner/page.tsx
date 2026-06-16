import type { Metadata } from "next"
import { Banner, BannerContent, BannerActions } from "@/components/ui/banner"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { BannerDismissDemo } from "@/components/docs/feedback-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Banner" }

const defaultCode = `<Banner>
  <BannerContent>
    Proteus DS v0.2.0 ya está disponible. Revisa el changelog para ver las novedades.
  </BannerContent>
</Banner>`

const variantsCode = `<div className="flex flex-col gap-2 w-full">
  <Banner variant="info">
    <BannerContent>
      <Icon name="info" size={16} />
      <span>Mantenimiento programado el sábado de 02:00 a 04:00 UTC.</span>
    </BannerContent>
  </Banner>

  <Banner variant="success">
    <BannerContent>
      <Icon name="check_circle" size={16} />
      <span>Verificación completada. Tu cuenta está activa.</span>
    </BannerContent>
  </Banner>

  <Banner variant="warning">
    <BannerContent>
      <Icon name="warning" size={16} />
      <span>Tu plan vence en 3 días. Renueva para no perder el acceso.</span>
    </BannerContent>
  </Banner>

  <Banner variant="destructive">
    <BannerContent>
      <Icon name="error" size={16} />
      <span>Incidente activo: latencia elevada en la región US-East.</span>
    </BannerContent>
  </Banner>
</div>`

const dismissCode = `"use client"
const [visible, setVisible] = useState(true)

{visible && (
  <Banner variant="info">
    <BannerContent>
      <Icon name="info" size={16} />
      <span>Nueva versión disponible. Actualiza para ver los últimos cambios.</span>
    </BannerContent>
    <BannerActions>
      <button
        aria-label="Cerrar banner"
        onClick={() => setVisible(false)}
        className="rounded p-1 opacity-60 hover:opacity-100 transition-opacity"
      >
        <Icon name="close" size={16} />
      </button>
    </BannerActions>
  </Banner>
)}`

const actionCode = `<Banner variant="warning">
  <BannerContent>
    <Icon name="warning" size={16} />
    <span>Tu prueba gratuita termina en 2 días.</span>
  </BannerContent>
  <BannerActions>
    <Button size="sm" variant="outline" className="h-7 text-xs border-warning/40 text-warning hover:bg-warning/10">
      Ver planes
    </Button>
    <button
      aria-label="Cerrar"
      className="rounded p-1 opacity-60 hover:opacity-100 transition-opacity"
    >
      <Icon name="close" size={16} />
    </button>
  </BannerActions>
</Banner>`

const bannerProps = [
  {
    name: "variant",
    type: '"default" | "info" | "success" | "warning" | "destructive"',
    defaultValue: '"default"',
    description: "Rol semántico del banner. Determina color de fondo, texto y borde.",
  },
]

export default async function BannerPage() {
  const [defaultHtml, variantsHtml, dismissHtml, actionHtml] = await Promise.all([
    highlight(defaultCode),
    highlight(variantsCode),
    highlight(dismissCode),
    highlight(actionCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Banner</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Franja de anuncio de ancho completo para comunicar información global de la aplicación:
            actualizaciones de sistema, mantenimientos, incidentes o promociones. A diferencia del
            Alert, el Banner se posiciona fuera del contenido de la página, generalmente
            debajo del navbar.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Default</h2>
        <ComponentPreview
          preview={
            <Banner className="w-full rounded-lg">
              <BannerContent>
                Proteus DS v0.2.0 ya está disponible. Revisa el changelog para ver las novedades.
              </BannerContent>
            </Banner>
          }
          codeHtml={defaultHtml}
          code={defaultCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Variantes</h2>
        <p className="text-sm text-muted-foreground">
          Los 4 roles semánticos más un estado neutral. Combina con un{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Icon>"}</code>{" "}
          dentro de <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BannerContent</code>{" "}
          para reforzar el mensaje visualmente.
        </p>
        <ComponentPreview
          preview={
            <div className="flex w-full flex-col gap-2">
              <Banner variant="info" className="rounded-lg">
                <BannerContent>
                  <Icon name="info" size={16} />
                  <span>Mantenimiento programado el sábado de 02:00 a 04:00 UTC.</span>
                </BannerContent>
              </Banner>
              <Banner variant="success" className="rounded-lg">
                <BannerContent>
                  <Icon name="check_circle" size={16} />
                  <span>Verificación completada. Tu cuenta está activa.</span>
                </BannerContent>
              </Banner>
              <Banner variant="warning" className="rounded-lg">
                <BannerContent>
                  <Icon name="warning" size={16} />
                  <span>Tu plan vence en 3 días. Renueva para no perder el acceso.</span>
                </BannerContent>
              </Banner>
              <Banner variant="destructive" className="rounded-lg">
                <BannerContent>
                  <Icon name="error" size={16} />
                  <span>Incidente activo: latencia elevada en la región US-East.</span>
                </BannerContent>
              </Banner>
            </div>
          }
          codeHtml={variantsHtml}
          code={variantsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Descartable</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BannerActions</code> para
          agregar un botón de cierre. El estado de visibilidad lo maneja el componente padre.
        </p>
        <ComponentPreview
          preview={<BannerDismissDemo />}
          codeHtml={dismissHtml}
          code={dismissCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con acción</h2>
        <p className="text-sm text-muted-foreground">
          Combina un botón de acción primaria con el botón de cierre en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BannerActions</code>.
        </p>
        <ComponentPreview
          preview={
            <Banner variant="warning" className="w-full rounded-lg">
              <BannerContent>
                <Icon name="warning" size={16} />
                <span>Tu prueba gratuita termina en 2 días.</span>
              </BannerContent>
              <BannerActions>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 border-warning/40 text-xs text-warning hover:bg-warning/10"
                >
                  Ver planes
                </Button>
                <button
                  aria-label="Cerrar"
                  className="rounded p-1 opacity-60 transition-opacity hover:opacity-100"
                >
                  <Icon name="close" size={16} />
                </button>
              </BannerActions>
            </Banner>
          }
          codeHtml={actionHtml}
          code={actionCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={bannerProps} />
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Banner</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BannerContent</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">BannerActions</code>{" "}
          aceptan todos los atributos nativos de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<div>"}</code>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Banner vs Alert</h2>
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <div className="space-y-2 rounded-lg border border-border/50 p-4">
            <p className="font-medium">Banner — úsalo para</p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Avisos de sistema que afectan toda la app</li>
              <li>Anuncios de mantenimiento o incidentes</li>
              <li>Mensajes de onboarding o promociones</li>
              <li>Notificaciones persistentes fuera del layout</li>
            </ul>
          </div>
          <div className="space-y-2 rounded-lg border border-border/50 p-4">
            <p className="font-medium">Alert — úsalo para</p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Errores o advertencias en formularios</li>
              <li>Mensajes contextuales dentro del contenido</li>
              <li>Información relevante a una sección específica</li>
              <li>Feedback inmediato a una acción del usuario</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            El Banner tiene{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="status"</code> y{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-live="polite"</code>{" "}
            para anunciar cambios sin interrumpir al usuario.
          </li>
          <li>
            El botón de cierre debe tener siempre{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            descriptivo (p. ej. &quot;Cerrar banner&quot;).
          </li>
          <li>
            Posiciona el Banner justo debajo del navbar para que sea lo primero que el usuario
            encuentre al navegar por la página.
          </li>
        </ul>
      </section>
    </article>
  )
}
