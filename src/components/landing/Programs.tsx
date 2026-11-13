import { Check } from "lucide-react";
import { programs } from "@/data/programs";
import { cn } from "@/lib/utils";
import { PrimaryCTA, Reveal, SectionTitle } from "./shared";

const badges = ["NASM-CPT", "NSCA-CSCS", "Precision Nutrition L1", "USA Weightlifting"];

export function ProofStrip() {
  return (
    <section aria-label="Certifications" className="border-y border-border bg-card py-8">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5">
        {badges.map((b) => (
          <li
            key={b}
            className="font-display text-lg uppercase tracking-widest text-muted-foreground"
          >
            {b}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-5 py-24 md:py-32">
      <SectionTitle
        eyebrow="Programs"
        title="Pick Your Starting Line"
        sub="Three proven programs. One clear path from where you are to where you want to be."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {programs.map((p, i) => (
          <Reveal key={p.id} className={cn("h-full", i === 1 && "md:delay-100")}>
            <article
              id={`program-${p.id}`}
              className={cn(
                "relative flex h-full flex-col border bg-card p-8 transition-transform duration-300 hover:-translate-y-1",
                p.popular ? "border-primary" : "border-border",
              )}
            >
              {p.popular && (
                <span className="absolute -top-3 left-8 bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </span>
              )}
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {p.level}
              </p>
              <h3 className="mt-2 text-5xl font-bold">{p.name}</h3>
              <p className="mt-3 text-muted-foreground">{p.forWho}</p>
              <dl className="my-6 grid grid-cols-2 border-y border-border py-4">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    Duration
                  </dt>
                  <dd className="font-display text-2xl">{p.weeks} weeks</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    Structure
                  </dt>
                  <dd className="font-display text-2xl">{p.daysPerWeek} days/wk</dd>
                </div>
              </dl>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider">What's included</p>
              <ul className="space-y-2">
                {p.included.map((x) => (
                  <li key={x} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-14 text-center">
        <PrimaryCTA />
      </div>
    </section>
  );
}
