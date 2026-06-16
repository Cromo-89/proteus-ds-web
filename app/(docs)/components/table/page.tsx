import type { Metadata } from "next"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { highlight } from "@/lib/highlight"

export const metadata: Metadata = { title: "Table" }

const basicCode = `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Nombre</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Rol</TableHead>
      <TableHead>Estado</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Ana García</TableCell>
      <TableCell>ana@empresa.com</TableCell>
      <TableCell>Admin</TableCell>
      <TableCell>
        <Badge className="bg-success-bg text-success border-transparent rounded-full">
          Activo
        </Badge>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Carlos López</TableCell>
      <TableCell>carlos@empresa.com</TableCell>
      <TableCell>Editor</TableCell>
      <TableCell>
        <Badge className="bg-success-bg text-success border-transparent rounded-full">
          Activo
        </Badge>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">María Rodríguez</TableCell>
      <TableCell>maria@empresa.com</TableCell>
      <TableCell>Viewer</TableCell>
      <TableCell>
        <Badge variant="secondary" className="rounded-full">
          Inactivo
        </Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`

const footerCode = `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Concepto</TableHead>
      <TableHead>Qty</TableHead>
      <TableHead className="text-right">Subtotal</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Plan Pro — mensual</TableCell>
      <TableCell>3</TableCell>
      <TableCell className="text-right">$87.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Almacenamiento adicional</TableCell>
      <TableCell>1</TableCell>
      <TableCell className="text-right">$12.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Soporte prioritario</TableCell>
      <TableCell>1</TableCell>
      <TableCell className="text-right">$29.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2} className="font-medium">Total</TableCell>
      <TableCell className="text-right font-semibold">$128.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`

const captionCode = `<Table>
  <TableCaption>Lista de transacciones del mes de junio 2026.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Fecha</TableHead>
      <TableHead>Descripción</TableHead>
      <TableHead className="text-right">Monto</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="text-muted-foreground">01 jun</TableCell>
      <TableCell>Suscripción mensual</TableCell>
      <TableCell className="text-right text-destructive">-$29.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="text-muted-foreground">10 jun</TableCell>
      <TableCell>Pago de cliente #1042</TableCell>
      <TableCell className="text-right text-success">+$350.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="text-muted-foreground">15 jun</TableCell>
      <TableCell>Reembolso procesado</TableCell>
      <TableCell className="text-right text-destructive">-$45.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`

const avatarCode = `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Usuario</TableHead>
      <TableHead>Última actividad</TableHead>
      <TableHead className="text-right">Acciones</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Ana García</p>
            <p className="text-xs text-muted-foreground">ana@empresa.com</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground">Hace 5 min</TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" size="sm">
          <Icon name="more_horiz" size={16} />
        </Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`

const tableProps = [
  { name: "className", type: "string", defaultValue: "—", description: "Clases adicionales aplicadas al elemento table." },
]

export default async function TablePage() {
  const [basicHtml, footerHtml, captionHtml, avatarHtml] = await Promise.all([
    highlight(basicCode),
    highlight(footerCode),
    highlight(captionCode),
    highlight(avatarCode),
  ])

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-success-bg text-success border-transparent rounded-full">Stable</Badge>
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
          <h1 className="text-4xl font-bold tracking-tight">Table</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Tabla de datos estructurada con soporte completo de semántica HTML.
            Envuelve la tabla en un contenedor con{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">overflow-x-auto</code>{" "}
            para adaptarse a pantallas pequeñas.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Básico</h2>
        <p className="text-sm text-muted-foreground">
          Tabla de usuarios con columnas de texto y badges de estado.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Rol</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Ana García</TableCell>
                    <TableCell>ana@empresa.com</TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell>
                      <Badge className="bg-success-bg text-success border-transparent rounded-full">Activo</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Carlos López</TableCell>
                    <TableCell>carlos@empresa.com</TableCell>
                    <TableCell>Editor</TableCell>
                    <TableCell>
                      <Badge className="bg-success-bg text-success border-transparent rounded-full">Activo</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">María Rodríguez</TableCell>
                    <TableCell>maria@empresa.com</TableCell>
                    <TableCell>Viewer</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="rounded-full">Inactivo</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          }
          codeHtml={basicHtml}
          code={basicCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con footer — totales</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">TableFooter</code> resalta
          la fila de totales con fondo diferenciado. Útil en tablas de facturación y resúmenes.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Concepto</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead className="text-right">Subtotal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Plan Pro — mensual</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell className="text-right">$87.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Almacenamiento adicional</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell className="text-right">$12.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Soporte prioritario</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell className="text-right">$29.00</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2} className="font-medium">Total</TableCell>
                    <TableCell className="text-right font-semibold">$128.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          }
          codeHtml={footerHtml}
          code={footerCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con caption</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">TableCaption</code> agrega
          una descripción accesible debajo de la tabla. Siempre colócalo como primer hijo de{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<Table>"}</code>.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full overflow-x-auto">
              <Table>
                <TableCaption>Lista de transacciones del mes de junio 2026.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead className="text-right">Monto</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-muted-foreground">01 jun</TableCell>
                    <TableCell>Suscripción mensual</TableCell>
                    <TableCell className="text-right text-destructive">-$29.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground">10 jun</TableCell>
                    <TableCell>Pago de cliente #1042</TableCell>
                    <TableCell className="text-right text-success">+$350.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground">15 jun</TableCell>
                    <TableCell>Reembolso procesado</TableCell>
                    <TableCell className="text-right text-destructive">-$45.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          }
          codeHtml={captionHtml}
          code={captionCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Con avatar y acciones</h2>
        <p className="text-sm text-muted-foreground">
          Patrón de tabla de usuarios con avatar, subtítulo e ícono de menú de acciones.
        </p>
        <ComponentPreview
          preview={
            <div className="w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Usuario</TableHead>
                    <TableHead>Última actividad</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar size="sm">
                          <AvatarFallback>AG</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Ana García</p>
                          <p className="text-xs text-muted-foreground">ana@empresa.com</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">Hace 5 min</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Icon name="more_horiz" size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar size="sm">
                          <AvatarFallback>CL</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Carlos López</p>
                          <p className="text-xs text-muted-foreground">carlos@empresa.com</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">Hace 2 h</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Icon name="more_horiz" size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar size="sm">
                          <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">María Rodríguez</p>
                          <p className="text-xs text-muted-foreground">maria@empresa.com</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">Ayer, 14:30</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Icon name="more_horiz" size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          }
          codeHtml={avatarHtml}
          code={avatarCode}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable props={tableProps} />
        <p className="text-xs text-muted-foreground">
          Todos los sub-componentes (TableRow, TableHead, TableCell, etc.) aceptan las mismas
          props que sus elementos HTML correspondientes más <code className="rounded bg-muted px-1 font-mono">className</code>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Accesibilidad</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
          <li>Usa semántica HTML nativa: <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<table>"}</code>, <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<thead>"}</code>, <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<tbody>"}</code>, etc.</li>
          <li><code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">TableHead</code> genera <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{"<th scope=\"col\">"}</code> para una mejor lectura por screen readers.</li>
          <li><code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">TableCaption</code> añade contexto descriptivo de la tabla para tecnologías de asistencia.</li>
        </ul>
      </section>
    </article>
  )
}
