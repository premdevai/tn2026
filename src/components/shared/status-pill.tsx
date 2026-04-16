import { LucideIcon } from "@/components/shared/lucide-icon";
import { cn } from "@/lib/utils";

export type StatusTone = "good" | "warning" | "danger" | "neutral";

const toneClasses: Record<StatusTone, string> = {
  good: "border-civic-teal/25 bg-civic-teal/10 text-civic-teal",
  warning: "border-civic-gold/35 bg-civic-gold/15 text-civic-navy",
  danger: "border-civic-crimson/25 bg-civic-crimson/10 text-civic-crimson",
  neutral: "border-border bg-muted text-muted-foreground",
};

type StatusPillProps = {
  children?: React.ReactNode;
  icon?: string;
  tone?: StatusTone;
  status?: StatusTone;
  label?: string;
  className?: string;
};

export function StatusPill({
  children,
  icon,
  tone,
  status,
  label,
  className,
}: StatusPillProps) {
  const resolvedTone = tone ?? status ?? "neutral";
  const content = children ?? label ?? resolvedTone;

  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold tracking-normal",
        toneClasses[resolvedTone],
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", resolvedTone === "good" ? "animate-pulse bg-civic-teal" : resolvedTone === "warning" ? "bg-civic-gold" : resolvedTone === "danger" ? "bg-civic-crimson" : "bg-muted-foreground")} />
      {icon ? <LucideIcon className="text-[1rem]" name={icon} /> : null}
      {content}
    </span>
  );
}
