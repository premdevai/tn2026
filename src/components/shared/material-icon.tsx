import type { CSSProperties } from "react";

import { cn } from "@/lib/utils/cn";

type MaterialIconProps = {
  name: string;
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean;
};

export function MaterialIcon({
  name,
  className,
  style,
  "aria-hidden": ariaHidden = true
}: MaterialIconProps) {
  return (
    <span
      aria-hidden={ariaHidden}
      className={cn("material-symbols-outlined text-[1.25rem]", className)}
      style={style}
    >
      {name}
    </span>
  );
}
