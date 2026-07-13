import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, BadgeCheck, Star, MapPin, Filter } from "lucide-react";
import { caregivers } from "@/lib/mock-data";


function Browse() {
  const [q, setQ] = useState("");
  const [role, setRole] = useState<string>("all");
  const [avail, setAvail] = useState<string>("all");

  const list = useMemo(() => caregivers.filter((c) => {
    const t = q.toLowerCase();
    const matchQ = !t || c.name.toLowerCase().includes(t) || c.specialties.join(" ").toLowerCase().includes(t) || c.city.toLowerCase().includes(t);
    const matchR = role === "all" || c.role === role;
    const matchA = avail === "all" || c.availability === avail;
    return matchQ && matchR && matchA;
  }), [q, role, avail]);

  return (
    <div className="space-y-8">
      <PageHeader title="Find caregivers" subtitle="Search verified nurses, attendants and therapists near you." />

      <div className="surface-card flex flex-col gap-3 p-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search by name, specialty, or city" value={q} onChange={(e)=>setQ(e.target.value)} className="h-11 pl-9" />
        </div>
        <div className="flex gap-2">
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="h-11 w-[180px]"><SelectValue placeholder="Role" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All roles</SelectItem>
              <SelectItem value="Registered Nurse">Registered Nurse</SelectItem>
              <SelectItem value="Elderly Attendant">Elderly Attendant</SelectItem>
              <SelectItem value="Physiotherapist">Physiotherapist</SelectItem>
              <SelectItem value="Post-Hospital Care">Post-Hospital Care</SelectItem>
            </SelectContent>
          </Select>
          <Select value={avail} onValueChange={setAvail}>
            <SelectTrigger className="h-11 w-[180px]"><SelectValue placeholder="Availability" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any availability</SelectItem>
              <SelectItem value="Available now">Available now</SelectItem>
              <SelectItem value="Available this week">This week</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="h-11"><Filter className="mr-1.5 h-4 w-4" /> More</Button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>{list.length} caregiver{list.length !== 1 && "s"} match</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {list.map((c) => (
          <div key={c.id} className="surface-card flex flex-col p-5">
            <div className="flex items-start gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage src={c.photo} alt={c.name} />
                <AvatarFallback className="bg-primary text-primary-foreground">{c.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <h3 className="truncate font-semibold">{c.name}</h3>
                  {c.verified && <BadgeCheck className="h-4 w-4 shrink-0 text-success" />}
                </div>
                <p className="text-xs text-muted-foreground">{c.role}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" />{c.city} · {c.experience}y exp</p>
              </div>
              <div className="text-right">
                <p className="flex items-center justify-end gap-1 text-sm"><Star className="h-3.5 w-3.5 fill-warning text-warning" /><span className="font-medium">{c.rating}</span></p>
                <p className="text-[11px] text-muted-foreground">({c.reviews})</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {c.specialties.slice(0,3).map((sp) => <Badge key={sp} variant="secondary" className="rounded-full bg-muted text-xs font-normal">{sp}</Badge>)}
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
              <div>
                <p className="text-sm"><span className="font-semibold">₹{c.hourlyRate}</span><span className="text-muted-foreground">/hr</span></p>
                <p className="text-[11px] text-muted-foreground">{c.availability}</p>
              </div>
              <Button asChild size="sm" className="rounded-full"><Link to={`/dashboard/caregivers/${c.id}`}>View profile</Link></Button>
            </div>
          </div>
        ))}
        {list.length === 0 && (
          <div className="surface-card col-span-full p-12 text-center">
            <h3 className="font-display text-lg font-semibold">No caregivers match those filters</h3>
            <p className="mt-1 text-sm text-muted-foreground">Try widening your search to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Browse;
