"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Icon } from "@/components/ui/icon"
import { SidebarNav } from "@/components/docs/sidebar-nav"
import { ProteusLogo } from "@/components/docs/proteus-logo"

export function MobileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir navegación"
        className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
      >
        <Icon name="menu" size={20} />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="border-b px-4 py-3">
            <SheetTitle className="text-left">
              <ProteusLogo />
            </SheetTitle>
          </SheetHeader>
          <div className="overflow-y-auto h-full pb-16">
            <SidebarNav onNavigate={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
