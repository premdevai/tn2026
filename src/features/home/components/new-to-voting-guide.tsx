import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export function NewToVotingGuide() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
      {/* Desktop Version */}
      <div className="hidden md:flex bg-zinc-950 text-white rounded-lg overflow-hidden flex-col md:flex-row shadow-xl">
        <div className="w-full md:w-[55%] p-16 md:p-24 flex flex-col justify-center">
          <span className="text-zinc-400 font-semibold uppercase tracking-widest text-xs mb-6 block border border-zinc-700/50 w-max px-3 py-1.5 rounded-full">Editorial Guide</span>
          <h2 className="text-4xl md:text-6xl font-semibold mb-8 leading-[1.05] font-headline tracking-tighter">
            Your first vote. <br/> Explained.
          </h2>
          <p className="text-zinc-400 text-xl mb-12 leading-relaxed font-medium max-w-[40ch]">
            Making your voice heard is a privilege. We&apos;ve simplified the entire process—from locating your booth to verifying the indelible ink.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="bg-white text-zinc-950 hover:bg-zinc-100 px-8 py-4 rounded-lg font-semibold flex items-center transition-transform active:scale-95"
              href="/guide"
            >
              Read the Guide <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button
              className="bg-zinc-900 text-white px-8 py-4 rounded-lg font-semibold border border-zinc-800 transition-all hover:bg-zinc-800"
              type="button"
            >
               Download PDF
            </button>
          </div>
        </div>
        <div className="w-full md:w-[45%] h-[400px] md:h-auto relative">
          <div className="absolute inset-0 bg-surface-container-high">
            {/* The actual image would go here. For now we use the Unsplash placeholder logic, but completely transformed. */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity grayscale"></div>
          </div>
          {/* Edge Refraction / Fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent"></div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden p-8 bg-zinc-950 rounded-lg relative overflow-hidden group">
        <div className="flex flex-col gap-8 relative z-10">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
              <BookOpen className="w-5 h-5 text-zinc-200" />
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-3xl font-headline tracking-tighter">Your first vote. <br/> Explained.</h4>
              <p className="text-base text-zinc-400 leading-relaxed font-medium max-w-[30ch]">
                Our comprehensive editorial guide covers everything first-time voters need to know.
              </p>
            </div>
          </div>
          <Link
            className="bg-white text-zinc-950 px-6 py-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all w-full"
            href="/guide"
          >
            Read Full Guide
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
      </div>
    </section>
  );
}
