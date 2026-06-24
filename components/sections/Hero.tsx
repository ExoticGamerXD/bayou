"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import { EASE_OUT_SMOOTH } from "@/lib/motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["0%", "8%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.8]);

  return (
    <section
      ref={ref}
      className="relative min-h-dvh flex items-center overflow-hidden grain-overlay"
      aria-label="Hero"
    >
      {/* Background image — parallax + cinematic slow-zoom settle on load */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
        initial={{ scale: reduced ? 1.1 : 1.16 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: reduced ? 0 : 2.2, ease: EASE_OUT_SMOOTH }}
      >
        <Image
          src="/images/hero/hero-main.png"
          alt="Bayou restaurant — Cork City storefront"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlays — warm teal, keeps the storefront bright */}
      <motion.div
        className="absolute inset-0 bg-bayou-teal-deep"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bayou-teal-deep via-transparent to-bayou-teal-deep/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-bayou-teal-deep/60 via-transparent to-transparent" />

      {/* Ambient warm glow + soft vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 75% at 68% 52%, rgba(182, 138, 78, 0.08) 0%, transparent 65%), radial-gradient(ellipse 120% 100% at 50% 50%, transparent 55%, rgba(20, 52, 48, 0.45) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="container-site relative z-10 pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ y: contentY }}
      >
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Eyebrow */}
          <motion.p
            className="font-body text-label-sm text-bayou-brass tracking-[0.25em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE_OUT_SMOOTH }}
          >
            Cork City · Oliver Plunkett Street
          </motion.p>

          {/* Headline — line by line */}
          <h1 className="font-display text-display-2xl text-bayou-cream text-balance mb-6 md:mb-8">
            <MaskReveal delay={0.4}>
              <span className="block">Brunch with a</span>
            </MaskReveal>
            <MaskReveal delay={0.56}>
              <span className="block text-bayou-brass italic">Louisiana</span>
            </MaskReveal>
            <MaskReveal delay={0.72}>
              <span className="block">accent.</span>
            </MaskReveal>
          </h1>

          {/* Subheading */}
          <FadeSlideUp delay={0.9}>
            <p className="font-body text-body-xl text-bayou-cream/80 leading-relaxed max-w-lg mb-10 md:mb-12">
              Gumbo, jambalaya, po&apos; boys and beignets — New Orleans comfort
              food in a bright Cork room. Open daytime, Wednesday to Sunday.
            </p>
          </FadeSlideUp>

          {/* CTAs */}
          <FadeSlideUp delay={1.05}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/menu" size="lg">
                See the Menu
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Find Us
              </Button>
            </div>
          </FadeSlideUp>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="font-body text-label-sm text-bayou-cream/60 tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-bayou-brass/60 to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
