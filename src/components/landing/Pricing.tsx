import { useState } from "react";
import { ShieldCheck, Check } from "lucide-react";
import { toast } from "sonner";
import { programs, MONTHLY_ADDON, type Program } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Reveal, SectionTitle } from "./shared";

export function Pricing() {
  const [coaching, setCoaching] = useState(false);
  const [selected, setSelected] = useState<Program | null>(null);

  return (
    <section id="pricing" className="border-y border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Pricing" title="Invest Once. Train For Life." sub="Every program is yours to keep. Add monthly coaching for direct feedback from Coach Mo." />
        <div role="radiogroup" aria-label="Billing option" className="mx-auto mb-14 flex w-fit border border-border p-1">
          {[{ v: false, l: "One-time" }, { v: true, l: `+ Monthly coaching ($${MONTHLY_ADDON}/mo)` }].map((o) => (
            <button key={o.l} role="radio" aria-checked={coaching === o.v} onClick={() => setCoaching(o.v)}
              className={cn("px-4 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-primary", coaching === o.v ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground")}>
              {o.l}
            </button>
          ))}
        </div>
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <Reveal key={p.id} className="h-full">
              <div className={cn("relative flex h-full flex-col overflow-hidden border bg-card p-8", p.popular ? "border-primary shadow-glow md:-my-4 md:py-12" : "border-border")}>
                {p.popular && <span className="absolute right-[-42px] top-6 w-40 rotate-45 bg-primary py-1 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground">Best Value</span>}
                <h3 className="text-3xl font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.level} · {p.weeks} weeks · {p.daysPerWeek} days/wk</p>
                <p className="mt-6 font-display text-6xl font-bold">${p.price}</p>
                <p className="text-sm text-muted-foreground">one-time{coaching && <span className="text-primary"> + ${MONTHLY_ADDON}/mo coaching</span>}</p>
                <ul className="my-6 flex-1 space-y-2 text-sm">
                  {p.included.map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />{x}</li>)}
                  {coaching && <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />Weekly 1:1 check-ins with Coach Mo</li>}
                </ul>
                <Button variant="cta" size="xl" className="w-full" onClick={() => setSelected(p)} aria-label={`Start your program: ${p.name}`}>Start Your Program</Button>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-12 flex w-fit items-center gap-3 border border-border px-5 py-3 text-sm font-semibold uppercase tracking-wider">
          <ShieldCheck className="h-5 w-5 text-primary" aria-hidden /> 30-day money-back guarantee
        </p>
      </div>
      <Checkout program={selected} coaching={coaching} onClose={() => setSelected(null)} />
    </section>
  );
}

function Checkout({ program, coaching, onClose }: { program: Program | null; coaching: boolean; onClose: () => void }) {
  return (
    <Dialog open={!!program} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="rounded-none border-border">
        {program && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-3xl uppercase">{program.name} Program</DialogTitle>
              <DialogDescription>Demo checkout — no payment will be taken.</DialogDescription>
            </DialogHeader>
            <div className="space-y-1 border-y border-border py-4 text-sm">
              <div className="flex justify-between"><span>{program.name} ({program.weeks} weeks)</span><span>${program.price}</span></div>
              {coaching && <div className="flex justify-between"><span>Monthly coaching</span><span>${MONTHLY_ADDON}/mo</span></div>}
              <div className="flex justify-between pt-2 font-display text-xl"><span>Due today</span><span>${program.price + (coaching ? MONTHLY_ADDON : 0)}</span></div>
            </div>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); toast.success(`You're in! Your ${program.name} plan is on its way (demo).`); }}>
              <div className="space-y-2"><Label htmlFor="co-name">Full name</Label><Input id="co-name" required className="rounded-none" /></div>
              <div className="space-y-2"><Label htmlFor="co-email">Email</Label><Input id="co-email" type="email" required className="rounded-none" /></div>
              <div className="space-y-2"><Label htmlFor="co-card">Card number</Label><Input id="co-card" inputMode="numeric" placeholder="4242 4242 4242 4242" className="rounded-none" /></div>
              <Button type="submit" variant="cta" size="xl" className="w-full">Complete Purchase</Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
