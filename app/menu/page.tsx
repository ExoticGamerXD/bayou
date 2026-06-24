import type { Metadata } from "next";
import { menu } from "@/data/menu";
import type { MenuSection } from "@/types/menu";
import MenuProgress    from "@/components/menu/MenuProgress";
import MenuHero        from "@/components/menu/MenuHero";
import MenuNav         from "@/components/menu/MenuNav";
import MenuSectionComp from "@/components/menu/MenuSection";
import SpecialsCard    from "@/components/menu/SpecialsCard";
import MenuBookingStrip from "@/components/menu/MenuBookingStrip";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Dark-roux gumbo, blackened fish, étouffée, beignets, and a full bar program. The Bayou menu — Cork City.",
};

// Ordered sections with display configuration
const sections: Array<{
  data: MenuSection;
  bgVariant: "black" | "cypress" | "roux";
  compact?: boolean;
  chalkNote?: string;
}> = [
  {
    data:       menu.breakfast,
    bgVariant:  "black",
    chalkNote:  "first thing",
  },
  {
    data:       menu.allDay,
    bgVariant:  "cypress",
    chalkNote:  "patience required",
  },
  {
    data:       menu.poboys,
    bgVariant:  "black",
    chalkNote:  "on a soft baguette",
  },
  {
    data:       menu.sides,
    bgVariant:  "cypress",
    compact:    true,
    chalkNote:  "never an afterthought",
  },
  {
    data:       menu.desserts,
    bgVariant:  "roux",
    chalkNote:  "end sweet",
  },
  {
    data:       menu.drinks,
    bgVariant:  "black",
    chalkNote:  "no bar, just good stuff",
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Brass scroll-progress bar — fixed top */}
      <MenuProgress />

      {/* Editorial header */}
      <MenuHero />

      {/* Sticky category navigation */}
      <MenuNav sections={sections.map((s) => s.data)} />

      {/* All sections */}
      <div>
        {sections.map(({ data, bgVariant, compact, chalkNote }, index) => (
          <MenuSectionComp
            key={data.id}
            section={data}
            index={index}
            bgVariant={bgVariant}
            compact={compact}
            chalkNote={chalkNote}
          />
        ))}
      </div>

      {/* Today's specials interstitial */}
      <SpecialsCard />

      {/* Booking CTA */}
      <MenuBookingStrip />
    </>
  );
}
