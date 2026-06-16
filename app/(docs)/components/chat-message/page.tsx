import type { Metadata } from "next"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ComponentPreview } from "@/components/docs/component-preview"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Chat Message" }

const basicCode = `{/* Mensaje recibido (izquierda) */}
<div className="flex gap-3 max-w-xs">
  <Avatar size="sm">
    <AvatarFallback>AG</AvatarFallback>
  </Avatar>
  <div>
    <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm">
      Hola, ¿cómo va el diseño del nuevo componente?
    </div>
    <p className="mt-1 text-xs text-muted-foreground">Ana · 10:32</p>
  </div>
</div>

{/* Mensaje enviado (derecha) */}
<div className="flex gap-3 max-w-xs ml-auto flex-row-reverse">
  <Avatar size="sm">
    <AvatarFallback>Tú</AvatarFallback>
  </Avatar>
  <div>
    <div className="rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-sm text-primary-foreground">
      Muy bien, casi listo. Te lo muestro en un momento.
    </div>
    <p className="mt-1 text-xs text-muted-foreground text-right">10:34</p>
  </div>
</div>`

const threadCode = `<div className="flex flex-col gap-4 p-4 max-w-sm">
  {/* Mensaje recibido */}
  <div className="flex gap-2">
    <Avatar size="sm">
      <AvatarFallback>AG</AvatarFallback>
    </Avatar>
    <div className="space-y-1">
      <p className="text-xs font-medium text-muted-foreground">Ana García</p>
      <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm">
        ¿Revisaste los tokens de color que subí ayer?
      </div>
    </div>
  </div>

  {/* Respuesta enviada */}
  <div className="flex gap-2 flex-row-reverse">
    <Avatar size="sm">
      <AvatarFallback>Yo</AvatarFallback>
    </Avatar>
    <div className="space-y-1 items-end flex flex-col">
      <div className="rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-sm text-primary-foreground">
        Sí, se ven bien. Solo un ajuste en el azul secundario.
      </div>
    </div>
  </div>
</div>`

const systemCode = `<div className="flex flex-col gap-4 p-4">
  {/* Mensaje del sistema */}
  <div className="flex items-center gap-3">
    <div className="flex-1 h-px bg-border" />
    <p className="text-xs text-muted-foreground whitespace-nowrap">
      Ana García se unió a la conversación
    </p>
    <div className="flex-1 h-px bg-border" />
  </div>

  {/* Mensajes normales continúan */}
  <div className="flex gap-2">
    <Avatar size="sm">
      <AvatarFallback>AG</AvatarFallback>
    </Avatar>
    <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm">
      ¡Hola a todos! 👋
    </div>
  </div>
</div>`

export default async function ChatMessagePage() {
  const [basicHtml, threadHtml, systemHtml] = await Promise.all([
    highlight(basicCode),
    highlight(threadCode),
    highlight(systemCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-info/10 text-info border-info/20 rounded-full">Pattern</Badge>
          <a
            href="https://www.figma.com/design/Ohc3OVwwd3MwI4SvIdk3EY"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon name="open_in_new" size={14} />
            Ver en Figma
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Chat Message</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Burbuja de mensaje para interfaces de chat. Se diferencia visualmente
            el mensaje propio (burbuja primaria, derecha) del ajeno (burbuja muted, izquierda).
            Patrón de composición sin componente dedicado.
          </p>
        </div>
        <div className="rounded-lg border border-info/20 bg-info/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Patrón, no componente:</strong> Se construye
          con Avatar y clases de Tailwind. El diseño de burbuja usa{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">rounded-2xl</code>{" "}
          con una esquina plana hacia el avatar.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Recibido y enviado</h2>
        <p className="text-sm text-muted-foreground">
          Recibido: burbuja en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">bg-muted</code>,
          esquina superior izquierda plana (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">rounded-tl-sm</code>),
          alineado a la izquierda.
          Enviado: burbuja en <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">bg-primary</code>,
          esquina superior derecha plana, alineado a la derecha con{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">flex-row-reverse</code>.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-full max-w-sm px-2">
              <div className="flex gap-3 max-w-xs">
                <Avatar size="sm">
                  <AvatarFallback>AG</AvatarFallback>
                </Avatar>
                <div>
                  <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm">
                    Hola, ¿cómo va el diseño del nuevo componente?
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Ana · 10:32</p>
                </div>
              </div>
              <div className="flex gap-3 max-w-xs ml-auto flex-row-reverse">
                <Avatar size="sm">
                  <AvatarFallback>Tú</AvatarFallback>
                </Avatar>
                <div>
                  <div className="rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-sm text-primary-foreground">
                    Muy bien, casi listo. Te lo muestro en un momento.
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground text-right">10:34</p>
                </div>
              </div>
              <div className="flex gap-3 max-w-xs">
                <Avatar size="sm">
                  <AvatarFallback>AG</AvatarFallback>
                </Avatar>
                <div>
                  <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm">
                    Perfecto, espero el link de Figma.
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Ana · 10:35</p>
                </div>
              </div>
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con nombre de remitente</h2>
        <p className="text-sm text-muted-foreground">
          En chats grupales, muestra el nombre del remitente encima de la burbuja
          del mensaje recibido.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-full max-w-sm px-2">
              <div className="flex gap-2">
                <Avatar size="sm">
                  <AvatarFallback>AG</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">Ana García</p>
                  <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm">
                    ¿Revisaste los tokens de color que subí ayer?
                  </div>
                </div>
              </div>
              <div className="flex gap-2 flex-row-reverse">
                <Avatar size="sm">
                  <AvatarFallback>Yo</AvatarFallback>
                </Avatar>
                <div className="space-y-1 items-end flex flex-col">
                  <div className="rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-sm text-primary-foreground">
                    Sí, se ven bien. Solo un ajuste en el azul secundario.
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Avatar size="sm">
                  <AvatarFallback>CL</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">Carlos López</p>
                  <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm">
                    Concuerdo, el hue estaba un poco desviado.
                  </div>
                </div>
              </div>
            </div>
          }
          codeHtml={threadHtml}
          code={threadCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Mensaje del sistema</h2>
        <p className="text-sm text-muted-foreground">
          Para eventos del sistema (usuario añadido, conversación archivada). Sin avatar,
          centrado con líneas laterales.
        </p>
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-full max-w-sm px-2">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  Ana García se unió a la conversación
                </p>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="flex gap-2">
                <Avatar size="sm">
                  <AvatarFallback>AG</AvatarFallback>
                </Avatar>
                <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm">
                  ¡Hola a todos!
                </div>
              </div>
            </div>
          }
          codeHtml={systemHtml}
          code={systemCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Anatomía</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li><strong className="text-foreground">Recibido</strong>: flex-row, Avatar izq., burbuja muted, rounded-tl-sm</li>
          <li><strong className="text-foreground">Enviado</strong>: flex-row-reverse, Avatar der., burbuja primary, rounded-tr-sm</li>
          <li><strong className="text-foreground">Timestamp</strong>: debajo de la burbuja, text-right en enviados</li>
          <li><strong className="text-foreground">Sistema</strong>: centrado, sin avatar, líneas laterales</li>
        </ul>
      </section>
    </article>
  )
}
