import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ActionRowProps = {
  children: ReactNode;
  className?: string;
  align?: "start" | "end" | "between";
};

const alignClasses = {
  start: "justify-start",
  end: "justify-end",
  between: "justify-between"
};

export function ActionRow({ align = "start", children, className }: ActionRowProps) {
  return <div className={cn("flex flex-wrap items-center gap-3", alignClasses[align], className)}>{children}</div>;
}
