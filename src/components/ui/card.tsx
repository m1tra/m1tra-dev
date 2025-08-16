import { type HTMLAttributes, forwardRef } from "react"
import { cn } from "../lib/utils"

interface NeoBrutalCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "pink" | "green" | "orange" | "purple" | "red"
}

const gradientMap: Record<NonNullable<NeoBrutalCardProps["variant"]>, string> = {
  default: "linear-gradient(to top, #a78bfa, #8b5cf6)", // violet-400 → violet-500
  pink: "linear-gradient(to top, #f9a8d4, #f472b6)",   // pink-300 → pink-400
  green: "linear-gradient(to top, #4ade80, #22c55e)",  // green-400 → green-500
  orange: "linear-gradient(to top, #fb923c, #f97316)", // orange-400 → orange-500
  purple: "linear-gradient(to top, #c084fc, #a855f7)", // purple-400 → purple-500
  red: "linear-gradient(to top, #f87171, #ef4444)",    // red-400 → red-500
}

const Card = forwardRef<HTMLDivElement, NeoBrutalCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        className={cn(
          "border-4 p-5 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]",
          className
        )}
        style={{
          backgroundImage: `url('/noise.svg'), ${gradientMap[variant]}`,
          backgroundBlendMode: "overlay",
        }}
        ref={ref}
        {...props}
      />
    )
  }
)

Card.displayName = "Card"

export { Card }
