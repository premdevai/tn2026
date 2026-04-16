import Link from "next/link";

import { MaterialIcon } from "@/components/shared/material-icon";
import { APP_NAME } from "@/lib/constants/app";
import { appRoutes } from "@/lib/constants/navigation";

export function SiteFooter() {
  const quickLinks = appRoutes.filter((route) => route.desktopVisible || route.mobileVisible).slice(0, 5);

  return (
    <footer className="w-full py-12 mt-auto bg-surface-container-low border-t border-outline-variant/50 hidden md:block">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <span className="text-lg font-bold text-primary font-headline block mb-4">
            {APP_NAME}
          </span>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed">
            Official Election Information Hub providing transparent, non-partisan data for the citizens of Tamil Nadu.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-primary text-sm mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((route) => (
              <li key={route.id}>
                <Link className="text-on-surface-variant font-body text-sm hover:text-secondary underline transition-all" href={route.href}>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary text-sm mb-4">Support</h4>
          <ul className="space-y-3">
            <li>
              <a className="text-on-surface-variant font-body text-sm hover:text-secondary underline transition-all" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant font-body text-sm hover:text-secondary underline transition-all" href="#">
                Report Error
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant font-body text-sm hover:text-secondary underline transition-all" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary text-sm mb-4">Official Updates</h4>
          <p className="text-on-surface-variant font-body text-sm mb-4">
            Subscribe to receive civic alerts and updates.
          </p>
          <div className="flex gap-2">
            <input
              className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 text-sm w-full"
              placeholder="Email"
              type="email"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold" type="button">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-outline-variant/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-on-surface-variant font-body text-xs">
          © 2026 {APP_NAME}. Official Election Information Hub.
        </span>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" aria-label="Share">
            <MaterialIcon name="share" className="text-xl" />
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" aria-label="RSS feed">
            <MaterialIcon name="rss_feed" className="text-xl" />
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" aria-label="Public portal">
            <MaterialIcon name="public" className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
