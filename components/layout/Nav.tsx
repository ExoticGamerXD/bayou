"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollY } from "@/lib/hooks/useScrollY";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import NavMobile from "./NavMobile";

const navLinks = [
  { label: "Menu",    href: "/menu"    },
  { label: "About",   href: "/about"   },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 80;

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-bayou-cream/95 backdrop-blur-md border-b border-bayou-ink/10 shadow-surface"
            : "bg-transparent border-b border-transparent"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px] md:h-[80px]">

            {/* Wordmark */}
            <Link href="/" className="flex items-center group">
              <motion.span
                className={cn(
                  "font-display tracking-[0.08em] uppercase transition-colors duration-300",
                  scrolled ? "text-bayou-ink" : "text-bayou-cream"
                )}
                animate={{ fontSize: scrolled ? "1.25rem" : "1.5rem" }}
                transition={{ duration: 0.3 }}
              >
                Bayou
              </motion.span>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-body text-body-sm tracking-[0.1em] uppercase link-draw transition-colors duration-200",
                    scrolled
                      ? "text-bayou-stone hover:text-bayou-ink"
                      : "text-bayou-cream/80 hover:text-bayou-cream"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <AnimatePresence>
                {scrolled && (
                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button href="/contact" size="sm">
                      Find Us
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 group"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <span className={cn("block w-6 h-px transition-all duration-300 group-hover:bg-bayou-brass", scrolled ? "bg-bayou-ink" : "bg-bayou-cream")} />
              <span className={cn("block w-4 h-px transition-all duration-300 group-hover:bg-bayou-brass group-hover:w-6", scrolled ? "bg-bayou-ink" : "bg-bayou-cream")} />
              <span className={cn("block w-6 h-px transition-all duration-300 group-hover:bg-bayou-brass", scrolled ? "bg-bayou-ink" : "bg-bayou-cream")} />
            </button>
          </div>
        </div>
      </motion.header>

      <NavMobile
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
