"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import Eyebrow from "@/components/ui/Eyebrow";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import BrassRule from "@/components/ui/BrassRule";
import FleurDeLis from "@/components/ui/FleurDeLis";

function TestimonialCard({ quote, author, detail, index }: {
  quote: string;
  author: string;
  detail: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex-shrink-0 w-[320px] md:w-[380px] bg-bayou-cream border border-bayou-ink/10
                 hover:border-bayou-brass/35 hover:shadow-card transition-all duration-300 p-8 flex flex-col"
    >
      <FleurDeLis className="w-4 h-5 text-bayou-brass/40 mb-6 flex-shrink-0" />

      <blockquote className="flex-1">
        <p className="font-display text-display-sm text-bayou-ink leading-[1.35] italic mb-8">
          &ldquo;{quote}&rdquo;
        </p>
        <footer>
          <cite className="not-italic">
            <span className="block font-body text-body-xs text-bayou-brass tracking-[0.2em] uppercase mb-1">
              {author}
            </span>
            <span className="font-body text-body-xs text-bayou-stone">
              {detail}
            </span>
          </cite>
        </footer>
      </blockquote>
    </motion.article>
  );
}

export default function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (railRef.current?.offsetLeft ?? 0);
    scrollLeft.current = railRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !railRef.current) return;
    e.preventDefault();
    const x = e.pageX - railRef.current.offsetLeft;
    railRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.4;
  };

  const onMouseUp = () => { isDragging.current = false; };

  return (
    <section className="bg-bayou-paper section-pad overflow-hidden" aria-label="Guest reviews">
      <div className="container-site mb-12 md:mb-16">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="text-left">
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

          <FadeSlideUp delay={0.2}>
            <p className="font-script text-bayou-stone text-xl md:text-right max-w-xs">
              — drag to read more
            </p>
          </FadeSlideUp>
        </div>

        <BrassRule ornament className="mt-10" />
      </div>

      {/* Drag-scroll rail */}
      <div
        ref={railRef}
        className="flex gap-5 md:gap-6 overflow-x-auto pb-2 drag-scroll select-none
                   px-6 md:px-10 xl:px-16
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        role="list"
        aria-label="Guest reviews"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={t.id}
            quote={t.quote}
            author={t.author}
            detail={t.detail}
            index={i}
          />
        ))}
        {/* End spacer */}
        <div className="flex-shrink-0 w-6 md:w-10 xl:w-16" aria-hidden="true" />
      </div>
    </section>
  );
}
