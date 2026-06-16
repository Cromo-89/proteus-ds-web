import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"

export const metadata: Metadata = { title: "Copywriting" }

export default function CopywritingPage() {
  return (
    <article className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-info/10 text-info border-info/20 rounded-full">Guideline</Badge>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Copywriting</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            El copy de la interfaz forma parte del diseño. Un buen texto de UI reduce la carga
            cognitiva, previene errores y hace que el producto se sienta humano. Estas guías
            aplican a botones, labels, mensajes de error, empty states, toasts y placeholders.
          </p>
        </div>
      </div>

      {/* Voz y tono */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Voz y tono</h2>
        <p className="text-sm text-muted-foreground">
          La voz es constante — refleja la personalidad del producto. El tono varía según el contexto.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              trait: "Claro",
              desc: "Usa palabras simples y directas. Evita jerga técnica cuando no es necesaria. El usuario no debería necesitar pensar en qué significa el texto.",
            },
            {
              trait: "Conciso",
              desc: "Elimina palabras que no agregan significado. Si algo puede decirse en 3 palabras en lugar de 7, usa 3.",
            },
            {
              trait: "Útil",
              desc: "Cada línea de copy debe ayudar al usuario a completar una tarea o tomar una decisión. Si no lo hace, probablemente no debería estar.",
            },
          ].map(({ trait, desc }) => (
            <div key={trait} className="rounded-xl border p-4 space-y-2">
              <p className="font-semibold text-sm">{trait}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Idioma */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Español latino neutral</h2>
        <p className="text-sm text-muted-foreground">
          Proteus DS usa español latino neutral: sin modismos locales, sin voseo argentino,
          sin tuteo marcado. El objetivo es que el copy sea natural para un usuario en México,
          Colombia, Argentina o España por igual.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-success/20 bg-success-bg/20 p-4 space-y-3">
            <p className="text-sm font-medium text-success flex items-center gap-1.5">
              <Icon name="check" size={14} />
              Usar
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>"Instala la dependencia"</li>
              <li>"Configura tu proyecto"</li>
              <li>"El archivo no se pudo guardar"</li>
              <li>"Haz clic en Aceptar"</li>
              <li>"¿Estás seguro de eliminar esto?"</li>
            </ul>
          </div>
          <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 space-y-3">
            <p className="text-sm font-medium text-destructive flex items-center gap-1.5">
              <Icon name="close" size={14} />
              Evitar
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>"Instalá la dependencia" (voseo)</li>
              <li>"Configure su proyecto" (formal excesivo)</li>
              <li>"Error 404 — ENOENT" (técnico)</li>
              <li>"Clickea en OK" (anglicismo informal)</li>
              <li>"¿Seguro?" (demasiado abreviado)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Botones y CTAs</h2>
        <p className="text-sm text-muted-foreground">
          Los labels de botón deben describir exactamente qué pasa al hacer clic.
          Usa verbos activos y específicos. Evita "OK", "Sí" o "Enviar" si puedes ser más preciso.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-6 font-medium">Contexto</th>
                <th className="text-left py-2 pr-6 font-medium text-destructive">Evitar</th>
                <th className="text-left py-2 font-medium text-success">Usar</th>
              </tr>
            </thead>
            <tbody className="divide-y text-muted-foreground">
              {[
                { ctx: "Confirmar eliminación", bad: "Sí / OK", good: "Eliminar cuenta" },
                { ctx: "Guardar cambios", bad: "Enviar / Aplicar", good: "Guardar cambios" },
                { ctx: "Registro de usuario", bad: "Submit", good: "Crear cuenta" },
                { ctx: "Descarga de archivo", bad: "Click aquí", good: "Descargar PDF" },
                { ctx: "Upgrade de plan", bad: "Continuar", good: "Actualizar a Pro" },
                { ctx: "Cerrar un modal", bad: "Cancelar", good: "Cancelar / Descartar" },
              ].map(({ ctx, bad, good }) => (
                <tr key={ctx}>
                  <td className="py-2 pr-6 font-medium text-foreground">{ctx}</td>
                  <td className="py-2 pr-6 text-destructive">{bad}</td>
                  <td className="py-2 text-success">{good}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mensajes de error */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Mensajes de error</h2>
        <p className="text-sm text-muted-foreground">
          Un buen mensaje de error explica qué ocurrió, por qué, y cómo resolverlo.
          No culpes al usuario ni uses lenguaje técnico.
        </p>
        <div className="space-y-3">
          {[
            {
              bad: "Error: 422 Unprocessable Entity",
              good: "El email ingresado no tiene un formato válido. Revisa que incluya @ y un dominio.",
              type: "Validación de formulario",
            },
            {
              bad: "Failed to fetch",
              good: "No pudimos cargar los datos. Verifica tu conexión e intenta de nuevo.",
              type: "Error de red",
            },
            {
              bad: "403 Forbidden",
              good: "No tienes permisos para ver esta página. Pide acceso a tu administrador.",
              type: "Sin permisos",
            },
            {
              bad: "Your session has expired",
              good: "Tu sesión expiró. Inicia sesión nuevamente para continuar.",
              type: "Sesión expirada",
            },
          ].map(({ bad, good, type }) => (
            <div key={type} className="rounded-xl border overflow-hidden">
              <div className="border-b bg-muted/30 px-4 py-2.5">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{type}</p>
              </div>
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x">
                <div className="px-4 py-3">
                  <p className="text-xs font-medium text-destructive mb-1.5">✗ No usar</p>
                  <p className="text-sm font-mono text-muted-foreground">{bad}</p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs font-medium text-success mb-1.5">✓ Usar</p>
                  <p className="text-sm text-foreground">{good}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholders */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Placeholders y hints</h2>
        <p className="text-sm text-muted-foreground">
          Los placeholders muestran el formato esperado, no repiten el label.
          El hint (texto de ayuda bajo el campo) se usa para restricciones o explicaciones
          que no caben en el label.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 text-sm">
          <div className="space-y-2">
            <p className="font-medium">Placeholders</p>
            <div className="rounded-lg border overflow-hidden divide-y">
              {[
                { label: "Email", placeholder: "hola@empresa.com", hint: "Muestra el formato" },
                { label: "Teléfono", placeholder: "+54 11 1234-5678", hint: "Incluye prefijo de país" },
                { label: "URL", placeholder: "https://miapp.com", hint: "Con protocolo" },
                { label: "Nombre", placeholder: "Ana García", hint: "No repetir el label" },
              ].map(({ label, placeholder, hint }) => (
                <div key={label} className="px-3 py-2.5 flex items-center justify-between gap-3">
                  <code className="text-xs font-mono text-muted-foreground shrink-0">{label}:</code>
                  <span className="text-xs text-muted-foreground italic flex-1">"{placeholder}"</span>
                  <span className="text-xs text-muted-foreground text-right shrink-0">{hint}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Hints (texto de ayuda)</p>
            <div className="rounded-lg border overflow-hidden divide-y">
              {[
                { label: "Contraseña", hint: "Mínimo 8 caracteres, una mayúscula y un número" },
                { label: "Nombre de usuario", hint: "Solo letras, números y guiones. Máximo 20 caracteres" },
                { label: "Bio", hint: "Aparece en tu perfil público. Máximo 160 caracteres" },
                { label: "Slug", hint: "Se usará en la URL: tuapp.com/blog/tu-slug" },
              ].map(({ label, hint }) => (
                <div key={label} className="px-3 py-2.5">
                  <p className="text-xs font-medium text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{hint}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capitalización */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Capitalización</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 font-medium">Elemento</th>
                <th className="text-left py-2 pr-4 font-medium">Regla</th>
                <th className="text-left py-2 font-medium">Ejemplo</th>
              </tr>
            </thead>
            <tbody className="divide-y text-muted-foreground">
              {[
                { el: "Titles (H1, H2)", rule: "Title Case", ex: "Gestión de Proyectos" },
                { el: "Botones y CTAs", rule: "Title Case", ex: "Guardar Cambios" },
                { el: "Labels de formulario", rule: "Sentence case", ex: "Nombre completo" },
                { el: "Placeholders", rule: "Sentence case", ex: "Escribe aquí..." },
                { el: "Mensajes de error", rule: "Sentence case", ex: "El campo es requerido." },
                { el: "Tooltips y hints", rule: "Sentence case", ex: "Máximo 100 caracteres" },
                { el: "Navegación / menús", rule: "Title Case", ex: "Mis Proyectos" },
                { el: "Tags / Badges", rule: "Title Case corto", ex: "En Progreso" },
              ].map(({ el, rule, ex }) => (
                <tr key={el}>
                  <td className="py-2 pr-4 text-foreground font-medium">{el}</td>
                  <td className="py-2 pr-4">{rule}</td>
                  <td className="py-2 font-mono text-xs">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Puntuación */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Puntuación</h2>
        <div className="grid gap-3 sm:grid-cols-2 text-sm">
          {[
            { rule: "Sin punto final en labels y botones", ex: '"Guardar cambios" no "Guardar cambios."' },
            { rule: "Con punto en mensajes de más de una oración", ex: '"El archivo no se encontró. Verifica la ruta."' },
            { rule: "Evita signos de exclamación excesivos", ex: '"Proyecto creado" no "¡Proyecto creado! 🎉"' },
            { rule: "Usa comas para listas de 3+ items", ex: '"archivos, carpetas y permisos"' },
            { rule: "Usa guiones em (—) para pausas largas", ex: '"Configuración — Plan y facturación"' },
            { rule: "Evita mayúsculas sostenidas (SCREAMING CAPS)", ex: '"Advertencia" no "ADVERTENCIA"' },
          ].map(({ rule, ex }) => (
            <div key={rule} className="rounded-lg border p-3 space-y-1">
              <p className="font-medium text-sm">{rule}</p>
              <p className="text-xs text-muted-foreground font-mono">{ex}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
