import BrassRule from "@/components/ui/BrassRule";
import Eyebrow from "@/components/ui/Eyebrow";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";

export default function AboutStory() {
  return (
    <section className="bg-bayou-cream section-pad" aria-label="Our origin story">
      <div className="container-site">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — pull quote, sticky on desktop */}
          <div className="lg:sticky lg:top-32">
            <FadeSlideUp>
              {/* Decorative quotation mark */}
              <div
                className="font-display text-[9rem] leading-none text-bayou-brass/15 select-none mb-2"
                aria-hidden="true"
              >
                &ldquo;
              </div>
            </FadeSlideUp>

            <MaskReveal delay={0.1}>
              <blockquote className="font-display text-display-md text-bayou-ink italic leading-snug">
                We ate the best bowl of gumbo of our lives in a tiny place
                on Magazine Street. We spent the next three years trying
                to replicate it.
              </blockquote>
            </MaskReveal>

            <FadeSlideUp delay={0.25}>
              <p className="font-script text-bayou-brass text-xl mt-6">
                — the beginning
              </p>
            </FadeSlideUp>

            <FadeSlideUp delay={0.35}>
              <BrassRule className="mt-10 max-w-xs" />
            </FadeSlideUp>
          </div>

          {/* Right — narrative */}
          <div className="space-y-10">

            <FadeSlideUp>
              <Eyebrow className="mb-6">It started with a trip</Eyebrow>
              <p className="font-body text-body-lg text-bayou-stone leading-relaxed">
                New Orleans gets into your blood quickly. The food is different
                there — heavier with history, cooked by people who treat a roux
                the way a sculptor treats clay. We ate gumbo in six different
                places. We took notes. We asked questions. We ate beignets
                at three in the morning in the French Quarter and understood
                immediately that they had to be part of our lives.
              </p>
            </FadeSlideUp>

            <FadeSlideUp delay={0.1}>
              <p className="font-body text-body-lg text-bayou-stone leading-relaxed">
                The thing about Louisiana cooking is that it refuses to be rushed.
                A roux built in twenty minutes isn&apos;t a roux — it&apos;s a shortcut, and
                the bowl knows it. We came back from New Orleans changed, and spent
                the better part of three years cooking for friends, failing, adjusting,
                and eventually getting it right enough to open a door and let people in.
              </p>
            </FadeSlideUp>

            <FadeSlideUp delay={0.15}>
              <BrassRule ornament />
            </FadeSlideUp>

            <FadeSlideUp delay={0.2}>
              <Eyebrow className="mb-6">Why Cork</Eyebrow>
              <p className="font-body text-body-lg text-bayou-stone leading-relaxed">
                We opened Bayou on Oliver Plunkett Street because Cork felt right
                for it — a city with its own strong food culture, curious enough
                to embrace something genuinely different. The room is bright and open,
                the way the best New Orleans spots are: come as you are, sit as long
                as you like, leave full.
              </p>
            </FadeSlideUp>

            <FadeSlideUp delay={0.25}>
              <p className="font-body text-body-lg text-bayou-stone leading-relaxed">
                The menu is honest to the source. Every dish starts with the same
                question: does this taste true? The gumbo takes a full hour of roux.
                The po&apos; boys are built on proper baguette. The beignets are fried
                to order, always, because they don&apos;t survive waiting — and neither
                does anyone who&apos;s ordered them.
              </p>
            </FadeSlideUp>

            <FadeSlideUp delay={0.3}>
              <p className="font-script text-bayou-brass text-xl">
                — Bayou, Oliver Plunkett Street, Cork City
              </p>
            </FadeSlideUp>

          </div>
        </div>
      </div>
    </section>
  );
}
