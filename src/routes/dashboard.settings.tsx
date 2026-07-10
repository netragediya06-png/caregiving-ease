import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/dashboard/settings")({ component: Settings });

function Settings() {
  return (
    <div className="space-y-8">
      <PageHeader title="Settings" subtitle="Account, notifications, and privacy preferences." />

      <div className="surface-card space-y-5 p-6">
        <h3 className="font-display text-lg font-semibold">Account</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2"><Label>Email</Label><Input defaultValue="anjali@example.com" /></div>
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
        <h3 className="font-display text-lg font-semibold">Notifications</h3>
        <div className="mt-4 space-y-4">
          {[
            { t: "Booking updates", d: "Confirmations, reschedules, and visit status." },
            { t: "Care notes", d: "New notes from your caregiver after each visit." },
            { t: "Payment receipts", d: "Emails for invoices and refunds." },
            { t: "Product updates", d: "New features and health tips." },
          ].map((r, i) => (
            <div key={r.t} className="flex items-center justify-between gap-4">
              <div><p className="text-sm font-medium">{r.t}</p><p className="text-xs text-muted-foreground">{r.d}</p></div>
              <Switch defaultChecked={i < 3} />
            </div>
          ))}
        </div>
      </div>

      <div className="surface-card p-6">
        <h3 className="font-display text-lg font-semibold">Danger zone</h3>
        <p className="mt-2 text-sm text-muted-foreground">Deactivating your account pauses all bookings.</p>
        <Button variant="outline" className="mt-4 rounded-full text-destructive">Deactivate account</Button>
      </div>
    </div>
  );
}
