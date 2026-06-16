import type { Metadata } from "next"
import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Typography" }

const typeScale = [
  { name: "text-xs",   size: "12px", lh: "1.5rem / 16px",  weight: "Variable", sample: "Etiquetas, caps, metadatos" },
  { name: "text-sm",   size: "14px", lh: "1.25rem / 20px", weight: "Variable", sample: "Cuerpo secundario, sidebar, tooltips" },
  { name: "text-base", size: "16px", lh: "1.5rem / 24px",  weight: "Variable", sample: "Cuerpo principal, párrafos" },
  { name: "text-lg",   size: "18px", lh: "1.75rem / 28px", weight: "Variable", sample: "Lead paragraphs, intro copy" },
  { name: "text-xl",   size: "20px", lh: "1.75rem / 28px", weight: "Variable", sample: "Subheadings, card titles" },
  { name: "text-2xl",  size: "24px", lh: "2rem / 32px",    weight: "Variable", sample: "Section headers" },
  { name: "text-3xl",  size: "30px", lh: "2.25rem / 36px", weight: "Variable", sample: "Page titles secundarios" },
  { name: "text-4xl",  size: "36px", lh: "2.5rem / 40px",  weight: "Variable", sample: "Page titles principales" },
  { name: "text-5xl",  size: "48px", lh: "1",              weight: "Variable", sample: "Hero headings" },
  { name: "text-6xl",  size: "60px", lh: "1",              weight: "Variable", sample: "Display — uso excepcional" },
]

const fontWeights = [
  { class: "font-normal",   value: "400", label: "Normal",   desc: "Cuerpo de texto, descripciones" },
  { class: "font-medium",   value: "500", label: "Medium",   desc: "Labels, navegación, elementos de UI" },
  { class: "font-semibold", value: "600", label: "Semibold", desc: "Subheadings, badges, énfasis" },
  { class: "font-bold",     value: "700", label: "Bold",     desc: "Headings, CTAs, h1–h3" },
]

const usageCode = `{/* Sans-serif: Inter — texto general */}
<p className="font-sans text-base text-foreground">
  Cuerpo de texto en Inter
</p>

{/* Mono: JetBrains Mono — código */}
<code className="font-mono text-sm text-muted-foreground">
  npm install @proteus-ds/core
</code>

{/* Heading con tracking ajustado */}
<h1 className="font-bold tracking-tight text-4xl text-foreground">
  Proteus Design System
</h1>

{/* Label uppercase */}
<p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
  Foundations
</p>`

const scaleCode = `{/* Texto principal */}
<p className="text-base">Cuerpo de texto</p>
<p className="text-sm text-muted-foreground">Texto secundario</p>
<p className="text-xs text-muted-foreground">Metadato / label</p>

{/* Headings */}
<h1 className="text-4xl font-bold tracking-tight">Título de página</h1>
<h2 className="text-2xl font-semibold tracking-tight">Sección</h2>
<h3 className="text-xl font-semibold">Subsección</h3>`

