import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { callbacks } from "@/lib/mock-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall, Clock } from "lucide-react";

export const Route = createFileRoute("/caregiver/callbacks")({ component: Callbacks });

const tone: Record<string, string> = {
  "Pending": "bg-warning/15 text-warning-foreground",
  "Called": "bg-success/10 text-success",
  "Missed": "bg-destructive/10 text-destructive",
};

function Callbacks() {
  return (
    <div className="space-y-6">
      <PageHeader title="Callback requests" subtitle="Families who'd like a phone conversation." />
      <div className="surface-card divide-y divide-border">
        {callbacks.map((c) => (
          <div key={c.id} className="flex flex-wrap items-center gap-4 p-5">
            <Avatar className="h-11 w-11"><AvatarFallback className="bg-muted">{c.fromInitials}</AvatarFallback></Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="font-semibold">{c.from}</p>
                <Badge variant="secondary" className={`rounded-full px-2 py-0.5 text-[11px] ${tone[c.status]}`}>{c.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{c.phoneHint} · <Clock className="inline h-3 w-3" /> {c.window}</p>
              {c.note && <p className="mt-1 text-sm text-muted-foreground">"{c.note}"</p>}
            </div>
            <span className="text-xs text-muted-foreground">{c.requestedAt}</span>
            <div className="flex gap-2">
              <Button size="sm" className="rounded-full"><PhoneCall className="mr-1.5 h-4 w-4" />Call now</Button>
              <Button size="sm" variant="outline" className="rounded-full">Mark done</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
