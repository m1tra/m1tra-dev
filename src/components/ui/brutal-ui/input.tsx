import { cn } from '@/components/lib/utils';
import React, { forwardRef } from 'react'
import { Input } from '../shadcn/input';

interface BrutalInputProps extends React.ComponentPropsWithoutRef<typeof Input> {
  variant?: "default";
}

const BrutalInput = forwardRef<HTMLInputElement, BrutalInputProps>(
  ({ className, variant, ...rest }, ref) => {
    return (
      <Input
        ref={ref}
        {...rest}
        className={cn(
          "font-extrabold text-lg border-4 border-black duration-150 focus-visible:bg-yellow-400",
          variant === "default" && "text-white bg-black hover:bg-white hover:text-black",
          className
        )}
      />
    );
  }
);

BrutalInput.displayName = "BrutalInput";

export default BrutalInput;
