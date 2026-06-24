"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import { EASE_OUT_SMOOTH } from "@/lib/motion";

export default function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["0%", "10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0.65, 0.85]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90dvh] flex items-end overflow-hidden grain-overlay"
      aria-label="About Bayou"
    >
      {/* Parallax background — with cinematic slow-zoom settle on load */}
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

      {/* Overlays — teal-deep feels like dusk on the facade */}
      <motion.div
        className="absolute inset-0 bg-bayou-teal-deep"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bayou-teal-deep via-bayou-teal-deep/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-bayou-teal-deep/50 via-transparent to-transparent" />

      {/* Ambient warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 70% 60%, rgba(182,138,78,0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Content — anchored to bottom */}
      <motion.div
        className="container-site relative z-10 pb-20 md:pb-28 pt-48"
        style={{ y: contentY }}
      >
        <div className="max-w-3xl">

          <motion.p
            className="font-body text-label-sm text-bayou-brass tracking-[0.25em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE_OUT_SMOOTH }}
          >
            Our story
          </motion.p>

          <h1 className="font-display text-display-2xl text-bayou-cream text-balance mb-8">
            <MaskReveal delay={0.4}>
              <span className="block">A little corner</span>
            </MaskReveal>
            <MaskReveal delay={0.56}>
              <span className="block text-bayou-brass italic">of Louisiana.</span>
            </MaskReveal>
          </h1>

          <FadeSlideUp delay={0.8}>
            <p className="font-body text-body-xl text-bayou-cream/75 leading-relaxed max-w-xl">
              We ate the best bowl of gumbo of our lives on Magazine Street, New Orleans.
              Then we came home to Cork and built the next best thing.
            </p>
          </FadeSlideUp>

        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-bayou-brass/60 to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-body text-label-sm text-bayou-cream/50 tracking-[0.2em] uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
