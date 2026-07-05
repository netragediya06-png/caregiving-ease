import { createFileRoute } from "@tanstack/react-router";
import { FileSearch } from "lucide-react";
import { StatusScreen } from "@/components/auth/StatusScreen";

export const Route = createFileRoute("/auth/account-review")({ component: Review });

function Review() {
  return (
    <StatusScreen
      tone="warning"
      eyebrow="Account under review"
      icon={<FileSearch className="h-7 w-7" />}
      title="Hang tight — we're verifying your account"
      description="Your caregiver profile is currently being reviewed by our verification team. You'll be able to access your dashboard as soon as this is complete."
      primary={{ label: "Back to home", to: "/" }}
      secondary={{ label: "Contact support", to: "/" }}
    />
  );
}
