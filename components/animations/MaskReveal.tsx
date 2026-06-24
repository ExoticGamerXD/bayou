"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_SMOOTH, DUR_CINEMATIC } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MaskRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function MaskReveal({
  children,
  delay = 0,
  className,
  once = true,
}: MaskRevealProps) {
  const reduced = useReducedMotion();

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ y: reduced ? 0 : "100%", opacity: reduced ? 0 : 1 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once, margin: "-5%" }}
        transition={{
          duration: reduced ? 0.2 : DUR_CINEMATIC,
          ease: EASE_OUT_SMOOTH,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
