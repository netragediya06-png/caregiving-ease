import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, StatCard } from "@/components/dashboard/DashboardLayout";
import { Wallet, TrendingUp, ArrowDownRight, Banknote } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/caregiver/earnings")({ component: Earnings });

const payouts = [
  { id: "PO-9921", date: "Nov 25, 2026", visits: 11, amount: 18400, status: "Paid" },
  { id: "PO-9908", date: "Nov 18, 2026", visits: 9, amount: 15600, status: "Paid" },
  { id: "PO-9894", date: "Nov 11, 2026", visits: 12, amount: 20100, status: "Paid" },
  { id: "PO-9881", date: "Nov 4, 2026", visits: 8, amount: 12800, status: "Paid" },
];

function Earnings() {
  return (
    <div className="space-y-8">
      <PageHeader title="Earnings" subtitle="Track payouts and lifetime income." action={<Button variant="outline" className="rounded-full">Download statement</Button>} />

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="This month" value="₹62,400" hint="+18% vs Oct" icon={Wallet} tone="success" />
        <StatCard label="Pending payout" value="₹8,400" hint="releases Mon" icon={Banknote} />
        <StatCard label="Lifetime" value="₹6.4L" icon={TrendingUp} />
        <StatCard label="Avg / visit" value="₹1,710" icon={ArrowDownRight} />
      </div>

      <div className="surface-card overflow-hidden">
        <div className="border-b border-border p-5"><h3 className="font-display text-lg font-semibold">Recent payouts</h3></div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Payout</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Visits</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payouts.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.id}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{p.date}</TableCell>
                <TableCell>{p.visits}</TableCell>
                <TableCell><Badge variant="secondary" className="rounded-full bg-success/10 text-success">{p.status}</Badge></TableCell>
                <TableCell className="text-right font-medium">₹{p.amount.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
