import { cn } from '@/components/lib/utils';
import React, { forwardRef } from 'react'
import { Button } from '../shadcn/button';

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  variant?:"default" | "outline",
  className?:string,
  children:React.ReactNode
}

const BrutalIconButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {children, className, variant, ...rest} = props
  return <Button 
            ref={ref} 
            {...rest} 
            className={cn("uppercase font-extrabold text-lg  size-9 border-3 transition-none transition-all border-black duration-150 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[0px_0px_0px_0px_#000000] hover:translate-x-2 hover:translate-y-2",
              variant === "default" && "text-white bg-black hover:bg-white hover:text-black",
              variant === "outline" && "text-black bg-white hover:bg-white ",
              className)}>
                {children}
        </Button>
});

BrutalIconButton.displayName = "Button"

export default BrutalIconButton

