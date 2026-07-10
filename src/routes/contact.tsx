import { createFileRoute } from "@tanstack/react-router";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, PhoneCall } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SilverCare" },
      { name: "description", content: "Get in touch with SilverCare's care team — we typically respond within a few hours." },
      { property: "og:title", content: "Contact SilverCare" },
      { property: "og:description", content: "Talk to our care team — we're here to help." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <section className="hero-gradient">
        <div className="container-page py-16 md:py-20">
          <Badge variant="secondary" className="rounded-full border border-border bg-card">Contact</Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">We're here to help</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Questions about care plans, verification, or joining as a caregiver? Send us a note.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-8 py-16 lg:grid-cols-[1fr_360px]">
        <form onSubmit={(e) => e.preventDefault()} className="surface-card space-y-4 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2"><Label>Full name</Label><Input placeholder="Anjali Rao" /></div>
            <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
          </div>
          <div className="space-y-2"><Label>Subject</Label><Input placeholder="How can we help?" /></div>
          <div className="space-y-2"><Label>Message</Label><Textarea rows={6} placeholder="Tell us a bit about your situation..." /></div>
          <Button className="rounded-full">Send message</Button>
        </form>

        <div className="space-y-4">
          {[
            { icon: PhoneCall, label: "Call us", value: "+91 80 4718 2200", sub: "Mon–Sat, 8 AM – 9 PM IST" },
            { icon: Mail, label: "Email", value: "care@silvercare.in", sub: "Response within a few hours" },
            { icon: MapPin, label: "Head office", value: "Bengaluru, India", sub: "Indira Nagar, 100ft Rd" },
          ].map((i) => (
            <div key={i.label} className="surface-card flex items-start gap-4 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><i.icon className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{i.label}</p>
                <p className="mt-1 font-medium">{i.value}</p>
                <p className="text-xs text-muted-foreground">{i.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
