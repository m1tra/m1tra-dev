import { NeoBrutalButton } from "@/components/ui/button"

export default function ButtonDemo() {
  const buttons = [
    { variant: "default", label: "Default" },
    { variant: "pink", label: "Pink" },
    { variant: "green", label: "Green" },
    { variant: "orange", label: "Orange" },
    { variant: "purple", label: "Purple" },
    { variant: "red", label: "Red" },
  ] as const

  return (
    <div className="flex flex-wrap gap-4">
      {buttons.map((btn) => (
        <NeoBrutalButton key={btn.variant} variant={btn.variant}>
          {btn.label}
        </NeoBrutalButton>
      ))}
    </div>
  )
}