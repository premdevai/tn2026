import { ArrowRight, Search } from "lucide-react";

export function HeroSection() {
  return (
    <>
      {/* Desktop Hero Section */}
      <section className="hidden md:flex relative pt-20 pb-24 px-8 overflow-hidden w-full max-w-[1400px] mx-auto min-h-[85dvh] items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
          <div className="flex flex-col items-start text-left max-w-xl">
            <div className="inline-flex items-center gap-2 py-1.5 px-3 mb-8 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-800 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Election Updates
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold text-zinc-950 tracking-tighter leading-[1.05] mb-6 font-headline">
              Vote smarter, <br className="hidden md:block"/> not harder.
            </h1>
            
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed max-w-[45ch]">
              Access real-time crowd intelligence and station data across Tamil Nadu. Skip the queue and fulfill your civic duty without the wait.
            </p>
            
            <div className="w-full relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-emerald-700 text-zinc-400">
                <Search className="w-5 h-5" />
              </div>
              <input 
                className="w-full bg-white border border-zinc-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-lg py-4 pt-5 pb-5 pl-12 pr-36 text-zinc-900 font-medium placeholder:text-zinc-400 outline-none transition-all shadow-sm" 
                placeholder="Constituency or Booth" 
                type="text" 
              />
              <button className="absolute right-2 top-2 bottom-2 bg-zinc-950 text-white px-6 rounded-lg font-medium transition-transform active:scale-95 hover:bg-zinc-800 flex items-center gap-2">
                Search
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-zinc-500 font-medium tracking-tight">
              <span>Trending:</span>
              <div className="flex gap-2">
                {["Mylapore", "Velachery", "Adyar"].map((area) => (
                  <button key={area} className="px-3 py-1 rounded-md bg-zinc-100 hover:bg-zinc-200 transition-colors text-zinc-700">
                    {area}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden bg-zinc-100 border border-zinc-200/60 shadow-xl group">
             {/* Replace with High-Quality Map/Graphic */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541887089-21a416a24be5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-multiply grayscale transition-transform duration-1000 group-hover:scale-105"></div>
             
             {/* Decorative UI Overlay */}
             <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Current Status</p>
                  <p className="font-headline font-semibold text-xl text-zinc-900">Moderate Rush</p>
                </div>
                <div className="text-right">
                   <p className="text-xs font-medium text-zinc-500 mb-1">Avg. Wait Time</p>
                   <p className="font-data font-medium text-xl text-emerald-600">14 min</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero Section (Search + Banner) */}
      <div className="md:hidden flex flex-col px-4 space-y-6 pt-6 pb-12 w-full">
        <section className="space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 py-1 px-2.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Data
            </div>
            <h2 className="font-headline text-3xl font-semibold tracking-tight text-zinc-900 leading-none">Your Vote,<br/> Informed.</h2>
            <p className="text-zinc-500 text-sm max-w-[30ch]">Tamil Nadu General Elections 2024</p>
          </div>
          <div className="relative flex items-center">
            <div className="absolute left-4 text-zinc-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              className="w-full bg-white border border-zinc-200 rounded-lg py-3.5 pl-11 pr-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-sm placeholder:text-zinc-400 font-medium outline-none transition-all shadow-sm" 
              placeholder="Search candidate or booth..." 
              type="text"
            />
          </div>
        </section>
        
        <section className="bg-zinc-950 rounded-lg p-6 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 space-y-5">
            <h3 className="font-headline text-2xl font-medium leading-tight max-w-[15ch]">
              Skip the queue. Vote fast.
            </h3>
            <button className="bg-white text-zinc-900 px-5 py-3 rounded-lg text-sm font-semibold flex w-max items-center gap-2 active:scale-95 hover:bg-zinc-100 transition-all">
              Find My Booth
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </button>
          </div>
          
          <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 pointer-events-none">
            <div className="w-full h-full border-[16px] border-white rounded-full"></div>
          </div>
        </section>
      </div>
    </>
  );
}
