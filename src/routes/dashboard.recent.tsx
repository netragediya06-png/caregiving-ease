import { Link } from "react-router-dom";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { caregivers, recentlyViewedIds } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Clock3, MapPin, Star } from "lucide-react";


function Recent() {
  const list = recentlyViewedIds
    .map(id => caregivers.find(c => c.id === id))
    .filter(Boolean) as typeof caregivers;
  return (
    <div className="space-y-6">
      <PageHeader title="Recently viewed" subtitle="Caregivers you've looked at recently." />
      <div className="surface-card divide-y divide-border">
        {list.map((c, i) => (
          <div key={`${c.id}-${i}`} className="flex items-center gap-4 p-5">
            <Avatar className="h-11 w-11">
              {c.photo && <AvatarImage src={c.photo} alt={c.name} />}
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">{c.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.role} · <MapPin className="inline h-3 w-3" /> {c.city}</p>
            </div>
            <span className="hidden items-center gap-1 text-sm sm:flex"><Star className="h-3.5 w-3.5 fill-warning text-warning" />{c.rating}</span>
            <span className="hidden text-sm text-muted-foreground sm:inline">₹{c.hourlyRate}/hr</span>
            <span className="hidden items-center gap-1 text-xs text-muted-foreground md:flex"><Clock3 className="h-3 w-3" />{i === 0 ? "Just now" : `${i * 2}h ago`}</span>
            <Button asChild size="sm" className="rounded-full"><Link to={`/dashboard/caregivers/${c.id}`}>View profile</Link></Button>
          </div>
        ))}
      </div>
    </div>
  );
}
