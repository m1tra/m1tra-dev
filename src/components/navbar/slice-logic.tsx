"use client"

import { FolderKanban, HomeIcon as House, Layers } from "lucide-react"
import { usePathname } from "next/navigation"
import type { SliceProps } from "./navbar"
import Slice from "./_ui/slice"


const HomeSlice: SliceProps = {
  href: "/",
  title: "Home",
  icon: House,
  color: "#06b6d4, #3b82f6, #9333ea",
}

const ProjectSlice: SliceProps = {
  href: "/projects",
  title: "Projects",
  icon: FolderKanban,
  color: "#ec4899, #8b5cf6, #f97316",
}

const StackSlice: SliceProps = {
  href: "/stack",
  title: "Stack",
  icon: Layers,
  color: "#f59e0b, #3b82f6, #10b981",
}

type SliceLogicProps = {
  position: "left" | "right"
}

export default function SliceLogic({ position }: SliceLogicProps) {
  const path = usePathname()

  const getSlicesForPosition = () => {
    if (path === "/") {
      return position === "right" ? [StackSlice,ProjectSlice] : []
    }

    if (path === "/stack") {
      return position === "left" ? [HomeSlice] : [ProjectSlice]
    }

    if (path === "/projects") {
      return position === "left" ? [HomeSlice,StackSlice] : []
    }

    return []
  }

  const slices = getSlicesForPosition()

  return (
    <div className="flex">
      {slices.map((slice, index) => (
        <Slice key={`${slice.href}-${index}`} {...slice} />
      ))}
    </div>
  )
}
