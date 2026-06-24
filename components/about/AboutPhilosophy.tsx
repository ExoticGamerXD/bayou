import Eyebrow from "@/components/ui/Eyebrow";
import BrassRule from "@/components/ui/BrassRule";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";

const tenets = [
  {
    number: "01",
    label:  "The Roux",
    headline: "One hour. Every time.",
    body: "The foundation of everything we cook. Built low and slow until it reaches the colour of dark chocolate — that slightly bitter, nutty depth that makes a gumbo taste like a gumbo and not just a stew. We've never found a shortcut worth taking.",
    accent: "Cooked since morning.",
  },
  {
    number: "02",
    label:  "The Spice",
    headline: "Creole, and proud of it.",
    body: "We import the andouille, the file powder, the Creole spice blends — the things you genuinely can't substitute with something local. The produce we buy as close as possible. That balance is what makes it taste honest.",
    accent: "Louisiana seasoning, Cork produce.",
  },
  {
    number: "03",
    label:  "The Beignets",
    headline: "Fried to order. No exceptions.",
    body: "Hot, pillowy, dusted with enough icing sugar to make a mess. We refuse to serve a beignet that's been sitting under a heat lamp. Order them. Wait two minutes. They're worth the wait every single time.",
    accent: "Order them. You won't regret it.",
  },
  {
    number: "04",
    label:  "The Coffee",
    headline: "Café au lait, the New Orleans way.",
    body: "Dark-roast coffee cut with hot milk, no foam, no syrups. The New Orleans version is made with chicory — we don't use it, but we keep the same honest ratio and the same drinkability. Coffee you can sit with.",
    accent: "Pairs with everything on the menu.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="bg-bayou-sand section-pad" aria-label="Our cooking philosophy">
      <div className="container-site">

        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <FadeSlideUp>
            <Eyebrow className="mb-5">How we cook</Eyebrow>
          </FadeSlideUp>
          <MaskReveal delay={0.1}>
            <h2 className="font-display text-display-xl text-bayou-ink text-balance">
              We don&apos;t rush the things
              <br />
              <em className="text-bayou-brass">that take time.</em>
            </h2>
          </MaskReveal>
          <FadeSlideUp delay={0.2}>
            <p className="font-body text-body-lg text-bayou-stone leading-relaxed mt-6 max-w-xl">
              Louisiana cooking has rules. Not written-down rules — felt ones.
              The kind you absorb after eating enough of the real thing and understanding
              what you&apos;re tasting when it&apos;s right.
            </p>
          </FadeSlideUp>
        </div>

        <BrassRule className="mb-16 md:mb-20" />

        {/* Tenets — horizontal rule-separated list on mobile, 2-col grid on md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {tenets.map((t, i) => (
            <FadeSlideUp key={t.number} delay={i * 0.1}>
              <article className="group py-10 md:py-12 border-b border-bayou-ink/10 md:odd:border-r md:odd:pr-12 md:even:pl-12 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0">

                <div className="flex items-start gap-6 mb-5">
                  {/* Number */}
                  <span
                    className="font-display text-[4rem] leading-none text-bayou-brass/20 select-none"
                    aria-hidden="true"
                  >
                    {t.number}
                  </span>
                  <div className="pt-2">
                    <Eyebrow className="mb-2">{t.label}</Eyebrow>
                    <div className="w-6 h-px bg-bayou-brass/40 group-hover:w-12 transition-all duration-500 ease-out" />
                  </div>
                </div>

                <h3 className="font-display text-display-md text-bayou-ink mb-4 group-hover:text-bayou-teal transition-colors duration-300">
                  {t.headline}
                </h3>

                <p className="font-body text-body-md text-bayou-stone leading-relaxed mb-5">
                  {t.body}
                </p>

                <p className="font-script text-bayou-brass text-lg">
                  {t.accent}
                </p>

              </article>
            </FadeSlideUp>
          ))}
        </div>

      </div>
    </section>
  );
}
