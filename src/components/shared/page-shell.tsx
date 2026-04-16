import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type PageShellSize = "standard" | "wide" | "narrow" | "full";

const sizeClasses: Record<PageShellSize, string> = {
  standard: "mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 md:px-8 md:py-12",
  wide: "mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-8 md:px-8 md:py-12",
  narrow: "mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-8 md:px-8 md:py-12",
  full: "flex w-full flex-col gap-8 py-8 md:py-12"
};

export type PageShellProps = {
  children: ReactNode;
  size?: PageShellSize;
  className?: string;
};

export function PageShell({ children, className, size = "standard" }: PageShellProps) {
  return <div className={cn(sizeClasses[size], className)}>{children}</div>;
}
