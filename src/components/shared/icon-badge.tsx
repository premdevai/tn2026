import { LucideIcon } from "@/components/shared/lucide-icon";
import { cn } from "@/lib/utils/cn";

type IconBadgeTone = "surface" | "primary" | "secondary" | "warning" | "danger";

const toneClasses: Record<IconBadgeTone, string> = {
  surface: "bg-surface-container-high text-on-surface-variant",
  primary: "bg-primary text-on-primary",
  secondary: "bg-secondary-container text-on-secondary-container",
  warning: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  danger: "bg-error-container text-on-error-container"
};

type IconBadgeProps = {
  name: string;
  className?: string;
  tone?: IconBadgeTone;
};

export function IconBadge({ className, name, tone = "surface" }: IconBadgeProps) {
  return (
    <span className={cn("inline-flex h-10 w-10 items-center justify-center rounded-lg", toneClasses[tone], className)}>
      <LucideIcon name={name} />
    </span>
  );
}
