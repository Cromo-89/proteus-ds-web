import * as React from "react"
import { cn } from "@/lib/utils"

function ListItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="list-item"
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors",
        className
      )}
      {...props}
    />
  )
}

function ListItemIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="list-item-icon"
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function ListItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="list-item-content"
      className={cn("min-w-0 flex-1", className)}
      {...props}
    />
  )
}

function ListItemTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="list-item-title"
      className={cn("truncate text-sm font-medium text-foreground", className)}
      {...props}
    />
  )
}

function ListItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="list-item-description"
      className={cn("truncate text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function ListItemTrailing({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="list-item-trailing"
      className={cn("ml-auto shrink-0 text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  ListItem,
  ListItemIcon,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemTrailing,
}
