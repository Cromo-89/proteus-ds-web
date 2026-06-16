import type { Metadata } from "next"
import { CodeBlock } from "@/components/docs/code-block"
import { DurationDemo, EasingDemo } from "@/components/docs/motion-demos"

export const metadata: Metadata = { title: "Motion" }

const transitionCode = `{/* Transición de color en hover */}
<button className="transition-colors duration-150 ease-out
  bg-primary hover:bg-primary-hover">
  Hover me
</button>

{/* Transición con opacidad y transform */}
<div className="transition-all duration-300 ease-out
  opacity-0 translate-y-1
  data-[state=open]:opacity-100 data-[state=open]:translate-y-0">
  Dropdown content
</div>

{/* Focus ring animado */}
<input className="transition-shadow duration-100
  focus:ring-2 focus:ring-ring focus:ring-offset-2" />`

const enterExitCode = `{/* Patrón enter/exit con data-state (shadcn) */}
className="
  data-[state=open]:animate-in
  data-[state=closed]:animate-out
  data-[state=open]:fade-in-0
  data-[state=closed]:fade-out-0
  data-[state=open]:zoom-in-95
  data-[state=closed]:zoom-out-95
  data-[state=open]:duration-200
  data-[state=closed]:duration-150
"`

const reducedMotionCode = `/* Respetar prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Tailwind: variantes motion-safe: y motion-reduce: */
className="transition-transform motion-reduce:transition-none"
className="animate-spin motion-reduce:animate-none"`

export default function MotionPage() {
  return (
    <article className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">Foundations</p>
        <h1 className="text-4xl font-bold tracking-tight">Motion</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Sistema de animación basado en duraciones y curvas de easing de Tailwind.
          El movimiento en Proteus es <strong className="text-foreground">funcional</strong> — existe
          para guiar la atención y dar feedback, no para decorar.
        </p>
      </div>

      {/* Principios */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Principios</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { icon: "bolt",          title: "Rápido",      desc: "La mayoría de las transiciones de UI deben durar 150ms o menos. El usuario no espera." },
            { icon: "psychology",    title: "Intencional", desc: "Cada animación tiene un propósito: confirmar acción, guiar la vista, indicar estado." },
            { icon: "accessibility", title: "Inclusivo",   desc: "Todo el movimiento respeta prefers-reduced-motion. La UI debe funcionar sin animaciones." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-4">
              <span
                className="material-symbols-rounded text-primary mb-2 block"
                style={{ fontSize: 20, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}
                aria-hidden
              >
                {item.icon}
              </span>
              <p className="font-medium text-sm">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Duraciones */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Duraciones</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Haz clic en una fila para ver la duración en vivo.
          </p>
        </div>
        <DurationDemo />
      </section>

      {/* Easing */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Curvas de easing</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            La curva define cómo cambia la velocidad a lo largo de la animación.
            Pasa el cursor sobre cada tarjeta para ver la curva en acción.
          </p>
        </div>
        <EasingDemo />
      </section>

      {/* Transiciones */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Transiciones</h2>
        <p className="text-sm text-muted-foreground">
          Usa siempre las utilidades de Tailwind — nunca CSS en línea para animaciones de UI.
        </p>
        <CodeBlock code={transitionCode} lang="tsx" />
      </section>

      {/* Enter / Exit */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Patrón enter / exit</h2>
        <p className="text-sm text-muted-foreground">
          Proteus usa el patrón <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">data-[state]</code> de
          shadcn para animar entrada y salida de overlays.
          Enter más lento que exit — el usuario nota la llegada, no la partida.
        </p>
        <CodeBlock code={enterExitCode} lang="tsx" />
      </section>

      {/* Reduced motion */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">prefers-reduced-motion</h2>
        <p className="text-sm text-muted-foreground">
          Algunos usuarios tienen sensibilidad al movimiento. Respetar esta preferencia
          del sistema operativo es parte de la accesibilidad básica.
        </p>
        <CodeBlock code={reducedMotionCode} lang="css" />
        <div className="rounded-xl border border-warning-bg bg-warning-wash p-4">
          <div className="flex gap-3">
            <span
              className="material-symbols-rounded text-warning shrink-0 mt-0.5"
              style={{ fontSize: 16, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 16" }}
              aria-hidden
            >
              warning
            </span>
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Regla:</strong> si una animación es puramente
              decorativa, envuélvela en{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono">motion-safe:</code>. Si
              es funcional, reemplázala por una versión estática con{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono">motion-reduce:</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Cheatsheet */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Cheatsheet</h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="overflow-x-auto">
          <table className="w-full min-w-max text-xs">
            <thead>
              <tr className="border-b border-border bg-background-secondary">
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Contexto</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Duración</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Easing</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground hidden sm:table-cell">Propiedad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Hover color / bg",     "150ms",  "ease-out",    "transition-colors"],
                ["Focus ring",           "100ms",  "ease-out",    "transition-shadow"],
                ["Active / press",       "75ms",   "ease-out",    "transition-transform"],
                ["Toggle / checkbox",    "200ms",  "ease-in-out", "transition-all"],
                ["Dropdown / tooltip",   "150ms",  "ease-out",    "animate-in fade-in"],
                ["Modal / sheet",        "300ms",  "ease-out",    "animate-in slide-in"],
                ["Toast / notification", "200ms",  "ease-out",    "animate-in slide-in"],
                ["Skeleton loader",      "1500ms", "linear",      "animate-pulse"],
              ].map(([ctx, dur, ease, prop]) => (
                <tr key={ctx as string}>
                  <td className="px-4 py-2.5 text-muted-foreground">{ctx}</td>
                  <td className="px-4 py-2.5 font-mono text-primary">{dur}</td>
                  <td className="px-4 py-2.5 font-mono text-muted-foreground">{ease}</td>
                  <td className="px-4 py-2.5 font-mono text-muted-foreground hidden sm:table-cell">{prop}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </section>
    </article>
  )
}
