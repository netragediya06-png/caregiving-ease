import { Link } from "react-router-dom";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


function Forgot() {
  return (
    <AuthShell title="Reset your password" subtitle="We'll email you a secure reset link.">
      <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
        <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
        <Button className="w-full rounded-full" size="lg">Send reset link</Button>
        <p className="pt-2 text-center text-sm text-muted-foreground">
          Remembered it? <Link to="/auth/login" className="font-medium text-primary hover:underline">Back to sign in</Link>
        </p>
      </form>
    </AuthShell>
  );
}

export default Forgot;
