import { createFileRoute } from "@tanstack/react-router";
import { XCircle } from "lucide-react";
import { StatusScreen } from "@/components/auth/StatusScreen";

export const Route = createFileRoute("/auth/verification-rejected")({ component: Rejected });

function Rejected() {
  return (
    <StatusScreen
      tone="danger"
      eyebrow="Verification unsuccessful"
      icon={<XCircle className="h-7 w-7" />}
      title="We couldn't approve your application"
      description="Some of the documents you submitted didn't meet our verification requirements. Please review the feedback in your email and re-submit updated documents."
      primary={{ label: "Re-submit documents", to: "/auth/register/caregiver" }}
      secondary={{ label: "Contact support", to: "/contact" }}
    />
  );
}
