"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.section>
  );
}
