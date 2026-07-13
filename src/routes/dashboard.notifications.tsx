import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Bell, CalendarCheck, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";


const items = [
  { icon: CalendarCheck, title: "Booking BK-10241 is in progress", time: "2 min ago", body: "Anita Sharma has started the morning visit for Mr. Ramesh Gupta." },
  { icon: MessageSquare, title: "New message from Rahul Mehta", time: "1 hr ago", body: "Rescheduled Friday's physiotherapy session to 5:30 PM." },
  { icon: ShieldCheck, title: "Payment receipt available", time: "Yesterday", body: "Receipt for BK-10222 (₹5,400) is ready to download." },
];

function Notifications() {
  return (
    <div className="space-y-6">
      <PageHeader title="Notifications" subtitle="Updates about your bookings, caregivers, and account." action={<Button variant="outline" className="rounded-full">Mark all as read</Button>} />
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
