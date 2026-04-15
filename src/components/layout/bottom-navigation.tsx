"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CheckSquare, Users, Info } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const bottomNavigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/checklist", label: "Checklist", icon: CheckSquare },
  { href: "/candidates", label: "Candidates", icon: Users },
  { href: "/about", label: "About", icon: Info }
] as const;

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed md:hidden bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-8 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl z-50 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-slate-100 dark:border-slate-800">
      {bottomNavigationItems.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex flex-col items-center justify-center px-5 py-2 active:scale-95 transition-all duration-200",
              isActive 
                ? "bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 rounded-2xl" 
                : "text-slate-400 dark:text-slate-500 hover:text-teal-600 dark:hover:text-teal-400"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
