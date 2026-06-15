import type { Metadata } from "next"
import { Icon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = { title: "Toast" }

export default function ToastPage() {
  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-warning/10 text-warning border-warning/20 rounded-full">En desarrollo</Badge>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Toast</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Notificaciones efímeras que aparecen en una esquina de la pantalla
            para informar sobre el resultado de una acción sin interrumpir el flujo.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-warning/20 bg-warning/5 p-6 flex flex-col items-center gap-4 text-center">
        <div className="size-12 rounded-full bg-warning/10 flex items-center justify-center">
          <Icon name="construction" size={24} className="text-warning" />
        </div>
        <div>
          <p className="font-semibold">Componente en desarrollo</p>
          <p className="mt-1 text-sm text-muted-foreground max-w-sm">
            El componente Toast está siendo construido. Mientras tanto, puedes
            implementar notificaciones usando la librería{" "}
            <a
              href="https://sonner.emilkowal.ski/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4"
            >
              Sonner
            </a>{" "}
            que es compatible con Next.js y Tailwind.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Qué incluirá</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            "4 variantes: default, success, warning, destructive",
            "Posicionamiento: top-right, bottom-right, bottom-center",
            "Auto-dismiss con duración configurable",
            "Acción opcional dentro del toast",
            "API imperativa: toast.success(), toast.error()",
            "Soporte de promesas con estados loading/success/error",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Icon name="radio_button_unchecked" size={14} className="mt-0.5 shrink-0 text-muted-foreground/50" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
