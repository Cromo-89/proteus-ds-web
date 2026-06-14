"use client"

import { useState } from "react"
import { Icon } from "@/components/ui/icon"

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      aria-label={copied ? "Copiado" : "Copiar código"}
      className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
    >
      <Icon name={copied ? "check" : "content_copy"} size={16} />
    </button>
  )
}
