"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./utils"

const labelVariants = cva(
"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

type LabelProps = Omit<React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, 'ref'> & {
    children: React.ReactNode;
    className: string;
    htmlFor: string;
};

const Label = React.forwardRef<
React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps // Use the extended LabelProps here
>(({ children, className, htmlFor, ...props }, ref) => (
<LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
    htmlFor={htmlFor}
>
    {children} {/* Render children */}
</LabelPrimitive.Root>
));

Label.displayName = 'Label';

export { Label };