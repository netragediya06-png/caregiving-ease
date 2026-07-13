import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { conversations } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function ConversationList({ basePath }: { basePath: "/dashboard/messages" | "/caregiver/messages" }) {
  const pathname = useLocation().pathname;
  return (
    <div className="surface-card h-[calc(100vh-11rem)] min-h-[520px] overflow-y-auto p-0">
      <div className="border-b border-border px-5 py-4">
        <p className="font-display text-lg font-semibold">Messages</p>
        <p className="text-xs text-muted-foreground">{conversations.length} conversations</p>
      </div>
      <ul className="divide-y divide-border">
        {conversations.map((c) => {
          const to = `${basePath}/${c.id}`;
          const active = pathname === to;
          return (
            <li key={c.id}>
              <Link
                to={to as any}
                className={cn("flex items-start gap-3 px-5 py-4 transition hover:bg-muted/50", active && "bg-primary-soft/60")}
              >
                <Avatar className="h-10 w-10 shrink-0">
                  {c.peerPhoto && <AvatarImage src={c.peerPhoto} alt={c.peerName} />}
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">{c.peerInitials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-semibold">{c.peerName}</p>
                    <span className="shrink-0 text-[11px] text-muted-foreground">{c.lastAt}</span>
                  </div>
                  <p className="truncate text-xs text-muted-foreground">{c.peerRole}{c.bookingRef ? ` · ${c.bookingRef}` : ""}</p>
                  <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{c.lastMessage}</p>
                </div>
                {c.unread > 0 && (
                  <Badge className="mt-1 h-5 shrink-0 rounded-full bg-primary px-1.5 text-[10px]">{c.unread}</Badge>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
