import { Link, useParams } from "react-router-dom";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { bookings, patients } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarCheck, MapPin, PhoneCall, Mail, MessageSquare, Star, Clock,
  User, ClipboardList, XCircle, CheckCircle2,
} from "lucide-react";


const timeline = [
  { at: "3 days ago", title: "Booking requested", body: "You requested this booking.", done: true },
  { at: "3 days ago", title: "Caregiver confirmed", body: "Caregiver accepted the booking.", done: true },
  { at: "Today", title: "Visit in progress", body: "The caregiver is currently with the patient.", done: true, active: true },
  { at: "Later today", title: "Care notes uploaded", body: "You'll get a summary after the visit.", done: false },
  { at: "Later today", title: "Payment processed", body: "Invoice sent to your email.", done: false },
];

function BookingDetail() {
  const { id } = useParams();
  const b = bookings.find((x) => x.id === id);
  if (!b) {
    return (
      <div className="p-10 text-center">
        <h2 className="font-display text-2xl">Booking not found</h2>
        <Link to="/dashboard/bookings" className="text-primary hover:underline">Back to bookings</Link>
      </div>
    );
  }
  const patient = patients.find(p => p.name === b.patient) ?? { name: b.patient, age: 78, conditions: [] as string[], notes: "", relation: "Family member" };
  const isCompleted = b.status === "Completed";

  return (
    <div className="space-y-8">
      <PageHeader
        title={`Booking ${b.id}`}
        subtitle={`${b.service} · ${b.schedule}`}
        action={<Button asChild variant="ghost"><Link to="/dashboard/bookings">← All bookings</Link></Button>}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {/* Status card */}
          <div className="surface-card flex flex-wrap items-center gap-4 p-5">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><CalendarCheck className="h-5 w-5" /></span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{b.service}</p>
              <p className="text-xs text-muted-foreground">{b.schedule}</p>
            </div>
            <Badge variant="secondary" className="rounded-full bg-primary-soft text-primary">{b.status}</Badge>
            <p className="font-display text-xl font-semibold">₹{b.total.toLocaleString()}</p>
          </div>

          {/* Caregiver info */}
          <div className="surface-card p-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Caregiver</p>
            <div className="flex items-center gap-4">
              <Avatar className="h-14 w-14">
                {b.caregiverPhoto && <AvatarImage src={b.caregiverPhoto} alt={b.caregiver} />}
                <AvatarFallback className="bg-primary text-primary-foreground">{b.caregiverInitials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{b.caregiver}</p>
                <p className="text-xs text-muted-foreground">Verified professional</p>
              </div>
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <Link to={`/dashboard/caregivers/${b.caregiverId}`}>View profile</Link>
              </Button>
            </div>
          </div>

          {/* Communication section */}
          <div className="surface-card p-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Communication</p>
            <p className="mb-3 text-sm text-muted-foreground">Your booking is confirmed — you can now reach {b.caregiver} directly.</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <Button asChild variant="outline" className="rounded-full">
                <Link to={`/dashboard/messages/${"cv-1"}`}><MessageSquare className="mr-1.5 h-4 w-4" />Message</Link>
              </Button>
              <Button variant="outline" className="rounded-full"><PhoneCall className="mr-1.5 h-4 w-4" />Call caregiver</Button>
              <Button variant="outline" className="rounded-full"><Mail className="mr-1.5 h-4 w-4" />Email caregiver</Button>
            </div>
          </div>

          {/* Patient info */}
          <div className="surface-card p-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Patient</p>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-muted"><User className="h-5 w-5 text-muted-foreground" /></span>
              <div>
                <p className="font-semibold">{patient.name}</p>
                <p className="text-xs text-muted-foreground">{patient.relation} · Age {patient.age}</p>
              </div>
            </div>
            {patient.conditions.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {patient.conditions.map((c) => <Badge key={c} variant="secondary" className="rounded-full bg-primary-soft text-primary">{c}</Badge>)}
              </div>
            )}
          </div>

          {/* Visit schedule */}
          <div className="surface-card p-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Visit schedule</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" />{b.schedule}</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" />{b.address ?? "Home visit"}</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="surface-card p-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Booking timeline</p>
            <ol className="space-y-4">
              {timeline.map((t, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className={`grid h-7 w-7 place-items-center rounded-full text-xs ${t.done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {t.done ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                    </span>
                    {i < timeline.length - 1 && <span className={`mt-1 h-full w-px ${t.done ? "bg-primary/50" : "bg-border"}`} />}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2">
                      <p className={`text-sm font-medium ${t.active ? "text-primary" : ""}`}>{t.title}</p>
                      <span className="text-[11px] text-muted-foreground">{t.at}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{t.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Care notes */}
          <div className="surface-card p-5">
            <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground"><ClipboardList className="h-3 w-3" />Care notes</p>
            {isCompleted ? (
              <div className="rounded-xl bg-muted/40 p-4 text-sm">
                <p className="font-medium">Visit summary</p>
                <p className="mt-1 text-muted-foreground">Vitals stable (BP 128/82). Wound dressing changed. Patient tolerated activity well. Advised gentle 15-min walk twice daily. Next visit in 3 days.</p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Care notes will appear here after the visit.</p>
            )}
          </div>

          {/* Review section (post-completion) */}
          {isCompleted && (
            <div className="surface-card p-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Rate this visit</p>
              <div className="flex items-center gap-1">
                {Array.from({length:5}).map((_,i)=> <Star key={i} className="h-6 w-6 cursor-pointer text-muted-foreground hover:fill-warning hover:text-warning" />)}
              </div>
              <Textarea rows={4} className="mt-3" placeholder="Share your experience with other families..." />
              <Button className="mt-3 rounded-full">Submit review</Button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="surface-card p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Booking total</p>
            <p className="mt-1 font-display text-3xl font-semibold">₹{b.total.toLocaleString()}</p>
            <p className="mt-1 text-xs text-muted-foreground">Includes taxes and platform fee.</p>
            <Button variant="outline" className="mt-4 w-full rounded-full">Download invoice</Button>
          </div>

          {!isCompleted && (
            <div className="surface-card p-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Cancellation</p>
              <p className="text-sm text-muted-foreground">Free cancellation up to 4 hours before the visit. After that, a 20% fee applies.</p>
              <Button variant="ghost" size="sm" className="mt-3 rounded-full text-destructive hover:bg-destructive/10 hover:text-destructive"><XCircle className="mr-1.5 h-4 w-4" />Cancel booking</Button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default BookingDetail;
