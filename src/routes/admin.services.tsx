import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { services } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, Pencil } from "lucide-react";

export const Route = createFileRoute("/admin/services")({ component: AdminServices });

function AdminServices() {
  return (
    <div className="space-y-8">
      <PageHeader title="Services" subtitle="Configure the care services available to families."
        action={<Button className="rounded-full"><Plus className="mr-1 h-4 w-4" />New service</Button>}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((s) => (
          <div key={s.name} className="surface-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
              </div>
              <Badge variant="secondary" className="rounded-full bg-primary-soft text-primary">{s.priceFrom}</Badge>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-2 text-sm">
                <Switch defaultChecked />
                <span className="text-muted-foreground">Active</span>
              </div>
              <Button size="sm" variant="ghost"><Pencil className="mr-1 h-3.5 w-3.5" />Edit</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
