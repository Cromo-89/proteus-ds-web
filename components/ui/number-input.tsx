"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

interface NumberInputProps
  extends Omit<React.ComponentProps<"input">, "type" | "value" | "onChange"> {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number) => void
}

function NumberInput({
  value: controlledValue,
  defaultValue = 0,
  min,
  max,
  step = 1,
  onValueChange,
  className,
  disabled,
  ...props
}: NumberInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const current = isControlled ? controlledValue : internalValue

  const update = (next: number) => {
    const clamped =
      min !== undefined && next < min
        ? min
        : max !== undefined && next > max
        ? max
        : next
    if (!isControlled) setInternalValue(clamped)
    onValueChange?.(clamped)
  }

  return (
    <InputGroup className={className} data-disabled={disabled || undefined}>
      <InputGroupAddon align="inline-start">
        <InputGroupButton
          disabled={disabled || (min !== undefined && current <= min)}
          onClick={() => update(current - step)}
          aria-label="Disminuir"
        >
          <Icon name="remove" size={16} />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupInput
        type="number"
        value={current}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={(e) => update(parseFloat(e.target.value) || 0)}
        className="text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        {...props}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          disabled={disabled || (max !== undefined && current >= max)}
          onClick={() => update(current + step)}
          aria-label="Aumentar"
        >
          <Icon name="add" size={16} />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

export { NumberInput }
