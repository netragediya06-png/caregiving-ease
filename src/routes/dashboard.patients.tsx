import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Heart } from "lucide-react";
import { patients } from "@/lib/mock-data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


function Patients() {
  return (
    <div className="space-y-8">
      <PageHeader title="Patients" subtitle="Create care profiles for each of your loved ones."
        action={
          <Dialog>
            <DialogTrigger asChild><Button className="rounded-full"><Plus className="mr-1 h-4 w-4" /> Add patient</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Add a patient</DialogTitle></DialogHeader>
              <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2"><Label>Full name</Label><Input placeholder="Mr. Ramesh Gupta" /></div>
                  <div className="space-y-2"><Label>Relation</Label><Input placeholder="Father" /></div>
                  <div className="space-y-2"><Label>Age</Label><Input type="number" placeholder="78" /></div>
                  <div className="space-y-2"><Label>Primary language</Label><Input placeholder="Hindi" /></div>
                </div>
                <div className="space-y-2"><Label>Medical conditions</Label><Input placeholder="Diabetes, arthritis" /></div>
                <div className="space-y-2"><Label>Care notes</Label><Textarea placeholder="Preferences, allergies, routines…" /></div>
                <Button className="w-full rounded-full">Save patient</Button>
              </form>
            </DialogContent>
          </Dialog>
        }
      />

      {patients.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {patients.map((p) => (
            <div key={p.id} className="surface-card p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{p.relation} · Age {p.age}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold">{p.name}</h3>
                </div>
                <Button variant="ghost" size="icon"><Pencil className="h-4 w-4" /></Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.conditions.map((c) => <Badge key={c} variant="secondary" className="rounded-full bg-muted">{c}</Badge>)}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{p.notes}</p>
              <div className="mt-5 flex gap-2 border-t border-border pt-4">
                <Button variant="outline" className="flex-1 rounded-full">View care log</Button>
                <Button className="flex-1 rounded-full">Book care</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="surface-card flex flex-col items-center justify-center p-16 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-primary-soft text-primary"><Heart className="h-6 w-6" /></span>
      <h3 className="mt-4 font-display text-xl font-semibold">No patients yet</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">Add a profile for the elder you care for so we can match the right caregiver.</p>
      <Button className="mt-5 rounded-full"><Plus className="mr-1 h-4 w-4" /> Add patient</Button>
    </div>
  );
}
