import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConstituencyDetailPage } from "@/features/districts/components/constituency-detail-page";
import { appServices } from "@/lib/services/app-services";

type ConstituencyRoutePageProps = {
  params: Promise<{
    slug: string;
    constituencySlug: string;
  }>;
};

export async function generateStaticParams() {
  return appServices.districts.listConstituencySlugs();
}

export async function generateMetadata({ params }: ConstituencyRoutePageProps): Promise<Metadata> {
  const { slug, constituencySlug } = await params;
  const record = await appServices.districts.getConstituencyBySlug(slug, constituencySlug);

  if (!record) {
    return {
      title: "Constituency"
    };
  }

  return {
    title: `${record.constituency.name} constituency hub`,
    description: `Candidate profiles, booth status, voter checklist, and polling information for ${record.constituency.name}, ${record.district.name}.`
  };
}

export default async function ConstituencyRoutePage({ params }: ConstituencyRoutePageProps) {
  const { slug, constituencySlug } = await params;
  const record = await appServices.districts.getConstituencyBySlug(slug, constituencySlug);

  if (!record) {
    notFound();
  }

  return <ConstituencyDetailPage district={record.district} constituency={record.constituency} />;
}
