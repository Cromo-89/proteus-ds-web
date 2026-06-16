import type { Metadata } from "next"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Accessibility" }

const ariaCode = `{/* Botón sin texto visible — siempre requiere aria-label */}
<button aria-label="Cerrar diálogo">
  <Icon name="close" size={20} />
</button>

{/* Ícono decorativo — ocultar de screen readers */}
<Icon name="star" size={16} aria-hidden="true" />

{/* Descripción de región */}
<nav aria-label="Navegación principal">...</nav>
<nav aria-label="Breadcrumb">...</nav>

{/* Estado de loading */}
<button aria-busy="true" aria-label="Guardando cambios">
  <Spinner />
</button>`

const keyboardCode = `{/* Focus visible siempre activo */}
.element:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

{/* No uses outline:none sin un reemplazo visible */}
/* ✗ Mal */
*:focus { outline: none; }

/* ✓ Bien */
*:focus:not(:focus-visible) { outline: none; }
*:focus-visible { outline: 2px solid var(--ring); }`

const colorCode = `{/* No comuniques estado solo con color */}

{/* ✗ Mal: solo color diferencia el estado */}
<span className={error ? "text-destructive" : "text-success"}>
  {message}
</span>

{/* ✓ Bien: color + ícono + texto */}
{error && (
  <span className="flex items-center gap-1.5 text-destructive text-sm">
    <Icon name="error" size={16} />
    {errorMessage}
  </span>
)}
{success && (
  <span className="flex items-center gap-1.5 text-success text-sm">
    <Icon name="check_circle" size={16} />
    {successMessage}
  </span>
)}`

const formA11yCode = `{/* Vincula siempre el label con el input */}
<div>
  <Label htmlFor="email">Correo electrónico</Label>
  <Input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid={!!error}
    aria-describedby={error ? "email-error" : undefined}
  />
  {error && (
    <p id="email-error" className="text-sm text-destructive mt-1" role="alert">
      {error}
    </p>
  )}
</div>`

const focusTrapCode = `{/* Dialogs y popovers deben atrapar el foco */}
{/* Base UI maneja esto automáticamente en Dialog, Popover, Sheet */}

{/* Al cerrar un overlay, devuelve el foco al trigger */}
<Dialog onOpenChange={(open) => {
  if (!open) triggerRef.current?.focus()
}}>
  ...
</Dialog>`

