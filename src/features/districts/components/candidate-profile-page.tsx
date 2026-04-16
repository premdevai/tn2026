import Image from "next/image";
import { Breadcrumbs, LucideIcon, PageHeader } from "@/components/shared";
import { Button } from "@/components/shared/ui/button";
import type { CandidateProfile, Constituency, District } from "@/lib/schemas";
import { cn } from "@/lib/utils/cn";

type CandidateProfilePageProps = {
  district: District;
  constituency: Constituency;
  candidate: CandidateProfile;
};

export function CandidateProfilePage({ district, constituency, candidate }: CandidateProfilePageProps) {
  return (
    <div className="bg-background font-body text-on-background min-h-screen">
      <MobileCandidateProfile district={district} constituency={constituency} candidate={candidate} />
      <DesktopCandidateProfile district={district} constituency={constituency} candidate={candidate} />
    </div>
  );
}

function MobileCandidateProfile({ district, constituency, candidate }: CandidateProfilePageProps) {
  return (
    <div className="md:hidden pb-32">
      <main className="mx-auto max-w-7xl space-y-6 px-6 py-8 md:px-8 md:py-12">
        <PageHeader
          breadcrumbs={
            <Breadcrumbs
              backHref={`/districts/${district.slug}/constituencies/${constituency.slug}`}
              backLabel={`Back to ${constituency.name}`}
              items={[
                { href: `/districts/${district.slug}/constituencies/${constituency.slug}`, label: constituency.name },
                { label: candidate.name }
              ]}
              variant="back"
            />
          }
          title={candidate.name}
          description={`${constituency.name} Constituency`}
          size="compact"
        />

        {/* Hero Section: Candidate Identity */}
        <section className="relative bg-surface-container-lowest rounded-lg p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-lg bg-surface-container-high overflow-hidden relative">
                <Image 
                  alt={candidate.imageAlt} 
                  className="w-full h-full object-cover" 
                  fill 
                  src={candidate.mobileImage} 
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
                <LucideIcon name="verified" className="!text-[12px]" />
                VERIFIED
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={cn(
                  "text-xs font-bold px-2 py-0.5 rounded tracking-wider uppercase",
                  candidate.accent === "tertiary" ? "bg-tertiary text-on-tertiary" : "bg-primary text-on-primary"
                )}>
                  {candidate.party}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary leading-tight mt-1">{candidate.name}</h3>
              <p className="text-secondary font-semibold text-sm flex items-center gap-1 mt-1">
                <LucideIcon name="location_on" className="!text-sm" />
                {constituency.name} Constituency
              </p>
            </div>
          </div>
          
          {/* Affiliation Chips */}
          <div className="mt-5 pt-4 flex flex-wrap gap-2 border-t border-surface-container-high">
            <div className="bg-surface-container-low px-3 py-1.5 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <span className="text-xs font-semibold text-on-surface-variant">Progressive Alliance</span>
            </div>
            <div className="bg-surface-container-low px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-on-surface-variant">
              + 4 Alliance Partners
            </div>
          </div>
        </section>

        {/* At a Glance: High Density Grid */}
        <section>
          <h3 className="font-headline text-lg font-bold text-primary mb-3 px-1">At a Glance</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-container-low p-4 rounded-lg">
              <LucideIcon name="school" className="text-secondary mb-2" />
              <p className="text-xs font-bold text-outline uppercase tracking-wider">Education</p>
              <p className="font-semibold text-on-surface text-sm">{candidate.mobileEducation}</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-lg">
              <LucideIcon name="work" className="text-secondary mb-2" />
              <p className="text-xs font-bold text-outline uppercase tracking-wider">Experience</p>
              <p className="font-semibold text-on-surface text-sm">12 Years</p>
            </div>
          </div>
        </section>

        {/* Mandates: Glassmorphic Bento */}
        <section>
          <h3 className="font-headline text-lg font-bold text-primary mb-3 px-1">Primary Mandates</h3>
          <div className="space-y-3">
            <div className="relative overflow-hidden bg-primary p-5 rounded-lg text-on-primary">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <LucideIcon name="water_drop" className="!text-9xl" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-secondary px-2 py-0.5 rounded text-xs font-bold uppercase">Priority 01</span>
                </div>
                <h4 className="font-headline text-xl font-bold mb-1">Water Security</h4>
                <p className="text-on-primary-container text-sm leading-relaxed">Modernizing the ancient Temple Tank network to recharge ground water levels in {constituency.name}.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center mb-3">
                  <LucideIcon name="directions_bus" className="text-on-secondary-container" />
                </div>
                <h4 className="font-bold text-sm text-primary mb-1">Traffic Relief</h4>
                <p className="text-xs text-on-surface-variant">Smart signal management for key junctions.</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center mb-3">
                  <LucideIcon name="eco" className="text-on-tertiary-fixed" />
                </div>
                <h4 className="font-bold text-sm text-primary mb-1">Green Corridors</h4>
                <p className="text-xs text-on-surface-variant">Restoring native flora along local canals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial & Legal Transparency */}
        <section className="bg-surface-container-high/50 p-5 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-lg font-bold text-primary">Transparency</h3>
            <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2 py-1 rounded">2024 DISCLOSURE</span>
          </div>
          
          <div className="bg-surface-container-lowest rounded-lg p-4 shadow-sm space-y-3">
            <div className="flex justify-between items-center border-b border-surface-container-low pb-2">
              <div className="flex items-center gap-2">
                <LucideIcon name="account_balance_wallet" className="text-secondary !text-lg" />
                <span className="text-xs font-semibold text-on-surface-variant">Total Assets</span>
              </div>
              <span className="font-bold text-primary">{candidate.mobileAssets.replace('Assets: ', '')}</span>
            </div>
            <div className="flex justify-between items-center border-b border-surface-container-low pb-2">
              <div className="flex items-center gap-2">
                <LucideIcon name="gavel" className="text-error !text-lg" />
                <span className="text-xs font-semibold text-on-surface-variant">Criminal Cases</span>
              </div>
              <span className="font-bold text-on-error-container bg-error-container px-2 py-0.5 rounded-full text-xs">Zero Cases</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <LucideIcon name="description" className="text-secondary !text-lg" />
                <span className="text-xs font-semibold text-on-surface-variant">Form 26 Affidavit</span>
              </div>
              <Button className="text-xs font-bold" type="button" variant="link">
                VIEW PDF
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

function DesktopCandidateProfile({ district, constituency, candidate }: CandidateProfilePageProps) {
  return (
    <div className="hidden md:block min-h-screen">
      <main className="mx-auto w-full max-w-7xl px-6 py-8 md:px-8 md:py-12">
        <PageHeader
          breadcrumbs={
            <Breadcrumbs
              items={[
                { href: "/", label: "Tamil Nadu" },
                { href: `/districts/${district.slug}`, label: district.name },
                { href: `/districts/${district.slug}/constituencies/${constituency.slug}`, label: constituency.name },
                { label: "Candidate Profile" }
              ]}
            />
          }
          className="mb-8"
          title={candidate.name}
          description={`${candidate.party} candidate for ${constituency.name} constituency.`}
          size="compact"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Portrait & Identity */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-[4/5] relative">
                <Image 
                  alt={candidate.imageAlt} 
                  className="w-full h-full object-cover" 
                  fill 
                  src={candidate.desktopImage} 
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/90 to-transparent">
                  <h2 className="text-3xl font-bold text-white font-headline">{candidate.name}</h2>
                  <p className="text-primary-fixed opacity-90 text-lg mt-1">{candidate.party}</p>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Constituency</p>
                    <p className="text-primary font-bold">{constituency.name}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Age</p>
                    <p className="text-primary font-bold">52 Years</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Education</p>
                    <p className="text-primary font-bold">{candidate.desktopEducation}</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-outline-variant/30">
                  <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-4">Affiliation</p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30">
                      <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center">
                        <LucideIcon name={candidate.symbolIcon} className="text-[16px]" />
                      </div>
                      <span className="text-sm font-bold text-primary">{candidate.party}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary-container/30 p-6 rounded-lg flex items-start gap-4">
              <div className="p-2 bg-secondary rounded-lg text-white">
                <LucideIcon name="verified" />
              </div>
              <div>
                <h4 className="font-bold text-on-secondary-container font-headline">Verified Data</h4>
                <p className="text-sm text-on-secondary-container/80 leading-relaxed mt-1">This profile uses official data from Election Commission filings (Form 26).</p>
              </div>
            </div>
          </div>

          {/* Right Column: Deep-Dive Details */}
          <div className="lg:col-span-7 space-y-6">
            
            <section className="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <LucideIcon name="policy" className="text-secondary" />
                <h2 className="text-xl font-bold font-headline">Key Stance & Mandates</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <LucideIcon name="directions_bus" className="text-secondary" />
                    <h3 className="font-bold text-primary">Urban Mobility</h3>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Proposes &quot;Last Mile First&quot; initiative focused on electric shuttle integration for the corridors.</p>
                </div>
                <div className="p-5 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <LucideIcon name="temple_hindu" className="text-tertiary-container" />
                    <h3 className="font-bold text-primary">Heritage Preservation</h3>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Advocates for a dedicated heritage zone status for Mada Streets with underground utility cabling.</p>
                </div>
                <div className="p-5 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <LucideIcon name="water_drop" className="text-secondary" />
                    <h3 className="font-bold text-primary">Water Resilience</h3>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Commitment to restore three historic temple tanks to improve groundwater table recharge.</p>
                </div>
                <div className="p-5 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <LucideIcon name="school" className="text-secondary" />
                    <h3 className="font-bold text-primary">Vocational Hubs</h3>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Funding for digital literacy centers in three community zones across the constituency.</p>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <LucideIcon name="account_balance" className="text-secondary" />
                  <h2 className="text-xl font-bold font-headline">Financial Disclosure</h2>
                </div>
              </div>
              <div className="space-y-8">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div><span className="text-sm font-semibold inline-block text-secondary">Total Assets</span></div>
                    <div className="text-right"><span className="text-sm font-bold inline-block text-secondary">{candidate.desktopAssets}</span></div>
                  </div>
                  <div className="overflow-hidden h-4 text-xs flex rounded-full bg-secondary-container/20">
                    <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <LucideIcon name="gavel" className="text-primary" />
                  <h2 className="text-xl font-bold font-headline">Legal Transparency</h2>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="text-xs font-bold text-secondary">NO CONVICTIONS</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-tertiary-fixed/20 rounded-lg flex items-center gap-3">
                  <LucideIcon name="info" className="text-tertiary" />
                  <p className="text-xs text-on-tertiary-fixed-variant">This candidate has signed the <strong>Ethical Campaigning Charter</strong> for the 2024 General Elections.</p>
                </div>
              </div>
            </section>
            
          </div>
        </div>
      </main>
    </div>
  );
}
