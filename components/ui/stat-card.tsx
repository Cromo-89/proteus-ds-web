import * as React from "react"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

interface StatCardTrend {
  value: string
  direction: "up" | "down"
}

interface StatCardProps extends React.ComponentProps<"div"> {
  label: string
  value: string | number
  description?: string
  icon?: string
  trend?: StatCardTrend
}

function StatCard({ label, value, description, icon, trend, className, ...props }: StatCardProps) {
  return (
    <div
      data-slot="stat-card"
      className={cn(
        "flex flex-col gap-3 rounded-xl border border-border bg-card p-5",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {icon && (
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon name={icon} size={16} />
          </div>
        )}
      </div>

      <div className="flex items-end justify-between gap-2">
        <p className="text-3xl font-bold tracking-tight tabular-nums">{value}</p>
        {trend && (
          <div
            className={cn(
              "mb-0.5 flex items-center gap-0.5 text-xs font-medium",
              trend.direction === "up" ? "text-success" : "text-destructive"
            )}
          >
            <Icon
              name={trend.direction === "up" ? "trending_up" : "trending_down"}
              size={16}
            />
            {trend.value}
          </div>
        )}
      </div>

      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

export { StatCard, type StatCardTrend }
