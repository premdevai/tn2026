import type { ReactNode } from "react";

import { typography } from "@/components/shared/design-styles";
import { cn } from "@/lib/utils/cn";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  breadcrumbs?: ReactNode;
  className?: string;
  size?: "standard" | "compact" | "hero";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  breadcrumbs,
  className,
  size = "standard"
}: PageHeaderProps) {
  const titleClass = size === "hero" ? typography.pageTitleHero : size === "compact" ? typography.pageTitleCompact : typography.pageTitle;

  return (
    <header className={cn("space-y-4", size === "hero" && "py-4 md:py-8", className)}>
      {breadcrumbs}
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl space-y-2">
          {eyebrow ? (
            <p className={typography.eyebrow}>{eyebrow}</p>
          ) : null}
          <h1 className={titleClass}>{title}</h1>
          {description ? (
            <p className={typography.pageDescription}>{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </header>
  );
}
