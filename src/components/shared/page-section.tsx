import type { ReactNode } from "react";

import { typography } from "@/components/shared/design-styles";
import { cn } from "@/lib/utils/cn";

type PageSectionProps = {
  title?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: "standard" | "muted";
};

export function PageSection({ title, description, actions, children, className, variant = "standard" }: PageSectionProps) {
  return (
    <section className={cn("space-y-4", variant === "muted" && "rounded-lg bg-surface-container-low p-5 md:p-6", className)}>
      {title || description || actions ? (
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            {title ? <h2 className={typography.sectionTitle}>{title}</h2> : null}
            {description ? <p className={typography.body}>{description}</p> : null}
          </div>
          {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
