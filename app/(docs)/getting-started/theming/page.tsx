import type { Metadata } from "next"
import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Theming" }

const providerCode = `// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`

const toggleCode = `// components/theme-toggle.tsx
"use client"
import { useTheme } from "next-themes"
import { Icon } from "@/components/ui/icon"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Cambiar tema"
    >
      <Icon name={isDark ? "light_mode" : "dark_mode"} size={20} />
    </button>
  )
}`

const cssVarsCode = `/* app/globals.css */

/* Modo claro */
:root {
  --background:   oklch(0.985 0 0);
  --foreground:   oklch(0.130 0 0);
  --primary:      oklch(0.500 0.185 284);
  --border:       oklch(0.880 0.005 284);
  /* ... más tokens */
}

/* Modo oscuro — clase .dark aplicada por next-themes */
.dark {
  --background:   oklch(0.130 0 0);
  --foreground:   oklch(0.985 0 0);
  --primary:      oklch(0.450 0.180 284);
  --border:       oklch(0.260 0.012 284);
  /* ... más tokens */
}`

const themeMapCode = `/* @theme inline en globals.css mapea los tokens a Tailwind */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary:    var(--primary);
  --color-border:     var(--border);
  /* ... */
}

/* Uso en componentes — las clases reaccionan al tema automáticamente */
<div className="bg-background text-foreground border-border">
  <span className="text-primary">Texto de marca</span>
</div>`

const customizeCode = `/* Para personalizar el color de marca, cambia el hue de primary */
/* Hue 284° = Indigo (default de Proteus) */

:root {
  --primary: oklch(0.500 0.185 284);  /* Indigo */
}

/* Otros hues de ejemplo: */
/* Violeta:  oklch(0.500 0.200 270) */
/* Azul:     oklch(0.500 0.185 240) */
/* Cyan:     oklch(0.500 0.160 200) */
/* Verde:    oklch(0.500 0.170 145) */
/* Naranja:  oklch(0.600 0.190 50)  */

/* Solo necesitas cambiar el hue en :root y .dark —
   todos los componentes lo heredan automáticamente */`

const useThemeCode = `// Leer el tema actual en un componente cliente
"use client"
import { useTheme } from "next-themes"

export function MyComponent() {
  const { theme, resolvedTheme } = useTheme()

  // theme: "dark" | "light" | "system"
  // resolvedTheme: el tema real si usás "system"

  return <div data-theme={resolvedTheme}>...</div>
}`

