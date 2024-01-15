"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./utils"

const labelVariants = cva(
"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & 
VariantProps<typeof labelVariants> & {
    children: React.ReactNode; // Adding children prop
};

const Label = React.forwardRef<
React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps // Use the extended LabelProps here
>(({ children, className, ...props }, ref) => (
<LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
>
    {children} {/* Render children */}
</LabelPrimitive.Root>
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };