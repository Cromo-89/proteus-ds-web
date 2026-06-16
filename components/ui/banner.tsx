import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const bannerVariants = cva(
  "relative flex w-full items-center gap-3 px-4 py-2.5 text-sm border-b",
  {
    variants: {
      variant: {
        default:     "bg-primary/8 text-foreground border-primary/20",
        info:        "bg-info/8 text-info border-info/20",
        success:     "bg-success/8 text-success border-success/20",
        warning:     "bg-warning/8 text-warning border-warning/20",
        destructive: "bg-destructive/8 text-destructive border-destructive/20",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Banner({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof bannerVariants>) {
  return (
    <div
      data-slot="banner"
      role="status"
      aria-live="polite"
      className={cn(bannerVariants({ variant }), className)}
      {...props}
    />
  )
}

function BannerContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="banner-content"
      className={cn("flex flex-1 items-center justify-center gap-2", className)}
      {...props}
    />
  )
}

function BannerActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="banner-actions"
      className={cn("ml-auto flex shrink-0 items-center gap-1", className)}
      {...props}
    />
  )
}

export { Banner, BannerContent, BannerActions, bannerVariants }
