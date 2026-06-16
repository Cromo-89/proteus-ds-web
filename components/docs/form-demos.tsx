"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Icon } from "@/components/ui/icon"

/* ── Search demos ────────────────────────────────────────── */

export function SearchClearDemo() {
  const [value, setValue] = useState("")

  return (
    <div className="relative w-full max-w-sm">
      <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground">
        <Icon name="search" size={16} />
      </span>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar componentes..."
        className="px-8"
      />
      {value && (
        <button
          type="button"
          onClick={() => setValue("")}
          aria-label="Limpiar búsqueda"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  )
}

export function SearchGroupDemo() {
  const [value, setValue] = useState("")

  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <Icon name="search" size={16} />
      </InputGroupAddon>
      <InputGroupInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar..."
      />
      {value && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={() => setValue("")} aria-label="Limpiar">
            <Icon name="close" size={16} />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}
