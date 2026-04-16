import { LucideIcon } from "@/components/shared/lucide-icon";
import { cn } from "@/lib/utils/cn";

type EmptyStateProps = {
  icon?: string;
  title: string;
  body: string;
  className?: string;
};

export function EmptyState({ icon = "database", title, body, className }: EmptyStateProps) {
  return (
    <div className={cn("rounded-md border border-dashed border-border bg-card p-4 shadow-soft", className)}>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground">
          <LucideIcon name={icon} />
        </span>
        <div className="space-y-1">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-sm leading-6 text-muted-foreground">{body}</p>
        </div>
      </div>
    </div>
  );
}
