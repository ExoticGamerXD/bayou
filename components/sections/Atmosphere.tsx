"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import BrassRule from "@/components/ui/BrassRule";

const pillars = [
  {
    label: "The Kitchen",
    headline: "One hour. Every time.",
    body: "A roux isn't rushed. Ours is cooked low for a full hour until it's the colour of dark chocolate — the foundation of the gumbo and everything around it.",
    accent: "Cooked slow, served all day.",
  },
  {
    label: "The Room",
    headline: "Bright, easy, all yours.",
    body: "Pressed-tin ceilings, big windows, marble tables and a wall of plants. A sunny corner of Cork that happens to taste like Louisiana.",
    accent: "Walk in. Stay a while.",
  },
  {
    label: "The Counter",
    headline: "Coffee & cold bottles.",
    body: "A proper café au lait the New Orleans way, filter coffee that keeps coming, and a fridge full of colourful craft sodas. No bar — just good stuff.",
    accent: "Beignets pair with everything.",
  },
];

const atmosphereImages = [
  { src: "/images/atmosphere/room-01.png",   alt: "Inside Bayou — the dining room",    wide: true  },
  { src: "/images/atmosphere/room-02.png",   alt: "Corner table, pendant lights",      wide: false },
  { src: "/images/atmosphere/room-03.png",   alt: "Bayou — pressed-tin ceiling",       wide: false },
  { src: "/images/atmosphere/room-04.png",   alt: "Bayou — window light",              wide: false },
  { src: "/images/atmosphere/drinks-bar.png",alt: "Drinks at Bayou",                   wide: false },
  { src: "/images/brand/storefront.png",     alt: "Bayou — Cork City storefront",      wide: true  },
];

export default function Atmosphere() {
  return (
    <section className="bg-bayou-teal section-pad" aria-label="Restaurant atmosphere">

      {/* Pillars */}
      <div className="container-site mb-20 md:mb-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <FadeSlideUp>
              <Eyebrow className="mb-4">The experience</Eyebrow>
            </FadeSlideUp>
            <MaskReveal delay={0.1}>
              <h2 className="font-display text-display-lg text-bayou-cream">
                More than brunch.
                <br />
                <em className="text-bayou-brass">A whole morning.</em>
              </h2>
            </MaskReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, i) => (
            <FadeSlideUp key={pillar.label} delay={i * 0.12}>
              <article className="group">
                <div className="mb-5">
                  <Eyebrow className="mb-3">{pillar.label}</Eyebrow>
                  <div className="w-8 h-px bg-bayou-brass/40 group-hover:w-16 transition-all duration-500 ease-out-smooth" />
                </div>
                <h3 className="font-display text-display-md text-bayou-cream mb-4">
                  {pillar.headline}
                </h3>
                <p className="font-body text-body-md text-bayou-sage leading-relaxed mb-5">
                  {pillar.body}
                </p>
                <p className="font-script text-bayou-cream/50 text-lg">
                  {pillar.accent}
                </p>
              </article>
            </FadeSlideUp>
          ))}
        </div>
      </div>

      <BrassRule ornament className="container-site mb-20 md:mb-28" />

      {/* Photo grid */}
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {atmosphereImages.map((img, i) => (
            <motion.div
              key={img.src}
              className={`relative overflow-hidden group ${img.wide ? "col-span-2" : "col-span-1"}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={img.wide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                className="object-cover transition-transform duration-700 ease-out-smooth group-hover:scale-105"
              />

              {/* Caption on hover */}
              <motion.div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bayou-teal-deep/80 to-transparent p-4"
                initial={{ opacity: 0, y: 8 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className="font-body text-body-xs text-bayou-cream/80">{img.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
