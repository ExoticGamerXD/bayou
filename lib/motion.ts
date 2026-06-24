import type { Variants, Transition } from "framer-motion";

// ─── Easing ────────────────────────────────────────────────
export const EASE_OUT_SMOOTH  = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT_SLOW = [0.45, 0, 0.55, 1] as const;
export const EASE_BOUNCE_SOFT = [0.34, 1.56, 0.64, 1] as const;
export const EASE_DRAW_LINE   = [0.76, 0, 0.24, 1] as const;

// ─── Durations ─────────────────────────────────────────────
export const DUR_FAST     = 0.2;
export const DUR_STANDARD = 0.3;
export const DUR_SLOW     = 0.5;
export const DUR_CINEMATIC = 0.8;
export const DUR_DRAMATIC  = 1.2;

// ─── Shared transitions ────────────────────────────────────
export const transitionSmooth: Transition = {
  duration: DUR_CINEMATIC,
  ease: EASE_OUT_SMOOTH,
};

export const transitionFast: Transition = {
  duration: DUR_FAST,
  ease: EASE_OUT_SMOOTH,
};

// ─── Reusable Variants ─────────────────────────────────────
export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR_CINEMATIC, ease: EASE_OUT_SMOOTH },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DUR_CINEMATIC, ease: EASE_IN_OUT_SLOW },
  },
};

export const maskReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: DUR_CINEMATIC, ease: EASE_OUT_SMOOTH },
  },
};

export const scaleRise: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_SMOOTH },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};
