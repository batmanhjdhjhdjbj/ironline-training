import hero from "@/assets/hero.jpg";
import { PrimaryCTA } from "./shared";

const stats = [
  { v: "500+", l: "clients coached" },
  { v: "12", l: "years experience" },
  { v: "4.9★", l: "average rating" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-20 pt-32 md:items-center"
    >
      <img
        src={hero}
        alt="Athlete setting up for a heavy deadlift"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-overlay/90 via-overlay/50 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-7xl px-5">
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-700">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Coach Mo · IRONLINE Training
          </p>
          <h1 className="text-6xl font-bold leading-[0.9] sm:text-7xl md:text-8xl">
            Stop Guessing.
            <br />
            <span className="text-primary">Start Training.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground md:text-xl">
            Structured, coach-built strength programs you can follow anywhere — gym, garage, or on
            the road.
          </p>
          <PrimaryCTA className="mt-8" />
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="font-display text-3xl font-bold">{s.v}</dd>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
