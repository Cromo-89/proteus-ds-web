import type { Metadata } from "next"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Calendar" }

const basicCode = `"use client"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  )
}`

const rangeCode = `"use client"
import { useState } from "react"
import type { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"

export function CalendarRangeDemo() {
  const [range, setRange] = useState<DateRange | undefined>()

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
    />
  )
}`

const popoverCode = `"use client"
import { useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

export function DatePicker() {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-56 justify-start text-left font-normal">
          <Icon name="calendar_today" size={16} />
          {date
            ? format(date, "PPP", { locale: es })
            : "Selecciona una fecha"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}`

const dropdownCode = `{/* Selector dropdown para navegar meses/años rápidamente */}
<Calendar
  mode="single"
  captionLayout="dropdown"
  startMonth={new Date(2020, 0)}
  endMonth={new Date(2030, 11)}
/>`

const disabledCode = `{/* Deshabilitar fechas pasadas */}
<Calendar
  mode="single"
  disabled={{ before: new Date() }}
/>

{/* Deshabilitar fechas específicas */}
<Calendar
  mode="single"
  disabled={[
    new Date(2025, 11, 25), // Navidad
    new Date(2026, 0, 1),   // Año nuevo
  ]}
/>`

const calendarProps = [
  {
    name: "mode",
    type: '"single" | "multiple" | "range"',
    defaultValue: '"single"',
    description: "Modo de selección: una fecha, múltiples fechas o rango.",
  },
  {
    name: "selected",
    type: "Date | Date[] | DateRange | undefined",
    defaultValue: "—",
    description: "Fecha(s) seleccionada(s). El tipo depende del mode.",
  },
  {
    name: "onSelect",
    type: "(date: ...) => void",
    defaultValue: "—",
    description: "Callback cuando el usuario selecciona una fecha.",
  },
  {
    name: "captionLayout",
    type: '"label" | "dropdown" | "dropdown-months" | "dropdown-years"',
    defaultValue: '"label"',
    description: "Controla cómo se muestra el título del mes (estático o con dropdowns).",
  },
  {
    name: "showOutsideDays",
    type: "boolean",
    defaultValue: "true",
    description: "Muestra los días del mes anterior/siguiente para completar la grilla.",
  },
  {
    name: "numberOfMonths",
    type: "number",
    defaultValue: "1",
    description: "Cantidad de meses a mostrar en simultáneo.",
  },
  {
    name: "disabled",
    type: "Date | Date[] | DateRange | ((date: Date) => boolean)",
    defaultValue: "—",
    description: "Deshabilita fechas específicas o un rango. Acepta función predicado.",
  },
  {
    name: "startMonth",
    type: "Date",
    defaultValue: "—",
    description: "Mes mínimo de navegación disponible (para captionLayout dropdown).",
  },
  {
    name: "endMonth",
    type: "Date",
    defaultValue: "—",
    description: "Mes máximo de navegación disponible (para captionLayout dropdown).",
  },
  {
    name: "initialFocus",
    type: "boolean",
    defaultValue: "false",
    description: "Enfoca el calendario al montar — útil dentro de un Popover.",
  },
  {
    name: "buttonVariant",
    type: "ButtonVariant",
    defaultValue: '"ghost"',
    description: "Variante del botón de navegación entre meses.",
  },
  {
    name: "locale",
    type: "Locale",
    defaultValue: "—",
    description: "Locale de date-fns para nombres de días y meses en otro idioma.",
  },
]

export default async function CalendarPage() {
  const [basicHtml, rangeHtml, popoverHtml, dropdownHtml, disabledHtml] = await Promise.all([
    highlight(basicCode),
    highlight(rangeCode),
    highlight(popoverCode),
    highlight(dropdownCode),
    highlight(disabledCode),
  ])

  return (
    <article className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="default" className="bg-success-bg text-success border-transparent rounded-full">
            Stable
          </Badge>
          <a
            href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Calendar</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Selector de fechas con soporte para selección simple, múltiple y de rango.
            Construido sobre <strong className="text-foreground">react-day-picker</strong>.
            Se usa solo o dentro de un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Popover</code> para
            el patrón de date picker.
          </p>
        </div>
      </div>

      {/* Básico */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Selección simple</h2>
        <p className="text-sm text-muted-foreground">
          El Calendar es un componente controlado — pasa{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">selected</code> y{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">onSelect</code> para manejar el estado externamente.
        </p>
        <ComponentPreview
          preview={
            <Calendar mode="single" />
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      {/* Rango */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Selección de rango</h2>
        <p className="text-sm text-muted-foreground">
          Con <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">mode="range"</code> el usuario
          selecciona un inicio y fin. El tipo del estado es{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DateRange</code> de react-day-picker.
        </p>
        <ComponentPreview
          preview={
            <Calendar mode="range" numberOfMonths={2} />
          }
          codeHtml={rangeHtml}
          code={rangeCode}
        />
      </section>

      {/* Date picker con popover */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Date picker (con Popover)</h2>
        <p className="text-sm text-muted-foreground">
          El patrón más común: un botón que muestra la fecha seleccionada y abre el calendario en un
          Popover. Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">date-fns</code> para
          formatear la fecha según el locale del usuario.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm">
                <span className="material-symbols-rounded text-muted-foreground" style={{ fontSize: 16 }}>calendar_today</span>
                <span className="text-muted-foreground">Selecciona una fecha</span>
              </div>
              <p className="text-xs text-muted-foreground">Ver código para la implementación completa con Popover</p>
            </div>
          }
          codeHtml={popoverHtml}
          code={popoverCode}
        />
      </section>

      {/* Dropdown navigation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Navegación dropdown</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">captionLayout="dropdown"</code> reemplaza
          los botones de mes/año por selectores, ideal cuando el usuario necesita saltar varios años.
        </p>
        <ComponentPreview
          preview={
            <Calendar mode="single" captionLayout="dropdown" />
          }
          codeHtml={dropdownHtml}
          code={dropdownCode}
        />
      </section>

      {/* Fechas deshabilitadas */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Fechas deshabilitadas</h2>
        <p className="text-sm text-muted-foreground">
          La prop <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">disabled</code> acepta una
          fecha, un array, un rango o una función predicado para máxima flexibilidad.
        </p>
        <ComponentPreview
          preview={
            <Calendar mode="single" />
          }
          codeHtml={disabledHtml}
          code={disabledCode}
        />
      </section>

      {/* Props */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground">
          Extiende todas las props de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DayPicker</code> de react-day-picker.
        </p>
        <PropsTable props={calendarProps} />
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Navegación completa con flechas de teclado entre días, meses y años.</li>
          <li>Cada día tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-label</code> con la fecha completa en texto.</li>
          <li>Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">initialFocus</code> cuando el calendario abre en un dialog o popover para mover el foco automáticamente.</li>
          <li>Las fechas deshabilitadas tienen <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-disabled</code> y no son alcanzables con Tab.</li>
          <li>Siempre acompaña el date picker con un input de texto como alternativa accesible para usuarios de screen readers.</li>
        </ul>
      </section>
    </article>
  )
}
