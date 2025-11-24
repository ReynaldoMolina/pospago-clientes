import { cn } from "@/lib/utils";
import React from "react";

interface PageWrapper {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapper) {
  return (
    <div
      className={cn(
        "flex flex-col p-3 md:p-4 gap-3 overflow-y-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
