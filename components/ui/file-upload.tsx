"use client"

import { useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

interface FileUploadProps {
  accept?: string
  multiple?: boolean
  maxSize?: number
  disabled?: boolean
  onFiles?: (files: File[]) => void
  className?: string
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function FileUpload({
  accept,
  multiple,
  maxSize,
  disabled,
  onFiles,
  className,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<string[]>([])

  const processFiles = (raw: FileList | null) => {
    if (!raw) return
    const list = Array.from(raw)
    const valid: File[] = []
    const errs: string[] = []

    for (const file of list) {
      if (maxSize && file.size > maxSize) {
        errs.push(`"${file.name}" supera el límite de ${formatBytes(maxSize)}.`)
      } else {
        valid.push(file)
      }
    }

    setFiles(multiple ? (prev) => [...prev, ...valid] : valid)
    setErrors(errs)
    if (valid.length) onFiles?.(valid)
  }

  const remove = (index: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== index))

  return (
    <div data-slot="file-upload" className={cn("w-full", className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setIsDragging(false)
          processFiles(e.dataTransfer.files)
        }}
        aria-label="Seleccionar archivo"
        className={cn(
          "flex w-full flex-col items-center gap-3 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors",
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border bg-background hover:border-primary/40 hover:bg-muted/20",
          disabled && "pointer-events-none opacity-50"
        )}
      >
        <div className="flex size-10 items-center justify-center rounded-full bg-muted">
          <Icon name="upload" size={20} className="text-muted-foreground" />
        </div>
        <div>
          <p className="text-sm font-medium">
            {isDragging ? "Suelta aquí" : "Arrastra y suelta aquí"}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            o{" "}
            <span className="text-primary underline underline-offset-2">
              selecciona {multiple ? "archivos" : "un archivo"}
            </span>
            {accept && ` · ${accept}`}
            {maxSize && ` · máx. ${formatBytes(maxSize)}`}
          </p>
        </div>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={(e) => processFiles(e.target.files)}
        className="sr-only"
      />

      {errors.length > 0 && (
        <ul className="mt-2 space-y-1">
          {errors.map((err, i) => (
            <li key={i} className="flex items-center gap-1.5 text-xs text-destructive">
              <Icon name="error" size={14} />
              {err}
            </li>
          ))}
        </ul>
      )}

      {files.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {files.map((file, i) => (
            <li
              key={i}
              className="flex items-center gap-2 rounded-lg border border-border/60 bg-card px-3 py-2 text-sm"
            >
              <Icon name="description" size={16} className="shrink-0 text-muted-foreground" />
              <span className="flex-1 truncate">{file.name}</span>
              <span className="shrink-0 text-xs text-muted-foreground">
                {formatBytes(file.size)}
              </span>
              <button
                type="button"
                onClick={() => remove(i)}
                aria-label={`Eliminar ${file.name}`}
                className="shrink-0 rounded p-0.5 opacity-50 transition-opacity hover:opacity-100"
              >
                <Icon name="close" size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { FileUpload }
