"use client";

import { useMemo, useState } from "react";

import { Breadcrumbs, PageHeader, PageShell } from "@/components/shared";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { ResponsiveImage } from "@/components/shared/responsive-image";
import { Button } from "@/components/shared/ui/button";
import type { ComparisonModel, PartyProfile, PolicySector } from "@/lib/schemas";
import { cn } from "@/lib/utils/cn";

type Party = PartyProfile;
type Sector = PolicySector;
type PolicyCopy = ComparisonModel["policyCopy"];

type PartyComparisonFlowProps = {
  model: ComparisonModel;
};

export function PartyComparisonFlow({ model }: PartyComparisonFlowProps) {
  const { parties, sectors, policyCopy, parameterLabels } = model;
  const [selectedIds, setSelectedIds] = useState<string[]>(["dmk", "bjp"]);
  const [view, setView] = useState<"selection" | "comparison">("selection");
  const [activeSectorId, setActiveSectorId] = useState(sectors[0].id);
  const selectedParties = useMemo(
    () => parties.filter((party) => selectedIds.includes(party.id)),
    [parties, selectedIds]
  );
  const activeSector = sectors.find((sector) => sector.id === activeSectorId) ?? sectors[0];

  function toggleParty(id: string) {
    setSelectedIds((current) => {
      if (current.includes(id)) {
        return current.filter((partyId) => partyId !== id);
      }

      if (current.length >= 3) {
        return [current[1], current[2], id];
      }

      return [...current, id];
    });
  }

  function openComparison() {
    if (selectedIds.length >= 2) {
      setView("comparison");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="bg-surface text-on-surface">
      {view === "selection" ? (
        <SelectionView
          onCompare={openComparison}
          onToggleParty={toggleParty}
          parameterLabels={parameterLabels}
          parties={parties}
          selectedIds={selectedIds}
          selectedParties={selectedParties}
        />
      ) : (
        <ComparisonView
          activeSector={activeSector}
          activeSectorId={activeSectorId}
          onBack={() => setView("selection")}
          onSectorChange={setActiveSectorId}
          policyCopy={policyCopy}
          sectors={sectors}
          selectedParties={selectedParties}
        />
      )}
    </div>
  );
}

function SelectionView({
  onCompare,
  onToggleParty,
  parameterLabels,
  parties,
  selectedIds,
  selectedParties
}: {
  onCompare: () => void;
  onToggleParty: (id: string) => void;
  parameterLabels: string[];
  parties: Party[];
  selectedIds: string[];
  selectedParties: Party[];
}) {
  const canCompare = selectedIds.length >= 2;

  return (
    <PageShell className="pb-40 md:pb-16">
      <PageHeader
        className="mb-10 md:mb-12"
        breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "Comparison" }]} />}
        eyebrow="Comparative Analytics"
        title="Compare Manifestos"
        description="Select two or three parties to compare policy promises, fiscal gaps, feasibility, and editorial verification notes side by side."
        actions={
          <Button
            className={cn(
              "hidden gap-3 font-bold shadow-lg transition-all active:scale-[0.98] md:flex",
              canCompare
                ? "bg-secondary text-on-secondary shadow-secondary/20 hover:scale-[1.02]"
                : "cursor-not-allowed bg-surface-container-high text-on-surface-variant shadow-none"
            )}
            disabled={!canCompare}
            onClick={onCompare}
            size="xl"
            type="button"
          >
            <LucideIcon name="compare_arrows" />
            Compare Selected ({selectedIds.length})
          </Button>
        }
      />

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 md:hidden">
        <div className="flex rounded-lg bg-surface-container p-1">
          {["All Parties", "National", "Regional"].map((label, index) => (
            <button
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold transition-colors",
                index === 0
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant"
              )}
              key={label}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-4 py-2 text-sm font-medium text-on-secondary-container">
          <FilledIcon className="text-base" name="verified" />
          Verified data
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <aside className="hidden space-y-6 md:col-span-3 md:block">
          <div className="rounded-lg bg-surface-container-low p-6">
            <h2 className="mb-4 flex items-center gap-2 font-headline font-bold text-primary">
              <LucideIcon className="text-secondary" name="filter_list" />
              Parameters
            </h2>
            <div className="space-y-4">
              {parameterLabels.map((label, index) => (
                <label className="group flex cursor-pointer items-center gap-3" key={label}>
                  <input
                    className="h-5 w-5 rounded border-outline text-secondary focus:ring-secondary"
                    defaultChecked={index < 2}
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-on-surface-variant transition-colors group-hover:text-primary">
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-primary-container p-6 text-on-primary-container">
            <div className="relative z-10">
              <h3 className="mb-2 font-headline font-bold">Need a Primer?</h3>
              <p className="mb-4 text-sm leading-snug opacity-80">
                Claims are scored only when the source, funding path, and implementation agency are
                visible.
              </p>
              <button className="flex items-center gap-2 text-sm font-bold hover:underline" type="button">
                View Methodology
                <LucideIcon className="text-sm" name="arrow_forward" />
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-10">
              <FilledIcon className="text-8xl" name="account_balance" />
            </div>
          </div>
        </aside>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-9 lg:grid-cols-3">
          {parties.map((party) => (
            <PartyCard
              isSelected={selectedIds.includes(party.id)}
              key={party.id}
              onToggle={() => onToggleParty(party.id)}
              party={party}
            />
          ))}
          <button
            className="flex min-h-72 flex-col items-center justify-center rounded-lg border-2 border-dashed border-outline-variant p-6 text-center text-on-surface-variant transition-colors hover:border-secondary hover:text-secondary"
            type="button"
          >
            <LucideIcon className="mb-3 text-4xl transition-transform" name="search" />
            <span className="font-bold">Search Other Parties</span>
            <span className="mt-1 text-xs opacity-70">Explore independent or regional factions</span>
          </button>
        </section>
      </div>

      <section className="mt-16 grid overflow-hidden rounded-lg bg-surface-container-low lg:grid-cols-2">
        <div className="p-8 md:p-12">
          <h2 className="mb-6 font-headline text-3xl font-bold text-primary">
            Manifesto Deep-Dive:
            <br />
            <span className="text-secondary">Urban Development</span>
          </h2>
          <p className="mb-8 leading-relaxed text-on-surface-variant">
            Leading parties agree on tier-2 growth, but disagree on funding: state-led transit,
            central corridors, and local job guarantees produce very different fiscal risk.
          </p>
          <div className="mb-8 flex items-center gap-8">
            <Metric value="₹14.2B" label="Projected spending" />
            <div className="h-12 w-px bg-outline-variant" />
            <Metric value="92%" label="Claims traced" />
          </div>
          <button
            className="rounded-lg bg-primary px-6 py-3 font-bold text-on-primary transition-colors hover:bg-primary-container"
            type="button"
          >
            Read Full Editorial
          </button>
        </div>
        <ResponsiveImage
            alt="High angle view of a modern urban development project with green transit corridors and sustainable building design"
            className="h-80 lg:h-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZm8Bc49mFzwGDp-XAIQaxqYiYfK7nmsVydQWf5IMoeGnHKMLZCjcuJnJy3-r9OvxCS4DYD5jsa9TtimL2eK32NBgFJCVe2FIir_Z-0rS37UhlqFTo1GtoNOw21gPT5KFQhu4tcmsfZNlFj2STlDBcqfffO04uwCLwHN_xOJT3GTYdOEWyz7udXUJnCUxx5JUquLtozE1sALMWxMwR3OvnJAv1eIlBWB6ugpmh2pR4Fmk8xMxM67BQRh2PsBXgXEta5zu7Xsn37BCY"
          />
      </section>

      <MobileCompareBar
        canCompare={canCompare}
        onCompare={onCompare}
        selectedParties={selectedParties}
      />
    </PageShell>
  );
}

function PartyCard({
  isSelected,
  onToggle,
  party
}: {
  isSelected: boolean;
  onToggle: () => void;
  party: Party;
}) {
  return (
    <article
      className={cn(
        "relative flex min-h-72 flex-col rounded-lg p-6 transition-all",
        isSelected
          ? "bg-surface-container-lowest ring-2 ring-secondary shadow-xl shadow-secondary/5"
          : "bg-surface-container-low shadow-sm hover:bg-surface-container-lowest hover:shadow-lg"
      )}
    >
      <button
        aria-pressed={isSelected}
        className={cn(
          "absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full transition-colors",
          isSelected ? "bg-secondary text-on-secondary" : "border-2 border-outline-variant"
        )}
        onClick={onToggle}
        type="button"
      >
        {isSelected ? <LucideIcon className="text-xs" name="check" /> : null}
      </button>
      <div className="mb-6 flex items-center gap-4 md:block">
        <div className="mb-0 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-surface-container-high md:mb-6">
          <ResponsiveImage
            alt={`${party.name} emblem`}
            className="h-12 w-12"
            imageClassName="object-contain"
            sizes="48px"
            src={party.image}
          />
        </div>
        <div>
          <h3 className="mb-1 font-headline text-xl font-bold leading-tight text-primary">
            {party.name}
          </h3>
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-wider",
              isSelected ? "text-secondary" : "text-on-surface-variant"
            )}
          >
            {party.shortName} / {party.leaning}
          </p>
        </div>
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-on-surface-variant">{party.summary}</p>
      <div className="mb-5 space-y-3 md:hidden">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-on-surface-variant">Key Focus:</span>
          <span className="text-primary">{party.focus}</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container">
          <div
            className={cn("h-full", isSelected ? "bg-secondary" : "bg-outline-variant")}
            style={{ width: `${party.score}%` }}
          />
        </div>
      </div>
      <button
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold transition-colors",
          isSelected
            ? "bg-surface-container-high text-primary hover:bg-surface-container"
            : "bg-secondary text-on-secondary hover:bg-secondary/90"
        )}
        onClick={onToggle}
        type="button"
      >
        {!isSelected ? <LucideIcon className="text-sm" name="add" /> : null}
        {isSelected ? "Remove from Comparison" : "Add to Compare"}
      </button>
    </article>
  );
}

