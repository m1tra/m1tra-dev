import { cn } from '@/components/lib/utils';
import React, { forwardRef, HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  variant?:"default",
  className?:string,
  children:React.ReactNode
}

const Card = forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
  const {children, className, variant, ...rest} = props
  return <div 
            ref={ref} 
            {...rest} 
            className={cn("uppercase font-extrabold text-lg  p-10  border-4 border-black hover:-translate-y-2  duration-150",
              variant === "default" && "text-white bg-black hover:bg-white hover:text-black",
              className)}>
                {children}
          </div>
});

Card.displayName = "Card"

export default Card

