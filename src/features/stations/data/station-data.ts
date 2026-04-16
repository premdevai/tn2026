import { stationPageContentSchema, type StationPageContent } from "@/lib/schemas";

export const stationPageContent: StationPageContent = stationPageContentSchema.parse({
  landing: {
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJzUEe987FWqKjN5ahzNBRCnpXhAn-8Ns0YkvjCQGCaHNBcgz5Xa1Jprl-hauyXC0IIS_96EA2A0s1oQBppOPi-DZJHFJqAVbQhQRA7t8RT3FJ7qALqCtwiQ87MVr9r5WhwjgujxL9v5PLsH7Nn5IXsIzkSiAELJpRatzSQQt9lPNjP83gGNvPs65CeLhNuNybEpCGIfs4iHjQrgCfBih6CzPrN64V54HkfxdzrJT4u8k5ilwftqfFE5BH5CCHDfm0ipq4v3BhERau",
    mobileHeroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7h8aK6hZ8f5r6Vj6G7Y6Y6E8w8T9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8A9B0C1D2E3F4G5H6I7J8K9L0M1N2O3P4Q5R6S7T8U9V0W1X2Y3Z4A5B6C7D8E9F0G1H2I3J4K5L6M7N8O9P0Q1R2S3T4U5V6W7X8Y9Z0",
    benefits: [
      {
        icon: "groups",
        title: "Get real-time crowd alerts",
        description:
          "Receive push notifications when voter turnout is low so you can avoid long queues and vote comfortably."
      },
      {
        icon: "schedule",
        title: "View live wait times",
        description:
          "Estimated wait times are shaped by historical data and verified check-ins."
      },
      {
        icon: "directions",
        title: "Easy directions",
        description:
          "Accessibility mapping, parking availability, and public transit routes for your station."
      }
    ]
  },
  defaultStation: {
    id: "st-thomas-convent-school",
    name: "St. Thomas Convent School",
    address: "12, Santhome High Road, Mylapore, Chennai - 600004",
    statusLabel: "Operational & Open",
    waitLabel: "10m",
    waitMinutes: 10,
    trafficLabel: "Low Traffic",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJzUEe987FWqKjN5ahzNBRCnpXhAn-8Ns0YkvjCQGCaHNBcgz5Xa1Jprl-hauyXC0IIS_96EA2A0s1oQBppOPi-DZJHFJqAVbQhQRA7t8RT3FJ7qALqCtwiQ87MVr9r5WhwjgujxL9v5PLsH7Nn5IXsIzkSiAELJpRatzSQQt9lPNjP83gGNvPs65CeLhNuNybEpCGIfs4iHjQrgCfBih6CzPrN64V54HkfxdzrJT4u8k5ilwftqfFE5BH5CCHDfm0ipq4v3BhERau",
    mobileHeroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7h8aK6hZ8f5r6Vj6G7Y6Y6E8w8T9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8A9B0C1D2E3F4G5H6I7J8K9L0M1N2O3P4Q5R6S7T8U9V0W1X2Y3Z4A5B6C7D8E9F0G1H2I3J4K5L6M7N8O9P0Q1R2S3T4U5V6W7X8Y9Z0",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSgkYsLduGXoeKrX1THC-FBu2FeB00uEZPU3qQvjSe4beoBDCVcM1FlzMVlwmIsmz_0R2DJ0WMdncH6bnR4N7AWXkwSMCbBu_-d1pmJiM-ZD4mJPUJf_fknlrRQuFfoxSTlAGBx4pzmyNDXITFarUXrrTBSnbRF74MRgGDQKvgpeCeHCNurbNrMV-x0tdmNi-V7XAmpSetAq27Uh9lv-bsrbYr8ByLuFB8K1VZsnUA1ZaUgLIZDHaDkHt8aXJIBMBJc9MSKNCtfShs",
    facilities: [
      { icon: "umbrella", label: "Shaded Waiting Area", detail: "Available at entrance" },
      { icon: "water_drop", label: "Drinking Water", detail: "Ground-floor corridor" },
      { icon: "accessible", label: "Accessible Entry", detail: "Ramp near main gate" }
    ],
    candidates: [
      {
        name: "Dr. Anand",
        party: "National Progressive Party",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC6n0Lze68iT2R4rU2QUVobgWvptpVRpUYRkqx6PzgToee2Usg8gi08ArxuEQqN9CeVWotavNlHq_8ZTSLYzMa6GMFp3Q8YbfUOOZa50yO_2AtQro9qspAKWIrwVquqB9HNWXDNtmQZIqDdJ4xy-fl_eK6yVLXTGqMsphVf2Sxka9xpiqqQYEBZn8DyC0vUvFOASwMT1RFqCGyNMFiuZdEn_JaS67p6tlYGbfyIDFlm6XxxxrTDqS43uGWJqK6sVOyeoc2WbsMpGiNH",
        imageAlt: "Dr. Anand profile"
      },
      {
        name: "Meera Srinivasan",
        party: "Independent",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBe9izHIxtgdeT8tCUX26qfWyll6tGe7dQpDTdDLOLWgYNO6Q2m02gjLc40EBishRl5zSMkLBn02KQKu6hwc2bLtX8Mu_7E21inTmtgBA8m3S9QMD6yCu5NygpeQUfXCKCpRGbY_6jx4YzotSjqpwFP9n8eUsBSPKa0pevkJLeBnJeDsRaNw-FnFV9EH46-znft6fdvFG80tpkc_Ks5xK2Ndr2L0qPSCsTIBHQ-v01XH9Zp3EjQneE2UqySKwu5UPjO17Xxw_nB1lP0",
        imageAlt: "Meera Srinivasan profile"
      }
    ],
    nearbyStations: ["Santhome Higher Secondary", "Kapaleeshwarar Arts College"]
  }
});
