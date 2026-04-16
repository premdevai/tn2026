import { aboutContentSchema, homeContentSchema, type AboutContent, type HomeContent } from "@/lib/schemas";

export const homeContent: HomeContent = homeContentSchema.parse({
  hero: {
    eyebrow: "Live election updates",
    title: "Find the best time to vote.",
    description:
      "Real-time crowd intelligence and station data for Tamil Nadu. Skip the queue and plan your voting day with ease.",
    desktopSearchPlaceholder: "Enter your constituency or area",
    desktopSearchLabel: "Search booths",
    mobileTitle: "Your vote, informed.",
    mobileDescription: "Tamil Nadu election guide",
    mobileSearchPlaceholder: "Search candidates or booths...",
    statusEyebrow: "Live status",
    statusTitle: "Check your local polling station rush in real time.",
    statusCtaLabel: "Find my booth"
  },
  nearby: {
    title: "Nearby booths",
    description: "Crowd status and wait estimates from the active data source.",
    viewMapLabelDesktop: "View map view",
    viewMapLabelMobile: "View map"
  },
  checklist: {
    title: "Essential checklist",
    description: "Do not leave home without these essentials for a smooth experience.",
    items: [
      {
        title: "Voter ID verification",
        description: "Ensure your EPIC card is valid and linked.",
        icon: "verified_user"
      },
      {
        title: "Locate your ward",
        description: "Find your specific booth number and serial.",
        icon: "location_on"
      },
      {
        title: "Candidate bios",
        description: "Read disclosures and local priorities.",
        icon: "groups"
      },
      {
        title: "EVM guide",
        description: "How to use the machine and VVPAT system.",
        icon: "help"
      }
    ]
  },
  guideCta: {
    eyebrow: "New to voting?",
    title: "First-time voter guide",
    description:
      "Making your voice heard is a privilege. We simplified the process from entering the booth to the indelible ink mark.",
    primaryLabel: "Start the guide",
    secondaryLabel: "Download PDF",
    mobileTitle: "New to voting?",
    mobileDescription:
      "Our editorial guide covers what first-time voters in Tamil Nadu need to know before election day.",
    mobileLabel: "Read the full guide",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPm2ezR_AmhyO-E3aI6Lr4UC46i6JoYcVAcA2ue95odg8RyO5bWGi3DB3GCvftYajsHJ5QgtEjVYKD-Jzb_uiYk7J7Mzd0m2vhJauX7i_hfeTbfK8x3lwPsirawWh9ee507tE9G4AJ9K6ySN6tgRsADZjWOqx94Om6mzplzhIoJnRdrCRgFbdUuzlAH9Th6hX9t12Vrp3t6fUsBEzmuqM8F5fUfGYf6LefowJjDGFW501oF_g0pPZSlA2mFuhheAhsbZGPpnnjh1cw",
    imageAlt: "Democratic participation"
  }
});

export const aboutContent: AboutContent = aboutContentSchema.parse({
  highlights: [
    {
      icon: "bolt",
      title: "Static-first",
      body: "Fast pages, simple hosting, and SEO-friendly routes before any backend exists."
    },
    {
      icon: "schema",
      title: "Typed data boundary",
      body: "Zod schemas define every entity now and can validate Worker API responses later."
    },
    {
      icon: "cloud_queue",
      title: "Backend-ready",
      body: "Repository contracts keep the UI ready for Cloudflare Workers, D1, and KV."
    },
    {
      icon: "groups",
      title: "For every voter",
      body: "Clear guidance for anyone checking booths, candidates, or voting-day prep."
    }
  ]
});
