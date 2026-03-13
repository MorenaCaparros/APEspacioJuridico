"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

// ─── Shared easing ───────────────────────────────────────────────
const ease = [0.25, 0.4, 0.25, 1] as const;

// ─── Variants ────────────────────────────────────────────────────
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

// ─── FadeIn  ─────────────────────────────────────────────────────
// Standalone fade-in-up triggered by scroll (whileInView).
interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 24,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerContainer ────────────────────────────────────────────
// Orchestrates children that use `variants` (e.g. StaggerItem).
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  delayChildren = 0,
  staggerDelay = 0.12,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ─────────────────────────────────────────────────
// Must live inside a StaggerContainer.
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// Re-export motion for direct use in components
export { motion };
