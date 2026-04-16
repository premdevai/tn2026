import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, LucideIcon, PageHeader } from "@/components/shared";
import { Button } from "@/components/shared/ui/button";
import type { District } from "@/lib/schemas";
import { cn } from "@/lib/utils/cn";

type DistrictsPageProps = {
  districts: District[];
};

export function DistrictsPage({ districts }: DistrictsPageProps) {
  const mobileDistricts = districts.filter((district) => district.showOnMobile);

  return (
    <div className="bg-background text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <MobileDistrictsPage districts={mobileDistricts} />
      <DesktopDistrictsPage districts={districts} />
    </div>
  );
}

function MobileDistrictsPage({ districts }: DistrictsPageProps) {
  return (
    <div className="md:hidden min-h-[max(884px,100dvh)] pb-8">
      <main className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-12">
        <PageHeader
          breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "Districts" }]} />}
          className="mb-10"
          eyebrow="Electoral jurisdiction"
          title="Districts of Tamil Nadu"
          description="Explore administrative regions and their legislative representation for the upcoming civic term."
          size="compact"
        />

        <div className="grid grid-cols-1 gap-6">
          {districts.map((district, index) => (
            <MobileDistrictCard key={district.slug} district={district} priority={index === 0} />
          ))}
        </div>

        <section className="mt-12 bg-primary p-8 rounded-lg relative overflow-hidden flex flex-col items-center gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="flex-1 z-10 text-center">
            <h3 className="text-surface-container-lowest text-2xl font-bold mb-2 tracking-tight font-headline">
              Stay Informed, Stay Empowered
            </h3>
            <p className="text-on-primary-container text-lg">
              Detailed demographics and historical voting patterns for all 38 districts are available in our annual report.
            </p>
          </div>
          <Button className="z-10 shadow-lg shadow-secondary/20" type="button" variant="secondary" size="xl">
            View State Report
          </Button>
        </section>
      </main>
    </div>
  );
}

function MobileDistrictCard({ district, priority }: { district: District; priority: boolean }) {
  return (
    <Link
      href={`/districts/${district.slug}`}
      className="relative group block overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
      <Image
        alt={district.mobileAlt}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        fill
        priority={priority}
        sizes="(max-width: 768px) calc(100vw - 48px), 50vw"
        src={district.mobileImage}
      />
      <div className="relative z-20 p-6 flex flex-col h-full min-h-[320px] justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-lg text-white">
            <LucideIcon name={district.icon} className="text-3xl" />
          </div>
          <span className="bg-white/10 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-xs font-semibold border border-white/20">
            Region: {district.region}
          </span>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white mb-1 font-headline">{district.name}</h3>
          <p className="text-white/80 text-sm mb-6">{district.mobileTagline}</p>
          <div className="flex items-center gap-6 py-4 border-t border-white/20">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">{district.constituencies}</span>
              <span className="text-xs text-white/70 uppercase font-bold tracking-wider">
                Constituencies
              </span>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">{district.mobileVoters}</span>
              <span className="text-xs text-white/70 uppercase font-bold tracking-wider">
                Registered Voters
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function DesktopDistrictsPage({ districts }: DistrictsPageProps) {
  return (
    <div className="hidden md:block">
      <main className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-12">
        <PageHeader
          className="mb-12"
          breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "Districts" }]} />}
          title="State Explorer"
          description="A comprehensive overview of Tamil Nadu's administrative landscape. Explore district-level demographics, voter registration data, and constituency distributions."
          actions={
            <>
              <Button className="gap-2 rounded-full" type="button" variant="subtle">
                <LucideIcon name="filter_list" className="text-sm" />
                Sort by Population
              </Button>
              <Button className="gap-2 rounded-full" type="button">
                <LucideIcon name="map" className="text-sm" />
                View Map
              </Button>
            </>
          }
        />

        <section className="mb-16 p-8 bg-surface-container-low rounded-lg flex flex-wrap gap-12 items-center">
          <StatBlock label="Total Districts" value="38" />
          <div className="w-px h-12 bg-outline-variant/30 hidden md:block" />
          <StatBlock label="Registered Voters" value="6.23 Cr" />
          <div className="w-px h-12 bg-outline-variant/30 hidden md:block" />
          <StatBlock label="Total Constituencies" value="234" />
          <div className="ml-auto">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary-container/30 text-secondary rounded-lg">
              <LucideIcon name="verified" className="text-sm" />
              <span className="text-sm font-semibold">Data Verified by ECI</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {districts.map((district, index) => (
            <DesktopDistrictCard key={district.slug} district={district} priority={index === 0} />
          ))}
        </section>

        <section className="mt-24 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-secondary font-bold text-sm tracking-widest uppercase mb-4">
              <span className="w-8 h-0.5 bg-secondary" />
              Demographic Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6 leading-tight">
              Understanding Voter Turnout Trends across the State
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              Tamil Nadu has consistently shown high democratic participation. Our analysis delves into historical data
              from 2019 to 2024 to provide an accurate representation of electoral shifts across urban and rural districts.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <InsightCard icon="trending_up" value="+4.2%" label="Youth Voter Growth" />
              <InsightCard icon="group" value="51%" label="Female Voter Ratio" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full aspect-video lg:aspect-square bg-surface-container-high rounded-lg overflow-hidden relative">
            <Image
              alt="Voting line in a rural Tamil Nadu school with villagers under tree shade"
              className="absolute inset-0 w-full h-full object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/districts/voter-line-insight.png"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </section>
      </main>
    </div>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
        {label}
      </span>
      <span className="text-3xl font-headline font-bold text-primary">{value}</span>
    </div>
  );
}

