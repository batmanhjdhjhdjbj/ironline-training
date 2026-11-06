import c1 from "@/assets/client1.jpg";
import c2 from "@/assets/client2.jpg";
import hero from "@/assets/hero.jpg";
import coach from "@/assets/coach.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Reveal, SectionTitle } from "./shared";

const items = [
  { name: "Jess", result: "Lost 18 lbs in 12 weeks", quote: "First program I've ever actually finished. Forge made every session obvious.", img: c1, program: "Forge" },
  { name: "Daniel", result: "First 10 strict pull-ups", quote: "Went from zero to ten in Foundation. The form videos were a game changer.", img: c2, program: "Foundation" },
  { name: "Andre", result: "+85 lbs on deadlift", quote: "Apex blocks are no joke. Hit a 500 lb pull at the end of week 16.", img: hero, program: "Apex" },
  { name: "Priya", result: "Down 2 dress sizes", quote: "Simple, consistent, measurable — it's not a slogan, it works.", img: coach, program: "Forge" },
];

function Card({ t }: { t: (typeof items)[number] }) {
  return (
    <figure className="flex h-full flex-col border border-border bg-card">
      <div className="relative grid grid-cols-2">
        <div className="relative aspect-square overflow-hidden">
          <img src={t.img} alt={`${t.name} before`} loading="lazy" width={400} height={400} className="h-full w-full object-cover grayscale brightness-50" />
          <span className="absolute bottom-2 left-2 bg-background px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">Before</span>
        </div>
        <div className="relative aspect-square overflow-hidden">
          <img src={t.img} alt={`${t.name} after`} loading="lazy" width={400} height={400} className="h-full w-full object-cover" />
          <span className="absolute bottom-2 left-2 bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">After</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-display text-2xl font-bold uppercase text-primary">{t.result}</p>
        <blockquote className="mt-3 flex-1 text-muted-foreground">“{t.quote}”</blockquote>
        <figcaption className="mt-4 text-sm font-semibold uppercase tracking-wider">{t.name} · {t.program}</figcaption>
      </div>
    </figure>
  );
}

export function Results() {
  return (
    <section id="results" className="mx-auto max-w-7xl px-5 py-24 md:py-32">
      <SectionTitle eyebrow="Results" title="Real People. Real Numbers." />
      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
        {items.map((t) => <Reveal key={t.name} className="h-full"><Card t={t} /></Reveal>)}
      </div>
      <div className="md:hidden">
        <Carousel opts={{ align: "start" }} aria-label="Client testimonials">
          <CarouselContent>
            {items.map((t) => <CarouselItem key={t.name} className="basis-[85%]"><Card t={t} /></CarouselItem>)}
          </CarouselContent>
          <div className="mt-6 flex justify-center gap-3">
            <CarouselPrevious className="static translate-y-0 rounded-none" />
            <CarouselNext className="static translate-y-0 rounded-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
