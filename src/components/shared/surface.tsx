import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SurfaceVariant = "card" | "muted" | "primary" | "secondary" | "plain";
type SurfacePadding = "none" | "sm" | "md" | "lg";

const variantClasses: Record<SurfaceVariant, string> = {
  card: "border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm",
  muted: "bg-surface-container-low text-on-surface",
  primary: "bg-primary text-on-primary",
  secondary: "bg-secondary-container text-on-secondary-container",
  plain: "bg-transparent text-on-surface"
};

const paddingClasses: Record<SurfacePadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-5 md:p-6",
  lg: "p-6 md:p-8"
};

export type SurfaceProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  padding?: SurfacePadding;
  variant?: SurfaceVariant;
};

export function Surface({
  children,
  className,
  interactive = false,
  padding = "md",
  variant = "card"
}: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-lg",
        variantClasses[variant],
        paddingClasses[padding],
        interactive && "transition-colors hover:border-secondary/40 hover:bg-surface-container-low",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ContentCard(props: SurfaceProps) {
  return <Surface {...props} />;
}
