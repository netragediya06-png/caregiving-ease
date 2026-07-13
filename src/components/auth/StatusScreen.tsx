import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function StatusScreen({
  tone = "primary",
  icon,
  eyebrow,
  title,
  description,
  children,
  primary,
  secondary,
}: {
  tone?: "primary" | "success" | "warning" | "danger";
  icon: ReactNode;
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  const toneClasses = {
    primary: "bg-primary-soft text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-destructive/10 text-destructive",
  }[tone];

  return (
    <div className="hero-gradient min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center gap-2 px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold">SilverCare</span>
        </Link>
      </header>

      <main className="mx-auto flex max-w-2xl flex-col items-center px-6 pb-16 pt-6 text-center">
        <div className={cn("grid h-16 w-16 place-items-center rounded-2xl", toneClasses)}>
          {icon}
        </div>
        {eyebrow && (
          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
          {description}
        </p>

        {children && <div className="mt-8 w-full text-left">{children}</div>}

        {(primary || secondary) && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {primary && (
              <Link
                to={primary.to}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
              >
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link
                to={secondary.to}
                className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-2.5 text-sm font-medium hover:bg-accent"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
