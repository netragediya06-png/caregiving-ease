import { createFileRoute } from "@tanstack/react-router";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { stats } from "@/lib/mock-data";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SilverCare" },
      { name: "description", content: "SilverCare is on a mission to give India's seniors dignified, verified home healthcare." },
      { property: "og:title", content: "About SilverCare" },
      { property: "og:description", content: "Our mission is dignified, verified home healthcare for India's seniors." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <section className="hero-gradient">
        <div className="container-page py-16 md:py-24">
          <Badge variant="secondary" className="rounded-full border border-border bg-card">About us</Badge>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Care that treats every elder like family.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            SilverCare was founded in 2023 to solve the trust gap in home healthcare — pairing India's most rigorous caregiver verification with software that keeps families informed at every step.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Heart, title: "Compassion first", body: "Every interaction, from booking to a bedside visit, is designed to feel human and considerate." },
            { icon: ShieldCheck, title: "Verified & trained", body: "Multi-step verification, references, and skill assessments — no exceptions." },
            { icon: Sparkles, title: "Modern & transparent", body: "Real-time updates, transparent pricing, and no surprise fees ever." },
          ].map((v) => (
            <div key={v.title} className="surface-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><v.icon className="h-5 w-5" /></span>
              <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
