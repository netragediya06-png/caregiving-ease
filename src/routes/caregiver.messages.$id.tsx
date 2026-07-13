import { useParams, Navigate } from "react-router-dom";
import { ChatWindow } from "@/components/communication/ChatWindow";
import { chatThreads, conversations } from "@/lib/mock-data";

export default function CgThread() {
  const { id } = useParams();
  const cv = conversations.find((c) => c.id === id);
  if (!cv) return <Navigate to="/caregiver/messages" replace />;
  const messages = chatThreads[cv.id] ?? [];
  return <ChatWindow conversation={cv} messages={messages} />;
}