export default function AccessibilityPage() {
  return (
    <article className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-info/10 text-info border-info/20 rounded-full">Guideline</Badge>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Accessibility</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Proteus DS usa <strong className="text-foreground">Base UI</strong> como capa de
            primitivos, lo que garantiza semántica ARIA, gestión de foco y navegación por teclado
            en los componentes interactivos. Esta guía cubre los principios que se aplican en
            el nivel de composición — donde Base UI no puede ayudarte.
          </p>
        </div>
      </div>

      {/* Nivel de conformidad */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Objetivo de conformidad</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              level: "WCAG 2.1 A",
              status: "Requerido",
              color: "text-destructive",
              desc: "Criterios fundamentales. Sin cumplirlos, la interfaz es inutilizable para usuarios con discapacidad.",
            },
            {
              level: "WCAG 2.1 AA",
              status: "Objetivo",
              color: "text-warning",
              desc: "Estándar de la industria. Incluye contraste mínimo 4.5:1 y navegación completa por teclado.",
            },
            {
              level: "WCAG 2.1 AAA",
              status: "Aspiracional",
              color: "text-success",
              desc: "Contraste ≥ 7:1 y sin límite de tiempo. Aplica donde sea factible.",
            },
          ].map(({ level, status, color, desc }) => (
            <div key={level} className="rounded-xl border p-4 space-y-2">
              <div className="flex items-center justify-between">
                <code className="text-sm font-mono font-semibold">{level}</code>
                <span className={`text-xs font-medium ${color}`}>{status}</span>
              </div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Semántica y ARIA */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Semántica y ARIA</h2>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            Prefiere siempre HTML semántico antes que ARIA.{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<button>"}</code>{" "}
            es mejor que{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<div role=\"button\">"}</code>.
            Usa ARIA solo cuando el HTML nativo no tiene un elemento para el patrón de interacción.
          </p>
          <p>
            La primera regla de ARIA: si puedes usar HTML nativo o un atributo nativo, hazlo.
          </p>
        </div>
        <CodeBlock code={ariaCode} lang="tsx" />
      </section>

      {/* Teclado */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Navegación por teclado</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 font-medium">Tecla</th>
                <th className="text-left py-2 font-medium">Comportamiento esperado</th>
              </tr>
            </thead>
            <tbody className="divide-y text-muted-foreground">
              {[
                { key: "Tab", desc: "Avanza al siguiente elemento interactivo" },
                { key: "Shift+Tab", desc: "Retrocede al elemento interactivo anterior" },
                { key: "Enter / Space", desc: "Activa el elemento enfocado (button, link, toggle)" },
                { key: "Escape", desc: "Cierra overlays (dialog, popover, dropdown) y devuelve el foco al trigger" },
                { key: "↑ ↓", desc: "Navega entre opciones en listas, menus y accordions" },
                { key: "← →", desc: "Navega entre tabs, sliders y segmented controls" },
                { key: "Home / End", desc: "Salta al primer / último ítem en listas de opciones" },
              ].map(({ key, desc }) => (
                <tr key={key}>
                  <td className="py-2 pr-4">
                    <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">{key}</kbd>
                  </td>
                  <td className="py-2">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CodeBlock code={keyboardCode} lang="tsx" />
      </section>

      {/* Color y contraste */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Color y contraste</h2>
        <p className="text-sm text-muted-foreground">
          Los tokens de Proteus DS cumplen el contraste mínimo WCAG AA (4.5:1 para texto normal,
          3:1 para texto grande e íconos) en ambos modos de color. Nunca comuniques estado
          <em> solo</em> mediante color — usa ícono o texto adicional.
        </p>
        <CodeBlock code={colorCode} lang="tsx" />
        <div className="rounded-lg border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Tip:</strong> Verifica el contraste con la DevTools
          de Chrome (Elements → Styles → color picker) o con las extensiones Axe / WAVE.
        </div>
      </section>

      {/* Formularios */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Formularios accesibles</h2>
        <p className="text-sm text-muted-foreground">
          Cada campo de formulario necesita un label vinculado, manejo de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-invalid</code>{" "}
          y mensajes de error enlazados con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-describedby</code>.
          El componente <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">FormField</code>{" "}
          maneja esto automáticamente.
        </p>
        <CodeBlock code={formA11yCode} lang="tsx" />
      </section>

      {/* Focus trap */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Gestión de foco en overlays</h2>
        <p className="text-sm text-muted-foreground">
          Los overlays modales (Dialog, Sheet) deben atrapar el foco mientras están abiertos
          y devolverlo al trigger al cerrarse. Base UI gestiona esto en todos sus componentes
          automáticamente — no necesitas configuración adicional.
        </p>
        <CodeBlock code={focusTrapCode} lang="tsx" />
      </section>

      {/* Checklist */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Checklist de revisión</h2>
        <div className="space-y-2">
          {[
            { check: "Todos los botones de ícono tienen aria-label", cat: "ARIA" },
            { check: "Los íconos decorativos tienen aria-hidden=\"true\"", cat: "ARIA" },
            { check: "Tab order es lógico y sigue el flujo visual", cat: "Teclado" },
            { check: "focus-visible es siempre visible (nunca eliminado)", cat: "Teclado" },
            { check: "Escape cierra todos los overlays", cat: "Teclado" },
            { check: "El estado (error, success) no depende solo del color", cat: "Color" },
            { check: "Contraste de texto ≥ 4.5:1 en todos los modos", cat: "Color" },
            { check: "Inputs tienen <label> vinculado con htmlFor/id", cat: "Forms" },
            { check: "Los errores usan role=\"alert\" o aria-live=\"polite\"", cat: "Forms" },
            { check: "Las imágenes tienen alt text descriptivo (o alt=\"\" si son decorativas)", cat: "Media" },
          ].map(({ check, cat }) => (
            <div key={check} className="flex items-start gap-3 rounded-lg border px-4 py-3">
              <div className="mt-0.5 size-4 rounded border border-border shrink-0" />
              <div className="flex-1">
                <p className="text-sm">{check}</p>
              </div>
              <Badge variant="outline" className="shrink-0 text-xs">{cat}</Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Recursos */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Recursos externos</h2>
        <div className="grid gap-3 sm:grid-cols-2 text-sm">
          {[
            { title: "WCAG 2.1 (W3C)", desc: "Especificación completa de criterios de accesibilidad" },
            { title: "ARIA Authoring Practices (APG)", desc: "Patrones de ARIA con ejemplos interactivos" },
            { title: "Base UI Accessibility", desc: "Cómo Base UI maneja ARIA internamente" },
            { title: "Axe DevTools", desc: "Extensión para auditar accesibilidad en el navegador" },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl border p-4">
              <p className="font-medium">{title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
