import { cn } from "@/lib/utils"

interface SpinnerProps extends React.ComponentProps<"span"> {
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: "size-4 border-2",
  md: "size-5 border-2",
  lg: "size-7 border-[3px]",
}

function Spinner({ size = "md", className, ...props }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Cargando"
      data-slot="spinner"
      className={cn(
        "inline-block animate-spin rounded-full border-current border-t-transparent",
        sizes[size],
        className
      )}
      {...props}
    />
  )
}

export { Spinner }
