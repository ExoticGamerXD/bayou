"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function StaggerChildren({
  children,
  className,
  delay = 0,
  once = true,
}: StaggerChildrenProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={
        reduced
          ? {}
          : {
              ...staggerContainer,
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: delay,
                },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
