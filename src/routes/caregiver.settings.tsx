import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/caregiver/settings")({ component: CgSettings });

function CgSettings() {
  return (
    <div className="space-y-8">
      <PageHeader title="Settings" subtitle="Account, payouts, and notification preferences." />

      <div className="surface-card space-y-5 p-6">
        <h3 className="font-display text-lg font-semibold">Account</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2"><Label>Email</Label><Input defaultValue="anita@example.com" /></div>
          <div className="space-y-2"><Label>Mobile number</Label><Input defaultValue="+91 98•••• ••••" /></div>
        </div>
        <Separator />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2"><Label>Current password</Label><Input type="password" placeholder="••••••••" /></div>
          <div className="space-y-2"><Label>New password</Label><Input type="password" placeholder="At least 8 characters" /></div>
        </div>
        <div className="flex justify-end"><Button className="rounded-full">Save changes</Button></div>
      </div>

      <div className="surface-card p-6">
        <h3 className="font-display text-lg font-semibold">Payout account</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-2"><Label>Bank</Label><Input defaultValue="HDFC Bank" /></div>
          <div className="space-y-2"><Label>Account number</Label><Input defaultValue="•••• •••• 4421" /></div>
          <div className="space-y-2"><Label>IFSC</Label><Input defaultValue="HDFC0001234" /></div>
          <div className="space-y-2"><Label>Account holder</Label><Input defaultValue="Anita Sharma" /></div>
        </div>
      </div>

      <div className="surface-card p-6">
        <h3 className="font-display text-lg font-semibold">Notifications</h3>
        <div className="mt-4 space-y-4">
          {[
            { t: "New booking requests", d: "SMS + email when a family sends a request." },
            { t: "Payout releases", d: "Weekly summary of your payouts." },
            { t: "Reviews", d: "Notify me when a new family review is posted." },
            { t: "Platform updates", d: "Occasional product and policy updates." },
          ].map((r, i) => (
            <div key={r.t} className="flex items-center justify-between gap-4">
              <div><p className="text-sm font-medium">{r.t}</p><p className="text-xs text-muted-foreground">{r.d}</p></div>
              <Switch defaultChecked={i < 3} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
