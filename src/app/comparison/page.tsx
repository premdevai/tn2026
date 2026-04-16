import type { Metadata } from "next";

import { PartyComparisonFlow } from "@/features/comparison/components/party-comparison-flow";
import { appServices } from "@/lib/services/app-services";

export const metadata: Metadata = {
  title: "Manifesto comparison",
  description:
    "Compare Tamil Nadu party manifestos, policy claims, fiscal feasibility, and editorial analysis side by side."
};

export default async function ComparisonPage() {
  const model = await appServices.comparison.getComparisonModel();

  return <PartyComparisonFlow model={model} />;
}
