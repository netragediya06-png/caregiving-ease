import { CheckCircle2 } from "lucide-react";
import { StatusScreen } from "@/components/auth/StatusScreen";


function Approved() {
  return (
    <StatusScreen
      tone="success"
      eyebrow="Verification approved"
      icon={<CheckCircle2 className="h-7 w-7" />}
      title="Welcome to SilverCare"
      description="Your caregiver profile has been approved. You can now access your dashboard, set your availability, and start receiving booking requests."
      primary={{ label: "Open caregiver dashboard", to: "/caregiver" }}
      secondary={{ label: "Back to home", to: "/" }}
    />
  );
}

export default Approved;
