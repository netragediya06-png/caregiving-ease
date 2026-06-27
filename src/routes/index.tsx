import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Stethoscope, HeartHandshake, Activity, BedDouble, Brain, Flower2,
  Search, CalendarCheck, BadgeCheck, Star, ArrowRight, Sparkles, Quote, Clock, Wallet, PhoneCall,
} from "lucide-react";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { caregivers, services, testimonials, faqs, stats } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SilverCare — Verified home healthcare for seniors" },
      { name: "description", content: "Book verified nurses, attendants, physiotherapists, and post-hospital caregivers for your loved ones at home." },
      { property: "og:title", content: "SilverCare — Verified home healthcare for seniors" },
      { property: "og:description", content: "Book verified nurses, attendants, physiotherapists, and post-hospital caregivers for your loved ones at home." },
    ],
  }),
  component: Landing,
});

const iconMap: Record<string, any> = { Stethoscope, HeartHandshake, Activity, BedDouble, Brain, Flower2 };

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      {/* HERO */}
      <section className="hero-gradient">
        <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="secondary" className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium">
              <Sparkles className="mr-1.5 h-3 w-3 text-primary" /> Trusted home healthcare, on demand
            </Badge>
            <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight md:text-6xl">
              Compassionate care for the ones who raised us.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              SilverCare connects families with verified nurses, attendants, and physiotherapists — for hourly visits or long-term home care, anywhere in India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/dashboard/caregivers">Find a caregiver <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/auth/register/caregiver">Join as a caregiver</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Background-verified</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Visits in under 2 hrs</span>
              <span className="inline-flex items-center gap-2"><Wallet className="h-4 w-4 text-primary" /> Transparent pricing</span>
            </div>
          </div>

          {/* Visual mock card */}
          <div className="relative">
            <div className="surface-card relative p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Today's visit</p>
                  <h3 className="mt-1 font-display text-xl font-semibold">Anita Sharma · RN</h3>
                  <p className="text-sm text-muted-foreground">Diabetes care · 9:00 AM – 1:00 PM</p>
                </div>
                <Avatar className="h-12 w-12"><AvatarFallback className="bg-primary text-primary-foreground">AS</AvatarFallback></Avatar>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[{l:"Rating",v:"4.9"},{l:"Experience",v:"9 yrs"},{l:"Visits",v:"180+"}].map((m)=> (
                  <div key={m.l} className="rounded-xl bg-muted p-3">
                    <p className="font-display text-lg font-semibold">{m.v}</p>
                    <p className="text-[11px] text-muted-foreground">{m.l}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-border bg-primary-soft/60 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">Care notes · last visit</p>
                <p className="mt-1.5 text-sm">Vitals stable. Helped with morning walk and medication. Family briefed.</p>
              </div>
              <div className="mt-5 flex gap-2">
                <Button size="sm" className="flex-1 rounded-full">Message</Button>
                <Button size="sm" variant="outline" className="flex-1 rounded-full"><PhoneCall className="mr-1.5 h-3.5 w-3.5" />Call</Button>
              </div>
            </div>
            <div className="surface-card absolute -bottom-6 -left-6 hidden w-56 p-4 sm:block">
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-success" /><p className="text-xs font-medium">Identity verified</p></div>
              <p className="mt-2 text-xs text-muted-foreground">Gov ID, certifications, and background check confirmed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card/60">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-semibold">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container-page py-20 md:py-28">
        <SectionHeader eyebrow="Services" title="Care designed around your loved one" desc="From skilled nursing to gentle companionship — book the right care at the right time." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Stethoscope;
            return (
              <div key={s.id} className="surface-card group p-6 transition hover:-translate-y-0.5 hover:shadow-card">
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <p className="text-sm"><span className="text-muted-foreground">From</span> <span className="font-medium">₹{s.from}/hr</span></p>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-y border-border bg-card/40">
        <div className="container-page py-20 md:py-28">
          <SectionHeader eyebrow="How it works" title="Care at home in three calm steps" desc="A simple, transparent process — no calls, no guesswork." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Search, title: "Tell us what you need", desc: "Share your loved one's profile, schedule, and care preferences in 2 minutes." },
              { icon: BadgeCheck, title: "Match a verified caregiver", desc: "Review qualifications, ratings, and availability — choose with confidence." },
              { icon: CalendarCheck, title: "Book and stay in the loop", desc: "Track each visit, read care notes, and message your caregiver anytime." },
            ].map((s, i) => (
              <div key={s.title} className="surface-card relative overflow-hidden p-6">
                <span className="absolute right-5 top-5 font-display text-5xl font-semibold text-primary/10">{i + 1}</span>
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground"><s.icon className="h-5 w-5" /></span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CAREGIVERS */}
      <section id="caregivers" className="container-page py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader className="max-w-xl text-left" align="left" eyebrow="Featured caregivers" title="Meet a few of our care professionals" desc="Every caregiver on SilverCare is background-verified and skill-assessed." />
          <Button asChild variant="ghost" className="hidden md:inline-flex"><Link to="/dashboard/caregivers">See all <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caregivers.slice(0, 6).map((c) => (
            <div key={c.id} className="surface-card p-5">
              <div className="flex items-start gap-4">
                <Avatar className="h-14 w-14"><AvatarFallback className="bg-primary text-primary-foreground">{c.initials}</AvatarFallback></Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="truncate font-semibold">{c.name}</h3>
                    {c.verified && <BadgeCheck className="h-4 w-4 shrink-0 text-success" />}
                  </div>
                  <p className="text-xs text-muted-foreground">{c.role} · {c.city}</p>
                  <div className="mt-1 flex items-center gap-1 text-xs">
                    <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                    <span className="font-medium">{c.rating}</span>
                    <span className="text-muted-foreground">({c.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.specialties.slice(0,3).map((sp) => <Badge key={sp} variant="secondary" className="rounded-full bg-muted text-xs font-normal">{sp}</Badge>)}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <p className="text-sm"><span className="font-semibold">₹{c.hourlyRate}</span><span className="text-muted-foreground">/hr</span></p>
                <Button asChild size="sm" className="rounded-full"><Link to="/dashboard/caregivers/$id" params={{id:c.id}}>View profile</Link></Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-border bg-card/40">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader align="left" eyebrow="Why home care" title="Healing happens best at home" desc="Familiar surroundings, family nearby, and one-to-one attention — proven to improve outcomes for seniors." />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "1:1 personalized care", d: "Care plans built around your loved one's needs and routine." },
              { t: "Family in the loop", d: "Real-time visit notes, vitals, and updates after every shift." },
              { t: "Verified professionals", d: "Background checks, credentials, and ongoing training." },
              { t: "Transparent pricing", d: "Upfront rates with no surprise fees. Pay only for what you use." },
            ].map((b) => (
              <div key={b.t} className="surface-card p-5">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h4 className="mt-3 font-semibold">{b.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-20 md:py-28">
        <SectionHeader eyebrow="Loved by families" title="Real stories from real families" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="surface-card flex flex-col p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <Avatar className="h-10 w-10"><AvatarFallback className="bg-accent text-accent-foreground">{t.initials}</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-border bg-card/40">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_2fr]">
          <SectionHeader align="left" eyebrow="FAQ" title="Answers, before you ask" desc="Still curious? Reach our care team any time." />
          <Accordion type="single" collapsible className="surface-card divide-y divide-border p-2">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f-${i}`} className="border-0 px-4">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-28">
        <div className="surface-card hero-gradient relative overflow-hidden p-10 md:p-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Bring trusted care home, today.</h2>
            <p className="mt-3 text-muted-foreground">Get matched with a verified caregiver in minutes. Hourly, daily, or long-term — you choose.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full"><Link to="/auth/register/family">Get started free</Link></Button>
              <Button asChild size="lg" variant="outline" className="rounded-full"><Link to="/dashboard/caregivers">Browse caregivers</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc, align = "center", className = "" }: { eyebrow?: string; title: string; desc?: string; align?: "center" | "left"; className?: string }) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : ""} ${className}`}>
      {eyebrow && <p className="text-xs font-medium uppercase tracking-wider text-primary">{eyebrow}</p>}
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </div>
  );
}
