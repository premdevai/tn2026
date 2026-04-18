import Link from "next/link";

import { LucideIcon } from "@/components/shared/lucide-icon";
import { APP_NAME } from "@/lib/constants/app";
import { appRoutes } from "@/lib/constants/navigation";

export function SiteFooter() {
  const quickLinks = appRoutes.filter((route) => route.desktopVisible || route.mobileVisible).slice(0, 5);

  return (
    <footer className="w-full py-16 mt-auto bg-white border-t border-zinc-200/60 hidden md:block">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-[1400px] mx-auto">
        <div className="md:col-span-1">
          <span className="text-2xl font-bold tracking-tighter text-zinc-950 font-headline block mb-4">
            {APP_NAME}<span className="text-emerald-500">.</span>
          </span>
          <p className="text-zinc-500 font-body text-sm leading-relaxed max-w-[30ch]">
            Official Election Information Hub providing transparent, non-partisan data for the citizens of Tamil Nadu.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-950 text-sm mb-6 uppercase tracking-wider">Platform</h4>
          <ul className="space-y-4">
            {quickLinks.map((route) => (
              <li key={route.id}>
                <Link className="text-zinc-500 font-medium text-sm hover:text-zinc-950 transition-colors" href={route.href}>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-950 text-sm mb-6 uppercase tracking-wider">Support</h4>
          <ul className="space-y-4">
            <li>
              <a className="text-zinc-500 font-medium text-sm hover:text-zinc-950 transition-colors" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-zinc-500 font-medium text-sm hover:text-zinc-950 transition-colors" href="#">
                Report Error
              </a>
            </li>
            <li>
              <a className="text-zinc-500 font-medium text-sm hover:text-zinc-950 transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-950 text-sm mb-6 uppercase tracking-wider">Updates</h4>
          <p className="text-zinc-500 font-medium text-sm mb-6 max-w-[25ch]">
            Subscribe to receive critical civic alerts and updates.
          </p>
          <div className="flex gap-2">
            <input
              className="bg-zinc-100 border-none rounded-lg px-4 py-3 text-sm w-full focus:ring-4 focus:ring-emerald-500/10 placeholder:text-zinc-400 outline-none transition-all font-medium"
              placeholder="Email address"
              type="email"
            />
            <button className="bg-zinc-950 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors" type="button">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-8 mt-16 pt-8 border-t border-zinc-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-zinc-400 font-medium text-sm">
          © 2026 {APP_NAME}. All rights reserved.
        </span>
        <div className="flex gap-8">
          <a className="text-zinc-400 hover:text-zinc-950 transition-colors" href="#" aria-label="Share">
            <LucideIcon name="share" className="w-5 h-5" />
          </a>
          <a className="text-zinc-400 hover:text-zinc-950 transition-colors" href="#" aria-label="RSS feed">
            <LucideIcon name="rss_feed" className="w-5 h-5" />
          </a>
          <a className="text-zinc-400 hover:text-zinc-950 transition-colors" href="#" aria-label="Public portal">
            <LucideIcon name="public" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
