import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, StatCard } from "@/components/dashboard/DashboardLayout";
import { TrendingUp, Users, Wallet, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/reports")({ component: Reports });

function Reports() {
  return (
    <div className="space-y-8">
      <PageHeader title="Reports" subtitle="Platform-wide performance and growth analytics." action={<Button variant="outline" className="rounded-full">Export CSV</Button>} />

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="GMV (Nov)" value="₹34.2L" hint="+18% MoM" icon={Wallet} tone="success" />
        <StatCard label="New families" value="412" hint="+9% WoW" icon={Users} />
        <StatCard label="Repeat rate" value="68%" hint="industry avg 54%" icon={TrendingUp} tone="success" />
        <StatCard label="Avg rating" value="4.86" hint="across 1,948 visits" icon={Star} tone="warning" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="surface-card p-6">
          <h3 className="font-display text-lg font-semibold">Bookings by service</h3>
          <div className="mt-5 space-y-4">
            {[
              { label: "Elderly attendant", val: 84 },
              { label: "Registered nurse", val: 72 },
              { label: "Physiotherapy", val: 58 },
              { label: "Post-op care", val: 44 },
              { label: "Diabetes care", val: 36 },
            ].map((r) => (
              <div key={r.label}>
                <div className="flex items-center justify-between text-sm"><span>{r.label}</span><span className="text-muted-foreground">{r.val}%</span></div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{width:`${r.val}%`}} /></div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-6">
          <h3 className="font-display text-lg font-semibold">Top cities</h3>
          <div className="mt-5 space-y-4">
            {[
              { c: "Bengaluru", v: 412 },
              { c: "Mumbai", v: 384 },
              { c: "Delhi NCR", v: 366 },
              { c: "Chennai", v: 248 },
              { c: "Hyderabad", v: 196 },
            ].map((r) => (
              <div key={r.c} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                <span className="text-sm font-medium">{r.c}</span>
                <span className="text-sm text-muted-foreground">{r.v} bookings</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
