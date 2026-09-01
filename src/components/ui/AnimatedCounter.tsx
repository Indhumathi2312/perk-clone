"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({ from, to, decimals = 0, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const count = useMotionValue(from);
  
  const rounded = useTransform(count, (latest) => 
    latest.toLocaleString("en-US", { 
      minimumFractionDigits: decimals, 
      maximumFractionDigits: decimals 
    })
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { 
        duration: 2, 
        ease: "easeOut" 
      });
      return () => controls.stop();
    }
  }, [isInView, count, to]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
