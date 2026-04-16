import { MaterialIcon } from "@/components/shared/material-icon";
import { cn } from "@/lib/utils/cn";

export type MetricGridItem = {
  icon?: string;
  label: string;
  value: string;
};

type MetricGridProps = {
  items: MetricGridItem[];
  className?: string;
};

export function MetricGrid({ items, className }: MetricGridProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-3 md:grid-cols-4", className)}>
      {items.map((item) => (
        <div className="rounded-lg bg-surface-container-low p-4" key={item.label}>
          <div className="flex items-center gap-2 text-on-surface-variant">
            {item.icon ? <MaterialIcon className="text-base text-secondary" name={item.icon} /> : null}
            <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
          </div>
          <p className="mt-2 font-headline text-2xl font-bold text-primary">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
