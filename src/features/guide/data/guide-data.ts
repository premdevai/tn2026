import { guideContentSchema, type GuideContent } from "@/lib/schemas";

const guideImages = {
  sideLogo:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCkbfGprUsyoDOuK9Q4qv-DJ_TZFyn6Hk4kiSqx9AeRAYHlADM624glyV_ZiTy6EofDECg9V7qclCJuZjS5N3y5GVk8E3pMbT7UeLlikiygZR2zVZJPHWsfQWILN17-hDJZ5DXVclr2OBdXYKe41vOeDaLd3DB3zb9aWe0TBep_VqR4HJTbqjPJwwtYIt6l79ccyxLsE_TSoQ33YXGlPgVQOHlANUC1WWT74CmowUvosygr5zWVQztq2MWhKVkMOFeQdUpSYr1zZoiY",
  pollingStation:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCqAcpDavyghdBn0jKJAM95i42T0g5p1u4kaFRxJXllvFdQ7iOb6c7A-LtmgM-I7ALDXA0N7d9aaEWWMathB-kTdVQYKqGD2hECZ68Xq4EvN6eTrMgaf7lWiJNIs13AeGVT3f3E5g_urQYu1oJIi5ZIWioGmpMV6I-mKp5Ek_DZ9EYKkW49U5RHm_1KcE-Mrs_NgFWB6XNuHZ7iAEPaBiKRAcreKGJyV9JaBkvtvchJpmKHnRW-J7RQox7D3DTDn6pHqrOCRMmiH4q9",
  inkMark:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDExLDc-lgex-6UubMFQQoWt5cFqiQllIO8N5o4ZhTqHveF5z--0ku-o3_hqgr3gD3gK8Z5Wgu0IDoXYK_c6GJWRmTUuqW1aYl9ySRNSh688L6IOCyCYWz5hyQ1MU7tQ6KZBSWoqRJuxn65OB3YgLDMMoGmfujn9uBGmo3NBZ4drcr0jDgZhobrjo2VYyHn3Qsxd5V4mlQxPqYAd7__qujIT5GvO-yLlNO52c8ijUlvGPzUT26abFAdnmkyFS4hPk_eTmlZI2tYiu8O",
  evm:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuALzBFEhqB3QxCxvHsYgrtBl3j3g-tvbyV_P9YVBrJ0My3n2J8FObn10Z00XCj4zxFf7wrfcVNTS9vw4HE2-AE4fyfw9co2FxXVEqFk71nO297SDo77hqeUnrgGLQ1VsW3NYKGNHR2vx3rOZQSA1zanKmmcS9uib5HNqxXNWxC2bbML1P7w_7R1NAvMdtAuvXo7LalLgRwmQyvND5MHqgPXAtK2s0yZjnB1q_pCW8SGPwWI4Y9DBWT_9qYBEnFZ85k7pb_QRcEl9wcN",
  vvpat:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB0X7kUAHxSZJ8lqF-S2esifuz1LCOv2t2GFfeiZIYa39JDw7044Jto1xilMCYihVOvi6jqudX49O3MulezVVztDdZ8zjGp5gvT-xv2hGyxrCozgimu5ma-5OZd09LWWrZu0W6k7WyZ3ZhGET9ZLLG-cdx-TWDZG2U_EAo4ZjgNp0NQgWa7H2oWNkgzGoHbGs73Jio6RRvZbD3KFdRsKc5Xp6wUEEg7DrF_R3yxRtfVv_qhyZwmIhwolW1lYtFh_Hrsm-GhbOq2l_z8"
};

export const guideContent: GuideContent = guideContentSchema.parse({
  images: guideImages,
  sideNavItems: [
    { href: "#hero", icon: "home", label: "Home", active: false },
    { href: "#phase1", icon: "how_to_reg", label: "Registration", active: true },
    { href: "#phase2", icon: "person_search", label: "Candidate Info", active: false },
    { href: "#phase3", icon: "query_stats", label: "Poll Tracker", active: false },
    { href: "#faq", icon: "help", label: "Help Center", active: false }
  ],
  mobileStationSteps: [
    {
      image: guideImages.inkMark,
      alt: "Close up of a person's index finger being marked with indelible purple ink during an election",
      title: "The Ink Mark",
      description:
        "The first officer checks your ID and marks your left index finger with indelible ink."
    },
    {
      image: guideImages.evm,
      alt: "A clean modern Electronic Voting Machine interface with braille and control buttons on a neutral background",
      title: "EVM Process",
      description:
        "Enter the voting compartment and press the blue button next to your chosen candidate's symbol."
    },
    {
      image: guideImages.vvpat,
      alt: "A VVPAT machine showing a small paper slip through a glass window for verification during voting",
      title: "Verify VVPAT",
      description:
        "A slip will appear behind the glass for 7 seconds. Confirm your choice visually before it drops."
    }
  ],
  desktopStationSteps: [
    {
      icon: "edit_note",
      number: "01",
      title: "The Ink Mark",
      description:
        "The First Polling Officer verifies your name. The Second Polling Officer marks your left forefinger with indelible ink."
    },
    {
      icon: "touch_app",
      number: "02",
      title: "EVM Process",
      description:
        "Enter the voting compartment. Press the blue button next to the candidate's name/symbol of your choice on the EVM."
    },
    {
      icon: "verified",
      number: "03",
      title: "VVPAT Audit",
      description:
        "Wait for the beep. Look at the VVPAT window. A slip will appear for 7 seconds showing your selected candidate."
    }
  ],
  mobileFaqItems: [
    {
      question: "Can I use my phone inside the polling booth?",
      answer:
        "No. Mobile phones, smartwatches, and cameras are strictly prohibited inside the polling station. You may leave them with a family member or in your vehicle."
    },
    {
      question: "What if my name is not in the list?",
      answer:
        "If you have a valid Voter ID but your name isn't on the list, speak to the Presiding Officer. You might be entitled to a Challenge Vote or Tendered Vote under specific Election Commission rules."
    },
    {
      question: "I lost my Voter ID, can I still vote?",
      answer:
        "Yes. As long as your name is in the electoral roll, you can use any of the 11 alternative identification documents including Aadhaar, Passport, or MNREGA Job Card."
    }
  ],
  desktopFaqItems: [
    {
      question: "Can I use my mobile phone inside the booth?",
      answer:
        "No. Mobile phones, cameras, or any recording devices are strictly prohibited inside the polling station to maintain the secrecy of the ballot."
    },
    {
      question: "What if I don't like any candidate?",
      answer:
        "You can exercise the NOTA (None of the Above) option, which is the last button on the EVM. It records your dissent against all candidates."
    },
    {
      question: "Is there a dress code for voting?",
      answer:
        "There is no formal dress code, but it is advised to avoid wearing clothing with visible political party symbols or colors to maintain the neutrality of the polling environment."
    }
  ]
});
