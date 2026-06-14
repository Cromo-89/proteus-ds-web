import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Getting Started",
}

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">
          Introducción
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Getting Started</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Proteus DS es el sistema de diseño de referencia para product teams.
          Incluye 54 componentes listos para producción, foundations completas y
          guías de uso.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Installation",
            href: "/getting-started/installation",
            description: "Instalá las dependencias y configurá tu entorno.",
          },
          {
            title: "Usage",
            href: "/getting-started/usage",
            description: "Importá y usá componentes en tu proyecto.",
          },
          {
            title: "Theming",
            href: "/getting-started/theming",
            description: "Personalizá colores, tipografía y radius.",
          },
          {
            title: "Components",
            href: "/components/button",
            description: "Explorá los 54 componentes del sistema.",
          },
        ].map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="group rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent/30"
          >
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {card.title} →
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {card.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
