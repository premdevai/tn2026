"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { bottomNavigationItems, isRouteActive } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function BottomNavigation() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const isDistrictsPage = pathname.startsWith("/districts");
  const districtSlug = isDistrictsPage ? pathSegments[1] : undefined;
  const constituencyHref = districtSlug ? `/districts/${districtSlug}` : "/districts/chennai";

  return (
    <nav className="fixed md:hidden bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pt-3 pb-8 bg-surface/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      {bottomNavigationItems.map((item) => {
        const href = item.id === "constituencies" ? constituencyHref : item.href;
        const isActive = isRouteActive(item, pathname);

        return (
          <Link
            key={item.href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex min-w-0 flex-1 flex-col items-center justify-center px-1.5 py-2 active:scale-95 transition-all duration-200",
              isActive
                ? "bg-secondary-container text-on-secondary-container rounded-lg"
                : "text-on-surface-variant hover:text-secondary"
            )}
          >
            <LucideIcon name={item.icon} className="text-2xl" />
            <span
              className={cn(
                "mt-1 max-w-full truncate font-body text-xs tracking-wide sm:text-xs",
                isActive ? "font-bold" : "font-medium"
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
