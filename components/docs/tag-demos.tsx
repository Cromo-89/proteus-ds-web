"use client"

import { useState } from "react"
import { Tag } from "@/components/ui/tag"

export function TagFilterDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-xs text-muted-foreground self-center">Filtros activos:</span>
      <Tag variant="secondary" onDismiss={() => {}}>Categoría: UI</Tag>
      <Tag variant="secondary" onDismiss={() => {}}>Estado: Activo</Tag>
      <Tag variant="secondary" onDismiss={() => {}}>Autor: Ana García</Tag>
    </div>
  )
}

const INITIAL = ["React", "TypeScript", "Tailwind CSS", "Next.js"]

export function TagDismissibleDemo() {
  const [tags, setTags] = useState(INITIAL)
  const remove = (t: string) => setTags((prev) => prev.filter((x) => x !== t))
  return (
    <div className="flex flex-wrap gap-2 min-h-[24px]">
      {tags.length === 0 ? (
        <span className="text-xs text-muted-foreground">Todos eliminados — recarga para reiniciar.</span>
      ) : (
        tags.map((t) => (
          <Tag key={t} onDismiss={() => remove(t)}>
            {t}
          </Tag>
        ))
      )}
    </div>
  )
}
