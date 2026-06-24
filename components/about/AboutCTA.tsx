"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/animations/MagneticButton";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import Button from "@/components/ui/Button";
import BrassRule from "@/components/ui/BrassRule";
import Eyebrow from "@/components/ui/Eyebrow";
import { SITE } from "@/data/site";

export default function AboutCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["-8%", "8%"]
  );

  const openDays = SITE.hours.filter((h) => !("closed" in h && h.closed));

  return (
    <section
      ref={ref}
      className="relative section-pad overflow-hidden grain-overlay"
      aria-label="Come visit us"
    >
      {/* Background image */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <Image
          src="/images/brand/storefront.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
          aria-hidden="true"
        />
      </motion.div>
      <div className="absolute inset-0 bg-bayou-teal-deep/92" />
      <div className="absolute inset-0 bg-gradient-to-t from-bayou-teal-deep to-transparent" />

      <div className="container-site relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          <FadeSlideUp>
            <Eyebrow light className="mb-6">Come hungry</Eyebrow>
          </FadeSlideUp>

          <MaskReveal delay={0.1}>
            <h2 className="font-display text-display-xl text-bayou-cream mb-6 text-balance">
              Find us on
              <br />
              <em className="text-bayou-brass">Oliver Plunkett Street.</em>
            </h2>
          </MaskReveal>

          <FadeSlideUp delay={0.2}>
            <p className="font-body text-body-lg text-bayou-cream/75 mb-12 leading-relaxed max-w-lg mx-auto">
              No bookings — just walk in. We&apos;re open Wednesday to Sunday
              for breakfast and brunch. Bigger groups or a dietary question?
              Give us a call and we&apos;ll sort you out.
            </p>
          </FadeSlideUp>

          <FadeSlideUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <MagneticButton strength={10}>
                <Button href="/contact" size="lg">
                  Find Us
                </Button>
              </MagneticButton>
              <MagneticButton strength={8}>
                <Button href="/menu" variant="secondary" size="lg">
                  See the Menu
                </Button>
              </MagneticButton>
            </div>
          </FadeSlideUp>

          <FadeSlideUp delay={0.35}>
            <BrassRule ornament className="mb-10" />
          </FadeSlideUp>

          {/* Hours grid */}
          <FadeSlideUp delay={0.4}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-center mb-8">
              {openDays.map((h) => (
                <div key={h.day} className="flex flex-col">
                  <span className="font-body text-label-sm text-bayou-brass tracking-widest uppercase mb-1">
                    {h.day.slice(0, 3)}
                  </span>
                  <span className="font-body text-body-xs text-bayou-sage">
                    {"open" in h ? h.open : ""}–{"kitchenClose" in h ? h.kitchenClose : ""}
                  </span>
                </div>
              ))}
            </div>
          </FadeSlideUp>

          <FadeSlideUp delay={0.45}>
            <div className="flex flex-col items-center gap-2">
              <a
                href={`tel:${SITE.contact.phoneIntl}`}
                className="font-body text-body-sm text-bayou-sage hover:text-bayou-cream link-draw transition-colors duration-200 tracking-widest"
              >
                {SITE.contact.phone}
              </a>
              <p className="font-body text-body-xs text-bayou-sage/60">
                Closed Monday &amp; Tuesday &middot; {SITE.contact.instagramTag}
              </p>
            </div>
          </FadeSlideUp>

        </div>
      </div>
    </section>
  );
}
