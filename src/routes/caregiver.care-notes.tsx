import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus } from "lucide-react";

export const Route = createFileRoute("/caregiver/care-notes")({ component: CareNotes });

const notes = [
  { patient: "Mr. Ramesh Gupta", date: "Nov 24, 2026 · 12:40 PM", tag: "Diabetes care", body: "Fasting glucose 118 mg/dL. Administered morning insulin. Encouraged short walk after lunch." },
  { patient: "Mrs. Lakshmi V.", date: "Nov 22, 2026 · 5:10 PM", tag: "Wound dressing", body: "Wound is healing well, no discharge. Redressed with sterile gauze. Next dressing in 48 hrs." },
  { patient: "Mr. Bose", date: "Nov 20, 2026 · 6:30 PM", tag: "Post-op nursing", body: "Vitals stable. Pain 3/10, tolerated soft diet, ambulated with walker for 10 minutes." },
];

function CareNotes() {
  return (
    <div className="space-y-6">
      <PageHeader title="Care notes" subtitle="Structured visit notes shared with families and their physicians." />

      <div className="surface-card p-5">
        <h3 className="font-display text-lg font-semibold">New note</h3>
        <div className="mt-3 space-y-3">
          <Textarea placeholder="Vitals, observations, care provided, recommendations..." rows={4} />
          <div className="flex justify-end"><Button className="rounded-full"><Plus className="mr-1 h-4 w-4" />Publish note</Button></div>
        </div>
      </div>

      <div className="surface-card divide-y divide-border">
        {notes.map((n) => (
          <div key={n.date} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{n.patient}</p>
                <p className="text-xs text-muted-foreground">{n.date}</p>
              </div>
              <Badge variant="secondary" className="rounded-full bg-primary-soft text-primary">{n.tag}</Badge>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{n.body}</p>
          </div>
        ))}
        <div className="p-8 text-center text-xs text-muted-foreground">
          <FileText className="mx-auto mb-2 h-5 w-5" /> Older notes are archived to patient records.
        </div>
      </div>
    </div>
  );
}
