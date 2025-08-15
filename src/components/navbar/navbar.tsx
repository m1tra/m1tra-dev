"use client"
import type React from "react"
import type { LucideIcon } from "lucide-react"
import SliceLogic from "./slice-logic"

export interface SliceProps {
  href: string
  title: string
  icon: LucideIcon
  color: string
}

type Props = { children: React.ReactNode }

export default function Navbar({ children }: Props) {
  return (
    <nav className="fixed inset-0 flex">
      <SliceLogic position="left" />
      <div className="flex-1">{children}</div>
      <SliceLogic position="right" />
    </nav>
  )
}
