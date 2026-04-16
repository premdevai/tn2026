import Link from "next/link";

import { Breadcrumbs, PageHeader } from "@/components/shared";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { ResponsiveImage } from "@/components/shared/responsive-image";
import type { GuideContent } from "@/lib/schemas";

function FilledIcon({ name, className }: { name: string; className?: string }) {
  return (
    <LucideIcon
      className={className}
      name={name}
    />
  );
}

type FirstTimeVoterGuideProps = {
  content: GuideContent;
};

export function FirstTimeVoterGuide({ content }: FirstTimeVoterGuideProps) {
  return (
    <>
      <MobileGuide content={content} />
      <DesktopGuide content={content} />
    </>
  );
}

function MobileGuide({ content }: FirstTimeVoterGuideProps) {
  const { mobileFaqItems, mobileStationSteps } = content;

  return (
    <div className="md:hidden bg-surface text-on-surface">
      <section className="relative overflow-hidden px-6 pb-16 pt-8">
        <div className="mx-auto max-w-4xl">
          <PageHeader
            breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "Guide" }]} />}
            eyebrow="Official Citizen Guide"
            title="Your First Vote: A Step-by-Step Guide"
            description="Democracy begins with a single mark. We simplified the journey from registration to the polling booth so your first experience is seamless."
            size="compact"
            actions={
              <>
                <Link
                  className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary shadow-lg transition-all active:scale-95"
                  href="/checklist"
                >
                  Check your status
                  <LucideIcon name="chevron_right" />
                </Link>
                <button
                  className="rounded-lg bg-surface-container-high px-6 py-3 font-semibold text-primary transition-colors hover:bg-surface-container-highest"
                  type="button"
                >
                  Download PDF
                </button>
              </>
            }
          />
        </div>
        <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6">
          <div className="group relative overflow-hidden rounded-lg bg-surface-container-low p-8">
            <div className="relative z-10">
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                Phase 01
              </span>
              <h2 className="mb-6 font-headline text-3xl text-primary">Before Election Day</h2>
              <div className="grid gap-8">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <FilledIcon name="app_registration" />
                  </div>
                  <h3 className="text-xl font-semibold">Registration Check</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Ensure your name appears on the official electoral roll. Deadlines usually pass 3
                    weeks before the poll.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <FilledIcon name="badge" />
                  </div>
                  <h3 className="text-xl font-semibold">ID Preparation</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Gather your EPIC (Voter ID) or 11 alternative documents like Aadhaar, PAN card,
                    or Passport.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 p-4 opacity-5 transition-opacity group-hover:opacity-10">
              <LucideIcon className="text-[180px]" name="calendar_today" />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-primary p-8 text-on-primary">
            <div>
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-secondary-fixed-dim">
                Phase 02
              </span>
              <h2 className="mb-6 font-headline text-3xl">On Election Day</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <LucideIcon className="text-secondary-fixed" name="location_on" />
                  <div>
                    <p className="font-semibold">Find Your Booth</p>
                    <p className="text-xs text-on-primary-container">
                      Use the Status tab to locate your exact polling station.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <LucideIcon className="text-secondary-fixed" name="schedule" />
                  <div>
                    <p className="font-semibold">Timing is Key</p>
                    <p className="text-xs text-on-primary-container">
                      Polls typically open at 7:00 AM and close at 6:00 PM.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-8 border-t border-white/10 pt-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Station Crowds</span>
                <span className="rounded bg-secondary-fixed px-2 py-1 text-xs font-bold uppercase text-on-secondary-fixed">
                  Moderate
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-surface-container-lowest p-8 shadow-sm">
            <div className="mb-12 flex flex-col items-start justify-between gap-6">
              <div>
                <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                  Phase 03
                </span>
                <h2 className="font-headline text-3xl text-primary">Inside the Polling Station</h2>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-tertiary-fixed/30 bg-tertiary-fixed/20 px-4 py-2">
                <LucideIcon className="text-on-tertiary-fixed-variant" name="info" />
                <span className="text-sm font-medium text-on-tertiary-fixed-variant">
                  No mobile phones allowed inside the booth
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-12">
              {mobileStationSteps.map((step, index) => (
                <div className="flex flex-col items-center text-center" key={step.title}>
                  <div className="relative mb-6">
                    <ResponsiveImage
                      alt={step.alt ?? step.title}
                      className="h-48 w-48 rounded-full shadow-inner grayscale transition-all duration-500 hover:grayscale-0"
                      sizes="192px"
                      src={step.image ?? content.images.pollingStation}
                    />
                    <div className="absolute -left-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-on-primary">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-on-surface-variant">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 bg-surface-container-low px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline text-4xl font-bold text-primary">First-Timer FAQ</h2>
            <p className="text-on-surface-variant">Answering common doubts for our newest voters.</p>
          </div>
          <div className="space-y-4">
            {mobileFaqItems.map((item) => (
              <div className="rounded-lg bg-white p-6 shadow-sm" key={item.question}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{item.question}</span>
                    <LucideIcon
                      className="transition-transform group-open:rotate-180"
                      name="expand_more"
                    />
                  </summary>
                  <p className="mt-4 leading-relaxed text-on-surface-variant">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>

          <div className="relative mt-20 overflow-hidden rounded-lg bg-primary p-12 text-center text-on-primary shadow-2xl">
            <div className="relative z-10">
              <h2 className="mb-4 font-headline text-3xl font-bold">Ready to make your mark?</h2>
              <p className="mx-auto mb-8 max-w-lg text-on-primary-container">
                Check your polling station location and current wait times in real-time.
              </p>
              <Link
                className="inline-flex rounded-full bg-secondary px-10 py-5 text-lg font-bold text-on-secondary transition-all active:scale-95"
                href="/checklist"
              >
                Verify Voter Status
              </Link>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:24px_24px]" />
          </div>
        </div>
      </section>
    </div>
  );
}

function DesktopGuide({ content }: FirstTimeVoterGuideProps) {
  const { desktopFaqItems, desktopStationSteps, images, sideNavItems } = content;

  return (
    <div className="mx-auto hidden max-w-7xl gap-8 px-6 py-8 md:flex md:px-8 md:py-12">
      <aside className="no-scrollbar sticky top-24 hidden h-[calc(100vh-6rem)] w-64 overflow-y-auto lg:block">
        <div className="flex flex-col space-y-2 p-4 font-body text-sm font-medium">
          <div className="mb-6 px-2">
            <div className="mb-1 flex items-center gap-3">
              <ResponsiveImage
                alt="Civic Editorial Logo"
                className="h-10 w-10 rounded-lg"
                sizes="40px"
                src={images.sideLogo}
              />
              <div>
                <p className="font-headline text-base font-bold leading-tight text-primary">
                  Tamil Nadu 2026
                </p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant">
                  Official Voter Guide
                </p>
              </div>
            </div>
          </div>
          {sideNavItems.map((item) => (
            <a
              className={
                item.active
                  ? "flex items-center gap-3 rounded-lg bg-white p-3 font-bold text-secondary shadow-sm transition-transform hover:translate-x-1 active:scale-95"
                  : "flex items-center gap-3 rounded-lg p-3 text-on-surface-variant transition-transform hover:translate-x-1 hover:bg-surface-container-high/50 active:scale-95"
              }
              href={item.href}
              key={item.href}
            >
              <LucideIcon name={item.icon} />
              {item.label}
            </a>
          ))}
        </div>
      </aside>

      <div className="flex-1 pb-24">
        <PageHeader
          breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "Guide" }]} />}
          className="mb-10"
          eyebrow="Official Citizen Guide"
          title="Your First Vote: A Step-by-Step Guide"
          description="A calm path from registration checks to polling day, EVM voting, VVPAT verification, and first-time voter questions."
        />
        <section
          className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700"
          id="hero"
        >
          <div className="relative overflow-hidden rounded-lg bg-primary p-12 text-white shadow-2xl lg:p-20">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary blur-[120px]" />
              <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-tertiary blur-[100px]" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="mb-6 inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-secondary-fixed">
                First-Timer Special
              </span>
              <h2 className="mb-8 font-headline text-4xl font-extrabold leading-[1.1] tracking-tight lg:text-5xl">
                Start with confidence
              </h2>
              <p className="mb-10 font-body text-xl leading-relaxed text-primary-fixed-dim opacity-90">
                Check your registration, keep the right ID ready, and walk into the polling station
                with the next step already clear.
              </p>
              <div className="flex gap-4">
                <a
                  className="flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 font-bold text-white shadow-lg shadow-secondary/20 transition-all hover:scale-105 active:scale-95"
                  href="#phase1"
                >
                  Get Started
                  <LucideIcon name="arrow_forward" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24" id="phase1">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-high font-headline text-xl font-bold text-primary">
              01
            </div>
            <h2 className="font-headline text-3xl font-bold">Before Election Day</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group rounded-lg border border-transparent bg-surface-container-low p-8 transition-all duration-300 hover:border-outline-variant/20 hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white transition-transform group-hover:rotate-6">
                <LucideIcon className="text-3xl" name="how_to_reg" />
              </div>
              <h3 className="mb-4 font-headline text-xl font-bold">Registration Audit</h3>
              <p className="mb-6 leading-relaxed text-on-surface-variant">
                Ensure you are registered on the National Voters&apos; Service Portal. First-time
                voters must have completed Form 6 at least 3 months prior to the election date.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-secondary">
                  <LucideIcon className="text-[18px]" name="check_circle" />
                  Verify via EPIC Number
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-secondary">
                  <LucideIcon className="text-[18px]" name="check_circle" />
                  Download e-Voter Card
                </li>
              </ul>
            </div>
            <div className="group rounded-lg border border-transparent bg-surface-container-low p-8 transition-all duration-300 hover:border-outline-variant/20 hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary text-white transition-transform group-hover:rotate-6">
                <LucideIcon className="text-3xl" name="badge" />
              </div>
              <h3 className="mb-4 font-headline text-xl font-bold">ID Preparation</h3>
              <p className="mb-6 leading-relaxed text-on-surface-variant">
                The Voter ID is preferred, but not mandatory if you carry one of the 12 approved
                alternative photo identity documents like Aadhaar or Passport.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Aadhaar Card", "PAN Card", "Driving License"].map((label) => (
                  <span
                    className="rounded-full bg-surface-container-highest px-3 py-1 text-xs font-semibold text-primary"
                    key={label}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24" id="phase2">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-high font-headline text-xl font-bold text-primary">
              02
            </div>
            <h2 className="font-headline text-3xl font-bold">On Election Day</h2>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-surface-container-highest p-8 lg:p-12">
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="flex-1">
                <h3 className="mb-6 font-headline text-2xl font-bold">Finding Your Booth</h3>
                <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
                  Most polling stations are located within a 2km radius of your residence, typically
                  in local government schools or community centers. Use the Know Your Booth tool to
                  get exact GPS coordinates.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-sm">
                      <LucideIcon name="schedule" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold text-primary">Peak Hours</h4>
                      <p className="text-sm text-on-surface-variant">
                        Early mornings (7 AM - 9 AM) and late afternoons see the highest queues.
                        Mid-morning is typically calmer.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-sm">
                      <LucideIcon name="family_restroom" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold text-primary">Accessibility First</h4>
                      <p className="text-sm text-on-surface-variant">
                        Separate queues are maintained for senior citizens and persons with
                        disabilities. Braille EVMs are available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-80 w-full overflow-hidden rounded-lg shadow-2xl lg:w-[400px]">
                <ResponsiveImage
                  alt="Polling station layout illustration"
                  className="h-full w-full"
                  src={images.pollingStation}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24" id="phase3">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-high font-headline text-xl font-bold text-primary">
              03
            </div>
            <h2 className="font-headline text-3xl font-bold">Inside the Polling Station</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {desktopStationSteps.map((step) => (
              <div
                className="group relative rounded-lg border border-surface-container-high bg-white p-8 transition-all hover:border-secondary"
                key={step.number ?? step.title}
              >
                <span className="absolute right-8 top-8 text-6xl font-black text-surface-container opacity-20">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <LucideIcon className="mb-4 text-4xl text-secondary" name={step.icon ?? "how_to_vote"} />
                  <h3 className="mb-2 font-headline text-lg font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24" id="faq">
          <h2 className="mb-10 text-center font-headline text-3xl font-bold">First-Timer FAQ</h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {desktopFaqItems.map((item) => (
              <details className="group rounded-lg bg-surface-container-low" key={item.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                  <span className="font-bold text-primary">{item.question}</span>
                  <LucideIcon
                    className="transition-transform group-open:rotate-180"
                    name="expand_more"
                  />
                </summary>
                <div className="border-t border-white/50 px-6 pb-6 pt-4 text-sm text-on-surface-variant">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="relative overflow-hidden rounded-lg bg-primary-container p-12 text-center text-white">
            <div className="relative z-10">
              <h2 className="mb-4 font-headline text-4xl font-bold">Ready to make your mark?</h2>
              <p className="mb-10 text-lg text-primary-fixed-dim opacity-80">
                Don&apos;t wait until the last minute. Verify your status now.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  className="rounded-lg bg-secondary px-10 py-5 text-lg font-bold text-white shadow-2xl transition-colors hover:bg-on-secondary-fixed-variant"
                  href="/checklist"
                >
                  Verify Voter Status
                </Link>
                <button
                  className="rounded-lg border border-white/20 bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  type="button"
                >
                  Download PDF Guide
                </button>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-secondary opacity-30" />
          </div>
        </section>
      </div>
    </div>
  );
}
