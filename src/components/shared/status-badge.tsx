import type { ReactNode } from "react";

import { MaterialIcon } from "@/components/shared/material-icon";
import { cn } from "@/lib/utils/cn";

type StatusBadgeTone = "neutral" | "good" | "warning" | "danger";

const toneClasses: Record<StatusBadgeTone, string> = {
  neutral: "bg-surface-container-high text-on-surface-variant",
  good: "bg-secondary-container text-on-secondary-container",
  warning: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  danger: "bg-error-container text-on-error-container"
};

type StatusBadgeProps = {
  children: ReactNode;
  icon?: string;
  tone?: StatusBadgeTone;
  className?: string;
};

export function StatusBadge({ children, icon, tone = "neutral", className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wider",
        toneClasses[tone],
        className
      )}
    >
      {icon ? <MaterialIcon className="text-sm" name={icon} /> : null}
      {children}
    </span>
  );
}
