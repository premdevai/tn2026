import Link from "next/link";

import { LucideIcon } from "@/components/shared/lucide-icon";
import { cn } from "@/lib/utils/cn";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  variant?: "trail" | "back";
  backHref?: string;
  backLabel?: string;
  className?: string;
};

export function Breadcrumbs({
  backHref,
  backLabel = "Back",
  className,
  items,
  variant = "trail"
}: BreadcrumbsProps) {
  if (variant === "back") {
    const fallbackHref = backHref ?? items.find((item) => item.href)?.href ?? "/";

    return (
      <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm font-medium text-on-surface-variant", className)}>
        <Link className="inline-flex items-center gap-2 transition-colors hover:text-primary" href={fallbackHref}>
          <LucideIcon className="text-base" name="arrow_back" />
          {backLabel}
        </Link>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-2 overflow-x-auto text-sm font-medium text-on-surface-variant", className)}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span className="flex min-w-0 items-center gap-2 whitespace-nowrap" key={`${item.label}-${index}`}>
            {item.href && !isLast ? (
              <Link className="transition-colors hover:text-primary" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className={cn(isLast ? "font-semibold text-primary" : undefined)}>{item.label}</span>
            )}
            {!isLast ? <LucideIcon className="text-xs" name="chevron_right" /> : null}
          </span>
        );
      })}
    </nav>
  );
}