export default function ThemingPage() {
  return (
    <article className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">Getting Started</p>
        <h1 className="text-4xl font-bold tracking-tight">Theming</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Proteus usa <strong className="text-foreground">next-themes</strong> para el cambio de tema
          y <strong className="text-foreground">CSS variables OKLCH</strong> para todos los tokens de color.
          Dark mode es el tema por defecto.
        </p>
      </div>

      {/* Cómo funciona */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Cómo funciona</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: "palette",
              title: "CSS variables",
              desc: "Todos los colores son variables CSS con nombres semánticos. El tema solo cambia sus valores.",
            },
            {
              icon: "dark_mode",
              title: "Clase .dark",
              desc: "next-themes aplica la clase .dark al <html>. El CSS tiene dos bloques: :root (light) y .dark.",
            },
            {
              icon: "auto_awesome",
              title: "Sin configuración",
              desc: "Los componentes no necesitan saber el tema actual — heredan los tokens automáticamente.",
            },
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

      {/* ThemeProvider */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">ThemeProvider</h2>
        <p className="text-sm text-muted-foreground">
          Envuelve el root layout con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ThemeProvider</code>.
          El flag <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">suppressHydrationWarning</code> en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">&lt;html&gt;</code> es obligatorio para
          evitar hydration mismatches con SSR.
        </p>
        <CodeBlock code={providerCode} lang="tsx" />
      </section>

      {/* Toggle */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Theme toggle</h2>
        <p className="text-sm text-muted-foreground">
          Usa el hook <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">useTheme</code> de
          next-themes para leer y cambiar el tema desde cualquier componente cliente.
        </p>
        <CodeBlock code={toggleCode} lang="tsx" />
      </section>

      {/* CSS Variables */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">CSS variables</h2>
        <p className="text-sm text-muted-foreground">
          Los tokens se definen en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">app/globals.css</code>.
          Hay dos bloques: <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">:root</code> para
          light mode y <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">.dark</code> para dark mode.
        </p>
        <CodeBlock code={cssVarsCode} lang="css" />
      </section>

      {/* Tailwind mapping */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Mapeo a Tailwind</h2>
        <p className="text-sm text-muted-foreground">
          El bloque <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">@theme inline</code> en
          globals.css conecta las variables CSS con las utilidades de Tailwind v4.
          No hay archivo <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">tailwind.config.js</code>.
        </p>
        <CodeBlock code={themeMapCode} lang="css" />
      </section>

      {/* Personalizar */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Personalizar el color de marca</h2>
        <p className="text-sm text-muted-foreground">
          Para cambiar el color de marca de todo el sistema, solo ajusta el{" "}
          <strong className="text-foreground">hue</strong> en los tokens{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">--primary</code> de ambos modos.
          Todos los componentes lo heredan sin ningún otro cambio.
        </p>
        <CodeBlock code={customizeCode} lang="css" />

        {/* Swatch de hues */}
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="border-b border-border bg-background-secondary px-4 py-2.5">
            <p className="text-xs font-medium text-muted-foreground">Hues disponibles · oklch(0.50 0.185 H)</p>
          </div>
          <div className="flex flex-wrap gap-3 p-4">
            {[
              { name: "Violet",  hue: 270, oklch: "oklch(0.50 0.200 270)" },
              { name: "Indigo",  hue: 284, oklch: "oklch(0.50 0.185 284)" },
              { name: "Blue",    hue: 240, oklch: "oklch(0.50 0.185 240)" },
              { name: "Cyan",    hue: 200, oklch: "oklch(0.50 0.160 200)" },
              { name: "Green",   hue: 145, oklch: "oklch(0.50 0.170 145)" },
              { name: "Orange",  hue: 50,  oklch: "oklch(0.60 0.190 50)"  },
              { name: "Red",     hue: 25,  oklch: "oklch(0.54 0.200 25)"  },
              { name: "Pink",    hue: 330, oklch: "oklch(0.54 0.200 330)" },
            ].map(({ name, oklch }) => (
              <div key={name} className="flex flex-col items-center gap-1.5">
                <div
                  className="size-8 rounded-lg ring-2 ring-border"
                  style={{ background: oklch }}
                  title={oklch}
                />
                <span className="text-[10px] text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* useTheme */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Leer el tema en componentes</h2>
        <p className="text-sm text-muted-foreground">
          Solo necesitas <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">useTheme</code> cuando
          el componente necesita lógica condicional basada en el tema — por ejemplo, cambiar una imagen o un gráfico.
          Para colores, siempre usa las CSS variables.
        </p>
        <CodeBlock code={useThemeCode} lang="tsx" />
      </section>

      {/* Reglas */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Reglas</h2>
        <div className="overflow-hidden rounded-xl border border-border divide-y divide-border">
          {[
            {
              rule: "Nunca valores OKLCH literales en componentes",
              desc: 'Usa bg-background, text-foreground, etc. Si necesitás un color nuevo, primero agregalo como token en globals.css.',
            },
            {
              rule: "dark: solo como excepción",
              desc: 'Evita className="dark:bg-gray-900". Los tokens ya manejan el cambio. Usa dark: solo para ajustes finos que los tokens no cubren.',
            },
            {
              rule: "suppressHydrationWarning es obligatorio",
              desc: 'Sin este flag en <html>, Next.js lanza un warning de hydration porque next-themes modifica la clase del servidor antes de que React hidrate.',
            },
            {
              rule: "defaultTheme=\"dark\" sin enableSystem",
              desc: 'Proteus es dark-first. enableSystem={false} garantiza que siempre se use dark a menos que el usuario lo cambie explícitamente.',
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
