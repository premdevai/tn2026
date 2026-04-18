import { BadgeCheck, MapPin, Users, HelpCircle } from "lucide-react";

const checklistItems = [
  {
    title: "Voter ID Verification",
    description: "Ensure your EPIC card is valid and linked. Carry a backup ID.",
    icon: BadgeCheck,
  },
  {
    title: "Locate Your Ward",
    description: "Pinpoint your exact booth and serial number before arriving.",
    icon: MapPin,
  },
  {
    title: "Candidate Intelligence",
    description: "Read criminal records and asset disclosures.",
    icon: Users,
  },
  {
    title: "EVM Guide",
    description: "Master the VVPAT system to ensure your vote is correctly cast.",
    icon: HelpCircle,
  }
];

export function EssentialChecklist() {
  return (
    <section className="py-16 md:py-32 w-full border-t border-zinc-200/50 bg-white">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          
          <div className="max-w-md">
             <div className="w-16 h-1 bg-zinc-950 mb-8 rounded-full"></div>
             <h2 className="text-3xl md:text-5xl font-semibold text-zinc-950 tracking-tighter font-headline mb-6 leading-[1.1]">
               Don&apos;t arrive <br/> empty-handed.
             </h2>
             <p className="text-zinc-500 text-lg leading-relaxed font-medium">
               Complete these four essential steps before heading to the polling station. Prepared voters save time and prevent issues at the booth.
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {checklistItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col group">
                  <div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-950 mb-6 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-semibold leading-tight text-zinc-950 mb-3">{item.title}</h4>
                  <p className="text-base text-zinc-500 leading-relaxed font-medium max-w-[30ch]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
