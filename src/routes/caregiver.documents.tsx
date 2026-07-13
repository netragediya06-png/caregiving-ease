import { PageHeader } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UploadCloud, FileText, CheckCircle2, Clock } from "lucide-react";


const docs = [
  { name: "Government ID (Aadhaar)", status: "Verified", at: "Aug 14, 2025" },
  { name: "Nursing license", status: "Verified", at: "Aug 18, 2025" },
  { name: "BLS / First Aid certificate", status: "Verified", at: "Aug 18, 2025" },
  { name: "Background check report", status: "Verified", at: "Aug 22, 2025" },
  { name: "COVID vaccination certificate", status: "Pending review", at: "Today" },
];

function Docs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Verification documents" subtitle="Upload and manage the documents that build family trust." />

      <label className="surface-card flex cursor-pointer flex-col items-center justify-center border-dashed p-10 text-center transition hover:bg-muted/50">
        <UploadCloud className="h-8 w-8 text-primary" />
        <p className="mt-3 font-medium">Drop files here or click to upload</p>
        <p className="text-xs text-muted-foreground">PDF, JPG or PNG · Up to 10 MB</p>
        <input type="file" className="hidden" />
      </label>

      <div className="surface-card divide-y divide-border">
        {docs.map((d) => {
          const verified = d.status === "Verified";
          return (
            <div key={d.name} className="flex items-center gap-4 p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-muted text-muted-foreground"><FileText className="h-4 w-4" /></span>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{d.name}</p>
                <p className="text-xs text-muted-foreground">Updated {d.at}</p>
              </div>
              <Badge variant="secondary" className={`rounded-full ${verified ? "bg-success/10 text-success" : "bg-warning/15 text-warning-foreground"}`}>
                {verified ? <CheckCircle2 className="mr-1 h-3 w-3" /> : <Clock className="mr-1 h-3 w-3" />}
                {d.status}
              </Badge>
              <Button variant="ghost" size="sm">View</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Docs;
