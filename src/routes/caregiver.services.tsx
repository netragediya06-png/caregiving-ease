import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/caregiver/services")({ component: CgServices });

const myServices = [
  { title: "Registered Nursing", rate: 450, unit: "hr", active: true, desc: "Injections, wound care, vitals, medication management." },
  { title: "Post-op Recovery", rate: 2400, unit: "day", active: true, desc: "Supervised recovery after surgery or hospital discharge." },
  { title: "Diabetes Care", rate: 400, unit: "hr", active: true, desc: "Insulin management, glucose monitoring, dietary support." },
  { title: "Live-in Care", rate: 3200, unit: "day", active: false, desc: "24-hour attendant support for high-dependency patients." },
];

function CgServices() {
  return (
    <div className="space-y-6">
      <PageHeader title="My services" subtitle="Services you offer to families on SilverCare." action={<Button className="rounded-full"><Plus className="mr-1 h-4 w-4" />Add service</Button>} />
      <div className="grid gap-4 md:grid-cols-2">
        {myServices.map((s) => (
          <div key={s.title} className="surface-card p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <Switch defaultChecked={s.active} />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <p className="text-sm"><span className="font-semibold">₹{s.rate.toLocaleString()}</span>/{s.unit}</p>
              <Badge variant="secondary" className={s.active ? "rounded-full bg-success/10 text-success" : "rounded-full"}>
                {s.active ? "Active" : "Paused"}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
