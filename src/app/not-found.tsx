import Link from "next/link";

import { Button } from "@/components/shared/ui/button";

export default function NotFound() {
  return (
    <section className="space-y-4 py-8">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-secondary">Not found</p>
        <h1 className="text-2xl font-bold leading-tight">This page is not available</h1>
        <p className="text-sm leading-6 text-muted-foreground">
          The route is ready, but the requested record is not connected yet.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Go home</Link>
      </Button>
    </section>
  );
}
