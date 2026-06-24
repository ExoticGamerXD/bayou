export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  detail: string;
  rating: 5;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The gumbo is the real deal — dark, smoky, an hour in the making. Best brunch spot in Cork, hands down. The beignets are dangerous.",
    author: "Aoife M.",
    detail: "Cork City",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "We came for coffee and ended up ordering half the board. The shrimp po' boy is unreal. Bright, friendly room — exactly the kind of place you want on a Saturday morning.",
    author: "James & Róisín T.",
    detail: "Saturday regulars",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Proper New Orleans cooking in the middle of Cork. The fried chicken biscuit changed my mornings. No fuss, just brilliant food on lovely blue plates.",
    author: "Ciarán B.",
    detail: "In most weekends",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "A little corner of Louisiana on Oliver Plunkett Street. Gumbo, jambalaya, beignets — and the friendliest service in the city. Go hungry.",
    author: "Elena V.",
    detail: "Food writer, June 2026",
    rating: 5,
  },
];
