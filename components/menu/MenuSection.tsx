"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MenuSection as MenuSectionType } from "@/types/menu";
import MenuItemRow from "./MenuItemRow";
import Eyebrow from "@/components/ui/Eyebrow";
import BrassRule from "@/components/ui/BrassRule";
import ChalkNote from "@/components/ui/ChalkNote";
import { EASE_OUT_SMOOTH } from "@/lib/motion";

interface MenuSectionProps {
  section: MenuSectionType;
  /** Which section index — first section starts open on mobile */
  index: number;
  /** Alternating background for visual rhythm */
  bgVariant?: "black" | "cypress" | "roux";
  /** Use compact row spacing (sides, breads) */
  compact?: boolean;
  /** An editorial chalkboard note shown below the section title */
  chalkNote?: string;
}

const bgClasses = {
  black:   "bg-bayou-cream",
  cypress: "bg-bayou-sand",
  roux:    "bg-bayou-paper",
};

const STAGGER_BASE = 0.05;

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="text-bayou-brass flex-shrink-0"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3, ease: EASE_OUT_SMOOTH }}
    >
      <path
        d="M3 6L8 11L13 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export default function MenuSection({
  section,
  index,
  bgVariant = "black",
  compact = false,
  chalkNote,
}: MenuSectionProps) {
  // First section starts open on mobile; rest start collapsed
  const [mobileOpen, setMobileOpen] = useState(index === 0);
  const availableItems = section.items.filter((i) => i.available);

  return (
    <section
      id={section.id}
      className={cn("relative", bgClasses[bgVariant])}
      aria-label={section.label}
    >
      {/* Top brass rule between sections (skip first) */}
      {index > 0 && (
        <div className="absolute top-0 left-0 right-0">
          <BrassRule />
        </div>
      )}

      <div className="container-site">
        {/* ── Desktop: two-column layout ───────────────────────── */}
        <div className="hidden lg:grid grid-cols-[240px_1fr] xl:grid-cols-[280px_1fr] gap-12 xl:gap-20 py-16 xl:py-20">

          {/* Left: sticky section header */}
          <aside className="sticky top-[152px] self-start pt-1 pb-8">
            {section.eyebrow && (
              <Eyebrow className="mb-3">
                {section.eyebrow}
              </Eyebrow>
            )}

            <h2 className="font-display text-display-md text-bayou-ink mb-4 leading-tight">
              {section.label}
            </h2>

            {chalkNote && (
              <ChalkNote className="block text-base mt-2 mb-4">
                {chalkNote}
              </ChalkNote>
            )}

            <BrassRule className="mb-4 w-10" />

            <p className="font-body text-label-sm text-bayou-stone tracking-widest uppercase">
              {availableItems.length} {availableItems.length === 1 ? "dish" : "dishes"}
            </p>
          </aside>

          {/* Right: items list */}
          <div className="py-4">
            {availableItems.map((item, i) => (
              <MenuItemRow
                key={item.id}
                item={item}
                delay={i * STAGGER_BASE}
                compact={compact}
              />
            ))}
            {/* Closing border */}
            <div className="border-t border-bayou-brass/12" />
          </div>
        </div>

        {/* ── Mobile: accordion layout ──────────────────────────── */}
        <div className="lg:hidden">
          {/* Section header — tap to expand */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls={`section-body-${section.id}`}
            className="w-full flex items-center justify-between gap-4 py-6 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bayou-brass"
          >
            <div>
              {section.eyebrow && (
                <Eyebrow className="mb-1.5">
                  {section.eyebrow}
                </Eyebrow>
              )}
              <h2 className="font-display text-display-md text-bayou-ink leading-tight">
                {section.label}
              </h2>
            </div>

            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <ChevronIcon open={mobileOpen} />
              <span className="font-body text-label-sm text-bayou-stone tracking-widest uppercase">
                {availableItems.length}
              </span>
            </div>
          </button>

          {/* Animated body */}
          <AnimatePresence initial={false}>
            {mobileOpen && (
              <motion.div
                id={`section-body-${section.id}`}
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE_OUT_SMOOTH }}
                style={{ overflow: "hidden" }}
              >
                <div className="pb-8">
                  {chalkNote && (
                    <ChalkNote className="block mb-5 pl-5">
                      {chalkNote}
                    </ChalkNote>
                  )}
                  {availableItems.map((item, i) => (
                    <MenuItemRow
                      key={item.id}
                      item={item}
                      delay={i * STAGGER_BASE}
                      compact={compact}
                    />
                  ))}
                  <div className="border-t border-bayou-brass/12" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom rule when collapsed */}
          {!mobileOpen && <BrassRule className="mb-0" />}
        </div>
      </div>
    </section>
  );
}
