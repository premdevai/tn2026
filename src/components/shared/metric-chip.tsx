import { LucideIcon } from "@/components/shared/lucide-icon";
import { cn } from "@/lib/utils";

type MetricChipProps = {
  label: string;
  icon: string;
  value?: string;
  className?: string;
};

export function MetricChip({ label, value, icon, className }: MetricChipProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-9 items-center gap-2 rounded-md border border-border bg-civic-surface px-3 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
        className,
      )}
    >
      <LucideIcon className="text-[1.1rem] text-civic-teal" name={icon} />
      {value ? (
        <span className="grid">
          <span className="font-data text-[0.7rem] font-medium leading-4 text-muted-foreground">
            {label}
          </span>
          <span className="font-data text-xs font-semibold leading-4 text-foreground">{value}</span>
        </span>
      ) : (
        <span className="font-data text-xs font-semibold leading-4 text-foreground">{label}</span>
      )}
    </span>
  );
}
