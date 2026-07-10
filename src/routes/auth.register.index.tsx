import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Users, HeartHandshake, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/auth/register/")({ component: RegisterChoice });

function RegisterChoice() {
  return (
    <AuthShell title="Create your account" subtitle="Tell us how you'd like to use SilverCare.">
      <div className="space-y-3">
        <Link
          to="/auth/register/family"
          className="surface-card group flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-card"
        >
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
            <Users className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold">I'm a family member</h3>
            <p className="text-sm text-muted-foreground">
              Find verified caregivers for a parent or elder at home.
            </p>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
        </Link>

        <Link
          to="/auth/register/caregiver"
          className="surface-card group flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-card"
        >
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
            <HeartHandshake className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold">I'm a caregiver</h3>
            <p className="text-sm text-muted-foreground">
              Join SilverCare and grow a trusted home-care practice.
            </p>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
        </Link>

        <p className="pt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/auth/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
