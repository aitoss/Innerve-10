import React, { useMemo } from "react";
import { motion } from "framer-motion";

export function TextShimmer({
  children,
  as: Component = "p",
  className = "",
  duration = 2,
  spread = 2,
}) {
  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <motion.div
      className={`relative inline-block text-transparent ${className}`}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      style={{
        backgroundImage: `linear-gradient(90deg, transparent calc(50% - ${dynamicSpread}px), #fff, transparent calc(50% + ${dynamicSpread}px))`,
        backgroundSize: "250% auto",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
      }}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}
