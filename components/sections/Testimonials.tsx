"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import Eyebrow from "@/components/ui/Eyebrow";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import BrassRule from "@/components/ui/BrassRule";
import FleurDeLis from "@/components/ui/FleurDeLis";
import { EASE_OUT_SMOOTH } from "@/lib/motion";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-bayou-paper section-pad" aria-label="Guest reviews">
      <div className="container-site">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeSlideUp>
            <Eyebrow className="mb-4">Guests say</Eyebrow>
          </FadeSlideUp>
          <MaskReveal delay={0.1}>
            <h2 className="font-display text-display-lg text-bayou-ink">
              Cork&apos;s been<br />
              <em className="text-bayou-brass">talking.</em>
            </h2>
          </MaskReveal>
        </div>

        <BrassRule ornament className="mb-16 max-w-xs mx-auto" />

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: EASE_OUT_SMOOTH }}
            >
              <FleurDeLis className="w-5 h-6 text-bayou-brass/45 mx-auto mb-7" />
              <p className="font-display text-display-md text-bayou-ink leading-[1.3] my-8 text-balance italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="font-body text-body-sm text-bayou-brass tracking-widest uppercase">
                    {testimonials[active].author}
                  </span>
                  <span className="font-body text-body-xs text-bayou-stone ml-3">
                    — {testimonials[active].detail}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-10" role="tablist" aria-label="Review navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Review ${i + 1}`}
                className="group p-1.5"
              >
                <span
                  className="block rounded-full transition-all duration-300 ease-out-smooth"
                  style={{
                    width: i === active ? "24px" : "6px",
                    height: "6px",
                    backgroundColor: i === active ? "#B68A4E" : "rgba(107,107,90,0.35)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Compact grid — remaining reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {testimonials.filter((_, i) => i !== active).map((t, i) => (
            <FadeSlideUp key={t.id} delay={i * 0.1}>
              <button
                className="text-left group w-full p-6 bg-bayou-cream border border-bayou-ink/10 hover:border-bayou-brass/40 hover:shadow-card transition-all duration-300 cursor-pointer"
                onClick={() => setActive(testimonials.indexOf(t))}
                aria-label={`Read full review from ${t.author}`}
              >
                <FleurDeLis className="w-3.5 h-4 text-bayou-brass/40" />
                <p className="font-body text-body-md text-bayou-stone leading-relaxed mt-4 mb-5 line-clamp-3 group-hover:text-bayou-ink transition-colors duration-200">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-body text-body-xs text-bayou-brass tracking-widest uppercase">
                  {t.author}
                </p>
              </button>
            </FadeSlideUp>
          ))}
        </div>

      </div>
    </section>
  );
}
