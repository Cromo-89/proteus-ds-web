import type { Metadata } from "next"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Tabs" }

const defaultCode = `<Tabs defaultValue="general">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="avanzado">Avanzado</TabsTrigger>
    <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
  </TabsList>
  <TabsContent value="general">
    <p className="text-sm text-muted-foreground">Configuración general de la cuenta.</p>
  </TabsContent>
  <TabsContent value="avanzado">
    <p className="text-sm text-muted-foreground">Opciones avanzadas y preferencias técnicas.</p>
  </TabsContent>
  <TabsContent value="seguridad">
    <p className="text-sm text-muted-foreground">Contraseña, 2FA y sesiones activas.</p>
  </TabsContent>
</Tabs>`

const lineCode = `<Tabs defaultValue="overview">
  <TabsList variant="line">
    <TabsTrigger value="overview">Resumen</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reportes</TabsTrigger>
    <TabsTrigger value="exports">Exportar</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <p className="text-sm text-muted-foreground">Vista general del proyecto.</p>
  </TabsContent>
  <TabsContent value="analytics">
    <p className="text-sm text-muted-foreground">Métricas y datos de uso.</p>
  </TabsContent>
  <TabsContent value="reports">
    <p className="text-sm text-muted-foreground">Reportes generados automáticamente.</p>
  </TabsContent>
  <TabsContent value="exports">
    <p className="text-sm text-muted-foreground">Exporta tus datos en CSV, JSON o PDF.</p>
  </TabsContent>
</Tabs>`

const verticalCode = `<Tabs defaultValue="perfil" orientation="vertical">
  <TabsList className="w-36">
    <TabsTrigger value="perfil">Perfil</TabsTrigger>
    <TabsTrigger value="cuenta">Cuenta</TabsTrigger>
    <TabsTrigger value="notifs">Notificaciones</TabsTrigger>
    <TabsTrigger value="privacidad">Privacidad</TabsTrigger>
  </TabsList>
  <TabsContent value="perfil">
    <p className="text-sm text-muted-foreground">Nombre, foto y datos públicos.</p>
  </TabsContent>
  <TabsContent value="cuenta">
    <p className="text-sm text-muted-foreground">Email, contraseña y plan.</p>
  </TabsContent>
  <TabsContent value="notifs">
    <p className="text-sm text-muted-foreground">Alertas por email y push.</p>
  </TabsContent>
  <TabsContent value="privacidad">
    <p className="text-sm text-muted-foreground">Visibilidad y datos personales.</p>
  </TabsContent>
</Tabs>`

const iconsCode = `<Tabs defaultValue="code">
  <TabsList>
    <TabsTrigger value="preview">
      <Icon name="visibility" size={14} />
      Preview
    </TabsTrigger>
    <TabsTrigger value="code">
      <Icon name="code" size={14} />
      Código
    </TabsTrigger>
    <TabsTrigger value="docs">
      <Icon name="description" size={14} />
      Docs
    </TabsTrigger>
  </TabsList>
  <TabsContent value="preview">
    <p className="text-sm text-muted-foreground">Vista previa del componente.</p>
  </TabsContent>
  <TabsContent value="code">
    <p className="text-sm text-muted-foreground font-mono">{'<Button>Hola</Button>'}</p>
  </TabsContent>
  <TabsContent value="docs">
    <p className="text-sm text-muted-foreground">Documentación y ejemplos.</p>
  </TabsContent>
</Tabs>`

const disabledCode = `<Tabs defaultValue="free">
  <TabsList>
    <TabsTrigger value="free">Gratis</TabsTrigger>
    <TabsTrigger value="pro">Pro</TabsTrigger>
    <TabsTrigger value="enterprise" disabled>
      Enterprise
    </TabsTrigger>
  </TabsList>
  <TabsContent value="free">
    <p className="text-sm text-muted-foreground">Plan gratuito con límite de 3 proyectos.</p>
  </TabsContent>
  <TabsContent value="pro">
    <p className="text-sm text-muted-foreground">Pro incluye proyectos ilimitados y analíticas.</p>
  </TabsContent>
</Tabs>`

