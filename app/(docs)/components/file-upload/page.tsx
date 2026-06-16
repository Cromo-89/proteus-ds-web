import type { Metadata } from "next"
import { FileUpload } from "@/components/ui/file-upload"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "File Upload" }

const basicCode = `<FileUpload />`

const acceptCode = `<FileUpload
  accept="image/png, image/jpeg, image/webp"
  maxSize={5 * 1024 * 1024}
/>`

const multipleCode = `<FileUpload multiple accept=".pdf, .docx, .xlsx" />`

const disabledCode = `<FileUpload disabled />`

const fileProps = [
  {
    name: "accept",
    type: "string",
    defaultValue: "—",
    description: "Tipos de archivo permitidos (MIME types o extensiones). Se muestra como hint al usuario.",
  },
  {
    name: "multiple",
    type: "boolean",
    defaultValue: "false",
    description: "Permite seleccionar varios archivos a la vez.",
  },
  {
    name: "maxSize",
    type: "number",
    defaultValue: "—",
    description: "Tamaño máximo en bytes. Muestra un error por archivo que lo supere.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Deshabilita el dropzone y la selección de archivos.",
  },
  {
    name: "onFiles",
    type: "(files: File[]) => void",
    defaultValue: "—",
    description: "Callback con los archivos válidos seleccionados o soltados.",
  },
]

export default async function FileUploadPage() {
  const [basicHtml, acceptHtml, multipleHtml, disabledHtml] = await Promise.all([
    highlight(basicCode),
    highlight(acceptCode),
    highlight(multipleCode),
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
          <h1 className="text-4xl font-bold tracking-tight">File Upload</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Zona de carga con drag &amp; drop. Soporta click para seleccionar,
            arrastrar y soltar, validación de tamaño máximo y lista de archivos
            seleccionados con opción de eliminar cada uno.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Sin restricciones — acepta cualquier archivo. Arrastra un archivo o haz click para probar.
        </p>
        <ComponentPreview
          preview={<FileUpload className="w-full max-w-md" />}
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con tipo y tamaño máximo</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">accept</code> filtra en
          el selector nativo y muestra el hint al usuario.{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">maxSize</code> valida
          cada archivo y muestra un error si lo supera.
        </p>
        <ComponentPreview
          preview={
            <FileUpload
              accept="image/png, image/jpeg, image/webp"
              maxSize={5 * 1024 * 1024}
              className="w-full max-w-md"
            />
          }
          codeHtml={acceptHtml}
          code={acceptCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Múltiples archivos</h2>
        <p className="text-sm text-muted-foreground">
          Con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">multiple</code>{" "}
          el usuario puede seleccionar o arrastrar varios archivos a la vez.
          Cada selección nueva se acumula a la lista.
        </p>
        <ComponentPreview
          preview={
            <FileUpload
              multiple
              accept=".pdf, .docx, .xlsx"
              className="w-full max-w-md"
            />
          }
          codeHtml={multipleHtml}
          code={multipleCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Deshabilitado</h2>
        <ComponentPreview
          preview={<FileUpload disabled className="w-full max-w-md" />}
          codeHtml={disabledHtml}
          code={disabledCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={fileProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            El dropzone es un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<button>"}</code>{" "}
            activable con teclado — Tab + Enter abre el selector de archivos.
          </li>
          <li>
            El <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<input type=\"file\">"}</code>{" "}
            está oculto con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">sr-only</code>{" "}
            pero sigue siendo accesible para tecnologías de asistencia.
          </li>
          <li>
            Cada botón de eliminar tiene{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            con el nombre del archivo (ej. &quot;Eliminar informe.pdf&quot;).
          </li>
          <li>
            Para subidas largas, muestra el progreso con un{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Progress>"}</code>{" "}
            y usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-live="polite"</code>{" "}
            para anunciar la finalización.
          </li>
        </ul>
      </section>
    </article>
  )
}
