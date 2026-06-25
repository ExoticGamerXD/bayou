import type { Metadata } from "next";
import { SITE } from "@/data/site";
import Eyebrow from "@/components/ui/Eyebrow";
import BrassRule from "@/components/ui/BrassRule";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Bayou is at 8a Oliver Plunkett Street, Cork City. No bookings — just walk in. Open Wednesday to Sunday.",
};

const openDays = SITE.hours.filter((h) => !("closed" in h && h.closed));
const closedDays = SITE.hours.filter((h) => "closed" in h && h.closed);

export default function ContactPage() {
  return (
    <main className="bg-bayou-cream min-h-screen">

      {/* ── Page header ───────────────────────────────────────── */}
      <section className="bg-bayou-cream pt-40 pb-16 md:pt-48 md:pb-20" aria-label="Find us">
        <div className="container-site">
          <FadeSlideUp>
            <Eyebrow className="mb-5">Find us</Eyebrow>
          </FadeSlideUp>
          <MaskReveal delay={0.08}>
            <h1 className="font-display text-display-xl text-bayou-ink text-balance mb-6">
              8a Oliver Plunkett Street,
              <br />
              <em className="text-bayou-brass">Cork City.</em>
            </h1>
          </MaskReveal>
          <FadeSlideUp delay={0.2}>
            <p className="font-body text-body-lg text-bayou-stone leading-relaxed max-w-xl">
              No bookings, no fuss — just walk in. We&apos;re open Wednesday to Sunday
              for brunch. Bigger group or a dietary question? Give us a call.
            </p>
          </FadeSlideUp>
        </div>
      </section>

      <BrassRule className="container-site" />

      {/* ── Main content grid ─────────────────────────────────── */}
      <section className="section-pad" aria-label="Location and hours">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

            {/* Left column — all the info */}
            <div className="space-y-14">

              {/* Address */}
              <FadeSlideUp>
                <div>
                  <p className="font-body text-label-sm text-bayou-brass tracking-[0.2em] uppercase mb-5">
                    Address
                  </p>
                  <address className="not-italic space-y-1">
                    <p className="font-display text-display-sm text-bayou-ink">
                      {SITE.address.street}
                    </p>
                    <p className="font-display text-display-sm text-bayou-ink">
                      {SITE.address.city}, {SITE.address.county}
                    </p>
                  </address>
                  <div className="mt-6">
                    <Button
                      href="https://maps.google.com/?q=8a+Oliver+Plunkett+Street+Cork+Ireland"
                      variant="secondary"
                      size="sm"
                      external
                    >
                      Open in Maps
                    </Button>
                  </div>
                </div>
              </FadeSlideUp>

              <BrassRule />

              {/* Hours */}
              <FadeSlideUp delay={0.05}>
                <div>
                  <p className="font-body text-label-sm text-bayou-brass tracking-[0.2em] uppercase mb-6">
                    Opening Hours
                  </p>
                  <div className="space-y-3">
                    {openDays.map((h) => (
                      <div key={h.day} className="flex items-baseline justify-between gap-4 border-b border-bayou-ink/8 pb-3">
                        <span className="font-body text-body-md text-bayou-ink">
                          {h.day}
                        </span>
                        <span className="font-body text-body-md text-bayou-stone tabular-nums">
                          {"open" in h ? h.open : ""}
                          {" – "}
                          {"kitchenClose" in h ? h.kitchenClose : ""}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-baseline justify-between gap-4 pt-1">
                      <span className="font-body text-body-md text-bayou-stone">
                        {closedDays.map(d => d.day).join(" & ")}
                      </span>
                      <span className="font-body text-body-sm text-bayou-stone/60 tracking-widest uppercase">
                        Closed
                      </span>
                    </div>
                  </div>
                  <p className="font-script text-bayou-stone text-lg mt-6">
                    — kitchen closes at 15:00, come before then.
                  </p>
                </div>
              </FadeSlideUp>

              <BrassRule />

              {/* Contact */}
              <FadeSlideUp delay={0.1}>
                <div>
                  <p className="font-body text-label-sm text-bayou-brass tracking-[0.2em] uppercase mb-6">
                    Get in touch
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-body text-body-xs text-bayou-stone tracking-widest uppercase mb-1">
                        Phone
                      </p>
                      <a
                        href={`tel:${SITE.contact.phoneIntl}`}
                        className="font-display text-display-sm text-bayou-ink hover:text-bayou-brass transition-colors duration-200 link-draw"
                      >
                        {SITE.contact.phone}
                      </a>
                    </div>
                    <div>
                      <p className="font-body text-body-xs text-bayou-stone tracking-widest uppercase mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE.contact.email}`}
                        className="font-body text-body-md text-bayou-ink hover:text-bayou-brass transition-colors duration-200 link-draw"
                      >
                        {SITE.contact.email}
                      </a>
                    </div>
                    <div>
                      <p className="font-body text-body-xs text-bayou-stone tracking-widest uppercase mb-1">
                        Instagram
                      </p>
                      <a
                        href={SITE.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-body-md text-bayou-ink hover:text-bayou-brass transition-colors duration-200 link-draw"
                      >
                        {SITE.contact.instagramTag}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeSlideUp>

            </div>

            {/* Right column — map */}
            <FadeSlideUp delay={0.15} className="lg:sticky lg:top-32 lg:self-start">
              <div className="w-full aspect-[4/3] lg:aspect-[3/4] overflow-hidden border border-bayou-ink/10">
                <iframe
                  src="https://maps.google.com/maps?q=8a+Oliver+Plunkett+Street+Cork+Ireland&output=embed&z=17"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bayou on Google Maps"
                />
              </div>
              <p className="font-body text-body-xs text-bayou-stone/60 mt-3 text-center">
                8a Oliver Plunkett Street, Cork City
              </p>
            </FadeSlideUp>

          </div>
        </div>
      </section>

      {/* ── Walk-in strip ─────────────────────────────────────── */}
      <section className="bg-bayou-teal section-pad" aria-label="Visit us">
        <div className="container-site text-center">
          <FadeSlideUp>
            <Eyebrow light className="mb-5">No reservations needed</Eyebrow>
          </FadeSlideUp>
          <MaskReveal delay={0.1}>
            <h2 className="font-display text-display-lg text-bayou-cream mb-6 text-balance">
              Just walk in.
              <br />
              <em className="text-bayou-brass">We&apos;ll sort the rest.</em>
            </h2>
          </MaskReveal>
          <FadeSlideUp delay={0.2}>
            <p className="font-body text-body-lg text-bayou-sage leading-relaxed max-w-md mx-auto mb-10">
              Bigger group coming? Give us a quick call and we&apos;ll make sure
              we have the space. Otherwise, the door is always open.
            </p>
          </FadeSlideUp>
          <FadeSlideUp delay={0.3}>
            <a
              href={`tel:${SITE.contact.phoneIntl}`}
              className="font-display text-display-md text-bayou-brass hover:text-bayou-brass-light transition-colors duration-200"
            >
              {SITE.contact.phone}
            </a>
          </FadeSlideUp>
        </div>
      </section>

    </main>
  );
}
