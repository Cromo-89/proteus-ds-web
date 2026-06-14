import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/docs/theme-toggle"
import { MobileSidebar } from "@/components/docs/mobile-sidebar"
import { ProteusLogo } from "@/components/docs/proteus-logo"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function Topbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-3 px-4">
        {/* Mobile trigger */}
        <MobileSidebar />

        {/* Logo — hidden on mobile (shown in Sheet), visible on md+ */}
        <div className="hidden md:flex">
          <ProteusLogo />
        </div>

        {/* Logo on mobile */}
        <div className="flex md:hidden">
          <ProteusLogo />
        </div>

        {/* Search placeholder */}
        <button
          className="flex flex-1 max-w-sm items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted mx-auto md:mx-0 md:ml-6"
          aria-label="Search documentation"
        >
          <svg
            className="size-3.5 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="hidden sm:inline">Buscar componentes...</span>
          <kbd className="ml-auto hidden sm:flex items-center gap-0.5 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            <span>⌘</span>K
          </kbd>
        </button>

        <div className="flex items-center gap-1 ml-auto">
          <Badge variant="outline" className="hidden sm:flex text-xs font-mono">
            v0.1.0
          </Badge>

          <Link
            href="https://github.com/Cromo-89/proteus-ds-web"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
