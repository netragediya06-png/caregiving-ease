import { Link } from "react-router-dom";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Stethoscope, HeartHandshake, Activity, BedDouble, Brain, Flower2, ArrowRight } from "lucide-react";
import { services } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";


const iconMap: Record<string, any> = { Stethoscope, HeartHandshake, Activity, BedDouble, Brain, Flower2 };

function Services() {
  return (
    <div className="space-y-8">
      <PageHeader title="Healthcare services" subtitle="Pick the type of care you need — we'll match a verified professional." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((s) => {
          const Icon = iconMap[s.icon] ?? Stethoscope;
          return (
            <div key={s.id} className="surface-card group p-6 transition hover:-translate-y-0.5 hover:shadow-card">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <p className="text-sm"><span className="text-muted-foreground">From</span> <span className="font-medium">₹{s.from}/hr</span></p>
                <Button asChild size="sm" className="rounded-full"><Link to="/dashboard/caregivers">Browse <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link></Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
