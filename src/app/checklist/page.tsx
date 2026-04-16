import type { Metadata } from "next";

import { Breadcrumbs, MetricGrid, PageHeader, PageSection, PageShell } from "@/components/shared";
import { ChecklistBoard } from "@/features/checklist/components";
import { appServices } from "@/lib/services/app-services";

export const metadata: Metadata = {
  title: "Checklist Dashboard",
  description: "Checklist and live tracking for constituency voting."
};

export default async function ChecklistPage() {
  const items = await appServices.checklist.listItems();

  return (
    <PageShell>
      <PageHeader
        breadcrumbs={
          <Breadcrumbs
            items={[
              { href: "/", label: "Tamil Nadu" },
              { label: "Checklist" }
            ]}
          />
        }
        eyebrow="Current Voting Context"
        title="My Constituency Dashboard"
        description="Track essentials, booth readiness, queue updates, and voter-day preparation from one service-backed surface."
      />

      <MetricGrid
        items={[
          { icon: "location_on", label: "Constituency", value: "Mylapore" },
          { icon: "how_to_vote", label: "Assigned booth", value: "Pending" },
          { icon: "timer", label: "Wait", value: "API-ready" },
          { icon: "verified_user", label: "Source", value: "Static" }
        ]}
      />

      <PageSection
        title="Voter checklist"
        description="This board is wired through the checklist repository and can be filled from official guidance or a CMS without changing the route."
      >
        <ChecklistBoard items={items} />
      </PageSection>
    </PageShell>
  );
}
