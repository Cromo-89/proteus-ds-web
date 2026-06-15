import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Icon } from "@/components/ui/icon"

interface FormFieldProps {
  label?: string
  description?: string
  error?: string
  required?: boolean
  htmlFor?: string
  className?: string
  children: React.ReactNode
}

function FormField({
  label,
  description,
  error,
  required,
  htmlFor,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <Label htmlFor={htmlFor}>
          {label}
          {required && (
            <span className="text-destructive ml-0.5" aria-hidden="true">*</span>
          )}
        </Label>
      )}
      {children}
      {description && !error && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
      {error && (
        <p role="alert" className="flex items-center gap-1 text-xs text-destructive">
          <Icon name="error" size={14} filled />
          {error}
        </p>
      )}
    </div>
  )
}

export { FormField, type FormFieldProps }
