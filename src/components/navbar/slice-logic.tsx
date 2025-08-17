"use client"

import { FolderKanban, HomeIcon as House, Layers } from "lucide-react"
import { usePathname } from "next/navigation"
import type { SliceProps } from "./navbar"
import Slice from "./_ui/slice"


const HomeSlice: SliceProps = {
  href: "/",
  title: "Home",
  icon: House,
  color: "bg-green-300",
}

const ProjectSlice: SliceProps = {
  href: "/projects",
  title: "Projects",
  icon: FolderKanban,
  color: "bg-green-300",
}

const StackSlice: SliceProps = {
  href: "/stack",
  title: "Stack",
  icon: Layers,
  color: "bg-green-300",
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
