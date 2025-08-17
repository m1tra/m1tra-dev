import { cn } from '@/components/lib/utils';
import React, { forwardRef, HTMLAttributes } from 'react'
import { Progress } from '../shadcn/progress';


interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value:number,
  variant?:"default" | "outline",
  className?:string,
}

const BrutalProgress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const { value, className, variant, ...rest} = props
  return <Progress 
            ref={ref} 
            {...rest} 
            value={value}
            className={cn(" w-full  border-2 rounded-none border-black hover:-translate-y-2  duration-150 overflow-hidden  relative",
              variant === "default" && "text-white bg-black hover:bg-white hover:text-black",
              variant === "outline" && "text-black bg-white hover:bg-black hover:text-white",
              className)}>
        </Progress>
});

BrutalProgress.displayName = "Button"

export default BrutalProgress

