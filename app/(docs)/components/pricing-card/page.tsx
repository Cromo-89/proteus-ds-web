import type { Metadata } from "next"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Pricing Card" }

const basicCode = `<Card className="w-64">
  <CardHeader>
    <Badge variant="secondary" className="w-fit rounded-full">Starter</Badge>
    <div>
      <span className="text-3xl font-bold">$0</span>
      <span className="text-sm text-muted-foreground"> /mes</span>
    </div>
    <CardDescription>Para proyectos personales y exploración.</CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-sm">
      <li className="flex items-center gap-2">
        <Icon name="check" size={16} className="text-success shrink-0" />
        3 proyectos activos
      </li>
      <li className="flex items-center gap-2">
        <Icon name="check" size={16} className="text-success shrink-0" />
        Componentes base
      </li>
      <li className="flex items-center gap-2 text-muted-foreground">
        <Icon name="close" size={16} className="shrink-0" />
        Temas personalizados
      </li>
    </ul>
  </CardContent>
  <CardFooter>
    <Button variant="outline" className="w-full">Empezar gratis</Button>
  </CardFooter>
</Card>`

const featuredCode = `<Card className="w-64 ring-2 ring-primary">
  <CardHeader>
    <div className="flex items-center justify-between">
      <Badge className="rounded-full">Pro</Badge>
      <Badge variant="outline" className="text-xs rounded-full">Más popular</Badge>
    </div>
    <div>
      <span className="text-3xl font-bold">$29</span>
      <span className="text-sm text-muted-foreground"> /mes</span>
    </div>
    <CardDescription>Para equipos que construyen en serio.</CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-sm">
      <li className="flex items-center gap-2">
        <Icon name="check" size={16} className="text-success shrink-0" />
        Proyectos ilimitados
      </li>
      <li className="flex items-center gap-2">
        <Icon name="check" size={16} className="text-success shrink-0" />
        Todos los componentes
      </li>
      <li className="flex items-center gap-2">
        <Icon name="check" size={16} className="text-success shrink-0" />
        Temas personalizados
      </li>
      <li className="flex items-center gap-2">
        <Icon name="check" size={16} className="text-success shrink-0" />
        Soporte prioritario
      </li>
    </ul>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Comenzar prueba gratuita</Button>
  </CardFooter>
</Card>`

const comparisonCode = `<div className="grid grid-cols-2 gap-4">
  {/* Plan Starter */}
  <Card>
    <CardHeader>
      <Badge variant="secondary" className="w-fit rounded-full">Starter</Badge>
      <div><span className="text-2xl font-bold">$0</span></div>
      <CardDescription>Para proyectos personales.</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-1.5 text-sm">
        {starterFeatures.map((f) => (
          <li key={f.label} className="flex items-center gap-2">
            <Icon
              name={f.included ? "check" : "close"}
              size={14}
              className={f.included ? "text-success" : "text-muted-foreground"}
            />
            <span className={!f.included ? "text-muted-foreground" : ""}>{f.label}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full" size="sm">Empezar</Button>
    </CardFooter>
  </Card>

  {/* Plan Pro */}
  <Card className="ring-2 ring-primary">
    ...
  </Card>
</div>`

