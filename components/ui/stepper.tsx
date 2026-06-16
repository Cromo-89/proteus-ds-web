import * as React from "react"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

export type StepState = "completed" | "current" | "upcoming"

function Stepper({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stepper"
      className={cn("flex w-full items-start", className)}
      {...props}
    />
  )
}

function StepperItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stepper-item"
      className={cn("flex flex-col items-center gap-1.5", className)}
      {...props}
    />
  )
}

function StepperIndicator({
  step,
  state = "upcoming",
  className,
  ...props
}: {
  step?: number
  state?: StepState
} & Omit<React.ComponentProps<"div">, "children">) {
  return (
    <div
      data-slot="stepper-indicator"
      data-state={state}
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
        state === "completed" && "border-primary bg-primary text-primary-foreground",
        state === "current" && "border-primary bg-background text-primary",
        state === "upcoming" && "border-border bg-background text-muted-foreground",
        className
      )}
      {...props}
    >
      {state === "completed" ? <Icon name="check" size={16} /> : <span>{step}</span>}
    </div>
  )
}

function StepperSeparator({
  completed,
  className,
  ...props
}: { completed?: boolean } & Omit<React.ComponentProps<"div">, "children">) {
  return (
    <div
      data-slot="stepper-separator"
      className={cn(
        "mt-4 h-0.5 flex-1 transition-colors",
        completed ? "bg-primary" : "bg-border",
        className
      )}
      {...props}
    />
  )
}

function StepperTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="stepper-title"
      className={cn("text-center text-xs font-medium leading-tight", className)}
      {...props}
    />
  )
}

function StepperDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="stepper-description"
      className={cn("text-center text-[11px] text-muted-foreground leading-tight", className)}
      {...props}
    />
  )
}

export {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
}
