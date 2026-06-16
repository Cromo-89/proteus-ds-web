"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

interface RatingProps {
  value?: number
  defaultValue?: number
  max?: number
  readOnly?: boolean
  disabled?: boolean
  onValueChange?: (value: number) => void
  className?: string
}

function Rating({
  value: controlledValue,
  defaultValue = 0,
  max = 5,
  readOnly = false,
  disabled = false,
  onValueChange,
  className,
}: RatingProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [hoverValue, setHoverValue] = useState(0)

  const isControlled = controlledValue !== undefined
  const current = isControlled ? controlledValue : internalValue
  const displayValue = !readOnly && !disabled && hoverValue > 0 ? hoverValue : current

  const handleClick = (star: number) => {
    if (readOnly || disabled) return
    if (!isControlled) setInternalValue(star)
    onValueChange?.(star)
  }

  return (
    <div
      data-slot="rating"
      data-readonly={readOnly || undefined}
      data-disabled={disabled || undefined}
      role="group"
      aria-label={`Calificación: ${current} de ${max}`}
      className={cn(
        "inline-flex items-center gap-0.5",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {Array.from({ length: max }, (_, i) => {
        const star = i + 1
        const isFilled = star <= displayValue
        return (
          <button
            key={star}
            type="button"
            disabled={disabled || readOnly}
            aria-label={`${star} de ${max}`}
            aria-pressed={star <= current}
            onClick={() => handleClick(star)}
            onMouseEnter={() => {
              if (!readOnly && !disabled) setHoverValue(star)
            }}
            onMouseLeave={() => setHoverValue(0)}
            className={cn(
              "transition-all duration-100 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-sm",
              isFilled ? "text-warning" : "text-muted-foreground/30",
              !readOnly && !disabled && "hover:scale-110"
            )}
          >
            <Icon name={isFilled ? "star" : "star_border"} size={20} />
          </button>
        )
      })}
    </div>
  )
}

export { Rating }
