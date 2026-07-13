import { useSearchParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { StatusScreen } from "@/components/auth/StatusScreen";

export default function Success() {
  const [params] = useSearchParams();
  const role = params.get("role") === "caregiver" ? "caregiver" : "family";
  const isCaregiver = role === "caregiver";
  return (
    <StatusScreen
      tone="success"
      eyebrow="Welcome to SilverCare"
      icon={<CheckCircle2 className="h-7 w-7" />}
      title={isCaregiver ? "Application submitted" : "Your account is ready"}
      description={
        isCaregiver
          ? "We've received your caregiver application. You'll get an email once verification is complete."
          : "Your family account has been created. Add a patient profile and start browsing verified caregivers."
      }
      primary={
        isCaregiver
          ? { label: "View review status", to: "/auth/pending-verification" }
          : { label: "Go to dashboard", to: "/dashboard" }
      }
      secondary={{ label: "Sign in later", to: "/auth/login" }}
    />
  );
}
