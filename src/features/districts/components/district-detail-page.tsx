import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, LucideIcon, PageHeader } from "@/components/shared";
import { Button } from "@/components/shared/ui/button";
import type { Constituency, District } from "@/lib/schemas";
import { cn } from "@/lib/utils/cn";

type DistrictDetailPageProps = {
  district: District;
};

export function DistrictDetailPage({ district }: DistrictDetailPageProps) {
  return (
    <div className="bg-background text-on-surface">
      <MobileDistrictDetail district={district} />
      <DesktopDistrictDetail district={district} />
    </div>
  );
}

function MobileDistrictDetail({ district }: DistrictDetailPageProps) {
  return (
    <div className="md:hidden min-h-[max(884px,100dvh)]">
      <main className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-12">
        <PageHeader
          breadcrumbs={
            <Breadcrumbs
              backHref="/districts"
              backLabel="Districts"
              items={[
                { href: "/", label: "Tamil Nadu" },
                { href: "/districts", label: "Districts" },
                { label: district.name }
              ]}
              variant="back"
            />
          }
          className="mb-8"
          title={`${district.name} Constituencies`}
          description={`${district.totalSeats} Legislative Assembly Seats`}
          size="compact"
        />
        <section className="mb-10">
          <div className="relative overflow-hidden rounded-lg bg-primary h-48 flex items-end p-6 mb-8 group">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
              <Image
                alt={district.detailHeroAlt}
                className="w-full h-full object-cover"
                fill
                priority
                sizes="(max-width: 768px) calc(100vw - 48px), 50vw"
                src={district.detailHeroImage}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-on-primary text-3xl font-bold tracking-tight mb-1 font-headline">
                Constituencies
              </h2>
              <p className="text-on-primary-container text-sm font-medium">
                {district.totalSeats} Legislative Assembly Seats
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-4 rounded-lg">
              <span className="block text-secondary font-headline font-bold text-2xl">
                {district.turnout}
              </span>
              <span className="text-on-surface-variant text-xs font-medium uppercase tracking-wider">
                Voter Turnout &apos;21
              </span>
            </div>
            <div className="bg-surface-container-low p-4 rounded-lg border-l-4 border-tertiary-fixed-dim">
              <span className="block text-primary font-headline font-bold text-2xl">
                {district.registrationStatus}
              </span>
              <span className="text-on-surface-variant text-xs font-medium uppercase tracking-wider">
                Registration Status
              </span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-xl font-bold text-primary">Urban Assembly Areas</h2>
            <Button className="gap-1 px-0" type="button" variant="link">
              Sort A-Z <LucideIcon name="sort" className="text-sm" />
            </Button>
          </div>

          {district.constituenciesList.slice(0, 3).map((constituency) => (
            <MobileConstituencyRow
              constituency={constituency}
              districtSlug={district.slug}
              key={constituency.slug}
            />
          ))}

          <div className="pt-6">
            <div className="bg-primary-container p-6 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-on-primary-container font-medium mb-1">Visual Explorer</p>
                <h4 className="text-on-primary text-lg font-bold">Interactive Boundary Map</h4>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <LucideIcon name="map" className="text-white" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MobileConstituencyRow({
  constituency,
  districtSlug
}: {
  constituency: Constituency;
  districtSlug: string;
}) {
  return (
    <Link
      className="bg-surface-container-lowest hover:bg-surface-container transition-colors p-5 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.02)] group cursor-pointer flex justify-between items-center"
      href={`/districts/${districtSlug}/constituencies/${constituency.slug}`}
    >
      <div className="flex gap-5 items-center min-w-0">
        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 relative">
          <Image
            alt={constituency.thumbnailAlt}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            fill
            sizes="56px"
            src={constituency.thumbnail}
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-primary text-lg truncate">{constituency.name}</h3>
          <p className="text-on-surface-variant text-sm flex items-center gap-1">
            <LucideIcon name="pin_drop" className="text-sm" />
            <span className="truncate">{constituency.division}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "text-xs px-2 py-1 rounded font-bold uppercase tracking-tighter hidden sm:inline-block",
            constituency.tagTone === "bellwether"
              ? "bg-tertiary-fixed text-on-tertiary-fixed-variant"
              : "bg-secondary-container text-on-secondary-fixed-variant"
          )}
        >
          {constituency.tag}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold text-secondary group-hover:text-primary transition-colors">
            View Candidates
          </span>
          <LucideIcon
            name="chevron_right"
            className="text-outline group-hover:text-primary transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

function DesktopDistrictDetail({ district }: DistrictDetailPageProps) {
  return (
    <div className="hidden md:block">
      <main className="mx-auto w-full max-w-7xl px-6 py-8 md:px-8 md:py-12">
        <PageHeader
          className="mb-10"
          breadcrumbs={
            <Breadcrumbs
              items={[
                { href: "/", label: "Tamil Nadu" },
                { href: "/districts", label: "Districts" },
                { label: district.name }
              ]}
            />
          }
          title={`${district.name} District`}
          description={district.overviewText}
          actions={
            <div className="bg-surface-container-high px-4 py-2 rounded-full flex items-center gap-2">
              <LucideIcon name="filter_list" className="text-on-surface-variant text-sm" />
              <span className="text-sm font-semibold text-on-surface-variant">Filter by Turnout</span>
            </div>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15">
              <h2 className="text-on-primary-fixed-variant font-label font-bold uppercase tracking-widest mb-4">
                District Overview
              </h2>
              <div className="space-y-6">
                <OverviewMetric label="Total Assembly Seats" value={district.totalSeats} />
                <OverviewMetric label="Registered Voters" value={district.registeredVotersLong} />
                <div>
                  <p className="text-sm text-on-surface-variant mb-1">Last Update</p>
                  <p className="text-sm font-semibold text-secondary flex items-center gap-1">
                    <LucideIcon
                      name="verified"
                      className="text-sm"
                    />
                    {district.lastUpdate}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-on-primary p-6 rounded-lg relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Voter Awareness</h3>
                <p className="text-sm opacity-80 mb-4">
                  Ensure your name is in the latest electoral roll before the upcoming sessions.
                </p>
                <Button className="w-full" type="button" variant="secondary">
                  Check Your Name
                </Button>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 scale-150">
                <LucideIcon name="how_to_reg" className="text-9xl" />
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {district.constituenciesList.map((constituency) => (
                <DesktopConstituencyCard
                  constituency={constituency}
                  districtSlug={district.slug}
                  key={constituency.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function OverviewMetric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-on-surface-variant mb-1">{label}</p>
      <p className="text-3xl font-bold text-primary">{value}</p>
    </div>
  );
}

function DesktopConstituencyCard({
  constituency,
  districtSlug
}: {
  constituency: Constituency;
  districtSlug: string;
}) {
  return (
    <div className="group bg-surface-container-lowest p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-primary">{constituency.name}</h3>
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-tighter">
            Active
          </span>
        </div>
        <div className="flex items-end gap-4 mb-6">
          <div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">
              2021 Turnout
            </p>
            <p className="text-2xl font-bold text-secondary">{constituency.turnout}</p>
          </div>
          <div className="h-10 w-px bg-outline-variant/20 mb-1" />
          <div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">
              Status
            </p>
            <p className="text-sm font-semibold text-primary">{constituency.status}</p>
          </div>
        </div>
      </div>
      <Link
        className="flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-lg font-bold text-sm transition-all group-hover:bg-primary-container active:opacity-80"
        href={`/districts/${districtSlug}/constituencies/${constituency.slug}`}
      >
        View Candidates & Booths
        <LucideIcon name="arrow_forward" className="text-sm" />
      </Link>
    </div>
  );
}
