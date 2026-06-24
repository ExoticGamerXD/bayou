"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { menu } from "@/data/menu";
import type { MenuItem } from "@/types/menu";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { scaleRise } from "@/lib/motion";

const featured: MenuItem[] = [
  ...menu.breakfast.items,
  ...menu.allDay.items,
  ...menu.poboys.items,
  ...menu.desserts.items,
].filter((item) => item.featured && item.image).slice(0, 6);

function DishCard({ item, index }: { item: MenuItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={scaleRise}
      className="group flex-shrink-0 w-64 md:w-72 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={item.name}
    >
      {/* Image */}
      <div className="relative w-full aspect-[3/4] arch-top overflow-hidden mb-5">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 256px, 288px"
            className="object-cover transition-transform duration-500 ease-out-smooth group-hover:scale-105"
          />
        ) : (
          /* Placeholder when no image is provided */
          <div
            className="absolute inset-0 flex items-end p-6"
            style={{
              background: `linear-gradient(135deg,
                hsl(${(index * 37 + 20) % 60 + 10}, 30%, ${12 + index * 2}%) 0%,
                hsl(${(index * 23 + 30) % 40 + 15}, 25%, ${8 + index * 3}%) 100%)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(ellipse at 60% 40%, rgba(182,138,78,0.15) 0%, transparent 60%)`,
              }}
            />
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-bayou-teal-deep/80 via-bayou-teal-deep/10 to-transparent transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0.5 }}
        />

        {/* Price badge — enamel cobalt */}
        <div className="absolute top-4 right-4">
          <span className="font-body text-label-lg text-bayou-cream bg-bayou-cobalt/90 backdrop-blur-sm px-3 py-1.5 tracking-widest">
            {item.price}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="px-1">
        <motion.h3
          className="font-display text-display-sm mb-2"
          animate={{ color: hovered ? "#B68A4E" : "#243B36" }}
          transition={{ duration: 0.2 }}
        >
          {item.name}
        </motion.h3>

        <motion.p
          className="font-body text-body-sm text-bayou-stone leading-relaxed"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: hovered ? 1 : 0.7, height: "auto" }}
          transition={{ duration: 0.25 }}
        >
          {item.description}
        </motion.p>
      </div>
    </motion.article>
  );
}

export default function SignatureDishes() {
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
    const x = e.pageX - (railRef.current.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5;
    railRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => { isDragging.current = false; };

  return (
    <section className="bg-bayou-sand section-pad overflow-hidden" aria-label="Signature dishes">
      <div className="container-site mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <FadeSlideUp>
              <Eyebrow className="mb-4">From the kitchen</Eyebrow>
            </FadeSlideUp>
            <MaskReveal delay={0.1}>
              <h2 className="font-display text-display-lg text-bayou-ink text-balance">
                The ones people<br />
                <em className="text-bayou-brass">come back for.</em>
              </h2>
            </MaskReveal>
          </div>
          <FadeSlideUp delay={0.2}>
            <Button href="/menu" variant="secondary">
              Full Menu
            </Button>
          </FadeSlideUp>
        </div>
      </div>

      {/* Drag-scroll rail */}
      <StaggerChildren>
        <div
          ref={railRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-4 drag-scroll select-none
                     px-6 md:px-10 xl:px-16
                     scrollbar-hide
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          role="list"
          aria-label="Signature dishes"
        >
          {featured.map((item, i) => (
            <DishCard key={item.id} item={item} index={i} />
          ))}
          {/* End spacer */}
          <div className="flex-shrink-0 w-6 md:w-10 xl:w-16" aria-hidden="true" />
        </div>
      </StaggerChildren>
    </section>
  );
}
