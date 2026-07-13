import { Link } from "react-router-dom";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Users } from "lucide-react";


function FamilyRegister() {
  return (
    <AuthShell
      title="Create your family account"
      subtitle="Set up care for your loved ones in a few minutes."
    >
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-border/70 bg-primary-soft/40 p-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
          <Users className="h-4 w-4" />
        </span>
        <div className="text-sm">
          <p className="font-medium">Family Member signup</p>
          <p className="text-xs text-muted-foreground">
            Booking care for a parent or elder at home.
          </p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label>Full name</Label>
          <Input placeholder="Anjali Rao" />
        </div>
        <div className="space-y-2">
          <Label>Email address</Label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label>Mobile number</Label>
          <Input type="tel" placeholder="+91 98•••• ••••" />
        </div>
        <div className="space-y-2">
          <Label>City</Label>
          <Input placeholder="Bengaluru" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" placeholder="At least 8 characters" />
          </div>
          <div className="space-y-2">
            <Label>Confirm password</Label>
            <Input type="password" placeholder="Re-enter password" />
          </div>
        </div>
        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <Checkbox className="mt-0.5" /> I agree to the{" "}
          <a className="text-primary hover:underline" href="#">Terms of Service</a> and{" "}
          <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
        </label>
        <Button asChild className="w-full rounded-full" size="lg">
          <Link to="/auth/registration-success" search={{ role: "family" }}>
            Create family account
          </Link>
        </Button>
        <p className="pt-2 text-center text-sm text-muted-foreground">
          Joining as a caregiver instead?{" "}
          <Link to="/auth/register/caregiver" className="font-medium text-primary hover:underline">
            Switch
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}

export default FamilyRegister;
