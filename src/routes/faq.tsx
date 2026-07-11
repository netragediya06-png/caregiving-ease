import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/mock-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — SilverCare" },
      { name: "description", content: "Frequently asked questions about SilverCare's home healthcare services." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <section className="hero-gradient">
        <div className="container-page py-16 md:py-20">
          <Badge variant="secondary" className="rounded-full border border-border bg-card">FAQ</Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Frequently asked questions</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Everything families and caregivers ask us — in one place.</p>
        </div>
      </section>
      <section className="container-page py-14">
        <Accordion type="single" collapsible className="surface-card divide-y divide-border p-2">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`f-${i}`} className="border-0 px-4">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">Still stuck? Our care team is one message away.</p>
          <Button asChild className="mt-3 rounded-full"><Link to="/support">Submit a support request</Link></Button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
