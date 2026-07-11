import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Search, Stethoscope, CalendarDays } from "lucide-react";
import { cities, services } from "@/lib/mock-data";

export function LocationSearch() {
  const [service, setService] = useState<string>("Registered Nursing");
  const [city, setCity] = useState<string>("Bengaluru");
  const [date, setDate] = useState<string>("");
  return (
    <div className="surface-card grid gap-3 p-4 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-end md:gap-3 md:p-3">
      <div className="space-y-1.5">
        <Label className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground"><Stethoscope className="h-3 w-3" />Service</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className="h-11 border-0 bg-muted/60"><SelectValue /></SelectTrigger>
          <SelectContent>{services.map(s => <SelectItem key={s.id} value={s.title}>{s.title}</SelectItem>)}</SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground"><MapPin className="h-3 w-3" />City</Label>
        <Select value={city} onValueChange={setCity}>
          <SelectTrigger className="h-11 border-0 bg-muted/60"><SelectValue /></SelectTrigger>
          <SelectContent>{cities.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground"><CalendarDays className="h-3 w-3" />Preferred date</Label>
        <Input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="h-11 border-0 bg-muted/60" />
      </div>
      <Button asChild size="lg" className="h-11 rounded-full md:mt-0">
        <Link to="/caregivers"><Search className="mr-1.5 h-4 w-4" />Find caregivers</Link>
      </Button>
    </div>
  );
}
