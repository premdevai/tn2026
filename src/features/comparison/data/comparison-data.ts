import { comparisonModelSchema, type ComparisonModel } from "@/lib/schemas";

export const comparisonModel: ComparisonModel = comparisonModelSchema.parse({
  parties: [
    {
      id: "dmk",
      name: "Dravida Munnetra Kazhagam",
      shortName: "DMK",
      leaning: "Centrist / Social Democratic",
      focus: "State Autonomy",
      summary:
        "Social justice, linguistic rights, urban infrastructure, and a stronger state role in welfare delivery.",
      score: 85,
      colorClass: "bg-primary",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzFsQ0QDPQtnd3lPTC14QaDP08pQ8RSDGkL2KmzU-m49FinAW7tfNT-Fte9up4eFZ-Pn5EqHrWQh6vhEUgcnBeKVzpo2TgeFv70BZRAsgTzbl6k4MLpmi9GNkmgjuRZ7R1mhWQcEBNBTBPMUr0kS0Sqr3Wm1hvzIUpE4OvHaS6yE1c_dp2DbGxjDiUB7Cgeu-hJF0MTdPlpDHElXNf42WzA3SxyN8CiemYwwBoftoyip-9EFwiHmUPoovI5TFf1bfq8oa2qYDWvejT"
    },
    {
      id: "aiadmk",
      name: "All India Anna DMK",
      shortName: "AIADMK",
      leaning: "Populist / Welfare Focused",
      focus: "Welfare Schemes",
      summary:
        "Food security, rural welfare, administrative continuity, and direct household benefit programs.",
      score: 78,
      colorClass: "bg-secondary",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDZhv8MF_isgajhHk3KT_izxBKtmN1w_QnvUwzmUfiPItTiKUDwfIG36hPKXY3lbJXCL4BVlRetm--9liHwiG4cZPfR9qHqy6D-aUsEC-kk3HMQp2lRK6pvziZS6hwQEoOeMMdSqUGLEiAC_lf1jRwPWoGIaMUk0BagihH0GEOQFmCpFe8bi2lF6QlqUVdBbq2sBJ4fCSKFmyARQdXoKObGPJaiX6QYqF4YBKiWPzGFofvehZx75IbeeDNg71KNFVffhipGP8TBonn8"
    },
    {
      id: "bjp",
      name: "Bharatiya Janata Party",
      shortName: "BJP",
      leaning: "Nationalist / Right-wing",
      focus: "Development",
      summary:
        "National integration, industrial corridors, digital economy, and central-state infrastructure partnerships.",
      score: 92,
      colorClass: "bg-tertiary-container",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDo0yEiDh6sNra71GakE4XW3GV7GVLVkog9N8uugcSkUBRCKMA23icq_ZW1spSz94_8s_stC-au0_7G0kQK9oEmZ4MBaF2faAvIz5V_S38XPuLpThKRqkftttbk4UokGLHTFn7rdTNbGkuKA6LML3joG9iNW_949HNM1diNLvsGAjm8xHzguVpawLVeCoafl0BXfRSfZW0Py9Srs_3bgya2DrnCHIg3V0Dr_lCJbScrkXL4nc_u3ZmrJqCNYfdfE8XK92Xy6puigRxh"
    },
    {
      id: "inc",
      name: "Indian National Congress",
      shortName: "INC",
      leaning: "Liberal / Pluralist",
      focus: "Social Inclusion",
      summary:
        "Inclusive growth, secular institutions, agrarian support, and local governance reform.",
      score: 80,
      colorClass: "bg-primary-container",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkNWCymatVr8o8hfJdr6bLIUCN480fMAcLVDPIEZb-zRExl6MNHNX_0viWA8Jyk7xCW7SnEuFEYEfj5XI5FeGNTLVpTJKFhwNVq7iM3ZmQR9KWjvZJ1u8mOnMRh-XIHaf8oQAJOXbHRVdanuZ-cgzxxqSc3g84almjOd4XztZS2MuTYSBVnpwIVGQjfA7MAT2sHgKGGGmFUiY52zItel0Z2YPuQJx-cZSm0f3Bv390xJX3sfaA5wfxrU-J1ybrO_aGJJrM9l9nRNOy"
    },
    {
      id: "ntk",
      name: "Naam Tamilar Katchi",
      shortName: "NTK",
      leaning: "Tamil Nationalist",
      focus: "Environment",
      summary:
        "Ecological sustainability, agrarian revival, Tamil identity, and decentralized local economies.",
      score: 65,
      colorClass: "bg-on-tertiary-fixed-variant",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB4UDHhRtwFDWHd2vupTZdW38omtFjmou-wEBeGgLCUYTD0hnw9A9DrDeOpUvT5vO6J-vIVr9OgKVjt0DPVhhhrGJ4zWahreDJOAmdkqcDxMM3YC0d_hXP3AY0uzb33JHzVAsnfCWWTd2bQkqmB0zFcOkpknUHtkIn1_wWMWy9F1oDUORmef2O8aXzkNeOKKhZSRMg5FRQSqxqUT6ZZylt2TVTN7cchX9HvUkEzzyUi9xIGW48UxSC-2PPyxGlOTEOmlqbPOdfpFHqg"
    }
  ],
  sectors: [
    {
      id: "education",
      title: "Education",
      icon: "school",
      context:
        "Public infrastructure, teacher ratios, nutrition, language policy, and higher education funding.",
      analysis:
        "The main divide is delivery model: statewide welfare-led schooling versus technology and skills-led modernization.",
      fiscalNote: "Tablet and smart-classroom promises need clearer procurement and maintenance funding.",
      feasibilityNote: "Nutrition, language, and seat-expansion promises can use existing school and college systems."
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: "medical_services",
      context: "Universal access, facility upgrades, primary care, staffing, and insurance coverage.",
      analysis:
        "Insurance-led plans score well on household protection, while primary-care expansion is easier to audit locally.",
      fiscalNote: "Hospital construction timelines are under-specified for municipalities with land constraints.",
      feasibilityNote: "Staff recruitment and preventive care have the clearest near-term implementation path."
    },
    {
      id: "agriculture",
      title: "Agriculture",
      icon: "agriculture",
      context: "MSP guarantees, irrigation, cold storage, farmer subsidies, and ecological transition.",
      analysis:
        "Cash support is simpler to deliver; irrigation and storage reforms have higher long-run value but slower proof points.",
      fiscalNote: "Seasonal transfer promises need crop-wise eligibility and disaster-year buffers.",
      feasibilityNote: "Canal renewal and seed banks can be tracked through district-level milestones."
    },
    {
      id: "economy",
      title: "Economy",
      icon: "payments",
      context: "GDP targets, jobs, industrial zones, MSMEs, logistics, and urban employment.",
      analysis:
        "Industrial corridor plans are ambitious, while public employment and MSME credit are more immediately measurable.",
      fiscalNote: "Tax holiday promises should disclose revenue impact and sunset clauses.",
      feasibilityNote: "Tier-2 manufacturing clusters fit existing state industrial geography."
    }
  ],
  policyCopy: {
    dmk: {
      education:
        "Expands breakfast and classroom infrastructure, with emphasis on Tamil-medium access and state university capacity.",
      healthcare:
        "Strengthens district hospitals and public insurance delivery, with preventive care routed through local clinics.",
      agriculture:
        "Focuses on irrigation restoration, procurement stability, and support for small farmers near delta districts.",
      economy: "Targets urban transit, technology parks, and tier-2 city jobs through state-led industrial planning."
    },
    aiadmk: {
      education: "Prioritizes free meals, school supplies, and retention incentives for government school students.",
      healthcare: "Builds around household health cover, medical camps, and visible welfare delivery through district programs.",
      agriculture: "Promises direct rural relief, food security buffers, and cooperative procurement support.",
      economy: "Leans on welfare stability, textile exports, and rural consumption to support employment."
    },
    bjp: {
      education: "Adds AI literacy, digital classrooms, national testing alignment, and skill hubs in high-growth districts.",
      healthcare: "Uses digital health IDs, PPP hospital upgrades, and tertiary-care efficiency as the main levers.",
      agriculture: "Pushes agri-tech, drone monitoring, cooperative farming models, and market access through central schemes.",
      economy: "Focuses on logistics, FDI, manufacturing tax incentives, and central infrastructure pipelines."
    },
    inc: {
      education: "Frames education around scholarships, secular institutions, vocational access, and local school governance.",
      healthcare: "Emphasizes affordable public care, medicine access, and insurance coverage for vulnerable groups.",
      agriculture: "Supports MSP-linked protections, debt relief, and local procurement for small and marginal farmers.",
      economy: "Prioritizes MSME credit, agrarian recovery, and employment guarantees over large capital projects."
    },
    ntk: {
      education: "Centers Tamil instruction, local history, public school strengthening, and ecological curriculum.",
      healthcare: "Focuses on public primary care, nutrition, and preventive services in rural and peri-urban areas.",
      agriculture: "Prioritizes organic farming, native seeds, water conservation, and a local-first food economy.",
      economy: "Builds around decentralized production, farming livelihoods, fisheries, and small local enterprises."
    }
  },
  parameterLabels: ["Economic Policy", "Social Welfare", "Infrastructure", "Education Reform"]
});
