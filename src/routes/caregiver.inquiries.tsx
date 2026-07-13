import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { inquiries } from "@/lib/mock-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MessageSquare } from "lucide-react";


const tone: Record<string, string> = {
  "New": "bg-primary-soft text-primary",
  "Responded": "bg-success/10 text-success",
  "Archived": "bg-muted text-muted-foreground",
};

function Inquiries() {
  return (
    <div className="space-y-6">
      <PageHeader title="Customer inquiries" subtitle="Questions sent to you before a booking. Reply from Messages." />
      <div className="surface-card divide-y divide-border">
        {inquiries.map((i) => (
          <div key={i.id} className="flex gap-4 p-5">
            <Avatar className="h-11 w-11"><AvatarFallback className="bg-muted">{i.fromInitials}</AvatarFallback></Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold">{i.from}</p>
                <Badge variant="secondary" className={`rounded-full px-2 py-0.5 text-[11px] ${tone[i.status]}`}>{i.status}</Badge>
                <span className="ml-auto text-xs text-muted-foreground">{i.receivedAt}</span>
              </div>
              <p className="mt-1 text-sm font-medium">{i.subject}</p>
              <p className="mt-1 text-sm text-muted-foreground">{i.message}</p>
              {i.preferredTime && (
                <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" />Preferred: {i.preferredTime}</p>
              )}
              <div className="mt-3 flex gap-2">
                <Button size="sm" className="rounded-full"><MessageSquare className="mr-1.5 h-4 w-4" />Reply</Button>
                <Button size="sm" variant="outline" className="rounded-full">Archive</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inquiries;
