import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/auth/login")({ component: Login });

function Login() {
  return (
    <AuthShell title="Welcome back" subtitle="Sign in to your SilverCare account.">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="identifier">Email or mobile number</Label>
          <Input id="identifier" placeholder="you@example.com or +91 98•••• ••••" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link to="/auth/forgot-password" className="text-xs text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <Button asChild className="w-full rounded-full" size="lg">
          <Link to="/dashboard">Sign in</Link>
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          We'll redirect you to the right dashboard based on your account.
        </p>

        <Separator className="my-6" />
        <Button variant="outline" className="w-full rounded-full" size="lg">
          Continue with Google
        </Button>

        <p className="pt-2 text-center text-sm text-muted-foreground">
          New to SilverCare?{" "}
          <Link to="/auth/register" className="font-medium text-primary hover:underline">
            Create an account
          </Link>
        </p>
        <p className="text-center text-xs text-muted-foreground">
          <Link to="/admin-login" className="inline-flex items-center gap-1 hover:text-primary hover:underline">
            <ShieldCheck className="h-3 w-3" /> Admin sign in
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
