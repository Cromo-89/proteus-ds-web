"use client"

import { Fragment, useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Icon } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
} from "@/components/ui/stepper"
import { Rating } from "@/components/ui/rating"

const STEPPER_STEPS = [
  { title: "Cuenta", description: "Información básica" },
  { title: "Pago", description: "Datos de pago" },
  { title: "Confirmación", description: "Revisar pedido" },
]

export function StepperInteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <Stepper>
        {STEPPER_STEPS.map((s, index) => {
          const step = index + 1
          const state =
            step < currentStep ? "completed" : step === currentStep ? "current" : "upcoming"
          const isLast = index === STEPPER_STEPS.length - 1
          return (
            <Fragment key={step}>
              <StepperItem>
                <StepperIndicator step={step} state={state} />
                <StepperTitle className={state === "upcoming" ? "text-muted-foreground" : ""}>
                  {s.title}
                </StepperTitle>
                <StepperDescription>{s.description}</StepperDescription>
              </StepperItem>
              {!isLast && <StepperSeparator completed={step < currentStep} />}
            </Fragment>
          )
        })}
      </Stepper>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={currentStep <= 1}
          onClick={() => setCurrentStep((s) => s - 1)}
        >
          Anterior
        </Button>
        <Button
          size="sm"
          disabled={currentStep >= STEPPER_STEPS.length}
          onClick={() => setCurrentStep((s) => s + 1)}
        >
          Siguiente
        </Button>
        <span className="ml-auto text-xs text-muted-foreground">
          {currentStep} / {STEPPER_STEPS.length}
        </span>
      </div>
    </div>
  )
}

export function RatingInteractiveDemo() {
  const [value, setValue] = useState(0)

  return (
    <div className="flex flex-col gap-2">
      <Rating value={value} onValueChange={setValue} />
      <p className="text-sm text-muted-foreground">
        {value === 0 ? "Sin calificación" : `${value} de 5 estrellas`}
      </p>
    </div>
  )
}

export function SegmentedControlBasicDemo() {
  const [selected, setSelected] = useState("month")
  return (
    <ToggleGroup
      spacing={0}
      variant="outline"
      value={[selected]}
      onValueChange={(vals: string[]) => {
        const next = vals.find((v) => v !== selected)
        if (next) setSelected(next)
      }}
    >
      <ToggleGroupItem value="week">Semana</ToggleGroupItem>
      <ToggleGroupItem value="month">Mes</ToggleGroupItem>
      <ToggleGroupItem value="year">Año</ToggleGroupItem>
    </ToggleGroup>
  )
}

export function SegmentedControlIconsDemo() {
  const [selected, setSelected] = useState("list")
  return (
    <ToggleGroup
      spacing={0}
      variant="outline"
      value={[selected]}
      onValueChange={(vals: string[]) => {
        const next = vals.find((v) => v !== selected)
        if (next) setSelected(next)
      }}
    >
      <ToggleGroupItem value="list">
        <Icon name="view_list" size={16} />
        Lista
      </ToggleGroupItem>
      <ToggleGroupItem value="grid">
        <Icon name="grid_view" size={16} />
        Cuadrícula
      </ToggleGroupItem>
      <ToggleGroupItem value="kanban">
        <Icon name="view_kanban" size={16} />
        Kanban
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export function SegmentedControlSmDemo() {
  const [selected, setSelected] = useState("day")
  return (
    <ToggleGroup
      spacing={0}
      size="sm"
      variant="outline"
      value={[selected]}
      onValueChange={(vals: string[]) => {
        const next = vals.find((v) => v !== selected)
        if (next) setSelected(next)
      }}
    >
      <ToggleGroupItem value="day">Día</ToggleGroupItem>
      <ToggleGroupItem value="week">Semana</ToggleGroupItem>
      <ToggleGroupItem value="month">Mes</ToggleGroupItem>
      <ToggleGroupItem value="year">Año</ToggleGroupItem>
    </ToggleGroup>
  )
}

export function SegmentedControlVerticalDemo() {
  const [selected, setSelected] = useState("profile")
  return (
    <ToggleGroup
      spacing={0}
      variant="outline"
      orientation="vertical"
      value={[selected]}
      onValueChange={(vals: string[]) => {
        const next = vals.find((v) => v !== selected)
        if (next) setSelected(next)
      }}
    >
      <ToggleGroupItem value="profile">
        <Icon name="person" size={16} />
        Perfil
      </ToggleGroupItem>
      <ToggleGroupItem value="notifications">
        <Icon name="notifications" size={16} />
        Notificaciones
      </ToggleGroupItem>
      <ToggleGroupItem value="security">
        <Icon name="shield" size={16} />
        Seguridad
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
