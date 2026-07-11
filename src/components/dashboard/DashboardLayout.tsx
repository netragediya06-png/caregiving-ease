import { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  HeartPulse, LayoutDashboard, User, Users, CalendarCheck, Stethoscope,
  History, Wallet, FileText, Settings, LogOut, Bell, Search,
  ClipboardList, MessageSquare, UserCog, Briefcase, FilePlus,
  Heart, Clock3, LifeBuoy, PhoneCall,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Role = "user" | "caregiver";

const navByRole: Record<Role, { to: string; label: string; icon: any }[]> = {
  user: [
    { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { to: "/dashboard/profile", label: "My profile", icon: User },
    { to: "/dashboard/patients", label: "Patient profiles", icon: Users },
    { to: "/dashboard/caregivers", label: "Find caregivers", icon: Search },
    { to: "/dashboard/saved", label: "Saved caregivers", icon: Heart },
    { to: "/dashboard/recent", label: "Recently viewed", icon: Clock3 },
    { to: "/dashboard/services", label: "Services", icon: Stethoscope },
    { to: "/dashboard/bookings", label: "My bookings", icon: CalendarCheck },
    { to: "/dashboard/history", label: "Booking history", icon: History },
    { to: "/dashboard/messages", label: "Messages", icon: MessageSquare },
    { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
    { to: "/dashboard/support", label: "Support", icon: LifeBuoy },
    { to: "/dashboard/settings", label: "Settings", icon: Settings },
  ],
  caregiver: [
    { to: "/caregiver", label: "Dashboard", icon: LayoutDashboard },
    { to: "/caregiver/profile", label: "My profile", icon: User },
    { to: "/caregiver/availability", label: "Availability", icon: CalendarCheck },
    { to: "/caregiver/services", label: "My services", icon: Stethoscope },
    { to: "/caregiver/requests", label: "Booking requests", icon: ClipboardList },
    { to: "/caregiver/active-visits", label: "Active visits", icon: Briefcase },
    { to: "/caregiver/inquiries", label: "Customer inquiries", icon: MessageSquare },
    { to: "/caregiver/callbacks", label: "Callback requests", icon: PhoneCall },
    { to: "/caregiver/messages", label: "Messages", icon: MessageSquare },
    { to: "/caregiver/care-notes", label: "Care notes", icon: FileText },
    { to: "/caregiver/patients", label: "Assigned patients", icon: UserCog },
    { to: "/caregiver/reviews", label: "Reviews", icon: MessageSquare },
    { to: "/caregiver/earnings", label: "Earnings", icon: Wallet },
    { to: "/caregiver/documents", label: "Documents", icon: FilePlus },
    { to: "/caregiver/history", label: "Work history", icon: History },
    { to: "/caregiver/notifications", label: "Notifications", icon: Bell },
    { to: "/caregiver/settings", label: "Settings", icon: Settings },
  ],
};

const roleMeta: Record<Role, { name: string; sub: string; initials: string; badge: string }> = {
  user: { name: "Anjali Rao", sub: "Family account", initials: "AR", badge: "Family" },
  caregiver: { name: "Anita Sharma", sub: "Registered Nurse", initials: "AS", badge: "Caregiver" },
};

export function DashboardLayout({ role, children }: { role: Role; children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = navByRole[role];
  const me = roleMeta[role];

  return (
    <div className="flex min-h-screen w-full bg-muted/30">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-sidebar lg:flex">
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold">SilverCare</span>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          <p className="px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {me.badge} workspace
          </p>
          {items.map((it) => {
            const active = pathname === it.to || (it.to !== `/${role === "user" ? "dashboard" : role}` && pathname.startsWith(it.to));
            return (
              <Link
                key={it.to}
                to={it.to}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                  active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <it.icon className="h-4 w-4" />
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground">
            <LogOut className="h-4 w-4" /> Sign out
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md md:px-8">
          <div className="relative hidden flex-1 max-w-md md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search caregivers, bookings, patients…" className="h-10 rounded-full bg-muted/60 pl-9" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full"><Bell className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="rounded-full"><Settings className="h-4 w-4" /></Button>
            <div className="flex items-center gap-3 rounded-full border border-border bg-card py-1 pl-1 pr-3">
              <Avatar className="h-8 w-8"><AvatarFallback className="bg-primary text-primary-foreground text-xs">{me.initials}</AvatarFallback></Avatar>
              <div className="hidden text-left sm:block">
                <p className="text-xs font-medium leading-tight">{me.name}</p>
                <p className="text-[11px] text-muted-foreground leading-tight">{me.sub}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
      <div className="min-w-0">
        <h1 className="font-display text-3xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function StatCard({ label, value, hint, icon: Icon, tone = "primary" }: { label: string; value: string; hint?: string; icon?: any; tone?: "primary" | "success" | "warning" | "muted" }) {
  const toneCls = {
    primary: "bg-primary-soft text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/15 text-warning-foreground",
    muted: "bg-muted text-muted-foreground",
  }[tone];
  return (
    <div className="surface-card p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
        {Icon && <span className={cn("grid h-8 w-8 place-items-center rounded-lg", toneCls)}><Icon className="h-4 w-4" /></span>}
      </div>
      <p className="mt-3 font-display text-3xl font-semibold tracking-tight">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
