import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const calloutVariants = cva(
  "flex gap-3 rounded-lg border p-4 text-sm",
  {
    variants: {
      variant: {
        default:     "border-border bg-card text-foreground",
        info:        "border-info/30 bg-info/5 text-foreground",
        success:     "border-success/30 bg-success/5 text-foreground",
        warning:     "border-warning/30 bg-warning/5 text-foreground",
        destructive: "border-destructive/30 bg-destructive/5 text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Callout({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof calloutVariants>) {
  return (
    <div
      data-slot="callout"
      className={cn(calloutVariants({ variant }), className)}
      {...props}
    />
  )
}

function CalloutIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="callout-icon"
      className={cn("mt-0.5 shrink-0", className)}
      {...props}
    />
  )
}

function CalloutContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="callout-content"
      className={cn("flex min-w-0 flex-col gap-1", className)}
      {...props}
    />
  )
}

function CalloutTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="callout-title"
      className={cn("font-semibold leading-snug", className)}
      {...props}
    />
  )
}

function CalloutDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="callout-description"
      className={cn("leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  )
}

export { Callout, CalloutIcon, CalloutContent, CalloutTitle, CalloutDescription }
