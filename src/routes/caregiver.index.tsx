import { PageHeader, StatCard } from "@/components/dashboard/DashboardLayout";
import { CalendarCheck, Star, Wallet, Clock, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


function CaregiverHome() {
  return (
    <div className="space-y-8">
      <PageHeader title="Good morning, Anita" subtitle="You have 2 visits today and 3 new requests." />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Today's visits" value="2" hint="9:00 AM · 4:00 PM" icon={CalendarCheck} />
        <StatCard label="This week" value="11" hint="44 care hours" icon={Clock} tone="success" />
        <StatCard label="Rating" value="4.9" hint="184 reviews" icon={Star} tone="warning" />
        <StatCard label="Earnings (Nov)" value="₹62,400" hint="paid out weekly" icon={Wallet} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="surface-card lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border p-5">
            <h3 className="font-display text-lg font-semibold">Today's schedule</h3>
            <Button variant="ghost" size="sm">Open calendar</Button>
          </div>
          <div className="divide-y divide-border">
            {[
              { time: "9:00 – 1:00", patient: "Mr. Ramesh Gupta", service: "Diabetes care", status: "In progress" },
              { time: "4:00 – 6:00", patient: "Mrs. Lakshmi V.", service: "Wound dressing", status: "Upcoming" },
            ].map((v) => (
              <div key={v.patient} className="flex items-center gap-4 p-5">
                <div className="w-20 shrink-0 text-right">
                  <p className="font-display text-sm font-semibold">{v.time}</p>
                  <p className="text-[11px] text-muted-foreground">today</p>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{v.patient}</p>
                  <p className="text-xs text-muted-foreground">{v.service}</p>
                </div>
                <Badge variant="secondary" className="rounded-full bg-primary-soft text-primary">{v.status}</Badge>
                <Button size="sm" className="rounded-full">Open</Button>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card">
          <div className="border-b border-border p-5"><h3 className="font-display text-lg font-semibold">New requests</h3></div>
          <div className="divide-y divide-border">
            {[
              { name: "Mr. Sharma family", svc: "Physio · 5 visits", when: "Mon 9 AM" },
              { name: "Mrs. Khanna", svc: "Daily attendant", when: "Tue 8 AM" },
              { name: "Mr. Bose", svc: "Wound dressing", when: "Wed 11 AM" },
            ].map((r) => (
              <div key={r.name} className="p-4">
                <p className="text-sm font-medium">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.svc} · {r.when}</p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" className="flex-1 rounded-full"><CheckCircle2 className="mr-1 h-3.5 w-3.5" />Accept</Button>
                  <Button size="sm" variant="outline" className="flex-1 rounded-full"><X className="mr-1 h-3.5 w-3.5" />Decline</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