function DesktopDistrictCard({ district, priority }: { district: District; priority: boolean }) {
  return (
    <Link
      href={`/districts/${district.slug}`}
      id={district.slug}
      className={cn(
        "group relative overflow-hidden rounded-lg h-[400px] shadow-[0_24px_48px_-12px_rgba(25,28,29,0.06)] bg-primary",
        district.featured ? "md:col-span-2" : ""
      )}
    >
      <Image
        alt={district.desktopAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        fill
        priority={priority}
        sizes={district.featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
        src={district.desktopImage}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {district.featured ? (
        <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
          <div>
            {district.badge ? (
              <span className="inline-block px-3 py-1 bg-secondary text-on-secondary rounded-full text-xs font-bold mb-3">
                {district.badge}
              </span>
            ) : null}
            <h3 className="text-4xl font-headline font-bold text-white mb-2">{district.name}</h3>
            <div className="flex gap-6">
              <DesktopMetric label="Constituencies" value={district.constituencies} />
              <DesktopMetric label="Registered Voters" value={district.desktopVoters} />
            </div>
          </div>
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-full group-hover:bg-white group-hover:text-primary transition-all">
            <LucideIcon name="arrow_forward" className="text-2xl" />
          </span>
        </div>
      ) : (
        <div className="absolute bottom-0 left-0 p-8">
          <h3 className="text-2xl font-headline font-bold text-white mb-3">{district.name}</h3>
          <div className="flex gap-4">
            <DesktopMetric label="Units" value={district.constituencies} compact />
            <DesktopMetric label="Voters" value={district.desktopVoters} compact />
          </div>
        </div>
      )}
    </Link>
  );
}

function DesktopMetric({ label, value, compact = false }: { label: string; value: string; compact?: boolean }) {
  return (
    <div className="text-white/90">
      <span className={cn("block text-xs opacity-70", compact ? "uppercase" : "")}>{label}</span>
      <span className={cn("font-bold", compact ? "text-base" : "text-lg")}>{value}</span>
    </div>
  );
}

function InsightCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="p-6 bg-surface-container rounded-lg">
      <LucideIcon name={icon} className="text-2xl text-secondary mb-3" />
      <h4 className="font-bold text-primary mb-1">{value}</h4>
      <p className="text-xs text-on-surface-variant">{label}</p>
    </div>
  );
}
