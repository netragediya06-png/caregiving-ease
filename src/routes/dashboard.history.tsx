import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, StatCard } from "@/components/dashboard/DashboardLayout";
import { bookings } from "@/lib/mock-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Wallet, History as HistoryIcon, CalendarCheck } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const Route = createFileRoute("/dashboard/history")({ component: HistoryPage });

function HistoryPage() {
  const past = bookings.filter(b => ["Completed","Cancelled"].includes(b.status));
  return (
    <div className="space-y-8">
      <PageHeader title="Booking history" subtitle="A complete record of past care sessions." />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Completed visits" value="26" icon={CalendarCheck} />
        <StatCard label="Total spent" value="₹84,200" icon={Wallet} tone="success" />
        <StatCard label="Average rating given" value="4.8" icon={Star} tone="warning" />
      </div>

      <div className="surface-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-border p-5">
          <div className="flex items-center gap-2"><HistoryIcon className="h-4 w-4 text-primary" /><h3 className="font-display text-lg font-semibold">All past bookings</h3></div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {past.map((b) => (
              <TableRow key={b.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9"><AvatarFallback className="bg-primary text-primary-foreground text-xs">{b.caregiverInitials}</AvatarFallback></Avatar>
                    <div><p className="text-sm font-medium">{b.caregiver}</p><p className="text-xs text-muted-foreground">{b.id}</p></div>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{b.service}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{b.schedule}</TableCell>
                <TableCell><Badge variant="secondary" className="rounded-full bg-muted">{b.status}</Badge></TableCell>
                <TableCell className="text-right font-medium">₹{b.total.toLocaleString()}</TableCell>
                <TableCell className="text-right"><Button size="sm" variant="ghost">Invoice</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
