import { Link } from "react-router-dom";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { caregivers, savedCaregiverIds } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Star } from "lucide-react";
import emptyInbox from "@/assets/empty-inbox.jpg";


function Saved() {
  const list = caregivers.filter(c => savedCaregiverIds.includes(c.id));
  return (
    <div className="space-y-6">
      <PageHeader title="Saved caregivers" subtitle="Caregivers you've bookmarked for later." />
      {list.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {list.map((c) => (
            <div key={c.id} className="surface-card p-5">
              <div className="flex items-start gap-3">
                <Avatar className="h-12 w-12">
                  {c.photo && <AvatarImage src={c.photo} alt={c.name} />}
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">{c.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.role}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" />{c.city}</p>
                </div>
                <Button size="icon" variant="ghost" className="rounded-full text-destructive" aria-label="Remove"><Heart className="h-4 w-4 fill-current" /></Button>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
                <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-warning text-warning" />{c.rating}</span>
                <span>₹{c.hourlyRate}/hr</span>
                <Button asChild size="sm" className="rounded-full"><Link to={`/dashboard/caregivers/${c.id}`}>View</Link></Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="surface-card flex flex-col items-center py-16 text-center">
      <img src={emptyInbox} alt="" className="h-40 w-40 object-contain" loading="lazy" />
      <h3 className="mt-4 font-display text-lg font-semibold">No saved caregivers yet</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">Tap the heart icon on any caregiver profile to save them here for later.</p>
      <Button asChild className="mt-4 rounded-full"><Link to="/dashboard/caregivers">Browse caregivers</Link></Button>
    </div>
  );
}
