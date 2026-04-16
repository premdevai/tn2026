import { BadgeCheck, MapPin, Users, HelpCircle } from "lucide-react";

const checklistItems = [
  {
    title: "Voter ID Verification",
    description: "Ensure your EPIC card is valid and linked.",
    icon: BadgeCheck,
  },
  {
    title: "Locate Your Ward",
    description: "Find your specific booth number and serial.",
    icon: MapPin,
  },
  {
    title: "Candidate Bios",
    description: "Read criminal records and asset disclosures.",
    icon: Users,
  },
  {
    title: "EVM Guide",
    description: "How to use the machine and VVPAT system.",
    icon: HelpCircle,
  }
];

export function EssentialChecklist() {
  return (
    <section className="py-8 md:py-20 bg-surface-container-low px-8 w-full border-t border-b border-border/50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-6 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-primary tracking-tight font-headline">Essential Checklist</h2>
          <p className="text-on-surface-variant hidden md:block mt-2">Don&apos;t leave home without these essentials for a smooth experience.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {checklistItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-surface rounded-lg p-4 md:p-8 flex flex-col md:items-center md:text-center space-y-3 md:space-y-0">
                <div className="w-10 h-10 md:w-auto md:h-auto bg-surface-container-lowest md:bg-transparent rounded-lg flex items-center justify-center text-secondary md:text-secondary shadow-sm md:shadow-none md:mb-4">
                  <Icon className="w-5 h-5 md:w-10 md:h-10" />
                </div>
                <h4 className="text-sm md:text-base font-bold leading-tight text-primary md:mb-2">{item.title}</h4>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed md:leading-normal tracking-wider md:tracking-normal">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
