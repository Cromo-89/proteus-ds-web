"use client"

import { useState } from "react"
import { Tag } from "@/components/ui/tag"

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
