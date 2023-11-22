"use client";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumber = ({ value, className }) => {
  const ref = useRef(null);

  // Animation hooks from frammer motion.
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return (
    <span
      ref={ref}
      className={`text-gray-900 dark:text-gray-200 font-bold text-4xl lg:text-3xl sm:text-2xl ${className}`}
    ></span>
  );
};

export default AnimatedNumber;
