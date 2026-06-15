import type { Metadata } from "next"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import {
  ToastDefaultDemo,
  ToastSuccessDemo,
  ToastErrorDemo,
  ToastWarningDemo,
  ToastActionDemo,
  ToastPromiseDemo,
  ToastAllDemo,
} from "@/components/docs/feedback-demos"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Toast" }

const setupCode = `// app/layout.tsx
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}`

const basicCode = `import { toast } from "sonner"

// Default
toast("Cambios guardados correctamente.")

// Success
toast.success("Proyecto publicado exitosamente.")

// Error
toast.error("No se pudo guardar. Intenta de nuevo.")

// Warning
toast.warning("El archivo supera el límite de 10 MB.")`

const actionCode = `toast("Mensaje enviado.", {
  action: {
    label: "Deshacer",
    onClick: () => toast.success("Mensaje cancelado."),
  },
})`

const promiseCode = `const promise = fetch("/api/export").then((r) => r.json())

toast.promise(promise, {
  loading: "Exportando...",
  success: (data) => \`\${data.name} exportado correctamente.\`,
  error: "Error al exportar el archivo.",
})`

const customCode = `toast("Nuevo comentario", {
  description: "Ana García comentó en tu tarea.",
  duration: 6000,
  position: "bottom-right",
})`

const toasterProps = [
  { name: "richColors", type: "boolean", defaultValue: "false", description: "Activa colores semánticos para success, error, warning e info." },
  { name: "position", type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"', defaultValue: '"bottom-right"', description: "Posición del stack de toasts en la pantalla." },
  { name: "duration", type: "number", defaultValue: "4000", description: "Tiempo en ms antes de que el toast desaparezca automáticamente." },
  { name: "closeButton", type: "boolean", defaultValue: "false", description: "Muestra un botón × en cada toast para cerrarlo manualmente." },
  { name: "expand", type: "boolean", defaultValue: "false", description: "Expande todos los toasts en stack en vez de apilarlos." },
]

export default async function ToastPage() {
  const [setupHtml, basicHtml, actionHtml, promiseHtml, customHtml] = await Promise.all([
    highlight(setupCode),
    highlight(basicCode),
    highlight(actionCode),
    highlight(promiseCode),
    highlight(customCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Toast</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Notificaciones efímeras que aparecen en una esquina de la pantalla para
            informar sobre el resultado de una acción. Desaparecen solos después de
            unos segundos sin interrumpir el flujo. Implementado con{" "}
            <a href="https://sonner.emilkowal.ski/" target="_blank" rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4">Sonner</a>.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Setup</h2>
        <p className="text-sm text-muted-foreground">
          El <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Toaster />"}</code> ya
          está configurado en el layout raíz con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">richColors</code>.
          Importa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"{ toast }"}</code> de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">sonner</code> en cualquier
          componente cliente para disparar notificaciones.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-2 items-start">
              <p className="text-xs text-muted-foreground">Haz clic en los botones para ver cada variante:</p>
              <ToastAllDemo />
            </div>
          }
          codeHtml={setupHtml}
          code={setupCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Variantes</h2>
        <p className="text-sm text-muted-foreground">
          4 tipos semánticos: <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">toast()</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">toast.success()</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">toast.error()</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">toast.warning()</code>.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-2">
              <ToastDefaultDemo />
              <ToastSuccessDemo />
              <ToastErrorDemo />
              <ToastWarningDemo />
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con acción</h2>
        <p className="text-sm text-muted-foreground">
          Agrega un botón de acción al toast con la opción{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">action</code> para
          acciones reversibles como <em>deshacer envío</em> o <em>restaurar elemento</em>.
        </p>
        <ComponentPreview
          preview={<ToastActionDemo />}
          codeHtml={actionHtml}
          code={actionCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Promesa — loading → resultado</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">toast.promise()</code> maneja
          automáticamente los estados loading, success y error de una promesa.
        </p>
        <ComponentPreview
          preview={<ToastPromiseDemo />}
          codeHtml={promiseHtml}
          code={promiseCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Opciones personalizadas</h2>
        <ComponentPreview
          preview={
            <div className="flex items-center gap-2">
              <p className="text-xs text-muted-foreground">Ejemplo de código — no interactivo</p>
            </div>
          }
          codeHtml={customHtml}
          code={customCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Toaster</h2>
        <PropsTable props={toasterProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Sonner usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="status"</code> y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-live="polite"</code> para anunciar el contenido sin interrumpir al usuario.</li>
          <li>Los toasts de error usan <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-live="assertive"</code> para anunciarse con mayor urgencia.</li>
          <li>El usuario puede pausar el auto-dismiss pasando el cursor sobre el toast.</li>
          <li>Mantén los mensajes breves — menos de 80 caracteres — para una lectura rápida.</li>
        </ul>
      </section>
    </article>
  )
}
