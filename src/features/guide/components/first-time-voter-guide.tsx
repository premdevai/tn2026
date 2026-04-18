import Link from "next/link";

import { Breadcrumbs } from "@/components/shared";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { ResponsiveImage } from "@/components/shared/responsive-image";
import type { GuideContent } from "@/lib/schemas";

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

/* ─────────────────────────────────────── */
/*  MOBILE                                */
/* ─────────────────────────────────────── */

function MobileGuide({ content }: FirstTimeVoterGuideProps) {
  const { mobileFaqItems, mobileStationSteps } = content;

  return (
    <div className="md:hidden bg-white text-zinc-950">
      {/* Hero */}
      <section className="px-4 pt-6 pb-10">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Guide" }]} />
        <div className="mt-4 space-y-3">
          <div className="inline-flex items-center gap-2 py-1 px-2.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Official Guide
          </div>
          <h1 className="font-headline text-3xl font-semibold tracking-tight leading-[1.1]">
            Your First Vote
          </h1>
          <p className="text-zinc-500 text-sm max-w-[35ch] leading-relaxed">
            From registration to the polling booth — everything you need for a seamless first experience.
          </p>
          <div className="flex gap-3 pt-2">
            <Link
              className="bg-zinc-950 text-white px-5 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 active:scale-95 transition-all"
              href="/checklist"
            >
              Check your status
              <LucideIcon name="chevron_right" className="w-4 h-4" />
            </Link>
            <button
              className="bg-zinc-100 text-zinc-700 px-5 py-3 rounded-lg text-sm font-semibold transition-colors hover:bg-zinc-200"
              type="button"
            >
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Phase 01 — Before Election Day */}
      <section className="px-4 py-8">
        <PhaseHeader number="01" title="Before Election Day" />
        <div className="space-y-4 mt-6">
          <MobileInfoCard
            icon="app_registration"
            title="Registration Check"
            description="Ensure your name appears on the official electoral roll. Deadlines usually pass 3 weeks before the poll."
          />
          <MobileInfoCard
            icon="badge"
            title="ID Preparation"
            description="Gather your EPIC (Voter ID) or 11 alternative documents like Aadhaar, PAN card, or Passport."
          />
        </div>
      </section>

      {/* Phase 02 — On Election Day */}
      <section className="px-4 py-8">
        <PhaseHeader number="02" title="On Election Day" />
        <div className="mt-6 bg-zinc-950 rounded-lg p-6 text-white space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
              <LucideIcon className="w-5 h-5 text-emerald-400" name="location_on" />
            </div>
            <div>
              <p className="font-semibold text-sm">Find Your Booth</p>
              <p className="text-xs text-zinc-400 mt-0.5">Use the Status tab to locate your exact polling station.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
              <LucideIcon className="w-5 h-5 text-emerald-400" name="schedule" />
            </div>
            <div>
              <p className="font-semibold text-sm">Timing is Key</p>
              <p className="text-xs text-zinc-400 mt-0.5">Polls open at 7:00 AM, close at 6:00 PM. Mid-morning is calmest.</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-4 flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-medium">Station Crowds</span>
            <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">
              Moderate
            </span>
          </div>
        </div>
      </section>

      {/* Phase 03 — Inside the Polling Station */}
      <section className="px-4 py-8">
        <PhaseHeader number="03" title="Inside the Station" />
        <div className="mt-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-medium text-amber-800">
            <LucideIcon className="w-3.5 h-3.5" name="info" />
            No mobile phones allowed inside the booth
          </div>
        </div>
        <div className="space-y-8">
          {mobileStationSteps.map((step, index) => (
            <div className="flex gap-5" key={step.title}>
              <div className="relative flex-shrink-0">
                <ResponsiveImage
                  alt={step.alt ?? step.title}
                  className="w-20 h-20 rounded-lg object-cover"
                  sizes="80px"
                  src={step.image ?? content.images.pollingStation}
                />
                <div className="absolute -left-2 -top-2 w-7 h-7 bg-zinc-950 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-semibold text-base text-zinc-900 mb-1">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-8 pb-16">
        <h2 className="font-headline text-2xl font-semibold tracking-tight text-zinc-950 mb-6">Common Questions</h2>
        <div className="space-y-3">
          {mobileFaqItems.map((item) => (
            <details className="group bg-zinc-50 rounded-lg border border-zinc-200/60" key={item.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between p-4">
                <span className="font-semibold text-sm text-zinc-900 pr-4">{item.question}</span>
                <LucideIcon className="w-5 h-5 text-zinc-400 transition-transform group-open:rotate-180 flex-shrink-0" name="expand_more" />
              </summary>
              <div className="px-4 pb-4 text-sm text-zinc-500 leading-relaxed border-t border-zinc-200/60 pt-3">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-zinc-950 rounded-lg p-6 text-white relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h3 className="font-headline text-xl font-medium leading-tight">Ready to make your mark?</h3>
            <p className="text-zinc-400 text-sm">Verify your status and find your polling station.</p>
            <Link
              className="bg-white text-zinc-950 px-5 py-3 rounded-lg text-sm font-semibold inline-flex items-center gap-2 active:scale-95 transition-all"
              href="/checklist"
            >
              Verify Voter Status
            </Link>
          </div>
          <div className="absolute -right-4 -bottom-4 w-28 h-28 opacity-10 pointer-events-none">
            <div className="w-full h-full border-[14px] border-white rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────── */
/*  DESKTOP                               */
/* ─────────────────────────────────────── */

function DesktopGuide({ content }: FirstTimeVoterGuideProps) {
  const { desktopFaqItems, desktopStationSteps, images, sideNavItems } = content;

  return (
    <div className="hidden md:block">
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        {/* Two column: sidebar + main */}
        <div className="flex gap-12">
          {/* Sidebar — Minimal, fixed */}
          <aside className="no-scrollbar sticky top-24 hidden h-[calc(100vh-6rem)] w-52 flex-shrink-0 overflow-y-auto lg:block">
            <div className="flex flex-col space-y-1 text-sm font-medium">
              <div className="mb-8 space-y-1">
                <p className="font-headline text-base font-semibold text-zinc-950 tracking-tight">
                  Tamil Nadu 2026
                </p>
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest">
                  Voter Guide
                </p>
              </div>
              {sideNavItems.map((item) => (
                <a
                  className={
                    item.active
                      ? "flex items-center gap-3 rounded-lg bg-zinc-950 p-3 font-semibold text-white text-sm transition-all"
                      : "flex items-center gap-3 rounded-lg p-3 text-zinc-500 text-sm transition-all hover:bg-zinc-100 hover:text-zinc-900"
                  }
                  href={item.href}
                  key={item.href}
                >
                  <LucideIcon name={item.icon} className="w-4 h-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Content — fills remaining space */}
          <div className="flex-1 min-w-0 pb-24">
            {/* Page Header */}
            <header className="mb-10 space-y-4">
              <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Guide" }]} />
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-800 text-xs font-semibold tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Official Guide
                </div>
                <h1 className="text-5xl font-semibold text-zinc-950 tracking-tighter leading-[1.05] font-headline">
                  Your First Vote<span className="text-emerald-500">.</span>
                </h1>
                <p className="text-lg text-zinc-500 leading-relaxed max-w-[55ch] mb-4">
                  A calm path from registration checks to polling day, EVM voting, VVPAT verification, and first-time voter questions.
                </p>
              </div>
            </header>

            {/* Hero Banner */}
            <section className="mb-16" id="hero">
              <div className="relative overflow-hidden rounded-lg bg-zinc-950 p-12 lg:p-16 text-white">
                <div className="relative z-10 max-w-xl">
                  <span className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-500/30">
                    First-Timer Special
                  </span>
                  <h2 className="mb-6 font-headline text-4xl font-semibold leading-[1.1] tracking-tight">
                    Start with confidence
                  </h2>
                  <p className="mb-8 text-zinc-400 text-lg leading-relaxed">
                    Check your registration, keep the right ID ready, and walk into the polling station with the next step already clear.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 bg-white text-zinc-950 px-6 py-3.5 rounded-lg font-semibold transition-all hover:bg-zinc-100 active:scale-95"
                    href="#phase1"
                  >
                    Get Started
                    <LucideIcon name="arrow_forward" className="w-4 h-4" />
                  </a>
                </div>
                <div className="absolute right-12 bottom-12 w-48 h-48 border-[20px] border-white/5 rounded-full pointer-events-none" />
              </div>
            </section>

            {/* Phase 01 — Before Election Day */}
            <section className="mb-16" id="phase1">
              <PhaseHeader number="01" title="Before Election Day" />
              <div className="grid md:grid-cols-2 gap-5 mt-8">
                {/* Card 1 — Dark: Registration */}
                <div className="group relative overflow-hidden rounded-lg bg-zinc-950 p-8 text-white transition-all hover:shadow-lg">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <LucideIcon className="w-5 h-5 text-emerald-400" name="how_to_reg" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Step 1</span>
                    </div>
                    <h3 className="font-headline text-xl font-semibold mb-3 tracking-tight">Registration Audit</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-[40ch]">
                      Ensure you are registered on the National Voters&apos; Service Portal. First-time voters must have completed Form 6 at least 3 months prior.
                    </p>
                    <div className="space-y-2.5">
                      <a className="flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors" href="#">
                        <LucideIcon className="w-4 h-4" name="check_circle" />
                        Verify via EPIC Number
                      </a>
                      <a className="flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors" href="#">
                        <LucideIcon className="w-4 h-4" name="check_circle" />
                        Download e-Voter Card
                      </a>
                    </div>
                  </div>
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 border-[12px] border-white/5 rounded-full pointer-events-none" />
                </div>

                {/* Card 2 — Light: ID Preparation */}
                <div className="group rounded-lg bg-zinc-50 border border-zinc-200/60 p-8 transition-all hover:border-zinc-300 hover:shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-zinc-200/60 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                      <LucideIcon className="w-5 h-5" name="account_balance_wallet" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Step 2</span>
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-zinc-950 mb-3 tracking-tight">ID Preparation</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-[40ch]">
                    The Voter ID is preferred, but not mandatory if you carry one of the 12 approved alternative photo identity documents.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Aadhaar Card", "PAN Card", "Driving License", "Passport"].map((doc) => (
                      <span className="rounded-lg bg-white border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700" key={doc}>
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Phase 02 — On Election Day */}
            <section className="mb-16" id="phase2">
              <PhaseHeader number="02" title="On Election Day" />
              <div className="mt-8 rounded-lg bg-zinc-50 border border-zinc-200/60 p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-headline text-2xl font-semibold tracking-tight text-zinc-950 mb-4">Finding Your Booth</h3>
                    <p className="text-zinc-500 leading-relaxed mb-8 max-w-[55ch]">
                      Most polling stations are located within a 2km radius of your residence, typically in local government schools. Use the Know Your Booth tool to get exact GPS coordinates.
                    </p>
                    <div className="space-y-5">
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-white">
                          <LucideIcon name="schedule" className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-zinc-900 text-sm mb-0.5">Peak Hours</h4>
                          <p className="text-sm text-zinc-500">Early mornings (7–9 AM) and late afternoons see the highest queues. Mid-morning is calmer.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-white">
                          <LucideIcon name="family_restroom" className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-zinc-900 text-sm mb-0.5">Accessibility First</h4>
                          <p className="text-sm text-zinc-500">Separate queues for senior citizens and persons with disabilities. Braille EVMs available.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Image — fixed width on large screens */}
                  <div className="hidden lg:block w-72 flex-shrink-0">
                    <ResponsiveImage
                      alt="Polling station layout illustration"
                      className="h-64 w-full rounded-lg"
                      src={images.pollingStation}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Phase 03 — Inside the Polling Station */}
            <section className="mb-16" id="phase3">
              <PhaseHeader number="03" title="Inside the Polling Station" />
              <div className="mt-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-medium text-amber-800">
                  <LucideIcon className="w-3.5 h-3.5" name="info" />
                  No mobile phones allowed inside the booth
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {desktopStationSteps.map((step) => (
                  <div
                    className="group bg-white border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 hover:shadow-sm transition-all"
                    key={step.number ?? step.title}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                        <LucideIcon className="w-5 h-5" name={step.icon ?? "how_to_vote"} />
                      </div>
                      <span className="text-4xl font-black text-zinc-100 leading-none select-none">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-headline font-semibold text-base text-zinc-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16" id="faq">
              <h2 className="font-headline text-2xl font-semibold tracking-tight text-zinc-950 mb-8">Common Questions</h2>
              <div className="space-y-3">
                {desktopFaqItems.map((item) => (
                  <details className="group bg-zinc-50 rounded-lg border border-zinc-200/60" key={item.question}>
                    <summary className="flex cursor-pointer list-none items-center justify-between p-5">
                      <span className="font-semibold text-zinc-900 pr-4">{item.question}</span>
                      <LucideIcon className="w-5 h-5 text-zinc-400 transition-transform group-open:rotate-180 flex-shrink-0" name="expand_more" />
                    </summary>
                    <div className="border-t border-zinc-200/60 px-5 pb-5 pt-4 text-sm text-zinc-500 leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section>
              <div className="relative overflow-hidden rounded-lg bg-zinc-950 p-12 text-white">
                <div className="relative z-10 max-w-lg">
                  <h2 className="font-headline text-3xl font-semibold tracking-tight mb-4">Ready to make your mark?</h2>
                  <p className="text-zinc-400 mb-8">
                    Don&apos;t wait until the last minute. Verify your status now.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      className="bg-white text-zinc-950 px-6 py-3.5 rounded-lg font-semibold transition-all hover:bg-zinc-100 active:scale-95"
                      href="/checklist"
                    >
                      Verify Voter Status
                    </Link>
                    <button
                      className="border border-zinc-700 text-zinc-300 px-6 py-3.5 rounded-lg font-semibold transition-all hover:bg-zinc-800 hover:text-white"
                      type="button"
                    >
                      Download PDF Guide
                    </button>
                  </div>
                </div>
                <div className="absolute right-12 bottom-12 w-40 h-40 border-[16px] border-white/5 rounded-full pointer-events-none" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────── */
/*  SHARED SUB-COMPONENTS                 */
/* ─────────────────────────────────────── */

function PhaseHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 font-headline text-sm font-bold text-zinc-950">
        {number}
      </div>
      <h2 className="font-headline text-2xl font-semibold tracking-tight text-zinc-950">{title}</h2>
    </div>
  );
}

function MobileInfoCard({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-zinc-50 border border-zinc-200/60 rounded-lg p-5 space-y-3">
      <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-600">
        <LucideIcon name={icon} className="w-5 h-5" />
      </div>
      <h3 className="font-semibold text-base text-zinc-900">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
    </div>
  );
}

