import { ChatWindow } from "@/components/communication/ChatWindow";
import { chatThreads, conversations } from "@/lib/mock-data";


function CgThread() {
  const { cv, messages } = Route.useLoaderData();
  return <ChatWindow conversation={cv} messages={messages} />;
}
