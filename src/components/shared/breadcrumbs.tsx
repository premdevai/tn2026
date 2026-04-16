import Link from "next/link";

import { MaterialIcon } from "@/components/shared/material-icon";
import { cn } from "@/lib/utils/cn";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
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
            {!isLast ? <MaterialIcon className="text-xs" name="chevron_right" /> : null}
          </span>
        );
      })}
    </nav>
  );
}
