import { createFileRoute } from "@tanstack/react-router";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, PhoneCall, MessageCircle, MapPin, Clock, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — SilverCare" },
      { name: "description", content: "Submit a support request or reach the SilverCare care team." },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <section className="hero-gradient">
        <div className="container-page py-14 md:py-20">
          <Badge variant="secondary" className="rounded-full border border-border bg-card">Support</Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">We're here for your family</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Reach our care team for anything — from booking help to medical escalations.</p>
        </div>
      </section>

      <section className="container-page grid gap-8 py-14 lg:grid-cols-[1fr_360px]">
        <form onSubmit={(e) => e.preventDefault()} className="surface-card space-y-4 p-6">
          <h2 className="font-display text-xl font-semibold">Submit a support request</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2"><Label>Full name</Label><Input placeholder="Anjali Rao" /></div>
            <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
            <div className="space-y-2"><Label>Phone (optional)</Label><Input placeholder="+91 98•••• ••••" /></div>
            <div className="space-y-2">
              <Label>Topic</Label>
              <Select defaultValue="booking">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="booking">Booking / scheduling</SelectItem>
                  <SelectItem value="caregiver">Caregiver issue</SelectItem>
                  <SelectItem value="billing">Billing & payments</SelectItem>
                  <SelectItem value="medical">Medical escalation</SelectItem>
                  <SelectItem value="account">Account & login</SelectItem>
                  <SelectItem value="other">Something else</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2"><Label>Subject</Label><Input placeholder="Short summary of your request" /></div>
          <div className="space-y-2"><Label>Message</Label><Textarea rows={6} placeholder="Please share as much detail as you can, including booking ID if any." /></div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="urgent" className="h-4 w-4 rounded border-border" />
            <Label htmlFor="urgent" className="text-sm font-normal">This is time-sensitive — please prioritize</Label>
          </div>
          <Button className="rounded-full">Send request</Button>
        </form>

        <aside className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "care@silvercare.in", sub: "Response within a few hours" },
            { icon: PhoneCall, label: "Phone", value: "+91 80 4718 2200", sub: "Mon–Sat, 8 AM – 9 PM IST" },
            { icon: MessageCircle, label: "WhatsApp", value: "+91 98450 12200", sub: "Chat with a care advisor" },
            { icon: MapPin, label: "Office", value: "Bengaluru, India", sub: "Indira Nagar, 100ft Rd" },
            { icon: Clock, label: "Business hours", value: "Mon–Sat 8 AM – 9 PM", sub: "Sunday: 10 AM – 4 PM" },
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
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5">
            <div className="flex items-center gap-2 text-destructive"><AlertTriangle className="h-4 w-4" /><p className="text-sm font-semibold">Medical emergency?</p></div>
            <p className="mt-2 text-sm text-muted-foreground">If your loved one needs urgent medical help, please call <strong>108</strong> (Indian emergency ambulance) immediately. SilverCare support is not a substitute for emergency services.</p>
          </div>
        </aside>
      </section>
      <SiteFooter />
    </div>
  );
}
