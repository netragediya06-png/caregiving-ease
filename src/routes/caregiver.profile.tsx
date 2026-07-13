import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";


function CgProfile() {
  return (
    <div className="space-y-8">
      <PageHeader title="Professional profile" subtitle="Families see this when choosing a caregiver." />
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="surface-card flex flex-col items-center p-6 text-center">
          <div className="relative">
            <Avatar className="h-24 w-24"><AvatarFallback className="bg-primary text-primary-foreground text-2xl">AS</AvatarFallback></Avatar>
            <button className="absolute bottom-0 right-0 grid h-8 w-8 place-items-center rounded-full border border-border bg-card shadow-soft"><Camera className="h-4 w-4" /></button>
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold">Anita Sharma</h3>
          <p className="text-sm text-muted-foreground">Registered Nurse · Bengaluru</p>
          <Badge variant="secondary" className="mt-3 rounded-full bg-success/10 text-success"><BadgeCheck className="mr-1 h-3 w-3" />Profile complete</Badge>
        </div>

        <form className="surface-card space-y-6 p-6" onSubmit={(e)=>e.preventDefault()}>
          <h3 className="font-display text-lg font-semibold">Practice details</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2"><Label>Display name</Label><Input defaultValue="Anita Sharma" /></div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Select defaultValue="rn">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="rn">Registered Nurse</SelectItem>
                  <SelectItem value="att">Elderly Attendant</SelectItem>
                  <SelectItem value="pt">Physiotherapist</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>Years of experience</Label><Input type="number" defaultValue="9" /></div>
            <div className="space-y-2"><Label>Hourly rate (₹)</Label><Input type="number" defaultValue="450" /></div>
            <div className="space-y-2 md:col-span-2"><Label>Languages</Label><Input defaultValue="English, Hindi, Kannada" /></div>
            <div className="space-y-2 md:col-span-2"><Label>Specialties</Label><Input defaultValue="Diabetes care, Wound dressing, Post-op recovery" /></div>
            <div className="space-y-2 md:col-span-2"><Label>Bio</Label><Textarea defaultValue="RN with 9 years in geriatric and post-surgical home care. Calm, attentive, and family-first." /></div>
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
