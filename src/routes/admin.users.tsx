import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

export const Route = createFileRoute("/admin/users")({ component: AdminUsers });

const users = [
  { name: "Aarav Sharma", email: "aarav@example.com", city: "Bengaluru", bookings: 14, joined: "Jan 12, 2025", status: "active" },
  { name: "Divya Nair", email: "divya@example.com", city: "Chennai", bookings: 9, joined: "Mar 04, 2025", status: "active" },
  { name: "Rohit Khanna", email: "rohit@example.com", city: "Delhi", bookings: 22, joined: "Sep 28, 2024", status: "active" },
  { name: "Sneha Bose", email: "sneha@example.com", city: "Kolkata", bookings: 3, joined: "Aug 11, 2025", status: "suspended" },
  { name: "Karthik Reddy", email: "karthik@example.com", city: "Hyderabad", bookings: 17, joined: "Nov 17, 2024", status: "active" },
];

function AdminUsers() {
  return (
    <div className="space-y-8">
      <PageHeader title="Families & users" subtitle="Manage every family using SilverCare." action={<Button className="rounded-full">Invite user</Button>} />

      <div className="flex flex-wrap gap-3">
        <div className="relative w-80 max-w-full">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search families" className="rounded-full pl-9" />
        </div>
      </div>

      <div className="surface-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Bookings</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9"><AvatarFallback className="bg-muted text-xs">{u.name.split(" ").map(s=>s[0]).join("")}</AvatarFallback></Avatar>
                    <div><p className="text-sm font-medium">{u.name}</p><p className="text-xs text-muted-foreground">{u.email}</p></div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{u.city}</TableCell>
                <TableCell className="text-sm">{u.bookings}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{u.joined}</TableCell>
                <TableCell><Badge variant="secondary" className={`rounded-full ${u.status==="active"?"bg-success/10 text-success":"bg-destructive/10 text-destructive"}`}>{u.status}</Badge></TableCell>
                <TableCell className="text-right"><Button size="sm" variant="ghost">View</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