export default async function PricingCardPage() {
  const [basicHtml, featuredHtml, comparisonHtml] = await Promise.all([
    highlight(basicCode),
    highlight(featuredCode),
    highlight(comparisonCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Pricing Card</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Tarjeta de plan de precios con precio, lista de características y CTA.
            Se compone de Card con un grid de features usando íconos check/close.
            El plan destacado usa{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">ring-2 ring-primary</code>.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Patrón, no componente:</strong> Compuesto
          de Card, Badge, Button e Icon. El grid de comparación requiere lógica de datos
          específica de tu producto.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Plan simple</h2>
        <ComponentPreview
          preview={
            <Card className="w-64">
              <CardHeader>
                <Badge variant="secondary" className="w-fit rounded-full">Starter</Badge>
                <div>
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-sm text-muted-foreground"> /mes</span>
                </div>
                <CardDescription>Para proyectos personales y exploración.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {[
                    { label: "3 proyectos activos", ok: true },
                    { label: "Componentes base", ok: true },
                    { label: "Temas personalizados", ok: false },
                    { label: "Soporte prioritario", ok: false },
                  ].map((f) => (
                    <li key={f.label} className={`flex items-center gap-2 ${!f.ok ? "text-muted-foreground" : ""}`}>
                      <Icon name={f.ok ? "check" : "close"} size={16} className={f.ok ? "text-success shrink-0" : "shrink-0"} />
                      {f.label}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Empezar gratis</Button>
              </CardFooter>
            </Card>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Plan destacado</h2>
        <p className="text-sm text-muted-foreground">
          El plan recomendado usa{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">ring-2 ring-primary</code>{" "}
          para destacar visualmente sobre el resto. El CTA principal usa la variante sólida.
        </p>
        <ComponentPreview
          preview={
            <Card className="w-64 ring-2 ring-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="rounded-full">Pro</Badge>
                  <Badge variant="outline" className="text-xs rounded-full">Más popular</Badge>
                </div>
                <div>
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-sm text-muted-foreground"> /mes</span>
                </div>
                <CardDescription>Para equipos que construyen en serio.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {[
                    "Proyectos ilimitados",
                    "Todos los componentes",
                    "Temas personalizados",
                    "Soporte prioritario",
                    "Acceso anticipado",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Icon name="check" size={16} className="text-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Comenzar prueba gratuita</Button>
              </CardFooter>
            </Card>
          }
          codeHtml={featuredHtml}
          code={featuredCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Comparación lado a lado</h2>
        <p className="text-sm text-muted-foreground">
          Para 2-3 planes. Con más opciones, considera una tabla de comparación vertical.
        </p>
        <ComponentPreview
          preview={
            <div className="grid grid-cols-2 gap-3 w-full max-w-md">
              <Card size="sm">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit rounded-full text-xs">Starter</Badge>
                  <div><span className="text-xl font-bold">$0</span><span className="text-xs text-muted-foreground">/mes</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-xs">
                    {[{ l: "3 proyectos", ok: true }, { l: "Base", ok: true }, { l: "Personalizado", ok: false }].map((f) => (
                      <li key={f.l} className={`flex items-center gap-1.5 ${!f.ok ? "text-muted-foreground" : ""}`}>
                        <Icon name={f.ok ? "check" : "close"} size={14} className={f.ok ? "text-success shrink-0" : "shrink-0"} />
                        {f.l}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" size="sm">Gratis</Button>
                </CardFooter>
              </Card>
              <Card size="sm" className="ring-2 ring-primary">
                <CardHeader>
                  <Badge className="w-fit rounded-full text-xs">Pro</Badge>
                  <div><span className="text-xl font-bold">$29</span><span className="text-xs text-muted-foreground">/mes</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-xs">
                    {[{ l: "Ilimitados", ok: true }, { l: "Completo", ok: true }, { l: "Personalizado", ok: true }].map((f) => (
                      <li key={f.l} className="flex items-center gap-1.5">
                        <Icon name="check" size={14} className="text-success shrink-0" />
                        {f.l}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="sm">Elegir Pro</Button>
                </CardFooter>
              </Card>
            </div>
          }
          codeHtml={comparisonHtml}
          code={comparisonCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Anatomía</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li><strong className="text-foreground">Nombre del plan</strong> — Badge en la parte superior</li>
          <li><strong className="text-foreground">Precio</strong> — número grande + periodo (mes/año)</li>
          <li><strong className="text-foreground">Descripción</strong> — a quién va dirigido el plan</li>
          <li><strong className="text-foreground">Features</strong> — lista con check ✓ / close ✗</li>
          <li><strong className="text-foreground">CTA</strong> — en CardFooter, variante según prioridad</li>
          <li><strong className="text-foreground">Destacado</strong> — ring-2 ring-primary en el plan recomendado</li>
        </ul>
      </section>
    </article>
  )
}
