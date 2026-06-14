import Link from "next/link"

export function ProteusLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 select-none">
      <div className="flex size-7 items-center justify-center rounded-lg bg-primary">
        <span className="text-xs font-bold text-primary-foreground tracking-tight">P</span>
      </div>
      <span className="text-sm font-semibold tracking-tight">Proteus DS</span>
    </Link>
  )
}
