import { SidebarNav } from "@/components/docs/sidebar-nav"

export function Sidebar() {
  return (
    <aside className="fixed top-14 left-0 z-40 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 border-r border-border overflow-y-auto md:block">
      <SidebarNav />
    </aside>
  )
}
