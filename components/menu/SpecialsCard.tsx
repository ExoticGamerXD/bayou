import FadeSlideUp from "@/components/animations/FadeSlideUp";
import BrassRule from "@/components/ui/BrassRule";
import Eyebrow from "@/components/ui/Eyebrow";

const todaySpecials = [
  {
    name: "Shrimp & Grits",
    description: "Creamy stone-ground grits, Cajun shrimp, andouille, a little hot sauce.",
    price: "€14",
    note: "Saturday & Sunday",
  },
  {
    name: "Bananas Foster Beignets",
    description: "Our beignets, caramelised banana, a slick of rum. Ask if they're on.",
    price: "€8",
    note: "While the bananas last",
  },
];

export default function SpecialsCard() {
  return (
    <section
      className="bg-bayou-teal section-pad relative overflow-hidden"
      aria-label="Today's specials"
    >
      {/* Decorative radial warm light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(182,138,78,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container-site relative z-10">
        <div className="max-w-2xl mx-auto">
          <FadeSlideUp>
            <div className="text-center mb-10">
              <Eyebrow light className="mb-3">
                Daily blackboard
              </Eyebrow>
              {/* Handwritten headline via Caveat font */}
              <p className="font-script text-bayou-cream text-4xl md:text-5xl leading-tight">
                On the board today
              </p>
            </div>
          </FadeSlideUp>

          <BrassRule ornament className="mb-10" />

          <div className="space-y-0">
            {todaySpecials.map((special, i) => (
              <FadeSlideUp key={special.name} delay={i * 0.12}>
                <div className="py-7 border-t border-bayou-brass/15 last:border-b">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-display text-display-sm text-bayou-cream">
                      {special.name}
                    </h3>
                    <span className="font-body text-body-md text-bayou-cream font-medium shrink-0">
                      {special.price}
                    </span>
                  </div>
                  <p className="font-body text-body-sm text-bayou-sage leading-relaxed mb-2">
                    {special.description}
                  </p>
                  <p className="font-script text-bayou-cream/40 text-base">
                    {special.note}
                  </p>
                </div>
              </FadeSlideUp>
            ))}
          </div>

          <FadeSlideUp delay={0.25}>
            <p className="font-script text-bayou-cream/35 text-xl text-center mt-8">
              — changes daily. Always worth asking.
            </p>
          </FadeSlideUp>
        </div>
      </div>
    </section>
  );
}
