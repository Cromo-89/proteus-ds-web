import type { Metadata } from "next"
import { PasswordInput } from "@/components/ui/password-input"
import { Label } from "@/components/ui/label"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Password Input" }

const basicCode = `<PasswordInput placeholder="Contraseña" />`

const withLabelCode = `<div className="flex flex-col gap-1.5 w-72">
  <Label htmlFor="password">Contraseña</Label>
  <PasswordInput id="password" placeholder="Mínimo 8 caracteres" />
</div>`

const statesCode = `<div className="flex flex-col gap-3 w-72">
  {/* Default */}
  <PasswordInput placeholder="Contraseña" />

  {/* Deshabilitado */}
  <PasswordInput placeholder="Contraseña" disabled />

  {/* Error */}
  <PasswordInput placeholder="Contraseña" aria-invalid />
</div>`

const confirmCode = `<div className="flex flex-col gap-3 w-72">
  <div className="flex flex-col gap-1.5">
    <Label htmlFor="pwd-new">Nueva contraseña</Label>
    <PasswordInput id="pwd-new" placeholder="Mínimo 8 caracteres" />
  </div>
  <div className="flex flex-col gap-1.5">
    <Label htmlFor="pwd-confirm">Confirmar contraseña</Label>
    <PasswordInput id="pwd-confirm" placeholder="Repite la contraseña" />
  </div>
</div>`

const passwordProps = [
  {
    name: "placeholder",
    type: "string",
    defaultValue: "—",
    description: "Texto de ayuda cuando el campo está vacío.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Deshabilita el campo y el botón de toggle.",
  },
  {
    name: "aria-invalid",
    type: "boolean",
    defaultValue: "false",
    description: "Activa el estilo de error (borde destructive + ring).",
  },
]

export default async function PasswordInputPage() {
  const [basicHtml, withLabelHtml, statesHtml, confirmHtml] = await Promise.all([
    highlight(basicCode),
    highlight(withLabelCode),
    highlight(statesCode),
    highlight(confirmCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Password Input</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Campo de contraseña con botón para alternar la visibilidad del texto.
            Construido sobre <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">InputGroup</code> —
            hereda todos sus estados (error, disabled) automáticamente.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          El botón alterna entre <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">type="password"</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">type="text"</code>. El demo es interactivo.
        </p>
        <ComponentPreview
          preview={<PasswordInput placeholder="Contraseña" className="w-72" />}
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con label</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-1.5 w-72">
              <Label htmlFor="pwd-demo">Contraseña</Label>
              <PasswordInput id="pwd-demo" placeholder="Mínimo 8 caracteres" />
            </div>
          }
          codeHtml={withLabelHtml}
          code={withLabelCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Estados</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3">
              <PasswordInput placeholder="Contraseña" className="w-72" />
              <PasswordInput placeholder="Contraseña" disabled className="w-72" />
              <PasswordInput placeholder="Contraseña" aria-invalid className="w-72" />
            </div>
          }
          codeHtml={statesHtml}
          code={statesCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Confirmar contraseña</h2>
        <p className="text-sm text-muted-foreground">
          Patrón estándar de cambio de contraseña con dos campos independientes.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="pwd-new-demo">Nueva contraseña</Label>
                <PasswordInput id="pwd-new-demo" placeholder="Mínimo 8 caracteres" className="w-72" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="pwd-confirm-demo">Confirmar contraseña</Label>
                <PasswordInput id="pwd-confirm-demo" placeholder="Repite la contraseña" className="w-72" />
              </div>
            </div>
          }
          codeHtml={confirmHtml}
          code={confirmCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={passwordProps} />
        <p className="text-sm text-muted-foreground">
          Acepta todas las props nativas de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<input>"}</code>{" "}
          excepto <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">type</code>{" "}
          (lo gestiona el componente internamente).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Seguridad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            Nunca implementes tu propio hashing de contraseñas en el cliente — envía el valor
            crudo por HTTPS y hashealo en el servidor (bcrypt, Argon2).
          </li>
          <li>
            Evita el atributo <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">autocomplete="off"</code> —
            los gestores de contraseñas mejoran la seguridad del usuario, no la reducen.
          </li>
          <li>
            Para campos de &quot;nueva contraseña&quot; usa{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">autocomplete="new-password"</code>;
            para login usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">autocomplete="current-password"</code>.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            El botón de toggle tiene{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code>{" "}
            dinámico: &quot;Mostrar contraseña&quot; / &quot;Ocultar contraseña&quot;.
          </li>
          <li>
            Siempre asocia un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Label>"}</code>{" "}
            al campo — los lectores de pantalla no anuncian el placeholder por defecto.
          </li>
          <li>
            Si muestras requisitos de contraseña, vincúlalos con{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-describedby</code>.
          </li>
        </ul>
      </section>
    </article>
  )
}
