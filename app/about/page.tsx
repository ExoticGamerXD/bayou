import type { Metadata } from "next";
import AboutHero       from "@/components/about/AboutHero";
import AboutStory      from "@/components/about/AboutStory";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutRoom       from "@/components/about/AboutRoom";
import AboutCTA        from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Bayou — New Orleans-inspired brunch on Oliver Plunkett Street, Cork City. Dark roux, beignets fried to order, and a bright room to eat them in.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutPhilosophy />
      <AboutRoom />
      <AboutCTA />
    </>
  );
}
