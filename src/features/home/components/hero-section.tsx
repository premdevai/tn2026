import { ArrowRight, MapPin, Search } from "lucide-react";

export function HeroSection() {
  return (
    <>
      {/* Desktop Hero Section */}
      <section className="hidden md:block relative pt-16 pb-24 px-8 overflow-hidden bg-gradient-to-b from-surface to-surface-container-low w-full">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider uppercase">
              Live Election Updates
            </span>
            <h1 className="text-6xl font-extrabold text-primary tracking-tighter leading-tight mb-6 font-headline">
              Find the best time to vote.
            </h1>
            <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">
              Real-time crowd intelligence and station data for Tamil Nadu. Skip the queue, fulfill your civic duty with ease.
            </p>
            <div className="w-full max-w-2xl bg-surface-container-lowest p-2 rounded-lg shadow-xl flex items-center space-x-3">
              <div className="flex-grow flex items-center bg-surface-container-high rounded-lg px-4 py-3">
                <MapPin className="text-outline mr-3 w-6 h-6" />
                <input 
                  className="bg-transparent border-none focus:ring-0 w-full text-on-surface font-medium placeholder:text-outline-variant outline-none" 
                  placeholder="Enter your constituency or area (e.g. Mylapore)" 
                  type="text" 
                />
              </div>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold transition-transform active:scale-95 hover:bg-primary/90">
                Search Booths
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-tertiary-fixed opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* Mobile Hero Section (Search + Banner) */}
      <div className="md:hidden flex flex-col px-6 space-y-8">
        <section className="space-y-4 pt-6">
          <div className="space-y-1">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-primary">Your Vote, Informed.</h2>
            <p className="text-on-surface-variant text-sm">Tamil Nadu General Elections 2024</p>
          </div>
          <div className="relative flex items-center">
            <div className="absolute left-4 text-on-surface-variant">
              <Search className="w-5 h-5 text-on-surface-variant/60" />
            </div>
            <input 
              className="w-full bg-surface-container-high border-none rounded-lg py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-on-surface-variant/60 outline-none" 
              placeholder="Search candidates or booths..." 
              type="text"
            />
          </div>
        </section>
        
        <section className="bg-primary rounded-lg p-6 text-on-primary relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                Live Status
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold leading-tight">
              Check your local polling station rush in real-time.
            </h3>
            <button className="bg-secondary text-on-secondary px-5 py-2.5 rounded-lg text-sm font-semibold flex w-max items-center gap-2 active:scale-95 transition-all">
              Find My Booth
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
        </section>
      </div>
    </>
  );
}
