import { Search } from "lucide-react";
import { Input } from "@/components/shared/ui/input";

export function SearchSection() {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="font-headline text-2xl font-bold tracking-tight text-primary">Your Vote, Informed.</h2>
        <p className="text-on-surface-variant text-sm">Tamil Nadu General Elections 2024</p>
      </div>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-on-surface-variant z-10 pointer-events-none">
          <Search className="h-5 w-5 opacity-60" />
        </div>
        <Input 
          className="w-full bg-surface-container-high border-none rounded-lg py-6 pl-12 pr-4 focus-visible:ring-2 focus-visible:ring-primary/20 text-sm placeholder:text-on-surface-variant/60" 
          placeholder="Search candidates or booths..." 
          type="text"
        />
      </div>
    </section>
  );
}
