import { PageHeader, StatCard } from "@/components/dashboard/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, CheckCircle2, Star } from "lucide-react";


const visits = [
  { id: "VS-3211", patient: "Mr. Ramesh Gupta", service: "Diabetes care", date: "Nov 24, 2026", hrs: 4, total: 1800, rating: 5 },
  { id: "VS-3204", patient: "Mrs. Lakshmi V.", service: "Wound dressing", date: "Nov 22, 2026", hrs: 1.5, total: 700, rating: 5 },
  { id: "VS-3198", patient: "Mr. Bose", service: "Post-op nursing", date: "Nov 20, 2026", hrs: 6, total: 2700, rating: 4 },
  { id: "VS-3187", patient: "Mrs. Khanna", service: "Daily attendant", date: "Nov 18, 2026", hrs: 12, total: 3000, rating: 5 },
  { id: "VS-3176", patient: "Mr. Iyer", service: "Diabetes care", date: "Nov 15, 2026", hrs: 3, total: 1350, rating: 5 },
];

function WorkHistory() {
  return (
    <div className="space-y-8">
      <PageHeader title="Work history" subtitle="Every visit you've delivered through SilverCare." />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Total visits" value="184" icon={CheckCircle2} tone="success" />
        <StatCard label="Care hours" value="1,240h" icon={Clock} />
        <StatCard label="Average rating" value="4.9" icon={Star} tone="warning" />
      </div>

      <div className="surface-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Visit</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Hours</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead className="text-right">Earned</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visits.map((v) => (
              <TableRow key={v.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9"><AvatarFallback className="bg-muted text-xs">{v.patient.split(" ").map(s=>s[0]).slice(0,2).join("")}</AvatarFallback></Avatar>
                    <div><p className="text-sm font-medium">{v.patient}</p><p className="text-xs text-muted-foreground">{v.id}</p></div>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{v.service}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{v.date}</TableCell>
                <TableCell className="text-sm">{v.hrs}h</TableCell>
                <TableCell><Badge variant="secondary" className="rounded-full bg-warning/15 text-warning-foreground">{v.rating}.0 ★</Badge></TableCell>
                <TableCell className="text-right font-medium">₹{v.total.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default WorkHistory;
