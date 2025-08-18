
import Link from "next/link"
import { SliceProps } from "../navbar"
import { cn } from "@/components/lib/utils"

export default function Slice({ href, title, icon: Icon, color }: SliceProps) {
  return (
    <Link href={href} className="">
      <div
        className={cn("h-full pb-20 pt-10 md:w-20 lg-w-25 md:flex hidden justify-between flex-col-reverse items-center border-4 border-black",color)}
      >
        <span className="font-bold text-3xl -rotate-90">{title}</span>
        <Icon className="font-bold w-10 h-10" />
      </div>
    </Link>
  )
}
