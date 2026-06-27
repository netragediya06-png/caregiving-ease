import { Link } from "@tanstack/react-router";
import { HeartPulse } from "lucide-react";
import { ReactNode } from "react";

export function AuthShell({ title, subtitle, children, side }: { title: string; subtitle?: string; children: ReactNode; side?: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 md:px-12 lg:px-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold">SilverCare</span>
        </Link>

        <div className="mx-auto my-auto w-full max-w-md py-10">
          <h1 className="font-display text-3xl font-semibold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
          <div className="mt-8">{children}</div>
        </div>

        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} SilverCare Health</p>
      </div>

      <aside className="hero-gradient relative hidden border-l border-border lg:block">
        <div className="absolute inset-0 flex flex-col justify-between p-12">
          <div className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-soft backdrop-blur">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">Trusted by families</p>
            <p className="mt-3 font-display text-2xl leading-snug">
              “The nurse assigned to Dad has been a blessing — thoughtful, skilled, and on time, every visit.”
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Anjali R. · Bengaluru</p>
          </div>
          {side ?? (
            <div className="grid grid-cols-3 gap-4">
              {[
                { v: "2,400+", l: "Verified caregivers" },
                { v: "18,500+", l: "Families served" },
                { v: "4.9 / 5", l: "Average rating" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border/70 bg-card/70 p-4 backdrop-blur">
                  <p className="font-display text-2xl font-semibold">{s.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
