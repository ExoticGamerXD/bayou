import Image from "next/image";
import { events } from "@/data/events";
import { SITE } from "@/data/site";
import Eyebrow from "@/components/ui/Eyebrow";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";

export default function Specials() {
  const specials = events.slice(0, 3);
  if (!specials.length) return null;

  return (
    <section className="bg-bayou-sand section-pad" aria-label="Specials">
      <div className="container-site">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <FadeSlideUp>
              <Eyebrow className="mb-4">On the board</Eyebrow>
            </FadeSlideUp>
            <MaskReveal delay={0.1}>
              <h2 className="font-display text-display-lg text-bayou-ink">
                What&apos;s good <em className="text-bayou-brass">right now.</em>
              </h2>
            </MaskReveal>
          </div>
          <FadeSlideUp delay={0.2}>
            <p className="font-script text-bayou-stone text-xl max-w-xs md:text-right">
              changes daily — call {SITE.contact.phone}
            </p>
          </FadeSlideUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {specials.map((special, i) => (
            <FadeSlideUp key={special.id} delay={i * 0.1}>
            <article
              className="group h-full bg-bayou-paper shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                {special.image && (
                  <Image
                    src={special.image}
                    alt={special.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out-smooth group-hover:scale-105"
                  />
                )}
                {/* Cobalt enamel top rule */}
                <span className="absolute top-0 left-0 right-0 h-1 bg-bayou-cobalt" />
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-display text-display-sm text-bayou-ink group-hover:text-bayou-brass transition-colors duration-200 mb-2">
                  {special.title}
                </h3>
                <p className="font-body text-body-sm text-bayou-stone leading-relaxed">
                  {special.description}
                </p>
              </div>
            </article>
            </FadeSlideUp>
          ))}
        </div>

        <FadeSlideUp delay={0.1} className="mt-10">
          <p className="font-script text-bayou-stone text-xl">
            — pop in and see today&apos;s blackboard.
          </p>
        </FadeSlideUp>

      </div>
    </section>
  );
}
