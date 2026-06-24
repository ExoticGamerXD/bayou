import Button from "@/components/ui/Button";
import BrassRule from "@/components/ui/BrassRule";
import MagneticButton from "@/components/animations/MagneticButton";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import { SITE } from "@/data/site";

export default function MenuBookingStrip() {
  return (
    <section
      className="bg-bayou-teal section-pad text-center"
      aria-label="Visit us"
    >
      <div className="container-site">
        <FadeSlideUp>
          <p className="font-script text-bayou-cream/60 text-2xl mb-4">
            — hungry yet?
          </p>
        </FadeSlideUp>

        <FadeSlideUp delay={0.1}>
          <h2 className="font-display text-display-lg text-bayou-cream mb-8 text-balance">
            Come and find us.
          </h2>
        </FadeSlideUp>

        <FadeSlideUp delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <MagneticButton strength={10}>
              <Button href="/contact" size="lg">
                Find Us
              </Button>
            </MagneticButton>
            <a
              href={`tel:${SITE.contact.phoneIntl}`}
              className="font-body text-body-sm text-bayou-sage hover:text-bayou-cream tracking-widest uppercase link-draw transition-colors duration-200"
            >
              {SITE.contact.phone}
            </a>
          </div>
        </FadeSlideUp>

        <FadeSlideUp delay={0.3}>
          <BrassRule ornament className="max-w-xs mx-auto mb-8" />
          <p className="font-body text-body-xs text-bayou-sage/70 max-w-sm mx-auto leading-relaxed">
            No bookings — just walk in. Dietary requirements or a bigger group?
            Give us a call and we&apos;ll sort you out.
          </p>
        </FadeSlideUp>
      </div>
    </section>
  );
}
