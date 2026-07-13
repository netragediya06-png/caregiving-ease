import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle2, X, MapPin, Clock } from "lucide-react";


const requests = [
  { id: "RQ-2098", family: "Sharma family", initials: "SF", patient: "Mr. R. Sharma (74)", service: "Physiotherapy (5 visits)", when: "Mon · 9:00 AM", rate: 700, note: "Post knee replacement. Hindi speaking preferred.", status: "new" },
  { id: "RQ-2097", family: "Khanna household", initials: "KH", patient: "Mrs. Khanna (82)", service: "Daily attendant (12 hrs)", when: "Tue · 8:00 AM", rate: 250, note: "Mild dementia. Looking for warmth and patience.", status: "new" },
  { id: "RQ-2095", family: "Bose family", initials: "BF", patient: "Mr. Bose (69)", service: "Wound dressing (single visit)", when: "Wed · 11:00 AM", rate: 450, note: "Post-surgical, sutures to be checked.", status: "new" },
  { id: "RQ-2090", family: "Iyer family", initials: "IF", patient: "Mrs. Iyer (78)", service: "Diabetes care (weekly)", when: "Started Mon", rate: 450, note: "Accepted earlier this week.", status: "accepted" },
];

function Requests() {
  const newReq = requests.filter(r => r.status === "new");
  const acc = requests.filter(r => r.status === "accepted");
  return (
    <div className="space-y-8">
      <PageHeader title="Booking requests" subtitle="Review and respond to incoming care requests." />
      <Tabs defaultValue="new">
        <TabsList>
          <TabsTrigger value="new">New ({newReq.length})</TabsTrigger>
          <TabsTrigger value="acc">Accepted ({acc.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="new" className="mt-5 space-y-3">
          {newReq.map((r) => (
            <div key={r.id} className="surface-card flex flex-col gap-4 p-5 md:flex-row md:items-center">
              <Avatar><AvatarFallback className="bg-accent text-accent-foreground">{r.initials}</AvatarFallback></Avatar>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{r.family} <span className="text-muted-foreground font-normal">· {r.patient}</span></p>
                <p className="text-sm text-muted-foreground">{r.service}</p>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{r.when}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />Indiranagar</span>
                </div>
                <p className="mt-2 text-sm">{r.note}</p>
              </div>
              <div className="flex items-center gap-4 md:flex-col md:items-end">
                <p className="font-display text-lg font-semibold">₹{r.rate}/hr</p>
                <div className="flex gap-2">
                  <Button size="sm" className="rounded-full"><CheckCircle2 className="mr-1 h-3.5 w-3.5" />Accept</Button>
                  <Button size="sm" variant="outline" className="rounded-full"><X className="mr-1 h-3.5 w-3.5" />Decline</Button>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="acc" className="mt-5 space-y-3">
          {acc.map((r) => (
            <div key={r.id} className="surface-card flex items-center gap-4 p-5">
              <Avatar><AvatarFallback className="bg-primary text-primary-foreground">{r.initials}</AvatarFallback></Avatar>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{r.family} · {r.service}</p>
                <p className="text-xs text-muted-foreground">{r.when}</p>
              </div>
              <Badge variant="secondary" className="rounded-full bg-success/10 text-success">Active</Badge>
              <Button size="sm" className="rounded-full">Open visit</Button>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Requests;
