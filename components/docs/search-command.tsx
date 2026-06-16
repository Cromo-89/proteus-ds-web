"use client"

import { useState, useEffect, useTransition } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"
import { Icon } from "@/components/ui/icon"
import { navigation } from "@/lib/navigation"

export function SearchCommand() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [, startTransition] = useTransition()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  function handleSelect(href: string) {
    setOpen(false)
    startTransition(() => {
      router.push(href)
    })
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex flex-1 max-w-sm items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted mx-auto md:mx-0 md:ml-6"
        aria-label="Buscar en la documentación"
      >
        <Icon name="search" size={20} className="text-muted-foreground shrink-0" />
        <span className="hidden sm:inline">Buscar componentes...</span>
        <kbd className="ml-auto hidden sm:flex items-center gap-0.5 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          <span>⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscar componentes, foundations..." />
        <CommandList>
          <CommandEmpty>Sin resultados.</CommandEmpty>
          {navigation.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.title}
                  onSelect={() => handleSelect(item.href)}
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
