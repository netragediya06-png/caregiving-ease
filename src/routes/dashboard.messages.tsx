import { Outlet } from "react-router-dom";
import { ConversationList } from "@/components/communication/ConversationList";
import { PageHeader } from "@/components/dashboard/DashboardLayout";


function MessagesLayout() {
  return (
    <div className="space-y-6">
      <PageHeader title="Messages" subtitle="Talk directly with your care team. All conversations are private and encrypted at rest." />
      <div className="grid gap-4 lg:grid-cols-[340px_1fr]">
        <ConversationList basePath="/dashboard/messages" />
        <div><Outlet /></div>
      </div>
    </div>
  );
}

export default MessagesLayout;
