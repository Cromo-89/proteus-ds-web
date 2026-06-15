"use client"

const ITEMS = [
  "54 Componentes",
  "Dark Mode First",
  "OKLCH Color System",
  "TypeScript nativo",
  "Base UI primitives",
  "Next.js 16",
  "Tailwind v4",
  "Accesible",
  "shadcn/ui compatible",
  "Figma Kit",
]

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <>
      <style>{`
        @keyframes marquee-slide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-slide 32s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="relative flex overflow-hidden border-y border-border/30 bg-background-secondary/50 py-3.5">
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute left-0 inset-y-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, var(--background-secondary), transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 inset-y-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, var(--background-secondary), transparent)" }}
        />

        <div className="marquee-track flex shrink-0 items-center">
          {doubled.map((item, i) => (
            <div key={i} className="flex shrink-0 items-center gap-4 px-6">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/45 whitespace-nowrap">
                {item}
              </span>
              <span className="size-[3px] rounded-full bg-primary/25 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
