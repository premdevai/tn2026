import type { Metadata } from "next";
import { ChecklistBoard } from "@/features/checklist/components/checklist-board";
import { appServices } from "@/lib/services/app-services";

export const metadata: Metadata = {
  title: "Voting checklist",
  description:
    "A mobile checklist for preparing documents, route plans, and voting day essentials in Tamil Nadu."
};

export default async function ChecklistPage() {
  const items = await appServices.checklist.listItems();

  return (
    <div className="space-y-5">
      <section className="space-y-2">
        <p className="text-sm font-semibold text-primary">Before you leave</p>
        <h1 className="text-3xl font-bold leading-tight">Voting checklist</h1>
        <p className="text-sm leading-6 text-muted-foreground">
          Keep the small things ready so voting day stays calm once checklist content is connected.
        </p>
      </section>
      <ChecklistBoard items={items} />
    </div>
  );
}
