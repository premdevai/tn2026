import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, LucideIcon } from "@/components/shared";
import type { District } from "@/lib/schemas";
import { cn } from "@/lib/utils/cn";

type DistrictsPageProps = {
  districts: District[];
};

export function DistrictsPage({ districts }: DistrictsPageProps) {
  const mobileDistricts = districts.filter((district) => district.showOnMobile);

  return (
    <div className="bg-white text-zinc-950 selection:bg-emerald-100 selection:text-emerald-900">
      <MobileDistrictsPage districts={mobileDistricts} />
      <DesktopDistrictsPage districts={districts} />
    </div>
  );
}

/* ─────────────────────────────────────── */
/*  MOBILE                                */
/* ─────────────────────────────────────── */

function MobileDistrictsPage({ districts }: DistrictsPageProps) {
  return (
    <div className="md:hidden min-h-[max(884px,100dvh)] pb-24">
      <main className="px-4 py-6">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Districts" }]} />
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 py-1 px-2.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase border border-emerald-100 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              38 Districts
            </div>
            <h1 className="font-headline text-3xl font-semibold tracking-tight text-zinc-900 leading-none">
              State Explorer
            </h1>
            <p className="text-zinc-500 text-sm max-w-[35ch]">
              Explore administrative regions and their legislative representation.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4">
          {districts.map((district, index) => (
            <MobileDistrictCard key={district.slug} district={district} priority={index < 3} />
          ))}
        </div>

        {/* CTA Footer */}
        <section className="mt-8 bg-zinc-950 rounded-lg p-6 text-white relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h3 className="font-headline text-xl font-medium leading-tight max-w-[20ch]">
              Stay Informed, Stay Empowered
            </h3>
            <p className="text-zinc-400 text-sm max-w-[30ch]">
              Annual report with demographics & historical voting patterns.
            </p>
            <button className="bg-white text-zinc-900 px-5 py-3 rounded-lg text-sm font-semibold flex w-max items-center gap-2 active:scale-95 transition-all" type="button">
              View State Report
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 w-28 h-28 opacity-10 pointer-events-none">
            <div className="w-full h-full border-[14px] border-white rounded-full" />
          </div>
        </section>
      </main>
    </div>
  );
}

