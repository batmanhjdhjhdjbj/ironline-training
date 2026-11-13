import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { PrimaryCTA } from "./shared";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 py-2 backdrop-blur"
          : "border-transparent bg-transparent py-5",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a
          href="#top"
          className="font-display text-2xl font-bold tracking-widest focus-visible:outline-2 focus-visible:outline-primary"
        >
          IRON<span className="text-primary">LINE</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground focus-visible:text-primary focus-visible:outline-none"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <PrimaryCTA size="sm" />
      </nav>
    </header>
  );
}
