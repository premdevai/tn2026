import { reportOptionSchema, type ReportOption } from "@/lib/schemas";

export const reportOptions: ReportOption[] = reportOptionSchema.array().parse([
  { value: "empty", label: "Empty", icon: "sentiment_satisfied" },
  { value: "short_queue", label: "Short queue", icon: "directions_walk" },
  { value: "long_queue", label: "Long queue", icon: "groups" },
  { value: "accessibility_issue", label: "Access issue", icon: "accessible" },
  { value: "needs_water", label: "Needs water", icon: "water_drop" }
]);
