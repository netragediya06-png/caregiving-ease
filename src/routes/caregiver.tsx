import { Outlet } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function CaregiverLayout() {
  return (
    <DashboardLayout role="caregiver">
      <Outlet />
    </DashboardLayout>
  );
}
