import type { Metadata } from "next"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Media Card" }

const basicCode = `<Card className="w-72 overflow-hidden">
  {/* Imagen de portada */}
  <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
    <Icon name="image" size={40} className="text-primary/40" />
  </div>
  <CardHeader>
    <Badge variant="secondary" className="w-fit rounded-full">Diseño</Badge>
    <CardTitle>Guía de accesibilidad en UI</CardTitle>
    <CardDescription>
      Principios y técnicas para diseñar interfaces inclusivas que funcionen para todos.
    </CardDescription>
  </CardHeader>
  <CardFooter className="justify-between">
    <div className="flex items-center gap-2">
      <Avatar size="sm">
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>
      <span className="text-xs text-muted-foreground">Ana García</span>
    </div>
    <span className="text-xs text-muted-foreground">5 min</span>
  </CardFooter>
</Card>`

const videoCode = `<Card className="w-72 overflow-hidden">
  <div className="relative aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
    <div className="size-12 rounded-full bg-white/90 flex items-center justify-center shadow-md">
      <Icon name="play_arrow" size={24} className="text-foreground ml-0.5" />
    </div>
    <Badge className="absolute top-2 right-2 bg-black/70 text-white border-transparent">
      12:34
    </Badge>
  </div>
  <CardHeader>
    <CardTitle>Intro a Tailwind v4</CardTitle>
    <CardDescription>Variables CSS nativas, @theme, nueva sintaxis de utilidades.</CardDescription>
  </CardHeader>
</Card>`

const horizontalCode = `<Card className="flex flex-row overflow-hidden max-w-sm">
  <div className="w-24 shrink-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
    <Icon name="article" size={24} className="text-primary/40" />
  </div>
  <div className="flex flex-col flex-1 min-w-0">
    <CardHeader>
      <CardTitle className="line-clamp-1">Tokens de color en Proteus DS</CardTitle>
      <CardDescription className="line-clamp-2">
        Cómo usamos OKLCH y variables CSS para el sistema de colores.
      </CardDescription>
    </CardHeader>
    <CardFooter className="justify-between mt-auto">
      <span className="text-xs text-muted-foreground">3 min de lectura</span>
      <Button variant="ghost" size="sm">Leer</Button>
    </CardFooter>
  </div>
</Card>`

export default async function MediaCardPage() {
  const [basicHtml, videoHtml, horizontalHtml] = await Promise.all([
    highlight(basicCode),
    highlight(videoCode),
    highlight(horizontalCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-info/10 text-info border-info/20 rounded-full">Pattern</Badge>
          <a
            href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Media Card</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Tarjeta de contenido con imagen o video de portada. Usada en blogs,
            documentación, galerías y feeds de contenido. Se compone de Card
            con una imagen o div de portada como primer hijo.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Patrón, no componente:</strong> Cuando
          un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<img>"}</code> es el
          primer hijo de Card, recibe automáticamente{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">rounded-t-xl</code> y
          elimina el padding superior del Card.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Artículo / blog</h2>
        <p className="text-sm text-muted-foreground">
          Portada de aspecto 16:9, categoría con Badge, autor con Avatar y tiempo de lectura.
        </p>
        <ComponentPreview
          preview={
            <Card className="w-72 overflow-hidden">
              <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="image" size={40} className="text-primary/40" />
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit rounded-full">Diseño</Badge>
                <CardTitle>Guía de accesibilidad en UI</CardTitle>
                <CardDescription>
                  Principios y técnicas para diseñar interfaces inclusivas.
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-between">
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">Ana García</span>
                </div>
                <span className="text-xs text-muted-foreground">5 min</span>
              </CardFooter>
            </Card>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Video con duración</h2>
        <p className="text-sm text-muted-foreground">
          Portada con overlay de play y badge de duración. El ícono de play centrado
          comunica que el contenido es reproducible.
        </p>
        <ComponentPreview
          preview={
            <Card className="w-72 overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="size-12 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                  <Icon name="play_arrow" size={24} className="text-foreground ml-0.5" />
                </div>
                <Badge className="absolute top-2 right-2 bg-black/70 text-white border-transparent">
                  12:34
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>Intro a Tailwind v4</CardTitle>
                <CardDescription>
                  Variables CSS nativas, @theme, nueva sintaxis de utilidades.
                </CardDescription>
              </CardHeader>
            </Card>
          }
          codeHtml={videoHtml}
          code={videoCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Horizontal — lista compacta</h2>
        <p className="text-sm text-muted-foreground">
          Cuando hay espacio limitado en alto. La portada ocupa un ancho fijo en la izquierda,
          el contenido se expande al resto.
        </p>
        <ComponentPreview
          preview={
            <Card className="flex flex-row overflow-hidden max-w-sm w-full">
              <div className="w-24 shrink-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="article" size={24} className="text-primary/40" />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <CardHeader>
                  <CardTitle className="line-clamp-1 text-sm">Tokens de color en Proteus DS</CardTitle>
                  <CardDescription className="line-clamp-2 text-xs">
                    Cómo usamos OKLCH y variables CSS para el sistema de colores.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-between mt-auto">
                  <span className="text-xs text-muted-foreground">3 min</span>
                  <Button variant="ghost" size="sm">Leer</Button>
                </CardFooter>
              </div>
            </Card>
          }
          codeHtml={horizontalHtml}
          code={horizontalCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Anatomía</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li><strong className="text-foreground">Portada</strong> — imagen real o div con gradient/placeholder</li>
          <li><strong className="text-foreground">Categoría</strong> — Badge o eyebrow text encima del título</li>
          <li><strong className="text-foreground">Título + Descripción</strong> — CardTitle y CardDescription</li>
          <li><strong className="text-foreground">Footer</strong> — Autor con Avatar, timestamp, CTA secundario</li>
        </ul>
      </section>
    </article>
  )
}
