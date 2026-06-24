"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeSlideUp } from "@/lib/motion";

interface FadeSlideUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function FadeSlideUp({
  children,
  delay = 0,
  className,
  once = true,
}: FadeSlideUpProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={
        reduced
          ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.2 } },
            }
          : {
              ...fadeSlideUp,
              visible: {
                ...fadeSlideUp.visible,
                transition: {
                  ...(typeof fadeSlideUp.visible === "object" &&
                  "transition" in fadeSlideUp.visible
                    ? (fadeSlideUp.visible as { transition: object }).transition
                    : {}),
                  delay,
                },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
