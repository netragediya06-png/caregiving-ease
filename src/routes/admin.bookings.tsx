import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { bookings } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const Route = createFileRoute("/admin/bookings")({ component: AdminBookings });

const tone: Record<string,string> = {
  "Pending":"bg-warning/15 text-warning-foreground",
  "Confirmed":"bg-primary-soft text-primary",
  "In progress":"bg-success/15 text-success",
  "Completed":"bg-muted text-muted-foreground",
  "Cancelled":"bg-destructive/10 text-destructive",
};

function AdminBookings() {
  return (
    <div className="space-y-8">
      <PageHeader title="Bookings" subtitle="Monitor every care session across the platform." />
      <div className="surface-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking</TableHead>
              <TableHead>Caregiver</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((b) => (
              <TableRow key={b.id}>
                <TableCell className="font-medium">{b.id}</TableCell>
                <TableCell className="text-sm">{b.caregiver}</TableCell>
                <TableCell className="text-sm">{b.patient}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{b.service}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{b.schedule}</TableCell>
                <TableCell><Badge variant="secondary" className={`rounded-full ${tone[b.status]}`}>{b.status}</Badge></TableCell>
                <TableCell className="text-right font-medium">₹{b.total.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end gap-2 border-t border-border p-4">
          <Button size="sm" variant="ghost">Previous</Button>
          <Button size="sm" variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
}
