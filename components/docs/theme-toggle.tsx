"use client"

import { useTheme } from "next-themes"
import { Icon } from "@/components/ui/icon"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Cambiar tema"
      className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {theme === "dark" ? (
        <Icon name="light_mode" size={20} />
      ) : (
        <Icon name="dark_mode" size={20} />
      )}
    </button>
  )
}
