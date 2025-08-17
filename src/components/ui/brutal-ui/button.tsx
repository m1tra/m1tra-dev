import { cn } from '@/components/lib/utils';
import React, { forwardRef, HTMLAttributes } from 'react'
import { Button } from '../shadcn/button';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?:"default" | "outline",
  className?:string,
  children:React.ReactNode
}

const BrutalButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {children, className, variant, ...rest} = props
  return <Button 
            ref={ref} 
            {...rest} 
            className={cn("uppercase font-extrabold text-lg  px-5 py-1.5 border-4 border-black hover:-translate-y-2  duration-150 ",
              variant === "default" && "text-white bg-black hover:bg-white hover:text-black",
              variant === "outline" && "text-black bg-white hover:bg-white ",
              className)}>
                {children}
        </Button>
});

BrutalButton.displayName = "Button"

export default BrutalButton

