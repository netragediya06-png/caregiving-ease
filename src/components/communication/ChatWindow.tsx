import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, Send, Phone, Video, MoreHorizontal, BadgeCheck } from "lucide-react";
import type { ChatMessage, Conversation } from "@/lib/mock-data";
import emptyInbox from "@/assets/empty-inbox.jpg";

export function ChatWindow({ conversation, messages }: { conversation: Conversation; messages: ChatMessage[] }) {
  const [draft, setDraft] = useState("");
  return (
    <div className="surface-card flex h-[calc(100vh-11rem)] min-h-[520px] flex-col overflow-hidden p-0">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border bg-card px-5 py-3">
        <Avatar className="h-10 w-10">
          {conversation.peerPhoto && <AvatarImage src={conversation.peerPhoto} alt={conversation.peerName} />}
          <AvatarFallback className="bg-primary text-primary-foreground text-sm">{conversation.peerInitials}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="truncate font-semibold">{conversation.peerName}</p>
            <BadgeCheck className="h-4 w-4 text-primary" />
            {conversation.online && <span className="ml-1 inline-flex items-center gap-1 text-[11px] text-success">● Online</span>}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{conversation.peerRole}</span>
            {conversation.bookingRef && <Badge variant="secondary" className="rounded-full bg-primary-soft px-2 py-0 text-[10px] text-primary">Booking {conversation.bookingRef}</Badge>}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button size="icon" variant="ghost" className="rounded-full"><Phone className="h-4 w-4" /></Button>
          <Button size="icon" variant="ghost" className="rounded-full"><Video className="h-4 w-4" /></Button>
          <Button size="icon" variant="ghost" className="rounded-full"><MoreHorizontal className="h-4 w-4" /></Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3 overflow-y-auto bg-muted/30 px-5 py-6">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <img src={emptyInbox} alt="" className="h-40 w-40 object-contain opacity-90" loading="lazy" />
            <p className="mt-4 font-medium">Start the conversation</p>
            <p className="mt-1 text-sm text-muted-foreground">Send a message to {conversation.peerName}. They typically reply within an hour.</p>
          </div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm shadow-soft ${m.from === "me" ? "rounded-br-md bg-primary text-primary-foreground" : "rounded-bl-md bg-card"}`}>
                <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                <p className={`mt-1 text-[10px] ${m.from === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{m.time}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Composer */}
      <form onSubmit={(e)=>{ e.preventDefault(); setDraft(""); }} className="flex items-end gap-2 border-t border-border bg-card px-4 py-3">
        <Button type="button" size="icon" variant="ghost" className="rounded-full"><Paperclip className="h-4 w-4" /></Button>
        <Textarea
          value={draft}
          onChange={(e)=>setDraft(e.target.value)}
          placeholder="Type a message..."
          rows={1}
          className="min-h-11 resize-none rounded-2xl bg-muted/60"
        />
        <Button type="submit" size="icon" className="rounded-full"><Send className="h-4 w-4" /></Button>
      </form>
    </div>
  );
}
