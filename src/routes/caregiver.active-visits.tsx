import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, StatCard } from "@/components/dashboard/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, PlayCircle, MapPin, PhoneCall } from "lucide-react";

export const Route = createFileRoute("/caregiver/active-visits")({ component: ActiveVisits });

const visits = [
  { patient: "Mr. Ramesh Gupta", service: "Diabetes care", start: "9:00 AM", eta: "1:00 PM", address: "Indira Nagar, Bengaluru", status: "In progress" },
  { patient: "Mrs. Lakshmi V.", service: "Wound dressing", start: "4:00 PM", eta: "6:00 PM", address: "Whitefield, Bengaluru", status: "Upcoming" },
];

function ActiveVisits() {
  return (
    <div className="space-y-8">
      <PageHeader title="Active visits" subtitle="Today's care sessions and quick actions." />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="In progress" value="1" icon={PlayCircle} tone="success" />
        <StatCard label="Upcoming today" value="1" icon={Clock} />
        <StatCard label="Completed today" value="0" icon={Clock} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {visits.map((v) => (
          <div key={v.patient} className="surface-card p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-11 w-11"><AvatarFallback className="bg-muted">{v.patient.split(" ").map(s=>s[0]).slice(0,2).join("")}</AvatarFallback></Avatar>
                <div>
                  <p className="font-medium">{v.patient}</p>
                  <p className="text-xs text-muted-foreground">{v.service}</p>
                </div>
              </div>
              <Badge variant="secondary" className={v.status === "In progress" ? "rounded-full bg-success/10 text-success" : "rounded-full bg-primary-soft text-primary"}>{v.status}</Badge>
            </div>
            <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <p className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {v.start} – {v.eta}</p>
              <p className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {v.address}</p>
            </div>
            <div className="mt-5 flex gap-2">
              <Button size="sm" className="flex-1 rounded-full">Add care note</Button>
              <Button size="sm" variant="outline" className="flex-1 rounded-full"><PhoneCall className="mr-1 h-3.5 w-3.5" /> Call family</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