export default function TypographyPage() {
  return (
    <article className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">Foundations</p>
        <h1 className="text-4xl font-bold tracking-tight">Typography</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Sistema tipográfico basado en dos familias: <strong className="text-foreground">Inter</strong> para
          texto de UI y <strong className="text-foreground">JetBrains Mono</strong> para código.
          Escala fluida en 10 pasos, con weights de 400 a 700.
        </p>
      </div>

      {/* Fuentes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Familias tipográficas</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Inter */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="border-b border-border bg-background-secondary px-5 py-3">
              <p className="text-sm font-medium">Inter</p>
              <p className="text-xs text-muted-foreground">font-sans · Variable (100–900)</p>
            </div>
            <div className="p-5 space-y-2">
              <p className="font-sans text-4xl font-bold leading-none tracking-tight">Aa</p>
              <p className="font-sans text-base text-foreground leading-relaxed">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789 !@#$%&
              </p>
              <p className="font-sans text-xs text-muted-foreground mt-1">
                UI, cuerpo, headings, labels
              </p>
            </div>
          </div>

          {/* JetBrains Mono */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="border-b border-border bg-background-secondary px-5 py-3">
              <p className="text-sm font-medium">JetBrains Mono</p>
              <p className="text-xs text-muted-foreground">font-mono · Variable (100–800)</p>
            </div>
            <div className="p-5 space-y-2">
              <p className="font-mono text-4xl font-bold leading-none tracking-tight">Aa</p>
              <p className="font-mono text-base text-foreground leading-relaxed">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789 !@#$%&
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                Código, snippets, tokens, monoespaciado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Escala tipográfica */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Escala tipográfica</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            10 pasos de texto basados en la escala de Tailwind. Cada clase mapea directamente a una utilidad CSS.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="overflow-x-auto">
          <table className="w-full min-w-max text-sm">
            <thead>
              <tr className="border-b border-border bg-background-secondary">
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground w-28">Clase</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground w-16">Size</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground hidden sm:table-cell">Line height</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Uso típico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {typeScale.map(({ name, size, lh, sample }) => (
                <tr key={name}>
                  <td className="px-4 py-3">
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                      {name}
                    </code>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{size}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground hidden sm:table-cell">{lh}</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">{sample}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </section>

      {/* Specimen en vivo */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Specimen</h2>
        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
          <p className="text-6xl font-bold tracking-tight leading-none">60px Display</p>
          <p className="text-5xl font-bold tracking-tight leading-none">48px Hero</p>
          <p className="text-4xl font-bold tracking-tight">36px Page Title</p>
          <p className="text-3xl font-semibold tracking-tight">30px Section</p>
          <p className="text-2xl font-semibold tracking-tight">24px Subheading</p>
          <p className="text-xl font-semibold">20px Card Title</p>
          <p className="text-lg text-muted-foreground">18px Lead paragraph — texto introductorio con algo de peso visual.</p>
          <p className="text-base">16px Base — el tamaño estándar para cuerpo de texto en la interfaz.</p>
          <p className="text-sm text-muted-foreground">14px Small — texto secundario, sidebar, metadatos, tooltips.</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">12px XS — LABELS, CAPS, OVERLINES</p>
          <p className="font-mono text-sm text-primary">import &#123; Button &#125; from &quot;@proteus-ds/core&quot;</p>
        </div>
      </section>

      {/* Font weights */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Font weights</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Inter y JetBrains Mono son fuentes variables — cualquier valor entre 100 y 900 es válido.
            Proteus usa estos cuatro como estándar.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-border divide-y divide-border">
          {fontWeights.map(({ class: cls, value, label, desc }) => (
            <div key={cls} className="flex items-center gap-4 px-5 py-4">
              <p className={`${cls} text-2xl w-52 shrink-0 leading-none`}>{label}</p>
              <div className="flex flex-col gap-0.5">
                <code className="font-mono text-xs text-muted-foreground">{cls} · {value}</code>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Letter spacing */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Letter spacing</h2>
        <div className="overflow-hidden rounded-xl border border-border divide-y divide-border">
          {[
            { cls: "tracking-tight",  value: "-0.025em", uso: "Headings grandes (text-3xl+)", sample: "Proteus Design" },
            { cls: "tracking-normal", value: "0em",      uso: "Cuerpo de texto, default",    sample: "Proteus Design" },
            { cls: "tracking-wide",   value: "0.025em",  uso: "Uso excepcional",              sample: "Proteus Design" },
            { cls: "tracking-wider",  value: "0.05em",   uso: "Labels uppercase (text-xs)",   sample: "FOUNDATIONS" },
            { cls: "tracking-widest", value: "0.1em",    uso: "Overlines decorativas",        sample: "OVERLINE TEXT" },
          ].map(({ cls, value, uso, sample }) => (
            <div key={cls} className="flex items-center gap-4 px-5 py-3.5">
              <p className={`${cls} text-base w-52 shrink-0 font-medium`}>{sample}</p>
              <div>
                <code className="font-mono text-xs text-muted-foreground">{cls} · {value}</code>
                <p className="text-xs text-muted-foreground mt-0.5">{uso}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Uso */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Patrones de uso</h2>
        <p className="text-sm text-muted-foreground">
          Combina siempre clase de tamaño + weight + color semántico. Evita valores hardcoded.
        </p>
        <CodeBlock code={usageCode} lang="tsx" />
      </section>

      {/* Escala completa */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Escala completa en código</h2>
        <CodeBlock code={scaleCode} lang="tsx" />
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>Tamaño mínimo para cuerpo de texto: <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">text-sm</code> (14px).</li>
          <li>No uses <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">text-xs</code> para texto de lectura larga — solo etiquetas y metadata.</li>
          <li>Los headings deben seguir jerarquía semántica: <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">h1 → h2 → h3</code> sin saltar niveles.</li>
          <li>Contraste mínimo WCAG AA: texto normal 4.5:1, texto grande (18px+ bold) 3:1.</li>
          <li>Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">text-foreground</code> y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">text-muted-foreground</code> — nunca valores OKLCH literales.</li>
        </ul>
      </section>
    </article>
  )
}
