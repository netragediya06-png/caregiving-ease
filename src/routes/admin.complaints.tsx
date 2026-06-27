import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/admin/complaints")({ component: Complaints });

const items = [
  { id: "CMP-441", by: "Sharma family", against: "Anita Sharma", subject: "Late arrival on Nov 22", priority: "Low", status: "Open", at: "2h ago" },
  { id: "CMP-440", by: "Khanna household", against: "Vikram Joshi", subject: "Missed home visit", priority: "High", status: "Investigating", at: "5h ago" },
  { id: "CMP-438", by: "Bose family", against: "Meera Iyer", subject: "Billing discrepancy", priority: "Medium", status: "Open", at: "1d ago" },
  { id: "CMP-432", by: "Iyer family", against: "Sanjay Patel", subject: "Care notes incomplete", priority: "Low", status: "Resolved", at: "3d ago" },
];

const pri: Record<string,string> = { High:"bg-destructive/10 text-destructive", Medium:"bg-warning/15 text-warning-foreground", Low:"bg-muted text-muted-foreground" };
const st: Record<string,string> = { Open:"bg-warning/15 text-warning-foreground", Investigating:"bg-primary-soft text-primary", Resolved:"bg-success/10 text-success" };

function Complaints() {
  return (
    <div className="space-y-8">
      <PageHeader title="Complaints" subtitle="Resolve issues quickly and protect family trust." />
      <div className="space-y-3">
        {items.map((c) => (
          <div key={c.id} className="surface-card flex flex-col gap-4 p-5 md:flex-row md:items-center">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-warning/15 text-warning-foreground"><AlertTriangle className="h-4 w-4" /></span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold">{c.subject}</p>
                <Badge variant="secondary" className={`rounded-full ${pri[c.priority]}`}>{c.priority}</Badge>
                <Badge variant="secondary" className={`rounded-full ${st[c.status]}`}>{c.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{c.id} · by {c.by} · against {c.against} · {c.at}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="rounded-full">View thread</Button>
              <Button size="sm" className="rounded-full">Resolve</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
