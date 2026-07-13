import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/caregivers", label: "Caregivers" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/help", label: "Help" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">SilverCare</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full">
            <Link to="/auth/register">Register</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 px-1">
              <Button asChild variant="outline" className="flex-1"><Link to="/auth/login">Login</Link></Button>
              <Button asChild className="flex-1"><Link to="/auth/register">Register</Link></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
