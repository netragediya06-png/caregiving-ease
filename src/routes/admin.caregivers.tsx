import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, CheckCircle2, XCircle, Eye } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const Route = createFileRoute("/admin/caregivers")({ component: AdminCaregivers });

const queue = [
  { name: "Priya Menon", role: "Registered Nurse", city: "Chennai", exp: "6y", submitted: "Today", status: "pending" },
  { name: "Suresh Kumar", role: "Physiotherapist", city: "Pune", exp: "11y", submitted: "Today", status: "pending" },
  { name: "Fatima Sheikh", role: "Elderly Attendant", city: "Hyderabad", exp: "4y", submitted: "Yesterday", status: "pending" },
  { name: "Rahul Verma", role: "Post-op Specialist", city: "Mumbai", exp: "8y", submitted: "2 days ago", status: "pending" },
];

const verified = [
  { name: "Anita Sharma", role: "Registered Nurse", city: "Bengaluru", exp: "9y", rating: 4.9, status: "active" },
  { name: "Vikram Joshi", role: "Physiotherapist", city: "Delhi", exp: "12y", rating: 4.8, status: "active" },
  { name: "Meera Iyer", role: "Elderly Attendant", city: "Bengaluru", exp: "7y", rating: 4.9, status: "active" },
  { name: "Sanjay Patel", role: "Post-op Specialist", city: "Ahmedabad", exp: "10y", rating: 4.7, status: "paused" },
];

function AdminCaregivers() {
  return (
    <div className="space-y-8">
      <PageHeader title="Caregivers" subtitle="Verify, manage, and monitor every professional on the platform." />

      <Tabs defaultValue="pending">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <TabsList>
            <TabsTrigger value="pending">Pending ({queue.length})</TabsTrigger>
            <TabsTrigger value="verified">Verified ({verified.length})</TabsTrigger>
          </TabsList>
          <div className="relative w-72 max-w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search caregivers" className="rounded-full pl-9" />
          </div>
        </div>

        <TabsContent value="pending" className="mt-5">
          <div className="surface-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Caregiver</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {queue.map((c) => (
                  <TableRow key={c.name}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9"><AvatarFallback className="bg-accent text-accent-foreground text-xs">{c.name.split(" ").map(s=>s[0]).join("")}</AvatarFallback></Avatar>
                        <p className="text-sm font-medium">{c.name}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{c.role}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{c.city}</TableCell>
                    <TableCell className="text-sm">{c.exp}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{c.submitted}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button size="sm" variant="ghost"><Eye className="h-4 w-4" /></Button>
                        <Button size="sm" variant="ghost" className="text-success hover:text-success"><CheckCircle2 className="h-4 w-4" /></Button>
                        <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive"><XCircle className="h-4 w-4" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="verified" className="mt-5">
          <div className="surface-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Caregiver</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {verified.map((c) => (
                  <TableRow key={c.name}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9"><AvatarFallback className="bg-primary text-primary-foreground text-xs">{c.name.split(" ").map(s=>s[0]).join("")}</AvatarFallback></Avatar>
                        <p className="text-sm font-medium">{c.name}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{c.role}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{c.city}</TableCell>
                    <TableCell className="text-sm">{c.exp}</TableCell>
                    <TableCell className="text-sm">{c.rating} ★</TableCell>
                    <TableCell><Badge variant="secondary" className={`rounded-full ${c.status==="active"?"bg-success/10 text-success":"bg-warning/15 text-warning-foreground"}`}>{c.status}</Badge></TableCell>
                    <TableCell className="text-right"><Button size="sm" variant="ghost">Manage</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
