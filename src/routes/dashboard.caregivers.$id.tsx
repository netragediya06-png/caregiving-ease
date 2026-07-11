import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { caregivers, sampleReviews, type Caregiver } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck, Star, MapPin, Languages, GraduationCap, ShieldCheck,
  MessageSquare, Calendar, PhoneCall, Award, Home, Heart, Clock,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InquiryDialog, CallbackDialog } from "@/components/communication/InquiryDialog";

export const Route = createFileRoute("/dashboard/caregivers/$id")({
  loader: ({ params }) => {
    const c = caregivers.find((x) => x.id === params.id);
    if (!c) throw notFound();
    return c;
  },
  component: Detail,
  notFoundComponent: () => (
    <div className="p-10 text-center"><h2 className="font-display text-2xl">Caregiver not found</h2><Link to="/dashboard/caregivers" className="text-primary hover:underline">Back to search</Link></div>
  ),
});

function Detail() {
  const c = Route.useLoaderData() as Caregiver;
  const similar = caregivers.filter((x) => x.id !== c.id && (x.role === c.role || x.city === c.city)).slice(0, 3);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Caregiver profile"
        subtitle="Review qualifications, reviews, and availability."
        action={<Button asChild variant="ghost"><Link to="/dashboard/caregivers">← Back to search</Link></Button>}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {/* Header card */}
          <div className="surface-card overflow-hidden p-0">
            <div className="hero-gradient h-24" />
            <div className="-mt-12 p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
                <Avatar className="h-24 w-24 border-4 border-card shadow-card">
                  {c.photo && <AvatarImage src={c.photo} alt={c.name} />}
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">{c.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-2xl font-semibold">{c.name}</h2>
                    {c.verified && <Badge variant="secondary" className="rounded-full bg-success/10 text-success"><BadgeCheck className="mr-1 h-3 w-3" />Verified</Badge>}
                    <Badge variant="secondary" className="rounded-full bg-primary-soft text-primary">{c.availability}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.role} · {c.experience} years experience</p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{c.city}</span>
                    <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-warning text-warning" /><span className="font-medium text-foreground">{c.rating}</span> ({c.reviews} reviews)</span>
                    <span className="flex items-center gap-1"><Languages className="h-4 w-4" />{c.languages.join(", ")}</span>
                  </div>
                </div>
                <Button size="icon" variant="outline" className="rounded-full" aria-label="Save"><Heart className="h-4 w-4" /></Button>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.bio}</p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="about" className="surface-card p-2">
            <TabsList className="bg-muted/60">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="areas">Service areas</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="verification">Verification</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6 p-5">
              <Section title="Specialties">
                <div className="flex flex-wrap gap-1.5">{c.specialties.map((s) => <Badge key={s} variant="secondary" className="rounded-full bg-muted">{s}</Badge>)}</div>
              </Section>
              <Section title="Qualifications" icon={GraduationCap}>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {c.qualifications.map((q) => <li key={q}>• {q}</li>)}
                </ul>
              </Section>
              <Section title="Certifications" icon={Award}>
                <div className="flex flex-wrap gap-1.5">
                  {c.certifications.map((cert) => <Badge key={cert} variant="secondary" className="rounded-full bg-primary-soft text-primary">{cert}</Badge>)}
                </div>
              </Section>
              <Section title="Languages" icon={Languages}>
                <p className="text-sm text-muted-foreground">{c.languages.join(" · ")}</p>
              </Section>
            </TabsContent>

            <TabsContent value="areas" className="space-y-4 p-5">
              <Section title="Primary city" icon={MapPin}>
                <p className="text-sm">{c.city}</p>
              </Section>
              <Section title="Available locations">
                <div className="flex flex-wrap gap-1.5">
                  {c.serviceAreas.map((a) => <Badge key={a} variant="secondary" className="rounded-full bg-muted">{a}</Badge>)}
                </div>
              </Section>
              <Section title="Home visit availability" icon={Home}>
                <p className="text-sm text-muted-foreground">{c.homeVisit ? "Yes — travels to your home across all listed areas." : "Clinic visits only"}</p>
              </Section>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4 p-5">
              {sampleReviews.map((r) => (
                <div key={r.n} className="rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{r.n}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">{Array.from({length:5}).map((_,i)=> <Star key={i} className={`h-3.5 w-3.5 ${i<r.r?"fill-warning text-warning":"text-muted-foreground"}`} />)}</div>
                      <span className="text-[11px] text-muted-foreground">{r.when}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{r.t}</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="verification" className="space-y-3 p-5">
              {[
                { l: "Government ID", v: "Verified" },
                { l: "Professional license", v: "Verified" },
                { l: "Background check", v: "Cleared" },
                { l: "In-person interview", v: "Passed" },
                { l: "Skills assessment", v: "Passed" },
              ].map((v) => (
                <div key={v.l} className="flex items-center justify-between rounded-xl border border-border p-4">
                  <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-success" /><p className="text-sm">{v.l}</p></div>
                  <Badge variant="secondary" className="rounded-full bg-success/10 text-success">{v.v}</Badge>
                </div>
              ))}
            </TabsContent>
          </Tabs>

          {/* Similar caregivers */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-semibold">Similar caregivers</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {similar.map((s) => (
                <Link key={s.id} to="/dashboard/caregivers/$id" params={{id:s.id}} className="surface-card group p-4 transition hover:-translate-y-0.5 hover:shadow-card">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11">
                      {s.photo && <AvatarImage src={s.photo} alt={s.name} />}
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">{s.initials}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold group-hover:text-primary">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.role}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-warning text-warning" />{s.rating}</span>
                    <span>₹{s.hourlyRate}/hr</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky booking panel */}
        <aside className="space-y-4">
          <div className="surface-card sticky top-20 p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Hourly rate</p>
            <p className="mt-1 font-display text-3xl font-semibold">₹{c.hourlyRate}<span className="text-base font-normal text-muted-foreground">/hr</span></p>
            <p className="mt-1 flex items-center gap-1 text-xs text-success"><Clock className="h-3 w-3" />{c.availability}</p>

            <div className="mt-5 space-y-3 border-t border-border pt-5">
              <Row k="Hourly" v={`₹${c.hourlyRate}`} />
              <Row k="Daily (8 hrs)" v={`₹${c.hourlyRate*8}`} />
              <Row k="Live-in (24 hrs)" v={`₹${c.hourlyRate*20}`} />
            </div>

            <Button className="mt-5 w-full rounded-full" size="lg"><Calendar className="mr-1.5 h-4 w-4" />Book service</Button>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <InquiryDialog
                caregiverName={c.name}
                trigger={<Button variant="outline" className="rounded-full"><MessageSquare className="mr-1.5 h-4 w-4" />Ask a question</Button>}
              />
              <CallbackDialog
                caregiverName={c.name}
                trigger={<Button variant="outline" className="rounded-full"><PhoneCall className="mr-1.5 h-4 w-4" />Callback</Button>}
              />
            </div>

            <p className="mt-4 rounded-lg bg-muted/60 p-3 text-[11px] leading-relaxed text-muted-foreground">
              For your safety, direct phone and email are shared only after a booking is confirmed.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Section({ title, children, icon: Icon }: { title: string; children: any; icon?: any }) {
  return (
    <div>
      <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">{Icon && <Icon className="h-4 w-4 text-primary" />}{title}</h4>
      {children}
    </div>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return <div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">{k}</span><span className="font-medium">{v}</span></div>;
}
