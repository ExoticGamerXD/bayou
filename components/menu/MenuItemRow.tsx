"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DietaryBadges, HeatBadge } from "@/components/ui/Badge";
import type { MenuItem } from "@/types/menu";

interface MenuItemRowProps {
  item: MenuItem;
  /** Stagger delay in seconds for entrance animation */
  delay?: number;
  /** Compact mode for sides/bread — tighter vertical spacing */
  compact?: boolean;
}

export default function MenuItemRow({ item, delay = 0, compact = false }: MenuItemRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
      aria-label={item.name}
    >
      {/* Hover left accent bar */}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-bayou-brass rounded-full"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{
          scaleY: hovered ? 1 : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: "top" }}
      />

      {/* Row container */}
      <div
        className={cn(
          "pl-5 pr-2 -ml-5 mr-0 transition-colors duration-200",
          "border-t border-bayou-brass/12",
          compact ? "py-4" : "py-6 md:py-7",
          hovered ? "bg-bayou-sand/70" : "bg-transparent"
        )}
      >
        {/* Name + dot leader + price */}
        <div className="flex items-baseline gap-3 mb-2">
          <motion.h3
            className="font-display text-display-sm shrink-0 transition-colors duration-200 leading-snug"
            animate={{ color: hovered ? "#B68A4E" : "#243B36" }}
            transition={{ duration: 0.2 }}
          >
            {item.name}
          </motion.h3>

          {/* Dot leader */}
          <span
            aria-hidden="true"
            className="flex-1 min-w-4 mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ borderBottom: "1px dotted rgba(182,138,78,0.22)" }}
          />

          {/* Price */}
          <span className="font-body text-body-md text-bayou-cobalt font-semibold tracking-wide shrink-0">
            {item.price}
          </span>
        </div>

        {/* Description */}
        <motion.p
          className="font-body text-body-sm leading-relaxed max-w-prose"
          animate={{ color: hovered ? "rgba(36,59,54,0.9)" : "rgba(107,107,90,0.95)" }}
          transition={{ duration: 0.25 }}
        >
          {item.description}
        </motion.p>

        {/* Badges row */}
        {(item.dietary.length > 0 || item.heat > 0) && (
          <div className="flex items-center gap-3 mt-3">
            <HeatBadge level={item.heat} />
            <DietaryBadges flags={item.dietary} />
          </div>
        )}
      </div>
    </motion.article>
  );
}
