import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  HeartHandshake, User, Briefcase, Stethoscope, ShieldCheck,
  Check, ArrowLeft, ArrowRight, Upload, Camera,
} from "lucide-react";
import { cn } from "@/lib/utils";


const steps = [
  { id: 1, label: "Basic info", icon: User, desc: "Personal details" },
  { id: 2, label: "Professional", icon: Briefcase, desc: "Experience & skills" },
  { id: 3, label: "Services", icon: Stethoscope, desc: "Rates & availability" },
  { id: 4, label: "Verification", icon: ShieldCheck, desc: "Documents" },
];

function CaregiverRegister() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <AuthShell
      title="Join as a caregiver"
      subtitle="A quick, professional onboarding — takes about 5 minutes."
    >
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-border/70 bg-primary-soft/40 p-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
          <HeartHandshake className="h-4 w-4" />
        </span>
        <div className="text-sm">
          <p className="font-medium">Caregiver onboarding</p>
          <p className="text-xs text-muted-foreground">
            Your profile is verified before it goes live to families.
          </p>
        </div>
      </div>

      {/* Stepper */}
      <ol className="mb-8 grid grid-cols-4 gap-2">
        {steps.map((s) => {
          const done = step > s.id;
          const active = step === s.id;
          const Icon = s.icon;
          return (
            <li key={s.id} className="flex flex-col items-center text-center">
              <div
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-full border transition",
                  done && "border-primary bg-primary text-primary-foreground",
                  active && "border-primary bg-primary-soft text-primary",
                  !done && !active && "border-border bg-card text-muted-foreground",
                )}
              >
                {done ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
              </div>
              <p
                className={cn(
                  "mt-2 text-[11px] font-medium leading-tight",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {s.label}
              </p>
            </li>
          );
        })}
      </ol>

      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (step < 4) next();
          else navigate("/auth/pending-verification");
        }}
      >
        {step === 1 && <StepBasic />}
        {step === 2 && <StepProfessional />}
        {step === 3 && <StepServices />}
        {step === 4 && <StepVerification />}

        <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
          <Button
            type="button"
            variant="ghost"
            onClick={prev}
            disabled={step === 1}
            className="rounded-full"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <p className="text-xs text-muted-foreground">
            Step {step} of {steps.length}
          </p>
          <Button type="submit" className="rounded-full">
            {step < 4 ? (
              <>Continue <ArrowRight className="h-4 w-4" /></>
            ) : (
              <>Submit for review</>
            )}
          </Button>
        </div>

        <p className="pt-2 text-center text-sm text-muted-foreground">
          Looking for care instead?{" "}
          <Link to="/auth/register/family" className="font-medium text-primary hover:underline">
            Family signup
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}

