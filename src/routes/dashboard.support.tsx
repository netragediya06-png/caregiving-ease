import { Link } from "react-router-dom";
import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LifeBuoy, Mail, MessageCircle, PhoneCall } from "lucide-react";


function DashboardSupport() {
  return (
    <div className="space-y-6">
      <PageHeader title="Support" subtitle="We usually respond within a couple of hours." />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { icon: MessageCircle, t: "Live chat", d: "Mon–Sat, 8 AM – 9 PM" },
          { icon: PhoneCall, t: "Call us", d: "+91 80 4718 2200" },
          { icon: Mail, t: "Email", d: "care@silvercare.in" },
        ].map((x) => (
          <div key={x.t} className="surface-card p-5">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><x.icon className="h-5 w-5" /></span>
            <p className="mt-4 font-semibold">{x.t}</p>
            <p className="text-sm text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="surface-card space-y-4 p-6">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-soft text-primary"><LifeBuoy className="h-4 w-4" /></span>
          <h3 className="font-display text-lg font-semibold">Submit a request</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Topic</Label>
            <Select defaultValue="booking">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="booking">Booking issue</SelectItem>
                <SelectItem value="caregiver">Caregiver feedback</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="account">Account</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label>Related booking (optional)</Label><Input placeholder="e.g. BK-10241" /></div>
        </div>
        <div className="space-y-2"><Label>Subject</Label><Input placeholder="Short summary" /></div>
        <div className="space-y-2"><Label>Message</Label><Textarea rows={5} placeholder="Please share as much detail as you can." /></div>
        <Button className="rounded-full">Send request</Button>
      </form>
      <p className="text-center text-sm text-muted-foreground">Looking for public docs? <Link to="/help" className="text-primary hover:underline">Visit the Help Center</Link></p>
    </div>
  );
}

export default DashboardSupport;
