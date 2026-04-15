"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { APP_NAME } from "@/lib/constants/app";
import { cn } from "@/lib/utils/cn";

export function TopAppHeader() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="flex items-center px-6 py-4 w-full border-b border-border/50">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-slate-900 dark:text-slate-100" />
            <h1 className="font-headline font-bold text-slate-900 dark:text-slate-50 tracking-tight text-xl">
              {APP_NAME}
            </h1>
          </div>
        </div>
      </header>
      
      {/* Desktop Header */}
      <nav className="hidden md:block w-full sticky top-0 z-50 bg-[#F8F9FA] dark:bg-[#041627] backdrop-blur-md bg-opacity-90 transition-colors duration-300 border-b border-border/50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4 w-full">
          <div className="text-2xl font-bold font-headline text-primary dark:text-[#F8F9FA] tracking-tighter uppercase">
            {APP_NAME}
          </div>
          <div className="flex items-center space-x-8 font-headline font-semibold tracking-tight">
            {[
              { label: "Home", href: "/" },
              { label: "Checklist", href: "/checklist" },
              { label: "Candidates", href: "/candidates" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors",
                  pathname === link.href 
                    ? "text-[#2C694E] font-bold border-b-2 border-[#2C694E] pb-1" 
                    : "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
