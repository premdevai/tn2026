import { cn } from "@/lib/utils/cn";

type MaterialIconProps = {
  name: string;
  className?: string;
  "aria-hidden"?: boolean;
};

export function MaterialIcon({
  name,
  className,
  "aria-hidden": ariaHidden = true
}: MaterialIconProps) {
  return (
    <span aria-hidden={ariaHidden} className={cn("material-symbols-outlined", className)}>
      {name}
    </span>
  );
}
