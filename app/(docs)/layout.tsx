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
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:pl-60">
          <div className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
