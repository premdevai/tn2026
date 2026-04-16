"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { APP_NAME } from "@/lib/constants/app";
import { desktopNavigationItems, isRouteActive } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function TopAppHeader() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const isDistrictsPage = pathname.startsWith("/districts");
  const districtSlug = isDistrictsPage ? pathSegments[1] : undefined;
  const constituencySlug = isDistrictsPage ? pathSegments[3] : undefined;
  const mobileSubtitle = constituencySlug
    ? `${formatPathSegment(constituencySlug)} Constituency`
    : districtSlug
      ? `${formatPathSegment(districtSlug)} District`
      : undefined;
  const mobileBackHref = constituencySlug
    ? `/districts/${districtSlug}`
    : districtSlug
      ? "/districts"
      : "/";
  const constituencyHref = districtSlug ? `/districts/${districtSlug}` : "/districts/chennai";

  return (
    <>
      {isDistrictsPage ? (
        <header className="md:hidden bg-surface/90 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center px-6 py-4 w-full">
            <div className="flex items-center gap-4">
              <Link href={mobileBackHref} aria-label="Go back" className="transition-transform active:scale-95">
                <LucideIcon name="arrow_back" className="text-2xl text-primary" />
              </Link>
              <div className="flex flex-col leading-tight">
                <h1 className="font-headline font-bold text-primary text-lg tracking-tight">
                  {APP_NAME}
                </h1>
                {mobileSubtitle ? (
                  <span className="text-xs font-medium text-secondary">
                    {mobileSubtitle}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="bg-outline-variant/50 h-px w-full" />
        </header>
      ) : (
        <header className="md:hidden bg-surface/90 backdrop-blur-lg sticky top-0 z-50">
          <div className="flex items-center px-6 py-4 w-full border-b border-border/50">
            <div className="flex items-center gap-3">
              <LucideIcon name="public" className="text-2xl text-primary" />
              <h1 className="font-headline font-bold text-primary tracking-tight text-xl">
                {APP_NAME}
              </h1>
            </div>
          </div>
        </header>
      )}

      <nav className="hidden md:block w-full sticky top-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-8 h-16 max-w-full mx-auto">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-primary font-headline"
            >
              {APP_NAME}
            </Link>
            <div className="hidden md:flex gap-6 items-center">
              {desktopNavigationItems.map((link) => (
                <Link
                  key={link.href}
                  href={link.id === "constituencies" ? constituencyHref : link.href}
                  className={cn(
                    "transition-colors font-headline font-semibold",
                    isRouteActive(link, pathname)
                      ? "text-secondary border-b-2 border-secondary pb-1"
                      : "text-on-surface-variant hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <input
              className="bg-surface-container-high border-none rounded-full px-4 py-2 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Search districts..."
              type="text"
            />
          </div>
        </div>
        <div className="bg-outline-variant/50 h-px w-full" />
      </nav>
    </>
  );
}

function formatPathSegment(segment: string) {
  return segment
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
