import { Clock, MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

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
    waitTime: "8 min",
    status: "Clear",
    progress: 25,
    updatedAt: "4 min ago",
  },
  {
    id: "2",
    name: "Nandanam Arts College",
    location: "Mount Road, Chennai - 600035",
    distance: "1.4 km",
    waitTime: "30 min",
    status: "Steady",
    progress: 55,
    updatedAt: "12 min ago",
  },
  {
    id: "3",
    name: "Adyar Community Center",
    location: "LB Road, Chennai - 600020",
    distance: "2.1 km",
    waitTime: "60+ min",
    status: "Busy",
    progress: 85,
    updatedAt: "2 min ago",
  }
];

export function NearbyBooths() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
      <div className="flex justify-between items-end mb-8 md:mb-12">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-zinc-950 tracking-tight md:mb-3 font-headline">Live Booth Radar</h2>
          <p className="text-zinc-500 text-base max-w-[50ch] font-medium hidden md:block">Real-time telemetry from polling stations to help you pick the perfect time to vote.</p>
        </div>
        <Link href="/map" className="flex items-center text-zinc-900 font-semibold hover:text-emerald-700 transition-colors text-sm md:text-base group">
          <span className="hidden md:inline">Explorer View</span>
          <span className="md:hidden">Map Map</span>
          <ArrowUpRight className="ml-1 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {booths.map((booth) => {
          let statusColor = "bg-emerald-500 text-white";
          let progressBg = "bg-emerald-500";
          let borderHighlight = "border-emerald-500/0 hover:border-emerald-500/30";
          
          if (booth.status === "Steady" || booth.status === "Med") {
            statusColor = "bg-amber-500 text-white";
            progressBg = "bg-amber-500";
            borderHighlight = "border-amber-500/0 hover:border-amber-500/30";
          } else if (booth.status === "Busy" || booth.status === "High") {
            statusColor = "bg-rose-500 text-white";
            progressBg = "bg-rose-500";
            borderHighlight = "border-rose-500/0 hover:border-rose-500/30";
          }

          return (
            <div key={booth.id} className={cn("bg-white rounded-lg p-6 md:p-8 shadow-sm border border-zinc-200 transition-all hover:shadow-md relative overflow-hidden group cursor-pointer", borderHighlight)}>
              
              <div className="flex justify-between items-start mb-10">
                <div className="bg-zinc-100 w-12 h-12 rounded-lg flex items-center justify-center text-zinc-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={cn("px-3 py-1 text-xs uppercase tracking-widest font-bold rounded-full", statusColor)}>
                    {booth.status}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium flex items-center gap-1">
                    {booth.distance}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-zinc-950 mb-1 leading-tight">{booth.name}</h3>
                <p className="text-sm text-zinc-500">{booth.location}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                   <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Wait Time</span>
                   <span className="font-data text-2xl font-medium text-zinc-900 tracking-tighter">{booth.waitTime}</span>
                </div>
                
                <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
                  <div className={cn("h-full rounded-full transition-all duration-1000", progressBg)} style={{ width: `${booth.progress}%` }}></div>
                </div>
                
                <div className="flex items-center text-xs text-zinc-400 font-medium pt-2">
                  <Clock className="w-3.5 h-3.5 mr-1.5 opacity-70" />
                  Updated {booth.updatedAt}
                </div>
              </div>

              {/* Hover Refraction Effect */}
              <div className="absolute inset-0 border border-white/40 pointer-events-none rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
