import React from 'react'

type Props = {
    children:React.ReactNode,
    className:string,
    color?:string
}

export default function Background({children, className, color="#ec4899, #8b5cf6, #f97316"}: Props) {
  return (
    <div
        className={className}
        style={{
          backgroundImage: `url('/noise.svg'), linear-gradient(to bottom, ${color})`,
          backgroundBlendMode: "overlay",
        }}
    >
        {children}
    </div>
  )
}