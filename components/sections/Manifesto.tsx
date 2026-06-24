import BrassRule from "@/components/ui/BrassRule";
import Eyebrow from "@/components/ui/Eyebrow";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";

export default function Manifesto() {
  return (
    <section className="bg-bayou-cream section-pad" aria-label="Our story">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center">

          <FadeSlideUp>
            <Eyebrow className="mb-8">
              Cork City · New Orleans Soul
            </Eyebrow>
          </FadeSlideUp>

          <MaskReveal delay={0.1}>
            <h2 className="font-display text-display-lg text-bayou-ink text-balance mb-8">
              A little corner of Louisiana, right in the middle of Cork.
            </h2>
          </MaskReveal>

          <FadeSlideUp delay={0.2}>
            <BrassRule ornament className="mb-8" />
          </FadeSlideUp>

          <FadeSlideUp delay={0.3}>
            <p className="font-body text-body-xl text-bayou-stone leading-relaxed">
              Bayou started with a simple obsession: the food of Louisiana, cooked
              the way it demands to be cooked — a dark roux built over a full hour,
              gumbo that takes its time, beignets fried to order. We brought it to a
              bright room on Oliver Plunkett Street, plated it on blue enamel, and
              opened the doors for breakfast. Come hungry.
            </p>
          </FadeSlideUp>

        </div>
      </div>
    </section>
  );
}
