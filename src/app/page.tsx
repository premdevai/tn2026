import type { Metadata } from "next";
import { HeroSection } from "@/features/home/components/hero-section";
import { NearbyBooths } from "@/features/home/components/nearby-booths";
import { EssentialChecklist } from "@/features/home/components/essential-checklist";
import { NewToVotingGuide } from "@/features/home/components/new-to-voting-guide";

export const metadata: Metadata = {
  title: "Tamil Nadu voter helper",
  description:
    "Find booth details, queue guidance, checklist items, and candidate summaries for Tamil Nadu voting day planning."
};

export default function HomePage() {
  return (
    <div className="flex flex-col md:space-y-0 space-y-8 flex-1 w-full">
      <HeroSection />
      <NearbyBooths />
      <EssentialChecklist />
      <NewToVotingGuide />
    </div>
  );
}
