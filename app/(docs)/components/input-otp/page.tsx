import type { Metadata } from "next"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { Label } from "@/components/ui/label"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Input OTP" }

const basicCode = `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`

const separatorCode = `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`

const withLabelCode = `<div className="flex flex-col gap-2">
  <Label htmlFor="otp-field">Código de verificación</Label>
  <InputOTP id="otp-field" maxLength={6}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
  <p className="text-xs text-muted-foreground">
    Ingresa el código de 6 dígitos enviado a tu teléfono.
  </p>
</div>`

const controlledCode = `"use client"
import { useState } from "react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

export function OtpForm() {
  const [value, setValue] = useState("")

  return (
    <div className="flex flex-col gap-3">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        onComplete={(code) => {
          // Verificar código con el backend
          console.log("Código completo:", code)
        }}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        {6 - value.length} caracteres restantes
      </p>
    </div>
  )
}`

const otpProps = [
  {
    name: "maxLength",
    type: "number",
    defaultValue: "—",
    required: true,
    description: "Número de dígitos del código (longitud total del OTP).",
  },
  {
    name: "value",
    type: "string",
    defaultValue: "—",
    description: "Valor controlado del OTP. Úsalo con onChange.",
  },
  {
    name: "onChange",
    type: "(value: string) => void",
    defaultValue: "—",
    description: "Callback que se dispara con cada carácter ingresado.",
  },
  {
    name: "onComplete",
    type: "(value: string) => void",
    defaultValue: "—",
    description: "Callback cuando todos los slots están completos.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Deshabilita el input completo e impide la edición.",
  },
  {
    name: "inputMode",
    type: '"numeric" | "text" | "decimal"',
    defaultValue: '"numeric"',
    description: "Tipo de teclado virtual en dispositivos móviles.",
  },
  {
    name: "pattern",
    type: "string",
    defaultValue: "—",
    description: "Regex para restringir los caracteres aceptados.",
  },
  {
    name: "autoFocus",
    type: "boolean",
    defaultValue: "false",
    description: "Enfoca el primer slot automáticamente al montar.",
  },
]

const slotProps = [
  {
    name: "index",
    type: "number",
    defaultValue: "—",
    required: true,
    description: "Posición del slot dentro del OTP (base 0).",
  },
]

export default async function InputOtpPage() {
  const [basicHtml, separatorHtml, withLabelHtml, controlledHtml] = await Promise.all([
    highlight(basicCode),
    highlight(separatorCode),
    highlight(withLabelCode),
    highlight(controlledCode),
  ])

  return (
    <article className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="default" className="bg-success-bg text-success border-transparent rounded-full">
            Stable
          </Badge>
          <a
            href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Input OTP</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Input de un solo dígito por slot para códigos de verificación, 2FA y contraseñas de un uso.
            Maneja foco automático entre slots, pegado masivo y teclado numérico en mobile.
          </p>
        </div>
      </div>

      {/* Básico */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          OTP de 6 dígitos en un solo grupo. Al pegar un código completo, los slots se llenan automáticamente.
        </p>
        <ComponentPreview
          preview={
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      {/* Con separador */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con separador</h2>
        <p className="text-sm text-muted-foreground">
          Divide el OTP en grupos con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">InputOTPSeparator</code> para
          mejorar la legibilidad en códigos largos.
        </p>
        <ComponentPreview
          preview={
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          }
          codeHtml={separatorHtml}
          code={separatorCode}
        />
      </section>

      {/* Con Label */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con Label y ayuda</h2>
        <p className="text-sm text-muted-foreground">
          Siempre acompaña el OTP con un label descriptivo y texto de ayuda sobre el origen del código.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-2">
              <Label htmlFor="otp-demo">Código de verificación</Label>
              <InputOTP id="otp-demo" maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-xs text-muted-foreground">
                Ingresa el código de 6 dígitos enviado a tu teléfono.
              </p>
            </div>
          }
          codeHtml={withLabelHtml}
          code={withLabelCode}
        />
      </section>

      {/* Controlado */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Uso controlado</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">value</code> +{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onChange</code> para controlar
          el estado externamente, y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onComplete</code> para disparar
          la verificación cuando el usuario termina.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-2 items-center">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-xs text-muted-foreground">Escribe para ver el estado en tiempo real</p>
            </div>
          }
          codeHtml={controlledHtml}
          code={controlledCode}
        />
      </section>

      {/* Props */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Props — InputOTP</h2>
          <PropsTable props={otpProps} />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Props — InputOTPSlot</h2>
          <PropsTable props={slotProps} />
        </div>
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>El foco avanza automáticamente al slot siguiente al ingresar un dígito.</li>
          <li>Soporta pegado del código completo desde el portapapeles en un solo gesto.</li>
          <li>Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">inputMode="numeric"</code> para mostrar el teclado numérico en iOS y Android.</li>
          <li>Siempre incluye un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Label>"}</code> o <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> descriptivo.</li>
          <li>Acompaña los errores de verificación con un mensaje de texto, no solo color rojo.</li>
        </ul>
      </section>
    </article>
  )
}
