export type RouteMatch = "exact" | "prefix" | "constituency";

export type AppRoute = {
  id: string;
  href: string;
  label: string;
  icon: string;
  desktopVisible: boolean;
  mobileVisible: boolean;
  activeMatch: RouteMatch;
};

export const appRoutes = [
  {
    id: "districts",
    href: "/districts",
    label: "Districts",
    icon: "location_city",
    desktopVisible: true,
    mobileVisible: true,
    activeMatch: "exact"
  },
  {
    id: "comparison",
    href: "/comparison",
    label: "Comparison",
    icon: "compare_arrows",
    desktopVisible: true,
    mobileVisible: true,
    activeMatch: "prefix"
  },
  {
    id: "constituencies",
    href: "/candidates",
    label: "Constituencies",
    icon: "how_to_vote",
    desktopVisible: true,
    mobileVisible: true,
    activeMatch: "constituency"
  },
  {
    id: "stations",
    href: "/stations",
    label: "Real-time Status",
    icon: "share_location",
    desktopVisible: true,
    mobileVisible: true,
    activeMatch: "prefix"
  },
  {
    id: "guide",
    href: "/guide",
    label: "How to Vote",
    icon: "menu_book",
    desktopVisible: true,
    mobileVisible: false,
    activeMatch: "prefix"
  },
  {
    id: "about",
    href: "/about",
    label: "About",
    icon: "info",
    desktopVisible: false,
    mobileVisible: true,
    activeMatch: "prefix"
  }
] as const;

export const desktopNavigationItems = appRoutes.filter((route) => route.desktopVisible);

export const bottomNavigationItems = appRoutes
  .filter((route) => route.mobileVisible)
  .map((route) => ({
    ...route,
    label:
      route.id === "comparison"
        ? "Compare"
        : route.id === "constituencies"
          ? "Candidates"
          : route.id === "stations"
            ? "Status"
            : route.label
  }));

export function isRouteActive(route: Pick<AppRoute, "href" | "activeMatch">, pathname: string) {
  const pathSegments = pathname.split("/").filter(Boolean);
  const isDistrictsPage = pathname.startsWith("/districts");
  const districtSlug = isDistrictsPage ? pathSegments[1] : undefined;

  if (route.activeMatch === "constituency") {
    return pathname.startsWith("/candidates") || (isDistrictsPage && Boolean(districtSlug));
  }

  if (route.activeMatch === "exact") {
    return pathname === route.href;
  }

  return pathname.startsWith(route.href);
}
