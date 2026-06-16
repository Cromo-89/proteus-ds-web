import type { Metadata } from "next"
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "@/components/ui/command"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Command" }

const basicCode = `<Command className="rounded-xl border border-border shadow-md max-w-sm">
  <CommandInput placeholder="Escribe un comando o busca..." />
  <CommandList>
    <CommandEmpty>Sin resultados.</CommandEmpty>
    <CommandGroup heading="Sugerencias">
      <CommandItem>
        <Icon name="search" size={16} />
        Buscar
      </CommandItem>
      <CommandItem>
        <Icon name="settings" size={16} />
        Configuración
      </CommandItem>
      <CommandItem>
        <Icon name="person" size={16} />
        Mi perfil
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Documentación">
      <CommandItem>
        <Icon name="description" size={16} />
        Componentes
      </CommandItem>
      <CommandItem>
        <Icon name="palette" size={16} />
        Foundations
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`

const shortcutsCode = `<Command className="rounded-xl border border-border shadow-md max-w-sm">
  <CommandInput placeholder="Buscar acciones..." />
  <CommandList>
    <CommandGroup heading="Acciones rápidas">
      <CommandItem>
        <Icon name="add" size={16} />
        Nuevo documento
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Icon name="folder_open" size={16} />
        Abrir archivo
        <CommandShortcut>⌘O</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Icon name="save" size={16} />
        Guardar
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`

const dialogCode = `"use client"
import { useState, useEffect } from "react"
import {
  CommandDialog, CommandInput, CommandList,
  CommandEmpty, CommandGroup, CommandItem, CommandShortcut
} from "@/components/ui/command"

export function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-muted-foreground"
      >
        Presiona{" "}
        <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">⌘K</kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Escribe un comando o busca..." />
        <CommandList>
          <CommandEmpty>Sin resultados.</CommandEmpty>
          <CommandGroup heading="Páginas">
            <CommandItem onSelect={() => setOpen(false)}>
              Inicio <CommandShortcut>⌘H</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              Documentación
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              Configuración <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}`

const commandProps = [
  {
    name: "className",
    type: "string",
    defaultValue: "—",
    description: "Clases adicionales para el contenedor principal.",
  },
  {
    name: "shouldFilter",
    type: "boolean",
    defaultValue: "true",
    description: "Si false, deshabilita el filtrado integrado (útil para búsquedas async).",
  },
  {
    name: "filter",
    type: "(value: string, search: string) => number",
    defaultValue: "—",
    description: "Función custom de filtrado. Retorna 0 (ocultar) o 1 (mostrar).",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    defaultValue: "—",
    description: "Callback cuando cambia el ítem seleccionado.",
  },
  {
    name: "loop",
    type: "boolean",
    defaultValue: "false",
    description: "Si true, la navegación con flechas cicla entre el primer y último ítem.",
  },
]

const dialogProps = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "false",
    description: "Controla si el dialog está abierto.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "—",
    description: "Callback cuando el estado open cambia.",
  },
  {
    name: "title",
    type: "string",
    defaultValue: '"Command Palette"',
    description: "Título accesible del dialog (invisible, para screen readers).",
  },
  {
    name: "showCloseButton",
    type: "boolean",
    defaultValue: "false",
    description: "Muestra el botón × de cierre en la esquina del dialog.",
  },
]

const itemProps = [
  {
    name: "onSelect",
    type: "(value: string) => void",
    defaultValue: "—",
    description: "Callback cuando el ítem se selecciona con Enter o clic.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Deshabilita el ítem e impide la selección.",
  },
  {
    name: "value",
    type: "string",
    defaultValue: "—",
    description: "Valor usado para filtrado. Por defecto usa el texto del ítem.",
  },
]

export default async function CommandPage() {
  const [basicHtml, shortcutsHtml, dialogHtml] = await Promise.all([
    highlight(basicCode),
    highlight(shortcutsCode),
    highlight(dialogCode),
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
          <h1 className="text-4xl font-bold tracking-tight">Command</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Paleta de comandos con búsqueda en tiempo real, navegación por teclado y grupos.
            Construido sobre <strong className="text-foreground">cmdk</strong>. Úsalo como componente
            inline o dentro de un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CommandDialog</code> para
            el patrón ⌘K.
          </p>
        </div>
      </div>

      {/* Básico inline */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Inline</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Command</code> directamente para
          embeber la paleta en la página — sin dialog. Ideal para barras de búsqueda o comboboxes avanzados.
        </p>
        <ComponentPreview
          preview={
            <Command className="rounded-xl border border-border shadow-md w-full max-w-sm">
              <CommandInput placeholder="Escribe un comando o busca..." />
              <CommandList>
                <CommandEmpty>Sin resultados.</CommandEmpty>
                <CommandGroup heading="Sugerencias">
                  <CommandItem>
                    <Icon name="search" size={16} />
                    Buscar
                  </CommandItem>
                  <CommandItem>
                    <Icon name="settings" size={16} />
                    Configuración
                  </CommandItem>
                  <CommandItem>
                    <Icon name="person" size={16} />
                    Mi perfil
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Documentación">
                  <CommandItem>
                    <Icon name="description" size={16} />
                    Componentes
                  </CommandItem>
                  <CommandItem>
                    <Icon name="palette" size={16} />
                    Foundations
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      {/* Con shortcuts */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con atajos de teclado</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CommandShortcut</code> muestra
          el atajo de teclado alineado a la derecha del ítem.
        </p>
        <ComponentPreview
          preview={
            <Command className="rounded-xl border border-border shadow-md w-full max-w-sm">
              <CommandInput placeholder="Buscar acciones..." />
              <CommandList>
                <CommandGroup heading="Acciones rápidas">
                  <CommandItem>
                    <Icon name="add" size={16} />
                    Nuevo documento
                    <CommandShortcut>⌘N</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Icon name="folder_open" size={16} />
                    Abrir archivo
                    <CommandShortcut>⌘O</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Icon name="save" size={16} />
                    Guardar
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          }
          codeHtml={shortcutsHtml}
          code={shortcutsCode}
        />
      </section>

      {/* Dialog ⌘K */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Patrón ⌘K (dialog)</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CommandDialog</code> envuelve
          el Command en un modal. Captura el atajo <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">⌘K</code>{" "}
          (o <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Ctrl+K</code>) con un{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">keydown</code> listener global.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
              <span className="material-symbols-rounded text-muted-foreground" style={{ fontSize: 32 }}>
                keyboard_command_key
              </span>
              <p>El dialog se activa con <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs border border-border">⌘K</kbd></p>
              <p className="text-xs">Ver el código para la implementación completa.</p>
            </div>
          }
          codeHtml={dialogHtml}
          code={dialogCode}
        />
      </section>

      {/* Props */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Props — Command</h2>
          <PropsTable props={commandProps} />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Props — CommandDialog</h2>
          <PropsTable props={dialogProps} />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Props — CommandItem</h2>
          <PropsTable props={itemProps} />
        </div>
      </section>

      {/* Accesibilidad */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Navegación completa con flechas ↑↓ y selección con Enter.</li>
          <li>El dialog tiene <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">aria-hidden</code> en los ítems de fondo cuando está abierto.</li>
          <li>Cierra con Escape — no elimines este comportamiento.</li>
          <li>Incluye siempre un <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">CommandEmpty</code> con mensaje descriptivo para el estado sin resultados.</li>
          <li>Los ítems usan <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">role="option"</code> internamente — no añadas roles manuales.</li>
        </ul>
      </section>
    </article>
  )
}
