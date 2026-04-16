import { DisclaimerCard } from "@/components/shared/disclaimer-card";
import { EmptyState } from "@/components/shared/empty-state";

type EmptyOrDisclaimerBlockProps = {
  mode: "empty" | "disclaimer";
  icon?: string;
  title: string;
  body: string;
};

export function EmptyOrDisclaimerBlock({ mode, icon = "info", title, body }: EmptyOrDisclaimerBlockProps) {
  if (mode === "empty") {
    return <EmptyState body={body} icon={icon} title={title} />;
  }

  return <DisclaimerCard title={title}>{body}</DisclaimerCard>;
}
