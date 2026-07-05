import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartPulse, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin-login")({
  head: () => ({ meta: [{ title: "Admin sign in — SilverCare" }, { name: "robots", content: "noindex" }] }),
  component: AdminLogin,
});

function AdminLogin() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-950 px-4 text-slate-100">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2 text-slate-200">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold">SilverCare</span>
        </Link>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur">
          <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
            <ShieldCheck className="h-4 w-4" /> Restricted access
          </div>
          <h1 className="font-display text-2xl font-semibold">Admin sign in</h1>
          <p className="mt-1 text-sm text-slate-400">
            Authorised operations team only. All activity is logged.
          </p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label className="text-slate-200">Admin email</Label>
              <Input
                type="email"
                placeholder="admin@silvercare.health"
                className="border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-200">Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                className="border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-200">2FA code</Label>
              <Input
                inputMode="numeric"
                placeholder="6-digit code"
                className="border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500"
              />
            </div>
            <Button asChild className="w-full rounded-full" size="lg">
              <Link to="/admin">
                <Lock className="h-4 w-4" /> Sign in to admin console
              </Link>
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-500">
            Not an admin?{" "}
            <Link to="/auth/login" className="text-primary hover:underline">
              Return to user sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
