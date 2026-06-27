import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, StatCard } from "@/components/dashboard/DashboardLayout";
import { Users, UserCheck, CalendarCheck, AlertTriangle, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/")({ component: AdminHome });

function AdminHome() {
  return (
    <div className="space-y-8">
      <PageHeader title="Platform overview" subtitle="Live snapshot of SilverCare operations." />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active families" value="3,284" hint="+124 this week" icon={Users} tone="success" />
        <StatCard label="Verified caregivers" value="612" hint="28 pending" icon={UserCheck} />
        <StatCard label="Bookings (Nov)" value="1,948" hint="+12% MoM" icon={CalendarCheck} />
        <StatCard label="Open complaints" value="6" hint="2 high priority" icon={AlertTriangle} tone="warning" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="surface-card lg:col-span-2 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold">Bookings trend</h3>
            <Badge variant="secondary" className="rounded-full bg-success/10 text-success"><TrendingUp className="mr-1 h-3 w-3" />+12%</Badge>
          </div>
          <div className="mt-6 flex h-48 items-end gap-3">
            {[40,52,48,64,58,72,68,80,76,88,82,96].map((h,i)=>(
              <div key={i} className="flex-1">
                <div className="rounded-t-md bg-gradient-to-t from-primary/40 to-primary" style={{height:`${h}%`}} />
                <p className="mt-2 text-center text-[10px] text-muted-foreground">W{i+1}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-6">
          <h3 className="font-display text-lg font-semibold">Verification queue</h3>
          <p className="text-sm text-muted-foreground">28 caregivers awaiting review</p>
          <div className="mt-4 space-y-3">
            {["Priya Menon","Suresh Kumar","Fatima Sheikh","Rahul Verma"].map((n)=>(
              <div key={n} className="flex items-center justify-between rounded-xl border border-border p-3">
                <div><p className="text-sm font-medium">{n}</p><p className="text-xs text-muted-foreground">Submitted today</p></div>
                <Button size="sm" variant="ghost">Review</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
