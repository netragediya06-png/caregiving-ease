import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { caregivers } from "@/lib/mock-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Star, MapPin, Languages, GraduationCap, ShieldCheck, MessageSquare, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const c = Route.useLoaderData();
  return (
    <div className="space-y-8">
      <PageHeader title="Caregiver profile" subtitle="Review qualifications, reviews, and availability."
        action={<Button asChild variant="ghost"><Link to="/dashboard/caregivers">← Back to search</Link></Button>}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="surface-card p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Avatar className="h-20 w-20"><AvatarFallback className="bg-primary text-primary-foreground text-xl">{c.initials}</AvatarFallback></Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-2xl font-semibold">{c.name}</h2>
                  {c.verified && <Badge variant="secondary" className="rounded-full bg-success/10 text-success"><BadgeCheck className="mr-1 h-3 w-3" />Verified</Badge>}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{c.role} · {c.experience} years experience</p>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{c.city}</span>
                  <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-warning text-warning" /><span className="font-medium text-foreground">{c.rating}</span> ({c.reviews})</span>
                  <span className="flex items-center gap-1"><Languages className="h-4 w-4" />{c.languages.join(", ")}</span>
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed">{c.bio}</p>
          </div>

          <Tabs defaultValue="about" className="surface-card p-2">
            <TabsList className="bg-muted/60">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="verification">Verification</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-6 p-5">
              <Section title="Specialties">
                <div className="flex flex-wrap gap-1.5">{c.specialties.map((s) => <Badge key={s} variant="secondary" className="rounded-full bg-muted">{s}</Badge>)}</div>
              </Section>
              <Section title="Qualifications" icon={GraduationCap}>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• B.Sc. Nursing — Manipal Academy</li>
                  <li>• Certified in Geriatric Home Care (CGHC)</li>
                  <li>• BLS / First Aid certified</li>
                </ul>
              </Section>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-4 p-5">
              {[
                { n: "Anjali R.", r: 5, t: "Truly exceptional. Caring, prompt, and very skilled. Highly recommend." },
                { n: "Vikram S.", r: 5, t: "Made a huge difference in my father's recovery. Family is grateful." },
                { n: "Sunita M.", r: 4, t: "Professional and reliable. Communication could be a little faster." },
              ].map((r) => (
                <div key={r.n} className="rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{r.n}</p>
                    <div className="flex">{Array.from({length:5}).map((_,i)=> <Star key={i} className={`h-3.5 w-3.5 ${i<r.r?"fill-warning text-warning":"text-muted-foreground"}`} />)}</div>
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
              ].map((v) => (
                <div key={v.l} className="flex items-center justify-between rounded-xl border border-border p-4">
                  <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-success" /><p className="text-sm">{v.l}</p></div>
                  <Badge variant="secondary" className="rounded-full bg-success/10 text-success">{v.v}</Badge>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <aside className="space-y-4">
          <div className="surface-card sticky top-20 p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Hourly rate</p>
            <p className="mt-1 font-display text-3xl font-semibold">₹{c.hourlyRate}<span className="text-base font-normal text-muted-foreground">/hr</span></p>
            <p className="mt-1 text-xs text-success">● {c.availability}</p>

            <div className="mt-5 space-y-3 border-t border-border pt-5">
              <Row k="Hourly" v={`₹${c.hourlyRate}`} />
              <Row k="Daily (8 hrs)" v={`₹${c.hourlyRate*8}`} />
              <Row k="Live-in (24 hrs)" v={`₹${c.hourlyRate*20}`} />
            </div>

            <Button className="mt-5 w-full rounded-full" size="lg"><Calendar className="mr-1.5 h-4 w-4" />Book a visit</Button>
            <Button variant="outline" className="mt-2 w-full rounded-full"><MessageSquare className="mr-1.5 h-4 w-4" />Message</Button>
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
