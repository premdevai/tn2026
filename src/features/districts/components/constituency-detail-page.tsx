import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, LucideIcon, PageHeader } from "@/components/shared";
import { Button } from "@/components/shared/ui/button";
import { toCandidateSlug } from "@/features/districts/lib/candidate-slug";
import type { BoothStatus, CandidateProfile, Constituency, District } from "@/lib/schemas";
import { cn } from "@/lib/utils/cn";

type ConstituencyDetailPageProps = {
  district: District;
  constituency: Constituency;
};

export function ConstituencyDetailPage({ district, constituency }: ConstituencyDetailPageProps) {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container">
      <MobileConstituencyDetail district={district} constituency={constituency} />
      <DesktopConstituencyDetail district={district} constituency={constituency} />
    </div>
  );
}

function MobileConstituencyDetail({ district, constituency }: ConstituencyDetailPageProps) {
  return (
    <div className="md:hidden min-h-[max(884px,100dvh)]">
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-8 md:px-8 md:py-12">
        <PageHeader
          breadcrumbs={
            <Breadcrumbs
              items={[
                { href: "/", label: "Tamil Nadu" },
                { href: `/districts/${district.slug}`, label: district.name },
                { label: constituency.name }
              ]}
            />
          }
          title={`${constituency.name} Constituency Hub`}
          description={`Official voter information for Assembly Constituency ${constituency.assemblyNumber}`}
          size="compact"
        />

        <section className="bg-surface-container-low rounded-lg overflow-hidden relative group">
          <div className="h-44 w-full relative">
            <Image
              alt={`${constituency.name} polling station map`}
              className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              fill
              priority
              sizes="(max-width: 768px) calc(100vw - 40px), 50vw"
              src={constituency.mapMobile}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="text-white">
                <p className="text-xs uppercase tracking-widest font-bold opacity-80">
                  Your Assigned Station
                </p>
                <p className="font-semibold text-base">{constituency.assignedStation}</p>
              </div>
              <Button className="gap-2 rounded-full shadow-lg" type="button" variant="secondary">
                Go Now
                <LucideIcon name="directions" className="text-sm" />
              </Button>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-headline text-lg font-semibold text-primary">Live Booth Status</h3>
            <span className="text-xs text-outline font-medium flex items-center gap-1">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Updated 2m ago
            </span>
          </div>
          <div className="space-y-3">
            {(constituency.mobileBooths ?? constituency.booths).slice(0, 2).map((booth) => (
              <MobileBoothCard booth={booth} key={booth.name} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-headline text-lg font-semibold text-primary mb-4">Candidate Directory</h3>
          <div className="space-y-4">
            {constituency.candidates.map((candidate) => (
              <MobileCandidateCard candidate={candidate} key={candidate.name} districtSlug={district.slug} constituencySlug={constituency.slug} />
            ))}
          </div>
        </section>

        <section className="bg-secondary-container/20 p-6 rounded-lg border border-secondary-container/30">
          <h3 className="font-headline text-lg font-semibold text-on-secondary-container mb-4">
            Voter Checklist
          </h3>
          <div className="space-y-4">
            <ChecklistItem title="Original EPIC card" detail="Digital copies not accepted at booths" />
            <ChecklistItem title="Verify Polling Slip" detail="Check your part number and serial number" />
            <ChecklistItem title="Aadhaar (Optional ID)" detail="Secondary proof if EPIC is damaged" />
          </div>
        </section>
      </main>
    </div>
  );
}

function MobileBoothCard({ booth }: { booth: BoothStatus }) {
  const isLow = booth.tone === "low";
  const isMedium = booth.tone === "medium";

  return (
    <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            isLow
              ? "bg-secondary/10 text-secondary"
              : isMedium
                ? "bg-tertiary-fixed/30 text-on-tertiary-fixed-variant"
                : "bg-error-container text-error"
          )}
        >
          <LucideIcon name={booth.icon} />
        </div>
        <div>
          <p className="font-bold text-sm">{booth.name}</p>
          <p className="text-xs text-outline">{booth.detail}</p>
        </div>
      </div>
      <div
        className={cn(
          "px-3 py-1.5 rounded-lg flex items-center gap-2",
          isLow
            ? "bg-secondary/10 text-secondary"
            : isMedium
              ? "bg-tertiary-fixed/20 text-on-tertiary-fixed-variant"
              : "bg-error-container text-error"
        )}
      >
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            isLow ? "bg-secondary" : isMedium ? "bg-tertiary-fixed-dim" : "bg-error"
          )}
        />
        <span className="text-xs font-bold">{booth.waitLabel}</span>
      </div>
    </div>
  );
}