function MobileDistrictCard({ district, priority }: { district: District; priority: boolean }) {
  return (
    <Link
      href={`/districts/${district.slug}`}
      className="group flex items-center gap-4 bg-white border border-zinc-200 rounded-lg p-4 hover:border-zinc-300 hover:shadow-sm transition-all active:scale-[0.98]"
    >
      {/* Thumbnail */}
      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-zinc-100 flex-shrink-0">
        <Image
          alt={district.mobileAlt}
          className="w-full h-full object-cover"
          fill
          priority={priority}
          sizes="64px"
          src={district.mobileImage}
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-headline font-semibold text-zinc-900 text-base truncate">{district.name}</h3>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xs text-zinc-500 font-medium">{district.constituencies} constituencies</span>
          <span className="w-1 h-1 rounded-full bg-zinc-300" />
          <span className="text-xs text-zinc-500 font-medium">{district.mobileVoters} voters</span>
        </div>
      </div>

      {/* Arrow */}
      <div className="text-zinc-400 group-hover:text-zinc-900 transition-colors flex-shrink-0">
        <LucideIcon name="chevron_right" className="w-5 h-5" />
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────── */
/*  DESKTOP                               */
/* ─────────────────────────────────────── */

function DesktopDistrictsPage({ districts }: DistrictsPageProps) {
  // First 3 districts get the "featured" bento treatment
  const featured = districts.slice(0, 3);
  const remaining = districts.slice(3);

  return (
    <div className="hidden md:block">
      <main className="max-w-[1400px] mx-auto px-8 py-12">
        {/* Page Header — Asymmetric, left-aligned */}
        <header className="mb-16 space-y-4">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Districts" }]} />
          <div className="flex items-end justify-between">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-800 text-xs font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Data
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold text-zinc-950 tracking-tighter leading-[1.05] font-headline">
                State Explorer<span className="text-emerald-500">.</span>
              </h1>
              <p className="text-lg text-zinc-500 leading-relaxed max-w-[55ch]">
                A comprehensive overview of Tamil Nadu&apos;s administrative landscape. Explore district-level demographics, voter registration data, and constituency distributions.
              </p>
            </div>
            {/* Filters */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-lg text-sm font-semibold transition-colors" type="button">
                <LucideIcon name="filter_list" className="w-4 h-4" />
                Sort
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-zinc-950 text-white rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors" type="button">
                <LucideIcon name="map" className="w-4 h-4" />
                View Map
              </button>
            </div>
          </div>
        </header>

        {/* Stat Bar — Minimal, high-density */}
        <section className="mb-16 flex items-center gap-12 p-8 bg-zinc-50 rounded-lg border border-zinc-200/60">
          <StatBlock label="Total Districts" value="38" />
          <div className="w-px h-10 bg-zinc-200" />
          <StatBlock label="Registered Voters" value="6.23 Cr" />
          <div className="w-px h-10 bg-zinc-200" />
          <StatBlock label="Total Constituencies" value="234" />
          <div className="ml-auto">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold tracking-wide">ECI Verified</span>
            </div>
          </div>
        </section>

        {/* Featured Bento Grid — Asymmetric Layout */}
        <section className="mb-12">
          <div className="grid grid-cols-3 gap-4" style={{ gridAutoRows: "320px" }}>
            {/* First card spans 2 cols */}
            {featured[0] && (
              <DesktopDistrictCard
                district={featured[0]}
                priority
                className="col-span-2 row-span-1"
                size="large"
              />
            )}
            {/* Second card is standard */}
            {featured[1] && (
              <DesktopDistrictCard
                district={featured[1]}
                priority
                className="col-span-1 row-span-1"
                size="standard"
              />
            )}
            {/* Third card spans full width but shorter */}
            {featured[2] && (
              <DesktopDistrictCard
                district={featured[2]}
                priority
                className="col-span-1 row-span-1"
                size="standard"
              />
            )}
          </div>
        </section>

        {/* Remaining Districts — Dense Table-like Grid */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-950 tracking-tight font-headline">All Districts</h2>
              <p className="text-sm text-zinc-500 mt-1">Browse all 38 administrative regions</p>
            </div>
            <div className="relative">
              <input
                className="bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm w-64 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 placeholder:text-zinc-400 font-medium outline-none transition-all"
                placeholder="Filter districts..."
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {remaining.map((district) => (
              <DesktopDistrictCardCompact key={district.slug} district={district} />
            ))}
          </div>
        </section>

        {/* Insights Section — Asymmetric split */}
        <section className="flex gap-12 items-center mb-24">
          <div className="w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <span className="w-8 h-0.5 bg-zinc-300" />
              Demographic Insights
            </div>
            <h2 className="text-4xl font-semibold tracking-tighter font-headline text-zinc-950 leading-[1.1]">
              Understanding Voter Turnout Trends across the State
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed max-w-[50ch]">
              Tamil Nadu has consistently shown high democratic participation. Our analysis delves into historical data from 2019 to 2024.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <InsightCard value="+4.2%" label="Youth Voter Growth" />
              <InsightCard value="51%" label="Female Voter Ratio" />
            </div>
          </div>
          <div className="w-1/2 aspect-[4/3] bg-zinc-100 rounded-lg overflow-hidden relative border border-zinc-200/60">
            <Image
              alt="Voting line in a rural Tamil Nadu school with villagers under tree shade"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/districts/voter-line-insight.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

/* ─────────────────────────────────────── */
/*  SUB-COMPONENTS                        */
/* ─────────────────────────────────────── */

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
        {label}
      </span>
      <span className="text-3xl font-semibold font-headline text-zinc-950 tracking-tight">{value}</span>
    </div>
  );
}

function DesktopDistrictCard({
  district,
  priority = false,
  className,
  size = "standard"
}: {
  district: District;
  priority?: boolean;
  className?: string;
  size?: "large" | "standard";
}) {
  return (
    <Link
      href={`/districts/${district.slug}`}
      id={district.slug}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-zinc-950 transition-all hover:shadow-lg",
        className
      )}
    >
      <Image
        alt={district.desktopAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
        fill
        priority={priority}
        sizes={size === "large" ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
        src={district.desktopImage}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
        <div>
          {district.badge && (
            <span className="inline-block px-2.5 py-1 bg-emerald-500 text-white rounded-full text-xs font-bold mb-3 tracking-wide">
              {district.badge}
            </span>
          )}
          <h3 className={cn(
            "font-headline font-semibold text-white tracking-tight",
            size === "large" ? "text-3xl mb-2" : "text-xl mb-1"
          )}>
            {district.name}
          </h3>
          <div className="flex gap-6">
            <DesktopMetric label="Constituencies" value={district.constituencies} compact={size === "standard"} />
            <DesktopMetric label="Voters" value={district.desktopVoters} compact={size === "standard"} />
          </div>
        </div>
        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full group-hover:bg-white group-hover:text-zinc-950 transition-all flex-shrink-0">
          <LucideIcon name="arrow_forward" className="w-5 h-5" />
        </span>
      </div>
    </Link>
  );
}

function DesktopDistrictCardCompact({ district }: { district: District }) {
  return (
    <Link
      href={`/districts/${district.slug}`}
      className="group flex flex-col justify-between p-5 bg-white border border-zinc-200 rounded-lg hover:border-zinc-300 hover:shadow-sm transition-all h-full min-h-[140px]"
    >
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-500 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
          <LucideIcon name={district.icon} className="w-5 h-5" />
        </div>
        <LucideIcon name="arrow_outward" className="w-4 h-4 text-zinc-300 group-hover:text-zinc-950 transition-colors" />
      </div>

      <div className="mt-auto pt-4">
        <h3 className="font-headline font-semibold text-zinc-900 text-base tracking-tight mb-1">{district.name}</h3>
        <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium">
          <span>{district.constituencies} units</span>
          <span className="w-1 h-1 rounded-full bg-zinc-300" />
          <span>{district.region}</span>
        </div>
      </div>
    </Link>
  );
}

function DesktopMetric({ label, value, compact = false }: { label: string; value: string; compact?: boolean }) {
  return (
    <div className="text-white/90">
      <span className={cn("block text-xs opacity-60", compact ? "uppercase tracking-wider" : "")}>{label}</span>
      <span className={cn("font-semibold", compact ? "text-sm" : "text-lg")}>{value}</span>
    </div>
  );
}

function InsightCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-5 bg-zinc-50 rounded-lg border border-zinc-200/60 group hover:bg-zinc-950 hover:border-zinc-800 transition-all cursor-default">
      <h4 className="text-2xl font-semibold text-zinc-950 tracking-tight mb-1 group-hover:text-white transition-colors">{value}</h4>
      <p className="text-xs text-zinc-500 font-medium group-hover:text-zinc-400 transition-colors">{label}</p>
    </div>
  );
}
