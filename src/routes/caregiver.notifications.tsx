import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Bell, CalendarCheck, MessageSquare, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";


const items = [
  { icon: CalendarCheck, title: "New booking request from Mr. Sharma", time: "10 min ago", body: "Physio, 5 visits starting Mon 9 AM. Respond within 2 hours." },
  { icon: MessageSquare, title: "Family review posted", time: "1 hr ago", body: "Anjali R. left a 5-star review on your recent visit." },
  { icon: Wallet, title: "Payout of ₹18,400 released", time: "Yesterday", body: "PO-9921 has been transferred to your registered bank account." },
];

function CgNotifications() {
  return (
    <div className="space-y-6">
      <PageHeader title="Notifications" subtitle="Requests, payouts, and family messages." action={<Button variant="outline" className="rounded-full">Mark all as read</Button>} />
      <div className="surface-card divide-y divide-border">
        {items.map((n) => (
          <div key={n.title} className="flex gap-4 p-5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"><n.icon className="h-4 w-4" /></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate font-medium">{n.title}</p>
                <span className="shrink-0 text-xs text-muted-foreground">{n.time}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{n.body}</p>
            </div>
          </div>
        ))}
        <div className="p-8 text-center text-sm text-muted-foreground">
          <Bell className="mx-auto mb-2 h-5 w-5" /> You're all caught up.
        </div>
      </div>
    </div>
  );
}
