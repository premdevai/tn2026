import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ActionPanelProps = {
  children: ReactNode;
  className?: string;
  tone?: "surface" | "primary" | "secondary";
};

const toneClasses = {
  surface: "bg-surface-container-low text-on-surface",
  primary: "bg-primary text-on-primary",
  secondary: "bg-secondary-container text-on-secondary-container"
};

export function ActionPanel({ children, className, tone = "surface" }: ActionPanelProps) {
  return <div className={cn("rounded-lg p-6", toneClasses[tone], className)}>{children}</div>;
}
