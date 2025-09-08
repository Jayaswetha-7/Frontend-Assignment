"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number
  gradient?: string
}

function Progress({ className, value = 0, gradient, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={value}
      className={cn(
        "bg-gray-200 relative h-4 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full transition-all rounded-full"
        style={{
          width: "100%",
          background: gradient
            ? gradient
            : "linear-gradient(to right, #22c55e, #3b82f6, #eab308, #ef4444)",
          backgroundSize: "100% 100%",
        }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
