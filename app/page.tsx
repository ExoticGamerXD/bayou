import type { Metadata } from "next";
import Hero            from "@/components/sections/Hero";
import Manifesto       from "@/components/sections/Manifesto";
import SignatureDishes from "@/components/sections/SignatureDishes";
import Atmosphere      from "@/components/sections/Atmosphere";
import MenuPreview     from "@/components/sections/MenuPreview";
import LiveEvents      from "@/components/sections/LiveEvents";
import Testimonials    from "@/components/sections/Testimonials";
import BookingCTA      from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  title: "Bayou — Cork City",
  description:
    "A New Orleans supper house in the heart of Cork City. Dark-roux gumbo, candlelit rooms, and live jazz until late.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <SignatureDishes />
      <Atmosphere />
      <MenuPreview />
      <LiveEvents />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
