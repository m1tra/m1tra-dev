import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "../lib/utils"

interface NeoBrutalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "pink" | "green" | "orange" | "purple" | "red"
}

const gradientMap: Record<NonNullable<NeoBrutalButtonProps["variant"]>, string> = {
  default: "linear-gradient(to top, #a78bfa, #8b5cf6)", // violet
  pink: "linear-gradient(to top, #f9a8d4, #f472b6)",   // pink
  green: "linear-gradient(to top, #4ade80, #22c55e)",  // green
  orange: "linear-gradient(to top, #fb923c, #f97316)", // orange
  purple: "linear-gradient(to top, #c084fc, #a855f7)", // purple
  red: "linear-gradient(to top, #f87171, #ef4444)",    // red
}

const NeoBrutalButton = forwardRef<HTMLButtonElement, NeoBrutalButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "border-4 border-white px-6 py-3 font-bold shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-transform",
          className
        )}
        style={{
          backgroundImage: `url('/noise.svg'), ${gradientMap[variant]}`,
          backgroundBlendMode: "overlay",
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)

NeoBrutalButton.displayName = "NeoBrutalButton"

export { NeoBrutalButton }
