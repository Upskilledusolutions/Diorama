"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FadeInSection({ children }) {
  const ref = useRef(null);
  // Set once: false so it re-triggers each time the element enters view.
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
