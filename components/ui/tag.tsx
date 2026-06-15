import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

interface TagProps extends React.ComponentProps<"span"> {
  variant?: "default" | "secondary" | "outline" | "destructive" | "success" | "warning" | "info"
  onDismiss?: () => void
}

const tagVariants: Record<NonNullable<TagProps["variant"]>, string> = {
  default:     "bg-primary/10 text-primary border-primary/20",
  secondary:   "bg-secondary text-secondary-foreground border-border",
  outline:     "bg-transparent text-foreground border-border",
  destructive: "bg-destructive/10 text-destructive border-destructive/20",
  success:     "bg-success-bg text-success border-success/20",
  warning:     "bg-warning/10 text-warning border-warning/20",
  info:        "bg-info/10 text-info border-info/20",
}

function Tag({ variant = "default", onDismiss, className, children, ...props }: TagProps) {
  return (
    <span
      data-slot="tag"
      className={cn(
        "inline-flex h-6 items-center gap-1 rounded-full border px-2.5 text-xs font-medium",
        tagVariants[variant],
        className
      )}
      {...props}
    >
      {children}
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Eliminar"
          className="-mr-1 ml-0.5 flex size-4 items-center justify-center rounded-full opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <Icon name="close" size={14} />
        </button>
      )}
    </span>
  )
}

export { Tag, type TagProps }
