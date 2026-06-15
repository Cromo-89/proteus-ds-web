"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export function SliderValueDemo() {
  const [value, setValue] = useState<number[]>([40])
  return (
    <div className="flex flex-col gap-3 w-64">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Opacidad</span>
        <span className="font-mono font-medium tabular-nums">{value[0]}%</span>
      </div>
      <Slider
        value={value}
        onValueChange={(v) => setValue(v as number[])}
        min={0}
        max={100}
        step={1}
      />
    </div>
  )
}

export function SliderRangeDemo() {
  const [range, setRange] = useState<number[]>([20, 80])
  return (
    <div className="flex flex-col gap-3 w-64">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Precio</span>
        <span className="font-mono font-medium tabular-nums">
          ${range[0]} – ${range[1]}
        </span>
      </div>
      <Slider
        value={range}
        onValueChange={(v) => setRange(v as number[])}
        min={0}
        max={200}
        step={5}
      />
    </div>
  )
}
