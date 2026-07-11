import { createFileRoute } from "@tanstack/react-router";
import emptyInbox from "@/assets/empty-inbox.jpg";

export const Route = createFileRoute("/dashboard/messages/")({ component: MessagesEmpty });

function MessagesEmpty() {
  return (
    <div className="surface-card flex h-[calc(100vh-11rem)] min-h-[520px] flex-col items-center justify-center px-6 text-center">
      <img src={emptyInbox} alt="" className="h-48 w-48 object-contain" loading="lazy" />
      <h3 className="mt-4 font-display text-xl font-semibold">Pick a conversation</h3>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">Choose a chat on the left to view messages, or start a new one from any caregiver profile.</p>
    </div>
  );
}
