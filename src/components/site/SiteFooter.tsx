import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold">SilverCare</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Verified home healthcare for India's seniors. Trusted by 18,500+ families across 32 cities.
          </p>
        </div>
        <FooterCol title="Platform" links={[
          { label: "Services", href: "/services" },
          { label: "Caregivers", href: "/caregivers" },
          { label: "How it works", href: "/how-it-works" },
        ]} />
        <FooterCol title="For you" links={[
          { label: "Login", href: "/auth/login" },
          { label: "Family signup", href: "/auth/register/family" },
          { label: "Become a caregiver", href: "/auth/register/caregiver" },
        ]} />
        <FooterCol title="Company" links={[
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Trust & safety", href: "/about" },
          { label: "Careers", href: "/about" },
        ]} />
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} SilverCare Health Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}><a href={l.href} className="transition hover:text-foreground">{l.label}</a></li>
        ))}
      </ul>
    </div>
  );
}
