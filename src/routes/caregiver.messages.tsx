import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ConversationList } from "@/components/communication/ConversationList";
import { PageHeader } from "@/components/dashboard/DashboardLayout";

export const Route = createFileRoute("/caregiver/messages")({ component: CgMessagesLayout });

function CgMessagesLayout() {
  return (
    <div className="space-y-6">
      <PageHeader title="Messages" subtitle="Chat with families you're caring for." />
      <div className="grid gap-4 lg:grid-cols-[340px_1fr]">
        <ConversationList basePath="/caregiver/messages" />
        <div><Outlet /></div>
      </div>
    </div>
  );
}
