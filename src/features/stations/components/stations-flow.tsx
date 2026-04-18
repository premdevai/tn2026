"use client";

import { Breadcrumbs, LucideIcon, PageHeader, PageShell } from "@/components/shared";
import { ResponsiveImage } from "@/components/shared/responsive-image";
import { Button } from "@/components/shared/ui/button";
import { useSelectedStation } from "@/features/stations/hooks/use-selected-station";
import type { StationPageContent } from "@/lib/schemas";

type StationsFlowProps = {
  content: StationPageContent;
};

export function StationsFlow({ content }: StationsFlowProps) {
  const { hasStation, selectStation, clearStation } = useSelectedStation();
  const { defaultStation: station, landing } = content;

  if (hasStation === null) return null;

  if (!hasStation) {
    return (
      <>
        {/* ─── DESKTOP: LANDING ─── */}
        <PageShell className="hidden md:flex md:py-12 lg:py-16">
          <PageHeader
            breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "Stations" }]} />}
            eyebrow="Polling station"
            title="Find your polling station"
            description="Access real-time voting analytics and personalized directions from one consistent station surface."
          />

          {/* ── Hero: Asymmetric Split ── */}
          <div className="grid lg:grid-cols-12 gap-16 items-start mt-4">
            {/* Left: Content — 7 cols */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary tracking-tight leading-[1.1]">
                  Your vote begins with your{" "}
                  <span className="text-secondary">station.</span>
                </h2>
                <p className="text-base text-on-surface-variant leading-relaxed max-w-[50ch]">
                  Access real-time voting analytics and personalized
                  directions. Locate your designated polling station to
                  participate in the democratic process.
                </p>
              </div>

              {/* Search + CTA */}
              <div className="space-y-4 max-w-md">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
                    <LucideIcon name="search" />
                  </div>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-low rounded-lg border border-outline-variant/20 focus:ring-2 focus:ring-secondary/20 focus:border-secondary/40 text-on-surface placeholder:text-outline transition-all duration-200"
                    placeholder="Enter your postal code or area..."
                    type="text"
                  />
                </div>
                <button
                  onClick={selectStation}
                  className="w-full flex items-center justify-center gap-3 bg-primary text-on-primary py-4 px-8 rounded-lg font-semibold text-base hover:bg-primary-container active:scale-[0.98] transition-all duration-200"
                >
                  <LucideIcon name="my_location" />
                  Use my current location
                </button>
              </div>

              {/* Trust indicators – inline, no cards */}
              <div className="flex items-center gap-6 pt-4 border-t border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs font-semibold text-on-surface-variant">Live data</span>
                </div>
                <div className="flex items-center gap-2">
                  <LucideIcon className="text-secondary text-sm" name="verified" />
                  <span className="text-xs font-semibold text-on-surface-variant">EC verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <LucideIcon className="text-secondary text-sm" name="lock" />
                  <span className="text-xs font-semibold text-on-surface-variant">Privacy first</span>
                </div>
              </div>
            </div>

            {/* Right: Image — 5 cols, aspect-[4/5] for editorial feel */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative shadow-[0_24px_48px_-12px_rgba(25,28,29,0.06)]">
                <ResponsiveImage
                  alt="Polling station building"
                  className="h-full w-full"
                  src={landing.heroImage}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />

                {/* Floating live status chip */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-xl rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
                      </div>
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">Live status</span>
                    </div>
                    <span className="text-xs text-on-surface-variant">Downtown stations</span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-headline text-primary tracking-tight">12 min</span>
                    <span className="text-sm text-on-surface-variant">avg. wait</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Benefits: Zig-Zag / asymmetric 2-col  ── */}
          <section className="mt-8 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary tracking-tight">
                Why save your station?
              </h2>
              <p className="text-on-surface-variant max-w-[50ch]">
                Connecting to your specific polling station provides
                exclusive editorial insights and logistical updates.
              </p>
            </div>

            {/* 2-column asymmetric grid instead of banned 3-col equal cards */}
            <div className="grid md:grid-cols-12 gap-6">
              {/* Large feature tile */}
              <div className="md:col-span-8 bg-surface-container-low rounded-lg p-8 flex flex-col justify-between min-h-[200px] group hover:bg-surface-container-highest transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center">
                    <LucideIcon className="text-secondary text-xl" name="groups" />
                  </div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary/10 px-2 py-1 rounded">Live</span>
                </div>
                <div className="space-y-2 mt-6">
                  <h3 className="text-xl font-bold font-headline text-primary">Real-time crowd alerts</h3>
                  <p className="text-on-surface-variant leading-relaxed max-w-[45ch]">
                    Receive push notifications when voter turnout is low
                    so you can avoid long queues and vote comfortably.
                  </p>
                </div>
              </div>

              {/* Stacked smaller tiles */}
              <div className="md:col-span-4 flex flex-col gap-6">
                <div className="bg-surface-container-low rounded-lg p-6 flex flex-col gap-4 group hover:bg-surface-container-highest transition-colors duration-300 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                    <LucideIcon className="text-secondary text-lg" name="schedule" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold font-headline text-primary">Live wait times</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Estimated wait times based on historical data and verified check-ins.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-lg p-6 flex flex-col gap-4 group hover:bg-surface-container-highest transition-colors duration-300 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                    <LucideIcon className="text-secondary text-lg" name="directions" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold font-headline text-primary">Easy directions</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Accessibility mapping, parking, and transit routes for your station.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </PageShell>

        {/* ─── MOBILE: LANDING ─── */}
        <div className="block md:hidden px-0 overflow-hidden">
          <div className="px-5 pt-6">
            <PageHeader
              breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "Stations" }]} />}
              eyebrow="Polling station"
              title="Find your polling station"
              description="Locate your assigned booth and save live updates for voting day."
              size="compact"
            />
          </div>

          {/* Hero image with overlay text */}
          <div className="relative h-[320px] w-full overflow-hidden mt-4">
            <ResponsiveImage
              alt="Polling station building"
              className="h-full w-full"
              src={landing.heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 w-full">
              <h2 className="font-headline text-2xl font-bold text-primary leading-[1.1] tracking-tight max-w-[80%]">
                Locate your assigned station.
              </h2>
            </div>
          </div>

          {/* Search card overlapping image */}
          <div className="px-5 -mt-4 relative z-10">
            <div className="bg-surface-container-lowest rounded-lg p-5 shadow-[0_20px_50px_rgba(4,22,39,0.08)]">
              <div className="space-y-3">
                <div className="relative flex items-center bg-surface-container-low rounded-lg px-4 py-3.5 group transition-all duration-200 focus-within:ring-2 focus-within:ring-secondary/10 border border-outline-variant/15">
                  <LucideIcon className="text-outline mr-3" name="search" />
                  <input
                    className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline text-sm font-medium"
                    placeholder="Enter Voter ID or street name"
                    type="text"
                  />
                </div>
                <button
                  onClick={selectStation}
                  className="w-full bg-primary text-on-primary font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] duration-200"
                >
                  <LucideIcon className="text-[18px]" name="my_location" />
                  <span>Use current location</span>
                </button>
              </div>
            </div>
          </div>

          {/* Benefits section – compact bento */}
          <section className="mt-8 px-5 space-y-6">
            <div className="flex items-end justify-between">
              <h3 className="font-headline text-sm font-bold text-primary tracking-tight">Why save your station?</h3>
              <div className="h-px flex-grow ml-4 mb-1 bg-outline-variant/30" />
            </div>

            <div className="grid grid-cols-12 gap-3">
              {/* Full-width feature */}
              <div className="col-span-12 bg-surface-container-low rounded-lg p-5 flex flex-col justify-between min-h-[140px]">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-secondary/10 rounded-lg">
                    <LucideIcon className="text-secondary" name="groups" />
                  </div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">Live</span>
                </div>
                <div className="mt-3">
                  <h4 className="font-headline text-base font-semibold text-primary mb-0.5">Crowd insights</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Real-time occupancy data to help you avoid peak voting hours.</p>
                </div>
              </div>

              {/* Two half-width tiles */}
              <div className="col-span-6 bg-surface-container-low rounded-lg p-4 flex flex-col justify-between min-h-44">
                <div className="p-2.5 bg-tertiary-fixed-dim/20 rounded-lg w-fit">
                  <LucideIcon className="text-on-tertiary-fixed-variant" name="schedule" />
                </div>
                <div className="mt-auto">
                  <h4 className="font-headline text-sm font-semibold text-primary">Wait times</h4>
                  <p className="text-on-surface-variant text-xs mt-0.5">Precise analytics for your ward.</p>
                </div>
              </div>

              <div className="col-span-6 bg-secondary-container/20 rounded-lg p-4 flex flex-col justify-between min-h-44">
                <div className="p-2.5 bg-secondary-fixed/50 rounded-lg w-fit">
                  <LucideIcon className="text-secondary" name="verified" />
                </div>
                <div className="mt-auto">
                  <h4 className="font-headline text-sm font-semibold text-secondary">Verified info</h4>
                  <p className="text-on-surface-variant text-xs mt-0.5">Data from official EC sources.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA banner */}
          <div className="mt-8 mb-6 px-5">
            <div className="bg-primary-container p-6 rounded-lg text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full -mr-12 -mt-12 blur-3xl" />
              <p className="text-on-primary-container text-sm font-medium mb-3">Need help finding your voter slip?</p>
              <button className="inline-flex items-center text-secondary-fixed-dim font-bold text-sm gap-2 hover:gap-3 transition-all duration-200">
                Access digital documents
                <LucideIcon className="text-sm" name="arrow_forward" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* ─── DESKTOP: STATION DASHBOARD ─── */}
      <PageShell className="hidden md:flex pb-24">
        <PageHeader
          breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { href: "/stations", label: "Stations" }, { label: station.name }]} />}
          eyebrow="Verified Polling Station"
          title={station.name}
          description={station.address}
          actions={
            <>
              <div className="bg-secondary text-on-secondary px-5 py-3 rounded-lg flex items-center gap-3 shadow-lg shadow-secondary/10">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold tracking-wider opacity-80">Live</span>
                  <span className="text-sm font-bold">{station.statusLabel}</span>
                </div>
              </div>
              <Button onClick={clearStation} type="button" variant="link">
                Change station
              </Button>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main content — 8 cols */}
          <div className="md:col-span-8 space-y-6">
            {/* Wait time card */}
            <section className="bg-surface-container-lowest rounded-lg p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
                <div>
                  <h2 className="text-xs font-bold font-headline text-on-surface-variant uppercase tracking-wider mb-2">Current estimated wait</h2>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold font-headline text-primary tracking-tighter">{station.waitLabel}</span>
                    <span className="text-secondary font-semibold">{station.trafficLabel}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:max-w-xs">
                  <span className="text-xs w-full font-bold uppercase tracking-wider text-on-surface-variant mb-1">Report status</span>
                  <button className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary transition-all duration-200 text-sm font-semibold active:scale-[0.98]">No Queue</button>
                  <button className="px-4 py-2 rounded-lg bg-secondary text-on-secondary text-sm font-semibold shadow-md active:scale-[0.98]">15m</button>
                  <button className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary transition-all duration-200 text-sm font-semibold active:scale-[0.98]">30m</button>
                  <button className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary transition-all duration-200 text-sm font-semibold active:scale-[0.98]">1hr+</button>
                </div>
              </div>
              <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden flex">
                <div className="h-full bg-secondary w-1/4 rounded-full" />
                <div className="h-full bg-secondary-container w-1/12 opacity-40 rounded-full" />
              </div>
              <div className="flex justify-between mt-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                <span>Very fast</span>
                <span>Moderate</span>
                <span>Heavy rush</span>
              </div>
            </section>

            {/* Facilities + Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-surface-container-low rounded-lg p-8">
                <h3 className="text-base font-bold font-headline text-primary mb-6 flex items-center gap-2">
                  <LucideIcon className="text-secondary" name="checklist" />
                  Station facilities
                </h3>
                <div className="space-y-5">
                  {station.facilities.map((f) => (
                    <div key={f.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
                        <LucideIcon name={f.icon} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-primary">{f.label}</p>
                        <p className="text-xs text-on-surface-variant">{f.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-surface-container-low rounded-lg overflow-hidden flex flex-col">
                <div className="h-44 relative">
                  <ResponsiveImage
                    alt="Station location map"
                    className="h-full w-full grayscale opacity-60"
                    src={station.mapImage}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-xl">
                      <LucideIcon name="location_on" />
                    </div>
                  </div>
                </div>
                <div className="p-6 mt-auto">
                  <h3 className="text-base font-bold font-headline text-primary mb-1">Navigation</h3>
                  <p className="text-sm text-on-surface-variant mb-5">Near San Thome Basilica landmark.</p>
                  <button className="w-full py-3.5 bg-primary text-on-primary rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-container transition-all duration-200 active:scale-[0.98]">
                    <LucideIcon className="text-[16px]" name="directions" />
                    Get directions
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar — 4 cols */}
          <aside className="md:col-span-4 space-y-5">
            {/* Local candidates */}
            <section className="bg-surface-container-low rounded-lg p-5">
              <h3 className="text-xs font-bold font-headline text-primary uppercase tracking-wider mb-4 pb-2.5 border-b border-outline-variant/20">Local candidates</h3>
              <div className="space-y-4">
                {station.candidates.map((c, i) => (
                  <div key={c.name} className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                      <ResponsiveImage
                        alt={c.imageAlt}
                        className="h-12 w-12 rounded-full"
                        sizes="48px"
                        src={c.image}
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 bg-white p-0.5 rounded-full shadow-sm">
                        <div className={`w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-secondary" : "bg-tertiary-fixed-dim"}`} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary group-hover:text-secondary transition-colors duration-200">{c.name}</h4>
                      <p className="text-xs text-on-surface-variant">{c.party}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2.5 rounded-lg border border-outline-variant/30 text-xs font-bold uppercase tracking-wider hover:bg-white hover:border-secondary/40 transition-all duration-200 active:scale-[0.98]">
                Compare all candidates
              </button>
            </section>

            {/* Nearby stations */}
            <section className="bg-primary text-on-primary rounded-lg p-5 shadow-xl shadow-primary/10">
              <h3 className="text-xs font-bold font-headline uppercase tracking-wider mb-4 opacity-70">Nearby stations</h3>
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 cursor-pointer border-l-4 border-secondary">
                  <div className="flex justify-between items-start mb-0.5">
                    <h4 className="font-semibold text-sm">Rosary Matriculation</h4>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded font-bold">5m</span>
                  </div>
                  <p className="text-xs opacity-60">0.8 km away</p>
                </div>
                <div className="p-3.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 cursor-pointer border-l-4 border-tertiary-fixed-dim">
                  <div className="flex justify-between items-start mb-0.5">
                    <h4 className="font-semibold text-sm">Mylapore Primary</h4>
                    <span className="text-xs bg-tertiary-fixed-dim px-2 py-0.5 rounded font-bold text-primary">25m</span>
                  </div>
                  <p className="text-xs opacity-60">1.2 km away</p>
                </div>
              </div>
            </section>

            {/* Document reminder */}
            <div className="p-5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex flex-col gap-2.5">
              <LucideIcon className="text-3xl" name="how_to_reg" />
              <h3 className="text-base font-bold font-headline leading-tight">Bring your Voter ID and Aadhaar Card</h3>
              <p className="text-xs font-medium opacity-80 leading-relaxed">Original documents are mandatory. Digital copies on DigiLocker are accepted at this station.</p>
            </div>
          </aside>
        </div>
      </PageShell>

      {/* ─── MOBILE: STATION DASHBOARD ─── */}
      <div className="block md:hidden max-w-md mx-auto">
        <div className="px-5 pb-3 pt-6">
          <Breadcrumbs
            backHref="/stations"
            backLabel="Stations"
            items={[{ href: "/", label: "Tamil Nadu" }, { href: "/stations", label: "Stations" }, { label: station.name }]}
            variant="back"
          />
        </div>

        {/* Station header */}
        <div className="bg-primary px-5 pt-5 pb-4 text-white">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h1 className="text-lg font-bold font-headline leading-tight">{station.name}</h1>
              <p className="text-white/60 text-xs font-medium mt-0.5">Mylapore, Booth 142A</p>
              <button onClick={clearStation} className="mt-1.5 text-xs underline cursor-pointer text-white/70 hover:text-white/90 transition-colors duration-200">Change station</button>
            </div>
            <button className="bg-secondary p-2.5 rounded-lg shadow-lg shadow-secondary/20 flex items-center justify-center active:scale-[0.98] transition-transform duration-200">
              <LucideIcon className="text-white text-lg" name="directions" />
            </button>
          </div>

          {/* Status + Wait compact row */}
          <div className="flex gap-2 mb-1">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col items-center">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/60">Status</span>
              </div>
              <span className="text-sm font-bold">Open</span>
            </div>
            <div className="flex-[1.2] bg-secondary/20 border border-secondary/30 rounded-lg p-3 flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary-fixed-dim mb-0.5">Wait</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black font-headline">10</span>
                <span className="text-xs font-bold text-white/80">min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick-report crowd buttons */}
        <section className="px-5 py-4 border-b border-outline-variant/20 bg-surface-container-lowest">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Update live crowd</h3>
            <span className="text-xs font-medium text-secondary">4 reports recently</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Empty", time: "0m" },
              { label: "Fast", time: "15m" },
              { label: "Slow", time: "30m" },
              { label: "Busy", time: "1h+" },
            ].map((item) => (
              <button
                key={item.label}
                className="flex flex-col items-center justify-center py-2 bg-surface-container rounded-lg border border-outline-variant/15 active:bg-secondary active:text-white transition-colors duration-200 group"
              >
                <span className="text-xs font-bold">{item.label}</span>
                <span className="text-xs text-on-surface-variant group-active:text-white/80">{item.time}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Facilities chips */}
        <section className="px-5 py-4">
          <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2.5">Station facilities</h3>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {station.facilities.map((f) => (
              <div key={f.label} className="flex-none flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-full border border-outline-variant/10">
                <LucideIcon className="text-primary text-lg" name={f.icon} />
                <span className="text-xs font-bold text-primary whitespace-nowrap">{f.label.split(" ")[0]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Local ballot – horizontal scroll */}
        <section className="px-5 py-4 bg-surface-container-lowest/50">
          <div className="flex justify-between items-center mb-2.5">
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Local ballot</h3>
            <span className="text-xs font-bold text-secondary">See all</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {station.candidates.map((c) => (
              <div key={c.name} className="min-w-[120px] bg-white p-2.5 rounded-lg shadow-sm border border-outline-variant/10">
                <ResponsiveImage
                  alt={c.imageAlt}
                  className="mb-2 h-20 w-full rounded-lg"
                  sizes="160px"
                  src={c.image}
                />
                <h4 className="font-bold text-xs text-primary leading-tight truncate">{c.name}</h4>
                <span className="text-xs text-on-surface-variant font-medium">{c.party}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Nearby stations */}
        <section className="px-5 py-4 mb-6">
          <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2.5">Nearby options</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-outline-variant/15 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-xs font-bold text-primary">Rosary Matriculation</span>
              </div>
              <span className="text-xs font-black bg-secondary/10 text-secondary px-1.5 py-0.5 rounded">5m</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-outline-variant/15 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim" />
                <span className="text-xs font-bold text-primary">Mylapore Primary</span>
              </div>
              <span className="text-xs font-black bg-tertiary-fixed text-on-tertiary-fixed-variant px-1.5 py-0.5 rounded">25m</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
