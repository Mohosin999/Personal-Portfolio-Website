"use client";
import { useEffect, useRef } from "react";
import { animate, useAnimation, useInView } from "framer-motion";

const Counter = ({ from = 0, to, duration = 1 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!inView) return;

    element.textContent = String(from);

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [from, to, duration, inView]);

  return <div ref={ref} />;
};

export default Counter;
