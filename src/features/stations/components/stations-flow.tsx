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
        {/* Desktop: Find Your Polling Station */}
        <PageShell className="hidden md:flex md:py-12 lg:py-12">
          <PageHeader
            breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "Stations" }]} />}
            eyebrow="Polling station"
            title="Find your polling station"
            description="Access real-time voting analytics and personalized directions from one consistent station surface."
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase">
                Participation is Power
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary tracking-tight leading-tight">
                Your Vote Begins with Your <span className="text-secondary">Station</span>.
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
                Access real-time voting analytics and personalized directions. Locate your designated polling station to participate in the democratic process.
              </p>
              <div className="space-y-4 max-w-md">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
                    <LucideIcon name="search" />
                  </div>
                  <input className="w-full pl-12 pr-4 py-5 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline transition-all" placeholder="Enter your postal code or area..." type="text" />
                </div>
                <button onClick={selectStation} className="w-full flex items-center justify-center gap-3 bg-primary text-on-primary py-5 px-8 rounded-lg font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all">
                  <LucideIcon name="my_location" />
                  Use My Current Location
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden relative shadow-2xl shadow-primary/5 border-0">
                <ResponsiveImage
                  alt="Civic building"
                  className="h-full w-full mix-blend-multiply opacity-80"
                  src={landing.heroImage}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10"></div>
                
                <div className="absolute top-12 left-12 p-6 bg-white/95 backdrop-blur-xl rounded-lg shadow-xl flex items-center gap-4 max-w-xs transform -rotate-2 border border-white/20">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                    <LucideIcon className="text-on-secondary-fixed" name="check_circle" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-outline-variant uppercase">Verified Data</div>
                    <div className="text-sm font-semibold font-headline text-primary">Election Commission Portal</div>
                  </div>
                </div>
                
                <div className="absolute bottom-12 right-12 p-6 bg-white/95 backdrop-blur-xl rounded-lg shadow-xl flex flex-col gap-2 max-w-xs transform rotate-1 border border-white/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="text-xs font-bold text-secondary uppercase">Live Status</span>
                  </div>
                  <div className="text-2xl font-bold font-headline text-primary">12-Min Wait</div>
                  <div className="text-xs text-on-surface-variant leading-tight">Average wait time at downtown stations</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-0">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline text-primary">Why Save Your Station?</h2>
                <p className="text-on-surface-variant max-w-xl">Connecting to your specific polling station provides exclusive editorial insights and logistical updates.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-surface-container-low p-8 rounded-lg flex flex-col gap-6 group hover:bg-surface-container-highest transition-colors duration-300">
                <div className="w-14 h-14 rounded-lg bg-white shadow-sm flex items-center justify-center">
                  <LucideIcon className="text-primary text-3xl" name="groups" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-headline text-primary">Get real-time crowd alerts</h3>
                  <p className="text-on-surface-variant leading-relaxed">Receive push notifications when voter turnout is low so you can avoid long queues and vote comfortably.</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-lg flex flex-col gap-6 group hover:bg-surface-container-highest transition-colors duration-300">
                <div className="w-14 h-14 rounded-lg bg-white shadow-sm flex items-center justify-center">
                  <LucideIcon className="text-primary text-3xl" name="schedule" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-headline text-primary">View live wait times</h3>
                  <p className="text-on-surface-variant leading-relaxed">Our proprietary algorithm calculates estimated wait times based on historical data and live verified check-ins.</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-lg flex flex-col gap-6 group hover:bg-surface-container-highest transition-colors duration-300">
                <div className="w-14 h-14 rounded-lg bg-white shadow-sm flex items-center justify-center">
                  <LucideIcon className="text-primary text-3xl" name="directions" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-headline text-primary">Easy directions</h3>
                  <p className="text-on-surface-variant leading-relaxed">Detailed accessibility mapping, parking availability, and public transit routes specifically for your station.</p>
                </div>
              </div>
            </div>
          </div>
        </PageShell>

        {/* Mobile: Locate Polling Station */}
        <div className="block md:hidden px-0 overflow-hidden">
          <div className="px-6 pt-8">
            <PageHeader
              breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "Stations" }]} />}
              eyebrow="Polling station"
              title="Find your polling station"
              description="Locate your assigned booth and save live updates for voting day."
              size="compact"
            />
          </div>
          <div className="relative h-[371px] w-full overflow-hidden">
            <ResponsiveImage
              alt="Civic architecture in Tamil Nadu"
              className="h-full w-full"
              src={landing.mobileHeroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">Electoral Guide 2024</span>
              <h2 className="font-headline text-3xl font-bold text-primary leading-[1.1] tracking-tight max-w-[80%]">
                Locate your assigned station.
              </h2>
            </div>
          </div>
          
          <div className="px-6 -mt-4 relative z-10">
            <div className="bg-surface-container-lowest rounded-lg p-6 shadow-[0_20px_50px_rgba(4,22,39,0.08)]">
              <div className="space-y-4">
                <div className="relative flex items-center bg-surface-container-low rounded-lg px-4 py-4 group transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/5">
                  <LucideIcon className="text-outline mr-3" name="search" />
                  <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline font-medium" placeholder="Enter Voter ID or Street Name" type="text" />
                </div>
                <button onClick={selectStation} className="w-full bg-primary text-on-primary font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/10">
                  <LucideIcon className="text-[20px]" name="my_location" />
                  <span>Use Current Location</span>
                </button>
              </div>
            </div>
          </div>
          
          <section className="mt-10 px-6 space-y-10">
            <div className="flex items-end justify-between">
              <h3 className="font-headline text-sm font-bold text-primary-container tracking-widest uppercase">The Statesman&apos;s Advantage</h3>
              <div className="h-[2px] flex-grow ml-4 mb-1.5 bg-surface-container"></div>
            </div>
            
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 bg-surface-container-low rounded-lg p-6 flex flex-col justify-between min-h-[160px]">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <LucideIcon className="text-secondary" name="groups" />
                  </div>
                  <span className="text-xs font-bold text-outline uppercase tracking-tighter">Live Updates</span>
                </div>
                <div>
                  <h4 className="font-headline text-lg font-semibold text-primary mb-1">Crowd Insights</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Real-time occupancy data to help you avoid peak voting hours and queues.</p>
                </div>
              </div>
              
              <div className="col-span-6 bg-surface-container-low rounded-lg p-5 aspect-square flex flex-col justify-between">
                <div className="p-3 bg-tertiary-fixed-dim/20 rounded-lg w-fit">
                  <LucideIcon className="text-on-tertiary-fixed-variant" name="schedule" />
                </div>
                <div>
                  <h4 className="font-headline text-base font-semibold text-primary">Wait Times</h4>
                  <p className="text-on-surface-variant text-xs mt-1">Precise analytics for your ward.</p>
                </div>
              </div>
              
              <div className="col-span-6 bg-secondary-container/30 rounded-lg p-5 aspect-square flex flex-col justify-between">
                <div className="p-3 bg-secondary-fixed/50 rounded-lg w-fit">
                  <LucideIcon className="text-secondary" name="verified" />
                </div>
                <div>
                  <h4 className="font-headline text-base font-semibold text-secondary">Verified Info</h4>
                  <p className="text-on-secondary-container text-xs mt-1">Data from official EC sources.</p>
                </div>
              </div>
            </div>
          </section>
          
          <div className="mt-12 mb-8 px-6">
            <div className="bg-primary-container p-8 rounded-lg text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <p className="text-on-primary-container text-sm font-medium mb-4">Need help finding your voter slip?</p>
              <button className="inline-flex items-center text-secondary-fixed-dim font-bold text-sm gap-2">
                Access Digital Documents
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
      {/* Desktop: Station Dashboard */}
      <PageShell className="hidden md:flex pb-24">
        <PageHeader
          breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { href: "/stations", label: "Stations" }, { label: station.name }]} />}
          eyebrow="Verified Polling Station"
          title={station.name}
          description={station.address}
          actions={
            <>
              <div className="bg-secondary text-on-secondary px-6 py-4 rounded-lg flex items-center gap-4 shadow-xl shadow-secondary/10">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold tracking-widest opacity-80">Live Status</span>
                  <span className="text-lg font-bold">{station.statusLabel}</span>
                </div>
              </div>
              <Button onClick={clearStation} type="button" variant="link">
                Change Station
              </Button>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            <section className="bg-surface-container-lowest rounded-lg p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
                <div>
                  <h2 className="text-sm font-bold font-headline text-on-surface-variant uppercase tracking-widest mb-2">Current Estimated Wait</h2>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold font-headline text-primary tracking-tighter">{station.waitLabel}</span>
                    <span className="text-secondary font-semibold">{station.trafficLabel}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:max-w-xs">
                  <span className="text-xs w-full font-bold uppercase tracking-widest text-on-surface-variant mb-1">Report Status</span>
                  <button className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary transition-all text-sm font-semibold">No Queue</button>
                  <button className="px-4 py-2 rounded-lg bg-secondary text-on-secondary text-sm font-semibold shadow-md">15m</button>
                  <button className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary transition-all text-sm font-semibold">30m</button>
                  <button className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary transition-all text-sm font-semibold">1hr+</button>
                </div>
              </div>
              <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden flex">
                <div className="h-full bg-secondary w-1/4"></div>
                <div className="h-full bg-secondary-container w-1/12 opacity-50"></div>
              </div>
              <div className="flex justify-between mt-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                <span>Very Fast</span>
                <span>Moderate</span>
                <span>Heavy Rush</span>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-surface-container-low rounded-lg p-8">
                <h3 className="text-lg font-bold font-headline text-primary mb-6 flex items-center gap-2">
                  <LucideIcon className="text-secondary" name="checklist" />
                  Station Facilities
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary">
                      <LucideIcon name="umbrella" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Shaded Waiting Area</p>
                      <p className="text-xs text-on-surface-variant">Available at entrance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary">
                      <LucideIcon name="water_drop" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Drinking Water</p>
                      <p className="text-xs text-on-surface-variant">Coolers installed in Hall A</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary">
                      <LucideIcon name="accessible" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Senior Friendly</p>
                      <p className="text-xs text-on-surface-variant">Wheelchair ramps & priority line</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-surface-container-low rounded-lg overflow-hidden flex flex-col">
                <div className="h-48 relative">
                  <ResponsiveImage
                    alt="Map"
                    className="h-full w-full grayscale opacity-60"
                    src={station.mapImage}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl">
                      <LucideIcon name="location_on" />
                    </div>
                  </div>
                </div>
                <div className="p-8 mt-auto">
                  <h3 className="text-lg font-bold font-headline text-primary mb-2">Navigation</h3>
                  <p className="text-sm text-on-surface-variant mb-6">Located near the San Thome Basilica landmark.</p>
                  <button className="w-full py-4 bg-primary text-on-primary rounded-lg font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all active:scale-[0.98]">
                    <LucideIcon className="text-[18px]" name="directions" />
                    Get Directions
                  </button>
                </div>
              </section>
            </div>
          </div>

          <aside className="md:col-span-4 space-y-8">
            <section className="bg-surface-container-low rounded-lg p-6">
              <h3 className="text-sm font-bold font-headline text-primary uppercase tracking-widest mb-6 pb-4 border-b border-outline-variant/20">Local Candidates</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative">
                    <ResponsiveImage
                      alt={station.candidates[0]?.imageAlt ?? "Candidate profile"}
                      className="h-14 w-14 rounded-full"
                      sizes="56px"
                      src={station.candidates[0]?.image ?? station.heroImage}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary group-hover:text-secondary transition-colors">Dr. Anand Krishnan</h4>
                    <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-tighter">Independent Representative</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative">
                    <ResponsiveImage
                      alt={station.candidates[1]?.imageAlt ?? "Candidate profile"}
                      className="h-14 w-14 rounded-full"
                      sizes="56px"
                      src={station.candidates[1]?.image ?? station.heroImage}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm">
                      <div className="w-3 h-3 bg-tertiary-fixed-dim rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary group-hover:text-secondary transition-colors">Meera Srinivasan</h4>
                    <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-tighter">Civic Union Party</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-3 rounded-lg border border-outline-variant/30 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">Compare All Candidates</button>
            </section>
            
            <section className="bg-primary text-on-primary rounded-lg p-6 shadow-2xl">
              <h3 className="text-sm font-bold font-headline uppercase tracking-widest mb-6 opacity-70">Nearby Stations</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border-l-4 border-secondary">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm">Rosary Matriculation</h4>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded text-white">5m</span>
                  </div>
                  <p className="text-xs opacity-60">0.8 km away • Open</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border-l-4 border-tertiary-fixed-dim">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm">Mylapore Primary</h4>
                    <span className="text-xs bg-tertiary-fixed-dim px-2 py-0.5 rounded text-primary">25m</span>
                  </div>
                  <p className="text-xs opacity-60">1.2 km away • Busy</p>
                </div>
              </div>
            </section>
            
            <div className="p-8 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex flex-col gap-4">
              <LucideIcon className="text-4xl" name="how_to_reg" />
              <h3 className="text-lg font-bold font-headline leading-tight">Bring your Voter ID & Aadhaar Card</h3>
              <p className="text-xs font-medium opacity-80 leading-relaxed">Original documents are mandatory. Digital copies on DigiLocker are accepted at this station.</p>
            </div>
          </aside>
        </div>
      </PageShell>

      {/* Mobile: Station Dashboard */}
      <div className="block md:hidden max-w-md mx-auto">
        <div className="px-6 pb-4 pt-8">
          <Breadcrumbs
            backHref="/stations"
            backLabel="Stations"
            items={[{ href: "/", label: "Tamil Nadu" }, { href: "/stations", label: "Stations" }, { label: station.name }]}
            variant="back"
          />
        </div>
        <div className="bg-primary px-4 pt-6 pb-4 text-white shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-xl font-bold font-headline leading-tight">{station.name}</h1>
              <p className="text-white/60 text-xs font-medium uppercase tracking-wide mt-0.5">Mylapore • Booth 142A</p>
              <button onClick={clearStation} className="mt-2 text-xs underline cursor-pointer text-white/80">Change Station</button>
            </div>
            <button className="bg-secondary p-2.5 rounded-lg shadow-lg shadow-secondary/20 flex items-center justify-center">
              <LucideIcon className="text-white text-lg" name="directions" />
            </button>
          </div>
          <div className="flex gap-2 mb-2">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col items-center">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Status</span>
              </div>
              <span className="text-sm font-bold">Open & Running</span>
            </div>
            <div className="flex-[1.2] bg-secondary/20 border border-secondary/30 rounded-lg p-3 flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary-fixed-dim mb-1">Estimated Wait</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black font-headline">10</span>
                <span className="text-xs font-bold text-white/80">MIN</span>
              </div>
            </div>
          </div>
        </div>

        <section className="px-4 py-4 border-b border-outline-variant/30 bg-surface-container-lowest">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-extrabold text-on-surface-variant uppercase tracking-widest">Update Live Crowd</h3>
            <span className="text-xs font-medium text-secondary">4 reports recently</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button className="flex flex-col items-center justify-center py-2 bg-surface-container rounded-lg border border-outline-variant/20 active:bg-secondary active:text-white transition-colors group">
              <span className="text-xs font-bold">Empty</span>
              <span className="text-xs text-on-surface-variant group-active:text-white/80">0m</span>
            </button>
            <button className="flex flex-col items-center justify-center py-2 bg-surface-container rounded-lg border border-outline-variant/20 active:bg-secondary active:text-white transition-colors group">
              <span className="text-xs font-bold">Fast</span>
              <span className="text-xs text-on-surface-variant group-active:text-white/80">15m</span>
            </button>
            <button className="flex flex-col items-center justify-center py-2 bg-surface-container rounded-lg border border-outline-variant/20 active:bg-secondary active:text-white transition-colors group">
              <span className="text-xs font-bold">Slow</span>
              <span className="text-xs text-on-surface-variant group-active:text-white/80">30m</span>
            </button>
            <button className="flex flex-col items-center justify-center py-2 bg-surface-container rounded-lg border border-outline-variant/20 active:bg-secondary active:text-white transition-colors group">
              <span className="text-xs font-bold">Busy</span>
              <span className="text-xs text-on-surface-variant group-active:text-white/80">1h+</span>
            </button>
          </div>
        </section>

        <section className="px-4 py-4">
          <h3 className="text-xs font-extrabold text-on-surface-variant uppercase tracking-widest mb-3">Station Facilities</h3>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            <div className="flex-none flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-full border border-outline-variant/10">
              <LucideIcon className="text-primary text-lg" name="umbrella" />
              <span className="text-xs font-bold text-primary whitespace-nowrap">Shade</span>
            </div>
            <div className="flex-none flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-full border border-outline-variant/10">
              <LucideIcon className="text-primary text-lg" name="water_drop" />
              <span className="text-xs font-bold text-primary whitespace-nowrap">Water</span>
            </div>
            <div className="flex-none flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-full border border-outline-variant/10">
              <LucideIcon className="text-primary text-lg" name="accessible" />
              <span className="text-xs font-bold text-primary whitespace-nowrap">Senior Friendly</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-4 bg-surface-container-lowest/50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-extrabold text-on-surface-variant uppercase tracking-widest">Local Ballot</h3>
            <span className="text-xs font-bold text-secondary uppercase tracking-tighter">See All</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <div className="min-w-[120px] bg-white p-2.5 rounded-lg shadow-sm border border-outline-variant/10">
              <ResponsiveImage
                alt={station.candidates[0]?.imageAlt ?? "Candidate profile"}
                className="mb-2 h-20 w-full rounded-lg"
                sizes="160px"
                src={station.candidates[0]?.image ?? station.heroImage}
              />
              <h4 className="font-bold text-xs text-primary leading-tight truncate">Dr. A. Krishnan</h4>
              <span className="text-xs text-on-surface-variant uppercase font-semibold">IND</span>
            </div>
            <div className="min-w-[120px] bg-white p-2.5 rounded-lg shadow-sm border border-outline-variant/10">
              <ResponsiveImage
                alt={station.candidates[1]?.imageAlt ?? "Candidate profile"}
                className="mb-2 h-20 w-full rounded-lg"
                sizes="160px"
                src={station.candidates[1]?.image ?? station.heroImage}
              />
              <h4 className="font-bold text-xs text-primary leading-tight truncate">Meera Srinivasan</h4>
              <span className="text-xs text-on-surface-variant uppercase font-semibold">Civic Front</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-4 mb-8">
          <h3 className="text-xs font-extrabold text-on-surface-variant uppercase tracking-widest mb-3">Nearby Options</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-outline-variant/20 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                <span className="text-xs font-bold text-primary">Rosary Matriculation</span>
              </div>
              <span className="text-xs font-black bg-secondary/10 text-secondary px-1.5 py-0.5 rounded">5m WAIT</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-outline-variant/20 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></div>
                <span className="text-xs font-bold text-primary">Mylapore Primary</span>
              </div>
              <span className="text-xs font-black bg-tertiary-fixed text-on-tertiary-fixed-variant px-1.5 py-0.5 rounded">25m WAIT</span>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}
