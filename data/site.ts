export const SITE = {
  name:    "Bayou",
  tagline: "Brunch with a Louisiana accent.",
  description:
    "New Orleans comfort food in a bright Cork City room. Gumbo, jambalaya, po' boys and beignets — served daytime, Wednesday to Sunday.",

  address: {
    street:  "8a Oliver Plunkett Street",
    city:    "Cork",
    county:  "Co. Cork",
    eircode: "T12 AB34",
    mapsUrl: "https://maps.google.com",
  },

  contact: {
    phone:        "021 245 5740",
    phoneIntl:    "+353212455740",
    email:        "hello@bayoucork.ie",
    instagramTag: "@bayou_cork",
  },

  social: {
    instagram: "https://instagram.com/bayou_cork",
    facebook:  "https://facebook.com/bayoucork",
  },

  hours: [
    { day: "Monday",    closed: true },
    { day: "Tuesday",   closed: true },
    { day: "Wednesday", open: "12:00", kitchenClose: "15:00", barClose: "15:00" },
    { day: "Thursday",  open: "12:00", kitchenClose: "15:00", barClose: "15:00" },
    { day: "Friday",    open: "10:00", kitchenClose: "15:00", barClose: "15:00" },
    { day: "Saturday",  open: "10:00", kitchenClose: "15:00", barClose: "15:00" },
    { day: "Sunday",    open: "10:00", kitchenClose: "15:00", barClose: "15:00" },
  ],

  bookingProvider: "custom" as const,
} as const;
