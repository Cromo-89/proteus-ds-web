import type { Metadata } from "next"
import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Spacing" }

const scale = [
  { token: "0",   px: "0px",   rem: "0" },
  { token: "px",  px: "1px",   rem: "1px" },
  { token: "0.5", px: "2px",   rem: "0.125rem" },
  { token: "1",   px: "4px",   rem: "0.25rem" },
  { token: "1.5", px: "6px",   rem: "0.375rem" },
  { token: "2",   px: "8px",   rem: "0.5rem" },
  { token: "2.5", px: "10px",  rem: "0.625rem" },
  { token: "3",   px: "12px",  rem: "0.75rem" },
  { token: "3.5", px: "14px",  rem: "0.875rem" },
  { token: "4",   px: "16px",  rem: "1rem" },
  { token: "5",   px: "20px",  rem: "1.25rem" },
  { token: "6",   px: "24px",  rem: "1.5rem" },
  { token: "7",   px: "28px",  rem: "1.75rem" },
  { token: "8",   px: "32px",  rem: "2rem" },
  { token: "9",   px: "36px",  rem: "2.25rem" },
  { token: "10",  px: "40px",  rem: "2.5rem" },
  { token: "11",  px: "44px",  rem: "2.75rem" },
  { token: "12",  px: "48px",  rem: "3rem" },
  { token: "14",  px: "56px",  rem: "3.5rem" },
  { token: "16",  px: "64px",  rem: "4rem" },
  { token: "20",  px: "80px",  rem: "5rem" },
  { token: "24",  px: "96px",  rem: "6rem" },
]

const usageCode = `{/* Padding */}
<div className="p-4">...</div>          {/* 16px todos los lados */}
<div className="px-6 py-3">...</div>    {/* 24px horizontal, 12px vertical */}
<div className="pt-8 pb-4">...</div>    {/* 32px top, 16px bottom */}

{/* Gap en flex/grid */}
<div className="flex gap-3">...</div>   {/* 12px entre hijos */}
<div className="grid gap-4">...</div>   {/* 16px entre celdas */}

{/* Margin */}
<p className="mt-2 mb-1">...</p>        {/* 8px top, 4px bottom */}
<div className="mx-auto">...</div>      {/* centrado horizontal */}`

const componentSpacingCode = `{/* Botón: padding interno */}
<button className="px-4 py-2 text-sm">...</button>    {/* default */}
<button className="px-3 py-1.5 text-xs">...</button>  {/* sm */}
<button className="px-5 py-2.5 text-base">...</button> {/* lg */}

{/* Card: padding interno */}
<div className="rounded-xl border border-border bg-card p-5">
  <h3 className="font-semibold">Título</h3>
  <p className="mt-2 text-sm text-muted-foreground">Descripción</p>
</div>

{/* Formulario: gap entre campos */}
<form className="space-y-4">
  <div>...</div>
  <div>...</div>
</form>`

