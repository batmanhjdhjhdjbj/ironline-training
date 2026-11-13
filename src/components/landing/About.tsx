import coach from "@/assets/coach.jpg";
import { Award, Dumbbell, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow, PrimaryCTA, Reveal, SectionTitle } from "./shared";

const creds = [
  { icon: Award, t: "CSCS Certified", d: "NSCA Strength & Conditioning Specialist" },
  { icon: Dumbbell, t: "NASM-CPT", d: "Certified Personal Trainer since 2014" },
  { icon: Trophy, t: "D1 Athlete", d: "Former college football linebacker" },
];

export function About() {
  return (
    <section id="about" className="border-y border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <img
            src={coach}
            alt="Coach Marcus 'Mo' Reyes"
            loading="lazy"
            width={896}
            height={1152}
            className="aspect-[4/5] w-full border border-border object-cover"
          />
        </Reveal>
        <Reveal>
          <Eyebrow>Meet your coach</Eyebrow>
          <h2 className="text-5xl font-bold leading-none md:text-6xl">Marcus “Coach Mo” Reyes</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Ex-college athlete turned strength coach. After 12 years and 500+ clients, Mo built
            IRONLINE on one philosophy:
            <span className="text-foreground"> simple, consistent, measurable.</span> No fads, no
            fluff — just programming that works when you show up.
          </p>
          <ul className="mt-8 space-y-4">
            {creds.map(({ icon: I, t, d }) => (
              <li key={t} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-primary text-primary-foreground">
                  <I className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-xl uppercase">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const steps = [
  { t: "Choose your program", d: "Pick Foundation, Forge, or Apex based on your experience." },
  {
    t: "Get your plan instantly",
    d: "Access your full program, videos, and tools the moment you join.",
  },
  {
    t: "Train and track progress",
    d: "Follow the plan, log your lifts, and watch the numbers climb.",
  },
];

export function HowItWorks() {
  return (
    <section aria-labelledby="how" className="mx-auto max-w-7xl px-5 py-24 md:py-32">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <Eyebrow>How it works</Eyebrow>
        <h2 id="how" className="text-4xl font-bold md:text-6xl">
          Three Steps. Zero Guesswork.
        </h2>
      </div>
      <ol className="grid gap-px bg-border md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.t} className="bg-background p-8">
            <Reveal>
              <span className="font-display text-7xl font-bold text-primary">0{i + 1}</span>
              <h3 className="mt-4 text-2xl font-bold">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

const faqs = [
  {
    q: "What equipment do I need?",
    a: "Foundation works with dumbbells and a bench. Forge and Apex are built for a standard gym with a barbell, rack, and cables — with swaps provided for home setups.",
  },
  {
    q: "Is this beginner-friendly?",
    a: "Yes. Foundation is designed for complete beginners, with a form video for every movement.",
  },
  {
    q: "What's the refund policy?",
    a: "Every program comes with a 30-day money-back guarantee. Not for you? Email us for a full refund.",
  },
  {
    q: "How are programs delivered?",
    a: "Instantly after purchase via the IRONLINE web app — accessible on phone, tablet, or desktop.",
  },
  { q: "Can I switch programs?", a: "Absolutely. Upgrade anytime and only pay the difference." },
  {
    q: "Is nutrition included?",
    a: "Forge includes a meal framework and Apex includes a full nutrition cycling guide. Foundation focuses on training basics.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 pb-24 md:pb-32">
      <SectionTitle eyebrow="FAQ" title="Questions, Answered" />
      <Accordion type="single" collapsible className="border-t border-border">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`q${i}`}>
            <AccordionTrigger className="py-6 text-left font-display text-xl uppercase hover:text-primary hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section aria-labelledby="final" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h2 id="final" className="text-5xl font-bold leading-none md:text-7xl">
          Your Next 12 Weeks Start Today
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg">
          Twelve weeks from now you'll wish you started today. So start.
        </p>
        <button
          onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-10 h-14 bg-background px-10 font-display text-lg font-bold uppercase tracking-wider text-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
        >
          Start Your Program
        </button>
      </div>
    </section>
  );
}

export { PrimaryCTA };
