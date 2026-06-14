import { cn } from "@/lib/utils"

interface IconProps {
  name: string
  size?: 14 | 16 | 20 | 24 | 40 | 48
  filled?: boolean
  className?: string
}

export function Icon({ name, size = 24, filled = false, className }: IconProps) {
  return (
    <span
      className={cn("material-symbols-rounded select-none leading-none", className)}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
