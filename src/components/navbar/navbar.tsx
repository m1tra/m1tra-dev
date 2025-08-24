"use client"
import type React from "react"
import type { LucideIcon } from "lucide-react"
import SliceLogic from "./slice-logic"
import { motion } from "motion/react"

export interface SliceProps {
  href: string
  title: string
  icon: LucideIcon
  color: string
}

type Props = { children: React.ReactNode }

export default function Navbar({ children }: Props) {
  return (
    <motion.nav
      className="flex"
      initial={{
        filter: "blur(10px)"
      }}
      animate={{
        filter: "blur(0px)"
      }}
      transition={{
        delay:0.9,
      }}
    >
      <SliceLogic position="left" />
      <div className="flex-1 ">{children}</div>
      <SliceLogic position="right" />
    </motion.nav>
  )
}
