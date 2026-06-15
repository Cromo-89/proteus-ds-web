"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { Icon } from "@/components/ui/icon"

export function DropdownCheckboxDemo() {
  const [cols, setCols] = useState({ status: true, email: true, amount: false })
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <Icon name="view_column" size={16} />
        Columnas
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Visibilidad</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={cols.status}
          onCheckedChange={(v) => setCols((p) => ({ ...p, status: Boolean(v) }))}
        >
          Estado
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={cols.email}
          onCheckedChange={(v) => setCols((p) => ({ ...p, email: Boolean(v) }))}
        >
          Email
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={cols.amount}
          onCheckedChange={(v) => setCols((p) => ({ ...p, amount: Boolean(v) }))}
        >
          Monto
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function DropdownRadioDemo() {
  const [theme, setTheme] = useState("system")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <Icon name="palette" size={16} />
        Tema: {theme === "light" ? "Claro" : theme === "dark" ? "Oscuro" : "Sistema"}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">Claro</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Oscuro</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">Sistema</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function PopoverFormDemo() {
  const [name, setName] = useState("")
  const [saved, setSaved] = useState(false)
  return (
    <div className="flex flex-col items-center gap-3">
      {saved && (
        <p className="text-xs text-success flex items-center gap-1">
          <Icon name="check_circle" size={14} filled />
          Guardado: {name}
        </p>
      )}
      <Button variant="outline" onClick={() => { setSaved(false) }}>
        Editar nombre
      </Button>
    </div>
  )
}
