import { Topbar } from "@/components/docs/topbar"
import { Sidebar } from "@/components/docs/sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Topbar />
      <div className="flex min-w-0">
        <Sidebar />
        <main className="flex-1 min-w-0 overflow-x-clip md:pl-60">
          <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
