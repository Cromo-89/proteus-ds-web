"use client"

import { useState } from "react"

const durations = [
  { token: "duration-75",  ms: "75ms",  uso: "Micro-interacciones: hover de color, cambio de ícono" },
  { token: "duration-100", ms: "100ms", uso: "Feedback inmediato: focus ring, active press" },
  { token: "duration-150", ms: "150ms", uso: "Default — transiciones de UI: botones, inputs, badges" },
  { token: "duration-200", ms: "200ms", uso: "Transiciones de estado: tabs, toggles, checkboxes" },
  { token: "duration-300", ms: "300ms", uso: "Elementos que entran/salen: dropdowns, tooltips" },
  { token: "duration-500", ms: "500ms", uso: "Animaciones complejas: modales, drawers, acordeones" },
  { token: "duration-700", ms: "700ms", uso: "Transiciones de página, loaders, onboarding" },
]

const easings = [
  {
    name: "ease-out",
    css: "cubic-bezier(0, 0, 0.2, 1)",
    uso: "Elementos que entran en pantalla. Empieza rápido, termina suave.",
    contexto: "Dropdown abre, modal aparece, toast entra",
  },
  {
    name: "ease-in",
    css: "cubic-bezier(0.4, 0, 1, 1)",
    uso: "Elementos que salen de pantalla. Empieza suave, termina rápido.",
    contexto: "Dropdown cierra, modal se oculta, toast sale",
  },
  {
    name: "ease-in-out",
    css: "cubic-bezier(0.4, 0, 0.2, 1)",
    uso: "Cambios de estado que no implican entrada ni salida.",
    contexto: "Toggle, tab activo, loading state",
  },
  {
    name: "linear",
    css: "linear",
    uso: "Animaciones continuas o de progreso. Velocidad constante.",
    contexto: "Progress bar, spinner, skeleton",
  },
]

export function DurationDemo() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="overflow-hidden rounded-xl border border-border divide-y divide-border">
      {durations.map(({ token, ms, uso }) => (
        <button
          key={token}
          onClick={() => setActive(active === token ? null : token)}
          className="w-full text-left px-5 py-3.5 flex items-center gap-4 hover:bg-background-secondary transition-colors duration-150"
        >
          <div className="w-32 shrink-0 h-1.5 rounded-full bg-border overflow-hidden">
            <div
              className="h-full rounded-full bg-primary"
              style={{
                width: active === token ? "100%" : "0%",
                transition: active === token ? `width ${ms} ease-out` : "none",
              }}
            />
          </div>
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground shrink-0">
              {token}
            </code>
            <span className="font-mono text-xs text-primary font-medium shrink-0">{ms}</span>
            <span className="text-xs text-muted-foreground truncate hidden sm:block">{uso}</span>
          </div>
        </button>
      ))}
    </div>
  )
}

export function EasingDemo() {
  return (
    <>
      <style>{`
        @keyframes easing-demo {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(72px); }
        }
      `}</style>
      <div className="space-y-3">
        {easings.map(({ name, css, uso, contexto }, i) => (
          <div key={name} className="overflow-hidden rounded-xl border border-border">
            <div className="grid sm:grid-cols-[auto_1fr] divide-y sm:divide-y-0 sm:divide-x divide-border">
              {/* Demo con animación continua — cada card usa su propia curva */}
              <div className="flex items-center bg-background-secondary px-6 py-6 sm:w-48">
                <div
                  className="size-5 rounded-md bg-primary"
                  style={{
                    animation: `easing-demo 1.6s ${css} infinite`,
                    animationDelay: `${i * -0.4}s`,
                  }}
                />
              </div>
              <div className="p-4 space-y-1.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                    {name}
                  </code>
                  <code className="font-mono text-[10px] text-muted-foreground">{css}</code>
                </div>
                <p className="text-xs text-foreground">{uso}</p>
                <p className="text-[11px] text-muted-foreground">{contexto}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
