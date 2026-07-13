import { PageHeader, StatCard } from "@/components/dashboard/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, ThumbsUp } from "lucide-react";


const reviews = [
  { name: "Anjali R.", rating: 5, date: "Nov 24, 2026", body: "Anita is thoughtful, punctual, and deeply skilled. Dad looks forward to her visits." },
  { name: "Vikram S.", rating: 5, date: "Nov 18, 2026", body: "Communication is excellent — care notes after every visit, we always know what's happening." },
  { name: "Dr. Neha P.", rating: 4, date: "Nov 09, 2026", body: "Follows clinical instructions precisely. Would recommend for post-discharge cases." },
];

function Reviews() {
  return (
    <div className="space-y-8">
      <PageHeader title="Reviews" subtitle="What families are saying about your care." />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Average rating" value="4.9" icon={Star} tone="warning" />
        <StatCard label="Total reviews" value="184" icon={ThumbsUp} />
        <StatCard label="5-star reviews" value="167" hint="91%" icon={Star} tone="success" />
      </div>
      <div className="surface-card divide-y divide-border">
        {reviews.map((r) => (
          <div key={r.date} className="p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10"><AvatarFallback className="bg-primary text-primary-foreground text-xs">{r.name.split(" ").map(s=>s[0]).slice(0,2).join("")}</AvatarFallback></Avatar>
                <div><p className="font-medium">{r.name}</p><p className="text-xs text-muted-foreground">{r.date}</p></div>
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-warning text-warning" />)}
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">"{r.body}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
