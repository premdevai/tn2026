import type { Constituency, District } from "@/lib/schemas";
import scrapedCandidates from "./scraped-candidates.json";
import scrapedBooths from "./scraped-booths.json";

function createConstituency(
  overrides: Partial<Constituency> & Pick<Constituency, "slug" | "name" | "division" | "turnout" | "status" | "assemblyNumber">
): Constituency {
  // Try to find matching candidates/booths from the scraped JSON databases
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const localCandidates = (scrapedCandidates as any[]).filter(
    (c) => c.acName.toLowerCase() === overrides.name.toLowerCase()
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const localBooths = (scrapedBooths as any[]).filter(
    (b) => b.acName.toLowerCase() === overrides.name.toLowerCase()
  );

  return {
    tag: "Official",
    tagTone: "official",
    thumbnail: "/images/districts/mylapore-thumb.png",
    thumbnailAlt: "Constituency placeholder",
    mapMobile: "/images/districts/mylapore-map-mobile.png",
    mapDesktop: "/images/districts/mylapore-map-desktop.png",
    assignedStation: "TBD",
    // Use scraped data if available, fallback to dummy defaults to prevent UI breaking
    booths: localBooths.length > 0 ? localBooths.map(b => ({
      name: b.pollingStationLocation.split(',')[0],
      detail: `Part ${b.partNo} • ${b.pollingStationLocation}`,
      icon: "school",
      tone: "medium",
      waitLabel: "TBD Wait",
      actionLabel: "View"
    })) : [
      {
        name: "TBD Booth",
        detail: "TBD",
        icon: "school",
        tone: "low",
        waitLabel: "TBD",
        actionLabel: "TBD"
      }
    ],
    candidates: localCandidates.length > 0 ? localCandidates.map(c => ({
      name: c.candidateName,
      party: c.partyAffiliation,
      mobileParty: c.partyAffiliation,
      symbolIcon: "how_to_vote",
      mobileImage: "/images/districts/krishnamurthy-mobile.png",
      desktopImage: "/images/districts/krishnamurthy-desktop.png",
      imageAlt: c.candidateName,
      mobileEducation: "TBD",
      mobileAssets: "TBD",
      desktopEducation: "TBD",
      desktopAssets: "TBD",
      accent: "primary" as const
    })) : [
      {
        name: "TBD Candidate",
        party: "TBD Party",
        mobileParty: "TBD",
        symbolIcon: "account_balance",
        mobileImage: "/images/districts/krishnamurthy-mobile.png",
        desktopImage: "/images/districts/krishnamurthy-desktop.png",
        imageAlt: "Candidate",
        mobileEducation: "TBD",
        mobileAssets: "TBD",
        desktopEducation: "TBD",
        desktopAssets: "TBD",
        accent: "primary" as const
      }
    ],
    ...overrides
  };
}

function createDistrict(overrides: District): District {
  return overrides;
}

export const districts: District[] = [
  createDistrict({
    slug: "ariyalur",
    name: "Ariyalur",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "2",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "2",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Ariyalur landscape",
    desktopAlt: "Ariyalur landscape",
    detailHeroAlt: "Ariyalur landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Ariyalur.",
    constituenciesList: [
      createConstituency({
        slug: "ariyalur",
        name: "Ariyalur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "149"
      }),
      createConstituency({
        slug: "jayankondam",
        name: "Jayankondam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "150"
      }),
    ]
  }),
  createDistrict({
    slug: "chengalpattu",
    name: "Chengalpattu",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "7",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "7",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Chengalpattu landscape",
    desktopAlt: "Chengalpattu landscape",
    detailHeroAlt: "Chengalpattu landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Chengalpattu.",
    constituenciesList: [
      createConstituency({
        slug: "chengalpattu",
        name: "Chengalpattu",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "32"
      }),
      createConstituency({
        slug: "cheyyur",
        name: "Cheyyur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "34"
      }),
      createConstituency({
        slug: "madurantakam",
        name: "Madurantakam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "35"
      }),
      createConstituency({
        slug: "pallavaram",
        name: "Pallavaram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "30"
      }),
      createConstituency({
        slug: "shozhinganallur",
        name: "Shozhinganallur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "27"
      }),
      createConstituency({
        slug: "tambaram",
        name: "Tambaram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "31"
      }),
      createConstituency({
        slug: "thiruporur",
        name: "Thiruporur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "33"
      }),
    ]
  }),
  createDistrict({
    slug: "chennai",
    name: "Chennai",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "16",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "16",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Chennai landscape",
    desktopAlt: "Chennai landscape",
    detailHeroAlt: "Chennai landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Chennai.",
    constituenciesList: [
      createConstituency({
        slug: "anna-nagar",
        name: "Anna Nagar",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "21"
      }),
      createConstituency({
        slug: "chepauk-thiruvallikeni",
        name: "Chepauk-Thiruvallikeni",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "19"
      }),
      createConstituency({
        slug: "dr-radhakrishnan-nagar",
        name: "Dr.Radhakrishnan Nagar",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "11"
      }),
      createConstituency({
        slug: "egmore",
        name: "Egmore",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "16"
      }),
      createConstituency({
        slug: "harbour",
        name: "Harbour",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "18"
      }),
      createConstituency({
        slug: "kolathur",
        name: "Kolathur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "13"
      }),
      createConstituency({
        slug: "mylapore",
        name: "Mylapore",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "25"
      }),
      createConstituency({
        slug: "perambur",
        name: "Perambur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "12"
      }),
      createConstituency({
        slug: "royapuram",
        name: "Royapuram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "17"
      }),
      createConstituency({
        slug: "saidapet",
        name: "Saidapet",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "23"
      }),
      createConstituency({
        slug: "thiru-vi-ka-nagar",
        name: "Thiru-Vi-Ka-Nagar",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "15"
      }),
      createConstituency({
        slug: "thiyagarayanagar",
        name: "Thiyagarayanagar",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "24"
      }),
      createConstituency({
        slug: "thousand-lights",
        name: "Thousand Lights",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "20"
      }),
      createConstituency({
        slug: "velachery",
        name: "Velachery",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "26"
      }),
      createConstituency({
        slug: "villivakkam",
        name: "Villivakkam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "14"
      }),
      createConstituency({
        slug: "virugampakkam",
        name: "Virugampakkam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "22"
      }),
    ]
  }),
  createDistrict({
    slug: "coimbatore",
    name: "Coimbatore",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "10",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "10",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Coimbatore landscape",
    desktopAlt: "Coimbatore landscape",
    detailHeroAlt: "Coimbatore landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Coimbatore.",
    constituenciesList: [
      createConstituency({
        slug: "coimbatore-north",
        name: "Coimbatore (North)",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "118"
      }),
      createConstituency({
        slug: "coimbatore-south",
        name: "Coimbatore (South)",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "120"
      }),
      createConstituency({
        slug: "kavundampalayam",
        name: "Kavundampalayam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "117"
      }),
      createConstituency({
        slug: "kinathukadavu",
        name: "Kinathukadavu",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "122"
      }),
      createConstituency({
        slug: "mettuppalayam",
        name: "Mettuppalayam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "111"
      }),
      createConstituency({
        slug: "pollachi",
        name: "Pollachi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "123"
      }),
      createConstituency({
        slug: "singanallur",
        name: "Singanallur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "121"
      }),
      createConstituency({
        slug: "sulur",
        name: "Sulur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "116"
      }),
      createConstituency({
        slug: "thondamuthur",
        name: "Thondamuthur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "119"
      }),
      createConstituency({
        slug: "valparai",
        name: "Valparai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "124"
      }),
    ]
  }),
  createDistrict({
    slug: "cuddalore",
    name: "Cuddalore",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "9",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "9",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Cuddalore landscape",
    desktopAlt: "Cuddalore landscape",
    detailHeroAlt: "Cuddalore landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Cuddalore.",
    constituenciesList: [
      createConstituency({
        slug: "bhuvanagiri",
        name: "Bhuvanagiri",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "157"
      }),
      createConstituency({
        slug: "chidambaram",
        name: "Chidambaram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "158"
      }),
      createConstituency({
        slug: "cuddalore",
        name: "Cuddalore",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "155"
      }),
      createConstituency({
        slug: "kattumannarkoil",
        name: "Kattumannarkoil",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "159"
      }),
      createConstituency({
        slug: "kurinjipadi",
        name: "Kurinjipadi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "156"
      }),
      createConstituency({
        slug: "neyveli",
        name: "Neyveli",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "153"
      }),
      createConstituency({
        slug: "panruti",
        name: "Panruti",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "154"
      }),
      createConstituency({
        slug: "tittakudi",
        name: "Tittakudi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "151"
      }),
      createConstituency({
        slug: "vriddhachalam",
        name: "Vriddhachalam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "152"
      }),
    ]
  }),
  createDistrict({
    slug: "dharmapuri",
    name: "Dharmapuri",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "5",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "5",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Dharmapuri landscape",
    desktopAlt: "Dharmapuri landscape",
    detailHeroAlt: "Dharmapuri landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Dharmapuri.",
    constituenciesList: [
      createConstituency({
        slug: "dharmapuri",
        name: "Dharmapuri",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "59"
      }),
      createConstituency({
        slug: "harur",
        name: "Harur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "61"
      }),
      createConstituency({
        slug: "palacodu",
        name: "Palacodu",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "57"
      }),
      createConstituency({
        slug: "pappireddipatti",
        name: "Pappireddipatti",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "60"
      }),
      createConstituency({
        slug: "pennagaram",
        name: "Pennagaram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "58"
      }),
    ]
  }),
  createDistrict({
    slug: "dindigul",
    name: "Dindigul",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "7",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "7",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Dindigul landscape",
    desktopAlt: "Dindigul landscape",
    detailHeroAlt: "Dindigul landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Dindigul.",
    constituenciesList: [
      createConstituency({
        slug: "athoor",
        name: "Athoor",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "129"
      }),
      createConstituency({
        slug: "dindigul",
        name: "Dindigul",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "132"
      }),
      createConstituency({
        slug: "natham",
        name: "Natham",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "131"
      }),
      createConstituency({
        slug: "nilakkottai",
        name: "Nilakkottai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "130"
      }),
      createConstituency({
        slug: "oddanchatram",
        name: "Oddanchatram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "128"
      }),
      createConstituency({
        slug: "palani",
        name: "Palani",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "127"
      }),
      createConstituency({
        slug: "vedasandur",
        name: "Vedasandur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "133"
      }),
    ]
  }),
  createDistrict({
    slug: "erode",
    name: "Erode",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "8",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "8",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Erode landscape",
    desktopAlt: "Erode landscape",
    detailHeroAlt: "Erode landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Erode.",
    constituenciesList: [
      createConstituency({
        slug: "anthiyur",
        name: "Anthiyur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "105"
      }),
      createConstituency({
        slug: "bhavani",
        name: "Bhavani",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "104"
      }),
      createConstituency({
        slug: "bhavanisagar",
        name: "Bhavanisagar",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "107"
      }),
      createConstituency({
        slug: "erode-east",
        name: "Erode (East)",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "98"
      }),
      createConstituency({
        slug: "erode-west",
        name: "Erode (West)",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "99"
      }),
      createConstituency({
        slug: "gobichettipalayam",
        name: "Gobichettipalayam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "106"
      }),
      createConstituency({
        slug: "modakkurichi",
        name: "Modakkurichi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "100"
      }),
      createConstituency({
        slug: "perundurai",
        name: "Perundurai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "103"
      }),
    ]
  }),
  createDistrict({
    slug: "kallakurichi",
    name: "Kallakurichi",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "4",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "4",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Kallakurichi landscape",
    desktopAlt: "Kallakurichi landscape",
    detailHeroAlt: "Kallakurichi landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Kallakurichi.",
    constituenciesList: [
      createConstituency({
        slug: "kallakurichi",
        name: "Kallakurichi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "80"
      }),
      createConstituency({
        slug: "rishivandiyam",
        name: "Rishivandiyam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "78"
      }),
      createConstituency({
        slug: "sankarapuram",
        name: "Sankarapuram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "79"
      }),
      createConstituency({
        slug: "ulundurpettai",
        name: "Ulundurpettai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "77"
      }),
    ]
  }),
  createDistrict({
    slug: "kancheepuram",
    name: "Kancheepuram",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "4",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "4",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Kancheepuram landscape",
    desktopAlt: "Kancheepuram landscape",
    detailHeroAlt: "Kancheepuram landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Kancheepuram.",
    constituenciesList: [
      createConstituency({
        slug: "alandur",
        name: "Alandur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "28"
      }),
      createConstituency({
        slug: "kancheepuram",
        name: "Kancheepuram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "37"
      }),
      createConstituency({
        slug: "sriperumbudur",
        name: "Sriperumbudur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "29"
      }),
      createConstituency({
        slug: "uthiramerur",
        name: "Uthiramerur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "36"
      }),
    ]
  }),
  createDistrict({
    slug: "kanniyakumari",
    name: "Kanniyakumari",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "6",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "6",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Kanniyakumari landscape",
    desktopAlt: "Kanniyakumari landscape",
    detailHeroAlt: "Kanniyakumari landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Kanniyakumari.",
    constituenciesList: [
      createConstituency({
        slug: "colachal",
        name: "Colachal",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "231"
      }),
      createConstituency({
        slug: "kanniyakumari",
        name: "Kanniyakumari",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "229"
      }),
      createConstituency({
        slug: "killiyoor",
        name: "Killiyoor",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "234"
      }),
      createConstituency({
        slug: "nagercoil",
        name: "Nagercoil",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "230"
      }),
      createConstituency({
        slug: "padmanabhapuram",
        name: "Padmanabhapuram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "232"
      }),
      createConstituency({
        slug: "vilavancode",
        name: "Vilavancode",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "233"
      }),
    ]
  }),
  createDistrict({
    slug: "karur",
    name: "Karur",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "4",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "4",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Karur landscape",
    desktopAlt: "Karur landscape",
    detailHeroAlt: "Karur landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Karur.",
    constituenciesList: [
      createConstituency({
        slug: "aravakurichi",
        name: "Aravakurichi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "134"
      }),
      createConstituency({
        slug: "karur",
        name: "Karur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "135"
      }),
      createConstituency({
        slug: "krishnarayapuram",
        name: "Krishnarayapuram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "136"
      }),
      createConstituency({
        slug: "kulithalai",
        name: "Kulithalai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "137"
      }),
    ]
  }),
  createDistrict({
    slug: "krishnagiri",
    name: "Krishnagiri",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "6",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "6",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Krishnagiri landscape",
    desktopAlt: "Krishnagiri landscape",
    detailHeroAlt: "Krishnagiri landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Krishnagiri.",
    constituenciesList: [
      createConstituency({
        slug: "bargur",
        name: "Bargur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "52"
      }),
      createConstituency({
        slug: "hosur",
        name: "Hosur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "55"
      }),
      createConstituency({
        slug: "krishnagiri",
        name: "Krishnagiri",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "53"
      }),
      createConstituency({
        slug: "thalli",
        name: "Thalli",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "56"
      }),
      createConstituency({
        slug: "uthangarai",
        name: "Uthangarai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "51"
      }),
      createConstituency({
        slug: "veppanahalli",
        name: "Veppanahalli",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "54"
      }),
    ]
  }),
  createDistrict({
    slug: "madurai",
    name: "Madurai",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "10",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "10",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Madurai landscape",
    desktopAlt: "Madurai landscape",
    detailHeroAlt: "Madurai landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Madurai.",
    constituenciesList: [
      createConstituency({
        slug: "madurai-central",
        name: "Madurai Central",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "193"
      }),
      createConstituency({
        slug: "madurai-east",
        name: "Madurai East",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "189"
      }),
      createConstituency({
        slug: "madurai-north",
        name: "Madurai North",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "191"
      }),
      createConstituency({
        slug: "madurai-south",
        name: "Madurai South",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "192"
      }),
      createConstituency({
        slug: "madurai-west",
        name: "Madurai West",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "194"
      }),
      createConstituency({
        slug: "melur",
        name: "Melur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "188"
      }),
      createConstituency({
        slug: "sholavandan",
        name: "Sholavandan",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "190"
      }),
      createConstituency({
        slug: "thirumangalam",
        name: "Thirumangalam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "196"
      }),
      createConstituency({
        slug: "thiruparankundram",
        name: "Thiruparankundram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "195"
      }),
      createConstituency({
        slug: "usilampatti",
        name: "Usilampatti",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "197"
      }),
    ]
  }),
  createDistrict({
    slug: "mayiladuthurai",
    name: "Mayiladuthurai",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "3",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "3",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Mayiladuthurai landscape",
    desktopAlt: "Mayiladuthurai landscape",
    detailHeroAlt: "Mayiladuthurai landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Mayiladuthurai.",
    constituenciesList: [
      createConstituency({
        slug: "mayiladuthurai",
        name: "Mayiladuthurai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "161"
      }),
      createConstituency({
        slug: "poompuhar",
        name: "Poompuhar",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "162"
      }),
      createConstituency({
        slug: "sirkazhi",
        name: "Sirkazhi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "160"
      }),
    ]
  }),
  createDistrict({
    slug: "nagapattinam",
    name: "Nagapattinam",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "3",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "3",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Nagapattinam landscape",
    desktopAlt: "Nagapattinam landscape",
    detailHeroAlt: "Nagapattinam landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Nagapattinam.",
    constituenciesList: [
      createConstituency({
        slug: "kilvelur",
        name: "Kilvelur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "164"
      }),
      createConstituency({
        slug: "nagapattinam",
        name: "Nagapattinam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "163"
      }),
      createConstituency({
        slug: "vedaranyam",
        name: "Vedaranyam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "165"
      }),
    ]
  }),
  createDistrict({
    slug: "namakkal",
    name: "Namakkal",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "6",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "6",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Namakkal landscape",
    desktopAlt: "Namakkal landscape",
    detailHeroAlt: "Namakkal landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Namakkal.",
    constituenciesList: [
      createConstituency({
        slug: "kumarapalayam",
        name: "Kumarapalayam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "97"
      }),
      createConstituency({
        slug: "namakkal",
        name: "Namakkal",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "94"
      }),
      createConstituency({
        slug: "paramathi-velur",
        name: "Paramathi-Velur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "95"
      }),
      createConstituency({
        slug: "rasipuram",
        name: "Rasipuram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "92"
      }),
      createConstituency({
        slug: "senthamangalam",
        name: "Senthamangalam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "93"
      }),
      createConstituency({
        slug: "tiruchengodu",
        name: "Tiruchengodu",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "96"
      }),
    ]
  }),
  createDistrict({
    slug: "perambalur",
    name: "Perambalur",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "2",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "2",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Perambalur landscape",
    desktopAlt: "Perambalur landscape",
    detailHeroAlt: "Perambalur landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Perambalur.",
    constituenciesList: [
      createConstituency({
        slug: "kunnam",
        name: "Kunnam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "148"
      }),
      createConstituency({
        slug: "perambalur",
        name: "Perambalur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "147"
      }),
    ]
  }),
  createDistrict({
    slug: "pudukkottai",
    name: "Pudukkottai",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "6",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "6",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Pudukkottai landscape",
    desktopAlt: "Pudukkottai landscape",
    detailHeroAlt: "Pudukkottai landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Pudukkottai.",
    constituenciesList: [
      createConstituency({
        slug: "alangudi",
        name: "Alangudi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "182"
      }),
      createConstituency({
        slug: "aranthangi",
        name: "Aranthangi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "183"
      }),
      createConstituency({
        slug: "gandarvakkottai",
        name: "Gandarvakkottai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "178"
      }),
      createConstituency({
        slug: "pudukkottai",
        name: "Pudukkottai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "180"
      }),
      createConstituency({
        slug: "thirumayam",
        name: "Thirumayam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "181"
      }),
      createConstituency({
        slug: "viralimalai",
        name: "Viralimalai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "179"
      }),
    ]
  }),
  createDistrict({
    slug: "ramanathapuram",
    name: "Ramanathapuram",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "4",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "4",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Ramanathapuram landscape",
    desktopAlt: "Ramanathapuram landscape",
    detailHeroAlt: "Ramanathapuram landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Ramanathapuram.",
    constituenciesList: [
      createConstituency({
        slug: "mudhukulathur",
        name: "Mudhukulathur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "212"
      }),
      createConstituency({
        slug: "paramakudi",
        name: "Paramakudi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "209"
      }),
      createConstituency({
        slug: "ramanathapuram",
        name: "Ramanathapuram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "211"
      }),
      createConstituency({
        slug: "tiruvadanai",
        name: "Tiruvadanai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "210"
      }),
    ]
  }),
  createDistrict({
    slug: "ranipet",
    name: "Ranipet",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "4",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "4",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Ranipet landscape",
    desktopAlt: "Ranipet landscape",
    detailHeroAlt: "Ranipet landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Ranipet.",
    constituenciesList: [
      createConstituency({
        slug: "arakkonam",
        name: "Arakkonam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "38"
      }),
      createConstituency({
        slug: "arcot",
        name: "Arcot",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "42"
      }),
      createConstituency({
        slug: "ranipet",
        name: "Ranipet",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "41"
      }),
      createConstituency({
        slug: "sholinghur",
        name: "Sholinghur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "39"
      }),
    ]
  }),
  createDistrict({
    slug: "salem",
    name: "Salem",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "11",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "11",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Salem landscape",
    desktopAlt: "Salem landscape",
    detailHeroAlt: "Salem landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Salem.",
    constituenciesList: [
      createConstituency({
        slug: "attur",
        name: "Attur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "82"
      }),
      createConstituency({
        slug: "edappadi",
        name: "Edappadi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "86"
      }),
      createConstituency({
        slug: "gangavalli",
        name: "Gangavalli",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "81"
      }),
      createConstituency({
        slug: "mettur",
        name: "Mettur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "85"
      }),
      createConstituency({
        slug: "omalur",
        name: "Omalur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "84"
      }),
      createConstituency({
        slug: "salem-north",
        name: "Salem (North)",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "89"
      }),
      createConstituency({
        slug: "salem-south",
        name: "Salem (South)",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "90"
      }),
      createConstituency({
        slug: "salem-west",
        name: "Salem (West)",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "88"
      }),
      createConstituency({
        slug: "sankari",
        name: "Sankari",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "87"
      }),
      createConstituency({
        slug: "veerapandi",
        name: "Veerapandi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "91"
      }),
      createConstituency({
        slug: "yercaud",
        name: "Yercaud",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "83"
      }),
    ]
  }),
  createDistrict({
    slug: "sivaganga",
    name: "Sivaganga",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "4",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "4",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Sivaganga landscape",
    desktopAlt: "Sivaganga landscape",
    detailHeroAlt: "Sivaganga landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Sivaganga.",
    constituenciesList: [
      createConstituency({
        slug: "karaikudi",
        name: "Karaikudi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "184"
      }),
      createConstituency({
        slug: "manamadurai",
        name: "Manamadurai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "187"
      }),
      createConstituency({
        slug: "sivaganga",
        name: "Sivaganga",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "186"
      }),
      createConstituency({
        slug: "tiruppattur",
        name: "Tiruppattur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "185"
      }),
    ]
  }),
  createDistrict({
    slug: "tenkasi",
    name: "Tenkasi",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "5",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "5",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Tenkasi landscape",
    desktopAlt: "Tenkasi landscape",
    detailHeroAlt: "Tenkasi landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Tenkasi.",
    constituenciesList: [
      createConstituency({
        slug: "alangulam",
        name: "Alangulam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "223"
      }),
      createConstituency({
        slug: "kadayanallur",
        name: "Kadayanallur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "221"
      }),
      createConstituency({
        slug: "sankarankovil",
        name: "Sankarankovil",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "219"
      }),
      createConstituency({
        slug: "tenkasi",
        name: "Tenkasi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "222"
      }),
      createConstituency({
        slug: "vasudevanallur",
        name: "Vasudevanallur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "220"
      }),
    ]
  }),
  createDistrict({
    slug: "thanjavur",
    name: "Thanjavur",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "8",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "8",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Thanjavur landscape",
    desktopAlt: "Thanjavur landscape",
    detailHeroAlt: "Thanjavur landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Thanjavur.",
    constituenciesList: [
      createConstituency({
        slug: "kumbakonam",
        name: "Kumbakonam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "171"
      }),
      createConstituency({
        slug: "orathanadu",
        name: "Orathanadu",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "175"
      }),
      createConstituency({
        slug: "papanasam",
        name: "Papanasam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "172"
      }),
      createConstituency({
        slug: "pattukkottai",
        name: "Pattukkottai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "176"
      }),
      createConstituency({
        slug: "peravurani",
        name: "Peravurani",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "177"
      }),
      createConstituency({
        slug: "thanjavur",
        name: "Thanjavur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "174"
      }),
      createConstituency({
        slug: "thiruvaiyaru",
        name: "Thiruvaiyaru",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "173"
      }),
      createConstituency({
        slug: "thiruvidaimarudur",
        name: "Thiruvidaimarudur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "170"
      }),
    ]
  }),
  createDistrict({
    slug: "the-nilgiris",
    name: "The Nilgiris",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "3",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "3",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "The Nilgiris landscape",
    desktopAlt: "The Nilgiris landscape",
    detailHeroAlt: "The Nilgiris landscape",
    showOnMobile: true,
    overviewText: "Electoral info for The Nilgiris.",
    constituenciesList: [
      createConstituency({
        slug: "coonoor",
        name: "Coonoor",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "110"
      }),
      createConstituency({
        slug: "gudalur",
        name: "Gudalur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "109"
      }),
      createConstituency({
        slug: "udhagamandalam",
        name: "Udhagamandalam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "108"
      }),
    ]
  }),
  createDistrict({
    slug: "theni",
    name: "Theni",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "4",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "4",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Theni landscape",
    desktopAlt: "Theni landscape",
    detailHeroAlt: "Theni landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Theni.",
    constituenciesList: [
      createConstituency({
        slug: "andipatti",
        name: "Andipatti",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "198"
      }),
      createConstituency({
        slug: "bodinayakanur",
        name: "Bodinayakanur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "200"
      }),
      createConstituency({
        slug: "cumbum",
        name: "Cumbum",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "201"
      }),
      createConstituency({
        slug: "periyakulam",
        name: "Periyakulam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "199"
      }),
    ]
  }),
  createDistrict({
    slug: "thiruvallur",
    name: "Thiruvallur",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "10",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "10",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Thiruvallur landscape",
    desktopAlt: "Thiruvallur landscape",
    detailHeroAlt: "Thiruvallur landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Thiruvallur.",
    constituenciesList: [
      createConstituency({
        slug: "ambattur",
        name: "Ambattur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "8"
      }),
      createConstituency({
        slug: "avadi",
        name: "Avadi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "6"
      }),
      createConstituency({
        slug: "gummidipoondi",
        name: "Gummidipoondi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "1"
      }),
      createConstituency({
        slug: "madavaram",
        name: "Madavaram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "9"
      }),
      createConstituency({
        slug: "maduravoyal",
        name: "Maduravoyal",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "7"
      }),
      createConstituency({
        slug: "ponneri",
        name: "Ponneri",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "2"
      }),
      createConstituency({
        slug: "poonamallee",
        name: "Poonamallee",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "5"
      }),
      createConstituency({
        slug: "thiruvallur",
        name: "Thiruvallur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "4"
      }),
      createConstituency({
        slug: "thiruvottiyur",
        name: "Thiruvottiyur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "10"
      }),
      createConstituency({
        slug: "tiruttani",
        name: "Tiruttani",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "3"
      }),
    ]
  }),
  createDistrict({
    slug: "thiruvarur",
    name: "Thiruvarur",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "4",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "4",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Thiruvarur landscape",
    desktopAlt: "Thiruvarur landscape",
    detailHeroAlt: "Thiruvarur landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Thiruvarur.",
    constituenciesList: [
      createConstituency({
        slug: "mannargudi",
        name: "Mannargudi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "167"
      }),
      createConstituency({
        slug: "nannilam",
        name: "Nannilam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "169"
      }),
      createConstituency({
        slug: "thiruthuraipoondi",
        name: "Thiruthuraipoondi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "166"
      }),
      createConstituency({
        slug: "thiruvarur",
        name: "Thiruvarur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "168"
      }),
    ]
  }),
  createDistrict({
    slug: "thoothukudi",
    name: "Thoothukudi",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "6",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "6",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Thoothukudi landscape",
    desktopAlt: "Thoothukudi landscape",
    detailHeroAlt: "Thoothukudi landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Thoothukudi.",
    constituenciesList: [
      createConstituency({
        slug: "kovilpatti",
        name: "Kovilpatti",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "218"
      }),
      createConstituency({
        slug: "ottapidaram",
        name: "Ottapidaram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "217"
      }),
      createConstituency({
        slug: "srivaikuntam",
        name: "Srivaikuntam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "216"
      }),
      createConstituency({
        slug: "thoothukkudi",
        name: "Thoothukkudi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "214"
      }),
      createConstituency({
        slug: "tiruchendur",
        name: "Tiruchendur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "215"
      }),
      createConstituency({
        slug: "vilathikulam",
        name: "Vilathikulam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "213"
      }),
    ]
  }),
  createDistrict({
    slug: "tiruchirappalli",
    name: "Tiruchirappalli",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "9",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "9",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Tiruchirappalli landscape",
    desktopAlt: "Tiruchirappalli landscape",
    detailHeroAlt: "Tiruchirappalli landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Tiruchirappalli.",
    constituenciesList: [
      createConstituency({
        slug: "lalgudi",
        name: "Lalgudi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "143"
      }),
      createConstituency({
        slug: "manachanallur",
        name: "Manachanallur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "144"
      }),
      createConstituency({
        slug: "manapparai",
        name: "Manapparai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "138"
      }),
      createConstituency({
        slug: "musiri",
        name: "Musiri",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "145"
      }),
      createConstituency({
        slug: "srirangam",
        name: "Srirangam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "139"
      }),
      createConstituency({
        slug: "thiruverumbur",
        name: "Thiruverumbur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "142"
      }),
      createConstituency({
        slug: "thuraiyur",
        name: "Thuraiyur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "146"
      }),
      createConstituency({
        slug: "tiruchirappalli-east",
        name: "Tiruchirappalli (East)",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "141"
      }),
      createConstituency({
        slug: "tiruchirappalli-west",
        name: "Tiruchirappalli (West)",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "140"
      }),
    ]
  }),
  createDistrict({
    slug: "tirunelveli",
    name: "Tirunelveli",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "5",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "5",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Tirunelveli landscape",
    desktopAlt: "Tirunelveli landscape",
    detailHeroAlt: "Tirunelveli landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Tirunelveli.",
    constituenciesList: [
      createConstituency({
        slug: "ambasamudram",
        name: "Ambasamudram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "225"
      }),
      createConstituency({
        slug: "nanguneri",
        name: "Nanguneri",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "227"
      }),
      createConstituency({
        slug: "palayamkottai",
        name: "Palayamkottai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "226"
      }),
      createConstituency({
        slug: "radhapuram",
        name: "Radhapuram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "228"
      }),
      createConstituency({
        slug: "tirunelveli",
        name: "Tirunelveli",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "224"
      }),
    ]
  }),
  createDistrict({
    slug: "tirupathur",
    name: "Tirupathur",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "4",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "4",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Tirupathur landscape",
    desktopAlt: "Tirupathur landscape",
    detailHeroAlt: "Tirupathur landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Tirupathur.",
    constituenciesList: [
      createConstituency({
        slug: "ambur",
        name: "Ambur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "48"
      }),
      createConstituency({
        slug: "jolarpet",
        name: "Jolarpet",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "49"
      }),
      createConstituency({
        slug: "tirupattur",
        name: "Tirupattur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "50"
      }),
      createConstituency({
        slug: "vaniyambadi",
        name: "Vaniyambadi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "47"
      }),
    ]
  }),
  createDistrict({
    slug: "tiruppur",
    name: "Tiruppur",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "8",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "8",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Tiruppur landscape",
    desktopAlt: "Tiruppur landscape",
    detailHeroAlt: "Tiruppur landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Tiruppur.",
    constituenciesList: [
      createConstituency({
        slug: "avanashi",
        name: "Avanashi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "112"
      }),
      createConstituency({
        slug: "dharapuram",
        name: "Dharapuram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "101"
      }),
      createConstituency({
        slug: "kangayam",
        name: "Kangayam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "102"
      }),
      createConstituency({
        slug: "madathukulam",
        name: "Madathukulam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "126"
      }),
      createConstituency({
        slug: "palladam",
        name: "Palladam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "115"
      }),
      createConstituency({
        slug: "tiruppur-north",
        name: "Tiruppur (North)",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "113"
      }),
      createConstituency({
        slug: "tiruppur-south",
        name: "Tiruppur (South)",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "114"
      }),
      createConstituency({
        slug: "udumalaipettai",
        name: "Udumalaipettai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "125"
      }),
    ]
  }),
  createDistrict({
    slug: "tiruvannamalai",
    name: "Tiruvannamalai",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "8",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "8",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Tiruvannamalai landscape",
    desktopAlt: "Tiruvannamalai landscape",
    detailHeroAlt: "Tiruvannamalai landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Tiruvannamalai.",
    constituenciesList: [
      createConstituency({
        slug: "arani",
        name: "Arani",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "67"
      }),
      createConstituency({
        slug: "chengam",
        name: "Chengam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "62"
      }),
      createConstituency({
        slug: "cheyyar",
        name: "Cheyyar",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "68"
      }),
      createConstituency({
        slug: "kalasapakkam",
        name: "Kalasapakkam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "65"
      }),
      createConstituency({
        slug: "kilpennathur",
        name: "Kilpennathur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "64"
      }),
      createConstituency({
        slug: "polur",
        name: "Polur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "66"
      }),
      createConstituency({
        slug: "tiruvannamalai",
        name: "Tiruvannamalai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "63"
      }),
      createConstituency({
        slug: "vandavasi",
        name: "Vandavasi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "69"
      }),
    ]
  }),
  createDistrict({
    slug: "vellore",
    name: "Vellore",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "5",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "5",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Vellore landscape",
    desktopAlt: "Vellore landscape",
    detailHeroAlt: "Vellore landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Vellore.",
    constituenciesList: [
      createConstituency({
        slug: "anaikattu",
        name: "Anaikattu",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "44"
      }),
      createConstituency({
        slug: "gudiyattam",
        name: "Gudiyattam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "46"
      }),
      createConstituency({
        slug: "katpadi",
        name: "Katpadi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "40"
      }),
      createConstituency({
        slug: "kilvaithinankuppam",
        name: "Kilvaithinankuppam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "45"
      }),
      createConstituency({
        slug: "vellore",
        name: "Vellore",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "43"
      }),
    ]
  }),
  createDistrict({
    slug: "viluppuram",
    name: "Viluppuram",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "7",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "7",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Viluppuram landscape",
    desktopAlt: "Viluppuram landscape",
    detailHeroAlt: "Viluppuram landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Viluppuram.",
    constituenciesList: [
      createConstituency({
        slug: "gingee",
        name: "Gingee",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "70"
      }),
      createConstituency({
        slug: "mailam",
        name: "Mailam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "71"
      }),
      createConstituency({
        slug: "tindivanam",
        name: "Tindivanam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "72"
      }),
      createConstituency({
        slug: "tirukkoyilur",
        name: "Tirukkoyilur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "76"
      }),
      createConstituency({
        slug: "vanur",
        name: "Vanur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "73"
      }),
      createConstituency({
        slug: "vikravandi",
        name: "Vikravandi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "75"
      }),
      createConstituency({
        slug: "viluppuram",
        name: "Viluppuram",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "74"
      }),
    ]
  }),
  createDistrict({
    slug: "virudhunagar",
    name: "Virudhunagar",
    region: "Unknown", // ECI does not provide region
    icon: "location_city", // ECI does not provide icon
    mobileTagline: "District in Tamil Nadu",
    constituencies: "7",
    mobileVoters: "TBD", // ECI does not provide live aggregate voters here
    desktopVoters: "TBD",
    registeredVotersLong: "TBD",
    totalSeats: "7",
    turnout: "TBD", // ECI does not provide turnout here
    registrationStatus: "Active",
    lastUpdate: "2024",
    mobileImage: "/images/districts/chennai-mobile.png",
    desktopImage: "/images/districts/chennai-desktop.png",
    detailHeroImage: "/images/districts/chennai-district-hero.png",
    mobileAlt: "Virudhunagar landscape",
    desktopAlt: "Virudhunagar landscape",
    detailHeroAlt: "Virudhunagar landscape",
    showOnMobile: true,
    overviewText: "Electoral info for Virudhunagar.",
    constituenciesList: [
      createConstituency({
        slug: "aruppukkottai",
        name: "Aruppukkottai",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "207"
      }),
      createConstituency({
        slug: "rajapalayam",
        name: "Rajapalayam",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "202"
      }),
      createConstituency({
        slug: "sattur",
        name: "Sattur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "204"
      }),
      createConstituency({
        slug: "sivakasi",
        name: "Sivakasi",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "205"
      }),
      createConstituency({
        slug: "srivilliputhur",
        name: "Srivilliputhur",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "203"
      }),
      createConstituency({
        slug: "tiruchuli",
        name: "Tiruchuli",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "208"
      }),
      createConstituency({
        slug: "virudhunagar",
        name: "Virudhunagar",
        division: "Unknown", // ECI does not provide sub-division
        turnout: "TBD", // API provides turnout elsewhere
        status: "Active",
        assemblyNumber: "206"
      }),
    ]
  }),
];