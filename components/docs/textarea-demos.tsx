"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

const MAX = 280

export function TextareaCounterDemo() {
  const [value, setValue] = useState("")
  const remaining = MAX - value.length
  const over = remaining < 0
  return (
    <div className="flex flex-col gap-1.5 w-72">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="¿Qué está pasando?"
        aria-invalid={over || undefined}
        rows={3}
      />
      <p className={`text-xs text-right tabular-nums ${over ? "text-destructive font-medium" : "text-muted-foreground"}`}>
        {remaining} caracteres restantes
      </p>
    </div>
  )
}
