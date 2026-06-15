import { cn } from "@/lib/utils"

function Kbd({ className, children, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[11px] font-medium leading-none text-muted-foreground shadow-[inset_0_-1px_0_oklch(0_0_0/0.25)]",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  )
}

export { Kbd }
