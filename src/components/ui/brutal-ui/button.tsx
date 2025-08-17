import { cn } from '@/components/lib/utils';
import React, { forwardRef, HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?:"default",
  className?:string,
  children:React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {children, className, variant, ...rest} = props
  return <button 
            ref={ref} 
            {...rest} 
            className={cn("uppercase font-extrabold text-lg  px-10 py-1.5 border-4 border-black hover:-translate-y-2  duration-150",
              variant === "default" && "text-white bg-black hover:bg-white hover:text-black",
              className)}>
                {children}
        </button>
});

Button.displayName = "Button"

export default Button

