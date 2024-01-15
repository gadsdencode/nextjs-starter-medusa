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
    className?: string;
    htmlFor?: string;
};

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ children, className, htmlFor, ...props }, ref) => (
    <LabelPrimitive.Root ref={ref} className={className} htmlFor={htmlFor} {...props}>
        {children}
    </LabelPrimitive.Root>
));
Label.displayName = 'Label';

export { Label };