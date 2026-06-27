import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { bookings } from "@/lib/mock-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/dashboard/bookings")({ component: Bookings });

const statusTone: Record<string, string> = {
  "Pending": "bg-warning/15 text-warning-foreground",
  "Confirmed": "bg-primary-soft text-primary",
  "In progress": "bg-success/15 text-success",
  "Completed": "bg-muted text-muted-foreground",
  "Cancelled": "bg-destructive/10 text-destructive",
};

function Bookings() {
  const active = bookings.filter(b => ["Pending","Confirmed","In progress"].includes(b.status));
  const past = bookings.filter(b => ["Completed","Cancelled"].includes(b.status));
  return (
    <div className="space-y-8">
      <PageHeader title="Bookings" subtitle="Track ongoing and upcoming care sessions." />
      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active ({active.length})</TabsTrigger>
          <TabsTrigger value="past">Past ({past.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-5 space-y-3">
          {active.map((b) => <BookingCard key={b.id} b={b} />)}
        </TabsContent>
        <TabsContent value="past" className="mt-5 space-y-3">
          {past.map((b) => <BookingCard key={b.id} b={b} past />)}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function BookingCard({ b, past }: { b: typeof bookings[number]; past?: boolean }) {
  return (
    <div className="surface-card flex flex-col gap-4 p-5 md:flex-row md:items-center">
      <Avatar className="h-12 w-12"><AvatarFallback className="bg-primary text-primary-foreground">{b.caregiverInitials}</AvatarFallback></Avatar>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate font-semibold">{b.caregiver}</p>
          <Badge variant="secondary" className={`rounded-full px-2 py-0.5 text-[11px] ${statusTone[b.status]}`}>{b.status}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{b.service} · for {b.patient}</p>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{b.schedule}</span>
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />Home visit</span>
        </div>
      </div>
      <div className="flex items-center gap-4 md:flex-col md:items-end">
        <p className="font-display text-lg font-semibold">₹{b.total.toLocaleString()}</p>
        <div className="flex gap-2">
          {past ? <Button size="sm" variant="outline" className="rounded-full">Rate & review</Button> : <>
            <Button size="sm" variant="outline" className="rounded-full">Message</Button>
            <Button size="sm" className="rounded-full">Details</Button>
          </>}
        </div>
      </div>
    </div>
  );
}
