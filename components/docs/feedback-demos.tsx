"use client"

import { useState, useRef } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { Banner, BannerContent, BannerActions } from "@/components/ui/banner"
import { Icon } from "@/components/ui/icon"

/* ── Toast demos ─────────────────────────────────────────── */

export function ToastDefaultDemo() {
  return (
    <Button variant="outline" onClick={() => toast("Cambios guardados correctamente.")}>
      Default
    </Button>
  )
}

export function ToastSuccessDemo() {
  return (
    <Button variant="outline" onClick={() => toast.success("Proyecto publicado exitosamente.")}>
      Success
    </Button>
  )
}

export function ToastErrorDemo() {
  return (
    <Button variant="outline" onClick={() => toast.error("No se pudo guardar. Intenta de nuevo.")}>
      Error
    </Button>
  )
}

export function ToastWarningDemo() {
  return (
    <Button variant="outline" onClick={() => toast.warning("El archivo supera el límite de 10 MB.")}>
      Warning
    </Button>
  )
}

export function ToastPromiseDemo() {
  const handlePromise = () => {
    const promise = new Promise<{ name: string }>((resolve) =>
      setTimeout(() => resolve({ name: "informe-q4.pdf" }), 2000)
    )
    toast.promise(promise, {
      loading: "Exportando...",
      success: (data) => `${data.name} exportado correctamente.`,
      error: "Error al exportar el archivo.",
    })
  }
  return (
    <Button variant="outline" onClick={handlePromise}>
      <Icon name="download" size={16} />
      Exportar
    </Button>
  )
}

export function ToastActionDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Mensaje enviado.", {
          action: {
            label: "Deshacer",
            onClick: () => toast.success("Mensaje cancelado."),
          },
        })
      }
    >
      Con acción
    </Button>
  )
}

export function ToastAllDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <ToastDefaultDemo />
      <ToastSuccessDemo />
      <ToastErrorDemo />
      <ToastWarningDemo />
      <ToastActionDemo />
      <ToastPromiseDemo />
    </div>
  )
}

/* ── Banner demos ────────────────────────────────────────── */

export function BannerDismissDemo() {
  const [visible, setVisible] = useState(true)
  return (
    <div className="w-full">
      {visible ? (
        <Banner variant="info">
          <BannerContent>
            <Icon name="info" size={16} />
            <span>Nueva versión disponible. Actualiza para ver los últimos cambios.</span>
          </BannerContent>
          <BannerActions>
            <button
              aria-label="Cerrar banner"
              onClick={() => setVisible(false)}
              className="rounded p-1 opacity-60 transition-opacity hover:opacity-100"
            >
              <Icon name="close" size={16} />
            </button>
          </BannerActions>
        </Banner>
      ) : (
        <p className="py-2 text-center text-sm text-muted-foreground">
          Banner descartado.{" "}
          <button
            onClick={() => setVisible(true)}
            className="text-primary underline underline-offset-4"
          >
            Mostrar de nuevo
          </button>
        </p>
      )}
    </div>
  )
}

/* ── Progress demos ──────────────────────────────────────── */

export function ProgressAnimatedDemo() {
  const [value, setValue] = useState(0)
  const running = useRef(false)

  const start = () => {
    if (running.current) return
    running.current = true
    setValue(0)
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          running.current = false
          return 100
        }
        return prev + Math.floor(Math.random() * 12) + 3
      })
    }, 180)
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Progress value={value}>
        <ProgressLabel>Subiendo archivo</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Button variant="outline" size="sm" onClick={start} className="self-start">
        <Icon name="play_arrow" size={16} />
        Iniciar
      </Button>
    </div>
  )
}
