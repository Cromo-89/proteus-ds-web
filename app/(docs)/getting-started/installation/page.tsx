import type { Metadata } from "next"
import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Installation" }

const createProjectCode = `# Crea un nuevo proyecto Next.js con App Router
npx create-next-app@latest mi-proyecto --typescript --tailwind --app --src-dir false
cd mi-proyecto`

const installDepsCode = `# Dependencias principales
npm install @base-ui/react sonner next-themes class-variance-authority clsx tailwind-merge

# Dependencias de desarrollo
npm install -D @tailwindcss/vite`

const globalsCssCode = `/* app/globals.css */
@import "tailwindcss";

/* Fuente Material Symbols Rounded */
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@14..48,100..700,0..1,-50..200&display=swap");

@theme inline {
  /* Colores → CSS variables */
  --color-background:          var(--background);
  --color-foreground:          var(--foreground);
  --color-card:                var(--card);
  --color-card-foreground:     var(--card-foreground);
  --color-primary:             var(--primary);
  --color-primary-foreground:  var(--primary-foreground);
  --color-muted:               var(--muted);
  --color-muted-foreground:    var(--muted-foreground);
  --color-border:              var(--border);
  --color-destructive:         var(--destructive);
  --color-success:             var(--success);
  --color-warning:             var(--warning);
  --color-info:                var(--info);
  /* ... ver globals.css completo en el repositorio */
}

:root {
  --background:  oklch(0.985 0 0);
  --foreground:  oklch(0.130 0 0);
  --primary:     oklch(0.500 0.185 284);
  --border:      oklch(0.880 0.005 284);
  /* ... */
}

.dark {
  --background:  oklch(0.130 0 0);
  --foreground:  oklch(0.985 0 0);
  --primary:     oklch(0.450 0.180 284);
  --border:      oklch(0.260 0.012 284);
  /* ... */
}`

const layoutCode = `// app/layout.tsx
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

export const metadata: Metadata = { title: "Mi App" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}`

const addComponentCode = `# Agrega el componente Button desde el repositorio
# Copia el archivo components/ui/button.tsx a tu proyecto

# O descárgalos todos con el CLI (próximamente)
npx proteus-ui@latest add button`

const firstComponentCode = `// app/page.tsx
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

export default function Home() {
  return (
    <main className="flex min-h-svh items-center justify-center">
      <Button>
        <Icon name="rocket_launch" size={16} />
        Hola, Proteus DS
      </Button>
    </main>
  )
}`

export default function InstallationPage() {
  return (
    <article className="space-y-12">
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">Getting Started</p>
        <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Proteus DS se instala copiando los archivos de componentes directamente en
          tu proyecto. No hay un paquete npm centralizado — los componentes son tuyos
          y los adaptas sin restricciones.
        </p>
      </div>

      {/* Requisitos */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Requisitos previos</h2>
        <div className="overflow-hidden rounded-xl border divide-y">
          {[
            { dep: "Node.js", version: "≥ 20", note: "LTS recomendado" },
            { dep: "Next.js", version: "≥ 16", note: "App Router requerido" },
            { dep: "Tailwind CSS", version: "v4", note: "Configurado via @theme en CSS" },
            { dep: "TypeScript", version: "≥ 5", note: "Recomendado — los tipos son parte del DS" },
          ].map(({ dep, version, note }) => (
            <div key={dep} className="flex items-center justify-between px-4 py-3 text-sm">
              <div className="flex items-center gap-3">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{dep}</code>
                <span className="text-muted-foreground">{note}</span>
              </div>
              <span className="font-medium text-foreground">{version}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Paso 1 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
          <h2 className="text-xl font-semibold tracking-tight">Crea el proyecto</h2>
        </div>
        <CodeBlock code={createProjectCode} lang="bash" />
      </section>

      {/* Paso 2 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
          <h2 className="text-xl font-semibold tracking-tight">Instala las dependencias</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Proteus DS depende de <strong className="text-foreground">@base-ui/react</strong> para la
          lógica de componentes accesibles, <strong className="text-foreground">Sonner</strong> para
          toasts, <strong className="text-foreground">next-themes</strong> para el tema y{" "}
          <strong className="text-foreground">CVA</strong> para las variantes.
        </p>
        <CodeBlock code={installDepsCode} lang="bash" />
      </section>

      {/* Paso 3 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
          <h2 className="text-xl font-semibold tracking-tight">Configura globals.css</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Reemplaza el contenido de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">app/globals.css</code>{" "}
          con la hoja de estilos base de Proteus. Define los tokens en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">:root</code> (light) y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">.dark</code>, y mapéalos
          a Tailwind con el bloque{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">@theme inline</code>.
        </p>
        <CodeBlock code={globalsCssCode} lang="css" />
      </section>

      {/* Paso 4 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">4</span>
          <h2 className="text-xl font-semibold tracking-tight">Configura el layout raíz</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Envuelve los children en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ThemeProvider</code>{" "}
          y agrega el{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Toaster />"}</code> para
          los toast de Sonner.
        </p>
        <CodeBlock code={layoutCode} lang="tsx" />
      </section>

      {/* Paso 5 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">5</span>
          <h2 className="text-xl font-semibold tracking-tight">Agrega los componentes</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Copia los archivos de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">components/ui/</code>{" "}
          del repositorio de Proteus DS a tu proyecto. Cada componente es independiente —
          solo necesitas copiar los que vas a usar.
        </p>
        <CodeBlock code={addComponentCode} lang="bash" />
      </section>

      {/* Paso 6 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">6</span>
          <h2 className="text-xl font-semibold tracking-tight">Verifica la instalación</h2>
        </div>
        <CodeBlock code={firstComponentCode} lang="tsx" />
      </section>

      {/* Nota de arquitectura */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Por qué "copy-paste"</h2>
        <div className="rounded-lg border bg-muted/30 px-4 py-4 text-sm text-muted-foreground space-y-2">
          <p>
            A diferencia de librerías como MUI o Chakra, Proteus DS no se importa como
            un paquete opaco. Los componentes viven en tu <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">components/ui/</code>{" "}
            y son 100% tuyos.
          </p>
          <p>
            Esto significa que puedes modificar cualquier componente sin hacer fork de
            ninguna librería, ajustar los estilos directamente en el source, y eliminar lo
            que no necesitas sin aumentar el bundle.
          </p>
          <p>
            El trade-off: las actualizaciones son manuales — cuando Proteus lanza cambios,
            los cherry-pickas tú. La guía de <a href="/changelog" className="text-primary hover:underline underline-offset-4">changelog</a>{" "}
            documenta qué cambia en cada versión.
          </p>
        </div>
      </section>
    </article>
  )
}