function ComparisonView({
  activeSector,
  activeSectorId,
  onBack,
  onSectorChange,
  policyCopy,
  sectors,
  selectedParties
}: {
  activeSector: Sector;
  activeSectorId: string;
  onBack: () => void;
  onSectorChange: (id: string) => void;
  policyCopy: PolicyCopy;
  sectors: Sector[];
  selectedParties: Party[];
}) {
  return (
    <PageShell className="pb-16">
      <PageHeader
        className="mb-10 md:mb-16"
        breadcrumbs={
          <Breadcrumbs
            items={[
              { href: "/", label: "Tamil Nadu" },
              { href: "/comparison", label: "Comparison" },
              { label: "Manifestos" }
            ]}
          />
        }
        eyebrow="Verified Analysis"
        title="Manifesto Comparison"
        description="Side-by-side verification of key policy promises across the selected political blocs."
        actions={
          <Button className="gap-2" onClick={onBack} type="button" variant="link">
            <LucideIcon className="text-lg" name="arrow_back" />
            Change parties
          </Button>
        }
      />

      <div className="sticky top-16 z-40 -mx-6 bg-surface/95 px-6 py-4 backdrop-blur-sm md:hidden">
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
          {sectors.map((sector) => (
            <button
              className={cn(
                "flex-shrink-0 rounded-lg px-5 py-2 text-sm font-semibold transition-colors active:scale-95",
                activeSectorId === sector.id
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-high text-on-surface-variant"
              )}
              key={sector.id}
              onClick={() => onSectorChange(sector.id)}
              type="button"
            >
              {sector.title}
            </button>
          ))}
        </div>
      </div>

      <div className="sticky top-[132px] z-30 -mx-6 bg-surface-container-low px-6 py-3 shadow-sm md:hidden">
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${selectedParties.length}, minmax(0, 1fr))` }}>
          {selectedParties.map((party) => (
            <div className="flex min-w-0 items-center gap-3" key={party.id}>
              <div className={cn("h-10 w-10 overflow-hidden rounded-full", party.colorClass)}>
                <ResponsiveImage
                  alt={`${party.shortName} thumbnail`}
                  className="h-full w-full"
                  sizes="40px"
                  src={party.image}
                />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  {party.shortName}
                </div>
                <div className="truncate text-sm font-bold text-primary">{party.focus}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DesktopComparisonGrid
        policyCopy={policyCopy}
        sectors={sectors}
        selectedParties={selectedParties}
      />
      <MobileComparison
        activeSector={activeSector}
        policyCopy={policyCopy}
        selectedParties={selectedParties}
      />

      <section className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg bg-tertiary-container p-6 md:col-span-2 md:p-10">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim">
              Impact Analysis
            </div>
            <h2 className="mb-3 font-headline text-2xl font-bold text-white md:text-3xl">
              Budget Allocation
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-tertiary-fixed opacity-90 md:text-base">
              Welfare-heavy proposals carry faster public visibility. Infrastructure-heavy proposals
              need sharper milestone disclosure before fiscal risk can be marked low.
            </p>
            <div className="flex h-2 w-full max-w-xl overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-primary" style={{ width: "45%" }} />
              <div className="h-full bg-secondary" style={{ width: "55%" }} />
            </div>
          </div>
          <div className="absolute -bottom-8 -right-6 opacity-10">
            <LucideIcon className="text-[140px]" name="monitoring" />
          </div>
        </div>
        <InsightCard
          icon="warning"
          tone="text-error"
          title={activeSector.fiscalNote}
          label="Fiscal Gap"
        />
        <InsightCard
          icon="check_circle"
          tone="text-secondary"
          title={activeSector.feasibilityNote}
          label="Feasibility"
        />
      </section>

      <section className="mt-16 overflow-hidden rounded-lg bg-primary p-8 text-white md:p-12">
        <h2 className="mb-4 font-headline text-3xl font-bold">Need more detail?</h2>
        <p className="mb-8 max-w-xl text-lg text-primary-fixed-dim">
          Download the full comparative analysis with source links, fiscal impact notes, and claim
          traceability scores.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 font-bold text-on-secondary transition-all active:scale-95" type="button">
            <LucideIcon name="download" />
            Download PDF Report
          </button>
          <button className="rounded-lg bg-surface-container-lowest px-8 py-4 font-bold text-primary transition-colors hover:bg-white" type="button">
            View Sources
          </button>
        </div>
      </section>
    </PageShell>
  );
}

function DesktopComparisonGrid({
  policyCopy,
  sectors,
  selectedParties
}: {
  policyCopy: PolicyCopy;
  sectors: Sector[];
  selectedParties: Party[];
}) {
  return (
    <section
      className="hidden overflow-hidden rounded-lg bg-surface-container-low md:grid"
      style={{ gridTemplateColumns: `280px repeat(${selectedParties.length}, minmax(0, 1fr))` }}
    >
      <div className="flex min-h-44 items-end bg-surface-container-high/30 p-8">
        <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          Policy Sector
        </span>
      </div>
      {selectedParties.map((party) => (
        <div className="min-h-44 border-b border-surface-variant/20 bg-surface-container-lowest p-8" key={party.id}>
          <div className={cn("mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg text-white", party.colorClass)}>
            <ResponsiveImage
              alt={`${party.shortName} emblem`}
              className="h-full w-full"
              sizes="48px"
              src={party.image}
            />
          </div>
          <h2 className="font-headline text-xl font-bold text-primary">{party.name}</h2>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
            {party.shortName}
          </p>
        </div>
      ))}

      {sectors.map((sector, index) => (
        <div className="contents" key={sector.id}>
          <div
            className={cn(
              "min-h-64 p-8",
              index % 2 === 0 ? "bg-surface-container-high/20" : "bg-surface-container-low"
            )}
          >
            <LucideIcon className="mb-3 text-secondary" name={sector.icon} />
            <h3 className="font-headline text-lg font-bold text-primary">{sector.title}</h3>
            <p className="mt-2 text-sm text-on-surface-variant">{sector.context}</p>
          </div>
          {selectedParties.map((party) => (
            <div
              className="min-h-64 border-b border-surface-variant/20 bg-surface-container-lowest/70 p-8 text-sm leading-relaxed text-on-surface-variant"
              key={`${sector.id}-${party.id}`}
            >
              <p>{policyCopy[party.id][sector.id]}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded bg-secondary-container px-2 py-1 text-xs font-bold uppercase text-on-secondary-container">
                  {party.focus}
                </span>
                <span className="rounded bg-surface-container px-2 py-1 text-xs font-bold uppercase text-primary">
                  {party.score}% traced
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

function MobileComparison({
  activeSector,
  policyCopy,
  selectedParties
}: {
  activeSector: Sector;
  policyCopy: PolicyCopy;
  selectedParties: Party[];
}) {
  return (
    <section className="mt-8 space-y-6 md:hidden">
      <div className="flex items-center gap-2">
        <LucideIcon className="text-primary" name={activeSector.icon} />
        <h2 className="font-headline text-xl font-bold text-primary">{activeSector.title}</h2>
      </div>
      <p className="text-sm leading-relaxed text-on-surface-variant">{activeSector.context}</p>
      <div className="grid grid-cols-1 gap-4">
        {selectedParties.map((party, index) => (
          <article
            className={cn(
              "rounded-lg border-l-4 bg-surface-container-lowest p-6 shadow-sm",
              index === 0 ? "border-primary" : index === 1 ? "border-secondary" : "border-tertiary-container"
            )}
            key={party.id}
          >
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              {party.name}
            </h3>
            <p className="mb-4 font-medium leading-relaxed text-on-surface">
              {policyCopy[party.id][activeSector.id]}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-surface-container px-2 py-1 text-xs font-bold uppercase">
                {party.focus}
              </span>
              <span className="rounded bg-secondary-container px-2 py-1 text-xs font-bold uppercase text-on-secondary-container">
                {party.score}% traced
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MobileCompareBar({
  canCompare,
  onCompare,
  selectedParties
}: {
  canCompare: boolean;
  onCompare: () => void;
  selectedParties: Party[];
}) {
  return (
    <div className="fixed bottom-24 left-0 z-40 w-full px-4 md:hidden">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-lg border border-white/10 bg-primary p-4 text-white shadow-2xl">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex -space-x-3">
            {selectedParties.slice(0, 3).map((party) => (
              <div
                className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary bg-surface-container"
                key={party.id}
              >
                <ResponsiveImage
                  alt={`${party.shortName} selected`}
                  className="h-full w-full"
                  sizes="40px"
                  src={party.image}
                />
              </div>
            ))}
          </div>
          <div className="min-w-0">
            <p className="font-headline text-sm font-bold">{selectedParties.length} Parties Selected</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-fixed-dim">
              {canCompare ? "Ready to compare" : "Select one more"}
            </p>
          </div>
        </div>
        <button
          className={cn(
            "flex flex-shrink-0 items-center gap-2 rounded-lg px-4 py-3 font-headline text-sm font-bold transition-all active:scale-95",
            canCompare ? "bg-secondary text-white" : "bg-white/10 text-primary-fixed-dim"
          )}
          disabled={!canCompare}
          onClick={onCompare}
          type="button"
        >
          Compare
          <LucideIcon name="compare_arrows" />
        </button>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-headline text-3xl font-bold text-primary">{value}</div>
      <div className="mt-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
        {label}
      </div>
    </div>
  );
}

function InsightCard({
  icon,
  label,
  title,
  tone
}: {
  icon: string;
  label: string;
  title: string;
  tone: string;
}) {
  return (
    <div className="rounded-lg bg-surface-container-low p-5">
      <LucideIcon className={cn("mb-2", tone)} name={icon} />
      <h3 className="mb-1 text-sm font-bold">{label}</h3>
      <p className="text-xs leading-relaxed text-on-surface-variant">{title}</p>
    </div>
  );
}

function FilledIcon({ name, className }: { name: string; className?: string }) {
  return (
    <LucideIcon
      className={className}
      name={name}
    />
  );
}
