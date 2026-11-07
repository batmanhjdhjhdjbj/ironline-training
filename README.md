# IRONLINE Training

Build a modern, high-converting, frontend-only landing page for a personal training business called IRONLINE Training, run by Marcus “Coach Mo” Reyes, a certified strength and conditioning coach. This is a prototype: use placeholder content and mock data, with no backend, auth, or real payments.

Single goal: Every section should drive the visitor toward one primary CTA: “Start Your Program”, which scrolls to the pricing section. Repeat it in the nav, hero, after the programs section, and in the final CTA band. Don’t add competing CTAs such as “Book a call” or “Contact us” in the body.

Design direction:

Dark, bold, athletic aesthetic: near-black background (
#0A0A0A), off-white text, and one high-energy accent (electric orange 
#FF4D1F)
Heavy condensed display font for headlines (e.g., Oswald or Bebas Neue) paired with a clean sans-serif body font (e.g., Inter)
Generous spacing, large type, sharp corners, subtle hover and scroll-reveal animations
Fully responsive, mobile-first, with a sticky nav that shrinks on scroll
Use Tailwind and shadcn/ui components. Use placeholder images from Unsplash-style gym and training photography.

Sections, in order:

Sticky nav: logo wordmark “IRONLINE”, anchor links (Programs, Results, About, FAQ), and the CTA button.
Hero: full-width background image with dark overlay. Headline: “Stop Guessing. Start Training.” Subheadline: one sentence about structured, coach-built programs you can follow anywhere. Primary CTA button plus three small trust stats beneath (e.g., “500+ clients coached”, “12 years experience”, “4.9★ average rating”).
Social proof strip: a row of placeholder “as seen in” or certification badges (NASM-CPT, CSCS, Precision Nutrition).
Programs: 3 cards, each with a name, who it’s for, duration, weekly structure, and a “What’s included” checklist.
Foundation (beginners, 8 weeks, 3 days/week): full-body strength basics, form video library, progress tracker
Forge (intermediate, 12 weeks, 4 days/week, tagged “Most Popular”): upper/lower split, progressive overload plan, meal framework, weekly check-in template
Apex (advanced, 16 weeks, 5 days/week): periodized training blocks, advanced techniques, nutrition cycling guide, private community access
Pricing: tie directly to the program cards.
Foundation: $79 one-time
Forge: $149 one-time (highlighted, with a “Best Value” ribbon)
Apex: $249 one-time
Add a toggle for “One-time” vs. “Monthly coaching add-on (+$39/mo)”. Include a “30-day money-back guarantee” badge under the cards. Each card button reads “Start Your Program” and opens a simple mock checkout modal (no real payment).
Results / testimonials: 3 to 4 placeholder client testimonials with first name, a result (“Lost 18 lbs in 12 weeks”), and a before/after-style image placeholder. Include a carousel on mobile.
About Coach Mo: photo placeholder, a short bio (ex-college athlete turned coach, philosophy of “simple, consistent, measurable”), and 3 credentials.
How it works: 3 steps (Choose your program → Get your plan instantly → Train and track progress).
FAQ: accordion with 6 questions (equipment needed, beginner-friendly, refund policy, how programs are delivered, can I switch programs, nutrition included).
Final CTA band: bold headline “Your Next 12 Weeks Start Today” with the primary CTA.
Footer: four columns:
Brand blurb and logo
Programs (links to the three programs)
Company (About, FAQ, Results)
Legal and contact (Privacy Policy, Terms, Refund Policy, support@ironline.example)
Also include social icons (Instagram, YouTube, TikTok), a newsletter email input (mock, with a success toast), and a copyright line. Keep the newsletter visually secondary so it doesn’t compete with the main CTA.

Technical notes:

Single-page React app with smooth scrolling between sections
Componentize each section cleanly
Store program and pricing data in one typed data file so it’s easy to edit
Add accessible labels, focus states, and good color contrast
Do not connect any backend or database

A few tips for using it in Lovable: paste the whole thing as your first message, then iterate with small follow-ups (“make the hero shorter,” “swap the accent to green”). When you’re ready to make it real, you can ask Lovable to add Stripe and Supabase in a later step.

Want me to tailor it to a specific niche, such as women’s strength training, online-only coaching, or athletes?

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/535d0679-fdd7-5ba6-82ef-6f6cec9b9012).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
