import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, MessageSquare, PhoneCall } from "lucide-react";

export function InquiryDialog({ trigger, caregiverName }: { trigger: React.ReactNode; caregiverName: string }) {
  const [sent, setSent] = useState(false);
  return (
    <Dialog onOpenChange={(o) => !o && setSent(false)}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        {sent ? (
          <div className="py-6 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-success/15 text-success"><CheckCircle2 className="h-6 w-6" /></div>
            <h3 className="mt-4 font-display text-xl font-semibold">Inquiry sent to {caregiverName}</h3>
            <p className="mt-2 text-sm text-muted-foreground">You'll get a reply in your Messages inbox usually within 2 hours.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-primary" />Ask {caregiverName} a question</DialogTitle>
              <DialogDescription>Your contact details stay private until you confirm a booking.</DialogDescription>
            </DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="space-y-2"><Label>Subject</Label><Input placeholder="e.g. Diabetes care for my father" /></div>
              <div className="space-y-2"><Label>Message</Label><Textarea rows={5} placeholder="Share the care need, patient age, and any special notes." /></div>
              <div className="space-y-2"><Label>Preferred contact time (optional)</Label><Input placeholder="e.g. Weekday mornings" /></div>
              <DialogFooter>
                <Button type="submit" className="rounded-full">Send inquiry</Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function CallbackDialog({ trigger, caregiverName }: { trigger: React.ReactNode; caregiverName: string }) {
  const [sent, setSent] = useState(false);
  return (
    <Dialog onOpenChange={(o) => !o && setSent(false)}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {sent ? (
          <div className="py-6 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-success/15 text-success"><CheckCircle2 className="h-6 w-6" /></div>
            <h3 className="mt-4 font-display text-xl font-semibold">Callback requested</h3>
            <p className="mt-2 text-sm text-muted-foreground">{caregiverName} will get in touch during your chosen window.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2"><PhoneCall className="h-4 w-4 text-primary" />Request a callback</DialogTitle>
              <DialogDescription>We'll share your number with {caregiverName} for this callback only.</DialogDescription>
            </DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="space-y-2"><Label>Your phone number</Label><Input placeholder="+91 98•••• ••••" /></div>
              <div className="space-y-2"><Label>Preferred time window</Label><Input placeholder="e.g. Today, 4 – 6 PM" /></div>
              <div className="space-y-2"><Label>Note (optional)</Label><Textarea rows={3} placeholder="Anything they should know before calling" /></div>
              <DialogFooter>
                <Button type="submit" className="rounded-full">Request callback</Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
