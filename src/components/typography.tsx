import { cn } from "@/lib/utils";
import React from "react";

interface Typography {
  children?: React.ReactNode;
}

export function TypographyH3({ children }: Typography) {
  return (
    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight not-first:mt-6">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: Typography) {
  return (
    <h4 className="scroll-m-20 text-md font-semibold tracking-tight mt-4">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: Typography) {
  return <p className="leading-7 text-sm not-first:mt-3">{children}</p>;
}

export function TableTr({ children }: Typography) {
  return <tr className="even:bg-muted m-0 border-t p-0">{children}</tr>;
}

interface TableTh extends Typography {
  className?: string;
}

export function TableTh({ children, className }: TableTh) {
  return (
    <th className={cn("border px-4 py-2 text-sm text-left", className)}>
      {children}
    </th>
  );
}

interface TableTd extends Typography {
  rowSpan?: number;
}

export function TableTd({ children, rowSpan }: TableTd) {
  return (
    <td className="border px-4 py-2 text-left text-sm" rowSpan={rowSpan}>
      {children}
    </td>
  );
}

export function TypographyList({ children }: Typography) {
  return (
    <ul className="my-6 ml-6 list-disc text-sm [&>li]:mt-2">{children}</ul>
  );
}
