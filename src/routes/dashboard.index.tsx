import { Link } from "react-router-dom";
import { PageHeader, StatCard } from "@/components/dashboard/DashboardLayout";
import { CalendarCheck, HeartPulse, Users, Wallet, ArrowRight, Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { bookings, caregivers } from "@/lib/mock-data";


const statusTone: Record<string, string> = {
  "Pending": "bg-warning/15 text-warning-foreground",
  "Confirmed": "bg-primary-soft text-primary",
  "In progress": "bg-success/15 text-success",
  "Completed": "bg-muted text-muted-foreground",
  "Cancelled": "bg-destructive/10 text-destructive",
};

function Overview() {
  return (
    <div className="space-y-8">
      <PageHeader title="Welcome back, Anjali" subtitle="Here's how care is going today."
        action={<Button asChild className="rounded-full"><Link to="/dashboard/caregivers">Book a caregiver <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active bookings" value="3" hint="2 today · 1 upcoming" icon={CalendarCheck} />
        <StatCard label="Patients" value="2" hint="Father · Mother-in-law" icon={Users} tone="success" />
        <StatCard label="This month spend" value="₹18,420" hint="vs ₹16,800 last month" icon={Wallet} tone="warning" />
        <StatCard label="Care hours" value="142h" hint="Across 28 visits" icon={HeartPulse} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="surface-card lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border p-5">
            <div><h3 className="font-display text-lg font-semibold">Upcoming visits</h3><p className="text-sm text-muted-foreground">Next 7 days</p></div>
            <Button asChild variant="ghost" size="sm"><Link to="/dashboard/bookings">View all</Link></Button>
          </div>
          <div className="divide-y divide-border">
            {bookings.slice(0, 4).map((b) => (
              <div key={b.id} className="flex items-center gap-4 p-5">
                <Avatar><AvatarFallback className="bg-primary text-primary-foreground text-xs">{b.caregiverInitials}</AvatarFallback></Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{b.caregiver} <span className="text-muted-foreground">· {b.service}</span></p>
                  <p className="text-xs text-muted-foreground">{b.schedule} · for {b.patient}</p>
                </div>
                <Badge variant="secondary" className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${statusTone[b.status]}`}>{b.status}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card">
          <div className="border-b border-border p-5"><h3 className="font-display text-lg font-semibold">Recommended for you</h3><p className="text-sm text-muted-foreground">Based on your past bookings</p></div>
          <div className="divide-y divide-border">
            {caregivers.slice(0, 3).map((c) => (
              <div key={c.id} className="flex items-center gap-3 p-4">
                <Avatar><AvatarFallback className="bg-accent text-accent-foreground text-xs">{c.initials}</AvatarFallback></Avatar>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1 truncate text-sm font-medium">{c.name} {c.verified && <BadgeCheck className="h-3.5 w-3.5 text-success" />}</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground"><Star className="h-3 w-3 fill-warning text-warning" />{c.rating} · {c.role}</p>
                </div>
                <Button asChild size="sm" variant="outline" className="rounded-full"><Link to={`/dashboard/caregivers/${c.id}`}>View</Link></Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
