import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ProofStrip, Programs } from "@/components/landing/Programs";
import { Pricing } from "@/components/landing/Pricing";
import { Results } from "@/components/landing/Results";
import { About, HowItWorks, FAQ, FinalCTA } from "@/components/landing/About";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IRONLINE Training — Coach-Built Strength Programs" },
      { name: "description", content: "Stop guessing, start training. Structured strength programs by Coach Mo Reyes, CSCS. Follow anywhere." },
      { property: "og:title", content: "IRONLINE Training — Coach-Built Strength Programs" },
      { property: "og:description", content: "Structured, coach-built programs you can follow anywhere. 30-day money-back guarantee." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <Programs />
        <Pricing />
        <Results />
        <About />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
