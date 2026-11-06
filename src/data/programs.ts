export type ProgramId = "foundation" | "forge" | "apex";

export interface Program {
  id: ProgramId;
  name: string;
  level: string;
  forWho: string;
  weeks: number;
  daysPerWeek: number;
  included: string[];
  price: number;
  popular?: boolean;
}

export const MONTHLY_ADDON = 39;

export const programs: Program[] = [
  {
    id: "foundation",
    name: "Foundation",
    level: "Beginner",
    forWho: "New lifters who want to build strength the right way, from day one.",
    weeks: 8,
    daysPerWeek: 3,
    included: ["Full-body strength basics", "Form video library", "Progress tracker"],
    price: 79,
  },
  {
    id: "forge",
    name: "Forge",
    level: "Intermediate",
    forWho: "Lifters with a base who've stalled and need a real plan to keep progressing.",
    weeks: 12,
    daysPerWeek: 4,
    included: [
      "Upper/lower split",
      "Progressive overload plan",
      "Meal framework",
      "Weekly check-in template",
    ],
    price: 149,
    popular: true,
  },
  {
    id: "apex",
    name: "Apex",
    level: "Advanced",
    forWho: "Experienced athletes chasing peak performance and serious numbers.",
    weeks: 16,
    daysPerWeek: 5,
    included: [
      "Periodized training blocks",
      "Advanced techniques",
      "Nutrition cycling guide",
      "Private community access",
    ],
    price: 249,
  },
];
