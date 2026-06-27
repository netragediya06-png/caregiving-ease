import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/auth/register/caregiver")({ component: CaregiverRegister });

function CaregiverRegister() {
  return (
    <AuthShell title="Join as a caregiver" subtitle="Build a trusted home-care practice with SilverCare.">
      <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>Full name</Label><Input placeholder="Anita Sharma" /></div>
          <div className="space-y-2">
            <Label>Profession</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Choose role" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="rn">Registered Nurse</SelectItem>
                <SelectItem value="att">Elderly Attendant</SelectItem>
                <SelectItem value="pt">Physiotherapist</SelectItem>
                <SelectItem value="post">Post-Hospital Care</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
          <div className="space-y-2"><Label>Mobile</Label><Input type="tel" placeholder="+91 98•••• ••••" /></div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>City</Label><Input placeholder="Bengaluru" /></div>
          <div className="space-y-2"><Label>Years of experience</Label><Input type="number" placeholder="5" /></div>
        </div>
        <div className="space-y-2"><Label>Short bio</Label><Textarea placeholder="A short note families will see on your profile." /></div>
        <div className="space-y-2"><Label>Password</Label><Input type="password" placeholder="At least 8 characters" /></div>
        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <Checkbox className="mt-0.5" /> I consent to background verification and agree to the <a className="text-primary hover:underline" href="#">Caregiver Terms</a>.
        </label>
        <Button asChild className="w-full rounded-full" size="lg"><Link to="/caregiver">Create caregiver account</Link></Button>
        <p className="pt-2 text-center text-sm text-muted-foreground">
          Looking for care instead? <Link to="/auth/register/family" className="font-medium text-primary hover:underline">Family signup</Link>
        </p>
      </form>
    </AuthShell>
  );
}