export default function SpacingPage() {
  return (
    <article className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">Foundations</p>
        <h1 className="text-4xl font-bold tracking-tight">Spacing</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Sistema de espaciado basado en una unidad base de{" "}
          <strong className="text-foreground">4px</strong>. Todos los valores son múltiplos de
          esa unidad, lo que garantiza ritmo visual consistente en toda la interfaz.
        </p>
      </div>

      {/* Base unit */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Unidad base</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { icon: "straighten", title: "1 unidad = 4px", desc: "Todos los tokens son múltiplos de 4px (0.25rem)." },
            { icon: "grid_4x4",   title: "Escala consistente", desc: "22 pasos cubre desde 1px de borde hasta 96px de sección." },
            { icon: "hub",        title: "Tailwind nativo", desc: "Usa directamente las utilidades p-*, m-*, gap-* sin configuración extra." },
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

      {/* Visual scale */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Escala visual</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Cada barra representa la longitud real del token en pantalla.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 space-y-2.5 overflow-x-auto">
          {[
            { token: "1",  px: "4px"  },
            { token: "2",  px: "8px"  },
            { token: "3",  px: "12px" },
            { token: "4",  px: "16px" },
            { token: "5",  px: "20px" },
            { token: "6",  px: "24px" },
            { token: "8",  px: "32px" },
            { token: "10", px: "40px" },
            { token: "12", px: "48px" },
            { token: "16", px: "64px" },
            { token: "20", px: "80px" },
            { token: "24", px: "96px" },
          ].map(({ token, px }) => (
            <div key={token} className="flex items-center gap-4 min-w-0">
              <code className="font-mono text-xs text-muted-foreground w-12 shrink-0 text-right">{token}</code>
              <div
                className="h-5 rounded bg-primary/30 border border-primary/50 shrink-0"
                style={{ width: px }}
              />
              <span className="text-xs text-muted-foreground font-mono">{px}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Full scale table */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Escala completa</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Los tokens mapean directamente a utilidades de Tailwind: <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">p-&#123;token&#125;</code>,{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">m-&#123;token&#125;</code>,{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">gap-&#123;token&#125;</code>.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-background-secondary">
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Token</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">px</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">rem</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground hidden sm:table-cell">Usos frecuentes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { token: "0.5", px: "2px",  rem: "0.125rem", uso: "Separadores mínimos" },
                { token: "1",   px: "4px",  rem: "0.25rem",  uso: "Gaps mínimos, inset de íconos" },
                { token: "1.5", px: "6px",  rem: "0.375rem", uso: "Badge padding, dot indicators" },
                { token: "2",   px: "8px",  rem: "0.5rem",   uso: "Padding XS, gap tight" },
                { token: "2.5", px: "10px", rem: "0.625rem", uso: "Padding SM vertical" },
                { token: "3",   px: "12px", rem: "0.75rem",  uso: "Padding SM, gap SM" },
                { token: "3.5", px: "14px", rem: "0.875rem", uso: "Íconos con texto" },
                { token: "4",   px: "16px", rem: "1rem",     uso: "Padding base, gap base" },
                { token: "5",   px: "20px", rem: "1.25rem",  uso: "Padding card, gap LG" },
                { token: "6",   px: "24px", rem: "1.5rem",   uso: "Padding modal, sections" },
                { token: "8",   px: "32px", rem: "2rem",     uso: "Secciones, headers" },
                { token: "10",  px: "40px", rem: "2.5rem",   uso: "Spacing entre bloques" },
                { token: "12",  px: "48px", rem: "3rem",     uso: "Separación entre secciones" },
                { token: "16",  px: "64px", rem: "4rem",     uso: "Padding de página" },
                { token: "20",  px: "80px", rem: "5rem",     uso: "Secciones hero" },
                { token: "24",  px: "96px", rem: "6rem",     uso: "Secciones hero grandes" },
              ].map(({ token, px, rem, uso }) => (
                <tr key={token}>
                  <td className="px-4 py-2.5">
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                      {token}
                    </code>
                  </td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{px}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{rem}</td>
                  <td className="px-4 py-2.5 text-xs text-muted-foreground hidden sm:table-cell">{uso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Uso en código */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Uso básico</h2>
        <p className="text-sm text-muted-foreground">
          Usa siempre los tokens de la escala. Nunca valores arbitrarios como{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">p-[13px]</code>.
        </p>
        <CodeBlock code={usageCode} lang="tsx" />
      </section>

      {/* Espaciado de componentes */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Espaciado en componentes</h2>
        <p className="text-sm text-muted-foreground">
          Patrones estándar que Proteus usa internamente en botones, cards y formularios.
        </p>
        <CodeBlock code={componentSpacingCode} lang="tsx" />
      </section>

      {/* Principios */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Principios</h2>
        <div className="overflow-hidden rounded-xl border border-border divide-y divide-border">
          {[
            {
              rule: "Prefiere gap sobre margin",
              desc: "En layouts flex y grid, usa gap en el contenedor en lugar de margin en cada hijo. El resultado es más predecible y fácil de mantener.",
            },
            {
              rule: "Usa space-y-* para listas verticales",
              desc: "Para stacks de elementos similares (formularios, listas), space-y-4 es más limpio que margin individual en cada elemento.",
            },
            {
              rule: "Padding consistente en cards",
              desc: "Usa p-4 o p-5 como base para el padding interno de cards. Mantén el mismo valor en todos los lados o usa px-/py- con coherencia.",
            },
            {
              rule: "Nunca valores arbitrarios",
              desc: "Si ningún token de la escala encaja, es señal de que el diseño necesita ajustarse. Los valores arbitrarios rompen el ritmo visual.",
            },
          ].map(({ rule, desc }) => (
            <div key={rule} className="px-5 py-4">
              <p className="font-medium text-sm">{rule}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
