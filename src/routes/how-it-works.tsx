import { Link } from "react-router-dom";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, CalendarCheck, HeartHandshake, ShieldCheck, MessageSquare, Star } from "lucide-react";


const familySteps = [
  { icon: Search, title: "Tell us who needs care", body: "Create a family account and add a profile for your loved one — conditions, preferences, schedule." },
  { icon: HeartHandshake, title: "Match with a verified caregiver", body: "Browse profiles, ratings, and specialties. Pick a caregiver that fits your needs and budget." },
  { icon: CalendarCheck, title: "Book and track visits", body: "Confirm times, receive updates, and review every visit from your dashboard." },
];
const caregiverSteps = [
  { icon: ShieldCheck, title: "Apply and get verified", body: "Submit certifications, ID, and experience. Our team reviews within 3–5 business days." },
  { icon: CalendarCheck, title: "Set availability and rates", body: "Choose service areas, hours, and per-hour or live-in pricing." },
  { icon: MessageSquare, title: "Accept requests and deliver care", body: "Manage bookings, log care notes, and grow reviews from happy families." },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <section className="hero-gradient">
        <div className="container-page py-16 md:py-20">
          <Badge variant="secondary" className="rounded-full border border-border bg-card">How it works</Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">A simple, transparent care journey</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you're arranging care for a parent or joining as a healthcare professional, SilverCare gets you started in minutes.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="font-display text-2xl font-semibold">For families</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {familySteps.map((s, i) => (
            <div key={s.title} className="surface-card p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">Step {i + 1}</span>
              <span className="mt-3 grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><s.icon className="h-5 w-5" /></span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-semibold">For caregivers</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {caregiverSteps.map((s, i) => (
            <div key={s.title} className="surface-card p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">Step {i + 1}</span>
              <span className="mt-3 grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><s.icon className="h-5 w-5" /></span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="surface-card mt-16 flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-warning/15 text-warning-foreground"><Star className="h-5 w-5" /></span>
            <div>
              <h3 className="font-display text-xl font-semibold">Ready to get started?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Create your account in under 2 minutes.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" className="rounded-full"><Link to="/auth/login">Login</Link></Button>
            <Button asChild className="rounded-full"><Link to="/auth/register">Register</Link></Button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
