import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import BrassRule from "@/components/ui/BrassRule";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import { menu } from "@/data/menu";
import { DietaryBadges, HeatBadge } from "@/components/ui/Badge";

const previewItems = [
  menu.breakfast.items[0],
  menu.allDay.items[0],
  menu.allDay.items[3],
  menu.poboys.items[3],
  menu.desserts.items[0],
  menu.desserts.items[1],
].filter(Boolean);

export default function MenuPreview() {
  return (
    <section className="bg-bayou-cream section-pad" aria-label="Menu preview">
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <FadeSlideUp>
              <Eyebrow className="mb-4">What we cook</Eyebrow>
            </FadeSlideUp>
            <MaskReveal delay={0.1}>
              <h2 className="font-display text-display-lg text-bayou-ink">
                Gumbo, po&apos; boys,<br />
                <em className="text-bayou-brass">and a stack of beignets.</em>
              </h2>
            </MaskReveal>
          </div>

          <FadeSlideUp delay={0.2}>
            <Button href="/menu" variant="secondary">
              Full Menu
            </Button>
          </FadeSlideUp>
        </div>

        {/* Dish list */}
        <div className="max-w-3xl">
          {previewItems.map((item, i) => (
            <FadeSlideUp key={item.id} delay={i * 0.07}>
              <article className="group">
                <div className="flex items-baseline justify-between gap-4 py-6 border-t border-bayou-ink/10 group-hover:bg-bayou-sand/60 transition-colors duration-200 -mx-4 px-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-1.5">
                      <h3 className="font-display text-display-sm text-bayou-ink group-hover:text-bayou-brass transition-colors duration-200">
                        {item.name}
                      </h3>
                      <HeatBadge level={item.heat} />
                      <DietaryBadges flags={item.dietary} />
                    </div>
                    <p className="font-body text-body-sm text-bayou-stone leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-body text-body-md text-bayou-cobalt font-semibold flex-shrink-0">
                    {item.price}
                  </span>
                </div>
              </article>
            </FadeSlideUp>
          ))}

          {/* Last border */}
          <div className="border-t border-bayou-ink/10" />
        </div>

        <BrassRule ornament className="mt-14 max-w-3xl" />

        <FadeSlideUp delay={0.2} className="mt-10">
          <p className="font-script text-bayou-stone text-xl">
            — and much more on the board. Come hungry.
          </p>
        </FadeSlideUp>

      </div>
    </section>
  );
}
