import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/mock-data";
import { Stethoscope, HeartHandshake, Activity, BedDouble, Brain, Flower2, ArrowRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Home healthcare services — SilverCare" },
      { name: "description", content: "Explore SilverCare's home healthcare services: nursing, elderly attendants, physiotherapy, post-hospital and dementia care." },
      { property: "og:title", content: "Home healthcare services — SilverCare" },
      { property: "og:description", content: "Verified nurses, attendants, and therapists for home-based elderly care." },
    ],
  }),
  component: ServicesPage,
});

const iconMap: Record<string, any> = { Stethoscope, HeartHandshake, Activity, BedDouble, Brain, Flower2 };

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <section className="hero-gradient">
        <div className="container-page py-16 md:py-20">
          <Badge variant="secondary" className="rounded-full border border-border bg-card">Services</Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Healthcare services, delivered at home</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Book a verified professional for hourly visits, daily attendants, or long-term live-in care.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.id} className="surface-card p-6 transition hover:-translate-y-0.5 hover:shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <p className="text-sm"><span className="text-muted-foreground">From</span> <span className="font-semibold">₹{s.from}</span>/hr</p>
                  <Button asChild size="sm" variant="ghost">
                    <Link to="/caregivers">Browse <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="surface-card mt-14 flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><ShieldCheck className="h-5 w-5" /></span>
            <div>
              <h3 className="font-display text-xl font-semibold">Every caregiver is background-verified</h3>
              <p className="mt-1 text-sm text-muted-foreground">ID, certifications, and in-person interview before joining SilverCare.</p>
            </div>
          </div>
          <Button asChild className="rounded-full"><Link to="/auth/register">Get started</Link></Button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
