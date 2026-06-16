"use client"

import { useState } from "react"
import { Chip } from "@/components/ui/chip"
import { Icon } from "@/components/ui/icon"

/* ── Chip demos ──────────────────────────────────────────── */

const FILTER_OPTIONS = ["Diseño", "Desarrollo", "Producto", "Marketing", "QA"]

export function ChipSelectDemo() {
  const [selected, setSelected] = useState<string[]>(["Diseño"])

  const toggle = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]
    )

  return (
    <div className="flex flex-wrap gap-2">
      {FILTER_OPTIONS.map((label) => (
        <Chip
          key={label}
          selected={selected.includes(label)}
          onClick={() => toggle(label)}
        >
          {label}
        </Chip>
      ))}
    </div>
  )
}

const INITIAL_CHIPS = ["React", "TypeScript", "Tailwind CSS", "Next.js", "Figma"]

export function ChipDismissDemo() {
  const [chips, setChips] = useState(INITIAL_CHIPS)

  const remove = (label: string) =>
    setChips((prev) => prev.filter((c) => c !== label))

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-wrap gap-2 min-h-8">
        {chips.length === 0 ? (
          <span className="text-sm text-muted-foreground">Sin tecnologías seleccionadas.</span>
        ) : (
          chips.map((label) => (
            <Chip key={label} onDismiss={() => remove(label)}>
              {label}
            </Chip>
          ))
        )}
      </div>
      {chips.length < INITIAL_CHIPS.length && (
        <button
          onClick={() => setChips(INITIAL_CHIPS)}
          className="self-start text-xs text-primary underline underline-offset-4"
        >
          Restaurar
        </button>
      )}
    </div>
  )
}

export function ChipSingleSelectDemo() {
  const [selected, setSelected] = useState("Mensual")
  const options = ["Diario", "Mensual", "Anual"]

  return (
    <div className="flex gap-2">
      {options.map((opt) => (
        <Chip
          key={opt}
          variant="filled"
          selected={selected === opt}
          onClick={() => setSelected(opt)}
        >
          {opt}
        </Chip>
      ))}
    </div>
  )
}

export function ChipIconSelectDemo() {
  const [selected, setSelected] = useState<string[]>([])

  const options = [
    { label: "Favorito", icon: "star" },
    { label: "Compartido", icon: "share" },
    { label: "Descargado", icon: "download" },
  ]

  const toggle = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]
    )

  return (
    <div className="flex flex-wrap gap-2">
      {options.map(({ label, icon }) => (
        <Chip
          key={label}
          selected={selected.includes(label)}
          onClick={() => toggle(label)}
        >
          <Icon name={icon} size={14} />
          {label}
        </Chip>
      ))}
    </div>
  )
}
