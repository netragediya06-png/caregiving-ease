import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/auth/register/family")({ component: FamilyRegister });

function FamilyRegister() {
  return (
    <AuthShell title="Family account" subtitle="Set up care for your loved ones in minutes.">
      <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>First name</Label><Input placeholder="Anjali" /></div>
          <div className="space-y-2"><Label>Last name</Label><Input placeholder="Rao" /></div>
        </div>
        <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
        <div className="space-y-2"><Label>Mobile number</Label><Input type="tel" placeholder="+91 98•••• ••••" /></div>
        <div className="space-y-2"><Label>City</Label><Input placeholder="Bengaluru" /></div>
        <div className="space-y-2"><Label>Password</Label><Input type="password" placeholder="At least 8 characters" /></div>
        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <Checkbox className="mt-0.5" /> I agree to the <a className="text-primary hover:underline" href="#">Terms</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
        </label>
        <Button asChild className="w-full rounded-full" size="lg"><Link to="/dashboard">Create account</Link></Button>
        <p className="pt-2 text-center text-sm text-muted-foreground">
          Joining as a caregiver instead? <Link to="/auth/register/caregiver" className="font-medium text-primary hover:underline">Switch</Link>
        </p>
      </form>
    </AuthShell>
  );
}
