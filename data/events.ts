export interface BayouEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image?: string;
  bookingUrl?: string;
}

// Bayou's specials change daily and live on the in-store blackboard.
// These are representative weekly fixtures — the real list is always on the board.
export const events: BayouEvent[] = [
  {
    id: "weekend-brunch",
    title: "Weekend Brunch",
    date: "2026-06-27",
    time: "10:00",
    description:
      "The full spread, Friday through Sunday from 10am. Beignets, biscuits, gumbo and the morning crowd.",
    image: "/images/dishes/beignets.png",
  },
  {
    id: "shrimp-saturday",
    title: "Shrimp Saturday",
    date: "2026-06-27",
    time: "12:00",
    description:
      "Cajun grilled shrimp, every Saturday while it lasts — in a po' boy or over succotash.",
    image: "/images/dishes/shrimp-po-boy.png",
  },
  {
    id: "blackboard-specials",
    title: "On the Blackboard",
    date: "2026-06-24",
    time: "12:00",
    description:
      "Whatever the kitchen got excited about that morning. Changes daily — pop in or call to hear today's.",
    image: "/images/dishes/shrimp-succotash.png",
  },
];
