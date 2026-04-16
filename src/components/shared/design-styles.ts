export const typography = {
  pageTitle: "font-headline text-3xl font-bold leading-tight text-primary md:text-5xl",
  pageTitleCompact: "font-headline text-3xl font-bold leading-tight text-primary md:text-4xl",
  pageTitleHero: "font-headline text-4xl font-bold leading-tight text-primary md:text-6xl",
  pageDescription: "text-sm leading-6 text-on-surface-variant md:text-base md:leading-7",
  sectionTitle: "font-headline text-xl font-bold leading-tight text-primary md:text-2xl",
  cardTitle: "font-headline text-base font-bold leading-snug text-primary md:text-lg",
  eyebrow: "text-xs font-bold uppercase tracking-wider text-secondary",
  caption: "text-xs font-semibold text-on-surface-variant",
  metricValue: "font-headline text-2xl font-bold text-primary",
  body: "text-sm leading-6 text-on-surface-variant md:text-base"
} as const;

export const radius = {
  surface: "rounded-lg",
  control: "rounded-lg",
  avatar: "rounded-full",
  pill: "rounded-full"
} as const;
