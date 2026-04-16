import type { BoothStatus, CandidateProfile, Constituency, District } from "@/lib/schemas";

const chennaiCandidates: CandidateProfile[] = [
  {
    name: "R. Krishnamurthy",
    party: "National Progressive Party",
    mobileParty: "National Peoples Party",
    symbolIcon: "account_balance",
    mobileImage: "/images/districts/krishnamurthy-mobile.png",
    desktopImage: "/images/districts/krishnamurthy-desktop.png",
    imageAlt: "Professional portrait of R. Krishnamurthy",
    mobileEducation: "B.Tech, MBA",
    mobileAssets: "Assets: ₹4.2Cr",
    desktopEducation: "M.A. Political Science",
    desktopAssets: "₹12.4 Crores",
    accent: "primary"
  },
  {
    name: "Dr. S. Anitha",
    party: "Independent • Symbol: Lion",
    mobileParty: "Independent",
    symbolIcon: "pets",
    mobileImage: "/images/districts/anitha-mobile.png",
    desktopImage: "/images/districts/anitha-desktop.png",
    imageAlt: "Professional portrait of Dr. S. Anitha",
    mobileEducation: "PhD Sociology",
    mobileAssets: "Assets: ₹82L",
    desktopEducation: "MBBS, MD",
    desktopAssets: "₹85 Lakhs",
    accent: "tertiary"
  },
  {
    name: "V. Selvam",
    party: "Tamil Heritage Union",
    mobileParty: "Regional Justice League",
    symbolIcon: "temple_hindu",
    mobileImage: "/images/districts/selvam-mobile.png",
    desktopImage: "/images/districts/selvam-desktop.png",
    imageAlt: "Professional portrait of V. Selvam",
    mobileEducation: "LLB",
    mobileAssets: "Assets: ₹1.8Cr",
    desktopEducation: "L.L.B",
    desktopAssets: "₹5.2 Crores",
    accent: "primary"
  }
];

const chennaiBooths: BoothStatus[] = [
  {
    name: "Mylapore Govt High School",
    detail: "Booth #142 • North Block",
    icon: "school",
    tone: "low",
    waitLabel: "LOW RUSH",
    actionLabel: "GO NOW"
  },
  {
    name: "San Thome Comm. Hall",
    detail: "Booth #143 • Main Hall",
    icon: "account_balance",
    tone: "medium",
    waitLabel: "MEDIUM"
  },
  {
    name: "St. Mary's Library",
    detail: "Booth #144 • East Wing",
    icon: "warning",
    tone: "high",
    waitLabel: "HIGH"
  }
];

const liveBooths: BoothStatus[] = [
  {
    name: "P.S. Senior Secondary",
    detail: "Section A - E",
    icon: "school",
    tone: "low",
    waitLabel: "~15m Wait"
  },
  {
    name: "Mylapore Corp. Office",
    detail: "Main Hall",
    icon: "account_balance",
    tone: "medium",
    waitLabel: "~45m Wait"
  }
];

function createConstituency(
  overrides: Partial<Constituency> & Pick<Constituency, "slug" | "name" | "division" | "turnout" | "status">
): Constituency {
  return {
    tag: "Official",
    tagTone: "official",
    assemblyNumber: "171",
    thumbnail: "/images/districts/mylapore-thumb.png",
    thumbnailAlt: "Constituency landmark in Chennai",
    mapMobile: "/images/districts/mylapore-map-mobile.png",
    mapDesktop: "/images/districts/mylapore-map-desktop.png",
    assignedStation: "San Thome High School",
    booths: chennaiBooths,
    candidates: chennaiCandidates,
    ...overrides
  };
}

