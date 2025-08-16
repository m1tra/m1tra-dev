
import Link from "next/link"
import { SliceProps } from "../navbar"
import Background from "@/components/ui/background"

export default function Slice({ href, title, icon: Icon, color }: SliceProps) {
  return (
    <Link href={href} className="">
      <Background
        className="h-full pb-20 pt-10 w-25 flex justify-between flex-col-reverse items-center"
        color={color}
      >
        <span className="font-bold text-3xl -rotate-90">{title}</span>
        <Icon className="font-bold w-10 h-10" />
      </Background>
    </Link>
  )
}
