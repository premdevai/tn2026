import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DistrictDetailPage } from "@/features/districts/components/district-detail-page";
import { appServices } from "@/lib/services/app-services";

type DistrictRoutePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await appServices.districts.listDistrictSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DistrictRoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const district = await appServices.districts.getDistrictBySlug(slug);

  if (!district) {
    return {
      title: "District"
    };
  }

  return {
    title: `${district.name} constituencies`,
    description: `Explore ${district.name} district constituencies, voter turnout, registration status, and assembly seat summaries.`
  };
}

export default async function DistrictRoutePage({ params }: DistrictRoutePageProps) {
  const { slug } = await params;
  const district = await appServices.districts.getDistrictBySlug(slug);

  if (!district) {
    notFound();
  }

  return <DistrictDetailPage district={district} />;
}
