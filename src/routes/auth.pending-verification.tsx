import { createFileRoute } from "@tanstack/react-router";
import { Clock, Check, FileSearch, ShieldCheck } from "lucide-react";
import { StatusScreen } from "@/components/auth/StatusScreen";

export const Route = createFileRoute("/auth/pending-verification")({ component: Pending });

const timeline = [
  { icon: Check, label: "Application received", done: true, meta: "Just now" },
  { icon: FileSearch, label: "Document review", done: false, meta: "Usually 24–48 hours" },
  { icon: ShieldCheck, label: "Background verification", done: false, meta: "1–2 business days" },
];

function Pending() {
  return (
    <StatusScreen
      tone="warning"
      eyebrow="Pending verification"
      icon={<Clock className="h-7 w-7" />}
      title="Your caregiver profile is under review"
      description="Thanks for applying to SilverCare. Our compliance team is verifying your documents and credentials. You'll receive an email as soon as your profile is approved."
      primary={{ label: "Back to home", to: "/" }}
      secondary={{ label: "Sign in", to: "/auth/login" }}
    >
      <div className="surface-card mx-auto max-w-md p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Review timeline
        </p>
        <ol className="mt-4 space-y-4">
          {timeline.map((t, i) => {
            const Icon = t.icon;
            return (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={
                    "mt-0.5 grid h-8 w-8 place-items-center rounded-full " +
                    (t.done
                      ? "bg-success text-success-foreground"
                      : "bg-muted text-muted-foreground")
                  }
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium">{t.label}</p>
                  <p className="text-xs text-muted-foreground">{t.meta}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </StatusScreen>
  );
}
