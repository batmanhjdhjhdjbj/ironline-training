import { useState } from "react";
import { Instagram, Youtube, Music2 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const cols = [
  { h: "Programs", l: [["Foundation", "#program-foundation"], ["Forge", "#program-forge"], ["Apex", "#program-apex"]] },
  { h: "Company", l: [["About", "#about"], ["FAQ", "#faq"], ["Results", "#results"]] },
  { h: "Legal & Contact", l: [["Privacy Policy", "#"], ["Terms", "#"], ["Refund Policy", "#faq"], ["support@ironline.example", "mailto:support@ironline.example"]] },
];

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="border-t border-border pt-16 pb-8">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold tracking-widest">IRON<span className="text-primary">LINE</span></p>
          <p className="mt-3 text-sm text-muted-foreground">Coach-built strength programs by Marcus “Coach Mo” Reyes. Simple, consistent, measurable.</p>
          <ul className="mt-5 flex gap-3">
            {[[Instagram, "Instagram"], [Youtube, "YouTube"], [Music2, "TikTok"]].map(([I, l]) => {
              const Icon = I as typeof Instagram;
              return <li key={l as string}><a href="#" aria-label={l as string} className="grid h-10 w-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"><Icon className="h-4 w-4" /></a></li>;
            })}
          </ul>
        </div>
        {cols.map((c) => (
          <nav key={c.h} aria-label={c.h}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em]">{c.h}</p>
            <ul className="space-y-2 text-sm">
              {c.l.map(([t, h]) => <li key={t}><a href={h} className="text-muted-foreground hover:text-foreground focus-visible:text-primary focus-visible:outline-none">{t}</a></li>)}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-6 border-t border-border px-5 pt-8 md:flex-row md:items-center md:justify-between">
        <form className="flex max-w-sm gap-2" onSubmit={(e) => { e.preventDefault(); toast.success("Thanks! You're on the list."); setEmail(""); }}>
          <label htmlFor="nl" className="sr-only">Email for training tips</label>
          <Input id="nl" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Weekly training tips — your email" className="h-9 rounded-none text-sm" />
          <Button type="submit" variant="outline" size="sm" className="h-9 rounded-none">Subscribe</Button>
        </form>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} IRONLINE Training. All rights reserved.</p>
      </div>
    </footer>
  );
}
