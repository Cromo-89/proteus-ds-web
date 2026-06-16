import type { Metadata } from "next"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Accordion" }

const basicCode = `<Accordion defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>¿Qué es un sistema de diseño?</AccordionTrigger>
    <AccordionContent>
      Un sistema de diseño es una colección de componentes reutilizables, guiados
      por estándares claros, que pueden ensamblarse para construir cualquier
      cantidad de aplicaciones.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>¿Cómo instalo Proteus DS?</AccordionTrigger>
    <AccordionContent>
      Ejecuta <code>npx proteus-ui init</code> en tu proyecto para instalar
      automáticamente los componentes y configurar Tailwind.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>¿Puedo personalizar los tokens de diseño?</AccordionTrigger>
    <AccordionContent>
      Sí. Todos los tokens de color, tipografía y espaciado se definen en el
      bloque @theme de tu CSS y se pueden sobrescribir libremente.
    </AccordionContent>
  </AccordionItem>
</Accordion>`

const multipleCode = `<Accordion multiple defaultValue={["a", "b"]}>
  <AccordionItem value="a">
    <AccordionTrigger>Sección A</AccordionTrigger>
    <AccordionContent>Contenido de la sección A.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="b">
    <AccordionTrigger>Sección B</AccordionTrigger>
    <AccordionContent>Contenido de la sección B.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="c">
    <AccordionTrigger>Sección C</AccordionTrigger>
    <AccordionContent>Contenido de la sección C.</AccordionContent>
  </AccordionItem>
</Accordion>`

const iconCode = `<Accordion defaultValue="billing">
  <AccordionItem value="billing">
    <AccordionTrigger>
      <span className="flex items-center gap-2">
        <Icon name="credit_card" size={16} className="text-muted-foreground" />
        Plan y facturación
      </span>
    </AccordionTrigger>
    <AccordionContent>
      Gestiona tu plan, métodos de pago y descarga facturas desde aquí.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="team">
    <AccordionTrigger>
      <span className="flex items-center gap-2">
        <Icon name="group" size={16} className="text-muted-foreground" />
        Miembros del equipo
      </span>
    </AccordionTrigger>
    <AccordionContent>
      Invita colaboradores y gestiona sus permisos de acceso.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="security">
    <AccordionTrigger>
      <span className="flex items-center gap-2">
        <Icon name="shield" size={16} className="text-muted-foreground" />
        Seguridad
      </span>
    </AccordionTrigger>
    <AccordionContent>
      Configura autenticación de dos factores y revisa sesiones activas.
    </AccordionContent>
  </AccordionItem>
</Accordion>`

const disabledCode = `<Accordion defaultValue="available">
  <AccordionItem value="available">
    <AccordionTrigger>Característica disponible</AccordionTrigger>
    <AccordionContent>
      Esta opción está disponible en tu plan actual.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="locked" disabled>
    <AccordionTrigger>Característica bloqueada — Plan Pro</AccordionTrigger>
    <AccordionContent>
      Actualiza tu plan para acceder a esta funcionalidad.
    </AccordionContent>
  </AccordionItem>
</Accordion>`

const accordionProps = [
  { name: "defaultValue", type: "string[]", defaultValue: "—", description: "Valores iniciales de los ítems abiertos en modo no controlado." },
  { name: "value", type: "string[]", defaultValue: "—", description: "Valores de los ítems abiertos en modo controlado." },
  { name: "onValueChange", type: "(value: string[]) => void", defaultValue: "—", description: "Callback al cambiar los ítems abiertos." },
  { name: "multiple", type: "boolean", defaultValue: "false", description: "Permite tener varios ítems abiertos al mismo tiempo." },
  { name: "loop", type: "boolean", defaultValue: "true", description: "La navegación por teclado vuelve al inicio al llegar al último ítem." },
]

const itemProps = [
  { name: "value", type: "string", required: true, defaultValue: "—", description: "Identificador único del ítem dentro del Accordion." },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Deshabilita la apertura y cierre de este ítem." },
]

