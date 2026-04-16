import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { appServices } from "@/lib/services/app-services";
import { CandidateProfilePage } from "@/features/districts/components/candidate-profile-page";

type CandidateRoutePageProps = {
  params: Promise<{
    slug: string;
    constituencySlug: string;
    candidateSlug: string;
  }>;
};

export async function generateMetadata({ params }: CandidateRoutePageProps): Promise<Metadata> {
  const { slug, constituencySlug, candidateSlug } = await params;
  const record = await appServices.districts.getCandidateBySlug(slug, constituencySlug, candidateSlug);

  if (!record) {
    return {
      title: "Candidate Profile"
    };
  }

  return {
    title: `${record.candidate.name} - Candidate Profile`,
    description: `Profile of ${record.candidate.name}, candidate for ${record.constituency.name} constituency.`
  };
}

export async function generateStaticParams() {
  return appServices.districts.listCandidateSlugs();
}

export default async function CandidateRoutePage({ params }: CandidateRoutePageProps) {
  const { slug, constituencySlug, candidateSlug } = await params;
  const record = await appServices.districts.getCandidateBySlug(slug, constituencySlug, candidateSlug);

  if (!record) {
    notFound();
  }

  return <CandidateProfilePage district={record.district} constituency={record.constituency} candidate={record.candidate} />;
}
