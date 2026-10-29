import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(["px-4 py-3 rounded-full"], {
  variants: {
    variant: {
      primary: "bg-yellow-500 border-neutral-900 border",
      secondary: "border border-neutral-0",
    },
  },

  defaultVariants: {
    variant: "secondary",
  },
});

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

function TabButton({
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

export { TabButton, buttonVariants };
