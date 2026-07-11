import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { helpCategories } from "@/lib/mock-data";
import {
  Sparkles, CalendarCheck, ShieldCheck, Wallet, ClipboardList, Lock,
  Search, LifeBuoy, MessageSquare, PhoneCall,
} from "lucide-react";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Center — SilverCare" },
      { name: "description", content: "Guides, FAQs, and support articles for families and caregivers on SilverCare." },
    ],
  }),
  component: HelpCenter,
});

const iconMap: Record<string, any> = { Sparkles, CalendarCheck, ShieldCheck, Wallet, ClipboardList, Lock };

function HelpCenter() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <section className="hero-gradient">
        <div className="container-page py-16 md:py-20">
          <Badge variant="secondary" className="rounded-full border border-border bg-card"><LifeBuoy className="mr-1.5 h-3 w-3 text-primary" />Help Center</Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">How can we help?</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Browse articles by topic, read our FAQ, or get in touch with our care team.</p>
          <div className="mt-8 flex max-w-xl gap-2 rounded-full border border-border bg-card p-1 pl-4 shadow-soft">
            <Search className="my-auto h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search help articles" className="border-0 bg-transparent focus-visible:ring-0" />
            <Button className="rounded-full">Search</Button>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {helpCategories.map((c) => {
            const Icon = iconMap[c.icon] ?? Sparkles;
            return (
              <div key={c.title} className="surface-card p-6 transition hover:-translate-y-0.5 hover:shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                <p className="mt-4 text-xs text-muted-foreground">{c.articles} articles</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="container-page grid gap-6 py-14 md:grid-cols-3">
          {[
            { icon: MessageSquare, title: "Chat with support", desc: "Mon–Sat, 8 AM – 9 PM", cta: "Start chat", to: "/contact" as const },
            { icon: PhoneCall, title: "Call the care team", desc: "+91 80 4718 2200", cta: "Call now", to: "/contact" as const },
            { icon: LifeBuoy, title: "Submit a request", desc: "We respond within a few hours.", cta: "Open request", to: "/support" as const },
          ].map((i) => (
            <div key={i.title} className="surface-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><i.icon className="h-5 w-5" /></span>
              <h3 className="mt-4 font-display text-lg font-semibold">{i.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
              <Button asChild variant="outline" size="sm" className="mt-4 rounded-full"><Link to={i.to}>{i.cta}</Link></Button>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-14 text-center">
        <p className="text-sm text-muted-foreground">Looking for common questions?</p>
        <Button asChild size="lg" variant="outline" className="mt-3 rounded-full"><Link to="/faq">Read the FAQ</Link></Button>
      </section>

      <SiteFooter />
    </div>
  );
}
