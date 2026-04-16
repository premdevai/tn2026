import type { Metadata } from "next";

import { FirstTimeVoterGuide } from "@/features/guide/components/first-time-voter-guide";
import { appServices } from "@/lib/services/app-services";

export const metadata: Metadata = {
  title: "First-time voter guide",
  description:
    "A step-by-step Tamil Nadu first-time voter guide covering registration, polling day, EVM voting, VVPAT verification, and common questions."
};

export default async function GuidePage() {
  const content = await appServices.guide.getGuideContent();

  return <FirstTimeVoterGuide content={content} />;
}
