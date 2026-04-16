import { LucideIcon } from "@/components/shared/lucide-icon";
import { cn } from "@/lib/utils/cn";

type DisclaimerCardProps = {
  title?: string;
  children?: React.ReactNode;
  icon?: string;
  tone?: "info" | "caution";
  className?: string;
};

export function DisclaimerCard({
  title = "Prototype shell only",
  children = "This app shell is ready for official data sources, but none are connected yet. Use official election sources for final voter roll, candidate, and polling booth information.",
  icon = "info",
  tone = "info",
  className
}: DisclaimerCardProps) {
  return (
    <aside
      className={cn(
        "rounded-md border p-4 shadow-soft",
        tone === "info" ? "border-civic-teal/25 bg-civic-surface" : "border-civic-gold/35 bg-civic-gold/10",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <LucideIcon
          className={cn("mt-0.5 text-[1.25rem]", tone === "info" ? "text-civic-teal" : "text-civic-navy")}
          name={icon}
        />
        <div className="space-y-1">
          <h2 className="text-sm font-semibold">{title}</h2>
          <div className="text-sm leading-6 text-muted-foreground">{children}</div>
        </div>
      </div>
    </aside>
  );
}
