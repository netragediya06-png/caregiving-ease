import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/caregiver/patients")({ component: AssignedPatients });

const patients = [
  { name: "Mr. Ramesh Gupta", relation: "Family: Anjali Rao", age: 78, conditions: ["Type 2 diabetes", "Mild arthritis"], visits: 24 },
  { name: "Mrs. Lakshmi V.", relation: "Family: Anjali Rao", age: 82, conditions: ["Post-hip-replacement", "Hypertension"], visits: 12 },
  { name: "Mr. Bose", relation: "Family: Sameer Bose", age: 71, conditions: ["Cardiac recovery"], visits: 6 },
];

function AssignedPatients() {
  return (
    <div className="space-y-6">
      <PageHeader title="Assigned patients" subtitle="Patients you're currently providing care for." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {patients.map((p) => (
          <div key={p.name} className="surface-card p-5">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12"><AvatarFallback className="bg-muted">{p.name.split(" ").map(s=>s[0]).slice(0,2).join("")}</AvatarFallback></Avatar>
              <div className="min-w-0">
                <p className="truncate font-medium">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.relation}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Age {p.age} · {p.visits} visits</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.conditions.map((c) => (
                <Badge key={c} variant="secondary" className="rounded-full bg-primary-soft text-primary">{c}</Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-2 border-t border-border pt-4">
              <Button size="sm" variant="outline" className="flex-1 rounded-full">View history</Button>
              <Button size="sm" className="flex-1 rounded-full">Add care note</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