function SectionHeading({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function StepBasic() {
  return (
    <>
      <SectionHeading title="Basic information" desc="How families will get in touch with you." />
      <div className="space-y-2">
        <Label>Full name</Label>
        <Input placeholder="Anita Sharma" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Email address</Label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label>Mobile number</Label>
          <Input type="tel" placeholder="+91 98•••• ••••" />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Password</Label>
          <Input type="password" placeholder="At least 8 characters" />
        </div>
        <div className="space-y-2">
          <Label>Confirm password</Label>
          <Input type="password" placeholder="Re-enter password" />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Date of birth</Label>
          <Input type="date" />
        </div>
        <div className="space-y-2">
          <Label>Gender</Label>
          <Select>
            <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="na">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label>City</Label>
        <Input placeholder="Bengaluru" />
      </div>
    </>
  );
}

function StepProfessional() {
  return (
    <>
      <SectionHeading title="Professional information" desc="Tell families about your practice." />
      <div className="space-y-2">
        <Label>Caregiver category</Label>
        <Select>
          <SelectTrigger><SelectValue placeholder="Choose category" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="rn">Registered Nurse</SelectItem>
            <SelectItem value="att">Elderly Attendant</SelectItem>
            <SelectItem value="pt">Physiotherapist</SelectItem>
            <SelectItem value="post">Post-Hospital Care</SelectItem>
            <SelectItem value="palliative">Palliative Care</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Highest qualification</Label>
          <Input placeholder="e.g. B.Sc Nursing" />
        </div>
        <div className="space-y-2">
          <Label>Years of experience</Label>
          <Input type="number" placeholder="5" />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Languages spoken</Label>
        <Input placeholder="English, Hindi, Kannada" />
      </div>
      <div className="space-y-2">
        <Label>About yourself</Label>
        <Textarea
          rows={4}
          placeholder="A short note families will see on your profile — your approach, strengths, and what you enjoy about elderly care."
        />
      </div>
    </>
  );
}

function StepServices() {
  return (
    <>
      <SectionHeading title="Services & availability" desc="Set your rates and where you'll work." />
      <div className="space-y-2">
        <Label>Services offered</Label>
        <div className="grid grid-cols-2 gap-2 rounded-xl border border-border p-3 sm:grid-cols-3">
          {[
            "Nursing care", "Elderly attendant", "Physiotherapy", "Post-op recovery",
            "Diabetes care", "Wound dressing", "Companion care", "Palliative care", "Dementia support",
          ].map((s) => (
            <label key={s} className="flex items-center gap-2 text-sm">
              <Checkbox /> {s}
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="space-y-2">
          <Label>Hourly rate (₹)</Label>
          <Input type="number" placeholder="450" />
        </div>
        <div className="space-y-2">
          <Label>Daily rate (₹)</Label>
          <Input type="number" placeholder="2,500" />
        </div>
        <div className="space-y-2">
          <Label>Live-in rate (₹)<span className="ml-1 text-xs text-muted-foreground">Optional</span></Label>
          <Input type="number" placeholder="18,000 / month" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Service areas / available cities</Label>
        <Input placeholder="Bengaluru, Whitefield, Indiranagar" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Working days</Label>
          <div className="flex flex-wrap gap-1.5 rounded-xl border border-border p-2">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
              <label key={d} className="cursor-pointer">
                <input type="checkbox" className="peer sr-only" />
                <span className="grid h-8 w-10 place-items-center rounded-md border border-border text-xs peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground">
                  {d}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Working hours</Label>
          <div className="flex items-center gap-2">
            <Input type="time" defaultValue="08:00" />
            <span className="text-muted-foreground">to</span>
            <Input type="time" defaultValue="20:00" />
          </div>
        </div>
      </div>

      <label className="flex items-center gap-2 rounded-xl border border-border bg-primary-soft/40 p-3 text-sm">
        <Checkbox /> I'm available for <strong>home visits</strong> in my service areas.
      </label>
    </>
  );
}

function StepVerification() {
  return (
    <>
      <SectionHeading
        title="Verification documents"
        desc="Uploads are secure and reviewed by our compliance team."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <UploadTile label="Profile photo" hint="Clear, front-facing photo" icon={Camera} required />
        <UploadTile label="Government ID" hint="Aadhaar / Passport / Driving licence" required />
        <UploadTile label="Professional certificate" hint="Nursing council / degree certificate" required />
        <UploadTile label="Experience certificate" hint="Optional — previous employers" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Emergency contact name</Label>
          <Input placeholder="Full name" />
        </div>
        <div className="space-y-2">
          <Label>Emergency contact number</Label>
          <Input type="tel" placeholder="+91 98•••• ••••" />
        </div>
      </div>

      <label className="flex items-start gap-2 text-sm text-muted-foreground">
        <Checkbox className="mt-0.5" /> I consent to background verification and agree to the{" "}
        <a className="text-primary hover:underline" href="#">Caregiver Terms</a> and{" "}
        <a className="text-primary hover:underline" href="#">Code of Conduct</a>.
      </label>
    </>
  );
}

function UploadTile({
  label, hint, icon: Icon = Upload, required,
}: { label: string; hint: string; icon?: any; required?: boolean }) {
  return (
    <label className="group flex cursor-pointer flex-col items-start gap-2 rounded-xl border border-dashed border-border p-4 transition hover:border-primary hover:bg-primary-soft/30">
      <div className="flex w-full items-center justify-between">
        <span className="text-sm font-medium">
          {label} {required && <span className="text-destructive">*</span>}
        </span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-soft text-primary">
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p className="text-xs text-muted-foreground">{hint}</p>
      <p className="text-xs text-primary opacity-0 transition group-hover:opacity-100">
        Click to upload · PNG, JPG, PDF up to 8 MB
      </p>
      <input type="file" className="hidden" />
    </label>
  );
}

export default CaregiverRegister;
