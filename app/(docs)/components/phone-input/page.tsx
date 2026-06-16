import type { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Phone Input" }

const basicCode = `<div className="flex flex-col gap-1.5 w-72">
  <Label htmlFor="phone">Teléfono</Label>
  <InputGroup>
    <InputGroupAddon>
      <InputGroupText>+54</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput
      id="phone"
      type="tel"
      placeholder="11 1234-5678"
      aria-label="Número de teléfono"
    />
  </InputGroup>
</div>`

const selectCode = `<div className="flex flex-col gap-1.5">
  <Label>Teléfono</Label>
  <div className="flex gap-2 w-72">
    <select
      aria-label="Código de país"
      className="h-8 rounded-lg border border-input bg-transparent px-2 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <option value="+54">🇦🇷 +54</option>
      <option value="+52">🇲🇽 +52</option>
      <option value="+34">🇪🇸 +34</option>
      <option value="+1">🇺🇸 +1</option>
    </select>
    <Input
      type="tel"
      placeholder="11 1234-5678"
      className="flex-1"
    />
  </div>
</div>`

const statesCode = `<div className="flex flex-col gap-3 w-72">
  {/* Default */}
  <InputGroup>
    <InputGroupAddon>
      <InputGroupText>+54</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput type="tel" placeholder="11 1234-5678" />
  </InputGroup>

  {/* Disabled */}
  <InputGroup>
    <InputGroupAddon>
      <InputGroupText>+54</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput type="tel" placeholder="11 1234-5678" disabled />
  </InputGroup>

  {/* Error */}
  <InputGroup>
    <InputGroupAddon>
      <InputGroupText>+54</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput type="tel" placeholder="11 1234-5678" aria-invalid />
  </InputGroup>
</div>`

export default async function PhoneInputPage() {
  const [basicHtml, selectHtml, statesHtml] = await Promise.all([
    highlight(basicCode),
    highlight(selectCode),
    highlight(statesCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Phone Input</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Campo para capturar números de teléfono con código de país. Es un patrón
            de composición sobre{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">InputGroup</code>{" "}
            — desde un prefijo fijo hasta un selector completo de país.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Prefijo fijo</h2>
        <p className="text-sm text-muted-foreground">
          Cuando el mercado objetivo es un solo país, muestra el código directamente
          en el addon izquierdo.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="phone-demo">Teléfono</Label>
              <InputGroup className="w-72">
                <InputGroupAddon>
                  <InputGroupText>+54</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput
                  id="phone-demo"
                  type="tel"
                  placeholder="11 1234-5678"
                  aria-label="Número de teléfono"
                />
              </InputGroup>
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con selector de país</h2>
        <p className="text-sm text-muted-foreground">
          Para productos internacionales, combina un{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<select>"}</code>{" "}
          nativo con el{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Input</code>{" "}
          de teléfono.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-1.5">
              <Label>Teléfono</Label>
              <div className="flex gap-2">
                <select
                  aria-label="Código de país"
                  className="h-8 rounded-lg border border-input bg-transparent px-2 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
                >
                  <option value="+54">🇦🇷 +54</option>
                  <option value="+52">🇲🇽 +52</option>
                  <option value="+34">🇪🇸 +34</option>
                  <option value="+1">🇺🇸 +1</option>
                </select>
                <Input type="tel" placeholder="11 1234-5678" className="flex-1 max-w-48" />
              </div>
            </div>
          }
          codeHtml={selectHtml}
          code={selectCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Estados</h2>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3">
              <InputGroup className="w-72">
                <InputGroupAddon>
                  <InputGroupText>+54</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput type="tel" placeholder="11 1234-5678" />
              </InputGroup>
              <InputGroup className="w-72">
                <InputGroupAddon>
                  <InputGroupText>+54</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput type="tel" placeholder="Deshabilitado" disabled />
              </InputGroup>
              <InputGroup className="w-72">
                <InputGroupAddon>
                  <InputGroupText>+54</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput type="tel" placeholder="Número inválido" aria-invalid />
              </InputGroup>
            </div>
          }
          codeHtml={statesHtml}
          code={statesCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Recomendaciones</h2>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            Para validación seria de números de teléfono, usa{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">libphonenumber-js</code>{" "}
            — cubre formatos de más de 200 países.
          </p>
          <p>
            Guarda los números en formato E.164 (ej.{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">+5491112345678</code>)
            para consistencia en la base de datos e integraciones con APIs de SMS.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          <li>
            Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">type="tel"</code>{" "}
            en el input — en móvil muestra el teclado numérico con símbolos de teléfono.
          </li>
          <li>
            Agrega <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">autocomplete="tel"</code>{" "}
            para que el navegador complete el número automáticamente.
          </li>
          <li>
            El selector de país debe tener{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label="Código de país"</code>.
          </li>
        </ul>
      </section>
    </article>
  )
}