const tabsRootProps = [
  { name: "defaultValue", type: "string", defaultValue: "—", description: "Valor seleccionado por defecto (modo no controlado)." },
  { name: "value", type: "string", defaultValue: "—", description: "Valor controlado externamente." },
  { name: "onValueChange", type: "(value: string) => void", defaultValue: "—", description: "Callback al cambiar de pestaña (modo controlado)." },
  { name: "orientation", type: '"horizontal" | "vertical"', defaultValue: '"horizontal"', description: "Disposición del layout: horizontal apila tabs encima del contenido, vertical los pone a la izquierda." },
]

const tabsListProps = [
  { name: "variant", type: '"default" | "line"', defaultValue: '"default"', description: "default muestra las pestañas como píldoras sobre fondo muted; line usa subrayado animado sin fondo." },
]

const tabsTriggerProps = [
  { name: "value", type: "string", defaultValue: "—", description: "Identificador de la pestaña. Debe coincidir con el value del TabsContent correspondiente.", required: true },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Deshabilita la pestaña: no responde a clics ni teclado." },
]

const tabsContentProps = [
  { name: "value", type: "string", defaultValue: "—", description: "Identificador del panel. Debe coincidir con el value del TabsTrigger correspondiente.", required: true },
]

export default async function TabsPage() {
  const [defaultHtml, lineHtml, verticalHtml, iconsHtml, disabledHtml] = await Promise.all([
    highlight(defaultCode),
    highlight(lineCode),
    highlight(verticalCode),
    highlight(iconsCode),
    highlight(disabledCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Tabs</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Organiza contenido en secciones alternables. Construido sobre Base UI Tabs
            con soporte de teclado completo, orientación vertical y dos variantes
            visuales: píldora y subrayado.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Default</h2>
        <p className="text-sm text-muted-foreground">
          Variante <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">default</code> con
          fondo muted y sombra en la pestaña activa.
        </p>
        <ComponentPreview
          preview={
            <Tabs defaultValue="general" className="w-full max-w-md">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="avanzado">Avanzado</TabsTrigger>
                <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="mt-3">
                <p className="text-sm text-muted-foreground">Configuración general de la cuenta.</p>
              </TabsContent>
              <TabsContent value="avanzado" className="mt-3">
                <p className="text-sm text-muted-foreground">Opciones avanzadas y preferencias técnicas.</p>
              </TabsContent>
              <TabsContent value="seguridad" className="mt-3">
                <p className="text-sm text-muted-foreground">Contraseña, 2FA y sesiones activas.</p>
              </TabsContent>
            </Tabs>
          }
          codeHtml={defaultHtml}
          code={defaultCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Line</h2>
        <p className="text-sm text-muted-foreground">
          Variante <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">line</code> con
          subrayado animado. Ideal para vistas de datos o dashboards.
        </p>
        <ComponentPreview
          preview={
            <Tabs defaultValue="overview" className="w-full max-w-lg">
              <TabsList variant="line">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reportes</TabsTrigger>
                <TabsTrigger value="exports">Exportar</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <p className="text-sm text-muted-foreground">Vista general del proyecto.</p>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <p className="text-sm text-muted-foreground">Métricas y datos de uso.</p>
              </TabsContent>
              <TabsContent value="reports" className="mt-4">
                <p className="text-sm text-muted-foreground">Reportes generados automáticamente.</p>
              </TabsContent>
              <TabsContent value="exports" className="mt-4">
                <p className="text-sm text-muted-foreground">Exporta tus datos en CSV, JSON o PDF.</p>
              </TabsContent>
            </Tabs>
          }
          codeHtml={lineHtml}
          code={lineCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Vertical</h2>
        <p className="text-sm text-muted-foreground">
          Prop <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">orientation="vertical"</code> para
          navegación lateral. Útil en paneles de configuración.
        </p>
        <ComponentPreview
          preview={
            <Tabs defaultValue="perfil" orientation="vertical" className="w-full max-w-sm">
              <TabsList className="w-36 shrink-0">
                <TabsTrigger value="perfil">Perfil</TabsTrigger>
                <TabsTrigger value="cuenta">Cuenta</TabsTrigger>
                <TabsTrigger value="notifs">Notificaciones</TabsTrigger>
                <TabsTrigger value="privacidad">Privacidad</TabsTrigger>
              </TabsList>
              <TabsContent value="perfil">
                <p className="text-sm text-muted-foreground">Nombre, foto y datos públicos.</p>
              </TabsContent>
              <TabsContent value="cuenta">
                <p className="text-sm text-muted-foreground">Email, contraseña y plan.</p>
              </TabsContent>
              <TabsContent value="notifs">
                <p className="text-sm text-muted-foreground">Alertas por email y push.</p>
              </TabsContent>
              <TabsContent value="privacidad">
                <p className="text-sm text-muted-foreground">Visibilidad y datos personales.</p>
              </TabsContent>
            </Tabs>
          }
          codeHtml={verticalHtml}
          code={verticalCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con íconos</h2>
        <p className="text-sm text-muted-foreground">
          Agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Icon>"}</code> dentro
          del trigger para reforzar la identidad de cada pestaña.
        </p>
        <ComponentPreview
          preview={
            <Tabs defaultValue="code" className="w-full max-w-sm">
              <TabsList>
                <TabsTrigger value="preview">
                  <Icon name="visibility" size={14} />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code">
                  <Icon name="code" size={14} />
                  Código
                </TabsTrigger>
                <TabsTrigger value="docs">
                  <Icon name="description" size={14} />
                  Docs
                </TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-3">
                <p className="text-sm text-muted-foreground">Vista previa del componente.</p>
              </TabsContent>
              <TabsContent value="code" className="mt-3">
                <p className="text-sm text-muted-foreground font-mono text-xs">{"<Button>Hola</Button>"}</p>
              </TabsContent>
              <TabsContent value="docs" className="mt-3">
                <p className="text-sm text-muted-foreground">Documentación y ejemplos.</p>
              </TabsContent>
            </Tabs>
          }
          codeHtml={iconsHtml}
          code={iconsCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Tab deshabilitada</h2>
        <p className="text-sm text-muted-foreground">
          Prop <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">disabled</code> en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">TabsTrigger</code> impide
          la selección y aplica opacidad reducida.
        </p>
        <ComponentPreview
          preview={
            <Tabs defaultValue="free" className="w-full max-w-sm">
              <TabsList>
                <TabsTrigger value="free">Gratis</TabsTrigger>
                <TabsTrigger value="pro">Pro</TabsTrigger>
                <TabsTrigger value="enterprise" disabled>Enterprise</TabsTrigger>
              </TabsList>
              <TabsContent value="free" className="mt-3">
                <p className="text-sm text-muted-foreground">Plan gratuito con límite de 3 proyectos.</p>
              </TabsContent>
              <TabsContent value="pro" className="mt-3">
                <p className="text-sm text-muted-foreground">Pro incluye proyectos ilimitados y analíticas.</p>
              </TabsContent>
            </Tabs>
          }
          codeHtml={disabledHtml}
          code={disabledCode}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>

        <div className="space-y-2">
          <h3 className="text-base font-medium">Tabs</h3>
          <PropsTable props={tabsRootProps} />
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium">TabsList</h3>
          <PropsTable props={tabsListProps} />
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium">TabsTrigger</h3>
          <PropsTable props={tabsTriggerProps} />
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium">TabsContent</h3>
          <PropsTable props={tabsContentProps} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Implementa el patrón ARIA <em>Tabs</em>: <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="tablist"</code>, <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="tab"</code> y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="tabpanel"</code>.</li>
          <li>Navegación por teclado: <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">←</kbd> <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">→</kbd> entre pestañas horizontales; <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">↑</kbd> <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[11px]">↓</kbd> en vertical.</li>
          <li>Las pestañas deshabilitadas tienen <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-disabled</code> y no reciben foco.</li>
          <li>El panel activo está conectado con su trigger mediante <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-controls</code> / <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-labelledby</code> automáticamente.</li>
        </ul>
      </section>
    </article>
  )
}
