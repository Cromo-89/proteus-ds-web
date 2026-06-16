import type { Metadata } from "next"
import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Usage" }

const importCode = `// Importa cualquier componente desde su ruta en components/ui/
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"`

const rscCode = `// app/dashboard/page.tsx — Server Component (no directive needed)
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function DashboardPage() {
  return (
    <main className="p-6">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Panel de control</CardTitle>
          <Badge variant="secondary">Beta</Badge>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Resumen de actividad del equipo.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}`

const clientCode = `// components/search-bar.tsx — Client Component (necesario por useState)
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

export function SearchBar() {
  const [query, setQuery] = useState("")

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Buscar componentes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outline">
        <Icon name="search" size={16} />
      </Button>
    </div>
  )
}`

const variantsCode = `// Button tiene variantes definidas con CVA
import { Button } from "@/components/ui/button"

// Variantes disponibles: default | outline | ghost | secondary | destructive | link
<Button>Primario</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Eliminar</Button>

// Tamaños: default | sm | lg | icon
<Button size="sm">Pequeño</Button>
<Button size="icon"><Icon name="add" size={16} /></Button>

// Con ícono dentro del botón
<Button>
  <Icon name="add" size={16} />
  Nuevo proyecto
</Button>`

const formCode = `// Formulario de contacto completo
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FormField } from "@/components/ui/form-field"

export function ContactForm() {
  return (
    <form className="space-y-4 max-w-sm">
      <FormField label="Nombre" htmlFor="name" required>
        <Input id="name" placeholder="Tu nombre completo" />
      </FormField>

      <FormField label="Email" htmlFor="email" required>
        <Input id="email" type="email" placeholder="hola@empresa.com" />
      </FormField>

      <FormField label="Mensaje" htmlFor="message" hint="Máximo 500 caracteres">
        <Textarea id="message" placeholder="Describe tu consulta..." rows={4} />
      </FormField>

      <Button type="submit" className="w-full">Enviar mensaje</Button>
    </form>
  )
}`

const patternCode = `// Combina componentes base para construir patrones complejos
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

export function ProjectCard({ project }) {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <div className="flex items-center gap-2">
          <Badge variant={project.status === "active" ? "default" : "secondary"}>
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon name="task_alt" size={14} />
            <span>{project.taskCount} tareas</span>
          </div>
          <AvatarGroup>
            {project.members.map((m) => (
              <Avatar key={m.id} size="sm">
                <AvatarFallback>{m.initials}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">Ver proyecto</Button>
      </CardFooter>
    </Card>
  )
}`

const iconCode = `// Icon siempre se importa desde @/components/ui/icon
import { Icon } from "@/components/ui/icon"

// name: nombre del ícono de Material Symbols Rounded (snake_case)
// size: 14 | 16 | 20 | 24 | 40 | 48 (en px)
// filled: true para la variante rellena

<Icon name="home" size={24} />
<Icon name="settings" size={20} className="text-muted-foreground" />
<Icon name="star" size={24} filled />
<Icon name="check_circle" size={16} className="text-success" />`

export default function UsagePage() {
  return (
    <article className="space-y-12">
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">Getting Started</p>
        <h1 className="text-4xl font-bold tracking-tight">Usage</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Todos los componentes se importan desde{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">@/components/ui/</code>.
          Están optimizados para Next.js App Router: los componentes de solo renderizado
          son Server Components; los interactivos incluyen{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">"use client"</code> internamente.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Importar componentes</h2>
        <p className="text-sm text-muted-foreground">
          Cada componente se importa con named export desde su archivo.
          No hay un barrel export — esto mejora el tree-shaking.
        </p>
        <CodeBlock code={importCode} lang="tsx" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">En Server Components (RSC)</h2>
        <p className="text-sm text-muted-foreground">
          La mayoría de los componentes de display (Card, Badge, Avatar, etc.) no tienen
          directiva y funcionan directamente en páginas async de Next.js. No necesitas
          envolverlos en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">"use client"</code>.
        </p>
        <CodeBlock code={rscCode} lang="tsx" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">En Client Components</h2>
        <p className="text-sm text-muted-foreground">
          Cuando necesitas estado (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">useState</code>,
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">useRef</code>) o event handlers
          en el archivo que contiene el componente de Proteus, agrega{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">"use client"</code>{" "}
          al inicio del archivo. Los componentes UI de Proteus incluyen internamente su propia
          directiva cuando la necesitan.
        </p>
        <CodeBlock code={clientCode} lang="tsx" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Variantes y tamaños</h2>
        <p className="text-sm text-muted-foreground">
          Los componentes usan CVA (class-variance-authority) para variantes tipadas.
          Tu IDE autocompleta los valores válidos automáticamente.
        </p>
        <CodeBlock code={variantsCode} lang="tsx" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Formularios</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">FormField</code>{" "}
          para envolver inputs con label, hint y mensajes de error. Compatible con
          react-hook-form y cualquier librería de validación.
        </p>
        <CodeBlock code={formCode} lang="tsx" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Composición de patrones</h2>
        <p className="text-sm text-muted-foreground">
          Los patrones como Kanban Card, Profile Card o Media Card se construyen
          componiendo primitivos. No hay un componente "KanbanCard" — tú defines
          la estructura con los bloques disponibles.
        </p>
        <CodeBlock code={patternCode} lang="tsx" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Íconos</h2>
        <p className="text-sm text-muted-foreground">
          Proteus usa <strong className="text-foreground">Material Symbols Rounded</strong> a través
          del componente <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Icon</code>.
          Siempre importa desde <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">@/components/ui/icon</code>,
          no de Lucide ni otras librerías de íconos.
        </p>
        <CodeBlock code={iconCode} lang="tsx" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Recursos</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { title: "Theming", href: "/getting-started/theming", desc: "Personaliza colores y dark mode" },
            { title: "Foundations", href: "/foundations/colors", desc: "Tokens, tipografía, spacing" },
            { title: "Componentes", href: "/components/button", desc: "Referencia completa de la API" },
          ].map(({ title, href, desc }) => (
            <a key={href} href={href}
              className="group rounded-xl border p-4 transition-colors hover:bg-accent/30">
              <p className="font-medium text-sm group-hover:text-primary transition-colors">{title} →</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
            </a>
          ))}
        </div>
      </section>
    </article>
  )
}
