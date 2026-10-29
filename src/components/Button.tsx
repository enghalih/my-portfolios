import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "px-5 py-3 text-preset-4-medium rounded-full border border-neutral-900  border-button flex gap-2 items-center"
  ],
  {
    variants: {
      variant: {
        primary: "bg-yellow-500 text-neutral-900",
        secondary: "bg-neutral-0 text-neutral-900",
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      data-slot="button"
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
