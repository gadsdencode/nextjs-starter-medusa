import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';

const labelVariants = cva(
"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

type LabelProps = {
    children?: React.ReactNode;
    className?: string;
    htmlFor?: string;
} & React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const Label: React.FC<LabelProps> = ({ children, className, htmlFor, ...props }) => {
    return (
        <LabelPrimitive.Root
            className={`${labelVariants} ${className || ''}`}
            htmlFor={htmlFor}
            {...props}
        >
            {children}
        </LabelPrimitive.Root>
    );
};

Label.displayName = 'Label';

export { Label };