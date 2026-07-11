import { createFileRoute, notFound } from "@tanstack/react-router";
import { ChatWindow } from "@/components/communication/ChatWindow";
import { chatThreads, conversations } from "@/lib/mock-data";

export const Route = createFileRoute("/caregiver/messages/$id")({
  loader: ({ params }) => {
    const cv = conversations.find(c => c.id === params.id);
    if (!cv) throw notFound();
    return { cv, messages: chatThreads[cv.id] ?? [] };
  },
  component: CgThread,
});

function CgThread() {
  const { cv, messages } = Route.useLoaderData();
  return <ChatWindow conversation={cv} messages={messages} />;
}