export default async function AccordionPage() {
  const [basicHtml, multipleHtml, iconHtml, disabledHtml] = await Promise.all([
    highlight(basicCode),
    highlight(multipleCode),
    highlight(iconCode),
    highlight(disabledCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
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
          <h1 className="text-4xl font-bold tracking-tight">Accordion</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Organiza contenido en secciones colapsables para reducir la carga visual
            y dejar que el usuario decida qué expandir. Ideal para FAQs, configuraciones
            y navegación lateral estructurada.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Solo un ítem abierto a la vez. Usa{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">defaultValue</code>{" "}
          para definir cuál empieza abierto.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full max-w-md rounded-lg border">
              <Accordion defaultValue={["item-1"]}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Qué es un sistema de diseño?</AccordionTrigger>
                  <AccordionContent>
                    Un sistema de diseño es una colección de componentes reutilizables, guiados
                    por estándares claros, que pueden ensamblarse para construir cualquier
                    cantidad de aplicaciones.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Cómo instalo Proteus DS?</AccordionTrigger>
                  <AccordionContent>
                    Ejecuta{" "}
                    <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">npx proteus-ui init</code>{" "}
                    en tu proyecto para instalar automáticamente los componentes y configurar Tailwind.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Puedo personalizar los tokens de diseño?</AccordionTrigger>
                  <AccordionContent>
                    Sí. Todos los tokens de color, tipografía y espaciado se definen en el
                    bloque <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">@theme</code>{" "}
                    de tu CSS y se pueden sobrescribir libremente.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Múltiples abiertos</h2>
        <p className="text-sm text-muted-foreground">
          Con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">openMultiple</code>{" "}
          el usuario puede expandir varias secciones a la vez.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full max-w-md rounded-lg border">
              <Accordion multiple defaultValue={["a", "b"]}>
                <AccordionItem value="a">
                  <AccordionTrigger>Sección A</AccordionTrigger>
                  <AccordionContent>Contenido de la sección A.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                  <AccordionTrigger>Sección B</AccordionTrigger>
                  <AccordionContent>Contenido de la sección B.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="c">
                  <AccordionTrigger>Sección C</AccordionTrigger>
                  <AccordionContent>Contenido de la sección C.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          codeHtml={multipleHtml}
          code={multipleCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con íconos</h2>
        <p className="text-sm text-muted-foreground">
          Agrega un ícono a la izquierda del label del trigger para reforzar el
          contexto visual de cada sección de configuración.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full max-w-md rounded-lg border">
              <Accordion defaultValue={["billing"]}>
                <AccordionItem value="billing">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2">
                      <Icon name="credit_card" size={16} className="text-muted-foreground" />
                      Plan y facturación
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Gestiona tu plan, métodos de pago y descarga facturas desde aquí.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="team">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2">
                      <Icon name="group" size={16} className="text-muted-foreground" />
                      Miembros del equipo
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Invita colaboradores y gestiona sus permisos de acceso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="security">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2">
                      <Icon name="shield" size={16} className="text-muted-foreground" />
                      Seguridad
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Configura autenticación de dos factores y revisa sesiones activas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          codeHtml={iconHtml}
          code={iconCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Ítem deshabilitado</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">disabled</code> en{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">AccordionItem</code> para
          características disponibles solo en planes superiores o con permisos especiales.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full max-w-md rounded-lg border">
              <Accordion defaultValue={["available"]}>
                <AccordionItem value="available">
                  <AccordionTrigger>Característica disponible</AccordionTrigger>
                  <AccordionContent>
                    Esta opción está disponible en tu plan actual.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="locked" disabled>
                  <AccordionTrigger>Característica bloqueada — Plan Pro</AccordionTrigger>
                  <AccordionContent>
                    Actualiza tu plan para acceder a esta funcionalidad.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          codeHtml={disabledHtml}
          code={disabledCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Accordion</h2>
        <PropsTable props={accordionProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — AccordionItem</h2>
        <PropsTable props={itemProps} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>
            Cada trigger tiene{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="button"</code> y{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-expanded</code>{" "}
            automáticos (Base UI).
          </li>
          <li>
            El panel usa{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="region"</code>{" "}
            vinculado al trigger vía{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-controls</code>.
          </li>
          <li>
            Teclado:{" "}
            <kbd className="rounded bg-muted px-1 font-mono text-xs">Enter</kbd> /{" "}
            <kbd className="rounded bg-muted px-1 font-mono text-xs">Space</kbd> abre/cierra,{" "}
            <kbd className="rounded bg-muted px-1 font-mono text-xs">↑</kbd> /{" "}
            <kbd className="rounded bg-muted px-1 font-mono text-xs">↓</kbd> navega entre triggers.
          </li>
        </ul>
      </section>
    </article>
  )
}
