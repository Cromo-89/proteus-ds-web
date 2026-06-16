import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

const chipVariants = cva(
  "inline-flex items-center rounded-full border font-medium transition-colors",
  {
    variants: {
      variant: {
        default: [
          "border-border bg-background text-foreground hover:bg-muted",
          "aria-pressed:border-primary/40 aria-pressed:bg-primary/10 aria-pressed:text-primary",
          "data-[selected]:border-primary/40 data-[selected]:bg-primary/10 data-[selected]:text-primary",
        ].join(" "),
        filled: [
          "border-transparent bg-muted text-muted-foreground hover:text-foreground",
          "aria-pressed:bg-primary aria-pressed:text-primary-foreground aria-pressed:hover:bg-primary/90",
          "data-[selected]:bg-primary data-[selected]:text-primary-foreground",
        ].join(" "),
      },
      size: {
        sm:      "h-6 gap-1 px-2.5 text-xs",
        default: "h-8 gap-1.5 px-3 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

interface ChipProps
  extends Omit<React.ComponentProps<"button">, "size">,
    VariantProps<typeof chipVariants> {
  selected?: boolean
  onDismiss?: () => void
}

function Chip({
  className,
  variant,
  size,
  selected = false,
  onDismiss,
  children,
  onClick,
  ...props
}: ChipProps) {
  const styles = cn(chipVariants({ variant, size }), className)

  if (onDismiss) {
    return (
      <span
        data-slot="chip"
        data-selected={selected || undefined}
        className={styles}
      >
        {children}
        <button
          type="button"
          aria-label="Eliminar"
          onClick={onDismiss}
          className="-mr-1 flex size-4 items-center justify-center rounded-full opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Icon name="close" size={14} />
        </button>
      </span>
    )
  }

  return (
    <button
      type="button"
      data-slot="chip"
      aria-pressed={selected || undefined}
      onClick={onClick}
      className={cn(
        styles,
        "cursor-pointer focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { Chip, chipVariants, type ChipProps }