function MobileCandidateCard({ candidate, districtSlug, constituencySlug }: { candidate: CandidateProfile; districtSlug: string; constituencySlug: string }) {
  const candidateSlug = toCandidateSlug(candidate);
  return (
    <Link href={`/districts/${districtSlug}/constituencies/${constituencySlug}/candidates/${candidateSlug}`} className="block">
      <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
      <div className="p-4 flex gap-4">
        <div className="relative">
          <div className="w-20 h-24 rounded-lg bg-surface-container overflow-hidden relative">
            <Image
              alt={candidate.imageAlt}
              className="w-full h-full object-cover"
              fill
              sizes="80px"
              src={candidate.mobileImage}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-surface">
            <LucideIcon
              name="verified"
              className="text-secondary text-sm"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-base leading-tight">{candidate.name}</h4>
            <LucideIcon name={candidate.symbolIcon} className="text-primary text-xl" />
          </div>
          <p className={cn("text-xs font-medium mt-0.5", candidate.accent === "tertiary" ? "text-outline" : "text-secondary")}>
            {candidate.mobileParty ?? candidate.party}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs bg-surface-container-high px-2 py-0.5 rounded-md text-outline font-medium">
              {candidate.mobileEducation}
            </span>
            <span className="text-xs bg-surface-container-high px-2 py-0.5 rounded-md text-outline font-medium">
              {candidate.mobileAssets}
            </span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

function ChecklistItem({ title, detail }: { title: string; detail: string }) {
  return (
    <label className="flex items-start gap-3 group">
      <div className="mt-1 w-5 h-5 rounded border-2 border-secondary flex items-center justify-center transition-colors group-active:bg-secondary">
        <LucideIcon name="check" className="text-sm text-white hidden" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-primary">{title}</p>
        <p className="text-xs text-outline">{detail}</p>
      </div>
    </label>
  );
}

function DesktopConstituencyDetail({ district, constituency }: ConstituencyDetailPageProps) {
  return (
    <div className="hidden md:block">
      <main className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-12">
        <PageHeader
          breadcrumbs={
            <Breadcrumbs
              items={[
                { href: "/", label: "Tamil Nadu" },
                { href: `/districts/${district.slug}`, label: district.name },
                { label: constituency.name },
                { label: "Candidates & Booths" }
              ]}
            />
          }
          className="mb-12"
          title={`${constituency.name} Constituency Hub`}
          description="Official live data for the Assembly Election. Verified candidate profiles and real-time polling booth metrics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <section className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline text-2xl font-semibold text-primary">Candidate Directory</h2>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <LucideIcon
                  name="verified"
                  className="text-sm"
                />
                ECI VERIFIED
              </span>
            </div>
            <div className="space-y-6">
              {constituency.candidates.map((candidate) => (
                <DesktopCandidateCard candidate={candidate} key={candidate.name} districtSlug={district.slug} constituencySlug={constituency.slug} />
              ))}
            </div>
          </section>

          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-primary p-8 rounded-lg text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="font-headline text-2xl font-semibold mb-2">Polling Finder</h2>
                <p className="text-on-primary-container mb-6">
                  Real-time booth traffic monitoring for {constituency.name}.
                </p>

                <div className="w-full h-48 bg-surface-container-high/20 rounded-lg mb-6 flex items-center justify-center overflow-hidden border border-white/10 group cursor-pointer relative">
                  <Image
                    alt={`${constituency.name} map placeholder`}
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    src={constituency.mapDesktop}
                  />
                  <div className="absolute flex flex-col items-center">
                    <LucideIcon name="location_on" className="text-4xl mb-2" />
                    <span className="text-xs font-label uppercase tracking-widest">Interactive Map</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {(constituency.desktopBooths ?? constituency.booths).map((booth) => (
                    <DesktopBoothItem booth={booth} key={booth.name} />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary opacity-20 blur-3xl" />
            </div>

            <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-secondary">
              <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                <LucideIcon name="info" className="text-secondary" />
                Voter Checklist
              </h4>
              <ul className="text-sm space-y-2 text-on-surface-variant">
                <li className="flex gap-2">
                  <LucideIcon name="check_circle" className="text-sm mt-1" />
                  Carry original EPIC card or valid Govt ID.
                </li>
                <li className="flex gap-2">
                  <LucideIcon name="check_circle" className="text-sm mt-1" />
                  Mobile phones are not allowed inside booths.
                </li>
                <li className="flex gap-2">
                  <LucideIcon name="check_circle" className="text-sm mt-1" />
                  Booths close at 6:00 PM IST.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function DesktopCandidateCard({ candidate, districtSlug, constituencySlug }: { candidate: CandidateProfile; districtSlug: string; constituencySlug: string }) {
  const candidateSlug = toCandidateSlug(candidate);
  return (
    <Link href={`/districts/${districtSlug}/constituencies/${constituencySlug}/candidates/${candidateSlug}`} className="block">
      <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <LucideIcon name={candidate.symbolIcon} className="text-6xl" />
      </div>
      <div className="flex gap-6">
        <div className="w-24 h-24 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden relative">
          <Image
            alt={candidate.imageAlt}
            className="w-full h-full object-cover"
            fill
            sizes="96px"
            src={candidate.desktopImage}
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-primary mb-1">{candidate.name}</h3>
              <p className="text-on-surface-variant font-label text-sm uppercase tracking-wide mb-3">
                {candidate.party}
              </p>
            </div>
            <div
              className={cn(
                "p-2 rounded-lg",
                candidate.accent === "tertiary"
                  ? "bg-tertiary-fixed text-on-tertiary-fixed"
                  : "bg-primary-container text-on-primary-container"
              )}
            >
              <LucideIcon name={candidate.symbolIcon} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <CandidateMetric label="ASSETS" value={candidate.desktopAssets} />
            <CandidateMetric label="EDUCATION" value={candidate.desktopEducation} />
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

function CandidateMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface-container-low p-3 rounded-lg">
      <span className="block text-xs text-on-surface-variant font-label mb-1">{label}</span>
      <span className="font-semibold text-primary">{value}</span>
    </div>
  );
}

function DesktopBoothItem({ booth }: { booth: BoothStatus }) {
  const isLow = booth.tone === "low";
  const isMedium = booth.tone === "medium";

  return (
    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg flex items-center justify-between hover:bg-white/10 transition-colors">
      <div>
        <h4 className="font-semibold">{booth.name}</h4>
        <p className="text-xs text-on-primary-container">{booth.detail}</p>
      </div>
      <div className="text-right">
        <span
          className={cn(
            "inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded mb-2",
            isLow
              ? "text-secondary-fixed bg-secondary/20"
              : isMedium
                ? "text-tertiary-fixed-dim bg-tertiary-container/40"
                : "text-error bg-error-container"
          )}
        >
          <LucideIcon name={isLow ? "bolt" : isMedium ? "pending" : "warning"} className="text-xs" />
          {booth.waitLabel}
        </span>
        {booth.actionLabel ? (
          <button className="block text-xs font-bold underline hover:text-secondary-fixed transition-colors" type="button">
            {booth.actionLabel}
          </button>
        ) : (
          <p className="text-xs text-on-primary-container">
            {isMedium ? "Est: 20m wait" : "Avoid peak hours"}
          </p>
        )}
      </div>
    </div>
  );
}
