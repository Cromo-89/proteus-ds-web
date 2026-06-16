"use client"

import { useState } from "react"
import { CopyButton } from "@/components/docs/copy-button"

interface ComponentPreviewProps {
  preview: React.ReactNode
  codeHtml: string
  code: string
}

export function ComponentPreview({ preview, codeHtml, code }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview")

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-border bg-background-secondary px-4">
        <div className="flex">
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={[
                "border-b-2 px-3 py-2.5 text-xs font-medium capitalize transition-colors",
                tab === t
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              {t === "preview" ? "Preview" : "Código"}
            </button>
          ))}
        </div>
        {tab === "code" && (
          <CopyButton text={code} />
        )}
      </div>

      {/* Content */}
      {tab === "preview" ? (
        <div className="flex min-h-48 items-center justify-center bg-card p-4 sm:p-8">
          {preview}
        </div>
      ) : (
        <div
          className="text-sm [&>div>pre]:overflow-x-auto [&>div>pre]:p-5 [&>div>pre]:leading-relaxed"
          style={{ background: "#282c34" }}
          dangerouslySetInnerHTML={{ __html: codeHtml }}
        />
      )}
    </div>
  )
}
