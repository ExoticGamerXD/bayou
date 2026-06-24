"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/animations/MagneticButton";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import Button from "@/components/ui/Button";
import BrassRule from "@/components/ui/BrassRule";
import Eyebrow from "@/components/ui/Eyebrow";
import { SITE } from "@/data/site";

export default function BookingCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-10%", "10%"]);

  const openDays = SITE.hours.filter((h) => !("closed" in h && h.closed));

  return (
    <section
      ref={ref}
      className="relative section-pad overflow-hidden grain-overlay"
      aria-label="Visit us"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <Image
          src="/images/hero/hero-interior.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          aria-hidden="true"
        />
      </motion.div>
      <div className="absolute inset-0 bg-bayou-teal/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-bayou-teal-deep/70 to-transparent" />

      <div className="container-site relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          <FadeSlideUp>
            <Eyebrow light className="mb-6">Pop in</Eyebrow>
          </FadeSlideUp>

          <MaskReveal delay={0.1}>
            <h2 className="font-display text-display-xl text-bayou-cream mb-6 text-balance">
              Come hungry to<br />
              <em className="text-bayou-brass">Bayou.</em>
            </h2>
          </MaskReveal>

          <FadeSlideUp delay={0.2}>
            <p className="font-body text-body-lg text-bayou-cream/80 mb-10 leading-relaxed">
              No bookings, no fuss — just walk in. We&apos;re on Oliver Plunkett
              Street, open for breakfast and lunch, Wednesday to Sunday. Call ahead
              for bigger groups.
            </p>
          </FadeSlideUp>

          <FadeSlideUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <MagneticButton strength={10}>
                <Button href="/contact" size="lg">
                  Find Us
                </Button>
              </MagneticButton>
              <a
                href={`tel:${SITE.contact.phoneIntl}`}
                className="font-body text-body-sm text-bayou-sage hover:text-bayou-cream tracking-widest uppercase link-draw transition-colors duration-200"
              >
                Or call {SITE.contact.phone}
              </a>
            </div>
          </FadeSlideUp>

          <BrassRule ornament className="mb-10" />

          {/* Hours summary */}
          <FadeSlideUp delay={0.4}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 text-center">
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
            <p className="font-body text-body-xs text-bayou-sage/60 mt-6">
              Closed Monday &amp; Tuesday. Find us at {SITE.contact.instagramTag}.
            </p>
          </FadeSlideUp>

        </div>
      </div>
    </section>
  );
}