const chennaiConstituencies: Constituency[] = [
  createConstituency({
    slug: "mylapore",
    name: "Mylapore",
    division: "Central Chennai",
    turnout: "56.4%",
    status: "Fully Registered",
    assemblyNumber: "171",
    thumbnail: "/images/districts/mylapore-thumb.png",
    thumbnailAlt: "Colorful South Indian temple gopuram in Mylapore",
    mobileBooths: liveBooths
  }),
  createConstituency({
    slug: "royapettah",
    name: "Royapettah",
    division: "Harbour Division",
    tag: "Bellwether",
    tagTone: "bellwether",
    turnout: "58.2%",
    status: "Rolls Updated",
    assemblyNumber: "172",
    thumbnail: "/images/districts/royapettah-thumb.png",
    thumbnailAlt: "Urban street in Chennai with traffic and colonial architecture"
  }),
  createConstituency({
    slug: "velachery",
    name: "Velachery",
    division: "South Chennai",
    turnout: "55.9%",
    status: "Active Sessions",
    assemblyNumber: "173",
    thumbnail: "/images/districts/velachery-thumb.png",
    thumbnailAlt: "Modern high-tech office building interior"
  }),
  createConstituency({
    slug: "t-nagar",
    name: "T. Nagar",
    division: "Commercial Core",
    turnout: "52.8%",
    status: "Fully Registered",
    assemblyNumber: "174",
    thumbnail: "/images/districts/chennai-district-hero.png"
  }),
  createConstituency({
    slug: "anna-nagar",
    name: "Anna Nagar",
    division: "Northwest Chennai",
    turnout: "57.1%",
    status: "Fully Registered",
    assemblyNumber: "175",
    thumbnail: "/images/districts/chennai-mobile.png"
  }),
  createConstituency({
    slug: "saidapet",
    name: "Saidapet",
    division: "Southwest Chennai",
    turnout: "59.3%",
    status: "Fully Registered",
    assemblyNumber: "176",
    thumbnail: "/images/districts/chennai-desktop.png"
  })
];

function createDistrict(overrides: District): District {
  return overrides;
}

