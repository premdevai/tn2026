"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialIcon } from "@/components/shared/material-icon";
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
            <MaterialIcon
              name={item.icon}
              className="text-2xl"
              style={
                isActive && item.id === "constituencies"
                  ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
                  : undefined
              }
            />
            <span
              className={cn(
                "mt-1 max-w-full truncate font-body text-[10px] tracking-wide sm:text-[11px]",
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
