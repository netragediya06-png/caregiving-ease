import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera } from "lucide-react";

export const Route = createFileRoute("/dashboard/profile")({ component: Profile });

function Profile() {
  return (
    <div className="space-y-8">
      <PageHeader title="My profile" subtitle="Keep your account details up to date." />

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="surface-card flex flex-col items-center p-6 text-center">
          <div className="relative">
            <Avatar className="h-24 w-24"><AvatarFallback className="bg-primary text-primary-foreground text-2xl">AR</AvatarFallback></Avatar>
            <button className="absolute bottom-0 right-0 grid h-8 w-8 place-items-center rounded-full border border-border bg-card shadow-soft"><Camera className="h-4 w-4" /></button>
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold">Anjali Rao</h3>
          <p className="text-sm text-muted-foreground">Family account · Bengaluru</p>
          <div className="mt-5 w-full space-y-2 text-left">
            <Row k="Member since" v="Jan 2024" />
            <Row k="Bookings" v="28" />
            <Row k="Patients" v="2" />
          </div>
        </div>

        <form className="surface-card space-y-6 p-6" onSubmit={(e)=>e.preventDefault()}>
          <h3 className="font-display text-lg font-semibold">Account details</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2"><Label>First name</Label><Input defaultValue="Anjali" /></div>
            <div className="space-y-2"><Label>Last name</Label><Input defaultValue="Rao" /></div>
            <div className="space-y-2"><Label>Email</Label><Input type="email" defaultValue="anjali.rao@example.com" /></div>
            <div className="space-y-2"><Label>Mobile</Label><Input type="tel" defaultValue="+91 98123 45678" /></div>
            <div className="space-y-2 md:col-span-2"><Label>Address</Label><Input defaultValue="14, Indiranagar 12th Main, Bengaluru 560038" /></div>
            <div className="space-y-2 md:col-span-2"><Label>About</Label><Textarea defaultValue="Looking after my father (78) and mother-in-law (82) — both at home." /></div>
          </div>
          <div className="flex justify-end gap-2 border-t border-border pt-4">
            <Button variant="ghost">Cancel</Button>
            <Button className="rounded-full">Save changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2 text-sm"><span className="text-muted-foreground">{k}</span><span className="font-medium">{v}</span></div>;
}
