import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { TopAppHeader } from "@/components/layout/top-app-header";
import { SiteFooter } from "@/components/layout/site-footer";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-dvh bg-background text-on-surface flex flex-col font-body">
      <TopAppHeader />
      <main className="flex-1 w-full pb-24 md:pb-12">{children}</main>
      <SiteFooter />
      <BottomNavigation />
    </div>
  );
}
