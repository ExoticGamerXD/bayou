"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MenuSection } from "@/types/menu";

interface MenuNavProps {
  sections: MenuSection[];
}

export default function MenuNav({ sections }: MenuNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const navRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Intersection observer: detect which section dominates the viewport
  useEffect(() => {
    const NAV_OFFSET = 160; // main nav (80px) + menu nav (56px) + margin (24px)

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersection ratio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${NAV_OFFSET}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Scroll active tab into view within the nav rail
  useEffect(() => {
    const btn = tabRefs.current.get(activeId);
    const nav = navRef.current;
    if (!btn || !nav) return;

    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.offsetWidth;
    const navWidth = nav.offsetWidth;
    const scrollLeft = nav.scrollLeft;

    if (btnLeft < scrollLeft + 24) {
      nav.scrollTo({ left: btnLeft - 24, behavior: "smooth" });
    } else if (btnLeft + btnWidth > scrollLeft + navWidth - 24) {
      nav.scrollTo({ left: btnLeft + btnWidth - navWidth + 24, behavior: "smooth" });
    }
  }, [activeId]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 152;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <div className="sticky top-[72px] md:top-[80px] z-40 bg-bayou-cream/95 backdrop-blur-md border-b border-bayou-ink/10 shadow-surface">
      <div className="container-site">
        <div
          ref={navRef}
          className="flex items-center gap-1 overflow-x-auto
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          role="navigation"
          aria-label="Menu sections"
        >
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                ref={(el) => {
                  if (el) tabRefs.current.set(section.id, el);
                  else tabRefs.current.delete(section.id);
                }}
                onClick={() => scrollToSection(section.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative flex-shrink-0 px-4 py-4 md:px-5",
                  "font-body text-label-lg tracking-[0.18em] uppercase whitespace-nowrap",
                  "transition-colors duration-200 outline-none",
                  "focus-visible:text-bayou-ink",
                  isActive ? "text-bayou-brass" : "text-bayou-stone hover:text-bayou-ink"
                )}
              >
                {section.label}

                {/* Animated brass underline — uses layoutId for smooth transition */}
                {isActive && (
                  <motion.span
                    layoutId="menu-nav-indicator"
                    className="absolute bottom-0 left-4 right-4 md:left-5 md:right-5 h-px bg-bayou-brass"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
