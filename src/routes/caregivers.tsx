import { Link } from "react-router-dom";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { caregivers } from "@/lib/mock-data";
import { BadgeCheck, MapPin, Search, Star } from "lucide-react";


function CaregiversPublic() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <section className="hero-gradient">
        <div className="container-page py-14 md:py-20">
          <Badge variant="secondary" className="rounded-full border border-border bg-card">Caregivers</Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Meet the professionals behind SilverCare</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every caregiver is background-verified, trained, and reviewed by families like yours. Sign in to book a visit.
          </p>
          <div className="mt-8 flex max-w-xl gap-2 rounded-full border border-border bg-card p-1 pl-4 shadow-soft">
            <Search className="my-auto h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by city or specialty" className="border-0 bg-transparent focus-visible:ring-0" />
            <Button className="rounded-full">Search</Button>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caregivers.map((c) => (
            <div key={c.id} className="surface-card p-5 transition hover:-translate-y-0.5 hover:shadow-card">
              <div className="flex items-start gap-4">
                <Avatar className="h-14 w-14">
                  {c.photo && <AvatarImage src={c.photo} alt={c.name} />}
                  <AvatarFallback className="bg-primary text-primary-foreground">{c.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="truncate font-semibold">{c.name}</h3>
                    {c.verified && <BadgeCheck className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{c.role}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {c.city} · {c.experience}y experience
                  </p>
                </div>
              </div>
              <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">{c.bio}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.specialties.slice(0, 3).map((s) => (
                  <span key={s} className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">{s}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-1 text-sm"><Star className="h-4 w-4 fill-warning text-warning" /><span className="font-medium">{c.rating}</span><span className="text-muted-foreground">({c.reviews})</span></div>
                <p className="text-sm"><span className="font-semibold">₹{c.hourlyRate}</span><span className="text-muted-foreground">/hr</span></p>
              </div>
              <Button asChild className="mt-4 w-full rounded-full" size="sm">
                <Link to="/auth/login">Sign in to book</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

export default CaregiversPublic;