export const districts: District[] = [
  createDistrict({
    slug: "chennai",
    name: "Chennai",
    region: "North",
    icon: "location_city",
    mobileTagline: "State Capital & Major Hub",
    constituencies: "16",
    mobileVoters: "3.2M",
    desktopVoters: "3.9M",
    registeredVotersLong: "3.9M+",
    totalSeats: "16",
    turnout: "84.2%",
    registrationStatus: "Active",
    lastUpdate: "May 2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Chennai city skyline",
    desktopAlt: "Aerial sunset view of Marina Beach Chennai with golden reflections on the Bay of Bengal",
    detailHeroAlt: "Historic Chennai skyline at sunrise",
    featured: true,
    badge: "Capital District",
    showOnMobile: true,
    overviewText:
      "Analytical breakdown of electoral performance and voter registration status across urban constituencies.",
    constituenciesList: chennaiConstituencies
  }),
  createDistrict({
    slug: "coimbatore",
    name: "Coimbatore",
    region: "West",
    icon: "factory",
    mobileTagline: "Manchester of South India",
    constituencies: "10",
    mobileVoters: "2.1M",
    desktopVoters: "3.1M",
    registeredVotersLong: "3.1M+",
    totalSeats: "10",
    turnout: "78.6%",
    registrationStatus: "Active",
    lastUpdate: "May 2024",
    mobileImage: "/images/districts/coimbatore-mobile.png",
    desktopImage: "/images/districts/coimbatore-desktop.png",
    detailHeroImage: "/images/districts/coimbatore-desktop.png",
    mobileAlt: "Coimbatore industrial district",
    desktopAlt: "Green Coimbatore foothills with mist over the Western Ghats mountains",
    detailHeroAlt: "Coimbatore foothills and civic landscape",
    showOnMobile: true,
    overviewText:
      "Assembly-level summaries for western urban and peri-urban constituencies.",
    constituenciesList: [
      createConstituency({ slug: "coimbatore-south", name: "Coimbatore South", division: "Urban Core", turnout: "63.1%", status: "Active" }),
      createConstituency({ slug: "singanallur", name: "Singanallur", division: "Industrial Belt", turnout: "61.7%", status: "Rolls Updated" }),
      createConstituency({ slug: "pollachi", name: "Pollachi", division: "Southern Corridor", turnout: "67.4%", status: "Fully Registered" })
    ]
  }),
  createDistrict({
    slug: "madurai",
    name: "Madurai",
    region: "South",
    icon: "temple_hindu",
    mobileTagline: "Cultural Heartland",
    constituencies: "10",
    mobileVoters: "1.9M",
    desktopVoters: "2.7M",
    registeredVotersLong: "2.7M+",
    totalSeats: "10",
    turnout: "80.1%",
    registrationStatus: "Active",
    lastUpdate: "May 2024",
    mobileImage: "/images/districts/madurai-mobile.png",
    desktopImage: "/images/districts/madurai-desktop.png",
    detailHeroImage: "/images/districts/madurai-desktop.png",
    mobileAlt: "Madurai temple district",
    desktopAlt: "Madurai Meenakshi Temple gopurams against a clear blue sky",
    detailHeroAlt: "Madurai temple skyline",
    showOnMobile: true,
    overviewText:
      "Urban, temple-town, and rural-edge constituencies across the southern civic heartland.",
    constituenciesList: [
      createConstituency({ slug: "madurai-central", name: "Madurai Central", division: "Urban Core", turnout: "62.9%", status: "Active" }),
      createConstituency({ slug: "melur", name: "Melur", division: "Northern Belt", turnout: "70.2%", status: "Fully Registered" }),
      createConstituency({ slug: "thiruparankundram", name: "Thiruparankundram", division: "Southern Belt", turnout: "66.8%", status: "Rolls Updated" })
    ]
  }),
  createDistrict({
    slug: "tiruchirappalli",
    name: "Tiruchirappalli",
    region: "Central",
    icon: "account_balance",
    mobileTagline: "Geographic Center",
    constituencies: "9",
    mobileVoters: "1.8M",
    desktopVoters: "2.3M",
    registeredVotersLong: "2.3M+",
    totalSeats: "9",
    turnout: "79.4%",
    registrationStatus: "Active",
    lastUpdate: "May 2024",
    mobileImage: "/images/districts/tiruchirappalli-mobile.png",
    desktopImage: "/images/districts/tiruchirappalli-desktop.png",
    detailHeroImage: "/images/districts/tiruchirappalli-desktop.png",
    mobileAlt: "Tiruchirappalli civic district",
    desktopAlt: "Srirangam temple complex in Trichy surrounded by the Kaveri river and green groves",
    detailHeroAlt: "Tiruchirappalli temple and river district",
    showOnMobile: true,
    overviewText:
      "Constituency status for central Tamil Nadu's river, temple, and education corridor.",
    constituenciesList: [
      createConstituency({ slug: "srirangam", name: "Srirangam", division: "Island Zone", turnout: "68.5%", status: "Active" }),
      createConstituency({ slug: "tiruchirappalli-west", name: "Tiruchirappalli West", division: "Urban West", turnout: "61.3%", status: "Fully Registered" }),
      createConstituency({ slug: "lalgudi", name: "Lalgudi", division: "Rural Ring", turnout: "72.1%", status: "Rolls Updated" })
    ]
  }),
  createDistrict({
    slug: "salem",
    name: "Salem",
    region: "West",
    icon: "landscape",
    mobileTagline: "Hill Corridor",
    constituencies: "11",
    mobileVoters: "2.4M",
    desktopVoters: "2.9M",
    registeredVotersLong: "2.9M+",
    totalSeats: "11",
    turnout: "77.9%",
    registrationStatus: "Active",
    lastUpdate: "May 2024",
    mobileImage: "/images/districts/salem-desktop.png",
    desktopImage: "/images/districts/salem-desktop.png",
    detailHeroImage: "/images/districts/salem-desktop.png",
    mobileAlt: "Yercaud hills near Salem",
    desktopAlt: "Winding roads of Yercaud hills near Salem with dense green forests",
    detailHeroAlt: "Yercaud hills near Salem",
    showOnMobile: false,
    overviewText:
      "Hill, textile, and transport corridor constituencies for western Tamil Nadu.",
    constituenciesList: [
      createConstituency({ slug: "salem-north", name: "Salem North", division: "Urban North", turnout: "60.9%", status: "Active" }),
      createConstituency({ slug: "edappadi", name: "Edappadi", division: "Western Belt", turnout: "73.8%", status: "Fully Registered" }),
      createConstituency({ slug: "yercaud", name: "Yercaud", division: "Hill Zone", turnout: "69.4%", status: "Rolls Updated" })
    ]
  })
];
