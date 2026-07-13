import { Outlet } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function DashboardRootLayout() {
  return (
    <DashboardLayout role="user">
      <Outlet />
    </DashboardLayout>
  );
}
