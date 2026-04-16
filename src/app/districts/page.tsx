import type { Metadata } from "next";
import { DistrictsPage } from "@/features/districts/components/districts-page";
import { appServices } from "@/lib/services/app-services";

export const metadata: Metadata = {
  title: "Districts",
  description:
    "Explore Tamil Nadu district-level civic data, constituency counts, voter registration summaries, and demographic insights."
};

export default async function DistrictsRoutePage() {
  const districts = await appServices.districts.listDistricts();

  return <DistrictsPage districts={districts} />;
}
