import { highlight } from "@/lib/highlight"
import { CopyButton } from "@/components/docs/copy-button"

interface CodeBlockProps {
  code: string
  lang?: string
  showCopy?: boolean
}

export async function CodeBlock({ code, lang = "tsx", showCopy = true }: CodeBlockProps) {
  const html = await highlight(code, lang)

  return (
    <div className="group relative">
      {showCopy && (
        <div className="absolute right-3 top-3 z-10 opacity-0 transition-opacity group-hover:opacity-100">
          <CopyButton text={code} />
        </div>
      )}
      <div
        className="overflow-hidden rounded-xl text-sm [&>pre]:overflow-x-auto [&>pre]:p-5 [&>pre]:leading-relaxed"
        style={{ background: "#282c34" }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
