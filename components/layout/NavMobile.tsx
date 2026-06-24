"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { EASE_OUT_SMOOTH } from "@/lib/motion";

interface NavMobileProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function NavMobile({ open, onClose, links }: NavMobileProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-bayou-ink/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-bayou-teal flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: EASE_OUT_SMOOTH }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-8 h-[72px] border-b border-bayou-brass/20">
              <span className="font-display text-bayou-cream text-xl tracking-widest uppercase">
                Bayou
              </span>
              <button
                onClick={onClose}
                className="p-2 text-bayou-sage hover:text-bayou-cream transition-colors duration-200"
                aria-label="Close menu"
              >
                <span className="block w-5 h-px bg-current rotate-45 translate-y-px" />
                <span className="block w-5 h-px bg-current -rotate-45 -translate-y-px" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.4, ease: EASE_OUT_SMOOTH }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block font-display text-display-sm text-bayou-cream hover:text-bayou-brass transition-colors duration-200 py-3"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              className="px-8 pb-10 pt-6 border-t border-bayou-brass/20"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <Button href="/contact" className="w-full justify-center" onClick={onClose}>
                Reserve a Table
              </Button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
