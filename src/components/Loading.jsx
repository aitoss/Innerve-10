import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextShimmer } from "./ui/text-shimmer";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="flex inset-0 flex-col w-screen h-screen items-center z-[999] justify-center bg-black fixed"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{
              x: [0, 0, 0],
              y: [10, -10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <img
              src="/Logo.svg"
              alt="Angry Bird"
              className="w-24 object-cover"
            />
            <div className="w-2 h-40 bg-brown-500 mx-auto" />
          </motion.div>

          <div className="flex flex-col justify-center items-center gap-6 bottom-10 text-center">
            <TextShimmer
              className="text-lg font-medium truncat"
              duration={3}
              spread={5}
              as="h1"
            >
              Launching Innerve 10!
              {/* Shimmering Text */}
            </TextShimmer>
            <div className="relative w-40 h-1 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-1 bg-white"
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
