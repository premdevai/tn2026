import { Clock, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface BoothData {
  id: string;
  name: string;
  location: string;
  distance: string;
  waitTime: string;
  status: "Low" | "Med" | "High" | "Clear" | "Steady" | "Busy";
  progress: number;
  updatedAt: string;
}

const booths: BoothData[] = [
  {
    id: "1",
    name: "Mylapore Public School",
    location: "St. Marys Road, Chennai - 600004",
    distance: "0.8 km",
    waitTime: "8-12 mins",
    status: "Clear",
    progress: 25,
    updatedAt: "4 mins ago",
  },
  {
    id: "2",
    name: "Nandanam Arts College",
    location: "Mount Road, Chennai - 600035",
    distance: "1.4 km",
    waitTime: "30-45 mins",
    status: "Steady",
    progress: 55,
    updatedAt: "12 mins ago",
  },
  {
    id: "3",
    name: "Adyar Community Center",
    location: "LB Road, Chennai - 600020",
    distance: "2.1 km",
    waitTime: "60+ mins",
    status: "Busy",
    progress: 85,
    updatedAt: "2 mins ago",
  }
];

export function NearbyBooths() {
  return (
    <section className="py-8 md:py-20 px-6 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-end mb-8 md:mb-12">
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-primary tracking-tight md:mb-2 font-headline">Nearby Booths</h2>
          <p className="text-on-surface-variant hidden md:block text-sm">Live crowd status based on recent data from polling officials.</p>
        </div>
        <button className="flex items-center text-secondary font-bold hover:underline text-sm md:text-base">
          <span className="hidden md:inline">View Map View</span>
          <span className="md:hidden">View Map</span>
          <ArrowRight className="ml-1 w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto hide-scrollbar pb-2 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {booths.map((booth) => {
          let statusColor = "bg-secondary-container text-on-secondary-container";
          let progressBg = "bg-secondary";
          let iconBg = "bg-secondary-container text-on-secondary-container";

          if (booth.status === "Steady" || booth.status === "Med") {
            statusColor = "bg-tertiary-fixed text-on-tertiary-fixed-variant";
            progressBg = "bg-tertiary-fixed-dim";
            iconBg = "bg-tertiary-fixed text-on-tertiary-fixed-variant";
          } else if (booth.status === "Busy" || booth.status === "High") {
            statusColor = "bg-error-container text-on-error-container";
            progressBg = "bg-error";
            iconBg = "bg-error-container text-on-error-container";
          }

          return (
            <div key={booth.id} className="flex-none w-72 md:w-auto bg-surface-container-lowest rounded-lg p-5 md:p-6 shadow-sm md:transition-all md:hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", iconBg)}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className={cn("block text-xs md:text-xs font-bold uppercase tracking-widest mb-1", 
                      booth.status === "Clear" ? "text-secondary" : 
                      booth.status === "Steady" ? "text-on-tertiary-fixed-variant" : "text-on-error-container"
                  )}>Status</span>
                  <span className={cn("px-2 py-1 text-xs rounded font-bold", statusColor)}>
                    {booth.status}
                  </span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-1">{booth.name}</h3>
              <p className="text-xs md:text-sm text-on-surface-variant mb-6">{booth.location}</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs md:text-sm font-medium mb-1">
                    <span>Estimated Wait Time</span>
                    <span className={cn(
                      booth.status === "Clear" ? "text-secondary" : 
                      booth.status === "Steady" ? "text-on-tertiary-fixed-variant" : "text-error"
                    )}>{booth.waitTime}</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full", progressBg)} style={{ width: `${booth.progress}%` }}></div>
                  </div>
                </div>
                
                <div className="flex items-center text-xs md:text-xs text-outline">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  Updated {booth.updatedAt}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
