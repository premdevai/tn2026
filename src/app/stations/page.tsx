import { Metadata } from "next";
import { StationsFlow } from "@/features/stations/components/stations-flow";
import { appServices } from "@/lib/services/app-services";

export const metadata: Metadata = {
  title: "Real-time Status",
  description: "Find your polling station and view live wait times."
};

export default async function StationsPage() {
  const content = await appServices.stations.getStationPageContent();

  return (
    <div className="w-full">
      <StationsFlow content={content} />
    </div>
  );
}
