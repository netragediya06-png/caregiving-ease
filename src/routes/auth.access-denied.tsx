import { ShieldAlert } from "lucide-react";
import { StatusScreen } from "@/components/auth/StatusScreen";


function Denied() {
  return (
    <StatusScreen
      tone="danger"
      eyebrow="Access restricted"
      icon={<ShieldAlert className="h-7 w-7" />}
      title="This area isn't available yet"
      description="Your caregiver profile hasn't been approved. Once our team completes verification, you'll get full access to the caregiver dashboard, bookings, and payouts."
      primary={{ label: "View verification status", to: "/auth/pending-verification" }}
      secondary={{ label: "Sign in as a different user", to: "/auth/login" }}
    />
  );
}
