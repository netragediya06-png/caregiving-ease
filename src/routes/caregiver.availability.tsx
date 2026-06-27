import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/caregiver/availability")({ component: Availability });

const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const slots = ["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];

function Availability() {
  return (
    <div className="space-y-8">
      <PageHeader title="Availability" subtitle="Set when families can book you for new visits."
        action={<Button className="rounded-full">Save availability</Button>}
      />

      <div className="surface-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold">Accepting new bookings</h3>
            <p className="text-sm text-muted-foreground">When off, you'll stay invisible in search.</p>
          </div>
          <Switch defaultChecked />
        </div>
      </div>

      <div className="surface-card p-6">
        <h3 className="font-display text-lg font-semibold">Weekly schedule</h3>
        <p className="text-sm text-muted-foreground">Tap a slot to toggle.</p>

        <div className="mt-5 overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[60px_repeat(7,1fr)] gap-2">
              <div></div>
              {days.map((d) => <div key={d} className="text-center text-xs font-medium text-muted-foreground">{d}</div>)}
              {slots.map((t) => (
                <Fragment key={t}>
                  <div className="text-right text-xs text-muted-foreground">{t}</div>
                  {days.map((d) => {
                    const on = (t >= "9:00" && t <= "17:00") && d !== "Sun";
                    return (
                      <button key={`${t}-${d}`} className={`h-8 rounded-md border text-[10px] transition ${on ? "border-primary bg-primary-soft text-primary" : "border-border bg-muted/40 hover:bg-muted"}`}>
                        {on ? "On" : ""}
                      </button>
                    );
                  })}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="surface-card p-6">
        <h3 className="font-display text-lg font-semibold">Block out dates</h3>
        <p className="text-sm text-muted-foreground">Mark vacation or personal days.</p>
        <div className="mt-4 flex flex-wrap items-end gap-3">
          <div className="space-y-2"><Label>From</Label><Input type="date" /></div>
          <div className="space-y-2"><Label>To</Label><Input type="date" /></div>
          <Button variant="outline">Add block</Button>
        </div>
      </div>
    </div>
  );
}
