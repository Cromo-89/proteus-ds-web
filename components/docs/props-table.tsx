interface Prop {
  name: string
  type: string
  defaultValue: string
  description: string
  required?: boolean
}

export function PropsTable({ props }: { props: Prop[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">

      {/* Mobile — cards apilados */}
      <div className="divide-y divide-border sm:hidden">
        {props.map((prop) => (
          <div key={prop.name} className="px-4 py-3 space-y-1.5">
            <div className="flex items-start justify-between gap-3">
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground shrink-0">
                {prop.name}
                {prop.required && <span className="ml-1 text-destructive">*</span>}
              </code>
              <code className="font-mono text-xs text-muted-foreground text-right">
                {prop.defaultValue}
              </code>
            </div>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed break-words">
              {prop.type}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {prop.description}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop — tabla completa */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-background-secondary">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Prop</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Tipo</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Default</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, i) => (
              <tr
                key={prop.name}
                className={i < props.length - 1 ? "border-b border-border" : ""}
              >
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                    {prop.name}
                    {prop.required && (
                      <span className="ml-1 text-destructive">*</span>
                    )}
                  </code>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground max-w-[200px]">
                  {prop.type}
                </td>
                <td className="px-4 py-3">
                  <code className="font-mono text-xs text-muted-foreground">
                    {prop.defaultValue}
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
