import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { ResponsiveImage } from "@/components/shared/responsive-image";

export function NewToVotingGuide() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-8 max-w-7xl mx-auto w-full">
      {/* Desktop Version */}
      <div className="hidden md:flex bg-primary text-on-primary rounded-lg overflow-hidden flex-col md:flex-row items-center shadow-2xl">
        <div className="w-full md:w-1/2 p-12 md:p-20">
          <span className="text-tertiary-fixed font-bold uppercase tracking-widest text-sm mb-4 block">New To Voting?</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight font-headline">First-Time Voter Guide</h2>
          <p className="text-on-primary-container text-lg mb-10 leading-relaxed font-body">
            Making your voice heard is a privilege. We&apos;ve simplified the entire process from entering the booth to the indelible ink mark.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold flex items-center transition-transform active:scale-95"
              href="/guide"
            >
              Start the Guide <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button
              className="bg-surface-container-lowest bg-opacity-10 text-on-primary px-8 py-4 rounded-lg font-bold border border-white border-opacity-10 transition-all hover:bg-opacity-20"
              type="button"
            >
               Download PDF
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[400px] md:h-full min-h-[400px] relative">
          <ResponsiveImage
            alt="Democratic participation" 
            className="absolute inset-0 h-full w-full grayscale opacity-60 mix-blend-overlay" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPm2ezR_AmhyO-E3aI6Lr4UC46i6JoYcVAcA2ue95odg8RyO5bWGi3DB3GCvftYajsHJ5QgtEjVYKD-Jzb_uiYk7J7Mzd0m2vhJauX7i_hfeTbfK8x3lwPsirawWh9ee507tE9G4AJ9K6ySN6tgRsADZjWOqx94Om6mzplzhIoJnRdrCRgFbdUuzlAH9Th6hX9t12Vrp3t6fUsBEzmuqM8F5fUfGYf6LefowJjDGFW501oF_g0pPZSlA2mFuhheAhsbZGPpnnjh1cw" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden p-8 bg-tertiary-fixed rounded-lg border border-tertiary-fixed-dim/30 shadow-sm relative overflow-hidden">
        <div className="flex flex-col gap-6 relative z-10">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-white/50 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-on-tertiary-fixed" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-on-tertiary-fixed text-xl font-headline">New to voting?</h4>
              <p className="text-sm text-on-tertiary-fixed-variant leading-relaxed">
                Our comprehensive editorial guide covers everything first-time voters in Tamil Nadu need to know for the 2024 elections.
              </p>
            </div>
          </div>
          <Link
            className="bg-white hover:bg-white/90 text-on-tertiary-fixed px-6 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all w-full sm:w-max"
            href="/guide"
          >
            Read the Full Guide
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
