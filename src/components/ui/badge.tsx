import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        lavender:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        green:
          "border-transparent bg-chart-5 text-primary-foreground [a&]:hover:bg-chart-5/90",
        pink: "border-transparent bg-chart-1 text-primary-foreground [a&]:hover:bg-chart-1/90",
        blue: "border-transparent bg-chart-3 text-primary-foreground [a&]:hover:bg-chart-3/90",
        maroon:
          "border-transparent bg-chart-4 text-primary-foreground [a&]:hover:bg-chart-4/90",
        teal: "border-transparent bg-chart-2 text-primary-foreground [a&]:hover:bg-chart-2/90",
        muted:
          "border-transparent bg-muted text-muted-foreground [a&]:hover:bg-chart-3/90",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "lavender",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
