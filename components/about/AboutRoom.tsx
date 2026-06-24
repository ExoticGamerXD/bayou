"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import BrassRule from "@/components/ui/BrassRule";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";

const photos = [
  {
    src:   "/images/atmosphere/room-01.png",
    alt:   "The dining room at Bayou, Cork City",
    span:  "col-span-2 row-span-2",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    src:   "/images/atmosphere/room-02.png",
    alt:   "Corner table and pendant lights",
    span:  "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src:   "/images/atmosphere/drinks-bar.png",
    alt:   "Drinks at Bayou",
    span:  "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src:   "/images/atmosphere/room-03.png",
    alt:   "Pressed-tin ceiling detail",
    span:  "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src:   "/images/atmosphere/room-04.png",
    alt:   "Window light at Bayou",
    span:  "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
];

function PhotoTile({
  src,
  alt,
  span,
  sizes,
  index,
}: {
  src: string;
  alt: string;
  span: string;
  sizes: string;
  index: number;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden group ${span}`}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Subtle caption on hover */}
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bayou-teal-deep/75 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <p className="font-body text-body-xs text-bayou-cream/80">{alt}</p>
      </motion.div>
    </motion.div>
  );
}

export default function AboutRoom() {
  const featureRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: featureRef,
    offset: ["start end", "end start"],
  });

  const featureY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["-6%", "6%"]
  );

  return (
    <section className="bg-bayou-teal section-pad" aria-label="The room">

      {/* Text intro */}
      <div className="container-site mb-16 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <div>
            <FadeSlideUp>
              <Eyebrow className="mb-5">The room</Eyebrow>
            </FadeSlideUp>
            <MaskReveal delay={0.1}>
              <h2 className="font-display text-display-xl text-bayou-cream">
                Pressed tin.
                <br />
                <em className="text-bayou-brass">Big windows.</em>
                <br />
                Good light.
              </h2>
            </MaskReveal>
          </div>

          <FadeSlideUp delay={0.2}>
            <p className="font-body text-body-lg text-bayou-sage leading-relaxed">
              We wanted a space that felt like the best New Orleans lunch counters —
              unpretentious, comfortable, full of light. The room on Oliver Plunkett Street
              has pressed-tin ceilings, marble tables, plants that have taken over one wall.
              You could be anywhere. That&apos;s the point.
            </p>
          </FadeSlideUp>
        </div>
      </div>

      {/* Feature image — wide, with parallax */}
      <div
        ref={featureRef}
        className="relative overflow-hidden h-[50vw] max-h-[560px] min-h-[280px] mb-4 md:mb-6"
      >
        <motion.div className="absolute inset-0 scale-110" style={{ y: featureY }}>
          <Image
            src="/images/hero/hero-interior.png"
            alt="Inside Bayou — the full dining room"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        {/* Cobalt top-rule signature device */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-bayou-cobalt" aria-hidden="true" />
      </div>

      {/* Photo grid */}
      <div className="container-site">
        <div
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3 md:gap-4"
        >
          {photos.map((p, i) => (
            <PhotoTile key={p.src} {...p} index={i} />
          ))}
        </div>
      </div>

      <BrassRule ornament className="container-site mt-16 md:mt-20" />

    </section>
  );
}
